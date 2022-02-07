[@puppeteer/replay](../README.md) / [Exports](../modules.md) / [Schema](../modules/Schema.md) / ChangeStep

# Interface: ChangeStep

[Schema](../modules/Schema.md).ChangeStep

## Hierarchy

- [`StepWithSelectors`](Schema.StepWithSelectors.md)

  ↳ **`ChangeStep`**

## Table of contents

### Properties

- [assertedEvents](Schema.ChangeStep.md#assertedevents)
- [frame](Schema.ChangeStep.md#frame)
- [selectors](Schema.ChangeStep.md#selectors)
- [target](Schema.ChangeStep.md#target)
- [timeout](Schema.ChangeStep.md#timeout)
- [type](Schema.ChangeStep.md#type)
- [value](Schema.ChangeStep.md#value)

## Properties

### assertedEvents

• `Optional` **assertedEvents**: [`NavigationEvent`](Schema.NavigationEvent.md)[]

#### Inherited from

[StepWithSelectors](Schema.StepWithSelectors.md).[assertedEvents](Schema.StepWithSelectors.md#assertedevents)

#### Defined in

[Schema.ts:33](https://github.com/puppeteer/replay/blob/5cee7ef/src/Schema.ts#L33)

___

### frame

• `Optional` **frame**: [`FrameSelector`](../modules/Schema.md#frameselector)

Defaults to main frame

#### Inherited from

[StepWithSelectors](Schema.StepWithSelectors.md).[frame](Schema.StepWithSelectors.md#frame)

#### Defined in

[Schema.ts:47](https://github.com/puppeteer/replay/blob/5cee7ef/src/Schema.ts#L47)

___

### selectors

• **selectors**: [`Selector`](../modules/Schema.md#selector)[]

#### Inherited from

[StepWithSelectors](Schema.StepWithSelectors.md).[selectors](Schema.StepWithSelectors.md#selectors)

#### Defined in

[Schema.ts:51](https://github.com/puppeteer/replay/blob/5cee7ef/src/Schema.ts#L51)

___

### target

• `Optional` **target**: `string`

Defaults to main

#### Inherited from

[StepWithSelectors](Schema.StepWithSelectors.md).[target](Schema.StepWithSelectors.md#target)

#### Defined in

[Schema.ts:40](https://github.com/puppeteer/replay/blob/5cee7ef/src/Schema.ts#L40)

___

### timeout

• `Optional` **timeout**: `number`

#### Inherited from

[StepWithSelectors](Schema.StepWithSelectors.md).[timeout](Schema.StepWithSelectors.md#timeout)

#### Defined in

[Schema.ts:32](https://github.com/puppeteer/replay/blob/5cee7ef/src/Schema.ts#L32)

___

### type

• **type**: ``"change"``

#### Overrides

[StepWithSelectors](Schema.StepWithSelectors.md).[type](Schema.StepWithSelectors.md#type)

#### Defined in

[Schema.ts:67](https://github.com/puppeteer/replay/blob/5cee7ef/src/Schema.ts#L67)

___

### value

• **value**: `string`

#### Defined in

[Schema.ts:68](https://github.com/puppeteer/replay/blob/5cee7ef/src/Schema.ts#L68)
