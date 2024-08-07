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

import type { LineWriter } from './LineWriter.js';
import type {
  ChangeStep,
  ClickStep,
  CloseStep,
  DoubleClickStep,
  EmulateNetworkConditionsStep,
  HoverStep,
  KeyDownStep,
  KeyUpStep,
  NavigateStep,
  ScrollStep,
  SetViewportStep,
  Step,
  StepWithFrame,
  StepWithSelectors,
  UserFlow,
  WaitForElementStep,
  WaitForExpressionStep,
} from './Schema.js';
import { AssertedEventType, StepType } from './Schema.js';
import { StringifyExtension } from './StringifyExtension.js';

import {
  assertAllStepTypesAreHandled,
  mouseButtonMap,
  selectorToPElementSelector,
} from './SchemaUtils.js';
import { formatJSONAsJS } from './JSONUtils.js';

type TargetBrowser = 'chrome' | 'firefox';

export class PuppeteerStringifyExtension extends StringifyExtension {
  #shouldAppendWaitForElementHelper = false;
  #targetBrowser: TargetBrowser;

  constructor(targetBrowser: TargetBrowser = 'chrome') {
    super();
    this.#targetBrowser = targetBrowser;
  }

  override async beforeAllSteps(out: LineWriter, flow: UserFlow) {
    out.appendLine(
      "const puppeteer = require('puppeteer'); // v23.0.0 or later"
    );
    out.appendLine('');
    out.appendLine('(async () => {').startBlock();
    if (this.#targetBrowser === 'firefox') {
      out.appendLine(
        `const browser = await puppeteer.launch({browser: 'firefox'});`
      );
    } else {
      out.appendLine('const browser = await puppeteer.launch();');
    }
    out.appendLine('const page = await browser.newPage();');
    out.appendLine(`const timeout = ${flow.timeout || defaultTimeout};`);
    out.appendLine('page.setDefaultTimeout(timeout);');
    out.appendLine('');
    this.#shouldAppendWaitForElementHelper = false;
  }

  override async afterAllSteps(out: LineWriter, flow: UserFlow) {
    out.appendLine('');
    out.appendLine('await browser.close();');
    out.appendLine('');
    if (this.#shouldAppendWaitForElementHelper) {
      for (const line of waitForElementHelper.split('\n')) {
        out.appendLine(line);
      }
    }
    out.endBlock().appendLine('})().catch(err => {').startBlock();
    out.appendLine('console.error(err);');
    out.appendLine('process.exit(1);');
    out.endBlock().appendLine('});');
  }

  override async stringifyStep(out: LineWriter, step: Step, flow: UserFlow) {
    out.appendLine('{').startBlock();
    if (step.timeout !== undefined) {
      out.appendLine(`const timeout = ${step.timeout};`);
    }
    this.#appendContext(out, step);
    if (step.assertedEvents) {
      out.appendLine('const promises = [];');
      out.appendLine('const startWaitingForEvents = () => {').startBlock();
      for (const event of step.assertedEvents) {
        switch (event.type) {
          case AssertedEventType.Navigation: {
            out.appendLine(
              `promises.push(${
                'frame' in step && step.frame ? 'frame' : 'targetPage'
              }.waitForNavigation());`
            );
            break;
          }
          default:
            throw new Error(`Event type ${event.type} is not supported`);
        }
      }
      out.endBlock().appendLine('}');
    }

    this.#appendStepType(out, step);

    if (step.assertedEvents) {
      out.appendLine('await Promise.all(promises);');
    }

    out.endBlock().appendLine('}');
  }

