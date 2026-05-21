[**@puppeteer/replay**](../README.md)

---

[@puppeteer/replay](../README.md) / KeyDownStep

# Interface: KeyDownStep

Defined in: [Schema.ts:162](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L162)

## Extends

- [`StepWithTarget`](StepWithTarget.md)

## Properties

### assertedEvents?

> `optional` **assertedEvents?**: [`NavigationEvent`](NavigationEvent.md)[]

Defined in: [Schema.ts:64](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L64)

#### Inherited from

[`StepWithTarget`](StepWithTarget.md).[`assertedEvents`](StepWithTarget.md#assertedevents)

---

### key

> **key**: [`Key`](../type-aliases/Key.md)

Defined in: [Schema.ts:164](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L164)

---

### target?

> `optional` **target?**: `string`

Defined in: [Schema.ts:71](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L71)

Defaults to main

#### Inherited from

[`StepWithTarget`](StepWithTarget.md).[`target`](StepWithTarget.md#target)

---

### timeout?

> `optional` **timeout?**: `number`

Defined in: [Schema.ts:63](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L63)

#### Inherited from

[`StepWithTarget`](StepWithTarget.md).[`timeout`](StepWithTarget.md#timeout)

---

### type

> **type**: [`KeyDown`](../enumerations/StepType.md#keydown)

Defined in: [Schema.ts:163](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L163)

#### Overrides

[`StepWithTarget`](StepWithTarget.md).[`type`](StepWithTarget.md#type)
