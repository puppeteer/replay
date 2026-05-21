[**@puppeteer/replay**](../README.md)

---

[@puppeteer/replay](../README.md) / CloseStep

# Interface: CloseStep

Defined in: [Schema.ts:172](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L172)

## Extends

- [`StepWithTarget`](StepWithTarget.md)

## Properties

### assertedEvents?

> `optional` **assertedEvents?**: [`NavigationEvent`](NavigationEvent.md)[]

Defined in: [Schema.ts:64](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L64)

#### Inherited from

[`StepWithTarget`](StepWithTarget.md).[`assertedEvents`](StepWithTarget.md#assertedevents)

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

> **type**: [`Close`](../enumerations/StepType.md#close)

Defined in: [Schema.ts:173](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L173)

#### Overrides

[`StepWithTarget`](StepWithTarget.md).[`type`](StepWithTarget.md#type)
