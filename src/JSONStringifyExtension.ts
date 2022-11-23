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
import type { Step, UserFlow } from './Schema.js';
import { StringifyExtension } from './StringifyExtension.js';

/**
 * Stringifies a user flow to JSON with source maps.
 *
 * You probably want to strip the source map because not all
 * parsers support comments in JSON.
 */
export class JSONStringifyExtension extends StringifyExtension {
  override async beforeAllSteps(out: LineWriter, flow: UserFlow) {
    const copy = {
      ...flow,
      steps: undefined,
    };
    // Stringify top-level attributes.
    const text = JSON.stringify(copy, null, out.getIndent());
    const lines = text.split('\n');
    lines.pop();
    lines[lines.length - 1] += ',';
    lines.push(out.getIndent() + `"steps": [`);
    out.appendLine(lines.join('\n')).startBlock().startBlock();
  }

  override async afterAllSteps(out: LineWriter) {
    out
      .endBlock()
      .endBlock()
      .appendLine(out.getIndent() + `]`)
      .appendLine('}');
  }

  override async stringifyStep(out: LineWriter, step: Step, flow?: UserFlow) {
    const stepText = JSON.stringify(step, null, out.getIndent());
    if (!flow) {
      out.appendLine(stepText);
      return;
    }
    const separator =
      flow.steps.lastIndexOf(step) === flow.steps.length - 1 ? '' : ',';
    out.appendLine(stepText + separator);
  }
}
