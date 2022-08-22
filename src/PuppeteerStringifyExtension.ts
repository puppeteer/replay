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
  Step,
  ClickStep,
  StepWithFrame,
  StepWithSelectors,
  ChangeStep,
  UserFlow,
  EmulateNetworkConditionsStep,
  KeyDownStep,
  KeyUpStep,
  CloseStep,
  SetViewportStep,
  ScrollStep,
  NavigateStep,
  WaitForElementStep,
  WaitForExpressionStep,
  DoubleClickStep,
  HoverStep,
} from './Schema.js';
import { StringifyExtension } from './StringifyExtension.js';

import {
  assertAllStepTypesAreHandled,
  mouseButtonMap,
  typeableInputTypes,
} from './SchemaUtils.js';

export class PuppeteerStringifyExtension extends StringifyExtension {
  override async beforeAllSteps(out: LineWriter, flow: UserFlow) {
    out.appendLine(
      "const puppeteer = require('puppeteer'); // v13.0.0 or later"
    );
    out.appendLine('');
    out.appendLine('(async () => {').startBlock();
    out.appendLine('const browser = await puppeteer.launch();');
    out.appendLine('const page = await browser.newPage();');
    out.appendLine(`const timeout = ${flow.timeout || defaultTimeout};`);
    out.appendLine('page.setDefaultTimeout(timeout);');
    out.appendLine('');
  }

