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

import { LineWriter } from './LineWriter.js';
import { Step, UserFlow } from './Schema.js';

/**
 * @public
 */
export class StringifyExtension {
  async beforeAllSteps(_out: LineWriter, _flow: UserFlow): Promise<void> {}
  async afterAllSteps(_out: LineWriter, _flow: UserFlow): Promise<void> {}
  async beforeEachStep(
    _out: LineWriter,
    _step: Step,
    _flow?: UserFlow
  ): Promise<void> {}
  async stringifyStep(
    _out: LineWriter,
    _step: Step,
    _flow?: UserFlow
  ): Promise<void> {}
  async afterEachStep(
    _out: LineWriter,
    _step: Step,
    _flow?: UserFlow
  ): Promise<void> {}
}
