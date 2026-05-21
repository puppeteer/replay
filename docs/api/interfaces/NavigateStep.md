[**@puppeteer/replay**](../README.md)

---

[@puppeteer/replay](../README.md) / NavigateStep

# Interface: NavigateStep

Defined in: [Schema.ts:202](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L202)

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

> **type**: [`Navigate`](../enumerations/StepType.md#navigate)

Defined in: [Schema.ts:203](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L203)

#### Overrides

[`StepWithTarget`](StepWithTarget.md).[`type`](StepWithTarget.md#type)

---

### url

> **url**: `string`

Defined in: [Schema.ts:204](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L204)