  #appendTarget(out: LineWriter, target: string): void {
    if (target === 'main') {
      out.appendLine('const targetPage = page;');
    } else {
      out.appendLine(
        `const target = await browser.waitForTarget(t => t.url() === ${formatJSONAsJS(
          target,
          out.getIndent()
        )}, { timeout });`
      );
      out.appendLine('const targetPage = await target.page();');
      out.appendLine('targetPage.setDefaultTimeout(timeout);');
    }
  }

  #appendFrame(out: LineWriter, path: number[]): void {
    out.appendLine('let frame = targetPage.mainFrame();');
    for (const index of path) {
      out.appendLine(`frame = frame.childFrames()[${index}];`);
    }
  }

  #appendContext(out: LineWriter, step: StepWithFrame): void {
    // TODO fix optional target: should it be main?
    this.#appendTarget(out, step.target || 'main');
    // TODO fix optional frame: should it be required?
    if (step.frame) {
      this.#appendFrame(out, step.frame);
    }
  }

  #appendLocators(
    out: LineWriter,
    step: StepWithSelectors,
    action: () => void
  ) {
    out.appendLine('await puppeteer.Locator.race([').startBlock();
    out.appendLine(
      step.selectors
        .map((s) => {
          return `${
            step.frame ? 'frame' : 'targetPage'
          }.locator(${formatJSONAsJS(
            selectorToPElementSelector(s),
            out.getIndent()
          )})`;
        })
        .join(',\n')
    );
    out.endBlock().appendLine('])');
    out.startBlock().appendLine('.setTimeout(timeout)');
    if (step.assertedEvents?.length) {
      out.appendLine(`.on('action', () => startWaitingForEvents())`);
    }
    action();
    out.endBlock();
  }

  #appendClickStep(out: LineWriter, step: ClickStep): void {
    this.#appendLocators(out, step, () => {
      out.appendLine('.click({');
      if (step.duration) {
        out.appendLine(`  delay: ${step.duration},`);
      }
      if (step.button) {
        out.appendLine(`  button: '${mouseButtonMap.get(step.button)}',`);
      }
      out.appendLine('  offset: {');
      out.appendLine(`    x: ${step.offsetX},`);
      out.appendLine(`    y: ${step.offsetY},`);
      out.appendLine('  },');
      out.appendLine('});');
    });
  }

  #appendDoubleClickStep(out: LineWriter, step: DoubleClickStep): void {
    this.#appendLocators(out, step, () => {
      out.appendLine('.click({');
      out.appendLine(`  count: 2,`);
      if (step.duration) {
        out.appendLine(`  delay: ${step.duration},`);
      }
      if (step.button) {
        out.appendLine(`  button: '${mouseButtonMap.get(step.button)}',`);
      }
      out.appendLine('  offset: {');
      out.appendLine(`    x: ${step.offsetX},`);
      out.appendLine(`    y: ${step.offsetY},`);
      out.appendLine('  },');
      out.appendLine('});');
    });
  }

  #appendHoverStep(out: LineWriter, step: HoverStep): void {
    this.#appendLocators(out, step, () => {
      out.appendLine('.hover();');
    });
  }

  #appendChangeStep(out: LineWriter, step: ChangeStep): void {
    this.#appendLocators(out, step, () => {
      out.appendLine(`.fill(${formatJSONAsJS(step.value, out.getIndent())});`);
    });
  }

  #appendEmulateNetworkConditionsStep(
    out: LineWriter,
    step: EmulateNetworkConditionsStep
  ): void {
    out.appendLine('await targetPage.emulateNetworkConditions({');
    out.appendLine(`  offline: ${!step.download && !step.upload},`);
    out.appendLine(`  downloadThroughput: ${step.download},`);
    out.appendLine(`  uploadThroughput: ${step.upload},`);
    out.appendLine(`  latency: ${step.latency},`);
    out.appendLine('});');
  }

  #appendKeyDownStep(out: LineWriter, step: KeyDownStep): void {
    out.appendLine(
      `await targetPage.keyboard.down(${formatJSONAsJS(
        step.key,
        out.getIndent()
      )});`
    );
  }

  #appendKeyUpStep(out: LineWriter, step: KeyUpStep): void {
    out.appendLine(
      `await targetPage.keyboard.up(${formatJSONAsJS(
        step.key,
        out.getIndent()
      )});`
    );
  }

  #appendCloseStep(out: LineWriter, step: CloseStep): void {
    out.appendLine('await targetPage.close()');
  }

  #appendViewportStep(out: LineWriter, step: SetViewportStep): void {
    out.appendLine(
      `await targetPage.setViewport(${formatJSONAsJS(
        {
          width: step.width,
          height: step.height,
        },
        out.getIndent()
      )})`
    );
  }

  #appendScrollStep(out: LineWriter, step: ScrollStep): void {
    if ('selectors' in step) {
      this.#appendLocators(out, step, () => {
        out.appendLine(
          `.scroll({ scrollTop: ${step.y}, scrollLeft: ${step.x}});`
        );
      });
    } else {
      out.appendLine(
        `await targetPage.evaluate((x, y) => { window.scroll(x, y); }, ${step.x}, ${step.y})`
      );
    }
  }

  #appendStepType(out: LineWriter, step: Step): void {
    switch (step.type) {
      case StepType.Click:
        return this.#appendClickStep(out, step);
      case StepType.DoubleClick:
        return this.#appendDoubleClickStep(out, step);
      case StepType.Hover:
        return this.#appendHoverStep(out, step);
      case StepType.Change:
        return this.#appendChangeStep(out, step);
      case StepType.EmulateNetworkConditions:
        return this.#appendEmulateNetworkConditionsStep(out, step);
      case StepType.KeyDown:
        return this.#appendKeyDownStep(out, step);
      case StepType.KeyUp:
        return this.#appendKeyUpStep(out, step);
      case StepType.Close:
        return this.#appendCloseStep(out, step);
      case StepType.SetViewport:
        return this.#appendViewportStep(out, step);
      case StepType.Scroll:
        return this.#appendScrollStep(out, step);
      case StepType.Navigate:
        return this.#appendNavigationStep(out, step);
      case StepType.WaitForElement:
        return this.#appendWaitForElementStep(out, step);
      case StepType.WaitForExpression:
        return this.#appendWaitExpressionStep(out, step);
      case StepType.CustomStep:
        return; // TODO: implement these
      default:
        return assertAllStepTypesAreHandled(step);
    }
  }

  #appendNavigationStep(out: LineWriter, step: NavigateStep): void {
    if (step.assertedEvents?.length) {
      out.appendLine(`startWaitingForEvents();`);
    }
    out.appendLine(
      `await targetPage.goto(${formatJSONAsJS(step.url, out.getIndent())});`
    );
  }

  #appendWaitExpressionStep(
    out: LineWriter,
    step: WaitForExpressionStep
  ): void {
    out.appendLine(
      `await ${
        step.frame ? 'frame' : 'targetPage'
      }.waitForFunction(${formatJSONAsJS(
        step.expression,
        out.getIndent()
      )}, { timeout });`
    );
  }

  #appendWaitForElementStep(out: LineWriter, step: WaitForElementStep): void {
    this.#shouldAppendWaitForElementHelper = true;
    out.appendLine(
      `await waitForElement(${formatJSONAsJS(step, out.getIndent())}, ${
        step.frame ? 'frame' : 'targetPage'
      }, timeout);`
    );
  }
}

