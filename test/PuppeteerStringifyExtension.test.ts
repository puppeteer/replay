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

import snapshot from 'snap-shot-it';
import { InMemoryLineWriter } from '../src/InMemoryLineWriter.js';
import { PuppeteerStringifyExtension } from '../src/PuppeteerStringifyExtension.js';
import { AssertedEventType, StepType } from '../src/Schema.js';

describe('PuppeteerStringifyExtension', () => {
  const ext = new PuppeteerStringifyExtension();

  it('should print the correct script for a click step', async () => {
    const step = {
      type: StepType.Click as const,
      target: 'main',
      selectors: ['aria/Test'],
      offsetX: 1,
      offsetY: 1,
    };
    const flow = { title: 'test', steps: [step] };

    const writer = new InMemoryLineWriter('  ');
    await ext.stringifyStep(writer, step, flow);
    snapshot(writer.toString());
  });

  it('should print the correct script for asserted events', async () => {
    const step = {
      type: StepType.Click as const,
      target: 'main',
      selectors: ['aria/Test'],
      offsetX: 1,
      offsetY: 1,
      assertedEvents: [{ type: AssertedEventType.Navigation as const }],
    };
    const flow = { title: 'test', steps: [step] };

    const writer = new InMemoryLineWriter('  ');
    await ext.stringifyStep(writer, step, flow);
    snapshot(writer.toString());
  });

  it('should print the correct script with a chain selector', async () => {
    const step = {
      type: StepType.Click as const,
      target: 'main',
      selectors: [['aria/Test', 'aria/Test2']],
      offsetX: 1,
      offsetY: 1,
    };
    const flow = { title: 'test', steps: [step] };

    const writer = new InMemoryLineWriter('  ');
    await ext.stringifyStep(writer, step, flow);
    snapshot(writer.toString());
  });

  it('should print the correct script for a change step', async () => {
    const step = {
      type: StepType.Change as const,
      target: 'main',
      selectors: ['aria/Test'],
      value: 'Hello World',
    };
    const flow = { title: 'test', steps: [step] };

    const writer = new InMemoryLineWriter('  ');
    await ext.stringifyStep(writer, step, flow);
    snapshot(writer.toString());
  });

  it('should print the correct script for a change step for non-text inputs', async () => {
    const step = {
      type: StepType.Change as const,
      target: 'main',
      selectors: ['aria/Test'],
      value: '#333333',
    };
    const flow = { title: 'test', steps: [step] };

    const writer = new InMemoryLineWriter('  ');
    await ext.stringifyStep(writer, step, flow);
    snapshot(writer.toString());
  });

  describe('Firefox', () => {
    const ext = new PuppeteerStringifyExtension('firefox');

    it('should stringify', async () => {
      const step = {
        type: StepType.Click as const,
        target: 'main',
        selectors: ['aria/Test'],
        offsetX: 1,
        offsetY: 1,
      };
      const flow = { title: 'test', steps: [step] };

      const writer = new InMemoryLineWriter('  ');
      await ext.beforeAllSteps(writer, flow);
      snapshot(writer.toString());
    });
  });
});
