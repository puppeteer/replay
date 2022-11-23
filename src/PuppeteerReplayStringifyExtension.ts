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
