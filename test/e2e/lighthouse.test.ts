/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import fs from 'fs';
import path from 'path';

import { describe, it, before, after, TestContext } from 'node:test';
import assert from 'node:assert';
import { TestServer } from '../../third_party/testserver/src/index.js';
import { AssertedEventType, StepType } from '../../src/Schema.js';
import type { UserFlow } from '../../src/Schema.js';
import { LighthouseStringifyExtension } from '../../src/lighthouse/LighthouseStringifyExtension.js';
import { LighthouseRunnerExtension } from '../../src/lighthouse/LighthouseRunnerExtension.js';
import { stringify } from '../../src/stringify.js';
import { createRunner } from '../../src/Runner.js';
import { execFile } from 'child_process';
import { promisify } from 'util';
import puppeteer from 'puppeteer';
import FlowResult from 'lighthouse/types/lhr/flow-result.js';
import Result from 'lighthouse/types/lhr/lhr.js';

const TMP_DIR = path.join(
  import.meta.dirname,
  '..',
  '..',
  '.tmp',
  'lighthouse'
);
const FLOW_JSON_REGEX = /window\.__LIGHTHOUSE_FLOW_JSON__ = (.*);<\/script>/;

const execFileAsync = promisify(execFile);

function normalizeUrls(content: string): string {
  return content.replace(/localhost:\d+/g, 'localhost:8911');
}

export async function generateFlowResultViaStringify(
  flow: UserFlow,
  t: TestContext
): Promise<FlowResult> {
  fs.mkdirSync(TMP_DIR, { recursive: true });
  const testTmpDir = fs.mkdtempSync(path.join(TMP_DIR, 'lighthouse-'));
  const scriptPath = path.join(testTmpDir, 'stringified.js');

  const scriptContents = await stringify(flow, {
    extension: new LighthouseStringifyExtension(),
  });

  t.assert.snapshot(normalizeUrls(scriptContents));
  fs.writeFileSync(scriptPath, scriptContents);

  const { stdout, stderr } = await execFileAsync('node', [scriptPath], {
    timeout: 50_000,
  });

  // Ensure script didn't quietly report an issue.
  assert.strictEqual(stdout, '');
  assert.strictEqual(stderr, '');

  const reportHtml = fs.readFileSync(
    path.join(testTmpDir, 'flow.report.html'),
    'utf-8'
  );
  const flowResultJson = FLOW_JSON_REGEX.exec(reportHtml)?.[1];
  if (!flowResultJson) throw new Error('Could not find flow json');

  fs.rmSync(testTmpDir, { recursive: true, force: true });

  return JSON.parse(normalizeUrls(flowResultJson));
}

async function generateFlowResultViaRunner(
  flow: UserFlow
): Promise<FlowResult> {
  const browser = await puppeteer.launch();
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

describe('Lighthouse user flow', { timeout: 60000 }, () => {
  let httpServer: TestServer;

  before(async () => {
    const resources = path.join(process.cwd(), 'test/resources');
    httpServer = await TestServer.create(resources);
  });

  after(async () => {
    await httpServer.stop();
  });

  // We want to verify that the replay runner and stringified script both generate the same result.
  for (const [name, lighthouseRunner] of Object.entries(LIGHTHOUSE_RUNNERS)) {
    describe(`run via ${name}`, () => {
      it('produces a valid desktop flow report', async (t) => {
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
              url: `${httpServer.PREFIX}/main.html`,
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

        const flowResult = await (lighthouseRunner as any)(
          desktopReplayJson,
          t
        );

        assert.strictEqual(flowResult.name, desktopReplayJson.title);
        assert.deepStrictEqual(
          flowResult.steps.map((step: any) => step.lhr.gatherMode),
          ['navigation', 'timespan', 'navigation']
        );

        for (const { lhr } of flowResult.steps as Array<{ lhr: Result }>) {
          assert.strictEqual(lhr.configSettings.formFactor, 'desktop');
          assert.ok(lhr.configSettings.screenEmulation.disabled);

          const auditList = Object.values(lhr.audits);
          const erroredAudits = auditList.filter(
            (audit) => audit.displayValue === 'error'
          );

          assert.ok(auditList.length >= 10, 'Expected at least 10 audits');
          assert.strictEqual(erroredAudits.length, 0);
        }
      });
    });
  }
});
