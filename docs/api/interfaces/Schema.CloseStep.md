[@puppeteer/replay](../README.md) / [Exports](../modules.md) / [Schema](../modules/Schema.md) / CloseStep

# Interface: CloseStep

[Schema](../modules/Schema.md).CloseStep

## Hierarchy

- [`StepWithTarget`](Schema.StepWithTarget.md)

  ↳ **`CloseStep`**

## Table of contents

### Properties

- [assertedEvents](Schema.CloseStep.md#assertedevents)
- [target](Schema.CloseStep.md#target)
- [timeout](Schema.CloseStep.md#timeout)
- [type](Schema.CloseStep.md#type)

## Properties

### assertedEvents

• `Optional` **assertedEvents**: [`NavigationEvent`](Schema.NavigationEvent.md)[]

#### Inherited from

[StepWithTarget](Schema.StepWithTarget.md).[assertedEvents](Schema.StepWithTarget.md#assertedevents)

#### Defined in

[Schema.ts:33](https://github.com/puppeteer/replay/blob/5cee7ef/src/Schema.ts#L33)

___

### target

• `Optional` **target**: `string`

Defaults to main

#### Inherited from

[StepWithTarget](Schema.StepWithTarget.md).[target](Schema.StepWithTarget.md#target)

#### Defined in

[Schema.ts:40](https://github.com/puppeteer/replay/blob/5cee7ef/src/Schema.ts#L40)

___

### timeout

• `Optional` **timeout**: `number`

#### Inherited from

[StepWithTarget](Schema.StepWithTarget.md).[timeout](Schema.StepWithTarget.md#timeout)

#### Defined in

[Schema.ts:32](https://github.com/puppeteer/replay/blob/5cee7ef/src/Schema.ts#L32)

___

### type

• **type**: ``"close"``

#### Overrides

[StepWithTarget](Schema.StepWithTarget.md).[type](Schema.StepWithTarget.md#type)

#### Defined in

[Schema.ts:89](https://github.com/puppeteer/replay/blob/5cee7ef/src/Schema.ts#L89)
