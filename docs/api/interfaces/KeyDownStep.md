[**@puppeteer/replay**](../README.md)

---

[@puppeteer/replay](../README.md) / KeyDownStep

# Interface: KeyDownStep

Defined in: [Schema.ts:152](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L152)

## Extends

- [`StepWithTarget`](StepWithTarget.md)

## Properties

### assertedEvents?

> `optional` **assertedEvents?**: [`NavigationEvent`](NavigationEvent.md)[]

Defined in: [Schema.ts:54](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L54)

#### Inherited from

[`StepWithTarget`](StepWithTarget.md).[`assertedEvents`](StepWithTarget.md#assertedevents)

---

### key

> **key**: [`Key`](../type-aliases/Key.md)

Defined in: [Schema.ts:154](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L154)

---

### target?

> `optional` **target?**: `string`

Defined in: [Schema.ts:61](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L61)

Defaults to main

#### Inherited from

[`StepWithTarget`](StepWithTarget.md).[`target`](StepWithTarget.md#target)

---

### timeout?

> `optional` **timeout?**: `number`

Defined in: [Schema.ts:53](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L53)

#### Inherited from

[`StepWithTarget`](StepWithTarget.md).[`timeout`](StepWithTarget.md#timeout)

---

### type

> **type**: [`KeyDown`](../enumerations/StepType.md#keydown)

Defined in: [Schema.ts:153](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L153)

#### Overrides

[`StepWithTarget`](StepWithTarget.md).[`type`](StepWithTarget.md#type)
