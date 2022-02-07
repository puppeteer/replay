[@puppeteer/replay](../README.md) / [Exports](../modules.md) / [Schema](../modules/Schema.md) / StepWithFrame

# Interface: StepWithFrame

[Schema](../modules/Schema.md).StepWithFrame

## Hierarchy

- [`StepWithTarget`](Schema.StepWithTarget.md)

  ↳ **`StepWithFrame`**

  ↳↳ [`StepWithSelectors`](Schema.StepWithSelectors.md)

  ↳↳ [`ScrollPageStep`](Schema.ScrollPageStep.md)

  ↳↳ [`WaitForExpressionStep`](Schema.WaitForExpressionStep.md)

## Table of contents

### Properties

- [assertedEvents](Schema.StepWithFrame.md#assertedevents)
- [frame](Schema.StepWithFrame.md#frame)
- [target](Schema.StepWithFrame.md#target)
- [timeout](Schema.StepWithFrame.md#timeout)
- [type](Schema.StepWithFrame.md#type)

## Properties

### assertedEvents

• `Optional` **assertedEvents**: [`NavigationEvent`](Schema.NavigationEvent.md)[]

#### Inherited from

[StepWithTarget](Schema.StepWithTarget.md).[assertedEvents](Schema.StepWithTarget.md#assertedevents)

#### Defined in

[Schema.ts:33](https://github.com/puppeteer/replay/blob/34579ab/src/Schema.ts#L33)

___

### frame

• `Optional` **frame**: [`FrameSelector`](../modules/Schema.md#frameselector)

Defaults to main frame

#### Defined in

[Schema.ts:47](https://github.com/puppeteer/replay/blob/34579ab/src/Schema.ts#L47)

___

### target

• `Optional` **target**: `string`

Defaults to main

#### Inherited from

[StepWithTarget](Schema.StepWithTarget.md).[target](Schema.StepWithTarget.md#target)

#### Defined in

[Schema.ts:40](https://github.com/puppeteer/replay/blob/34579ab/src/Schema.ts#L40)

___

### timeout

• `Optional` **timeout**: `number`

#### Inherited from

[StepWithTarget](Schema.StepWithTarget.md).[timeout](Schema.StepWithTarget.md#timeout)

#### Defined in

[Schema.ts:32](https://github.com/puppeteer/replay/blob/34579ab/src/Schema.ts#L32)

___

### type

• **type**: `string`

#### Inherited from

[StepWithTarget](Schema.StepWithTarget.md).[type](Schema.StepWithTarget.md#type)

#### Defined in

[Schema.ts:31](https://github.com/puppeteer/replay/blob/34579ab/src/Schema.ts#L31)
