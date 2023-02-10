exports['LighthouseStringifyExtension handles ending timespan 1'] = `
const fs = require('fs');
const puppeteer = require('puppeteer'); // v13.0.0 or later

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const timeout = 5000;
  page.setDefaultTimeout(timeout);

  const lhApi = await import('lighthouse'); // v10.0.0 or later
  const flags = {
    screenEmulation: {
      disabled: true
    }
  }
  const config = undefined;
  const lhFlow = await lhApi.startFlow(page, {name: 'Test Flow', config, flags});
  {
    const targetPage = page;
    await targetPage.setViewport({
      width: 757,
      height: 988
    })
  }
  await lhFlow.startNavigation();
  {
    const targetPage = page;
    const promises = [];
    promises.push(targetPage.waitForNavigation());
    await targetPage.goto('https://example.com');
    await Promise.all(promises);
  }
  await lhFlow.endNavigation();
  await lhFlow.startTimespan();
  {
    const targetPage = page;
    await scrollIntoViewIfNeeded([
      [
        '#button'
      ]
    ], targetPage, timeout);
    const element = await waitForSelectors([
      [
        '#button'
      ]
    ], targetPage, { timeout, visible: true });
    await element.click({
      offset: {
        x: 61,
        y: 13.5625,
      },
    });
  }
  await lhFlow.endTimespan();
  const lhFlowReport = await lhFlow.generateReport();
  fs.writeFileSync(__dirname + '/flow.report.html', lhFlowReport)

  await 
`;

exports['LighthouseStringifyExtension handles ending navigation 1'] = `
const fs = require('fs');
const puppeteer = require('puppeteer'); // v13.0.0 or later

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const timeout = 5000;
  page.setDefaultTimeout(timeout);

  const lhApi = await import('lighthouse'); // v10.0.0 or later
  const flags = {
    screenEmulation: {
      disabled: true
    }
  }
  const config = undefined;
  const lhFlow = await lhApi.startFlow(page, {name: 'Test Flow', config, flags});
  {
    const targetPage = page;
    await targetPage.setViewport({
      width: 757,
      height: 988
    })
  }
  await lhFlow.startNavigation();
  {
    const targetPage = page;
    const promises = [];
    promises.push(targetPage.waitForNavigation());
    await targetPage.goto('https://example.com');
    await Promise.all(promises);
  }
  await lhFlow.endNavigation();
  await lhFlow.startTimespan();
  {
    const targetPage = page;
    await scrollIntoViewIfNeeded([
      [
        '#button'
      ]
    ], targetPage, timeout);
    const element = await waitForSelectors([
      [
        '#button'
      ]
    ], targetPage, { timeout, visible: true });
    await element.click({
      offset: {
        x: 61,
        y: 13.5625,
      },
    });
  }
  await lhFlow.endTimespan();
  await lhFlow.startNavigation();
  {
    const targetPage = page;
    const promises = [];
    promises.push(targetPage.waitForNavigation());
    await targetPage.goto('https://example.com/page/');
    await Promise.all(promises);
  }
  await lhFlow.endNavigation();
  const lhFlowReport = await lhFlow.generateReport();
  fs.writeFileSync(__dirname + '/flow.report.html', lhFlowReport)

  await 
`;

exports[
  'LighthouseStringifyExtension handles multiple sequential navigations 1'
] = `
const fs = require('fs');
const puppeteer = require('puppeteer'); // v13.0.0 or later

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const timeout = 5000;
  page.setDefaultTimeout(timeout);

  const lhApi = await import('lighthouse'); // v10.0.0 or later
  const flags = {
    screenEmulation: {
      disabled: true
    }
  }
  const config = undefined;
  const lhFlow = await lhApi.startFlow(page, {name: 'Test Flow', config, flags});
  {
    const targetPage = page;
    await targetPage.setViewport({
      width: 757,
      height: 988
    })
  }
  await lhFlow.startNavigation();
  {
    const targetPage = page;
    const promises = [];
    promises.push(targetPage.waitForNavigation());
    await targetPage.goto('https://example.com');
    await Promise.all(promises);
  }
  await lhFlow.endNavigation();
  await lhFlow.startNavigation();
  {
    const targetPage = page;
    const promises = [];
    promises.push(targetPage.waitForNavigation());
    await scrollIntoViewIfNeeded([
      [
        '#link'
      ]
    ], targetPage, timeout);
    const element = await waitForSelectors([
      [
        '#link'
      ]
    ], targetPage, { timeout, visible: true });
    await element.click({
      offset: {
        x: 61,
        y: 13.5625,
      },
    });
    await Promise.all(promises);
  }
  await lhFlow.endNavigation();
  const lhFlowReport = await lhFlow.generateReport();
  fs.writeFileSync(__dirname + '/flow.report.html', lhFlowReport)

  await 
`;
