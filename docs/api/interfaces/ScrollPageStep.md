[**@puppeteer/replay**](../README.md)

---

[@puppeteer/replay](../README.md) / ScrollPageStep

# Interface: ScrollPageStep

Defined in: [Schema.ts:176](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L176)

## Extends

- [`StepWithFrame`](StepWithFrame.md)

## Properties

### assertedEvents?

> `optional` **assertedEvents?**: [`NavigationEvent`](NavigationEvent.md)[]

Defined in: [Schema.ts:54](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L54)

#### Inherited from

[`StepWithFrame`](StepWithFrame.md).[`assertedEvents`](StepWithFrame.md#assertedevents)

---

### frame?

> `optional` **frame?**: [`FrameSelector`](../type-aliases/FrameSelector.md)

Defined in: [Schema.ts:68](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L68)

Defaults to main frame

#### Inherited from

[`StepWithFrame`](StepWithFrame.md).[`frame`](StepWithFrame.md#frame)

---

### target?

> `optional` **target?**: `string`

Defined in: [Schema.ts:61](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L61)

Defaults to main

#### Inherited from

[`StepWithFrame`](StepWithFrame.md).[`target`](StepWithFrame.md#target)

---

### timeout?

> `optional` **timeout?**: `number`

Defined in: [Schema.ts:53](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L53)

#### Inherited from

[`StepWithFrame`](StepWithFrame.md).[`timeout`](StepWithFrame.md#timeout)

---

### type

> **type**: [`Scroll`](../enumerations/StepType.md#scroll)

Defined in: [Schema.ts:177](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L177)

#### Overrides

[`StepWithFrame`](StepWithFrame.md).[`type`](StepWithFrame.md#type)

---

### x?

> `optional` **x?**: `number`

Defined in: [Schema.ts:181](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L181)

Absolute scroll x position in px. Defaults to 0

---

### y?

> `optional` **y?**: `number`

Defined in: [Schema.ts:185](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L185)

Absolute scroll y position in px. Defaults to 0
