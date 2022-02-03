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

import { RunnerExtension } from "./RunnerExtension.js";
import { UserFlow } from "./Schema.js";

export class Runner {
  #flow: UserFlow;
  #extension: RunnerExtension;
  #nextStep = 0;

  constructor(flow: UserFlow, extension: RunnerExtension) {
    this.#flow = flow;
    this.#extension = extension;
  }

  async run(stopBeforeStepIdx?: number): Promise<void> {
    if (stopBeforeStepIdx === undefined) {
      stopBeforeStepIdx = this.#flow.steps.length;
    }
    if (this.#nextStep === 0) {
      await this.#extension.beforeAllSteps?.(this.#flow);
    }
    while (
      this.#nextStep < stopBeforeStepIdx &&
      this.#nextStep < this.#flow.steps.length
    ) {
      await this.#extension.beforeEachStep?.(
        this.#flow.steps[this.#nextStep],
        this.#flow
      );
      await this.#extension.runStep(
        this.#flow.steps[this.#nextStep],
        this.#flow
      );
      await this.#extension.afterEachStep?.(
        this.#flow.steps[this.#nextStep],
        this.#flow
      );
    }
    if (this.#nextStep >= this.#flow.steps.length) {
      await this.#extension.afterAllSteps?.(this.#flow);
    }
  }
}

export function createRunner(flow: UserFlow, extension: RunnerExtension) {
  return new Runner(flow, extension);
}
