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
