/**
    Copyright 2022 Google LLC

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        https://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
 */

import { RunnerExtension } from './RunnerExtension.js';
import { UserFlow, Step, WaitForElementStep, Selector, Key } from './Schema.js';
import {
  assertAllStepTypesAreHandled,
  typeableInputTypes,
} from './SchemaUtils.js';

export class PuppeteerRunnerExtension implements RunnerExtension {
  #browser: Browser;
  #page: Page;
  #timeout: number;

  constructor(browser: Browser, page: Page, opts?: { timeout?: number }) {
    this.#browser = browser;
    this.#page = page;
    this.#timeout = opts?.timeout || 5000;
  }

  async runStep(step: Step, flow: UserFlow): Promise<void> {
    const timeout = step.timeout || this.#timeout;
    const page = this.#page;
    const browser = this.#browser;
    const waitForVisible = true;

    const targetPage = await getTargetPageForStep(browser, page, step, timeout);
    let targetFrame: Frame | null = null;
    if (!targetPage) {
      const frames = page.frames();
      for (const f of frames) {
        if (f.isOOPFrame() && f.url() === step.target) {
          targetFrame = f;
        }
      }
    }
    const pageOrFrame = targetPage || targetFrame;
    if (!pageOrFrame) {
      throw new Error('Target is not found for step: ' + JSON.stringify(step));
    }

    const frame = await getFrame(pageOrFrame, step);

    const assertedEventsPromise = waitForEvents(pageOrFrame, step, timeout);

    switch (step.type) {
      case 'click':
        {
          const element = await waitForSelectors(step.selectors, frame, {
            timeout,
            visible: waitForVisible,
          });
          if (!element) {
            throw new Error('Could not find element: ' + step.selectors[0]);
          }
          await scrollIntoViewIfNeeded(element, timeout);
          await element.click({
            offset: {
              x: step.offsetX,
              y: step.offsetY,
            },
          });
          await element.dispose();
        }
        break;
      case 'emulateNetworkConditions':
        {
          await page.emulateNetworkConditions(step);
        }
        break;
      case 'keyDown':
        {
          await page.keyboard.down(step.key);
          await page.waitForTimeout(100);
        }
        break;
      case 'keyUp':
        {
          await page.keyboard.up(step.key);
          await page.waitForTimeout(100);
        }
        break;
      case 'close':
        {
          if ('close' in pageOrFrame) {
            await pageOrFrame.close();
          }
        }
        break;
      case 'change':
        {
          const element = await waitForSelectors(step.selectors, frame, {
            timeout,
            visible: waitForVisible,
          });
          await scrollIntoViewIfNeeded(element, timeout);
          const inputType = await element.evaluate(
            (el: Element) => (el as HTMLInputElement).type
          );
          if (typeableInputTypes.has(inputType)) {
            await element.evaluate((el: Element) => {
              (el as HTMLInputElement).value = '';
            });
            await element.type(step.value);
          } else {
            await element.focus();
            await element.evaluate((el: Element, value: string) => {
              const input = el as HTMLInputElement;
              input.value = value;
              input.dispatchEvent(new Event('input', { bubbles: true }));
              input.dispatchEvent(new Event('change', { bubbles: true }));
            }, step.value);
          }
          await element.dispose();
        }
        break;
      case 'setViewport': {
        if ('setViewport' in pageOrFrame) {
          await pageOrFrame.setViewport(step);
        }
        break;
      }
      case 'scroll': {
        if ('selectors' in step) {
          const element = await waitForSelectors(step.selectors, frame, {
            timeout,
            visible: waitForVisible,
          });
          await scrollIntoViewIfNeeded(element, timeout);
          await element.evaluate(
            (e: Element, x: number, y: number) => {
              e.scrollTop = y;
              e.scrollLeft = x;
            },
            step.x || 0,
            step.y || 0
          );
          await element.dispose();
        } else {
          await frame.evaluate(
            (x, y) => {
              window.scroll(x, y);
            },
            step.x || 0,
            step.y || 0
          );
        }
        break;
      }
      case 'navigate': {
        await frame.goto(step.url);
        break;
      }
      case 'waitForElement': {
        try {
          await waitForElement(step, frame, timeout);
        } catch (err) {
          if ((err as Error).message === 'Timed out') {
            throw new Error(
              'waitForElement timed out. The element(s) could not be found.'
            );
          } else {
            throw err;
          }
        }
        break;
      }
      case 'waitForExpression': {
        await frame.waitForFunction(step.expression, {
          timeout,
        });
        break;
      }
      case 'customStep': {
        // TODO implement these steps
        break;
      }
      default:
        assertAllStepTypesAreHandled(step);
    }

    await assertedEventsPromise;
  }
}

async function getFrame(pageOrFrame: Page | Frame, step: Step): Promise<Frame> {
  let frame =
    'mainFrame' in pageOrFrame ? pageOrFrame.mainFrame() : pageOrFrame;
  if ('frame' in step && step.frame) {
    for (const index of step.frame) {
      frame = frame.childFrames()[index];
    }
  }
  return frame;
}

