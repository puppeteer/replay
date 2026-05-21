[**@puppeteer/replay**](../README.md)

---

[@puppeteer/replay](../README.md) / ScrollPageStep

# Interface: ScrollPageStep

Defined in: [Schema.ts:186](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L186)

## Extends

- [`StepWithFrame`](StepWithFrame.md)

## Properties

### assertedEvents?

> `optional` **assertedEvents?**: [`NavigationEvent`](NavigationEvent.md)[]

Defined in: [Schema.ts:64](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L64)

#### Inherited from

[`StepWithFrame`](StepWithFrame.md).[`assertedEvents`](StepWithFrame.md#assertedevents)

---

### frame?

> `optional` **frame?**: [`FrameSelector`](../type-aliases/FrameSelector.md)

Defined in: [Schema.ts:78](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L78)

Defaults to main frame

#### Inherited from

[`StepWithFrame`](StepWithFrame.md).[`frame`](StepWithFrame.md#frame)

---

### target?

> `optional` **target?**: `string`

Defined in: [Schema.ts:71](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L71)

Defaults to main

#### Inherited from

[`StepWithFrame`](StepWithFrame.md).[`target`](StepWithFrame.md#target)

---

### timeout?

> `optional` **timeout?**: `number`

Defined in: [Schema.ts:63](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L63)

#### Inherited from

[`StepWithFrame`](StepWithFrame.md).[`timeout`](StepWithFrame.md#timeout)

---

### type

> **type**: [`Scroll`](../enumerations/StepType.md#scroll)

Defined in: [Schema.ts:187](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L187)

#### Overrides

[`StepWithFrame`](StepWithFrame.md).[`type`](StepWithFrame.md#type)

---

### x?

> `optional` **x?**: `number`

Defined in: [Schema.ts:191](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L191)

Absolute scroll x position in px. Defaults to 0

---

### y?

> `optional` **y?**: `number`

Defined in: [Schema.ts:195](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L195)

Absolute scroll y position in px. Defaults to 0
