[**@puppeteer/replay**](../README.md)

---

[@puppeteer/replay](../README.md) / StepWithTarget

# Interface: StepWithTarget

Defined in: [Schema.ts:57](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L57)

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

Defined in: [Schema.ts:54](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L54)

#### Inherited from

[`BaseStep`](BaseStep.md).[`assertedEvents`](BaseStep.md#assertedevents)

---

### target?

> `optional` **target?**: `string`

Defined in: [Schema.ts:61](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L61)

Defaults to main

---

### timeout?

> `optional` **timeout?**: `number`

Defined in: [Schema.ts:53](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L53)

#### Inherited from

[`BaseStep`](BaseStep.md).[`timeout`](BaseStep.md#timeout)

---

### type

> **type**: [`StepType`](../enumerations/StepType.md)

Defined in: [Schema.ts:52](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L52)

#### Inherited from

[`BaseStep`](BaseStep.md).[`type`](BaseStep.md#type)
