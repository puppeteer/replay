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
import { stringify } from '../src/stringify.js';
import { InMemoryLineWriter } from '../src/InMemoryLineWriter.js';
import { JSONStringifyExtension } from '../src/JSONStringifyExtension.js';
import { StepType, AssertedEventType } from '../src/Schema.js';

describe('JSONStringifyExtension', () => {
  const ext = new JSONStringifyExtension();

  it('should print the script for a click step', async () => {
    const step = {
      type: StepType.Click as const,
      target: 'main',
      selectors: ['aria/Test'],
      offsetX: 1,
      offsetY: 1,
      assertedEvents: [{ type: AssertedEventType.Navigation as const }],
    };
    const writer = new InMemoryLineWriter('  ');
    await ext.stringifyStep(writer, step);
    snapshot(writer.toString());
  });

  it('should print an entire script', async () => {
    const flow = {
      title: 'test',
      steps: [
        {
          type: StepType.Click as const,
          target: 'main',
          selectors: ['aria/Test'],
          offsetX: 1,
          offsetY: 1,
          assertedEvents: [{ type: AssertedEventType.Navigation as const }],
        },
        {
          type: StepType.Click as const,
          target: 'main',
          selectors: ['aria/Test'],
          offsetX: 1,
          offsetY: 1,
          assertedEvents: [{ type: AssertedEventType.Navigation as const }],
        },
      ],
    };
    snapshot(
      await stringify(flow, {
        extension: ext,
      })
    );
  });
});
