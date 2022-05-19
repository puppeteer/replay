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
import {
  UserFlow,
  Step,
  WaitForElementStep,
  Selector,
  Key,
  ChangeStep,
} from './Schema.js';
import {
  assertAllStepTypesAreHandled,
  mouseButtonMap,
  typeableInputTypes,
} from './SchemaUtils.js';

export class PuppeteerRunnerExtension extends RunnerExtension {
  protected browser: Browser;
  protected page: Page;
  protected timeout: number;

  constructor(browser: Browser, page: Page, opts?: { timeout?: number }) {
    super();
    this.browser = browser;
    this.page = page;
    this.timeout = opts?.timeout || 5000;
  }

  async #ensureAutomationEmulatation(pageOrFrame: Page | Frame) {
    try {
      await pageOrFrame
        .client()
        .send('Emulation.setAutomationOverride', { enabled: true });
    } catch {
      // ignore errors as not all versions support this command.
    }
  }

  #getTimeoutForStep(step: Step, flow: UserFlow): number {
    return step.timeout || flow.timeout || this.timeout;
  }

  async runStep(step: Step, flow: UserFlow): Promise<void> {
    const timeout = this.#getTimeoutForStep(step, flow);
    const page = this.page;
    const browser = this.browser;

    const targetPage = await getTargetPageForStep(browser, page, step, timeout);
    let targetFrame: Frame | null = null;

    if (!targetPage && step.target) {
      const frames = page.frames();
      for (const f of frames) {
        if (f.isOOPFrame() && f.url() === step.target) {
          targetFrame = f;
          break;
        }
      }
      if (!targetFrame) {
        targetFrame = await page.waitForFrame(step.target, { timeout });
      }
    }
    const targetPageOrFrame = targetFrame || targetPage;
    if (!targetPageOrFrame) {
      throw new Error('Target is not found for step: ' + JSON.stringify(step));
    }
    await this.#ensureAutomationEmulatation(targetPageOrFrame);
    const localFrame = await getFrame(targetPageOrFrame, step);
    await this.runStepInFrame(
      step,
      page,
      targetPageOrFrame,
      localFrame,
      timeout
    );
  }

  /**
   * @internal
   */
  async runStepInFrame(
    step: Step,
    mainPage: Page,
    targetPageOrFrame: Page | Frame,
    localFrame: Frame,
    timeout: number
  ): Promise<void> {
    const waitForVisible = true;
    let assertedEventsPromise = null;
    const startWaitingForEvents = () => {
      assertedEventsPromise = waitForEvents(localFrame, step, timeout);
    };

    switch (step.type) {
      case 'doubleClick':
        {
          const element = await waitForSelectors(step.selectors, localFrame, {
            timeout,
            visible: waitForVisible,
          });
          if (!element) {
            throw new Error('Could not find element: ' + step.selectors[0]);
          }
          await scrollIntoViewIfNeeded(element, timeout);
          startWaitingForEvents();
          await element.click({
            clickCount: 2,
            button: step.button && mouseButtonMap.get(step.button),
            offset: {
              x: step.offsetX,
              y: step.offsetY,
            },
          });
          await element.dispose();
        }
        break;
      case 'click':
        {
          const element = await waitForSelectors(step.selectors, localFrame, {
            timeout,
            visible: waitForVisible,
          });
          if (!element) {
            throw new Error('Could not find element: ' + step.selectors[0]);
          }
          await scrollIntoViewIfNeeded(element, timeout);
          startWaitingForEvents();
          await element.click({
            delay: step.duration,
            button: step.button && mouseButtonMap.get(step.button),
            offset: {
              x: step.offsetX,
              y: step.offsetY,
            },
          });
          await element.dispose();
        }
        break;
      case 'hover':
        {
          const element = await waitForSelectors(step.selectors, localFrame, {
            timeout,
            visible: waitForVisible,
          });
          if (!element) {
            throw new Error('Could not find element: ' + step.selectors[0]);
          }
          await scrollIntoViewIfNeeded(element, timeout);
          startWaitingForEvents();
          await element.hover();
          await element.dispose();
        }
        break;
      case 'emulateNetworkConditions':
        {
          startWaitingForEvents();
          await mainPage.emulateNetworkConditions(step);
        }
        break;
      case 'keyDown':
        {
          startWaitingForEvents();
          await mainPage.keyboard.down(step.key);
          await mainPage.waitForTimeout(100);
        }
        break;
      case 'keyUp':
        {
          startWaitingForEvents();
          await mainPage.keyboard.up(step.key);
          await mainPage.waitForTimeout(100);
        }
        break;
      case 'close':
        {
          if ('close' in targetPageOrFrame) {
            startWaitingForEvents();
            await targetPageOrFrame.close();
          }
        }
        break;
      case 'change':
        {
          const element = await waitForSelectors(step.selectors, localFrame, {
            timeout,
            visible: waitForVisible,
          });
          await scrollIntoViewIfNeeded(element, timeout);
          const inputType = await element.evaluate(
            /* c8 ignore next 1 */
            (el: Element) => (el as HTMLInputElement).type
          );
          startWaitingForEvents();
          if (inputType === 'select-one') {
            await this.changeSelectElement(step, element);
          } else if (typeableInputTypes.has(inputType)) {
            await this.typeIntoElement(step, element);
          } else {
            await this.changeElementValue(step, element);
          }
          await element.dispose();
        }
        break;
      case 'setViewport': {
        if ('setViewport' in targetPageOrFrame) {
          startWaitingForEvents();
          await targetPageOrFrame.setViewport(step);
        }
        break;
      }
      case 'scroll': {
        if ('selectors' in step) {
          const element = await waitForSelectors(step.selectors, localFrame, {
            timeout,
            visible: waitForVisible,
          });
          await scrollIntoViewIfNeeded(element, timeout);
          startWaitingForEvents();
          await element.evaluate(
            (e: Element, x: number, y: number) => {
              /* c8 ignore next 2 */
              e.scrollTop = y;
              e.scrollLeft = x;
            },
            step.x || 0,
            step.y || 0
          );
          await element.dispose();
        } else {
          startWaitingForEvents();
          await localFrame.evaluate(
            (x, y) => {
              /* c8 ignore next 1 */
              window.scroll(x, y);
            },
            step.x || 0,
            step.y || 0
          );
        }
        break;
      }
      case 'navigate': {
        startWaitingForEvents();
        let url = step.url;

        if (process.env.BASE_URL) {
          try {
            const baseURL = new URL(process.env.BASE_URL);
            const givenURL = new URL(step.url);
            const targetURL = new URL(
              givenURL.pathname +
                (givenURL.search || '') +
                (givenURL.hash || ''),
              baseURL.origin
            );

            url = targetURL.href;
          } catch (error) {
            throw new Error(`invalid URL BASE_URL: ${process.env.BASE_URL}`);
          }
        }

        await localFrame.goto(url);
        break;
      }
      case 'waitForElement': {
        try {
          startWaitingForEvents();
          await waitForElement(step, localFrame, timeout);
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
        startWaitingForEvents();
        await localFrame.waitForFunction(step.expression, {
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

  /**
   * @internal
   */
  async typeIntoElement(step: ChangeStep, element: ElementHandle<Element>) {
    const textToType = await element.evaluate(
      (el: Element, newValue: string) => {
        /* c8 ignore next 13 */
        const input = el as HTMLInputElement;
        if (
          newValue.length <= input.value.length ||
          !newValue.startsWith(input.value)
        ) {
          input.value = '';
          return newValue;
        }
        const originalValue = input.value;
        // Move cursor to the end of the common prefix.
        input.value = '';
        input.value = originalValue;
        return newValue.substring(originalValue.length);
      },
      step.value
    );
    await element.type(textToType);
  }

  /**
   * @internal
   */
  async changeElementValue(step: ChangeStep, element: ElementHandle<Element>) {
    await element.focus();
    await element.evaluate((el: Element, value: string) => {
      /* c8 ignore next 4 */
      const input = el as HTMLInputElement;
      input.value = value;
      input.dispatchEvent(new Event('input', { bubbles: true }));
      input.dispatchEvent(new Event('change', { bubbles: true }));
    }, step.value);
  }

  /**
   * @internal
   */
  async changeSelectElement(step: ChangeStep, element: ElementHandle<Element>) {
    await element.select(step.value);
    await element.evaluateHandle((el: Element) => {
      /* c8 ignore next 3 */
      const htmlEl = el as HTMLElement;
      htmlEl.blur();
      htmlEl.focus();
    });
  }
}

export class PuppeteerRunnerOwningBrowserExtension extends PuppeteerRunnerExtension {
  async afterAllSteps() {
    await this.browser.close();
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
  pageOrFrame: Page | Frame,
  step: Step,
  timeout: number
): Promise<void> {
  const promises: Promise<unknown>[] = [];
  if (step.assertedEvents) {
    for (const event of step.assertedEvents) {
      switch (event.type) {
        case 'navigation': {
          promises.push(
            pageOrFrame.waitForNavigation({
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
  const isSvg = await element.evaluate((element: Element) => {
    /* c8 ignore next 1 */
    return element instanceof SVGElement;
  });
  const intersectionTarget = isSvg
    ? await getOwnerSVGElement(element)
    : element;
  const isInViewport = intersectionTarget
    ? await intersectionTarget.isIntersectingViewport({ threshold: 0 })
    : false;
  if (isInViewport) {
    return;
  }
  await scrollIntoView(element);
  if (intersectionTarget) {
    await waitForInViewport(intersectionTarget, timeout);
  }
}

async function getOwnerSVGElement(
  element: ElementHandle<Element>
): Promise<ElementHandle<Element> | null> {
  return (
    await element.evaluateHandle((element: Element) => {
      /* c8 ignore next 1 */
      return (element as SVGElement).ownerSVGElement;
    })
  ).asElement();
}

async function scrollIntoView(element: ElementHandle<Element>): Promise<void> {
  await element.evaluate((element: Element) => {
    /* c8 ignore next 5 */
    element.scrollIntoView({
      block: 'center',
      inline: 'center',
      behavior: 'auto',
    });
  });
}

async function waitForConnected(
  element: ElementHandle<Element>,
  timeout: number
): Promise<void> {
  await waitForFunction(async () => {
    /* c8 ignore next 1 */
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
  close(): Promise<void>;
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
    delay?: number;
    button?: 'left' | 'right' | 'middle' | 'back' | 'forward';
    clickCount?: number;
    offset: {
      x: number;
      y: number;
    };
  }): Promise<void>;
  type(input: string): Promise<void>;
  hover(): Promise<void>;
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
  select(...args: string[]): Promise<unknown>;
}

interface CDPSession {
  send(command: string, opts: { enabled: boolean }): Promise<unknown>;
}

interface Page {
  setDefaultTimeout(timeout: number): void;
  frames(): Frame[];
  emulateNetworkConditions(conditions: any): void;
  keyboard: {
    type(value: string): Promise<void>;
    down(key: Key): Promise<void>;
    up(key: Key): Promise<void>;
  };
  waitForTimeout(timeout: number): Promise<void>;
  close(): Promise<void>;
  setViewport(viewport: any): Promise<void>;
  mainFrame(): Frame;
  waitForNavigation(opts: { timeout: number }): Promise<unknown>;
  $$<T extends Element = Element>(
    selector: string
  ): Promise<Array<ElementHandle<T>>>;
  waitForFrame(url: string, opts: { timeout: number }): Promise<Frame>;
  client(): CDPSession;
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
  client(): CDPSession;
}
