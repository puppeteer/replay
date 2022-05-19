# @puppeteer/replay

<!-- [START badges] -->

[![Build status](https://github.com/puppeteer/replay/workflows/run-checks/badge.svg)](https://github.com/puppeteer/replay/actions?query=workflow%3Arun-checks) [![npm puppeteer package](https://img.shields.io/npm/v/@puppeteer/replay.svg)](https://npmjs.org/package/@puppeteer/replay)

<!-- [END badges] -->

###### [API](https://github.com/puppeteer/replay/blob/main/docs/api) | [Contributing](https://github.com/puppeteer/replay/blob/main/docs/contributing.md)

> Puppeteer Replay is a library that provides an API to replay and stringify recordings created using [Chrome DevTools Recorder](https://developer.chrome.com/docs/devtools/recorder/)

## Installation

```
npm install @puppeteer/replay --save
```

> Currently, @puppeteer/replay ships only ESM modules. Please vote/comment on [this issue](https://github.com/puppeteer/replay/issues/26), if you need CJS module support.

If you want to replay recordings using Puppeteer, install Puppeteer as well:

```
npm install puppeteer --save
```
## Getting started with Puppeteer Replay

You can use Puppeteer Replay to:

1. **Replay recording**. Replay recording with CLI or using [the replay lib API](/examples/replay-from-file-using-puppeteer/main.js).
2. **Customize replay**. Customize how a recording is run. For example, capture screenshots after each step or integrate with 3rd party libraries.
3. **Transform recoding**. Customize how a recording is stringified. For example, transform the recording into another format, like [Cypress test script](https://github.com/cypress-io/cypress-chrome-recorder))

## 1. Replay recording

Download this [example recording](https://storage.googleapis.com/web-dev-uploads/file/dPDCek3EhZgLQPGtEG3y0fTn4v82/vzQbv2rUfTz2DEmx06Gv.json) and save it as `recording.json`.

Using CLI + npx:

```
npx @puppeteer/replay recording.json
```

Using CLI + package.json:

In your `package.json` add a new script to invoke the `replay` command:

```json
{
  "scripts": {
    "replay": "replay recording.json"
  }
}
```

Set the `PUPPETEER_HEADLESS` environment variable to control whether the browser is start in a headful or headless mode. For example,

```
PUPPETEER_HEADLESS=true npx @puppeteer/replay recording.json # runs in headless mode, the default mode.
PUPPETEER_HEADLESS=false npx @puppeteer/replay recording.json # runs in headful mode.
PUPPETEER_HEADLESS=chrome npx @puppeteer/replay recording.json # runs in the new experimental headless mode.
```

Set the `BASE_URL` environment variable to replace your base URL in your recordings. For example,

```
BASE_URL=localhost:3001 npx @puppeteer/replay recording.json # It will run your recording.json by replacing the base URLs of your URLs with the BASE_URL you provided
```

Using [the replay lib API](/examples/replay-from-file-using-puppeteer/main.js):

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

## 2. Customize replay

The library offers a way to customize how a recording is run. You can extend
the `PuppeteerRunnerExtension` class as shown in the example below.

Full example of the `PuppeteerRunnerExtension`: [link](/examples/extend-runner/main.js)

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


## 3. Transform recording

You can customize how a recording is stringified and use it to transform the recording format.

### Stringify a recording as a Puppeteer script

```js
import { stringify } from '@puppeteer/replay';

console.log(await stringify({
  title: 'Test recording',
  steps: [],
}));
```

### Customize how a recording is stringified

You can customize how a recording is stringified by extending the `PuppeteerStringifyExtension` class as shown in the example below.

Full example of `PuppeteerStringifyExtension` : [link](/examples/extend-stringify/main.js)

```js
import { stringify, PuppeteerStringifyExtension } from '@puppeteer/replay';

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
