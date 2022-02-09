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

[Schema.ts:33](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L33)

___

### frame

• `Optional` **frame**: [`FrameSelector`](../modules/Schema.md#frameselector)

Defaults to main frame

#### Inherited from

[StepWithSelectors](Schema.StepWithSelectors.md).[frame](Schema.StepWithSelectors.md#frame)

#### Defined in

[Schema.ts:47](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L47)

___

### offsetX

• **offsetX**: `number`

in px, relative to the top-left corner of the element content box. Defaults to the center of the element

#### Defined in

[Schema.ts:59](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L59)

___

### offsetY

• **offsetY**: `number`

in px, relative to the top-left corner of the element content box. Defaults to the center of the element

#### Defined in

[Schema.ts:63](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L63)

___

### selectors

• **selectors**: [`Selector`](../modules/Schema.md#selector)[]

#### Inherited from

[StepWithSelectors](Schema.StepWithSelectors.md).[selectors](Schema.StepWithSelectors.md#selectors)

#### Defined in

[Schema.ts:51](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L51)

___

### target

• `Optional` **target**: `string`

Defaults to main

#### Inherited from

[StepWithSelectors](Schema.StepWithSelectors.md).[target](Schema.StepWithSelectors.md#target)

#### Defined in

[Schema.ts:40](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L40)

___

### timeout

• `Optional` **timeout**: `number`

#### Inherited from

[StepWithSelectors](Schema.StepWithSelectors.md).[timeout](Schema.StepWithSelectors.md#timeout)

#### Defined in

[Schema.ts:32](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L32)

___

### type

• **type**: ``"click"``

#### Overrides

[StepWithSelectors](Schema.StepWithSelectors.md).[type](Schema.StepWithSelectors.md#type)

#### Defined in

[Schema.ts:55](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L55)
