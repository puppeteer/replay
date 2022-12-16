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
  WaitForURLStep,
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
  typeableInputTypes,
} from './SchemaUtils.js';
import { formatJSONAsJS } from './JSONUtils.js';

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

  #appendWaitForSelector(out: LineWriter, step: StepWithSelectors): void {
    out.appendLine(
      `await scrollIntoViewIfNeeded(${formatJSONAsJS(
        step.selectors,
        out.getIndent()
      )}, ${step.frame ? 'frame' : 'targetPage'}, timeout);`
    );
    out.appendLine(
      `const element = await waitForSelectors(${formatJSONAsJS(
        step.selectors,
        out.getIndent()
      )}, ${step.frame ? 'frame' : 'targetPage'}, { timeout, visible: true });`
    );
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
    out.appendLine('const inputType = await element.evaluate(el => el.type);');
    out.appendLine(`if (inputType === 'select-one') {`);
    out.appendLine(
      `  await changeSelectElement(element, ${formatJSONAsJS(
        step.value,
        out.getIndent()
      )})`
    );
    out.appendLine(
      `} else if (${formatJSONAsJS(
        Array.from(typeableInputTypes),
        out.getIndent()
      )}.includes(inputType)) {`
    );
    out.appendLine(
      `  await typeIntoElement(element, ${formatJSONAsJS(
        step.value,
        out.getIndent()
      )});`
    );
    out.appendLine('} else {');
    out.appendLine(
      `  await changeElementValue(element, ${formatJSONAsJS(
        step.value,
        out.getIndent()
      )});`
    );
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
      case StepType.WaitForURL:
        return this.#appendWaitForURLStep(out, step);
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
    out.appendLine(
      `await waitForElement(${formatJSONAsJS(step, out.getIndent())}, ${
        step.frame ? 'frame' : 'targetPage'
      }, timeout);`
    );
  }

  #appendWaitForURLStep(out: LineWriter, step: WaitForURLStep): void {
    out.appendLine(
      `await waitForURL(${formatJSONAsJS(step, out.getIndent())}, ${
        step.frame ? 'frame' : 'targetPage'
      }, timeout);`
    );
  }
}

const defaultTimeout = 5000;

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

async function scrollIntoViewIfNeeded(selectors, frame, timeout) {
  const element = await waitForSelectors(selectors, frame, { visible: false, timeout });
  if (!element) {
    throw new Error(
      'The element could not be found.'
    );
  }
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

async function waitForURL(step: WaitForURL, frame: Frame, timeout: number) {
  await waitForFunction(() => {
    return frame.evaluate(
      (urlString, exact) => {
        const url: URL = new URL(urlString);
        const locationSearchParams = new URLSearchParams(
          window.location.search
        );
        url.searchParams.sort();
        locationSearchParams.sort();
        if (exact) {
          return (
            url.hash === window.location.hash &&
            url.host === window.location.host &&
            url.port === window.location.port &&
            url.protocol === window.location.protocol &&
            url.pathname === window.location.pathname &&
            url.searchParams.toString() === locationSearchParams.toString()
          );
        }
        return (
          (!url.hash || url.hash === window.location.hash) &&
          (!url.host || url.host === window.location.host) &&
          (!url.port || url.port === window.location.port) &&
          (!url.protocol || url.protocol === window.location.protocol) &&
          (!url.pathname || url.pathname === window.location.pathname) &&
          (!url.search ||
            url.searchParams.toString() === locationSearchParams.toString())
        );
      },
      step.url,
      step.exact
    );
  }, timeout);
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
}

async function changeSelectElement(element, value) {
  await element.select(value);
  await element.evaluateHandle((e) => {
    e.blur();
    e.focus();
  });
}

async function changeElementValue(element, value) {
  await element.focus();
  await element.evaluate((input, value) => {
    input.value = value;
    input.dispatchEvent(new Event('input', { bubbles: true }));
    input.dispatchEvent(new Event('change', { bubbles: true }));
  }, value);
}

async function typeIntoElement(element, value) {
  const textToType = await element.evaluate((input, newValue) => {
    if (
      newValue.length <= input.value.length ||
      !newValue.startsWith(input.value)
    ) {
      input.value = '';
      return newValue;
    }
    const originalValue = input.value;
    input.value = '';
    input.value = originalValue;
    return newValue.substring(originalValue.length);
  }, value);
  await element.type(textToType);
}`;
