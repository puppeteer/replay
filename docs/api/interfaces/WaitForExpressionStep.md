[**@puppeteer/replay**](../README.md)

---

[@puppeteer/replay](../README.md) / WaitForExpressionStep

# Interface: WaitForExpressionStep

Defined in: [Schema.ts:281](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L281)

`waitForExpression` allows for a JavaScript expression to resolve to truthy
value.

For example, the following step pauses for two seconds and then resolves to
true allowing the replay to continue.

```
{
  "type": "waitForExpression",
  "expression": "new Promise(resolve => setTimeout(() => resolve(true),
2000))",
}
```

## Extends

- [`StepWithFrame`](StepWithFrame.md)

## Properties

### assertedEvents?

> `optional` **assertedEvents?**: [`NavigationEvent`](NavigationEvent.md)[]

Defined in: [Schema.ts:54](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L54)

#### Inherited from

[`StepWithFrame`](StepWithFrame.md).[`assertedEvents`](StepWithFrame.md#assertedevents)

---

### expression

> **expression**: `string`

Defined in: [Schema.ts:283](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L283)

---

### frame?

> `optional` **frame?**: [`FrameSelector`](../type-aliases/FrameSelector.md)

Defined in: [Schema.ts:68](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L68)

Defaults to main frame

#### Inherited from

[`StepWithFrame`](StepWithFrame.md).[`frame`](StepWithFrame.md#frame)

---

### target?

> `optional` **target?**: `string`

Defined in: [Schema.ts:61](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L61)

Defaults to main

#### Inherited from

[`StepWithFrame`](StepWithFrame.md).[`target`](StepWithFrame.md#target)

---

### timeout?

> `optional` **timeout?**: `number`

Defined in: [Schema.ts:53](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L53)

#### Inherited from

[`StepWithFrame`](StepWithFrame.md).[`timeout`](StepWithFrame.md#timeout)

---

### type

> **type**: [`WaitForExpression`](../enumerations/StepType.md#waitforexpression)

Defined in: [Schema.ts:282](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L282)

#### Overrides

[`StepWithFrame`](StepWithFrame.md).[`type`](StepWithFrame.md#type)
