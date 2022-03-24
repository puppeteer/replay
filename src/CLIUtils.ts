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

import { parse, createRunner } from './main.js';
import { readFileSync } from 'fs';

export function getFilenames(argv: string[]) {
  return argv.slice(2);
}

export async function runFiles(
  files: string[],
  opts = { log: false }
): Promise<boolean> {
  for (const file of files) {
    opts.log && console.log(`Running ${file}...`);
    try {
      const content = readFileSync(file, 'utf-8');
      const object = JSON.parse(content);
      const recording = parse(object);
      const runner = await createRunner(recording);
      await runner.run();
      opts.log && console.log(`Finished running ${file}`);
    } catch (err) {
      opts.log && console.error(`Error running ${file}`, err);
      return false;
    }
  }
  return true;
}
