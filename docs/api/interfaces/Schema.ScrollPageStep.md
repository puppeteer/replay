[@puppeteer/replay](../README.md) / [Schema](../modules/Schema.md) / ScrollPageStep

# Interface: ScrollPageStep

[Schema](../modules/Schema.md).ScrollPageStep

## Hierarchy

- [`StepWithFrame`](Schema.StepWithFrame.md)

  ↳ **`ScrollPageStep`**

## Table of contents

### Properties

- [assertedEvents](Schema.ScrollPageStep.md#assertedevents)
- [frame](Schema.ScrollPageStep.md#frame)
- [target](Schema.ScrollPageStep.md#target)
- [timeout](Schema.ScrollPageStep.md#timeout)
- [type](Schema.ScrollPageStep.md#type)
- [x](Schema.ScrollPageStep.md#x)
- [y](Schema.ScrollPageStep.md#y)

## Properties

### assertedEvents

• `Optional` **assertedEvents**: [`NavigationEvent`](Schema.NavigationEvent.md)[]

#### Inherited from

[StepWithFrame](Schema.StepWithFrame.md).[assertedEvents](Schema.StepWithFrame.md#assertedevents)

#### Defined in

[Schema.ts:63](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L63)

---

### frame

• `Optional` **frame**: [`FrameSelector`](../modules/Schema.md#frameselector)

Defaults to main frame

#### Inherited from

[StepWithFrame](Schema.StepWithFrame.md).[frame](Schema.StepWithFrame.md#frame)

#### Defined in

[Schema.ts:77](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L77)

---

### target

• `Optional` **target**: `string`

Defaults to main

#### Inherited from

[StepWithFrame](Schema.StepWithFrame.md).[target](Schema.StepWithFrame.md#target)

#### Defined in

[Schema.ts:70](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L70)

---

### timeout

• `Optional` **timeout**: `number`

#### Inherited from

[StepWithFrame](Schema.StepWithFrame.md).[timeout](Schema.StepWithFrame.md#timeout)

#### Defined in

[Schema.ts:62](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L62)

---

### type

• **type**: [`Scroll`](../enums/Schema.StepType.md#scroll)

#### Overrides

[StepWithFrame](Schema.StepWithFrame.md).[type](Schema.StepWithFrame.md#type)

#### Defined in

[Schema.ts:185](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L185)

---

### x

• `Optional` **x**: `number`

Absolute scroll x position in px. Defaults to 0

#### Defined in

[Schema.ts:189](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L189)

---

### y

• `Optional` **y**: `number`

Absolute scroll y position in px. Defaults to 0

#### Defined in

[Schema.ts:193](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L193)
