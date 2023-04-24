const {
  createRunner,
  PuppeteerRunnerExtension,
} = require('../../lib/cjs/main.js');
const puppeteer = require('puppeteer');

async function main() {
  const browser = await puppeteer.launch({
    headless: 'new',
  });

  const page = await browser.newPage();

  class Extension extends PuppeteerRunnerExtension {
    async beforeAllSteps(flow) {
      await super.beforeAllSteps(flow);
      console.log('starting');
    }

    async beforeEachStep(step, flow) {
      await super.beforeEachStep(step, flow);
      console.log('before', step);
    }

    async afterEachStep(step, flow) {
      await super.afterEachStep(step, flow);
      console.log('after', step);
    }

    async afterAllSteps(flow) {
      await super.afterAllSteps(flow);
      console.log('done');
    }
  }

  const runner = await createRunner(
    {
      title: 'Test recording',
      steps: [
        {
          type: 'navigate',
          url: 'https://wikipedia.org',
        },
      ],
    },
    new Extension(browser, page, 7000)
  );

  await runner.run();

  await browser.close();
}

main();
