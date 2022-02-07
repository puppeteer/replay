[@puppeteer/replay](../README.md) / [Exports](../modules.md) / [Schema](../modules/Schema.md) / ScrollElementStep

# Interface: ScrollElementStep

[Schema](../modules/Schema.md).ScrollElementStep

## Hierarchy

- [`ScrollPageStep`](Schema.ScrollPageStep.md)

  ↳ **`ScrollElementStep`**

## Table of contents

### Properties

- [assertedEvents](Schema.ScrollElementStep.md#assertedevents)
- [frame](Schema.ScrollElementStep.md#frame)
- [selectors](Schema.ScrollElementStep.md#selectors)
- [target](Schema.ScrollElementStep.md#target)
- [timeout](Schema.ScrollElementStep.md#timeout)
- [type](Schema.ScrollElementStep.md#type)
- [x](Schema.ScrollElementStep.md#x)
- [y](Schema.ScrollElementStep.md#y)

## Properties

### assertedEvents

• `Optional` **assertedEvents**: [`NavigationEvent`](Schema.NavigationEvent.md)[]

#### Inherited from

[ScrollPageStep](Schema.ScrollPageStep.md).[assertedEvents](Schema.ScrollPageStep.md#assertedevents)

#### Defined in

[Schema.ts:34](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L34)

___

### frame

• `Optional` **frame**: [`FrameSelector`](../modules/Schema.md#frameselector)

Defaults to main frame

#### Inherited from

[ScrollPageStep](Schema.ScrollPageStep.md).[frame](Schema.ScrollPageStep.md#frame)

#### Defined in

[Schema.ts:48](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L48)

___

### selectors

• **selectors**: [`Selector`](../modules/Schema.md#selector)[]

#### Defined in

[Schema.ts:116](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L116)

___

### target

• `Optional` **target**: `string`

Defaults to main

#### Inherited from

[ScrollPageStep](Schema.ScrollPageStep.md).[target](Schema.ScrollPageStep.md#target)

#### Defined in

[Schema.ts:41](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L41)

___

### timeout

• `Optional` **timeout**: `number`

#### Inherited from

[ScrollPageStep](Schema.ScrollPageStep.md).[timeout](Schema.ScrollPageStep.md#timeout)

#### Defined in

[Schema.ts:33](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L33)

___

### type

• **type**: ``"scroll"``

#### Inherited from

[ScrollPageStep](Schema.ScrollPageStep.md).[type](Schema.ScrollPageStep.md#type)

#### Defined in

[Schema.ts:104](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L104)

___

### x

• `Optional` **x**: `number`

Absolute scroll x position in px. Defaults to 0

#### Inherited from

[ScrollPageStep](Schema.ScrollPageStep.md).[x](Schema.ScrollPageStep.md#x)

#### Defined in

[Schema.ts:108](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L108)

___

### y

• `Optional` **y**: `number`

Absolute scroll y position in px. Defaults to 0

#### Inherited from

[ScrollPageStep](Schema.ScrollPageStep.md).[y](Schema.ScrollPageStep.md#y)

#### Defined in

[Schema.ts:112](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L112)
