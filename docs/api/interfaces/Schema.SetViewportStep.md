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

[Schema.ts:61](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L61)

---

### deviceScaleFactor

• **deviceScaleFactor**: `number`

#### Defined in

[Schema.ts:176](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L176)

---

### hasTouch

• **hasTouch**: `boolean`

#### Defined in

[Schema.ts:178](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L178)

---

### height

• **height**: `number`

#### Defined in

[Schema.ts:175](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L175)

---

### isLandscape

• **isLandscape**: `boolean`

#### Defined in

[Schema.ts:179](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L179)

---

### isMobile

• **isMobile**: `boolean`

#### Defined in

[Schema.ts:177](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L177)

---

### target

• `Optional` **target**: `string`

Defaults to main

#### Inherited from

[StepWithTarget](Schema.StepWithTarget.md).[target](Schema.StepWithTarget.md#target)

#### Defined in

[Schema.ts:68](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L68)

---

### timeout

• `Optional` **timeout**: `number`

#### Inherited from

[StepWithTarget](Schema.StepWithTarget.md).[timeout](Schema.StepWithTarget.md#timeout)

#### Defined in

[Schema.ts:60](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L60)

---

### type

• **type**: [`SetViewport`](../enums/Schema.StepType.md#setviewport)

#### Overrides

[StepWithTarget](Schema.StepWithTarget.md).[type](Schema.StepWithTarget.md#type)

#### Defined in

[Schema.ts:173](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L173)

---

### width

• **width**: `number`

#### Defined in

[Schema.ts:174](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L174)
