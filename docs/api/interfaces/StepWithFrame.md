[**@puppeteer/replay**](../README.md)

---

[@puppeteer/replay](../README.md) / StepWithFrame

# Interface: StepWithFrame

Defined in: [Schema.ts:64](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L64)

## Extends

- [`StepWithTarget`](StepWithTarget.md)

## Extended by

- [`StepWithSelectors`](StepWithSelectors.md)
- [`ScrollPageStep`](ScrollPageStep.md)
- [`WaitForExpressionStep`](WaitForExpressionStep.md)

## Properties

### assertedEvents?

> `optional` **assertedEvents?**: [`NavigationEvent`](NavigationEvent.md)[]

Defined in: [Schema.ts:54](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L54)

#### Inherited from

[`StepWithTarget`](StepWithTarget.md).[`assertedEvents`](StepWithTarget.md#assertedevents)

---

### frame?

> `optional` **frame?**: [`FrameSelector`](../type-aliases/FrameSelector.md)

Defined in: [Schema.ts:68](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L68)

Defaults to main frame

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

> **type**: [`StepType`](../enumerations/StepType.md)

Defined in: [Schema.ts:52](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L52)

#### Inherited from

[`StepWithTarget`](StepWithTarget.md).[`type`](StepWithTarget.md#type)
