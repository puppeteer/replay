[**@puppeteer/replay**](../README.md)

---

[@puppeteer/replay](../README.md) / StepWithFrame

# Interface: StepWithFrame

Defined in: [Schema.ts:74](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L74)

## Extends

- [`StepWithTarget`](StepWithTarget.md)

## Extended by

- [`StepWithSelectors`](StepWithSelectors.md)
- [`ScrollPageStep`](ScrollPageStep.md)
- [`WaitForExpressionStep`](WaitForExpressionStep.md)

## Properties

### assertedEvents?

> `optional` **assertedEvents?**: [`NavigationEvent`](NavigationEvent.md)[]

Defined in: [Schema.ts:64](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L64)

#### Inherited from

[`StepWithTarget`](StepWithTarget.md).[`assertedEvents`](StepWithTarget.md#assertedevents)

---

### frame?

> `optional` **frame?**: [`FrameSelector`](../type-aliases/FrameSelector.md)

Defined in: [Schema.ts:78](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L78)

Defaults to main frame

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

> **type**: [`StepType`](../enumerations/StepType.md)

Defined in: [Schema.ts:62](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L62)

#### Inherited from

[`StepWithTarget`](StepWithTarget.md).[`type`](StepWithTarget.md#type)
