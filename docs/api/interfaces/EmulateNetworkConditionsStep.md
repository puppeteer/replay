[**@puppeteer/replay**](../README.md)

---

[@puppeteer/replay](../README.md) / EmulateNetworkConditionsStep

# Interface: EmulateNetworkConditionsStep

Defined in: [Schema.ts:145](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L145)

## Extends

- [`StepWithTarget`](StepWithTarget.md)

## Properties

### assertedEvents?

> `optional` **assertedEvents?**: [`NavigationEvent`](NavigationEvent.md)[]

Defined in: [Schema.ts:54](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L54)

#### Inherited from

[`StepWithTarget`](StepWithTarget.md).[`assertedEvents`](StepWithTarget.md#assertedevents)

---

### download

> **download**: `number`

Defined in: [Schema.ts:147](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L147)

---

### latency

> **latency**: `number`

Defined in: [Schema.ts:149](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L149)

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

> **type**: [`EmulateNetworkConditions`](../enumerations/StepType.md#emulatenetworkconditions)

Defined in: [Schema.ts:146](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L146)

#### Overrides

[`StepWithTarget`](StepWithTarget.md).[`type`](StepWithTarget.md#type)

---

### upload

> **upload**: `number`

Defined in: [Schema.ts:148](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L148)
