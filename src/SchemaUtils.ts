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
  AssertedEvent,
  WaitForElementStep,
  WaitForExpressionStep,
  BaseStep,
  ChangeStep,
  ClickStep,
  CloseStep,
  CustomStep,
  EmulateNetworkConditionsStep,
  FrameSelector,
  Key,
  KeyDownStep,
  KeyUpStep,
  NavigateStep,
  ScrollStep,
  Selector,
  SetViewportStep,
  Step,
  StepWithFrame,
  StepWithSelectors,
  StepWithTarget,
  Target,
  UserFlow,
  ClickAttributes,
  DoubleClickStep,
  HoverStep,
} from './Schema.js';

export function assertAllStepTypesAreHandled(s: never): never;
export function assertAllStepTypesAreHandled(s: Step): never {
  throw new Error(`Unknown step type: ${s.type}`);
}

export const typeableInputTypes: ReadonlySet<string> = new Set([
  'textarea',
  'text',
  'url',
  'tel',
  'search',
  'password',
  'number',
  'email',
]);

export const pointerDeviceTypes: ReadonlySet<string> = new Set([
  'mouse',
  'pen',
  'touch',
]);

export const mouseButtonMap: ReadonlyMap<
  string,
  'left' | 'middle' | 'right' | 'back' | 'forward'
> = new Map([
  ['primary', 'left'],
  ['auxiliary', 'middle'],
  ['secondary', 'right'],
  ['back', 'back'],
  ['forward', 'forward'],
]);

function hasProperty<KeyType extends PropertyKey>(
  data: object,
  prop: KeyType
): data is Record<KeyType, unknown> {
  // TODO: use Object.hasOwn once types are available https://github.com/microsoft/TypeScript/issues/44253
  if (!Object.prototype.hasOwnProperty.call(data, prop)) {
    return false;
  }
  const keyedData = data as { [key: string]: unknown };
  return keyedData[prop as string] !== undefined;
}

function isObject(data: unknown): data is object {
  return typeof data === 'object' && data !== null;
}

function isString(data: unknown): data is string {
  return typeof data === 'string';
}

function isNumber(data: unknown): data is number {
  return typeof data === 'number';
}

function isArray(data: unknown): data is unknown[] {
  return Array.isArray(data);
}

function isBoolean(data: unknown): data is boolean {
  return typeof data === 'boolean';
}

function isIntegerArray(data: unknown): data is number[] {
  return isArray(data) && data.every((item) => Number.isInteger(item));
}

function isKnownDeviceType(
  data: unknown
): data is Required<ClickAttributes>['deviceType'] {
  return typeof data === 'string' && pointerDeviceTypes.has(data);
}

function isKnownMouseButton(
  data: unknown
): data is Required<ClickAttributes>['button'] {
  return typeof data === 'string' && mouseButtonMap.has(data);
}

function parseTarget(step: object): Target | undefined {
  if (hasProperty(step, 'target') && isString(step.target)) {
    return step.target;
  }
  return undefined;
}

function parseFrame(step: object): FrameSelector | undefined {
  if (hasProperty(step, 'frame')) {
    if (isIntegerArray(step.frame)) {
      return step.frame;
    }

    throw new Error('Step `frame` is not an integer array');
  }
  return undefined;
}

function parseNumber(step: object, prop: string): number {
  if (hasProperty(step, prop)) {
    const maybeNumber = step[prop];
    if (isNumber(maybeNumber)) {
      return maybeNumber;
    }
  }
  throw new Error(`Step.${prop} is not a number`);
}

function parseBoolean(step: object, prop: string): boolean {
  if (hasProperty(step, prop)) {
    const maybeBoolean = step[prop];
    if (isBoolean(maybeBoolean)) {
      return maybeBoolean;
    }
  }
  throw new Error(`Step.${prop} is not a boolean`);
}

function parseOptionalNumber(step: object, prop: string): number | undefined {
  if (hasProperty(step, prop)) {
    return parseNumber(step, prop);
  }
  return undefined;
}

function parseOptionalString(step: object, prop: string): string | undefined {
  if (hasProperty(step, prop)) {
    return parseString(step, prop);
  }
  return undefined;
}

function parseString(step: object, prop: string): string {
  if (hasProperty(step, prop)) {
    const maybeString = step[prop];
    if (isString(maybeString)) {
      return maybeString;
    }
  }
  throw new Error(`Step.${prop} is not a string`);
}

function parseSelectors(step: object): Selector[] {
  if (!hasProperty(step, 'selectors')) {
    throw new Error('Step does not have required selectors');
  }
  if (!isArray(step.selectors)) {
    throw new Error('Step selectors are not an array');
  }
  return step.selectors.map((s) => {
    if (!isString(s) && !isArray(s)) {
      throw new Error('Selector is not an array or string');
    }
    if (isArray(s)) {
      return s.map((sub) => {
        if (!isString(sub)) {
          throw new Error('Selector element is not a string');
        }
        return sub;
      });
    }
    return s;
  });
}

function parseOptionalSelectors(step: object): Selector[] | undefined {
  if (!hasProperty(step, 'selectors')) {
    return undefined;
  }
  return parseSelectors(step);
}