async function getTargetPageForStep(
  browser: Browser,
  page: Page,
  step: Step,
  timeout: number
): Promise<Page | null> {
  if (!step.target || step.target === 'main') {
    return page;
  }

  const target = await browser.waitForTarget((t) => t.url() === step.target, {
    timeout,
  });
  const targetPage = await target.page();

  if (!targetPage) {
    return null;
  }

  targetPage.setDefaultTimeout(timeout);

  return targetPage;
}

async function waitForEvents(
  targetPage: Page | Frame,
  step: Step,
  timeout: number
): Promise<void> {
  const promises: Promise<unknown>[] = [];
  if (step.assertedEvents) {
    for (const event of step.assertedEvents) {
      switch (event.type) {
        case 'navigation': {
          promises.push(
            targetPage.waitForNavigation({
              timeout,
            })
          );
          continue;
        }
        default:
          throw new Error(`Event type ${event.type} is not supported`);
      }
    }
  }
  await Promise.all(promises);
}

async function waitForElement(
  step: WaitForElementStep,
  frame: Frame | Page,
  timeout: number
): Promise<void> {
  const count = step.count || 1;
  const operator = step.operator || '>=';
  const comp = {
    '==': (a: number, b: number): boolean => a === b,
    '>=': (a: number, b: number): boolean => a >= b,
    '<=': (a: number, b: number): boolean => a <= b,
  };
  const compFn = comp[operator];
  await waitForFunction(async () => {
    const elements = await querySelectorsAll(step.selectors, frame);
    const result = compFn(elements.length, count);
    await Promise.all(elements.map((element) => element.dispose()));
    return result;
  }, timeout);
}

async function scrollIntoViewIfNeeded(
  element: ElementHandle<Element>,
  timeout: number
): Promise<void> {
  await waitForConnected(element, timeout);
  const isInViewport = await element.isIntersectingViewport({ threshold: 0 });
  if (isInViewport) {
    return;
  }
  await element.evaluate((element: Element) => {
    element.scrollIntoView({
      block: 'center',
      inline: 'center',
      behavior: 'auto',
    });
  });
  await waitForInViewport(element, timeout);
}

async function waitForConnected(
  element: ElementHandle<Element>,
  timeout: number
): Promise<void> {
  await waitForFunction(async () => {
    return await element.evaluate((el: Element) => el.isConnected);
  }, timeout);
}

async function waitForInViewport(
  element: ElementHandle<Element>,
  timeout: number
): Promise<void> {
  await waitForFunction(async () => {
    return await element.isIntersectingViewport({ threshold: 0 });
  }, timeout);
}

interface WaitForOptions {
  timeout: number;
  visible: boolean;
}

async function waitForSelectors(
  selectors: Selector[],
  frame: Frame,
  options: WaitForOptions
): Promise<ElementHandle<Element>> {
  for (const selector of selectors) {
    try {
      return await waitForSelector(selector, frame, options);
    } catch (err) {
      console.error('error in waitForSelectors', err);
      // TODO: report the error somehow
    }
  }
  throw new Error(
    'Could not find element for selectors: ' + JSON.stringify(selectors)
  );
}

async function waitForSelector(
  selector: Selector,
  frame: Frame,
  options: WaitForOptions
): Promise<ElementHandle<Element>> {
  if (!Array.isArray(selector)) {
    selector = [selector];
  }
  if (!selector.length) {
    throw new Error('Empty selector provided to waitForSelector');
  }
  let element = null;
  for (let i = 0; i < selector.length; i++) {
    const part = selector[i];
    if (!element) {
      element = await frame.waitForSelector(part, options);
    } else {
      const oldElement = element;
      element = await element.waitForSelector(part, options);
      await oldElement.dispose();
    }
    if (!element) {
      throw new Error('Could not find element: ' + selector.join('>>'));
    }
    if (i < selector.length - 1) {
      // if not the last part, try to navigate into shadowRoot
      const oldElement = element;
      element = (
        await element.evaluateHandle((el: Element) =>
          el.shadowRoot ? el.shadowRoot : el
        )
      ).asElement();
      await oldElement.dispose();
    }
  }
  if (!element) {
    throw new Error('Could not find element: ' + selector.join('|'));
  }
  return element;
}

async function querySelectorsAll(
  selectors: Selector[],
  frame: Frame | Page
): Promise<ElementHandle<Element>[]> {
  for (const selector of selectors) {
    const result = await querySelectorAll(selector, frame);
    if (result.length) {
      return result;
    }
  }
  return [];
}

