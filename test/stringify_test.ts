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

import { stringify } from '../src/stringify.js';
import { assert } from 'chai';

describe('stringify', () => {
  it('should print the correct script for a navigate step', async () => {
    const flow = {
      title: 'Test Recording',
      steps: [
        {
          type: 'navigate' as const,
          url: 'https://localhost/',
        },
      ],
    };
    assert.deepEqual(
      await stringify(flow),
      `const puppeteer = require('puppeteer'); // v13.0.0 or later

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const timeout = 5000;
  page.setDefaultTimeout(timeout);

  ${helpers}
  {
    const targetPage = page;
    await targetPage.goto("https://localhost/");
  }

  await browser.close();
})();
`
    );
  });

  it('should print the correct script for a emulateNetworkCondition step', async () => {
    const flow = {
      title: 'Test Recording',
      steps: [
        {
          type: 'emulateNetworkConditions' as const,
          download: 100,
          upload: 100,
          latency: 999,
        },
      ],
    };
    assert.deepEqual(
      await stringify(flow),
      `const puppeteer = require('puppeteer'); // v13.0.0 or later

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const timeout = 5000;
  page.setDefaultTimeout(timeout);

  ${helpers}
  {
    const targetPage = page;
    await targetPage.emulateNetworkConditions({
      offline: false,
      downloadThroughput: 100,
      uploadThroughput: 100,
      latency: 999,
    });
  }

  await browser.close();
})();
`
    );
  });

  it('should print the correct script if the target is not the main page', async () => {
    const flow = {
      title: 'Test Recording',
      steps: [
        {
          type: 'click' as const,
          target: 'https://localhost/test',
          selectors: ['aria/Test'],
          offsetX: 1,
          offsetY: 1,
        },
      ],
    };
    assert.deepEqual(
      await stringify(flow),
      `const puppeteer = require('puppeteer'); // v13.0.0 or later

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const timeout = 5000;
  page.setDefaultTimeout(timeout);

  ${helpers}
  {
    const target = await browser.waitForTarget(t => t.url() === "https://localhost/test", { timeout });
    const targetPage = await target.page();
    targetPage.setDefaultTimeout(timeout);
    const element = await waitForSelectors(["aria/Test"], targetPage, { timeout, visible: true });
    await scrollIntoViewIfNeeded(element, timeout);
    await element.click({ offset: { x: 1, y: 1} });
  }

  await browser.close();
})();
`
    );
  });

  it('should print the correct script if the step is within an iframe', async () => {
    const flow = {
      title: 'Test Recording',
      steps: [
        {
          type: 'click' as const,
          target: 'main',
          frame: [1, 1],
          selectors: ['aria/Test'],
          offsetX: 1,
          offsetY: 1,
        },
      ],
    };
    assert.deepEqual(
      await stringify(flow),
      `const puppeteer = require('puppeteer'); // v13.0.0 or later

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const timeout = 5000;
  page.setDefaultTimeout(timeout);

  ${helpers}
  {
    const targetPage = page;
    let frame = targetPage.mainFrame();
    frame = frame.childFrames()[1];
    frame = frame.childFrames()[1];
    const element = await waitForSelectors(["aria/Test"], frame, { timeout, visible: true });
    await scrollIntoViewIfNeeded(element, timeout);
    await element.click({ offset: { x: 1, y: 1} });
  }

  await browser.close();
})();
`
    );
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

  it('should print the correct script for a keydown step', async () => {
    const flow = {
      title: 'Test Recording',
      steps: [
        {
          type: 'keyDown' as const,
          target: 'main',
          key: 'E' as const,
        },
      ],
    };
    assert.deepEqual(
      await stringify(flow),
      `const puppeteer = require('puppeteer'); // v13.0.0 or later

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const timeout = 5000;
  page.setDefaultTimeout(timeout);

  ${helpers}
  {
    const targetPage = page;
    await targetPage.keyboard.down("E");
  }

  await browser.close();
})();
`
    );
  });

  it('should print the correct script for a keyup step', async () => {
    const flow = {
      title: 'Test Recording',
      steps: [
        {
          type: 'keyUp' as const,
          target: 'main',
          key: 'E' as const,
        },
      ],
    };
    assert.deepEqual(
      await stringify(flow),
      `const puppeteer = require('puppeteer'); // v13.0.0 or later

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const timeout = 5000;
  page.setDefaultTimeout(timeout);

  ${helpers}
  {
    const targetPage = page;
    await targetPage.keyboard.up("E");
  }

  await browser.close();
})();
`
    );
  });

  it('should print the correct script for scroll events', async () => {
    const flow = {
      title: 'Test Recording',
      steps: [
        {
          type: 'scroll' as const,
          target: 'main',
          selectors: ['body > div:nth-child(1)'],
          x: 0,
          y: 40,
        },
        {
          type: 'scroll' as const,
          target: 'main',
          x: 40,
          y: 40,
        },
      ],
    };
    assert.deepEqual(
      await stringify(flow),
      `const puppeteer = require('puppeteer'); // v13.0.0 or later

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const timeout = 5000;
  page.setDefaultTimeout(timeout);

  ${helpers}
  {
    const targetPage = page;
    const element = await waitForSelectors(["body > div:nth-child(1)"], targetPage, { timeout, visible: true });
    await scrollIntoViewIfNeeded(element, timeout);
    await element.evaluate((el, x, y) => { el.scrollTop = y; el.scrollLeft = x; }, 0, 40);
  }
  {
    const targetPage = page;
    await targetPage.evaluate((x, y) => { window.scroll(x, y); }, 40, 40)
  }

  await browser.close();
})();
`
    );
  });

  it('should print the correct script for waitForElement steps', async () => {
    const flow = {
      title: 'Test Recording',
      steps: [
        {
          type: 'waitForElement' as const,
          selectors: ['body > div:nth-child(1)'],
        },
      ],
    };
    assert.deepEqual(
      await stringify(flow),
      `const puppeteer = require('puppeteer'); // v13.0.0 or later

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const timeout = 5000;
  page.setDefaultTimeout(timeout);

  ${helpers}
  {
    const targetPage = page;
    await waitForElement({"type":"waitForElement","selectors":["body > div:nth-child(1)"]}, targetPage, timeout);
  }

  await browser.close();
})();
`
    );
  });

  it('should print the correct script for waitForExpression steps', async () => {
    const flow = {
      title: 'Test Recording',
      steps: [
        {
          type: 'waitForExpression' as const,
          expression: '1 + 2',
        },
      ],
    };
    assert.deepEqual(
      await stringify(flow),
      `const puppeteer = require('puppeteer'); // v13.0.0 or later

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const timeout = 5000;
  page.setDefaultTimeout(timeout);

  ${helpers}
  {
    const targetPage = page;
    await targetPage.waitForFunction("1 + 2", { timeout });
  }

  await browser.close();
})();
`
    );
  });
});

const helpers = `async function waitForSelectors(selectors, frame, options) {
    for (const selector of selectors) {
      try {
        return await waitForSelector(selector, frame, options);
      } catch (err) {
        console.error(err);
      }
    }
    throw new Error('Could not find element for selectors: ' + JSON.stringify(selectors));
  }

  async function scrollIntoViewIfNeeded(element, timeout) {
    await waitForConnected(element, timeout);
    const isInViewport = await element.isIntersectingViewport({threshold: 0});
    if (isInViewport) {
      return;
    }
    await element.evaluate(element => {
      element.scrollIntoView({
        block: 'center',
        inline: 'center',
        behavior: 'auto',
      });
    });
    await waitForInViewport(element, timeout);
  }

  async function waitForConnected(element, timeout) {
    await waitForFunction(async () => {
      return await element.getProperty('isConnected');
    }, timeout);
  }

  async function waitForInViewport(element, timeout) {
    await waitForFunction(async () => {
      return await element.isIntersectingViewport({threshold: 0});
    }, timeout);
  }

  async function waitForSelector(selector, frame, options) {
    if (!Array.isArray(selector)) {
      selector = [selector];
    }
    if (!selector.length) {
      throw new Error('Empty selector provided to waitForSelector');
    }
    let element = null;
    for (let i = 0; i < selector.length; i++) {
      const part = selector[i];
      if (element) {
        element = await element.waitForSelector(part, options);
      } else {
        element = await frame.waitForSelector(part, options);
      }
      if (!element) {
        throw new Error('Could not find element: ' + selector.join('>>'));
      }
      if (i < selector.length - 1) {
        element = (await element.evaluateHandle(el => el.shadowRoot ? el.shadowRoot : el)).asElement();
      }
    }
    if (!element) {
      throw new Error('Could not find element: ' + selector.join('|'));
    }
    return element;
  }

  async function waitForElement(step, frame, timeout) {
    const count = step.count || 1;
    const operator = step.operator || '>=';
    const comp = {
      '==': (a, b) => a === b,
      '>=': (a, b) => a >= b,
      '<=': (a, b) => a <= b,
    };
    const compFn = comp[operator];
    await waitForFunction(async () => {
      const elements = await querySelectorsAll(step.selectors, frame);
      return compFn(elements.length, count);
    }, timeout);
  }

  async function querySelectorsAll(selectors, frame) {
    for (const selector of selectors) {
      const result = await querySelectorAll(selector, frame);
      if (result.length) {
        return result;
      }
    }
    return [];
  }

  async function querySelectorAll(selector, frame) {
    if (!Array.isArray(selector)) {
      selector = [selector];
    }
    if (!selector.length) {
      throw new Error('Empty selector provided to querySelectorAll');
    }
    let elements = [];
    for (let i = 0; i < selector.length; i++) {
      const part = selector[i];
      if (i === 0) {
        elements = await frame.$$(part);
      } else {
        const tmpElements = elements;
        elements = [];
        for (const el of tmpElements) {
          elements.push(...(await el.$$(part)));
        }
      }
      if (elements.length === 0) {
        return [];
      }
      if (i < selector.length - 1) {
        const tmpElements = [];
        for (const el of elements) {
          const newEl = (await el.evaluateHandle(el => el.shadowRoot ? el.shadowRoot : el)).asElement();
          if (newEl) {
            tmpElements.push(newEl);
          }
        }
        elements = tmpElements;
      }
    }
    return elements;
  }

  async function waitForFunction(fn, timeout) {
    let isActive = true;
    setTimeout(() => {
      isActive = false;
    }, timeout);
    while (isActive) {
      const result = await fn();
      if (result) {
        return;
      }
      await new Promise(resolve => setTimeout(resolve, 100));
    }
    throw new Error('Timed out');
  }`;
