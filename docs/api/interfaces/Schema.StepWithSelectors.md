[@puppeteer/replay](../README.md) / [Exports](../modules.md) / [Schema](../modules/Schema.md) / StepWithSelectors

# Interface: StepWithSelectors

[Schema](../modules/Schema.md).StepWithSelectors

## Hierarchy

- [`StepWithFrame`](Schema.StepWithFrame.md)

  ↳ **`StepWithSelectors`**

  ↳↳ [`ClickStep`](Schema.ClickStep.md)

  ↳↳ [`ChangeStep`](Schema.ChangeStep.md)

  ↳↳ [`WaitForElementStep`](Schema.WaitForElementStep.md)

## Table of contents

### Properties

- [assertedEvents](Schema.StepWithSelectors.md#assertedevents)
- [frame](Schema.StepWithSelectors.md#frame)
- [selectors](Schema.StepWithSelectors.md#selectors)
- [target](Schema.StepWithSelectors.md#target)
- [timeout](Schema.StepWithSelectors.md#timeout)
- [type](Schema.StepWithSelectors.md#type)

## Properties

### assertedEvents

• `Optional` **assertedEvents**: [`NavigationEvent`](Schema.NavigationEvent.md)[]

#### Inherited from

[StepWithFrame](Schema.StepWithFrame.md).[assertedEvents](Schema.StepWithFrame.md#assertedevents)

#### Defined in

[Schema.ts:34](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L34)

___

### frame

• `Optional` **frame**: [`FrameSelector`](../modules/Schema.md#frameselector)

Defaults to main frame

#### Inherited from

[StepWithFrame](Schema.StepWithFrame.md).[frame](Schema.StepWithFrame.md#frame)

#### Defined in

[Schema.ts:48](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L48)

___

### selectors

• **selectors**: [`Selector`](../modules/Schema.md#selector)[]

#### Defined in

[Schema.ts:52](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L52)

___

### target

• `Optional` **target**: `string`

Defaults to main

#### Inherited from

[StepWithFrame](Schema.StepWithFrame.md).[target](Schema.StepWithFrame.md#target)

#### Defined in

[Schema.ts:41](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L41)

___

### timeout

• `Optional` **timeout**: `number`

#### Inherited from

[StepWithFrame](Schema.StepWithFrame.md).[timeout](Schema.StepWithFrame.md#timeout)

#### Defined in

[Schema.ts:33](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L33)

___

### type

• **type**: `string`

#### Inherited from

[StepWithFrame](Schema.StepWithFrame.md).[type](Schema.StepWithFrame.md#type)

#### Defined in

[Schema.ts:32](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L32)
