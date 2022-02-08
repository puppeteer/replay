[@puppeteer/replay](../README.md) / [Exports](../modules.md) / [Schema](../modules/Schema.md) / StepWithTarget

# Interface: StepWithTarget

[Schema](../modules/Schema.md).StepWithTarget

## Hierarchy

- [`BaseStep`](Schema.BaseStep.md)

  ↳ **`StepWithTarget`**

  ↳↳ [`StepWithFrame`](Schema.StepWithFrame.md)

  ↳↳ [`EmulateNetworkConditionsStep`](Schema.EmulateNetworkConditionsStep.md)

  ↳↳ [`KeyDownStep`](Schema.KeyDownStep.md)

  ↳↳ [`KeyUpStep`](Schema.KeyUpStep.md)

  ↳↳ [`CloseStep`](Schema.CloseStep.md)

  ↳↳ [`SetViewportStep`](Schema.SetViewportStep.md)

  ↳↳ [`NavigateStep`](Schema.NavigateStep.md)

## Table of contents

### Properties

- [assertedEvents](Schema.StepWithTarget.md#assertedevents)
- [target](Schema.StepWithTarget.md#target)
- [timeout](Schema.StepWithTarget.md#timeout)
- [type](Schema.StepWithTarget.md#type)

## Properties

### assertedEvents

• `Optional` **assertedEvents**: [`NavigationEvent`](Schema.NavigationEvent.md)[]

#### Inherited from

[BaseStep](Schema.BaseStep.md).[assertedEvents](Schema.BaseStep.md#assertedevents)

#### Defined in

[Schema.ts:33](https://github.com/puppeteer/replay/blob/5cee7ef/src/Schema.ts#L33)

___

### target

• `Optional` **target**: `string`

Defaults to main

#### Defined in

[Schema.ts:40](https://github.com/puppeteer/replay/blob/5cee7ef/src/Schema.ts#L40)

___

### timeout

• `Optional` **timeout**: `number`

#### Inherited from

[BaseStep](Schema.BaseStep.md).[timeout](Schema.BaseStep.md#timeout)

#### Defined in

[Schema.ts:32](https://github.com/puppeteer/replay/blob/5cee7ef/src/Schema.ts#L32)

___

### type

• **type**: `string`

#### Inherited from

[BaseStep](Schema.BaseStep.md).[type](Schema.BaseStep.md#type)

#### Defined in

[Schema.ts:31](https://github.com/puppeteer/replay/blob/5cee7ef/src/Schema.ts#L31)
