/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import type { Step, UserFlow } from '../Schema.js';
import { AssertedEventType, StepType } from '../Schema.js';

export function isNavigationStep(step: Step): boolean {
  return Boolean(
    step.type === StepType.Navigate ||
    step.assertedEvents?.some(
      (event) => event.type === AssertedEventType.Navigation
    )
  );
}

export function isMobileFlow(flow: UserFlow): boolean {
  for (const step of flow.steps) {
    if (step.type === StepType.SetViewport) {
      return step.isMobile;
    }
  }
  return false;
}
