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

import { Browser, ElementHandle, Frame, Page } from 'puppeteer';
import { Frame as InternalFrame } from 'puppeteer/lib/esm/puppeteer/common/Frame.js';
import { Page as InternalPage } from 'puppeteer/lib/esm/puppeteer/common/Page.js';
import { RunnerExtension } from './RunnerExtension.js';
import {
  ChangeStep,
  Selector,
  Step,
  UserFlow,
  WaitForElementStep,
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
      await (pageOrFrame as unknown as InternalPage | InternalFrame)
        ._client()
        .send('Emulation.setAutomationOverride', { enabled: true });
    } catch {
      // ignore errors as not all versions support this command.
    }
  }

  #getTimeoutForStep(step: Step, flow: UserFlow): number {
    return step.timeout || flow.timeout || this.timeout;
  }

  override async runStep(step: Step, flow: UserFlow): Promise<void> {
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
          const element = (await waitForSelectors(step.selectors, localFrame, {
            timeout,
            visible: waitForVisible,
          })) as ElementHandle<HTMLInputElement>;
          await scrollIntoViewIfNeeded(element, timeout);
          const inputType = await element.evaluate(
            /* c8 ignore start */
            (el) => el.type
            /* c8 ignore stop */
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
            (e, x, y) => {
              /* c8 ignore start */
              e.scrollTop = y;
              e.scrollLeft = x;
              /* c8 ignore stop */
            },
            step.x || 0,
            step.y || 0
          );
          await element.dispose();
        } else {
          startWaitingForEvents();
          await localFrame.evaluate(
            (x, y) => {
              /* c8 ignore start */
              window.scroll(x, y);
              /* c8 ignore stop */
            },
            step.x || 0,
            step.y || 0
          );
        }
        break;
      }
      case 'navigate': {
        startWaitingForEvents();
        await localFrame.goto(step.url);
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
  async typeIntoElement(
    step: ChangeStep,
    element: ElementHandle<HTMLInputElement>
  ) {
    const textToType = await element.evaluate((input, newValue) => {
      /* c8 ignore start */
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
      /* c8 ignore stop */
    }, step.value);
    await element.type(textToType);
  }

  /**
   * @internal
   */
  async changeElementValue(
    step: ChangeStep,
    element: ElementHandle<HTMLInputElement>
  ) {
    await element.focus();
    await element.evaluate((input, value) => {
      /* c8 ignore start */
      input.value = value;
      input.dispatchEvent(new Event('input', { bubbles: true }));
      input.dispatchEvent(new Event('change', { bubbles: true }));
      /* c8 ignore stop */
    }, step.value);
  }

  /**
   * @internal
   */
  async changeSelectElement(
    step: ChangeStep,
    element: ElementHandle<HTMLElement>
  ) {
    await element.select(step.value);
    await element.evaluateHandle((e) => {
      /* c8 ignore start */
      e.blur();
      e.focus();
      /* c8 ignore stop */
    });
  }
}

export class PuppeteerRunnerOwningBrowserExtension extends PuppeteerRunnerExtension {
  override async afterAllSteps() {
    await this.browser.close();
  }
}

async function getFrame(pageOrFrame: Page | Frame, step: Step): Promise<Frame> {
  let frame =
    'mainFrame' in pageOrFrame ? pageOrFrame.mainFrame() : pageOrFrame;
  if ('frame' in step && step.frame) {
    for (const index of step.frame) {
      frame = frame.childFrames()[index]!;
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

const asSVGElementHandle = async (
  handle: ElementHandle<Element>
): Promise<ElementHandle<SVGElement> | null> => {
  if (
    await handle.evaluate((element) => {
      /* c8 ignore start */
      return element instanceof SVGElement;
      /* c8 ignore stop */
    })
  ) {
    return handle as ElementHandle<SVGElement>;
  } else {
    return null;
  }
};

async function scrollIntoViewIfNeeded(
  element: ElementHandle<Element>,
  timeout: number
): Promise<void> {
  await waitForConnected(element, timeout);
  const svgHandle = await asSVGElementHandle(element);
  const intersectionTarget = svgHandle
    ? await getOwnerSVGElement(svgHandle)
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
  handle: ElementHandle<SVGElement>
): Promise<ElementHandle<SVGSVGElement>> {
  return await handle.evaluateHandle((element) => {
    /* c8 ignore start */
    return element.ownerSVGElement!;
    /* c8 ignore stop */
  });
}

async function scrollIntoView(element: ElementHandle<Element>): Promise<void> {
  await element.evaluate((element) => {
    /* c8 ignore start */
    element.scrollIntoView({
      block: 'center',
      inline: 'center',
      behavior: 'auto',
    });
    /* c8 ignore stop */
  });
}

async function waitForConnected(
  element: ElementHandle<Element>,
  timeout: number
): Promise<void> {
  await waitForFunction(async () => {
    /* c8 ignore start */
    return await element.evaluate((el) => el.isConnected);
    /* c8 ignore stop */
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
    throw new Error('Empty selector provided to `waitForSelector`');
  }
  let isLastPart = selector.length === 1;
  let handle = await frame.waitForSelector(selector[0]!, {
    ...options,
    visible: isLastPart && options.visible,
  });
  for (const part of selector.slice(1, selector.length)) {
    if (!handle) {
      throw new Error('Could not find element: ' + selector.join('>>'));
    }
    const innerHandle = await handle.evaluateHandle((el) =>
      el.shadowRoot ? el.shadowRoot : el
    );
    handle.dispose();
    isLastPart = selector[selector.length - 1] === part;
    handle = await innerHandle.waitForSelector(part, {
      ...options,
      visible: isLastPart && options.visible,
    });
    innerHandle.dispose();
  }
  if (!handle) {
    throw new Error('Could not find element: ' + selector.join('>>'));
  }
  return handle;
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
  let elementHandles = await frame.$$(selector[0]!);
  if (!elementHandles.length) {
    return [];
  }
  for (const part of selector.slice(1, selector.length)) {
    elementHandles = (
      await Promise.all(
        elementHandles.map(async (handle) => {
          const innerHandle = await handle.evaluateHandle((el) =>
            el.shadowRoot ? el.shadowRoot : el
          );
          const elementHandles = await innerHandle.$$(part);
          innerHandle.dispose();
          handle.dispose();
          return elementHandles;
        })
      )
    ).flat();
    if (!elementHandles.length) {
      return [];
    }
  }
  return elementHandles;
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
