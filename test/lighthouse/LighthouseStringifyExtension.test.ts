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

import { stringify } from '../../src/stringify.js';
import { LighthouseStringifyExtension } from '../../src/lighthouse/LighthouseStringifyExtension.js';
import { AssertedEventType, StepType, UserFlow } from '../../src/Schema.js';

describe('LighthouseStringifyExtension', () => {
  it('handles ending timespan', async () => {
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

    snapshot(relevantOutput);
  });

  it('handles ending navigation', async () => {
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

    snapshot(relevantOutput);
  });

  it('handles multiple sequential navigations', async () => {
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

    snapshot(relevantOutput);
  });
});
