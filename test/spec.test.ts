/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import fs from 'fs/promises';
import path from 'path';
import puppeteer, { Browser, Page } from 'puppeteer';

import { describe, it, before, beforeEach, afterEach, after } from 'node:test';
import assert from 'node:assert';
import { spawn } from 'node:child_process';

import { createRunner } from '../src/Runner.js';
import type { LineWriter } from '../src/LineWriter.js';
import { parse } from '../src/SchemaUtils.js';
import { PuppeteerRunnerExtension } from '../src/PuppeteerRunnerExtension.js';
import { PuppeteerStringifyExtension } from '../src/PuppeteerStringifyExtension.js';
import { stringify } from '../src/stringify.js';
import { TestServer } from '../third_party/testserver/src/index.js';
import type { UserFlow } from '../src/Schema.js';
import { files, recording, expectedLog } from '../src/Spec.js';

async function createServers() {
  const resources = path.join(process.cwd(), 'test', 'resources');
  const httpServer = await TestServer.create(resources);
  const httpsServer = await TestServer.createHTTPS(resources);

  for (const [filename, content] of (files || {}).entries()) {
    await fs.writeFile(path.join(resources, filename), content);
  }
  return { httpServer, httpsServer };
}

describe('Spec test', () => {
  let browser: Browser;
  let page: Page;
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
    await browser.close();
    await httpServer.stop();
    await httpsServer.stop();
  });

  function getPatchedRecording() {
    const recordingCopy = structuredClone(recording);
    recordingCopy.steps[1]!.url = `${httpServer.PREFIX}/spec.html`;
    recordingCopy.steps[1]!.assertedEvents![0]!.url = `${httpServer.PREFIX}/spec.html`;
    return recordingCopy;
  }

  it('should run the test using a runner extension', async () => {
    const parsed = parse(getPatchedRecording());
    const runner = await createRunner(
      parsed,
      new PuppeteerRunnerExtension(browser, page)
    );
    await runner.run();
    const result = (await page.evaluate(`log.innerText`)) as string;
    assert.strictEqual(result.trim(), expectedLog);
  });

  it('should run the test when exported as a script using a stringify extension', async () => {
    const parsed = parse(getPatchedRecording());
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
