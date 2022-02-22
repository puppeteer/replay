[@puppeteer/replay](../README.md) / Schema

# Namespace: Schema

## Table of contents

### Interfaces

- [BaseStep](../interfaces/Schema.BaseStep.md)
- [ChangeStep](../interfaces/Schema.ChangeStep.md)
- [ClickStep](../interfaces/Schema.ClickStep.md)
- [CloseStep](../interfaces/Schema.CloseStep.md)
- [CustomStepParams](../interfaces/Schema.CustomStepParams.md)
- [EmulateNetworkConditionsStep](../interfaces/Schema.EmulateNetworkConditionsStep.md)
- [KeyDownStep](../interfaces/Schema.KeyDownStep.md)
- [KeyUpStep](../interfaces/Schema.KeyUpStep.md)
- [NavigateStep](../interfaces/Schema.NavigateStep.md)
- [NavigationEvent](../interfaces/Schema.NavigationEvent.md)
- [ScrollElementStep](../interfaces/Schema.ScrollElementStep.md)
- [ScrollPageStep](../interfaces/Schema.ScrollPageStep.md)
- [SetViewportStep](../interfaces/Schema.SetViewportStep.md)
- [StepWithFrame](../interfaces/Schema.StepWithFrame.md)
- [StepWithSelectors](../interfaces/Schema.StepWithSelectors.md)
- [StepWithTarget](../interfaces/Schema.StepWithTarget.md)
- [UserFlow](../interfaces/Schema.UserFlow.md)
- [WaitForElementStep](../interfaces/Schema.WaitForElementStep.md)
- [WaitForExpressionStep](../interfaces/Schema.WaitForExpressionStep.md)

### Type aliases

- [AssertedEvent](Schema.md#assertedevent)
- [AssertionStep](Schema.md#assertionstep)
- [CustomStep](Schema.md#customstep)
- [FrameSelector](Schema.md#frameselector)
- [Pattern](Schema.md#pattern)
- [ScrollStep](Schema.md#scrollstep)
- [Selector](Schema.md#selector)
- [Step](Schema.md#step)
- [Target](Schema.md#target)
- [UserStep](Schema.md#userstep)

## Type aliases

### AssertedEvent

Ƭ **AssertedEvent**: [`NavigationEvent`](../interfaces/Schema.NavigationEvent.md)

#### Defined in

[Schema.ts:28](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L28)

___

### AssertionStep

Ƭ **AssertionStep**: [`WaitForElementStep`](../interfaces/Schema.WaitForElementStep.md) \| [`WaitForExpressionStep`](../interfaces/Schema.WaitForExpressionStep.md)

#### Defined in

[Schema.ts:193](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L193)

___

### CustomStep

Ƭ **CustomStep**: [`CustomStepParams`](../interfaces/Schema.CustomStepParams.md) & [`StepWithTarget`](../interfaces/Schema.StepWithTarget.md) \| [`CustomStepParams`](../interfaces/Schema.CustomStepParams.md) & [`StepWithFrame`](../interfaces/Schema.StepWithFrame.md)

#### Defined in

[Schema.ts:131](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L131)

___

### FrameSelector

Ƭ **FrameSelector**: `number`[]

#### Defined in

[Schema.ts:20](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L20)

___

### Pattern

Ƭ **Pattern**: `string`

#### Defined in

[Schema.ts:18](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L18)

___

### ScrollStep

Ƭ **ScrollStep**: [`ScrollPageStep`](../interfaces/Schema.ScrollPageStep.md) \| [`ScrollElementStep`](../interfaces/Schema.ScrollElementStep.md)

#### Defined in

[Schema.ts:118](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L118)

___

### Selector

Ƭ **Selector**: `string` \| `string`[]

#### Defined in

[Schema.ts:19](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L19)

___

### Step

Ƭ **Step**: [`UserStep`](Schema.md#userstep) \| [`AssertionStep`](Schema.md#assertionstep)

#### Defined in

[Schema.ts:195](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L195)

___

### Target

Ƭ **Target**: `string`

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

#### Defined in

[Schema.ts:17](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L17)

___

### UserStep

Ƭ **UserStep**: [`ClickStep`](../interfaces/Schema.ClickStep.md) \| [`ChangeStep`](../interfaces/Schema.ChangeStep.md) \| [`EmulateNetworkConditionsStep`](../interfaces/Schema.EmulateNetworkConditionsStep.md) \| [`KeyDownStep`](../interfaces/Schema.KeyDownStep.md) \| [`KeyUpStep`](../interfaces/Schema.KeyUpStep.md) \| [`CloseStep`](../interfaces/Schema.CloseStep.md) \| [`SetViewportStep`](../interfaces/Schema.SetViewportStep.md) \| [`ScrollStep`](Schema.md#scrollstep) \| [`NavigateStep`](../interfaces/Schema.NavigateStep.md) \| [`CustomStep`](Schema.md#customstep)

#### Defined in

[Schema.ts:135](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L135)
