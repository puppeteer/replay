/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import { describe, it } from 'node:test';
import { stringify } from '../src/stringify.js';
import { InMemoryLineWriter } from '../src/InMemoryLineWriter.js';
import { PuppeteerReplayStringifyExtension } from '../src/PuppeteerReplayStringifyExtension.js';
import { StepType, AssertedEventType } from '../src/Schema.js';

describe('PuppeteerReplayStringifyExtension', () => {
  const ext = new PuppeteerReplayStringifyExtension();

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
    const step = {
      type: StepType.Click as const,
      target: 'main',
      selectors: ['aria/Test'],
      offsetX: 1,
      offsetY: 1,
      assertedEvents: [{ type: AssertedEventType.Navigation as const }],
    };
    const flow = { title: 'test', steps: [step] };
    t.assert.snapshot(
      await stringify(flow, {
        extension: ext,
      })
    );
  });
});