async function querySelectorAll(
  selector: Selector,
  frame: Frame | Page
): Promise<ElementHandle<Element>[]> {
  if (!Array.isArray(selector)) {
    selector = [selector];
  }
  if (!selector.length) {
    throw new Error('Empty selector provided to querySelectorAll');
  }
  let elements: ElementHandle<Element>[] = [];
  for (let i = 0; i < selector.length; i++) {
    const part = selector[i];
    if (i === 0) {
      elements = await frame.$$(part);
    } else {
      const tmpElements = elements;
      elements = [];
      for (const el of tmpElements) {
        elements.push(...(await el.$$(part)));
        await el.dispose();
      }
    }
    if (elements.length === 0) {
      return [];
    }
    if (i < selector.length - 1) {
      const tmpElements: ElementHandle<Element>[] = [];
      // if not the last part, try to navigate into shadowRoot
      for (const el of elements) {
        const newEl = (
          await el.evaluateHandle((el: Element) =>
            el.shadowRoot ? el.shadowRoot : el
          )
        ).asElement();
        if (newEl) {
          tmpElements.push(newEl);
        }
        await el.dispose();
      }
      elements = tmpElements;
    }
  }
  return elements;
}

async function waitForFunction(
  fn: () => unknown,
  timeout: number
): Promise<void> {
  let isActive = true;
  setTimeout(() => {
    isActive = false;
  }, timeout);
  while (isActive) {
    const result = await fn();
    if (result) {
      return;
    }
    await new Promise((resolve) => setTimeout(resolve, 100));
  }
  throw new Error('Timed out');
}

// Partial description of Puppeteer API below to allow runtime dependencies.
type EvaluateFn<T = any> = string | ((arg1: T, ...args: any[]) => any);
type EvaluateFnReturnType<T extends EvaluateFn> = T extends (
  ...args: any[]
) => infer R
  ? R
  : any;
type SerializableOrJSHandle = Serializable | JSHandle;
type JSONArray = readonly Serializable[];
interface JSONObject {
  [key: string]: Serializable;
}
type Serializable =
  | number
  | string
  | boolean
  | null
  | BigInt
  | JSONArray
  | JSONObject;
type UnwrapPromiseLike<T> = T extends PromiseLike<infer U> ? U : T;

interface Target {
  url(): string;
  page(): Promise<Page | null>;
}

export interface WaitForTargetOptions {
  /**
   * Maximum wait time in milliseconds. Pass `0` to disable the timeout.
   * @defaultValue 30 seconds.
   */
  timeout?: number;
}

interface Browser {
  waitForTarget(
    predicate: (x: Target) => boolean,
    options?: WaitForTargetOptions
  ): Promise<Target>;
}

interface JSHandle<HandleObjectType = unknown> {
  // TODO: fix the type of evaluate.
  evaluate<T extends EvaluateFn<HandleObjectType>>(
    ...args: any[]
  ): Promise<UnwrapPromiseLike<EvaluateFnReturnType<T>>>;
  // TODO: fix the type of evaluateHandle.
  evaluateHandle(...args: any[]): Promise<JSHandle<Element>>;
  asElement(): ElementHandle<Element> | null;
}

interface ElementHandle<ElementType extends Element>
  extends JSHandle<ElementType> {
  isIntersectingViewport(opts: { threshold: number }): Promise<boolean>;
  dispose(): Promise<void>;
  click(opts: {
    offset: {
      x: number;
      y: number;
    };
  }): Promise<void>;
  type(input: string): Promise<void>;
  focus(): Promise<void>;
  $$<T extends Element = Element>(
    selector: string
  ): Promise<Array<ElementHandle<T>>>;
  waitForSelector(
    selector: string,
    options?: {
      visible?: boolean;
      hidden?: boolean;
      timeout?: number;
    }
  ): Promise<ElementHandle<Element> | null>;
  asElement(): ElementHandle<ElementType> | null;
}

interface Page {
  setDefaultTimeout(timeout: number): void;
  frames(): Frame[];
  emulateNetworkConditions(conditions: any): void;
  keyboard: {
    type(value: string): void;
    down(key: Key): void;
    up(key: Key): void;
  };
  waitForTimeout(timeout: number): Promise<void>;
  close(): Promise<void>;
  setViewport(viewport: any): Promise<void>;
  mainFrame(): Frame;
  waitForNavigation(opts: { timeout: number }): Promise<unknown>;
  $$<T extends Element = Element>(
    selector: string
  ): Promise<Array<ElementHandle<T>>>;
}

interface Frame {
  waitForSelector(
    part: string,
    options: WaitForOptions
  ): Promise<ElementHandle<Element> | null>;
  isOOPFrame(): boolean;
  url(): string;
  evaluate<T extends EvaluateFn>(
    pageFunction: T,
    ...args: SerializableOrJSHandle[]
  ): Promise<UnwrapPromiseLike<EvaluateFnReturnType<T>>>;
  goto(url: string): Promise<unknown>;
  waitForFunction(expr: string, opts: { timeout: number }): Promise<unknown>;
  childFrames(): Frame[];
  waitForNavigation(opts: { timeout: number }): Promise<unknown>;
  $$<T extends Element = Element>(
    selector: string
  ): Promise<Array<ElementHandle<T>>>;
}
