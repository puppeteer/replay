/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import { describe, it } from 'node:test';
import assert from 'node:assert';
import { stringifyStep } from '../src/stringify.js';
import { StringifyExtension } from '../src/StringifyExtension.js';
import { StepType } from '../src/Schema.js';
import type { Step, UserFlow } from '../src/Schema.js';
import type { LineWriter } from '../src/LineWriter.js';

describe('stringifyStep', () => {
  it('should stringify a single step', async (t) => {
    t.assert.snapshot(
      await stringifyStep({
        type: StepType.Navigate as const,
        url: 'https://localhost/',
      })
    );
  });

  it('invokes all hooks in extensions relevant for stringifyStep', async () => {
    class DummyExtension implements StringifyExtension {
      async beforeAllSteps(out: LineWriter): Promise<void> {
        out.appendLine('beforeAll');
      }

      async beforeEachStep(
        out: LineWriter,
        step: Step,
        flow?: UserFlow
      ): Promise<void> {
        out.appendLine('beforeStep ' + flow);
      }

      async stringifyStep(
        out: LineWriter,
        step: Step,
        flow?: UserFlow
      ): Promise<void> {
        out.appendLine('stringifyStep ' + flow);
      }

      async afterEachStep(
        out: LineWriter,
        step: Step,
        flow?: UserFlow
      ): Promise<void> {
        out.appendLine('afterStep ' + flow);
      }

      async afterAllSteps(out: LineWriter): Promise<void> {
        out.appendLine('afterAll');
      }
    }

    const extension = new DummyExtension();
    assert.strictEqual(
      await stringifyStep(
        { type: StepType.CustomStep, name: 'test', parameters: {} },
        { extension }
      ),
      [
        'beforeStep undefined',
        'stringifyStep undefined',
        'afterStep undefined',
        '',
      ].join('\n')
    );
  });
});
