/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import type { LineWriter } from './LineWriter.js';
import type { Step } from './Schema.js';
import { StringifyExtension } from './StringifyExtension.js';
import { formatJSONAsJS } from './JSONUtils.js';

/**
 * Stringifies a user flow to a script that uses \@puppeteer/replay's own API.
 */
export class PuppeteerReplayStringifyExtension extends StringifyExtension {
  override async beforeAllSteps(out: LineWriter) {
    out.appendLine("import url from 'url';");
    out.appendLine("import { createRunner } from '@puppeteer/replay';");
    out.appendLine('');
    out.appendLine('export async function run(extension) {').startBlock();
    out.appendLine('const runner = await createRunner(extension);');
    out.appendLine('');
    out.appendLine('await runner.runBeforeAllSteps();');
    out.appendLine('');
  }

  override async afterAllSteps(out: LineWriter) {
    out.appendLine('');
    out
      .appendLine('await runner.runAfterAllSteps();')
      .endBlock()
      .appendLine('}');
    out.appendLine('');
    out
      .appendLine(
        'if (process && import.meta.url === url.pathToFileURL(process.argv[1]).href) {'
      )
      .startBlock()
      .appendLine('run()')
      .endBlock()
      .appendLine('}');
  }

  override async stringifyStep(out: LineWriter, step: Step) {
    out.appendLine(
      `await runner.runStep(${formatJSONAsJS(step, out.getIndent())});`
    );
  }
}
