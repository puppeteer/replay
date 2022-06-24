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
  getHeadlessEnvVar,
  getRecordingPaths,
  getJSONFilesFromFolder,
} from '../src/CLIUtils.js';
import { assert } from 'chai';
import path from 'path';
import url from 'url';
import { HorizontalTableRow } from 'cli-table3';
import colors from 'colors';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

enum Status {
  Success = 1,
  Error = 0,
}

async function getStatus(
  asyncFn: () => Promise<unknown>
): Promise<typeof Status['Success'] | typeof Status['Error']> {
  const result = await asyncFn();

  if (!result) return Status.Error;

  return Status.Success;
}

describe('cli', () => {
  describe('getHeadlessEnvVar', () => {
    it('extracts the headless parameter from process.argv', () => {
      assert.strictEqual(getHeadlessEnvVar(undefined), true);
      assert.strictEqual(getHeadlessEnvVar('1'), true);
      assert.strictEqual(getHeadlessEnvVar('true'), true);
      assert.strictEqual(getHeadlessEnvVar('0'), false);
      assert.strictEqual(getHeadlessEnvVar('false'), false);
      assert.strictEqual(getHeadlessEnvVar('chrome'), 'chrome');
      assert.strictEqual(getHeadlessEnvVar('True'), true);
      assert.strictEqual(getHeadlessEnvVar('False'), false);
    });
  });

  describe('runFiles', () => {
    it('is able to run successfully', async () => {
      const result = await getStatus(() =>
        runFiles([path.join(__dirname, 'resources', 'replay.json')])
      );
      assert.strictEqual(result, Status.Success);
    });

    it('is not able to run', async () => {
      const result = await getStatus(() =>
        runFiles([path.join(__dirname, 'resources', 'replay-fail.json')])
      );
      assert.strictEqual(result, Status.Error);
    });

    it('is able to run able to run folder of recordings', async () => {
      const recordings = getJSONFilesFromFolder(
        path.join(__dirname, 'resources')
      );
      const result = await getStatus(() => runFiles([...recordings]));
      assert.strictEqual(result, Status.Error);
    });

    it('is able to run successfully with an extension', async () => {
      const result = await getStatus(() =>
        runFiles([path.join(__dirname, 'resources', 'replay.json')], {
          extension: path.join('examples', 'cli-extension', 'extension.js'),
          headless: true,
          log: false,
        })
      );
      assert.strictEqual(result, Status.Success);
    });
  });

  describe('getRecordingPaths', () => {
    it('is able to get recordings from a directory', () => {
      const recordingsFolderPath = 'test/resources';
      const recordingPaths = getRecordingPaths([recordingsFolderPath]);

      assert.isTrue(
        !!recordingPaths.find((path) => path.includes('replay.json'))
      );
      assert.isTrue(
        !!recordingPaths.find((path) => path.includes('replay-fail.json'))
      );
    });
  });

  describe('getJSONFilesFromFolder', () => {
    it('is able to return json files from a directory', () => {
      const files = getJSONFilesFromFolder(path.join(__dirname, 'resources'));

      assert.isTrue(files.every((file) => file.endsWith('.json')));
    });
  });

  describe('createStatusReport', () => {
    it('is able to create a successful status report', () => {
      const date = new Date();
      const result = {
        startedAt: date,
        file: path.join(__dirname, 'resources', 'replay-fail.json'),
        finishedAt: new Date(date.getTime() + 1000),
        passed: true,
        title: 'Test run',
      };
      const [statusReport] = createStatusReport([result]);
      const [title, status, file, duration] =
        statusReport as HorizontalTableRow;

      assert.strictEqual(status, colors.white.bgGreen(' Passed '));
      assert.strictEqual(duration, '1000ms');
      assert.isString(file);
      assert.strictEqual(title, result.title);
    });

    it('is able to create a failed status report', () => {
      const date = new Date();
      const result = {
        startedAt: date,
        file: path.join(__dirname, 'resources', 'replay-fail.json'),
        finishedAt: date,
        passed: false,
        title: 'Test run',
      };
      const [statusReport] = createStatusReport([result]);
      const [title, status, file, duration] =
        statusReport as HorizontalTableRow;

      assert.strictEqual(status, colors.white.bgRed(' Failed '));
      assert.strictEqual(duration, '0ms');
      assert.isString(file);
      assert.strictEqual(title, result.title);
    });
  });
});
