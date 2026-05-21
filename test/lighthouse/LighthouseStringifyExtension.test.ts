/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import { describe, it } from 'node:test';
import { stringify } from '../../src/stringify.js';
import { LighthouseStringifyExtension } from '../../src/lighthouse/LighthouseStringifyExtension.js';
import { AssertedEventType, StepType } from '../../src/Schema.js';
import type { UserFlow } from '../../src/Schema.js';

describe('LighthouseStringifyExtension', () => {
  it('handles ending timespan', async (t) => {
    const flowJson: UserFlow = {
      title: 'Test Flow',
      steps: [
        {
          type: StepType.SetViewport,
          width: 757,
          height: 988,
          deviceScaleFactor: 3,
          isMobile: true,
          hasTouch: true,
          isLandscape: false,
        },
        {
          type: StepType.Navigate,
          url: 'https://example.com',
          assertedEvents: [
            {
              type: AssertedEventType.Navigation,
              url: 'https://example.com',
              title: '',
            },
          ],
        },
        {
          type: StepType.Click,
          target: 'main',
          selectors: [['#button']],
          offsetY: 13.5625,
          offsetX: 61,
        },
      ],
    };

    const scriptContents = await stringify(flowJson, {
      extension: new LighthouseStringifyExtension(),
    });

    // Trim the output to the relevant stuff
    const endIndex = scriptContents.indexOf('browser.close');
    const relevantOutput = scriptContents.substring(0, endIndex);

    t.assert.snapshot(relevantOutput);
  });

  it('handles ending navigation', async (t) => {
    const flowJson: UserFlow = {
      title: 'Test Flow',
      steps: [
        {
          type: StepType.SetViewport,
          width: 757,
          height: 988,
          deviceScaleFactor: 3,
          isMobile: true,
          hasTouch: true,
          isLandscape: false,
        },
        {
          type: StepType.Navigate,
          url: 'https://example.com',
          assertedEvents: [
            {
              type: AssertedEventType.Navigation,
              url: 'https://example.com',
              title: '',
            },
          ],
        },
        {
          type: StepType.Click,
          target: 'main',
          selectors: [['#button']],
          offsetY: 13.5625,
          offsetX: 61,
        },
        {
          type: StepType.Navigate,
          url: 'https://example.com/page/',
          assertedEvents: [
            {
              type: AssertedEventType.Navigation,
              url: 'https://example.com/page/',
              title: '',
            },
          ],
        },
      ],
    };

    const scriptContents = await stringify(flowJson, {
      extension: new LighthouseStringifyExtension(),
    });

    // Trim the output to the relevant stuff
    const endIndex = scriptContents.indexOf('browser.close');
    const relevantOutput = scriptContents.substring(0, endIndex);

    t.assert.snapshot(relevantOutput);
  });

  it('handles multiple sequential navigations', async (t) => {
    const flowJson: UserFlow = {
      title: 'Test Flow',
      steps: [
        {
          type: StepType.SetViewport,
          width: 757,
          height: 988,
          deviceScaleFactor: 3,
          isMobile: true,
          hasTouch: true,
          isLandscape: false,
        },
        {
          type: StepType.Navigate,
          url: 'https://example.com',
          assertedEvents: [
            {
              type: AssertedEventType.Navigation,
              url: 'https://example.com',
              title: '',
            },
          ],
        },
        {
          type: StepType.Click,
          target: 'main',
          selectors: [['#link']],
          offsetY: 13.5625,
          offsetX: 61,
          assertedEvents: [
            {
              type: AssertedEventType.Navigation,
              url: 'https://example.com/page',
              title: '',
            },
          ],
        },
      ],
    };

    const scriptContents = await stringify(flowJson, {
      extension: new LighthouseStringifyExtension(),
    });

    // Trim the output to the relevant stuff
    const endIndex = scriptContents.indexOf('browser.close');
    const relevantOutput = scriptContents.substring(0, endIndex);

    t.assert.snapshot(relevantOutput);
  });
});
