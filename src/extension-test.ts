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
import { RunnerExtension, createRunner, parse } from '../lib/main.js';
import { importExtensionFromPath } from './CLIUtils.js';
import http from 'http';
import { files, recording } from './Spec.js';

async function startServer() {
  // Create an HTTP server
  const server = http.createServer((req, res) => {
    if (req.method !== 'GET') {
      res.writeHead(400);
      res.end();
      return;
    }
    for (const [file, content] of files.entries()) {
      if (req.url?.endsWith(file)) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(content);
        return;
      }
    }
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not found');
  });

  return new Promise<http.Server>((resolve) => {
    server.listen(8907, 'localhost', () => {
      resolve(server);
    });
  });
}

yargs(hideBin(process.argv))
  .command(
    '$0',
    'test an extension implementation',
    () => {},
    async (argv) => {
      const args = argv as unknown as { extension: string };
      const Extension = await importExtensionFromPath(args.extension);
      const ext = new Extension();
      if (ext instanceof RunnerExtension) {
        console.log('runner');
      } else {
        console.log('stringify');
      }
      const server = await startServer();

      try {
        const extension = new Extension();
        const runner = await createRunner(parse(recording), extension);
        await runner.run();
      } catch (err) {
        console.error(err);
      } finally {
        server.close();
      }
    }
  )
  .option('extension', {
    alias: 'ext',
    type: 'string',
    description: 'Run using an extension identified by the path.',
    demandOption: true,
  })
  .parse();
