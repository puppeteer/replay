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
  runFiles,
  getHeadlessEnvVar,
  getRecordingPaths,
  getJSONFilesFromFolder,
} from '../src/CLIUtils.js';
import { assert } from 'chai';
import path from 'path';
import url from 'url';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

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
      assert.isTrue(
        await runFiles([path.join(__dirname, 'resources', 'replay.json')])
      );
    });

    it('is not able to run', async () => {
      assert.isFalse(
        await runFiles([path.join(__dirname, 'resources', 'replay-fail.json')])
      );
    });

    it('is able to run able to run folder of recordings', async () => {
      const recordings = getJSONFilesFromFolder(
        path.join(__dirname, 'resources')
      );

      assert.isFalse(await runFiles([...recordings]));
    });

    it('is able to run successfully with an extension', async () => {
      assert.isTrue(
        await runFiles([path.join(__dirname, 'resources', 'replay.json')], {
          extension: path.join('examples', 'cli-extension', 'extension.js'),
          headless: true,
          log: false,
        })
      );
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
});
