exports[
  'Lighthouse user flow run via stringify produces a valid desktop flow report 1'
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
  const config = lhApi.desktopConfig;
  const lhFlow = await lhApi.startFlow(page, {name: 'Test desktop', config, flags});
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
    await targetPage.goto('http://localhost:8907/main.html');
  }
  await lhFlow.endNavigation();
  await lhFlow.startTimespan();
  {
    const targetPage = page;
    await puppeteer.Locator.race([
      targetPage.locator('#test')
    ])
      .setTimeout(timeout)
      .click({
        button: 'left',
        offset: {
          x: 1,
          y: 1,
        },
      });
  }
  {
    const targetPage = page;
    await puppeteer.Locator.race([
      targetPage.locator('#test')
    ])
      .setTimeout(timeout)
      .click({
        button: 'middle',
        offset: {
          x: 1,
          y: 1,
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
    await puppeteer.Locator.race([
      targetPage.locator('a[href="main2.html"]')
    ])
      .setTimeout(timeout)
      .on('action', () => startWaitingForEvents())
      .click({
        offset: {
          x: 1,
          y: 1,
        },
      });
    await Promise.all(promises);
  }
  await lhFlow.endNavigation();
  const lhFlowReport = await lhFlow.generateReport();
  fs.writeFileSync(__dirname + '/flow.report.html', lhFlowReport)

  await browser.close();

})().catch(err => {
  console.error(err);
  process.exit(1);
});
//# recorderSourceMap=BRHYGePtBO7BW

`;
