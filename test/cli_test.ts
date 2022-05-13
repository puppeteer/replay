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

import { getFilenames, runFiles, getHeadlessEnvVar } from '../src/CLIUtils.js';
import { assert } from 'chai';
import path from 'path';
import url from 'url';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

describe('cli', () => {
  describe('getFilenames', () => {
    it('extracts filenames from process.argv', () => {
      assert.deepStrictEqual(getFilenames(['node', 'script.js']), []);
      assert.deepStrictEqual(getFilenames(['node', 'script.js', 'file1']), [
        'file1',
      ]);
      assert.deepStrictEqual(
        getFilenames(['node', 'script.js', 'file1', 'file2', 'file3']),
        ['file1', 'file2', 'file3']
      );
    });
  });

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
  });
});
