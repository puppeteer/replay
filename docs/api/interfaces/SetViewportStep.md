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

[Schema.ts:148](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L148)

---

### hasTouch

• **hasTouch**: `boolean`

#### Defined in

[Schema.ts:150](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L150)

---

### height

• **height**: `number`

#### Defined in

[Schema.ts:147](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L147)

---

### isLandscape

• **isLandscape**: `boolean`

#### Defined in

[Schema.ts:151](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L151)

---

### isMobile

• **isMobile**: `boolean`

#### Defined in

[Schema.ts:149](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L149)

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

[Schema.ts:145](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L145)

---

### width

• **width**: `number`

#### Defined in

[Schema.ts:146](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L146)
