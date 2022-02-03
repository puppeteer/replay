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

import { createRunner } from "../src/Runner.js";
import { PuppeteerRunnerExtension } from "../src/PuppeteerRunnerExtension.js";
import puppeteer from "puppeteer";

describe("Runner", () => {
  let browser: puppeteer.Browser;
  let page: puppeteer.Page;

  before(async () => {
    browser = await puppeteer.launch({
      headless: true,
    });
  });

  beforeEach(async () => {
    page = await browser.newPage();
  });

  afterEach(async () => {
    await page.close();
  });

  after(async () => {
    await browser.close();
  });

  it("should run an empty flow using Puppeteer", async () => {
    const runner = createRunner(
      {
        title: "test",
        steps: [],
      },
      new PuppeteerRunnerExtension(browser, page)
    );
    await runner.run();
  });
});
