exports['stringify should print the correct script for a navigate step 1'] = `
const puppeteer = require('puppeteer'); // v20.7.4 or later

(async () => {
  const browser = await puppeteer.launch({headless: 'new'});
  const page = await browser.newPage();
  const timeout = 5000;
  page.setDefaultTimeout(timeout);

  {
    const targetPage = page;
    await targetPage.goto('https://localhost/');
  }

  await browser.close();

})().catch(err => {
  console.error(err);
  process.exit(1);
});
//# recorderSourceMap=BIE

`;

exports[
  'stringify should print the correct script for a emulateNetworkCondition step 1'
] = `
const puppeteer = require('puppeteer'); // v20.7.4 or later

(async () => {
  const browser = await puppeteer.launch({headless: 'new'});
  const page = await browser.newPage();
  const timeout = 5000;
  page.setDefaultTimeout(timeout);

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

})().catch(err => {
  console.error(err);
  process.exit(1);
});
//# recorderSourceMap=BIJ

`;

exports[
  'stringify should print the correct script if the target is not the main page 1'
] = `
const puppeteer = require('puppeteer'); // v20.7.4 or later

(async () => {
  const browser = await puppeteer.launch({headless: 'new'});
  const page = await browser.newPage();
  const timeout = 5000;
  page.setDefaultTimeout(timeout);

  {
    const target = await browser.waitForTarget(t => t.url() === 'https://localhost/test', { timeout });
    const targetPage = await target.page();
    targetPage.setDefaultTimeout(timeout);
    await puppeteer.Locator.race([
      targetPage.locator('::-p-aria(Test)')
    ])
      .setTimeout(timeout)
      .click({
        offset: {
          x: 1,
          y: 1,
        },
      });
  }

  await browser.close();

})().catch(err => {
  console.error(err);
  process.exit(1);
});
//# recorderSourceMap=BIP

`;

exports['stringify should use step and flow timeouts 1'] = `
const puppeteer = require('puppeteer'); // v20.7.4 or later

(async () => {
  const browser = await puppeteer.launch({headless: 'new'});
  const page = await browser.newPage();
  const timeout = 10000;
  page.setDefaultTimeout(timeout);

  {
    const timeout = 20000;
    const target = await browser.waitForTarget(t => t.url() === 'https://localhost/test', { timeout });
    const targetPage = await target.page();
    targetPage.setDefaultTimeout(timeout);
    await puppeteer.Locator.race([
      targetPage.locator('::-p-aria(Test)')
    ])
      .setTimeout(timeout)
      .click({
        offset: {
          x: 1,
          y: 1,
        },
      });
  }

  await browser.close();

})().catch(err => {
  console.error(err);
  process.exit(1);
});
//# recorderSourceMap=BIQ

`;

exports[
  'stringify should print the correct script if the step is within an iframe 1'
] = `
const puppeteer = require('puppeteer'); // v20.7.4 or later

(async () => {
  const browser = await puppeteer.launch({headless: 'new'});
  const page = await browser.newPage();
  const timeout = 5000;
  page.setDefaultTimeout(timeout);

  {
    const targetPage = page;
    let frame = targetPage.mainFrame();
    frame = frame.childFrames()[1];
    frame = frame.childFrames()[1];
    await puppeteer.Locator.race([
      frame.locator('::-p-aria(Test)')
    ])
      .setTimeout(timeout)
      .click({
        offset: {
          x: 1,
          y: 1,
        },
      });
  }

  await browser.close();

})().catch(err => {
  console.error(err);
  process.exit(1);
});
//# recorderSourceMap=BIQ

`;

exports['stringify should print the correct script for a keydown step 1'] = `
const puppeteer = require('puppeteer'); // v20.7.4 or later

(async () => {
  const browser = await puppeteer.launch({headless: 'new'});
  const page = await browser.newPage();
  const timeout = 5000;
  page.setDefaultTimeout(timeout);

  {
    const targetPage = page;
    await targetPage.keyboard.down('E');
  }

  await browser.close();

})().catch(err => {
  console.error(err);
  process.exit(1);
});
//# recorderSourceMap=BIE

`;

