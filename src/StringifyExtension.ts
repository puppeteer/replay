/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import type { LineWriter } from './LineWriter.js';
import type { Step, UserFlow } from './Schema.js';

export class StringifyExtension {
  async beforeAllSteps?(out: LineWriter, flow: UserFlow): Promise<void> {}
  async afterAllSteps?(out: LineWriter, flow: UserFlow): Promise<void> {}
  async beforeEachStep?(
    out: LineWriter,
    step: Step,
    flow?: UserFlow
  ): Promise<void> {}
  async stringifyStep(
    out: LineWriter,
    step: Step,
    flow?: UserFlow
  ): Promise<void> {}
  async afterEachStep?(
    out: LineWriter,
    step: Step,
    flow?: UserFlow
  ): Promise<void> {}
}
