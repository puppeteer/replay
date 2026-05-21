/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import { describe, it } from 'node:test';
import assert from 'node:assert';
import {
  getHeadlessEnvVar,
  getRecordingPaths,
  getJSONFilesFromFolder,
} from '../src/CLIUtils.js';
import path from 'path';

describe('cli', () => {
  describe('getHeadlessEnvVar', () => {
    it('extracts the headless parameter from process.argv', () => {
      assert.strictEqual(getHeadlessEnvVar(undefined), true);
      assert.strictEqual(getHeadlessEnvVar('1'), true);
      assert.strictEqual(getHeadlessEnvVar('true'), true);
      assert.strictEqual(getHeadlessEnvVar('0'), false);
      assert.strictEqual(getHeadlessEnvVar('false'), false);
      assert.strictEqual(getHeadlessEnvVar('shell'), 'shell');
      assert.strictEqual(getHeadlessEnvVar('True'), true);
      assert.strictEqual(getHeadlessEnvVar('False'), false);
    });
  });

  describe('getRecordingPaths', () => {
    it('is able to get recordings from a directory', () => {
      const recordingsFolderPath = 'test/resources/folder-test';
      const recordingPaths = getRecordingPaths([recordingsFolderPath]);

      assert.ok(recordingPaths.find((path) => path.includes('replay.json')));
      assert.ok(
        recordingPaths.find((path) => path.includes('replay-fail.json'))
      );
    });
  });

  describe('getJSONFilesFromFolder', () => {
    it('is able to return json files from a directory', () => {
      const files = getJSONFilesFromFolder(
        path.join(process.cwd(), 'test', 'resources', 'folder-test')
      );

      assert.ok(files.every((file) => file.endsWith('.json')));
    });
  });
});