exports['stringify should print the correct script for a keyup step 1'] = `
const puppeteer = require('puppeteer'); // v20.7.4 or later

(async () => {
  const browser = await puppeteer.launch({headless: 'new'});
  const page = await browser.newPage();
  const timeout = 5000;
  page.setDefaultTimeout(timeout);

  {
    const targetPage = page;
    await targetPage.keyboard.up('E');
  }

  await browser.close();

})().catch(err => {
  console.error(err);
  process.exit(1);
});
//# recorderSourceMap=BIE

`;

exports['stringify should print the correct script for scroll events 1'] = `
const puppeteer = require('puppeteer'); // v20.7.4 or later

(async () => {
  const browser = await puppeteer.launch({headless: 'new'});
  const page = await browser.newPage();
  const timeout = 5000;
  page.setDefaultTimeout(timeout);

  {
    const targetPage = page;
    await puppeteer.Locator.race([
      targetPage.locator('body > div:nth-child(1)')
    ])
      .setTimeout(timeout)
      .scroll({ scrollTop: 40, scrollLeft: 0});
  }
  {
    const targetPage = page;
    await targetPage.evaluate((x, y) => { window.scroll(x, y); }, 40, 40)
  }

  await browser.close();

})().catch(err => {
  console.error(err);
  process.exit(1);
});
//# recorderSourceMap=BIIQE

`;

exports[
  'stringify should print the correct script for waitForElement steps 1'
] = `
const puppeteer = require('puppeteer'); // v20.7.4 or later

(async () => {
  const browser = await puppeteer.launch({headless: 'new'});
  const page = await browser.newPage();
  const timeout = 5000;
  page.setDefaultTimeout(timeout);

  {
    const targetPage = page;
    await waitForElement({
      type: 'waitForElement',
      selectors: [
        'body > div:nth-child(1)'
      ]
    }, targetPage, timeout);
  }

  await browser.close();

  async function waitForElement(step, frame, timeout) {
    const {
      count = 1,
      operator = '>=',
      visible = true,
      properties,
      attributes,
    } = step;
    const compFn = {
      '==': (a, b) => a === b,
      '>=': (a, b) => a >= b,
      '<=': (a, b) => a <= b,
    }[operator];
    await waitForFunction(async () => {
      const elements = await querySelectorsAll(step.selectors, frame);
      let result = compFn(elements.length, count);
      const elementsHandle = await frame.evaluateHandle((...elements) => {
        return elements;
      }, ...elements);
      await Promise.all(elements.map((element) => element.dispose()));
      if (result && (properties || attributes)) {
        result = await elementsHandle.evaluate(
          (elements, properties, attributes) => {
            for (const element of elements) {
              if (attributes) {
                for (const [name, value] of Object.entries(attributes)) {
                  if (element.getAttribute(name) !== value) {
                    return false;
                  }
                }
              }
              if (properties) {
                if (!isDeepMatch(properties, element)) {
                  return false;
                }
              }
            }
            return true;

            function isDeepMatch(a, b) {
              if (a === b) {
                return true;
              }
              if ((a && !b) || (!a && b)) {
                return false;
              }
              if (!(a instanceof Object) || !(b instanceof Object)) {
                return false;
              }
              for (const [key, value] of Object.entries(a)) {
                if (!isDeepMatch(value, b[key])) {
                  return false;
                }
              }
              return true;
            }
          },
          properties,
          attributes
        );
      }
      await elementsHandle.dispose();
      return result === visible;
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
    const timeoutId = setTimeout(() => {
      isActive = false;
    }, timeout);
    while (isActive) {
      const result = await fn();
      if (result) {
        clearTimeout(timeoutId);
        return;
      }
      await new Promise(resolve => setTimeout(resolve, 100));
    }
    throw new Error('Timed out');
  }
})().catch(err => {
  console.error(err);
  process.exit(1);
});
//# recorderSourceMap=BIJ

`;

exports[
  'stringify should print the correct script for waitForExpression steps 1'
] = `
const puppeteer = require('puppeteer'); // v20.7.4 or later

(async () => {
  const browser = await puppeteer.launch({headless: 'new'});
  const page = await browser.newPage();
  const timeout = 5000;
  page.setDefaultTimeout(timeout);

  {
    const targetPage = page;
    await targetPage.waitForFunction('1 + 2', { timeout });
  }

  await browser.close();

})().catch(err => {
  console.error(err);
  process.exit(1);
});
//# recorderSourceMap=BIE

`;

exports['stringify should produce a source map 1'] = [1, 8, 9];
