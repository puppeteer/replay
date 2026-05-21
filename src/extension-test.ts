/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import { parseArgs } from 'node:util';
import { RunnerExtension, createRunner, parse, stringify } from './main.js';
import { importExtensionFromPath } from './CLIUtils.js';
import http from 'http';
import { files, recording, expectedLog } from './Spec.js';
import assert from 'assert/strict';
import { spawn } from 'child_process';

async function startServer() {
  const log = {
    contents: '',
  };
  const server = http.createServer(async (req, res) => {
    if (req.method === 'GET') {
      for (const [file, content] of files.entries()) {
        if (req.url?.endsWith(file)) {
          res.writeHead(200, { 'Content-Type': 'text/html' });
          res.end(content);
          return;
        }
      }
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('Not found');
      return;
    }
    if (req.method === 'POST') {
      const body = await new Promise((resolve) => {
        const body: any[] = [];
        req
          .on('data', (chunk) => {
            body.push(chunk);
          })
          .on('end', () => {
            resolve(Buffer.concat(body).toString());
          });
      });
      res.writeHead(200);
      res.end();
      log.contents += body;
      return;
    }
    res.writeHead(400);
    res.end();
  });

  return new Promise<{ server: http.Server; log: typeof log }>((resolve) => {
    server.listen(8907, 'localhost', () => {
      resolve({ server, log });
    });
  });
}

const { values } = parseArgs({
  options: {
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
});

if (values.help) {
  console.log(`
Usage: replay-extension-test [options]

Options:
  --ext, --extension    The path to the extension module. The default export will be used as a Stringify or Runner extension based on instanceOf checks.
  -h, --help            Show help
`);
  process.exit(0);
}

const extensionPath = values.extension ?? values.ext;

if (!extensionPath) {
  console.error('Error: Missing required argument: extension');
  process.exit(1);
}

const Extension = await importExtensionFromPath(extensionPath);
const ext = new Extension();

let run = async () => {};

if (ext instanceof RunnerExtension) {
  console.log('runner');
  run = async () => {
    const extension = new Extension();
    const runner = await createRunner(parse(recording), extension);
    await runner.run();
  };
} else {
  run = async () => {
    const exported = await stringify(parse(recording), {
      extension: new Extension(),
    });

    const childProcess = spawn('node', {
      stdio: ['pipe', 'pipe', 'inherit'],
      shell: true,
    });
    childProcess.stdin.write(exported);
    childProcess.stdin.end();

    await new Promise<void>((resolve, reject) => {
      childProcess.on('close', (code) =>
        code
          ? reject(new Error(`Running node failed with code ${code}`))
          : resolve()
      );
    });
  };
}
const { server, log } = await startServer();

try {
  await run();
} catch (err) {
  console.error(err);
} finally {
  server.close();
}
assert.equal(log.contents, expectedLog);
console.log('Run matches the expectations');
