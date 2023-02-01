[@puppeteer/replay](../README.md) / SetViewportStep

# Interface: SetViewportStep

## Hierarchy

- [`StepWithTarget`](Schema.StepWithTarget.md)

  ↳ **`SetViewportStep`**

## Table of contents

### Properties

- [assertedEvents](SetViewportStep.md#assertedevents)
- [deviceScaleFactor](SetViewportStep.md#devicescalefactor)
- [hasTouch](SetViewportStep.md#hastouch)
- [height](SetViewportStep.md#height)
- [isLandscape](SetViewportStep.md#islandscape)
- [isMobile](SetViewportStep.md#ismobile)
- [target](SetViewportStep.md#target)
- [timeout](SetViewportStep.md#timeout)
- [type](SetViewportStep.md#type)
- [width](SetViewportStep.md#width)

## Properties

### assertedEvents

• `Optional` **assertedEvents**: [`NavigationEvent`](Schema.NavigationEvent.md)[]

#### Inherited from

[StepWithTarget](Schema.StepWithTarget.md).[assertedEvents](Schema.StepWithTarget.md#assertedevents)

#### Defined in

[Schema.ts:64](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L64)

---

### deviceScaleFactor

• **deviceScaleFactor**: `number`

#### Defined in

[Schema.ts:179](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L179)

---

### hasTouch

• **hasTouch**: `boolean`

#### Defined in

[Schema.ts:181](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L181)

---

### height

• **height**: `number`

#### Defined in

[Schema.ts:178](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L178)

---

### isLandscape

• **isLandscape**: `boolean`

#### Defined in

[Schema.ts:182](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L182)

---

### isMobile

• **isMobile**: `boolean`

#### Defined in

[Schema.ts:180](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L180)

---

### target

• `Optional` **target**: `string`

Defaults to main

#### Inherited from

[StepWithTarget](Schema.StepWithTarget.md).[target](Schema.StepWithTarget.md#target)

#### Defined in

[Schema.ts:71](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L71)

---

### timeout

• `Optional` **timeout**: `number`

#### Inherited from

[StepWithTarget](Schema.StepWithTarget.md).[timeout](Schema.StepWithTarget.md#timeout)

#### Defined in

[Schema.ts:63](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L63)

---

### type

• **type**: [`SetViewport`](../enums/Schema.StepType.md#setviewport)

#### Overrides

[StepWithTarget](Schema.StepWithTarget.md).[type](Schema.StepWithTarget.md#type)

#### Defined in

[Schema.ts:176](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L176)

---

### width

• **width**: `number`

#### Defined in

[Schema.ts:177](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L177)
