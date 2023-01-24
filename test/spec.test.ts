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

import fs from 'fs/promises';
import path from 'path';
import puppeteer from 'puppeteer';

import { fileURLToPath } from 'url';
import { assert } from 'chai';
import { spawn } from 'node:child_process';

import { createRunner } from '../src/Runner.js';
import { LineWriter } from '../src/LineWriter.js';
import { parse } from '../src/SchemaUtils.js';
import { PuppeteerRunnerExtension } from '../src/PuppeteerRunnerExtension.js';
import { PuppeteerStringifyExtension } from '../src/PuppeteerStringifyExtension.js';
import { stringify } from '../src/stringify.js';
import { TestServer } from '../third_party/testserver/lib/index.js';
import { UserFlow } from '../src/Schema.js';
import { files, recording, expectedLog } from '../src/Spec.js';

const HTTP_PORT = 8907;
const HTTPS_PORT = HTTP_PORT + 1;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function createServers() {
  const resources = path.join(__dirname, 'resources');
  const httpServer = await TestServer.create(resources, HTTP_PORT);
  const httpsServer = await TestServer.createHTTPS(resources, HTTPS_PORT);
  for (const [filename, content] of (files || {}).entries()) {
    await fs.writeFile(path.join(resources, filename), content);
  }
  return { httpServer, httpsServer };
}

describe('Spec test', () => {
  let browser: puppeteer.Browser;
  let page: puppeteer.Page;
  let httpServer: TestServer;
  let httpsServer: TestServer;

  before(async () => {
    const servers = await createServers();
    httpServer = servers.httpServer;
    httpsServer = servers.httpsServer;
    const headless = process.env['PUPPETEER_HEADFUL'] !== 'true';
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

  it('should run the test using a runner extension', async () => {
    const parsed = parse(recording);
    const runner = await createRunner(
      parsed,
      new PuppeteerRunnerExtension(browser, page)
    );
    await runner.run();
    const result = (await page.evaluate(`log.innerText`)) as string;
    assert.strictEqual(result.trim(), expectedLog);
  });

  it('should run the test when exported as a script using a stringify extension', async () => {
    const parsed = parse(recording);
    class CustomStringifyExtension extends PuppeteerStringifyExtension {
      override async afterAllSteps(out: LineWriter, flow: UserFlow) {
        out.appendLine(
          `console.log(await page.evaluate(() => log.innerText));`
        );
        await super.afterAllSteps(out, flow);
      }
    }
    const exported = await stringify(parsed, {
      extension: new CustomStringifyExtension(),
    });

    const childProcess = spawn('node', {
      stdio: ['pipe', 'pipe', 'inherit'],
      shell: true,
    });
    childProcess.stdin.write(exported);
    childProcess.stdin.end();

    const log: string[] = [];
    childProcess.stdout.on('data', (data) => {
      log.push(data);
    });

    await new Promise<void>((resolve, reject) => {
      childProcess.on('close', (code) =>
        code
          ? reject(new Error(`Running node failed with code ${code}`))
          : resolve()
      );
    });
    assert.strictEqual(log.join('\n').trim(), expectedLog);
  });
});
