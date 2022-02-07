[@puppeteer/replay](../README.md) / [Exports](../modules.md) / [Schema](../modules/Schema.md) / KeyDownStep

# Interface: KeyDownStep

[Schema](../modules/Schema.md).KeyDownStep

## Hierarchy

- [`StepWithTarget`](Schema.StepWithTarget.md)

  ↳ **`KeyDownStep`**

## Table of contents

### Properties

- [assertedEvents](Schema.KeyDownStep.md#assertedevents)
- [key](Schema.KeyDownStep.md#key)
- [target](Schema.KeyDownStep.md#target)
- [timeout](Schema.KeyDownStep.md#timeout)
- [type](Schema.KeyDownStep.md#type)

## Properties

### assertedEvents

• `Optional` **assertedEvents**: [`NavigationEvent`](Schema.NavigationEvent.md)[]

#### Inherited from

[StepWithTarget](Schema.StepWithTarget.md).[assertedEvents](Schema.StepWithTarget.md#assertedevents)

#### Defined in

[Schema.ts:34](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L34)

___

### key

• **key**: [`Key`](../modules/Schema.md#key)

#### Defined in

[Schema.ts:81](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L81)

___

### target

• `Optional` **target**: `string`

Defaults to main

#### Inherited from

[StepWithTarget](Schema.StepWithTarget.md).[target](Schema.StepWithTarget.md#target)

#### Defined in

[Schema.ts:41](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L41)

___

### timeout

• `Optional` **timeout**: `number`

#### Inherited from

[StepWithTarget](Schema.StepWithTarget.md).[timeout](Schema.StepWithTarget.md#timeout)

#### Defined in

[Schema.ts:33](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L33)

___

### type

• **type**: ``"keyDown"``

#### Overrides

[StepWithTarget](Schema.StepWithTarget.md).[type](Schema.StepWithTarget.md#type)

#### Defined in

[Schema.ts:80](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L80)
