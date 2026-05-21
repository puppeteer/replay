[**@puppeteer/replay**](../README.md)

---

[@puppeteer/replay](../README.md) / EmulateNetworkConditionsStep

# Interface: EmulateNetworkConditionsStep

Defined in: [Schema.ts:155](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L155)

## Extends

- [`StepWithTarget`](StepWithTarget.md)

## Properties

### assertedEvents?

> `optional` **assertedEvents?**: [`NavigationEvent`](NavigationEvent.md)[]

Defined in: [Schema.ts:64](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L64)

#### Inherited from

[`StepWithTarget`](StepWithTarget.md).[`assertedEvents`](StepWithTarget.md#assertedevents)

---

### download

> **download**: `number`

Defined in: [Schema.ts:157](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L157)

---

### latency

> **latency**: `number`

Defined in: [Schema.ts:159](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L159)

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

> **type**: [`EmulateNetworkConditions`](../enumerations/StepType.md#emulatenetworkconditions)

Defined in: [Schema.ts:156](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L156)

#### Overrides

[`StepWithTarget`](StepWithTarget.md).[`type`](StepWithTarget.md#type)

---

### upload

> **upload**: `number`

Defined in: [Schema.ts:158](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L158)
