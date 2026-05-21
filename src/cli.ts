/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import { parseArgs } from 'node:util';
import { getHeadlessEnvVar, getRecordingPaths, runFiles } from './CLIUtils.js';

const { values, positionals } = parseArgs({
  options: {
    headless: {
      type: 'string',
    },
    extension: {
      type: 'string',
    },
    ext: {
      type: 'string',
    },
    help: {
      type: 'boolean',
      short: 'h',
      default: false,
    },
  },
  allowPositionals: true,
});

if (values.help) {
  console.log(`
Usage: replay [options] <files..>

Options:
  --headless     Run using the browser's headless mode. Choices: shell, true, 1, 0, false
  --ext, --extension    Run using an extension identified by the path.
  -h, --help     Show help
`);
  process.exit(0);
}

const files = positionals;

if (files.length === 0) {
  console.error('Error: Missing required argument: files');
  process.exit(1);
}

const recordingPaths = getRecordingPaths(files);

await runFiles(recordingPaths, {
  log: true,
  headless: getHeadlessEnvVar(
    values.headless || process.env['PUPPETEER_HEADLESS']
  ),
  extension: values.extension || values.ext,
});
