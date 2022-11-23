exports[
  'PuppeteerReplayStringifyExtension should print the script for a click step 1'
] = `
await runner.runStep({
  type: 'click',
  target: 'main',
  selectors: [
    'aria/Test'
  ],
  offsetX: 1,
  offsetY: 1,
  assertedEvents: [
    {
      type: 'navigation'
    }
  ]
});

`;

exports['PuppeteerReplayStringifyExtension should print an entire script 1'] = `
import url from 'url';
import { createRunner } from '@puppeteer/replay';

export async function run(extension) {
  const runner = await createRunner(extension);

  await runner.runBeforeAllSteps();

  await runner.runStep({
    type: 'click',
    target: 'main',
    selectors: [
      'aria/Test'
    ],
    offsetX: 1,
    offsetY: 1,
    assertedEvents: [
      {
        type: 'navigation'
      }
    ]
  });

  await runner.runAfterAllSteps();
}

if (process && import.meta.url === url.pathToFileURL(process.argv[1]).href) {
  run()
}
//# recorderSourceMap=BIO

`;
