[**@puppeteer/replay**](../README.md)

---

[@puppeteer/replay](../README.md) / StepWithTarget

# Interface: StepWithTarget

Defined in: [Schema.ts:67](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L67)

## Extends

- [`BaseStep`](BaseStep.md)

## Extended by

- [`StepWithFrame`](StepWithFrame.md)
- [`EmulateNetworkConditionsStep`](EmulateNetworkConditionsStep.md)
- [`KeyDownStep`](KeyDownStep.md)
- [`KeyUpStep`](KeyUpStep.md)
- [`CloseStep`](CloseStep.md)
- [`SetViewportStep`](SetViewportStep.md)
- [`NavigateStep`](NavigateStep.md)

## Properties

### assertedEvents?

> `optional` **assertedEvents?**: [`NavigationEvent`](NavigationEvent.md)[]

Defined in: [Schema.ts:64](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L64)

#### Inherited from

[`BaseStep`](BaseStep.md).[`assertedEvents`](BaseStep.md#assertedevents)

---

### target?

> `optional` **target?**: `string`

Defined in: [Schema.ts:71](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L71)

Defaults to main

---

### timeout?

> `optional` **timeout?**: `number`

Defined in: [Schema.ts:63](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L63)

#### Inherited from

[`BaseStep`](BaseStep.md).[`timeout`](BaseStep.md#timeout)

---

### type

> **type**: [`StepType`](../enumerations/StepType.md)

Defined in: [Schema.ts:62](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L62)

#### Inherited from

[`BaseStep`](BaseStep.md).[`type`](BaseStep.md#type)
