[**@puppeteer/replay**](../README.md)

---

[@puppeteer/replay](../README.md) / NavigateStep

# Interface: NavigateStep

Defined in: [Schema.ts:192](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L192)

## Extends

- [`StepWithTarget`](StepWithTarget.md)

## Properties

### assertedEvents?

> `optional` **assertedEvents?**: [`NavigationEvent`](NavigationEvent.md)[]

Defined in: [Schema.ts:54](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L54)

#### Inherited from

[`StepWithTarget`](StepWithTarget.md).[`assertedEvents`](StepWithTarget.md#assertedevents)

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

> **type**: [`Navigate`](../enumerations/StepType.md#navigate)

Defined in: [Schema.ts:193](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L193)

#### Overrides

[`StepWithTarget`](StepWithTarget.md).[`type`](StepWithTarget.md#type)

---

### url

> **url**: `string`

Defined in: [Schema.ts:194](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L194)
