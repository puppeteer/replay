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

[Schema.ts:54](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L54)

---

### frame

• `Optional` **frame**: [`FrameSelector`](../modules/Schema.md#frameselector)

Defaults to main frame

#### Inherited from

[StepWithFrame](Schema.StepWithFrame.md).[frame](Schema.StepWithFrame.md#frame)

#### Defined in

[Schema.ts:68](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L68)

---

### target

• `Optional` **target**: `string`

Defaults to main

#### Inherited from

[StepWithFrame](Schema.StepWithFrame.md).[target](Schema.StepWithFrame.md#target)

#### Defined in

[Schema.ts:61](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L61)

---

### timeout

• `Optional` **timeout**: `number`

#### Inherited from

[StepWithFrame](Schema.StepWithFrame.md).[timeout](Schema.StepWithFrame.md#timeout)

#### Defined in

[Schema.ts:53](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L53)

---

### type

• **type**: [`Scroll`](../enums/Schema.StepType.md#scroll)

#### Overrides

[StepWithFrame](Schema.StepWithFrame.md).[type](Schema.StepWithFrame.md#type)

#### Defined in

[Schema.ts:176](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L176)

---

### x

• `Optional` **x**: `number`

Absolute scroll x position in px. Defaults to 0

#### Defined in

[Schema.ts:180](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L180)

---

### y

• `Optional` **y**: `number`

Absolute scroll y position in px. Defaults to 0

#### Defined in

[Schema.ts:184](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L184)
