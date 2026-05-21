/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import { describe, it } from 'node:test';
import assert from 'node:assert';
import { formatJSONAsJS } from '../src/JSONUtils.js';
import { StepType, AssertedEventType } from '../src/Schema.js';

describe('JSONUtils', () => {
  it('should format JSON as JS', async (t) => {
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
    t.assert.snapshot(str);
    delete json['undefinedTest'];
    assert.deepStrictEqual(Function(`'use strict';return (${str})`)(), json);
  });

  it('should properly escape <script>', async (t) => {
    t.assert.snapshot(
      formatJSONAsJS(
        '<script>test</script><script>test</script><script>test</script>',
        ''
      )
    );
  });
});
