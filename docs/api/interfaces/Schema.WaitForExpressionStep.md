[@puppeteer/replay](../README.md) / [Schema](../modules/Schema.md) / WaitForExpressionStep

# Interface: WaitForExpressionStep

[Schema](../modules/Schema.md).WaitForExpressionStep

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

## Hierarchy

- [`StepWithFrame`](Schema.StepWithFrame.md)

  ↳ **`WaitForExpressionStep`**

## Table of contents

### Properties

- [assertedEvents](Schema.WaitForExpressionStep.md#assertedevents)
- [expression](Schema.WaitForExpressionStep.md#expression)
- [frame](Schema.WaitForExpressionStep.md#frame)
- [target](Schema.WaitForExpressionStep.md#target)
- [timeout](Schema.WaitForExpressionStep.md#timeout)
- [type](Schema.WaitForExpressionStep.md#type)

## Properties

### assertedEvents

• `Optional` **assertedEvents**: [`NavigationEvent`](Schema.NavigationEvent.md)[]

#### Inherited from

[StepWithFrame](Schema.StepWithFrame.md).[assertedEvents](Schema.StepWithFrame.md#assertedevents)

#### Defined in

[Schema.ts:64](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L64)

---

### expression

• **expression**: `string`

#### Defined in

[Schema.ts:292](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L292)

---

### frame

• `Optional` **frame**: [`FrameSelector`](../modules/Schema.md#frameselector)

Defaults to main frame

#### Inherited from

[StepWithFrame](Schema.StepWithFrame.md).[frame](Schema.StepWithFrame.md#frame)

#### Defined in

[Schema.ts:78](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L78)

---

### target

• `Optional` **target**: `string`

Defaults to main

#### Inherited from

[StepWithFrame](Schema.StepWithFrame.md).[target](Schema.StepWithFrame.md#target)

#### Defined in

[Schema.ts:71](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L71)

---

### timeout

• `Optional` **timeout**: `number`

#### Inherited from

[StepWithFrame](Schema.StepWithFrame.md).[timeout](Schema.StepWithFrame.md#timeout)

#### Defined in

[Schema.ts:63](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L63)

---

### type

• **type**: [`WaitForExpression`](../enums/Schema.StepType.md#waitforexpression)

#### Overrides

[StepWithFrame](Schema.StepWithFrame.md).[type](Schema.StepWithFrame.md#type)

#### Defined in

[Schema.ts:291](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L291)
