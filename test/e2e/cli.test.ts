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

import {
  createStatusReport,
  runFiles,
  getJSONFilesFromFolder,
} from '../../src/CLIUtils.js';
import { assert } from 'chai';
import path from 'path';
import url from 'url';
import { HorizontalTableRow } from 'cli-table3';
import { bgGreen, bgRed, white } from 'colorette';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

enum Status {
  Success = 1,
  Error = 0,
}

async function getStatus(
  asyncFn: () => Promise<unknown>
): Promise<typeof Status['Success'] | typeof Status['Error']> {
  let error = undefined;
  try {
    await asyncFn();
  } catch (err) {
    error = err;
  }

  return error ? Status.Error : Status.Success;
}

describe('cli', () => {
  describe('runFiles', () => {
    it('is able to run successfully', async () => {
      const result = await getStatus(() =>
        runFiles([path.join(__dirname, '..', 'resources', 'replay.json')])
      );
      assert.strictEqual(result, Status.Success);
    });

    it('is not able to run', async () => {
      const result = await getStatus(() =>
        runFiles([path.join(__dirname, '..', 'resources', 'replay-fail.json')])
      );
      assert.strictEqual(result, Status.Error);
    });

    it('is able to run able to run folder of recordings', async () => {
      const recordings = getJSONFilesFromFolder(
        path.join(__dirname, '..', 'resources', 'folder-test')
      );
      const result = await getStatus(() => runFiles([...recordings]));
      assert.strictEqual(result, Status.Error);
    });

    it('is able to run successfully with an extension', async () => {
      const result = await getStatus(() =>
        runFiles([path.join(__dirname, '..', 'resources', 'replay.json')], {
          extension: path.join('examples', 'cli-extension', 'extension.js'),
          headless: true,
          log: false,
        })
      );
      assert.strictEqual(result, Status.Success);
    });
  });

  describe('createStatusReport', () => {
    it('is able to create a successful status report', () => {
      const date = new Date();
      const result = {
        startedAt: date,
        file: path.join(__dirname, '..', 'resources', 'replay-fail.json'),
        finishedAt: new Date(date.getTime() + 1000),
        success: true,
        title: 'Test run',
      };
      const [statusReport] = createStatusReport([result]);
      const [title, status, file, duration] =
        statusReport as HorizontalTableRow;

      assert.strictEqual(status, white(bgGreen(' Success ')));
      assert.strictEqual(duration, '1000ms');
      assert.isString(file);
      assert.strictEqual(title, result.title);
    });

    it('is able to create a failed status report', () => {
      const date = new Date();
      const result = {
        startedAt: date,
        file: path.join(__dirname, '..', 'resources', 'replay-fail.json'),
        finishedAt: date,
        success: false,
        title: 'Test run',
      };
      const [statusReport] = createStatusReport([result]);
      const [title, status, file, duration] =
        statusReport as HorizontalTableRow;

      assert.strictEqual(status, white(bgRed(' Failure ')));
      assert.strictEqual(duration, '0ms');
      assert.isString(file);
      assert.strictEqual(title, result.title);
    });
  });
});
