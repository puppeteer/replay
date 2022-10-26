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

[Schema.ts:54](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L54)

---

### deviceScaleFactor

• **deviceScaleFactor**: `number`

#### Defined in

[Schema.ts:169](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L169)

---

### hasTouch

• **hasTouch**: `boolean`

#### Defined in

[Schema.ts:171](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L171)

---

### height

• **height**: `number`

#### Defined in

[Schema.ts:168](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L168)

---

### isLandscape

• **isLandscape**: `boolean`

#### Defined in

[Schema.ts:172](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L172)

---

### isMobile

• **isMobile**: `boolean`

#### Defined in

[Schema.ts:170](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L170)

---

### target

• `Optional` **target**: `string`

Defaults to main

#### Inherited from

[StepWithTarget](Schema.StepWithTarget.md).[target](Schema.StepWithTarget.md#target)

#### Defined in

[Schema.ts:61](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L61)

---

### timeout

• `Optional` **timeout**: `number`

#### Inherited from

[StepWithTarget](Schema.StepWithTarget.md).[timeout](Schema.StepWithTarget.md#timeout)

#### Defined in

[Schema.ts:53](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L53)

---

### type

• **type**: [`SetViewport`](../enums/Schema.StepType.md#setviewport)

#### Overrides

[StepWithTarget](Schema.StepWithTarget.md).[type](Schema.StepWithTarget.md#type)

#### Defined in

[Schema.ts:166](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L166)

---

### width

• **width**: `number`

#### Defined in

[Schema.ts:167](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L167)
