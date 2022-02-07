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

import { LineWriterImpl } from './LineWriterImpl.js';
import { PuppeteerStringifyExtension } from './PuppeteerStringifyExtension.js';
import type { UserFlow } from './Schema.js';
import { StringifyExtension } from './StringifyExtension.js';

interface StringifyOptions {
  extension?: StringifyExtension;
  indentation?: string;
}

export async function stringify(
  flow: UserFlow,
  opts?: StringifyOptions
): Promise<string> {
  if (!opts) {
    opts = {};
  }
  if (!opts.extension) {
    opts.extension = new PuppeteerStringifyExtension();
  }
  if (!opts.indentation) {
    opts.indentation = '  ';
  }
  const out = new LineWriterImpl(opts.indentation);
  const ext = opts.extension;
  if (!ext) {
    throw new Error('Internal error: StringifyExtension is not found.');
  }

  await ext.beforeAllSteps?.(out, flow);
  for (const step of flow.steps) {
    await ext.beforeEachStep?.(out, step, flow);
    await ext.stringifyStep(out, step, flow);
    await ext.afterEachStep?.(out, step, flow);
  }
  await ext.afterAllSteps?.(out, flow);

  return out.toString();
}
