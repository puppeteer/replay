[**@puppeteer/replay**](../README.md)

---

[@puppeteer/replay](../README.md) / WaitForExpressionStep

# Interface: WaitForExpressionStep

Defined in: [Schema.ts:291](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L291)

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

Defined in: [Schema.ts:64](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L64)

#### Inherited from

[`StepWithFrame`](StepWithFrame.md).[`assertedEvents`](StepWithFrame.md#assertedevents)

---

### expression

> **expression**: `string`

Defined in: [Schema.ts:293](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L293)

---

### frame?

> `optional` **frame?**: [`FrameSelector`](../type-aliases/FrameSelector.md)

Defined in: [Schema.ts:78](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L78)

Defaults to main frame

#### Inherited from

[`StepWithFrame`](StepWithFrame.md).[`frame`](StepWithFrame.md#frame)

---

### target?

> `optional` **target?**: `string`

Defined in: [Schema.ts:71](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L71)

Defaults to main

#### Inherited from

[`StepWithFrame`](StepWithFrame.md).[`target`](StepWithFrame.md#target)

---

### timeout?

> `optional` **timeout?**: `number`

Defined in: [Schema.ts:63](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L63)

#### Inherited from

[`StepWithFrame`](StepWithFrame.md).[`timeout`](StepWithFrame.md#timeout)

---

### type

> **type**: [`WaitForExpression`](../enumerations/StepType.md#waitforexpression)

Defined in: [Schema.ts:292](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L292)

#### Overrides

[`StepWithFrame`](StepWithFrame.md).[`type`](StepWithFrame.md#type)