function parseAssertedEvent(event: unknown): AssertedEvent {
  if (!isObject(event)) {
    throw new Error('Asserted event is not an object');
  }
  if (!hasProperty(event, 'type')) {
    throw new Error('Asserted event is missing type');
  }
  if (event.type === 'navigation') {
    return {
      type: 'navigation',
      url: parseOptionalString(event, 'url'),
      title: parseOptionalString(event, 'title'),
    };
  }
  throw new Error('Unknown assertedEvent type');
}

function parseAssertedEvents(events: unknown): AssertedEvent[] | undefined {
  if (!isArray(events)) {
    return undefined;
  }
  return events.map(parseAssertedEvent);
}

function parseBaseStep(type: string, step: object): BaseStep {
  if (
    hasProperty(step, 'timeout') &&
    isNumber(step.timeout) &&
    !validTimeout(step.timeout)
  ) {
    throw new Error(timeoutErrorMessage);
  }
  return {
    type,
    assertedEvents: hasProperty(step, 'assertedEvents')
      ? parseAssertedEvents(step.assertedEvents)
      : undefined,
    timeout:
      hasProperty(step, 'timeout') && isNumber(step.timeout)
        ? step.timeout
        : undefined,
  };
}

function parseStepWithTarget(type: string, step: object): StepWithTarget {
  return {
    ...parseBaseStep(type, step),
    target: parseTarget(step),
  };
}

function parseStepWithFrame(type: string, step: object): StepWithFrame {
  return {
    ...parseStepWithTarget(type, step),
    frame: parseFrame(step),
  };
}

function parseStepWithSelectors(type: string, step: object): StepWithSelectors {
  return {
    ...parseStepWithFrame(type, step),
    selectors: parseSelectors(step),
  };
}

function parseClickAttributes(step: object): ClickAttributes {
  const attributes: ClickAttributes = {
    offsetX: parseNumber(step, 'offsetX'),
    offsetY: parseNumber(step, 'offsetY'),
  };
  const deviceType = parseOptionalString(step, 'deviceType');
  if (deviceType) {
    if (!isKnownDeviceType(deviceType)) {
      throw new Error(
        `'deviceType' for click steps must be one of the following: ${[
          ...pointerDeviceTypes,
        ].join(', ')}`
      );
    }
    attributes.deviceType = deviceType;
  }
  const button = parseOptionalString(step, 'button');
  if (button) {
    if (!isKnownMouseButton(button)) {
      throw new Error(
        `'button' for click steps must be one of the following: ${[
          ...mouseButtonMap.keys(),
        ].join(', ')}`
      );
    }
    attributes.button = button;
  }
  return attributes;
}

function parseClickStep(step: object): ClickStep {
  return {
    ...parseStepWithSelectors('click', step),
    ...parseClickAttributes(step),
    type: 'click',
    duration: parseOptionalNumber(step, 'duration'),
  };
}

function parseDoubleClickStep(step: object): DoubleClickStep {
  return {
    ...parseStepWithSelectors('doubleClick', step),
    ...parseClickAttributes(step),
    type: 'doubleClick',
  };
}

function parseHoverStep(step: object): HoverStep {
  return {
    ...parseStepWithSelectors('hover', step),
    type: 'hover',
  };
}

function parseChangeStep(step: object): ChangeStep {
  return {
    ...parseStepWithSelectors('click', step),
    type: 'change',
    value: parseString(step, 'value'),
  };
}

function parseKeyDownStep(step: object): KeyDownStep {
  return {
    ...parseStepWithTarget('keyDown', step),
    type: 'keyDown',
    // TODO: type-check keys.
    key: parseString(step, 'key') as Key,
  };
}

function parseKeyUpStep(step: object): KeyUpStep {
  return {
    ...parseStepWithTarget('keyUp', step),
    type: 'keyUp',
    // TODO: type-check keys.
    key: parseString(step, 'key') as Key,
  };
}

function parseEmulateNetworkConditionsStep(
  step: object
): EmulateNetworkConditionsStep {
  return {
    ...parseStepWithTarget('emulateNetworkConditions', step),
    type: 'emulateNetworkConditions',
    download: parseNumber(step, 'download'),
    upload: parseNumber(step, 'upload'),
    latency: parseNumber(step, 'latency'),
  };
}

function parseCloseStep(step: object): CloseStep {
  return {
    ...parseStepWithTarget('close', step),
    type: 'close',
  };
}

function parseSetViewportStep(step: object): SetViewportStep {
  return {
    ...parseStepWithTarget('setViewport', step),
    type: 'setViewport',
    width: parseNumber(step, 'width'),
    height: parseNumber(step, 'height'),
    deviceScaleFactor: parseNumber(step, 'deviceScaleFactor'),
    isMobile: parseBoolean(step, 'isMobile'),
    hasTouch: parseBoolean(step, 'hasTouch'),
    isLandscape: parseBoolean(step, 'isLandscape'),
  };
}