const defaultTimeout = 5000;

const waitForElementHelper = `async function waitForElement(step, frame, timeout) {
  const {
    count = 1,
    operator = '>=',
    visible = true,
    properties,
    attributes,
  } = step;
  const compFn = {
    '==': (a, b) => a === b,
    '>=': (a, b) => a >= b,
    '<=': (a, b) => a <= b,
  }[operator];
  await waitForFunction(async () => {
    const elements = await querySelectorsAll(step.selectors, frame);
    let result = compFn(elements.length, count);
    const elementsHandle = await frame.evaluateHandle((...elements) => {
      return elements;
    }, ...elements);
    await Promise.all(elements.map((element) => element.dispose()));
    if (result && (properties || attributes)) {
      result = await elementsHandle.evaluate(
        (elements, properties, attributes) => {
          for (const element of elements) {
            if (attributes) {
              for (const [name, value] of Object.entries(attributes)) {
                if (element.getAttribute(name) !== value) {
                  return false;
                }
              }
            }
            if (properties) {
              if (!isDeepMatch(properties, element)) {
                return false;
              }
            }
          }
          return true;

          function isDeepMatch(a, b) {
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
              if (!isDeepMatch(value, b[key])) {
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

async function querySelectorsAll(selectors, frame) {
  for (const selector of selectors) {
    const result = await querySelectorAll(selector, frame);
    if (result.length) {
      return result;
    }
  }
  return [];
}

async function querySelectorAll(selector, frame) {
  if (!Array.isArray(selector)) {
    selector = [selector];
  }
  if (!selector.length) {
    throw new Error('Empty selector provided to querySelectorAll');
  }
  let elements = [];
  for (let i = 0; i < selector.length; i++) {
    const part = selector[i];
    if (i === 0) {
      elements = await frame.$$(part);
    } else {
      const tmpElements = elements;
      elements = [];
      for (const el of tmpElements) {
        elements.push(...(await el.$$(part)));
      }
    }
    if (elements.length === 0) {
      return [];
    }
    if (i < selector.length - 1) {
      const tmpElements = [];
      for (const el of elements) {
        const newEl = (await el.evaluateHandle(el => el.shadowRoot ? el.shadowRoot : el)).asElement();
        if (newEl) {
          tmpElements.push(newEl);
        }
      }
      elements = tmpElements;
    }
  }
  return elements;
}

async function waitForFunction(fn, timeout) {
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
    await new Promise(resolve => setTimeout(resolve, 100));
  }
  throw new Error('Timed out');
}`;
