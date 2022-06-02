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

import { UserFlow, Step } from './Schema.js';

/**
 * @public
 */
export class RunnerExtension {
  async beforeAllSteps(_flow: UserFlow): Promise<void> {}
  async afterAllSteps(_flow: UserFlow): Promise<void> {}
  async beforeEachStep(_step: Step, _flow: UserFlow): Promise<void> {}
  async runStep(_step: Step, _flow: UserFlow): Promise<void> {}
  async afterEachStep(_step: Step, _flow: UserFlow): Promise<void> {}
}
