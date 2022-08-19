import snapshot from 'snap-shot-it';

import { stringify } from '../../src/stringify.js';
import { LighthouseStringifyExtension } from '../../src/lighthouse/LighthouseStringifyExtension.js';
import { UserFlow } from '../../src/Schema.js';

describe('LighthouseStringifyExtension', () => {
  it('handles ending timespan', async () => {
    const flowJson: UserFlow = {
      title: 'Test Flow',
      steps: [
        {
          type: 'setViewport',
          width: 757,
          height: 988,
          deviceScaleFactor: 3,
          isMobile: true,
          hasTouch: true,
          isLandscape: false,
        },
        {
          type: 'navigate',
          url: 'https://example.com',
          assertedEvents: [
            {
              type: 'navigation',
              url: 'https://example.com',
              title: '',
            },
          ],
        },
        {
          type: 'click',
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
          type: 'setViewport',
          width: 757,
          height: 988,
          deviceScaleFactor: 3,
          isMobile: true,
          hasTouch: true,
          isLandscape: false,
        },
        {
          type: 'navigate',
          url: 'https://example.com',
          assertedEvents: [
            {
              type: 'navigation',
              url: 'https://example.com',
              title: '',
            },
          ],
        },
        {
          type: 'click',
          target: 'main',
          selectors: [['#button']],
          offsetY: 13.5625,
          offsetX: 61,
        },
        {
          type: 'navigate',
          url: 'https://example.com/page/',
          assertedEvents: [
            {
              type: 'navigation',
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
          type: 'setViewport',
          width: 757,
          height: 988,
          deviceScaleFactor: 3,
          isMobile: true,
          hasTouch: true,
          isLandscape: false,
        },
        {
          type: 'navigate',
          url: 'https://example.com',
          assertedEvents: [
            {
              type: 'navigation',
              url: 'https://example.com',
              title: '',
            },
          ],
        },
        {
          type: 'click',
          target: 'main',
          selectors: [['#link']],
          offsetY: 13.5625,
          offsetX: 61,
          assertedEvents: [
            {
              type: 'navigation',
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
