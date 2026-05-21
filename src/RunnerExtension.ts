/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import type { UserFlow, Step } from './Schema.js';

export class RunnerExtension {
  async beforeAllSteps?(flow?: UserFlow): Promise<void> {}
  async afterAllSteps?(flow?: UserFlow): Promise<void> {}
  async beforeEachStep?(step: Step, flow?: UserFlow): Promise<void> {}
  async runStep(step: Step, flow?: UserFlow): Promise<void> {}
  async afterEachStep?(step: Step, flow?: UserFlow): Promise<void> {}
}
