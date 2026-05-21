/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import { describe, it } from 'node:test';
import { stringify } from '../src/stringify.js';
import { InMemoryLineWriter } from '../src/InMemoryLineWriter.js';
import { JSONStringifyExtension } from '../src/JSONStringifyExtension.js';
import { StepType, AssertedEventType } from '../src/Schema.js';

describe('JSONStringifyExtension', () => {
  const ext = new JSONStringifyExtension();

  it('should print the script for a click step', async (t) => {
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
    t.assert.snapshot(writer.toString());
  });

  it('should print an entire script', async (t) => {
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
    t.assert.snapshot(
      await stringify(flow, {
        extension: ext,
      })
    );
  });
});
