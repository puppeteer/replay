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

import { PuppeteerRunnerOwningBrowserExtension } from './PuppeteerRunnerExtension.js';
import { RunnerExtension } from './RunnerExtension.js';
import { UserFlow, Step } from './Schema.js';

async function _runStepWithHooks(
  extension: RunnerExtension,
  step: Step,
  flow?: UserFlow
) {
  await extension.beforeEachStep?.(step, flow);
  await extension.runStep(step, flow);
  await extension.afterEachStep?.(step, flow);
}

export class Runner {
  #flow?: UserFlow;
  #extension: RunnerExtension;
  #aborted: boolean = false;

  /**
   * @internal
   */
  constructor(extension: RunnerExtension) {
    this.#extension = extension;
  }

  abort(): void {
    this.#aborted = true;
  }

  set flow(flow: UserFlow) {
    this.#flow = flow;
  }

  async runBeforeAllSteps(flow?: UserFlow): Promise<void> {
    await this.#extension.beforeAllSteps?.(flow);
  }

  async runAfterAllSteps(flow?: UserFlow): Promise<void> {
    await this.#extension.afterAllSteps?.(flow);
  }

  /**
   * Runs the provided `step` with `beforeEachStep` and `afterEachStep` hooks.
   * Parameters from the `flow` apply if the `flow` is set.
   */
  async runStep(step: Step): Promise<void> {
    await _runStepWithHooks(this.#extension, step);
  }

  /**
   * Run all the steps in the flow
   * @returns whether all the steps are run or the execution is aborted
   */
  async run(): Promise<boolean> {
    if (!this.#flow) {
      throw new Error(
        'Set the flow on the runner instance before calling `run`.'
      );
    }

    const flow = this.#flow;

    this.#aborted = false;

    await this.#extension.beforeAllSteps?.(flow);

    if (this.#aborted) {
      return false;
    }

    for (const step of flow.steps) {
      if (this.#aborted) {
        await this.#extension.afterAllSteps?.(flow);
        return false;
      }
      await _runStepWithHooks(this.#extension, step, flow);
    }

    await this.#extension.afterAllSteps?.(flow);

    return true;
  }
}

export async function createRunner(): Promise<Runner>;
export async function createRunner(flow: UserFlow): Promise<Runner>;
export async function createRunner(extension: RunnerExtension): Promise<Runner>;
export async function createRunner(
  flow: UserFlow,
  extension: RunnerExtension
): Promise<Runner>;
export async function createRunner(
  flowOrExtension?: UserFlow | RunnerExtension,
  maybeExtension?: RunnerExtension
) {
  const extension =
    flowOrExtension instanceof RunnerExtension
      ? flowOrExtension
      : maybeExtension;
  const flow = !(flowOrExtension instanceof RunnerExtension)
    ? flowOrExtension
    : undefined;
  const runner = new Runner(
    extension ?? (await createPuppeteerRunnerOwningBrowserExtension())
  );
  if (flow) {
    runner.flow = flow;
  }
  return runner;
}

async function createPuppeteerRunnerOwningBrowserExtension() {
  const { default: puppeteer } = await import('puppeteer');
  const browser = await puppeteer.launch({
    headless: 'new',
  });
  const page = await browser.newPage();
  return new PuppeteerRunnerOwningBrowserExtension(browser, page);
}