  override async afterAllSteps(out: LineWriter, flow: UserFlow) {
    out.appendLine('');
    out.appendLine('await browser.close();');
    out.appendLine('');
    for (const line of helpers.split('\n')) {
      out.appendLine(line);
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
      for (const event of step.assertedEvents) {
        switch (event.type) {
          case 'navigation': {
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
        `const target = await browser.waitForTarget(t => t.url() === ${formatAsJSLiteral(
          target
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

  #appendWaitForSelector(out: LineWriter, step: StepWithSelectors): void {
    out.appendLine(
      `const element = await waitForSelectors(${JSON.stringify(
        step.selectors
      )}, ${step.frame ? 'frame' : 'targetPage'}, { timeout, visible: true });`
    );
    out.appendLine('await scrollIntoViewIfNeeded(element, timeout);');
  }

  #appendClickStep(out: LineWriter, step: ClickStep): void {
    this.#appendWaitForSelector(out, step);
    out.appendLine('await element.click({');
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
  }

  #appendDoubleClickStep(out: LineWriter, step: DoubleClickStep): void {
    this.#appendWaitForSelector(out, step);
    out.appendLine('await element.click({');
    out.appendLine(`  clickCount: 2,`);
    if (step.button) {
      out.appendLine(`  button: '${mouseButtonMap.get(step.button)}',`);
    }
    out.appendLine('  offset: {');
    out.appendLine(`    x: ${step.offsetX},`);
    out.appendLine(`    y: ${step.offsetY},`);
    out.appendLine('  },');
    out.appendLine('});');
  }

  #appendHoverStep(out: LineWriter, step: HoverStep): void {
    this.#appendWaitForSelector(out, step);
    out.appendLine('await element.hover();');
  }

  #appendChangeStep(out: LineWriter, step: ChangeStep): void {
    this.#appendWaitForSelector(out, step);
    out.appendLine('const type = await element.evaluate(el => el.type);');
    out.appendLine(`if (["select-one"].includes(type)) {`);
    out.appendLine(`  await element.select(${formatAsJSLiteral(step.value)});`);
    out.appendLine(
      `} else if (${JSON.stringify(
        Array.from(typeableInputTypes)
      )}.includes(type)) {`
    );
    out.appendLine(`  await element.type(${formatAsJSLiteral(step.value)});`);
    out.appendLine('} else {');
    out.appendLine('  await element.focus();');
    out.appendLine('  await element.evaluate((el, value) => {');
    out.appendLine('    el.value = value;');
    out.appendLine(
      "    el.dispatchEvent(new Event('input', { bubbles: true }));"
    );
    out.appendLine(
      "    el.dispatchEvent(new Event('change', { bubbles: true }));"
    );
    out.appendLine(`  }, ${JSON.stringify(step.value)});`);
    out.appendLine('}');
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
      `await targetPage.keyboard.down(${JSON.stringify(step.key)});`
    );
  }

  #appendKeyUpStep(out: LineWriter, step: KeyUpStep): void {
    out.appendLine(
      `await targetPage.keyboard.up(${JSON.stringify(step.key)});`
    );
  }

  #appendCloseStep(out: LineWriter, step: CloseStep): void {
    out.appendLine('await targetPage.close()');
  }

  #appendViewportStep(out: LineWriter, step: SetViewportStep): void {
    out.appendLine(
      `await targetPage.setViewport(${JSON.stringify({
        width: step.width,
        height: step.height,
      })})`
    );
  }

  #appendScrollStep(out: LineWriter, step: ScrollStep): void {
    if ('selectors' in step) {
      this.#appendWaitForSelector(out, step);
      out.appendLine(
        `await element.evaluate((el, x, y) => { el.scrollTop = y; el.scrollLeft = x; }, ${step.x}, ${step.y});`
      );
    } else {
      out.appendLine(
        `await targetPage.evaluate((x, y) => { window.scroll(x, y); }, ${step.x}, ${step.y})`
      );
    }
  }

  #appendStepType(out: LineWriter, step: Step): void {
    switch (step.type) {
      case 'click':
        return this.#appendClickStep(out, step);
      case 'doubleClick':
        return this.#appendDoubleClickStep(out, step);
      case 'hover':
        return this.#appendHoverStep(out, step);
      case 'change':
        return this.#appendChangeStep(out, step);
      case 'emulateNetworkConditions':
        return this.#appendEmulateNetworkConditionsStep(out, step);
      case 'keyDown':
        return this.#appendKeyDownStep(out, step);
      case 'keyUp':
        return this.#appendKeyUpStep(out, step);
      case 'close':
        return this.#appendCloseStep(out, step);
      case 'setViewport':
        return this.#appendViewportStep(out, step);
      case 'scroll':
        return this.#appendScrollStep(out, step);
      case 'navigate':
        return this.#appendNavigationStep(out, step);
      case 'waitForElement':
        return this.#appendWaitForElementStep(out, step);
      case 'waitForExpression':
        return this.#appendWaitExpressionStep(out, step);
      case 'customStep':
        return; // TODO: implement these
      default:
        return assertAllStepTypesAreHandled(step);
    }
  }

  #appendNavigationStep(out: LineWriter, step: NavigateStep): void {
    out.appendLine(`await targetPage.goto(${formatAsJSLiteral(step.url)});`);
  }

  #appendWaitExpressionStep(
    out: LineWriter,
    step: WaitForExpressionStep
  ): void {
    out.appendLine(
      `await ${
        step.frame ? 'frame' : 'targetPage'
      }.waitForFunction(${formatAsJSLiteral(step.expression)}, { timeout });`
    );
  }

  #appendWaitForElementStep(out: LineWriter, step: WaitForElementStep): void {
    out.appendLine(
      `await waitForElement(${JSON.stringify(step)}, ${
        step.frame ? 'frame' : 'targetPage'
      }, timeout);`
    );
  }
}

const defaultTimeout = 5000;

function formatAsJSLiteral(value: unknown): string {
  // TODO: replace JSON.stringify with a better looking JSLiteral implementation
  // that formats using '', "", `` depending on the content of the value.
  return JSON.stringify(value);
}

const helpers = `async function waitForSelectors(selectors, frame, options) {
  for (const selector of selectors) {
    try {
      return await waitForSelector(selector, frame, options);
    } catch (err) {
      console.error(err);
    }
  }
  throw new Error('Could not find element for selectors: ' + JSON.stringify(selectors));
}

async function scrollIntoViewIfNeeded(element, timeout) {
  await waitForConnected(element, timeout);
  const isInViewport = await element.isIntersectingViewport({threshold: 0});
  if (isInViewport) {
    return;
  }
  await element.evaluate(element => {
    element.scrollIntoView({
      block: 'center',
      inline: 'center',
      behavior: 'auto',
    });
  });
  await waitForInViewport(element, timeout);
}

async function waitForConnected(element, timeout) {
  await waitForFunction(async () => {
    return await element.getProperty('isConnected');
  }, timeout);
}

async function waitForInViewport(element, timeout) {
  await waitForFunction(async () => {
    return await element.isIntersectingViewport({threshold: 0});
  }, timeout);
}

async function waitForSelector(selector, frame, options) {
  if (!Array.isArray(selector)) {
    selector = [selector];
  }
  if (!selector.length) {
    throw new Error('Empty selector provided to waitForSelector');
  }
  let element = null;
  for (let i = 0; i < selector.length; i++) {
    const part = selector[i];
    if (element) {
      element = await element.waitForSelector(part, options);
    } else {
      element = await frame.waitForSelector(part, options);
    }
    if (!element) {
      throw new Error('Could not find element: ' + selector.join('>>'));
    }
    if (i < selector.length - 1) {
      element = (await element.evaluateHandle(el => el.shadowRoot ? el.shadowRoot : el)).asElement();
    }
  }
  if (!element) {
    throw new Error('Could not find element: ' + selector.join('|'));
  }
  return element;
}

async function waitForElement(step, frame, timeout) {
  const count = step.count || 1;
  const operator = step.operator || '>=';
  const comp = {
    '==': (a, b) => a === b,
    '>=': (a, b) => a >= b,
    '<=': (a, b) => a <= b,
  };
  const compFn = comp[operator];
  await waitForFunction(async () => {
    const elements = await querySelectorsAll(step.selectors, frame);
    return compFn(elements.length, count);
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
  setTimeout(() => {
    isActive = false;
  }, timeout);
  while (isActive) {
    const result = await fn();
    if (result) {
      return;
    }
    await new Promise(resolve => setTimeout(resolve, 100));
  }
  throw new Error('Timed out');
}`;
