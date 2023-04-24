import puppeteer from 'puppeteer';
import { PuppeteerRunnerExtension } from '../../lib/main.js';

export default class Extension extends PuppeteerRunnerExtension {
  async beforeAllSteps(flow) {
    if (!this.browser) {
      this.browser = await puppeteer.launch({ headless: 'new' });
    }
    if (!this.page) {
      this.page = await this.browser.newPage();
    }
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
    await this.browser.close();
  }
}
