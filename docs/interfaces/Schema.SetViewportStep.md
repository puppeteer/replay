[@puppeteer/replay](../README.md) / [Exports](../modules.md) / [Schema](../modules/Schema.md) / SetViewportStep

# Interface: SetViewportStep

[Schema](../modules/Schema.md).SetViewportStep

## Hierarchy

- [`StepWithTarget`](Schema.StepWithTarget.md)

  ↳ **`SetViewportStep`**

## Table of contents

### Properties

- [assertedEvents](Schema.SetViewportStep.md#assertedevents)
- [deviceScaleFactor](Schema.SetViewportStep.md#devicescalefactor)
- [hasTouch](Schema.SetViewportStep.md#hastouch)
- [height](Schema.SetViewportStep.md#height)
- [isLandscape](Schema.SetViewportStep.md#islandscape)
- [isMobile](Schema.SetViewportStep.md#ismobile)
- [target](Schema.SetViewportStep.md#target)
- [timeout](Schema.SetViewportStep.md#timeout)
- [type](Schema.SetViewportStep.md#type)
- [width](Schema.SetViewportStep.md#width)

## Properties

### assertedEvents

• `Optional` **assertedEvents**: [`NavigationEvent`](Schema.NavigationEvent.md)[]

#### Inherited from

[StepWithTarget](Schema.StepWithTarget.md).[assertedEvents](Schema.StepWithTarget.md#assertedevents)

#### Defined in

[Schema.ts:33](https://github.com/puppeteer/replay/blob/34579ab/src/Schema.ts#L33)

___

### deviceScaleFactor

• **deviceScaleFactor**: `number`

#### Defined in

[Schema.ts:96](https://github.com/puppeteer/replay/blob/34579ab/src/Schema.ts#L96)

___

### hasTouch

• **hasTouch**: `boolean`

#### Defined in

[Schema.ts:98](https://github.com/puppeteer/replay/blob/34579ab/src/Schema.ts#L98)

___

### height

• **height**: `number`

#### Defined in

[Schema.ts:95](https://github.com/puppeteer/replay/blob/34579ab/src/Schema.ts#L95)

___

### isLandscape

• **isLandscape**: `boolean`

#### Defined in

[Schema.ts:99](https://github.com/puppeteer/replay/blob/34579ab/src/Schema.ts#L99)

___

### isMobile

• **isMobile**: `boolean`

#### Defined in

[Schema.ts:97](https://github.com/puppeteer/replay/blob/34579ab/src/Schema.ts#L97)

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

• **type**: ``"setViewport"``

#### Overrides

[StepWithTarget](Schema.StepWithTarget.md).[type](Schema.StepWithTarget.md#type)

#### Defined in

[Schema.ts:93](https://github.com/puppeteer/replay/blob/34579ab/src/Schema.ts#L93)

___

### width

• **width**: `number`

#### Defined in

[Schema.ts:94](https://github.com/puppeteer/replay/blob/34579ab/src/Schema.ts#L94)
