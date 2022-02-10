# @puppeteer/replay

<!-- [START badges] -->

[![Build status](https://github.com/puppeteer/replay/workflows/run-checks/badge.svg)](https://github.com/puppeteer/replay/actions?query=workflow%3Arun-checks) [![npm puppeteer package](https://img.shields.io/npm/v/@puppeteer/replay.svg)](https://npmjs.org/package/@puppeteer/replay)

<!-- [END badges] -->

###### [API](https://github.com/puppeteer/replay/blob/main/docs/api) | [Contributing](https://github.com/puppeteer/replay/blob/main/docs/contributing.md)

> Replay is a library which provides an API to replay and stringify recordings created using [Chrome DevTools Recorder](https://developer.chrome.com/docs/devtools/recorder/)

## Installation

```
npm install @puppeteer/replay --save
```

If you want to replay recordings using Puppeteer, install Puppeteer as well:

```
npm install puppeteer --save
```

## [Replay a recording stored in a file using Puppeteer](/examples/replay-from-file-using-puppeteer/main.js)

```js
import { createRunner, parse } from '@puppeteer/replay';
import fs from 'fs';

// Read recording for a file.
const recordingText = fs.readFileSync('./recording.json', 'utf8');
// Validate & parse the file.
const recording = parse(JSON.parse(recordingText));
// Create a runner and execute the script.
const runner = await createRunner(recording);
await runner.run();
```

## [Stringify a recording as a Puppeteer script](/examples/extend-stringify/main.js)

```js
import { stringify } from '@puppeteer/replay';

console.log(await stringify({
  title: 'Test recording',
  steps: [],
}));
```

## [Customize how a recording is run](/examples/extend-runner/main.js)

The library offers way to customize how a recording is run. You can extend
the `PuppeteerRunnerExtension` class as shown in the example below or you
can extend the `RunnerExtension` class and define a completely new behaviour.

```js
import { createRunner, PuppeteerRunnerExtension } from '../../lib/main.js';
import puppeteer from 'puppeteer';

const browser = await puppeteer.launch({
  headless: true,
});

const page = await browser.newPage();

class Extension extends PuppeteerRunnerExtension {
  async beforeAllSteps(flow) {
    await super.beforeAllSteps(flow);
    console.log('starting');
  }

  async beforeEachStep(step, flow) {
    await super.beforeEachStep(step, flow);
    console.log('before', step);
  }

  async afterEachStep(step, flow) {
    await super.afterEachStep(step, flow);
    console.log('after', step);
  }

  async afterAllSteps(flow) {
    await super.afterAllSteps(flow);
    console.log('done');
  }
}

const runner = await createRunner(
  {
    title: 'Test recording',
    steps: [
      {
        type: 'navigate',
        url: 'https://wikipedia.org',
      },
    ],
  },
  new Extension(browser, page, 7000)
);

await runner.run();

await browser.close();
```

## [Customize how a recording is stringified](/examples/extend-stringify/main.js)

```js
import { stringify, PuppeteerStringifyExtension } from '../../lib/main.js';

class Extension extends PuppeteerStringifyExtension {
  // beforeAllSteps?(out: LineWriter, flow: UserFlow): Promise<void>;
  async beforeAllSteps(...args) {
    await super.beforeAllSteps(...args);
    args[0].appendLine('console.log("starting");');
  }

  // beforeEachStep?(out: LineWriter, step: Step, flow: UserFlow): Promise<void>;
  async beforeEachStep(...args) {
    await super.beforeEachStep(...args);
    const [out, step] = args;
    out.appendLine(`console.log("about to execute step ${step.type}")`);
  }

  // afterEachStep?(out: LineWriter, step: Step, flow: UserFlow): Promise<void>;
  async afterEachStep(...args) {
    const [out, step] = args;
    out.appendLine(`console.log("finished step ${step.type}")`);
    await super.afterEachStep(...args);
  }

  // afterAllSteps?(out: LineWriter, flow: UserFlow): Promise<void>;
  async afterAllSteps(...args) {
    args[0].appendLine('console.log("finished");');
    await super.afterAllSteps(...args);
  }
}

console.log(
  await stringify(
    {
      title: 'Test recording',
      steps: [
        {
          type: 'navigate',
          url: 'https://wikipedia.org',
        },
      ],
    },
    {
      extension: new Extension(),
      indentation: '	', // use tab to indent lines
    }
  )
);
```
