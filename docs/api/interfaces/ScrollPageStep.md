[@puppeteer/replay](../README.md) / ScrollPageStep

# Interface: ScrollPageStep

## Hierarchy

- [`StepWithFrame`](Schema.StepWithFrame.md)

  ↳ **`ScrollPageStep`**

## Table of contents

### Properties

- [assertedEvents](ScrollPageStep.md#assertedevents)
- [frame](ScrollPageStep.md#frame)
- [target](ScrollPageStep.md#target)
- [timeout](ScrollPageStep.md#timeout)
- [type](ScrollPageStep.md#type)
- [x](ScrollPageStep.md#x)
- [y](ScrollPageStep.md#y)

## Properties

### assertedEvents

• `Optional` **assertedEvents**: [`NavigationEvent`](Schema.NavigationEvent.md)[]

#### Inherited from

[StepWithFrame](Schema.StepWithFrame.md).[assertedEvents](Schema.StepWithFrame.md#assertedevents)

#### Defined in

[Schema.ts:33](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L33)

---

### frame

• `Optional` **frame**: [`FrameSelector`](../modules/Schema.md#frameselector)

Defaults to main frame

#### Inherited from

[StepWithFrame](Schema.StepWithFrame.md).[frame](Schema.StepWithFrame.md#frame)

#### Defined in

[Schema.ts:47](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L47)

---

### target

• `Optional` **target**: `string`

Defaults to main

#### Inherited from

[StepWithFrame](Schema.StepWithFrame.md).[target](Schema.StepWithFrame.md#target)

#### Defined in

[Schema.ts:40](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L40)

---

### timeout

• `Optional` **timeout**: `number`

#### Inherited from

[StepWithFrame](Schema.StepWithFrame.md).[timeout](Schema.StepWithFrame.md#timeout)

#### Defined in

[Schema.ts:32](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L32)

---

### type

• **type**: `"scroll"`

#### Overrides

[StepWithFrame](Schema.StepWithFrame.md).[type](Schema.StepWithFrame.md#type)

#### Defined in

[Schema.ts:149](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L149)

---

### x

• `Optional` **x**: `number`

Absolute scroll x position in px. Defaults to 0

#### Defined in

[Schema.ts:153](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L153)

---

### y

• `Optional` **y**: `number`

Absolute scroll y position in px. Defaults to 0

#### Defined in

[Schema.ts:157](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L157)
