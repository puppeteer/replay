[@puppeteer/replay](../README.md) / [Exports](../modules.md) / [Schema](../modules/Schema.md) / WaitForExpressionStep

# Interface: WaitForExpressionStep

[Schema](../modules/Schema.md).WaitForExpressionStep

## Hierarchy

- [`StepWithFrame`](Schema.StepWithFrame.md)

  ↳ **`WaitForExpressionStep`**

## Table of contents

### Properties

- [assertedEvents](Schema.WaitForExpressionStep.md#assertedevents)
- [expression](Schema.WaitForExpressionStep.md#expression)
- [frame](Schema.WaitForExpressionStep.md#frame)
- [target](Schema.WaitForExpressionStep.md#target)
- [timeout](Schema.WaitForExpressionStep.md#timeout)
- [type](Schema.WaitForExpressionStep.md#type)

## Properties

### assertedEvents

• `Optional` **assertedEvents**: [`NavigationEvent`](Schema.NavigationEvent.md)[]

#### Inherited from

[StepWithFrame](Schema.StepWithFrame.md).[assertedEvents](Schema.StepWithFrame.md#assertedevents)

#### Defined in

[Schema.ts:33](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L33)

___

### expression

• **expression**: `string`

#### Defined in

[Schema.ts:161](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L161)

___

### frame

• `Optional` **frame**: [`FrameSelector`](../modules/Schema.md#frameselector)

Defaults to main frame

#### Inherited from

[StepWithFrame](Schema.StepWithFrame.md).[frame](Schema.StepWithFrame.md#frame)

#### Defined in

[Schema.ts:47](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L47)

___

### target

• `Optional` **target**: `string`

Defaults to main

#### Inherited from

[StepWithFrame](Schema.StepWithFrame.md).[target](Schema.StepWithFrame.md#target)

#### Defined in

[Schema.ts:40](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L40)

___

### timeout

• `Optional` **timeout**: `number`

#### Inherited from

[StepWithFrame](Schema.StepWithFrame.md).[timeout](Schema.StepWithFrame.md#timeout)

#### Defined in

[Schema.ts:32](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L32)

___

### type

• **type**: ``"waitForExpression"``

#### Overrides

[StepWithFrame](Schema.StepWithFrame.md).[type](Schema.StepWithFrame.md#type)

#### Defined in

[Schema.ts:160](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L160)
