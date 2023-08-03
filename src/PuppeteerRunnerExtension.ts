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
import type {
  Browser,
  ElementHandle,
  Frame,
  LocatorEmittedEvents,
  Page,
} from 'puppeteer';
import { Frame as InternalFrame } from 'puppeteer-core/internal/common/Frame.js';
import { CDPPage as InternalPage } from 'puppeteer-core/internal/common/Page.js';
import { RunnerExtension } from './RunnerExtension.js';
import {
  AssertedEventType,
  Selector,
  Step,
  StepType,
  UserFlow,
  WaitForElementStep,
} from './Schema.js';
import {
  assertAllStepTypesAreHandled,
  selectorToPElementSelector,
  mouseButtonMap,
} from './SchemaUtils.js';

const comparators = {
  '==': (a: number, b: number): boolean => a === b,
  '>=': (a: number, b: number): boolean => a >= b,
  '<=': (a: number, b: number): boolean => a <= b,
};

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

  #getTimeoutForStep(step: Step, flow?: UserFlow): number {
    return step.timeout || flow?.timeout || this.timeout;
  }

  override async runStep(step: Step, flow?: UserFlow): Promise<void> {
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
    let assertedEventsPromise = null;
    const startWaitingForEvents = () => {
      assertedEventsPromise = waitForEvents(localFrame, step, timeout);
    };
    const locatorRace = (this.page as unknown as InternalPage).locatorRace;

    switch (step.type) {
      case StepType.DoubleClick:
        await locatorRace(
          step.selectors.map((selector) => {
            return (localFrame as unknown as InternalFrame).locator(
              selectorToPElementSelector(selector)
            );
          })
        )
          .setTimeout(timeout)
          .on('action' as LocatorEmittedEvents.Action, () =>
            startWaitingForEvents()
          )
          .click({
            count: 2,
            button: step.button && mouseButtonMap.get(step.button),
            delay: step.duration,
            offset: {
              x: step.offsetX,
              y: step.offsetY,
            },
          });
        break;
      case StepType.Click:
        await locatorRace(
          step.selectors.map((selector) => {
            return (localFrame as unknown as InternalFrame).locator(
              selectorToPElementSelector(selector)
            );
          })
        )
          .setTimeout(timeout)
          .on('action' as LocatorEmittedEvents.Action, () =>
            startWaitingForEvents()
          )
          .click({
            delay: step.duration,
            button: step.button && mouseButtonMap.get(step.button),
            offset: {
              x: step.offsetX,
              y: step.offsetY,
            },
          });
        break;
      case StepType.Hover:
        await locatorRace(
          step.selectors.map((selector) => {
            return (localFrame as unknown as InternalFrame).locator(
              selectorToPElementSelector(selector)
            );
          })
        )
          .setTimeout(timeout)
          .on('action' as LocatorEmittedEvents.Action, () =>
            startWaitingForEvents()
          )
          .hover();
        break;
      case StepType.EmulateNetworkConditions:
        {
          startWaitingForEvents();
          await mainPage.emulateNetworkConditions(step);
        }
        break;
      case StepType.KeyDown:
        {
          startWaitingForEvents();
          await mainPage.keyboard.down(step.key);
          await mainPage.waitForTimeout(100);
        }
        break;
      case StepType.KeyUp:
        {
          startWaitingForEvents();
          await mainPage.keyboard.up(step.key);
          await mainPage.waitForTimeout(100);
        }
        break;
      case StepType.Close:
        {
          if ('close' in targetPageOrFrame) {
            startWaitingForEvents();
            await targetPageOrFrame.close();
          }
        }
        break;
      case StepType.Change:
        await locatorRace(
          step.selectors.map((selector) => {
            return (localFrame as unknown as InternalFrame).locator(
              selectorToPElementSelector(selector)
            );
          })
        )
          .on('action' as LocatorEmittedEvents.Action, () =>
            startWaitingForEvents()
          )
          .setTimeout(timeout)
          .fill(step.value);
        break;
      case StepType.SetViewport: {
        if ('setViewport' in targetPageOrFrame) {
          startWaitingForEvents();
          await targetPageOrFrame.setViewport(step);
        }
        break;
      }
      case StepType.Scroll: {
        if ('selectors' in step) {
          await locatorRace(
            step.selectors.map((selector) => {
              return (localFrame as unknown as InternalFrame).locator(
                selectorToPElementSelector(selector)
              );
            })
          )
            .on('action' as LocatorEmittedEvents.Action, () =>
              startWaitingForEvents()
            )
            .setTimeout(timeout)
            .scroll({
              scrollLeft: step.x || 0,
              scrollTop: step.y || 0,
            });
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
      case StepType.Navigate: {
        startWaitingForEvents();
        await localFrame.goto(step.url);
        break;
      }
      case StepType.WaitForElement: {
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
      case StepType.WaitForExpression: {
        startWaitingForEvents();
        await localFrame.waitForFunction(step.expression, {
          timeout,
        });
        break;
      }
      case StepType.CustomStep: {
        // TODO implement these steps
        break;
      }
      default:
        assertAllStepTypesAreHandled(step);
    }

    await assertedEventsPromise;
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
        case AssertedEventType.Navigation: {
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
  const {
    count = 1,
    operator = '>=',
    visible = true,
    properties,
    attributes,
  } = step;
  const compFn = comparators[operator];
  await waitForFunction(async () => {
    const elements = await querySelectorsAll(step.selectors, frame);
    let result = compFn(elements.length, count);
    const elementsHandle = await frame.evaluateHandle(
      (...elements) => {
        return elements;
      },
      ...elements
    );
    await Promise.all(elements.map((element) => element.dispose()));
    if (result && (properties || attributes)) {
      result = await elementsHandle.evaluate(
        (elements, properties, attributes) => {
          if (attributes) {
            for (const element of elements) {
              for (const [name, value] of Object.entries(attributes)) {
                if (element.getAttribute(name) !== value) {
                  return false;
                }
              }
            }
          }
          if (properties) {
            for (const element of elements) {
              if (!isDeepMatch(properties, element)) {
                return false;
              }
            }
          }
          return true;

          function isDeepMatch<T>(a: T, b: unknown): b is T {
            if (a === b) {
              return true;
            }
            if ((a && !b) || (!a && b)) {
              return false;
            }
            if (!(a instanceof Object) || !(b instanceof Object)) {
              return false;
            }
            for (const [key, value] of Object.entries(a)) {
              if (!isDeepMatch(value, (b as Record<string, unknown>)[key])) {
                return false;
              }
            }
            return true;
          }
        },
        properties,
        attributes
      );
    }
    await elementsHandle.dispose();
    return result === visible;
  }, timeout);
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
  const timeoutId = setTimeout(() => {
    isActive = false;
  }, timeout);
  while (isActive) {
    const result = await fn();
    if (result) {
      clearTimeout(timeoutId);
      return;
    }
    await new Promise((resolve) => setTimeout(resolve, 100));
  }
  throw new Error('Timed out');
}
