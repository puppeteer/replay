/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import { describe, it } from 'node:test';
import assert from 'node:assert';
import { parseSourceMap, stringify, stripSourceMap } from '../src/stringify.js';
import { StringifyExtension } from '../src/StringifyExtension.js';
import { StepType } from '../src/Schema.js';
import type { Step, UserFlow } from '../src/Schema.js';
import type { LineWriter } from '../src/LineWriter.js';
import { decode } from '../src/vlq.js';

describe('stringify', () => {
  it('should print the correct script for a navigate step', async (t) => {
    const flow = {
      title: 'Test Recording',
      steps: [
        {
          type: StepType.Navigate as const,
          url: 'https://localhost/',
        },
      ],
    };
    t.assert.snapshot(await stringify(flow));
  });

  it('should print the correct script for a emulateNetworkCondition step', async (t) => {
    const flow = {
      title: 'Test Recording',
      steps: [
        {
          type: StepType.EmulateNetworkConditions as const,
          download: 100,
          upload: 100,
          latency: 999,
        },
      ],
    };
    t.assert.snapshot(await stringify(flow));
  });

  it('should print the correct script if the target is not the main page', async (t) => {
    const flow = {
      title: 'Test Recording',
      steps: [
        {
          type: StepType.Click as const,
          target: 'https://localhost/test',
          selectors: ['aria/Test'],
          offsetX: 1,
          offsetY: 1,
        },
      ],
    };
    t.assert.snapshot(await stringify(flow));
  });

  it('should use step and flow timeouts', async (t) => {
    const flow = {
      title: 'Test Recording',
      timeout: 10000,
      steps: [
        {
          type: StepType.Click as const,
          target: 'https://localhost/test',
          selectors: ['aria/Test'],
          offsetX: 1,
          offsetY: 1,
          timeout: 20000,
        },
      ],
    };
    t.assert.snapshot(await stringify(flow));
  });

  it('should print the correct script if the step is within an iframe', async (t) => {
    const flow = {
      title: 'Test Recording',
      steps: [
        {
          type: StepType.Click as const,
          target: 'main',
          frame: [1, 1],
          selectors: ['aria/Test'],
          offsetX: 1,
          offsetY: 1,
        },
      ],
    };
    t.assert.snapshot(await stringify(flow));
  });

  it('should fail when given an invalid step type', async () => {
    try {
      await stringify({
        title: 'Test Recording',
        steps: [
          {
            // @ts-ignore
            type: 'invalid',
            target: 'main',
            frame: [1, 1],
            selectors: ['aria/Test'],
            offsetX: 1,
            offsetY: 1,
          },
        ],
      });
      assert.fail('Not reachable.');
    } catch (err) {
      assert.match((err as Error).message, /^Unknown step type: invalid$/);
    }
  });

  it('should print the correct script for a keydown step', async (t) => {
    const flow = {
      title: 'Test Recording',
      steps: [
        {
          type: StepType.KeyDown as const,
          target: 'main',
          key: 'E' as const,
        },
      ],
    };
    t.assert.snapshot(await stringify(flow));
  });

  it('should print the correct script for a keyup step', async (t) => {
    const flow = {
      title: 'Test Recording',
      steps: [
        {
          type: StepType.KeyUp as const,
          target: 'main',
          key: 'E' as const,
        },
      ],
    };
    t.assert.snapshot(await stringify(flow));
  });

  it('should print the correct script for scroll events', async (t) => {
    const flow = {
      title: 'Test Recording',
      steps: [
        {
          type: StepType.Scroll as const,
          target: 'main',
          selectors: ['body > div:nth-child(1)'],
          x: 0,
          y: 40,
        },
        {
          type: StepType.Scroll as const,
          target: 'main',
          x: 40,
          y: 40,
        },
      ],
    };
    t.assert.snapshot(await stringify(flow));
  });

  it('should print the correct script for waitForElement steps', async (t) => {
    const flow = {
      title: 'Test Recording',
      steps: [
        {
          type: StepType.WaitForElement as const,
          selectors: ['body > div:nth-child(1)'],
        },
      ],
    };
    t.assert.snapshot(await stringify(flow));
  });

  it('should print the correct script for waitForExpression steps', async (t) => {
    const flow = {
      title: 'Test Recording',
      steps: [
        {
          type: StepType.WaitForExpression as const,
          expression: '1 + 2',
        },
      ],
    };
    t.assert.snapshot(await stringify(flow));
  });

  it('invokes all hooks in extensions', async () => {
    class DummyExtension implements StringifyExtension {
      async beforeAllSteps(out: LineWriter): Promise<void> {
        out.appendLine('beforeAll');
      }

      async beforeEachStep(
        out: LineWriter,
        step: Step,
        flow: UserFlow
      ): Promise<void> {
        out.appendLine('beforeStep' + flow.steps.indexOf(step));
      }

      async stringifyStep(
        out: LineWriter,
        step: Step,
        flow: UserFlow
      ): Promise<void> {
        out.appendLine('stringifyStep' + flow.steps.indexOf(step));
      }

      async afterEachStep(
        out: LineWriter,
        step: Step,
        flow: UserFlow
      ): Promise<void> {
        out.appendLine('afterStep' + flow.steps.indexOf(step));
      }

      async afterAllSteps(out: LineWriter): Promise<void> {
        out.appendLine('afterAll');
      }
    }

    const extension = new DummyExtension();
    assert.strictEqual(
      await stringify(
        {
          title: 'test',
          steps: [{ type: StepType.CustomStep, name: 'test', parameters: {} }],
        },
        { extension }
      ),
      [
        'beforeAll',
        'beforeStep0',
        'stringifyStep0',
        'afterStep0',
        'afterAll',
        '//# recorderSourceMap=BBD',
        '',
      ].join('\n')
    );
  });

  it('should produce a source map', async (t) => {
    const flow = {
      title: 'Test Recording',
      steps: [
        {
          type: StepType.WaitForElement as const,
          selectors: ['body > div:nth-child(1)'],
        },
      ],
    };
    const str = await stringify(flow);
    const sourceMapLine = str
      .split('\n')
      .reverse()
      .find((line) => line.trim() !== '');
    t.assert.snapshot(
      decode(sourceMapLine?.split('//# recorderSourceMap=').pop() as string)
    );
  });

  it('should parse a source map', async () => {
    const sourceMap = parseSourceMap(`
      test
      test
      test
      //# recorderSourceMap=BBD
    `);
    assert.deepStrictEqual(sourceMap, [1, 1, 3]);
  });

  it('should strip a source map', async () => {
    const sourceMap = stripSourceMap(`
      test
      test
      test
      //# recorderSourceMap=BBD
    `);
    assert.deepStrictEqual(
      sourceMap,
      `
      test
      test
      test
    `
    );
  });
});
