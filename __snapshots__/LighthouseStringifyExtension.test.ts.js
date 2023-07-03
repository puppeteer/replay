exports['LighthouseStringifyExtension handles ending timespan 1'] = `
const fs = require('fs');
const puppeteer = require('puppeteer'); // v20.7.4 or later

(async () => {
  const browser = await puppeteer.launch({headless: 'new'});
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
    const startWaitingForEvents = () => {
      promises.push(targetPage.waitForNavigation());
    }
    startWaitingForEvents();
    await targetPage.goto('https://example.com');
    await Promise.all(promises);
  }
  await lhFlow.endNavigation();
  await lhFlow.startTimespan();
  {
    const targetPage = page;
    await puppeteer.Locator.race([
      targetPage.locator('#button')
    ])
      .setTimeout(timeout)
      .click({
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
const puppeteer = require('puppeteer'); // v20.7.4 or later

(async () => {
  const browser = await puppeteer.launch({headless: 'new'});
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
    const startWaitingForEvents = () => {
      promises.push(targetPage.waitForNavigation());
    }
    startWaitingForEvents();
    await targetPage.goto('https://example.com');
    await Promise.all(promises);
  }
  await lhFlow.endNavigation();
  await lhFlow.startTimespan();
  {
    const targetPage = page;
    await puppeteer.Locator.race([
      targetPage.locator('#button')
    ])
      .setTimeout(timeout)
      .click({
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
    const startWaitingForEvents = () => {
      promises.push(targetPage.waitForNavigation());
    }
    startWaitingForEvents();
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
const puppeteer = require('puppeteer'); // v20.7.4 or later

(async () => {
  const browser = await puppeteer.launch({headless: 'new'});
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
    const startWaitingForEvents = () => {
      promises.push(targetPage.waitForNavigation());
    }
    startWaitingForEvents();
    await targetPage.goto('https://example.com');
    await Promise.all(promises);
  }
  await lhFlow.endNavigation();
  await lhFlow.startNavigation();
  {
    const targetPage = page;
    const promises = [];
    const startWaitingForEvents = () => {
      promises.push(targetPage.waitForNavigation());
    }
    await puppeteer.Locator.race([
      targetPage.locator('#link')
    ])
      .setTimeout(timeout)
      .on('action', () => startWaitingForEvents())
      .click({
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
