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

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { assert } from 'chai';
import { TestServer } from '../../third_party/testserver/lib/index.js';
import { AssertedEventType, StepType, UserFlow } from '../../src/Schema.js';
import { LighthouseStringifyExtension } from '../../src/lighthouse/LighthouseStringifyExtension.js';
import { LighthouseRunnerExtension } from '../../src/lighthouse/LighthouseRunnerExtension.js';
import { stringify } from '../../src/stringify.js';
import { createRunner } from '../../src/Runner.js';
import snapshot from 'snap-shot-it';
import { execFile } from 'child_process';
import { promisify } from 'util';
import puppeteer from 'puppeteer';
import FlowResult from 'lighthouse/types/lhr/flow-result.js';
import Result from 'lighthouse/types/lhr/lhr.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const HTTP_PORT = 8907;
const HTTP_PREFIX = `http://localhost:${HTTP_PORT}`;
const TMP_DIR = `${__dirname}/../../.tmp/lighthouse`;
const FLOW_JSON_REGEX = /window\.__LIGHTHOUSE_FLOW_JSON__ = (.*);<\/script>/;

const execFileAsync = promisify(execFile);

export async function generateFlowResultViaStringify(
  flow: UserFlow
): Promise<FlowResult> {
  fs.mkdirSync(TMP_DIR, { recursive: true });
  const testTmpDir = fs.mkdtempSync(`${TMP_DIR}/lighthouse-`);
  const scriptPath = `${testTmpDir}/stringified.cjs`;

  const scriptContents = await stringify(flow, {
    extension: new LighthouseStringifyExtension(),
  });

  snapshot(scriptContents);
  fs.writeFileSync(scriptPath, scriptContents);

  const { stdout, stderr } = await execFileAsync('node', [scriptPath], {
    timeout: 50_000,
  });

  // Ensure script didn't quietly report an issue.
  assert.strictEqual(stdout, '');
  assert.strictEqual(stderr, '');

  const reportHtml = fs.readFileSync(`${testTmpDir}/flow.report.html`, 'utf-8');
  const flowResultJson = FLOW_JSON_REGEX.exec(reportHtml)?.[1];
  if (!flowResultJson) throw new Error('Could not find flow json');

  fs.rmSync(testTmpDir, { recursive: true, force: true });

  return JSON.parse(flowResultJson);
}

async function generateFlowResultViaRunner(
  flow: UserFlow
): Promise<FlowResult> {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();

  const lighthouseExtension = new LighthouseRunnerExtension(browser, page);
  const runner = await createRunner(flow, lighthouseExtension);
  const result = await runner.run();

  await page.close();
  await browser.close();

  assert.ok(result);

  return lighthouseExtension.createFlowResult();
}

const LIGHTHOUSE_RUNNERS = {
  stringify: generateFlowResultViaStringify,
  runner: generateFlowResultViaRunner,
};

describe('Lighthouse user flow', function () {
  // eslint-disable-next-line no-invalid-this
  this.timeout(60_000);

  let httpServer: TestServer;

  before(async () => {
    const resources = path.join(__dirname, '../resources');
    httpServer = await TestServer.create(resources, HTTP_PORT);
  });

  after(async () => {
    await httpServer.stop();
  });

  // We want to verify that the replay runner and stringified script both generate the same result.
  for (const [name, lighthouseRunner] of Object.entries(LIGHTHOUSE_RUNNERS)) {
    describe(`run via ${name}`, () => {
      it('produces a valid desktop flow report', async () => {
        const desktopReplayJson: UserFlow = {
          title: 'Test desktop',
          steps: [
            {
              type: StepType.SetViewport,
              width: 757,
              height: 988,
              deviceScaleFactor: 1,
              isMobile: false,
              hasTouch: false,
              isLandscape: false,
            },
            {
              type: StepType.Navigate,
              url: `${HTTP_PREFIX}/main.html`,
            },
            {
              type: StepType.Click,
              button: 'primary',
              selectors: ['#test'],
              offsetX: 1,
              offsetY: 1,
            },
            {
              type: StepType.Click,
              button: 'auxiliary',
              selectors: ['#test'],
              offsetX: 1,
              offsetY: 1,
            },
            {
              type: StepType.Click,
              selectors: ['a[href="main2.html"]'],
              offsetX: 1,
              offsetY: 1,
              assertedEvents: [
                {
                  type: AssertedEventType.Navigation,
                },
              ],
            },
          ],
        };

        const flowResult = await lighthouseRunner(desktopReplayJson);

        assert.equal(flowResult.name, desktopReplayJson.title);
        assert.deepStrictEqual(
          flowResult.steps.map((step) => step.lhr.gatherMode),
          ['navigation', 'timespan', 'navigation']
        );

        for (const { lhr } of flowResult.steps as Array<{ lhr: Result }>) {
          assert.equal(lhr.configSettings.formFactor, 'desktop');
          assert.ok(lhr.configSettings.screenEmulation.disabled);

          const auditList = Object.values(lhr.audits);
          const erroredAudits = auditList.filter(
            (audit) => audit.displayValue === 'error'
          );

          assert.isAtLeast(auditList.length, 10);
          assert.equal(erroredAudits.length, 0);
        }
      });
    });
  }
});
