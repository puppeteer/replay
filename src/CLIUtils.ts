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

import { parse, createRunner } from './index.js';
import { readFileSync } from 'fs';
import { join, isAbsolute } from 'path';
import { pathToFileURL } from 'url';
import { cwd } from 'process';
import { PuppeteerRunnerOwningBrowserExtension } from './PuppeteerRunnerExtension.js';

export function getHeadlessEnvVar(headless?: string) {
  if (!headless) {
    return true;
  }
  switch (headless.toLowerCase()) {
    case '1':
    case 'true':
      return true;
    case 'chrome':
      return 'chrome';
    case '0':
    case 'false':
      return false;
    default:
      throw new Error('PUPPETEER_HEADLESS: unrecognized value');
  }
}

export async function runFiles(
  files: string[],
  opts: { log: boolean; headless: boolean | 'chrome'; extension?: string } = {
    log: false,
    headless: true,
  }
): Promise<boolean> {
  let Extension = PuppeteerRunnerOwningBrowserExtension;
  if (opts.extension) {
    const module = await import(
      pathToFileURL(
        isAbsolute(opts.extension)
          ? opts.extension
          : join(cwd(), opts.extension)
      ).toString()
    );
    Extension = module.default;
  }
  for (const file of files) {
    opts.log && console.log(`Running ${file}...`);
    try {
      const content = readFileSync(file, 'utf-8');
      const object = JSON.parse(content);
      const recording = parse(object);
      const { default: puppeteer } = await import('puppeteer');
      const browser = await puppeteer.launch({
        headless: opts.headless,
      });
      const page = await browser.newPage();
      const extension = new Extension(browser, page);
      const runner = await createRunner(recording, extension);
      await runner.run();
      opts.log && console.log(`Finished running ${file}`);
    } catch (err) {
      opts.log && console.error(`Error running ${file}`, err);
      return false;
    }
  }
  return true;
}
