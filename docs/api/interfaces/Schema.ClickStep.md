[@puppeteer/replay](../README.md) / [Exports](../modules.md) / [Schema](../modules/Schema.md) / ClickStep

# Interface: ClickStep

[Schema](../modules/Schema.md).ClickStep

## Hierarchy

- [`StepWithSelectors`](Schema.StepWithSelectors.md)

  ↳ **`ClickStep`**

## Table of contents

### Properties

- [assertedEvents](Schema.ClickStep.md#assertedevents)
- [frame](Schema.ClickStep.md#frame)
- [offsetX](Schema.ClickStep.md#offsetx)
- [offsetY](Schema.ClickStep.md#offsety)
- [selectors](Schema.ClickStep.md#selectors)
- [target](Schema.ClickStep.md#target)
- [timeout](Schema.ClickStep.md#timeout)
- [type](Schema.ClickStep.md#type)

## Properties

### assertedEvents

• `Optional` **assertedEvents**: [`NavigationEvent`](Schema.NavigationEvent.md)[]

#### Inherited from

[StepWithSelectors](Schema.StepWithSelectors.md).[assertedEvents](Schema.StepWithSelectors.md#assertedevents)

#### Defined in

[Schema.ts:34](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L34)

___

### frame

• `Optional` **frame**: [`FrameSelector`](../modules/Schema.md#frameselector)

Defaults to main frame

#### Inherited from

[StepWithSelectors](Schema.StepWithSelectors.md).[frame](Schema.StepWithSelectors.md#frame)

#### Defined in

[Schema.ts:48](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L48)

___

### offsetX

• **offsetX**: `number`

in px, relative to the top-left corner of the element content box. Defaults to the center of the element

#### Defined in

[Schema.ts:60](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L60)

___

### offsetY

• **offsetY**: `number`

in px, relative to the top-left corner of the element content box. Defaults to the center of the element

#### Defined in

[Schema.ts:64](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L64)

___

### selectors

• **selectors**: [`Selector`](../modules/Schema.md#selector)[]

#### Inherited from

[StepWithSelectors](Schema.StepWithSelectors.md).[selectors](Schema.StepWithSelectors.md#selectors)

#### Defined in

[Schema.ts:52](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L52)

___

### target

• `Optional` **target**: `string`

Defaults to main

#### Inherited from

[StepWithSelectors](Schema.StepWithSelectors.md).[target](Schema.StepWithSelectors.md#target)

#### Defined in

[Schema.ts:41](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L41)

___

### timeout

• `Optional` **timeout**: `number`

#### Inherited from

[StepWithSelectors](Schema.StepWithSelectors.md).[timeout](Schema.StepWithSelectors.md#timeout)

#### Defined in

[Schema.ts:33](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L33)

___

### type

• **type**: ``"click"``

#### Overrides

[StepWithSelectors](Schema.StepWithSelectors.md).[type](Schema.StepWithSelectors.md#type)

#### Defined in

[Schema.ts:56](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L56)
