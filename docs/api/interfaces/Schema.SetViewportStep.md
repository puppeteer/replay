[@puppeteer/replay](../README.md) / [Schema](../modules/Schema.md) / SetViewportStep

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

[Schema.ts:33](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L33)

___

### deviceScaleFactor

• **deviceScaleFactor**: `number`

#### Defined in

[Schema.ts:130](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L130)

___

### hasTouch

• **hasTouch**: `boolean`

#### Defined in

[Schema.ts:132](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L132)

___

### height

• **height**: `number`

#### Defined in

[Schema.ts:129](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L129)

___

### isLandscape

• **isLandscape**: `boolean`

#### Defined in

[Schema.ts:133](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L133)

___

### isMobile

• **isMobile**: `boolean`

#### Defined in

[Schema.ts:131](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L131)

___

### target

• `Optional` **target**: `string`

Defaults to main

#### Inherited from

[StepWithTarget](Schema.StepWithTarget.md).[target](Schema.StepWithTarget.md#target)

#### Defined in

[Schema.ts:40](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L40)

___

### timeout

• `Optional` **timeout**: `number`

#### Inherited from

[StepWithTarget](Schema.StepWithTarget.md).[timeout](Schema.StepWithTarget.md#timeout)

#### Defined in

[Schema.ts:32](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L32)

___

### type

• **type**: ``"setViewport"``

#### Overrides

[StepWithTarget](Schema.StepWithTarget.md).[type](Schema.StepWithTarget.md#type)

#### Defined in

[Schema.ts:127](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L127)

___

### width

• **width**: `number`

#### Defined in

[Schema.ts:128](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L128)
