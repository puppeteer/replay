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

[Schema.ts:33](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L33)

---

### deviceScaleFactor

• **deviceScaleFactor**: `number`

#### Defined in

[Schema.ts:142](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L142)

---

### hasTouch

• **hasTouch**: `boolean`

#### Defined in

[Schema.ts:144](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L144)

---

### height

• **height**: `number`

#### Defined in

[Schema.ts:141](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L141)

---

### isLandscape

• **isLandscape**: `boolean`

#### Defined in

[Schema.ts:145](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L145)

---

### isMobile

• **isMobile**: `boolean`

#### Defined in

[Schema.ts:143](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L143)

---

### target

• `Optional` **target**: `string`

Defaults to main

#### Inherited from

[StepWithTarget](Schema.StepWithTarget.md).[target](Schema.StepWithTarget.md#target)

#### Defined in

[Schema.ts:40](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L40)

---

### timeout

• `Optional` **timeout**: `number`

#### Inherited from

[StepWithTarget](Schema.StepWithTarget.md).[timeout](Schema.StepWithTarget.md#timeout)

#### Defined in

[Schema.ts:32](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L32)

---

### type

• **type**: `"setViewport"`

#### Overrides

[StepWithTarget](Schema.StepWithTarget.md).[type](Schema.StepWithTarget.md#type)

#### Defined in

[Schema.ts:139](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L139)

---

### width

• **width**: `number`

#### Defined in

[Schema.ts:140](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L140)
