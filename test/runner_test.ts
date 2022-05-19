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

import puppeteer from 'puppeteer';
import path from 'path';
import { fileURLToPath } from 'url';
import { assert } from 'chai';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import { createRunner } from '../src/Runner.js';
import { PuppeteerRunnerExtension } from '../src/PuppeteerRunnerExtension.js';

import { TestServer } from '../third_party/testserver/index.js';
import { RunnerExtension } from '../src/RunnerExtension.js';
import { Step, UserFlow } from '../src/Schema.js';

const HTTP_PORT = 8907;
const HTTP_PREFIX = `http://localhost:${HTTP_PORT}`;
const OOPIF_PREFIX = `http://oopifdomain:${HTTP_PORT}`;
const HTTPS_PORT = HTTP_PORT + 1;

async function createServers() {
  const resources = path.join(__dirname, 'resources');
  const httpServer = await TestServer.create(resources, HTTP_PORT);
  const httpsServer = await TestServer.createHTTPS(resources, HTTPS_PORT);
  return { httpServer, httpsServer };
}

describe('Runner', () => {
  let browser: puppeteer.Browser;
  let page: puppeteer.Page;
  let httpServer: TestServer;
  let httpsServer: TestServer;

  before(async () => {
    const servers = await createServers();
    httpServer = servers.httpServer;
    httpsServer = servers.httpsServer;
    const headless = process.env.PUPPETEER_HEADFUL !== 'true';
    browser = await puppeteer.launch({
      headless,
      args: ['--site-per-process', '--host-rules=MAP oopifdomain 127.0.0.1'],
    });
  });

  beforeEach(async () => {
    page = await browser.newPage();
  });

  afterEach(async () => {
    await page.close();
  });

  after(async () => {
    for (const page of await browser.pages()) {
      await page.close();
    }
    await browser.close();
    await httpServer.stop();
    await httpsServer.stop();
  });

  it('should run an empty flow using Puppeteer', async () => {
    const runner = await createRunner(
      {
        title: 'test',
        steps: [],
      },
      new PuppeteerRunnerExtension(browser, page)
    );
    await runner.run();
  });

  it('should navigate to the right URL', async () => {
    const runner = await createRunner(
      {
        title: 'test',
        steps: [
          {
            type: 'navigate',
            url: `${HTTP_PREFIX}/empty.html`,
          },
        ],
      },
      new PuppeteerRunnerExtension(browser, page)
    );
    await runner.run();
    assert.strictEqual(page.url(), `${HTTP_PREFIX}/empty.html`);
  });

  it('should navigate to URL with BASE_URL', async () => {
    process.env.BASE_URL = 'https://';

    const runner = await createRunner(
      {
        title: 'test',
        steps: [
          {
            type: 'navigate',
            url: `${HTTP_PREFIX}/empty.html`,
          },
        ],
      },
      new PuppeteerRunnerExtension(browser, page)
    );

    try {
      await runner.run();
    } catch (error) {
      assert.instanceOf(
        error,
        Error,
        `invalid URL BASE_URL: ${process.env.BASE_URL}`
      );
    }

    delete process.env.BASE_URL;
  });

  it('should navigate to URL with BASE_URL', async () => {
    process.env.BASE_URL = 'https://developer.chrome.com';

    const runner = await createRunner(
      {
        title: 'test',
        steps: [
          {
            type: 'navigate',
            url: `${HTTP_PREFIX}/docs/devtools/recorder/#open`,
          },
        ],
      },
      new PuppeteerRunnerExtension(browser, page)
    );

    await runner.run();
    assert.strictEqual(
      page.url(),
      `https://developer.chrome.com/docs/devtools/recorder/#open`
    );

    delete process.env.BASE_URL;
  });

  it('should be able to replay mouse click steps', async () => {
    const runner = await createRunner(
      {
        title: 'test',
        steps: [
          {
            type: 'navigate',
            url: `${HTTP_PREFIX}/main.html`,
          },
          {
            type: 'click',
            button: 'primary',
            selectors: ['#test'],
            offsetX: 1,
            offsetY: 1,
          },
          {
            type: 'click',
            button: 'auxiliary',
            selectors: ['#test'],
            offsetX: 1,
            offsetY: 1,
          },
          {
            type: 'click',
            button: 'secondary',
            selectors: ['#test'],
            offsetX: 1,
            offsetY: 1,
          },
          {
            type: 'click',
            button: 'back',
            selectors: ['#test'],
            offsetX: 1,
            offsetY: 1,
          },
          {
            type: 'click',
            button: 'forward',
            selectors: ['#test'],
            offsetX: 1,
            offsetY: 1,
          },
        ],
      },
      new PuppeteerRunnerExtension(browser, page)
    );
    await runner.run();
    assert.isTrue(
      await page.evaluate(() => {
        const context = window as unknown as {
          buttonClicks: number[];
        };
        return (
          context.buttonClicks[0] === 0 &&
          context.buttonClicks[1] === 1 &&
          context.buttonClicks[2] === 2 &&
          context.buttonClicks[3] === 3 &&
          context.buttonClicks[4] === 4
        );
      })
    );
  });

  it('should be able to replay click steps on SVG path elements', async () => {
    const runner = await createRunner(
      {
        title: 'test',
        steps: [
          {
            type: 'navigate',
            url: `${HTTP_PREFIX}/svg.html`,
          },
          {
            type: 'click',
            selectors: ['svg > path'],
            offsetX: 1,
            offsetY: 1,
          },
        ],
      },
      new PuppeteerRunnerExtension(browser, page)
    );
    await runner.run();
  });

  it('should be able to replay click steps on checkboxes', async () => {
    const runner = await createRunner(
      {
        title: 'test',
        steps: [
          {
            type: 'navigate',
            url: `${HTTP_PREFIX}/checkbox.html`,
          },
          {
            type: 'click',
            selectors: ['input'],
            offsetX: 1,
            offsetY: 1,
          },
        ],
      },
      new PuppeteerRunnerExtension(browser, page)
    );
    await runner.run();
    assert.isTrue(
      await page.evaluate(() => document.querySelector('input')?.checked)
    );
  });

  it('should be able to replay keyboard events', async () => {
    const runner = await createRunner(
      {
        title: 'test',
        steps: [
          {
            type: 'navigate',
            url: `${HTTP_PREFIX}/input.html`,
          },
          {
            type: 'keyDown',
            target: 'main',
            key: 'Tab',
          },
          {
            type: 'keyUp',
            target: 'main',
            key: 'Tab',
          },
          {
            type: 'keyDown',
            target: 'main',
            key: '1',
          },
          {
            type: 'keyUp',
            target: 'main',
            key: '1',
          },
          {
            type: 'keyDown',
            target: 'main',
            key: 'Tab',
          },
          {
            type: 'keyUp',
            target: 'main',
            key: 'Tab',
          },
          {
            type: 'keyDown',
            target: 'main',
            key: '2',
          },
          {
            type: 'keyUp',
            target: 'main',
            key: '2',
          },
        ],
      },
      new PuppeteerRunnerExtension(browser, page)
    );
    await runner.run();
    const value = await page.$eval('#log', (e) =>
      (e as HTMLElement).innerText.trim()
    );
    assert.strictEqual(value, ['one:1', 'two:2'].join('\n'));
  });

  it('should be able to replay events on select', async () => {
    const runner = await createRunner(
      {
        title: 'test',
        steps: [
          {
            type: 'navigate',
            url: `${HTTP_PREFIX}/select.html`,
          },
          {
            type: 'change',
            target: 'main',
            selectors: ['aria/Select'],
            value: 'O2',
          },
        ],
      },
      new PuppeteerRunnerExtension(browser, page)
    );
    await runner.run();
    const value = await page.$eval(
      '#select',
      (e) => (e as HTMLSelectElement).value
    );
    assert.strictEqual(value, 'O2');
  });

  it('should close the select dropdown after the click + change', async () => {
    const runner = await createRunner(
      {
        title: 'test',
        steps: [
          {
            type: 'navigate',
            url: `${HTTP_PREFIX}/select.html`,
          },
          {
            type: 'click',
            target: 'main',
            selectors: ['aria/Select'],
            offsetX: 1,
            offsetY: 1,
          },
          {
            type: 'change',
            target: 'main',
            selectors: ['aria/Select'],
            value: 'O2',
          },
        ],
      },
      new PuppeteerRunnerExtension(browser, page)
    );
    await runner.run();
    const value = await page.$eval(
      '#select',
      (e) => (e as HTMLSelectElement).value
    );
    assert.strictEqual(value, 'O2');
    // Unfortunately, there is no way to assert that the select dropdown is opened or closed (AFAIK).
    // So this behaviour needs to be checked visually in headful mode or we need to have screenshot tests.
  });

  it('should be able to replay change events on non-text inputs', async () => {
    const runner = await createRunner(
      {
        title: 'test',
        steps: [
          {
            type: 'navigate',
            url: `${HTTP_PREFIX}/input.html`,
          },
          {
            type: 'change',
            target: 'main',
            selectors: ['#color'],
            value: '#333333',
          },
        ],
      },
      new PuppeteerRunnerExtension(browser, page)
    );
    await runner.run();
    const value = await page.$eval(
      '#color',
      (e) => (e as HTMLSelectElement).value
    );
    assert.strictEqual(value, '#333333');
  });

  it('should be able to override the value in text inputs that have a value already', async () => {
    const runner = await createRunner(
      {
        title: 'test',
        steps: [
          {
            type: 'navigate',
            url: `${HTTP_PREFIX}/input.html`,
          },
          {
            type: 'change',
            target: 'main',
            selectors: ['#prefilled'],
            value: 'cba',
          },
        ],
      },
      new PuppeteerRunnerExtension(browser, page)
    );
    await runner.run();
    const value = await page.$eval(
      '#prefilled',
      (e) => (e as HTMLSelectElement).value
    );
    assert.strictEqual(value, 'cba');
  });

  it('should be able to override the value in text inputs that are partially prefilled', async () => {
    const runner = await createRunner(
      {
        title: 'test',
        steps: [
          {
            type: 'navigate',
            url: `${HTTP_PREFIX}/input.html`,
          },
          {
            type: 'change',
            target: 'main',
            selectors: ['#partially-prefilled'],
            value: 'abcdef',
          },
        ],
      },
      new PuppeteerRunnerExtension(browser, page)
    );
    await runner.run();
    const value = await page.$eval(
      '#partially-prefilled',
      (e) => (e as HTMLSelectElement).value
    );
    assert.strictEqual(value, 'abcdef');
  });

  it('should be able to replay viewport change', async () => {
    const runner = await createRunner(
      {
        title: 'test',
        steps: [
          {
            type: 'navigate',
            url: `${HTTP_PREFIX}/select.html`,
          },
          {
            type: 'setViewport',
            width: 800,
            height: 600,
            isLandscape: false,
            isMobile: false,
            deviceScaleFactor: 1,
            hasTouch: false,
          },
        ],
      },
      new PuppeteerRunnerExtension(browser, page)
    );
    await runner.run();
    assert.strictEqual(
      await page.evaluate(() => window.visualViewport.width),
      800
    );
    assert.strictEqual(
      await page.evaluate(() => window.visualViewport.height),
      600
    );
  });

  it('should be able to replay scroll events', async () => {
    const runner = await createRunner(
      {
        title: 'test',
        steps: [
          {
            type: 'navigate',
            url: `${HTTP_PREFIX}/scroll.html`,
          },
          {
            type: 'setViewport',
            width: 800,
            height: 600,
            isLandscape: false,
            isMobile: false,
            deviceScaleFactor: 1,
            hasTouch: false,
          },
          {
            type: 'scroll',
            target: 'main',
            selectors: ['body > div:nth-child(1)'],
            x: 0,
            y: 40,
          },
          {
            type: 'scroll',
            target: 'main',
            x: 40,
            y: 40,
          },
        ],
      },
      new PuppeteerRunnerExtension(browser, page)
    );
    await runner.run();
    assert.strictEqual(await page.evaluate(() => window.pageXOffset), 40);
    assert.strictEqual(await page.evaluate(() => window.pageYOffset), 40);
    assert.strictEqual(
      await page.evaluate(() => document.querySelector('#overflow')?.scrollTop),
      40
    );
    assert.strictEqual(
      await page.evaluate(
        () => document.querySelector('#overflow')?.scrollLeft
      ),
      0
    );
  });

  it('should be able to scroll into view when needed', async () => {
    const runner = await createRunner(
      {
        title: 'test',
        steps: [
          {
            type: 'setViewport',
            width: 800,
            height: 600,
            isLandscape: false,
            isMobile: false,
            deviceScaleFactor: 1,
            hasTouch: false,
          },
          {
            type: 'navigate',
            url: `${HTTP_PREFIX}/scroll-into-view.html`,
          },
          {
            type: 'click',
            selectors: [['button']],
            offsetX: 1,
            offsetY: 1,
          },
        ],
      },
      new PuppeteerRunnerExtension(browser, page)
    );
    await runner.run();
    assert.strictEqual(
      await page.evaluate(() => document.querySelector('button')?.innerText),
      'clicked'
    );
  });

  it('should be able to replay ARIA selectors on inputs', async () => {
    const runner = await createRunner(
      {
        title: 'test',
        steps: [
          {
            type: 'navigate',
            url: `${HTTP_PREFIX}/form.html`,
          },
          {
            type: 'setViewport',
            width: 800,
            height: 600,
            isLandscape: false,
            isMobile: false,
            deviceScaleFactor: 1,
            hasTouch: false,
          },
          {
            type: 'click',
            target: 'main',
            selectors: ['aria/Name:'],
            offsetX: 1,
            offsetY: 1,
          },
        ],
      },
      new PuppeteerRunnerExtension(browser, page)
    );
    await runner.run();
    assert.strictEqual(
      await page.evaluate(() => document.activeElement?.id),
      'name'
    );
  });

  it('should be able to waitForElement', async () => {
    const runner = await createRunner(
      {
        title: 'test',
        steps: [
          {
            type: 'navigate',
            url: `${HTTP_PREFIX}/shadow-dynamic.html`,
          },
          {
            type: 'waitForElement',
            selectors: [['custom-element', 'button']],
          },
          {
            type: 'click',
            target: 'main',
            selectors: [['custom-element', 'button']],
            offsetX: 1,
            offsetY: 1,
          },
          {
            type: 'waitForElement',
            selectors: [['custom-element', 'button']],
            operator: '>=',
            count: 2,
          },
        ],
      },
      new PuppeteerRunnerExtension(browser, page)
    );
    await runner.run();
    assert.strictEqual(
      await page.evaluate(
        () => document.querySelectorAll('custom-element').length
      ),
      2
    );
  });

  it('should be able to waitForExpression', async () => {
    const runner = await createRunner(
      {
        title: 'test',
        steps: [
          {
            type: 'navigate',
            url: `${HTTP_PREFIX}/shadow-dynamic.html`,
          },
          {
            type: 'click',
            target: 'main',
            selectors: [['custom-element', 'button']],
            offsetX: 1,
            offsetY: 1,
          },
          {
            type: 'waitForExpression',
            target: 'main',
            expression:
              'document.querySelectorAll("custom-element").length === 2',
          },
        ],
      },
      new PuppeteerRunnerExtension(browser, page)
    );
    await runner.run();
    assert.strictEqual(
      await page.evaluate(
        () => document.querySelectorAll('custom-element').length
      ),
      2
    );
  });

  it('should be able to replay actions with popups', async () => {
    const runner = await createRunner({
      title: 'test',
      steps: [
        {
          type: 'navigate',
          url: `${HTTP_PREFIX}/main.html`,
          assertedEvents: [
            {
              title: '',
              type: 'navigation',
              url: `${HTTP_PREFIX}/main.html`,
            },
          ],
        },
        {
          type: 'click',
          selectors: [['aria/Open Popup'], ['#popup']],
          target: 'main',
          offsetX: 1,
          offsetY: 1,
        },
        {
          type: 'click',
          selectors: [['aria/Button in Popup'], ['body > button']],
          target: `${HTTP_PREFIX}/popup.html`,
          offsetX: 1,
          offsetY: 1,
        },
        {
          type: 'close',
          target: `${HTTP_PREFIX}/popup.html`,
        },
      ],
    });
    await runner.run();
  });

  it('should run an empty flow using provided Puppeteer', async () => {
    const runner = await createRunner(
      {
        title: 'test',
        steps: [],
      },
      new PuppeteerRunnerExtension(browser, page)
    );
    await runner.run();
  });

  it('should run an empty flow auto-imported Puppeteer', async () => {
    const runner = await createRunner({
      title: 'test',
      steps: [],
    });
    await runner.run();
  });

  it('should run steps partially', async () => {
    class DummyExtension implements RunnerExtension {
      #log: string[] = [];

      getLog(): string {
        return this.#log.join(',');
      }

      async runStep(step: Step, flow: UserFlow): Promise<void> {
        this.#log.push(flow.steps.indexOf(step).toString(10));
      }
    }
    const extension = new DummyExtension();
    const runner = await createRunner(
      {
        title: 'test',
        steps: [
          { type: 'customStep', name: 'step1', parameters: {} },
          { type: 'customStep', name: 'step2', parameters: {} },
          { type: 'customStep', name: 'step3', parameters: {} },
        ],
      },
      extension
    );
    assert.strictEqual(await runner.run(-1), false);
    assert.strictEqual(extension.getLog(), '');
    assert.strictEqual(await runner.run(0), false);
    assert.strictEqual(extension.getLog(), '');
    assert.strictEqual(await runner.run(1), false);
    assert.strictEqual(extension.getLog(), '0');
    assert.strictEqual(await runner.run(3), true);
    assert.strictEqual(extension.getLog(), '0,1,2');
    assert.strictEqual(await runner.run(), true);
    assert.strictEqual(extension.getLog(), '0,1,2');
  });

  it('should run all extension hooks', async () => {
    class DummyExtension implements RunnerExtension {
      #log: string[] = [];

      getLog(): string {
        return this.#log.join(',');
      }

      async beforeAllSteps(): Promise<void> {
        this.#log.push('beforeAll');
      }

      async beforeEachStep(step: Step, flow: UserFlow): Promise<void> {
        this.#log.push('beforeStep' + flow.steps.indexOf(step));
      }

      async runStep(step: Step, flow: UserFlow): Promise<void> {
        this.#log.push('runStep' + flow.steps.indexOf(step));
      }

      async afterEachStep(step: Step, flow: UserFlow): Promise<void> {
        this.#log.push('afterStep' + flow.steps.indexOf(step));
      }

      async afterAllSteps(): Promise<void> {
        this.#log.push('afterAll');
      }
    }
    const extension = new DummyExtension();
    const runner = await createRunner(
      {
        title: 'test',
        steps: [{ type: 'customStep', name: 'step1', parameters: {} }],
      },
      extension
    );
    assert.strictEqual(await runner.run(), true);
    assert.strictEqual(
      extension.getLog(),
      'beforeAll,beforeStep0,runStep0,afterStep0,afterAll'
    );
  });

  it('should record interactions with OOPIFs', async () => {
    const runner = await createRunner(
      {
        title: 'Test Recording',
        steps: [
          {
            type: 'navigate',
            url: `${HTTP_PREFIX}/oopif.html`,
            assertedEvents: [
              {
                title: '',
                type: 'navigation',
                url: `${HTTP_PREFIX}/oopif.html`,
              },
            ],
          },
          {
            type: 'click',
            target: `${OOPIF_PREFIX}/iframe1.html`,
            selectors: [['aria/To iframe 2'], ['body > a']],
            offsetX: 1,
            offsetY: 1,
            assertedEvents: [
              {
                type: 'navigation',
                title: '',
                url: `${OOPIF_PREFIX}/iframe2.html`,
              },
            ],
          },
        ],
      },
      new PuppeteerRunnerExtension(browser, page)
    );
    await runner.run();
    const frame = page
      .frames()
      .find((frame) => frame.url() === `${OOPIF_PREFIX}/iframe2.html`);
    assert.ok(frame, 'Frame that the target page navigated to is not found');
  });

  it('should replay navigations from local from to OOPIF', async () => {
    const runner = await createRunner(
      {
        title: 'Test Recording',
        timeout: 3000,
        steps: [
          {
            type: 'navigate',
            url: `${HTTP_PREFIX}/local-to-oopif.html`,
            assertedEvents: [
              {
                title: '',
                type: 'navigation',
                url: `${HTTP_PREFIX}/local-to-oopif.html`,
              },
            ],
          },
          {
            type: 'click',
            frame: [0],
            selectors: [['aria/To iframe 2']],
            offsetX: 1,
            offsetY: 1,
            assertedEvents: [
              {
                type: 'navigation',
                title: '',
                url: `${OOPIF_PREFIX}/iframe2.html`,
              },
            ],
          },
        ],
      },
      new PuppeteerRunnerExtension(browser, page)
    );
    await runner.run();
    const frame = page.waitForFrame(
      (frame) => frame.url() === `${OOPIF_PREFIX}/iframe2.html`
    );
    assert.ok(frame, 'Frame that the target page navigated to is not found');
  });

  it('should replay hovers', async () => {
    const runner = await createRunner(
      {
        title: 'Test Recording',
        timeout: 3000,
        steps: [
          {
            type: 'navigate',
            url: `${HTTP_PREFIX}/main.html`,
            assertedEvents: [
              {
                title: '',
                type: 'navigation',
                url: `${HTTP_PREFIX}/main.html`,
              },
            ],
          },
          {
            type: 'hover',
            target: 'main',
            selectors: [['#hover-button']],
          },
        ],
      },
      new PuppeteerRunnerExtension(browser, page)
    );
    await runner.run();
    assert.ok(
      await page.evaluate(
        () => document.getElementById('hover-button')?.textContent
      ),
      'Hovered'
    );
  });
});
