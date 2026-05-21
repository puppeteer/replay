/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import { describe, it } from 'node:test';
import assert from 'node:assert';
import {
  createStatusReport,
  runFiles,
  getJSONFilesFromFolder,
} from '../../src/CLIUtils.js';
import path from 'path';

import * as CliTable from 'cli-table3';

const Status = {
  Success: 1,
  Error: 0,
} as const;
type Status = (typeof Status)[keyof typeof Status];

async function getStatus(asyncFn: () => Promise<unknown>): Promise<Status> {
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
        runFiles([path.join(process.cwd(), 'test', 'resources', 'replay.json')])
      );
      assert.strictEqual(result, Status.Success);
    });

    it('is not able to run', async () => {
      const result = await getStatus(() =>
        runFiles([
          path.join(process.cwd(), 'test', 'resources', 'replay-fail.json'),
        ])
      );
      assert.strictEqual(result, Status.Error);
    });

    it('is able to run able to run folder of recordings', async () => {
      const recordings = getJSONFilesFromFolder(
        path.join(process.cwd(), 'test', 'resources', 'folder-test')
      );
      const result = await getStatus(() => runFiles([...recordings]));
      assert.strictEqual(result, Status.Error);
    });

    it('is able to run successfully with an extension', async () => {
      const result = await getStatus(() =>
        runFiles(
          [path.join(process.cwd(), 'test', 'resources', 'replay.json')],
          {
            extension: path.join(
              process.cwd(),
              'examples',
              'cli-extension',
              'extension.js'
            ),
            headless: true,
            log: false,
          }
        )
      );
      assert.strictEqual(result, Status.Success);
    });
  });

  describe('createStatusReport', () => {
    it('is able to create a successful status report', (t) => {
      const date = new Date();
      const result = {
        startedAt: date,
        file: path.join(process.cwd(), 'test', 'resources', 'replay-fail.json'),
        finishedAt: new Date(date.getTime() + 1000),
        success: true,
        title: 'Test run',
      };
      const [statusReport] = createStatusReport([result]);
      const [title, status, _file, duration] =
        statusReport as CliTable.HorizontalTableRow;

      t.assert.snapshot([title, status, 'PLACEHOLDER_FILE', duration]);
    });

    it('is able to create a failed status report', (t) => {
      const date = new Date();
      const result = {
        startedAt: date,
        file: path.join(process.cwd(), 'test', 'resources', 'replay-fail.json'),
        finishedAt: date,
        success: false,
        title: 'Test run',
      };
      const [statusReport] = createStatusReport([result]);
      const [title, status, _file, duration] =
        statusReport as CliTable.HorizontalTableRow;

      t.assert.snapshot([title, status, 'PLACEHOLDER_FILE', duration]);
    });
  });
});
