[@puppeteer/replay](../README.md) / [Exports](../modules.md) / [Schema](../modules/Schema.md) / ScrollPageStep

# Interface: ScrollPageStep

[Schema](../modules/Schema.md).ScrollPageStep

## Hierarchy

- [`StepWithFrame`](Schema.StepWithFrame.md)

  ↳ **`ScrollPageStep`**

  ↳↳ [`ScrollElementStep`](Schema.ScrollElementStep.md)

## Table of contents

### Properties

- [assertedEvents](Schema.ScrollPageStep.md#assertedevents)
- [frame](Schema.ScrollPageStep.md#frame)
- [target](Schema.ScrollPageStep.md#target)
- [timeout](Schema.ScrollPageStep.md#timeout)
- [type](Schema.ScrollPageStep.md#type)
- [x](Schema.ScrollPageStep.md#x)
- [y](Schema.ScrollPageStep.md#y)

## Properties

### assertedEvents

• `Optional` **assertedEvents**: [`NavigationEvent`](Schema.NavigationEvent.md)[]

#### Inherited from

[StepWithFrame](Schema.StepWithFrame.md).[assertedEvents](Schema.StepWithFrame.md#assertedevents)

#### Defined in

[Schema.ts:33](https://github.com/puppeteer/replay/blob/5cee7ef/src/Schema.ts#L33)

___

### frame

• `Optional` **frame**: [`FrameSelector`](../modules/Schema.md#frameselector)

Defaults to main frame

#### Inherited from

[StepWithFrame](Schema.StepWithFrame.md).[frame](Schema.StepWithFrame.md#frame)

#### Defined in

[Schema.ts:47](https://github.com/puppeteer/replay/blob/5cee7ef/src/Schema.ts#L47)

___

### target

• `Optional` **target**: `string`

Defaults to main

#### Inherited from

[StepWithFrame](Schema.StepWithFrame.md).[target](Schema.StepWithFrame.md#target)

#### Defined in

[Schema.ts:40](https://github.com/puppeteer/replay/blob/5cee7ef/src/Schema.ts#L40)

___

### timeout

• `Optional` **timeout**: `number`

#### Inherited from

[StepWithFrame](Schema.StepWithFrame.md).[timeout](Schema.StepWithFrame.md#timeout)

#### Defined in

[Schema.ts:32](https://github.com/puppeteer/replay/blob/5cee7ef/src/Schema.ts#L32)

___

### type

• **type**: ``"scroll"``

#### Overrides

[StepWithFrame](Schema.StepWithFrame.md).[type](Schema.StepWithFrame.md#type)

#### Defined in

[Schema.ts:103](https://github.com/puppeteer/replay/blob/5cee7ef/src/Schema.ts#L103)

___

### x

• `Optional` **x**: `number`

Absolute scroll x position in px. Defaults to 0

#### Defined in

[Schema.ts:107](https://github.com/puppeteer/replay/blob/5cee7ef/src/Schema.ts#L107)

___

### y

• `Optional` **y**: `number`

Absolute scroll y position in px. Defaults to 0

#### Defined in

[Schema.ts:111](https://github.com/puppeteer/replay/blob/5cee7ef/src/Schema.ts#L111)
