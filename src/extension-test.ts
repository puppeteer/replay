/**
    Copyright 2023 Google LLC

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

import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import {
  RunnerExtension,
  createRunner,
  parse,
  stringify,
} from '../lib/main.js';
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

yargs(hideBin(process.argv))
  .command(
    '$0',
    'Test an extension implementation',
    () => {},
    async (argv) => {
      const args = argv as unknown as { extension: string };
      const Extension = await importExtensionFromPath(args.extension);
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
    }
  )
  .option('extension', {
    alias: 'ext',
    type: 'string',
    description:
      'The path to the extension module. The default export will be used as a Stringify or Runner extension based on instanceOf checks.',
    demandOption: true,
  })
  .parse();