function parseScrollStep(step: object): ScrollStep {
  return {
    ...parseStepWithFrame('scroll', step),
    type: 'scroll',
    x: parseOptionalNumber(step, 'x'),
    y: parseOptionalNumber(step, 'y'),
    selectors: parseOptionalSelectors(step),
  };
}

function parseNavigateStep(step: object): NavigateStep {
  return {
    ...parseStepWithTarget('navigate', step),
    type: 'navigate',
    target: parseTarget(step),
    url: parseString(step, 'url'),
  };
}

function parseWaitForElementStep(step: object): WaitForElementStep {
  const operator = parseOptionalString(step, 'operator');
  if (operator && operator !== '>=' && operator !== '==' && operator !== '<=') {
    throw new Error(
      "WaitForElement step's operator is not one of '>=','==','<='"
    );
  }
  return {
    ...parseStepWithSelectors('waitForElement', step),
    type: 'waitForElement',
    operator: operator as '>=' | '==' | '<=' | undefined,
    count: parseOptionalNumber(step, 'count'),
  };
}

function parseWaitForExpressionStep(step: object): WaitForExpressionStep {
  if (!hasProperty(step, 'expression')) {
    throw new Error('waitForExpression step is missing `expression`');
  }
  return {
    ...parseStepWithFrame('waitForExpression', step),
    type: 'waitForExpression',
    expression: parseString(step, 'expression'),
  };
}

function parseCustomStep(step: object): CustomStep {
  if (!hasProperty(step, 'name')) {
    throw new Error('customStep is missing name');
  }
  if (!isString(step.name)) {
    throw new Error("customStep's name is not a string");
  }
  return {
    ...parseStepWithFrame('customStep', step),
    type: 'customStep',
    name: step.name,
    parameters: hasProperty(step, 'parameters') ? step.parameters : undefined,
  };
}

export function parseStep(step: unknown, idx?: number): Step {
  if (!isObject(step)) {
    throw new Error(
      idx ? `Step ${idx} is not an object` : 'Step is not an object'
    );
  }
  if (!hasProperty(step, 'type')) {
    throw new Error(
      idx ? `Step ${idx} does not have a type` : 'Step does not have a type'
    );
  }
  if (!isString(step.type)) {
    throw new Error(
      idx
        ? `Type of the step ${idx} is not a string`
        : 'Type of the step is not a string'
    );
  }
  switch (step.type) {
    case 'click':
      return parseClickStep(step);
    case 'doubleClick':
      return parseDoubleClickStep(step);
    case 'hover':
      return parseHoverStep(step);
    case 'change':
      return parseChangeStep(step);
    case 'keyDown':
      return parseKeyDownStep(step);
    case 'keyUp':
      return parseKeyUpStep(step);
    case 'emulateNetworkConditions':
      return parseEmulateNetworkConditionsStep(step);
    case 'close':
      return parseCloseStep(step);
    case 'setViewport':
      return parseSetViewportStep(step);
    case 'scroll':
      return parseScrollStep(step);
    case 'navigate':
      return parseNavigateStep(step);
    case 'customStep':
      return parseCustomStep(step);
    case 'waitForElement':
      return parseWaitForElementStep(step);
    case 'waitForExpression':
      return parseWaitForExpressionStep(step);
    default:
      throw new Error(`Step type ${step.type} is not supported`);
  }
}

function parseSteps(steps: unknown): Step[] {
  const result: Step[] = [];
  if (!isArray(steps)) {
    throw new Error('Recording `steps` is not an array');
  }
  for (const [idx, step] of steps.entries()) {
    result.push(parseStep(step, idx));
  }
  return result;
}

function cleanUndefined<T = unknown>(json: T): T {
  return JSON.parse(JSON.stringify(json));
}

export const minTimeout = 1;
export const maxTimeout = 30000;

const timeoutErrorMessage = `Timeout is not between ${minTimeout} and ${maxTimeout} milliseconds`;

export function validTimeout(timeout: number): boolean {
  return timeout >= minTimeout && timeout <= maxTimeout;
}

export function parse(data: unknown): UserFlow {
  if (!isObject(data)) {
    throw new Error('Recording is not an object');
  }
  if (!hasProperty(data, 'title')) {
    throw new Error('Recording is missing `title`');
  }
  if (!isString(data.title)) {
    throw new Error('Recording `title` is not a string');
  }
  if (hasProperty(data, 'timeout') && !isNumber(data.timeout)) {
    throw new Error('Recording `timeout` is not a number');
  }
  if (!hasProperty(data, 'steps')) {
    throw new Error('Recording is missing `steps`');
  }
  if (
    hasProperty(data, 'timeout') &&
    isNumber(data.timeout) &&
    !validTimeout(data.timeout)
  ) {
    throw new Error(timeoutErrorMessage);
  }
  return cleanUndefined({
    title: data.title,
    timeout:
      hasProperty(data, 'timeout') && isNumber(data.timeout)
        ? data.timeout
        : undefined,
    selectorAttribute:
      hasProperty(data, 'selectorAttribute') && isString(data.selectorAttribute)
        ? data.selectorAttribute
        : undefined,
    steps: parseSteps(data.steps),
  });
}
