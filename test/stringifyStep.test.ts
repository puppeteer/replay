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

import { stringifyStep } from '../src/stringify.js';
import { assert } from 'chai';
import { StringifyExtension } from '../src/StringifyExtension.js';
import { Step, StepType, UserFlow } from '../src/Schema.js';
import { LineWriter } from '../src/LineWriter.js';
import snapshot from 'snap-shot-it';

describe('stringifyStep', () => {
  it('should stringify a single step', async () => {
    snapshot(
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
