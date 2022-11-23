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
import { assert } from 'chai';
import { formatJSONAsJS } from '../src/JSONUtils.js';
import { StepType, AssertedEventType } from '../src/Schema.js';

describe('JSONUtils', () => {
  it('should format JSON as JS', async () => {
    const json = {
      title: 'test',
      test: true,
      steps: [
        {
          type: StepType.Click as const,
          target: 'main',
          selectors: ['aria/Test', ['.cls', '.cls']],
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
      otherTest: 1.234,
      undefinedTest: undefined,
      nullTest: null,
    };
    const str = formatJSONAsJS(json, '  ');
    snapshot(str);
    delete json['undefinedTest'];
    assert.deepStrictEqual(Function(`'use strict';return (${str})`)(), json);
  });

  it('should properly escape <script>', async () => {
    snapshot(
      formatJSONAsJS(
        '<script>test</script><script>test</script><script>test</script>',
        ''
      )
    );
  });
});
