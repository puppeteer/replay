[@puppeteer/replay](../README.md) / [Schema](../modules/Schema.md) / NavigateStep

# Interface: NavigateStep

[Schema](../modules/Schema.md).NavigateStep

## Hierarchy

- [`StepWithTarget`](Schema.StepWithTarget.md)

  ↳ **`NavigateStep`**

## Table of contents

### Properties

- [assertedEvents](Schema.NavigateStep.md#assertedevents)
- [target](Schema.NavigateStep.md#target)
- [timeout](Schema.NavigateStep.md#timeout)
- [type](Schema.NavigateStep.md#type)
- [url](Schema.NavigateStep.md#url)

## Properties

### assertedEvents

• `Optional` **assertedEvents**: [`NavigationEvent`](Schema.NavigationEvent.md)[]

#### Inherited from

[StepWithTarget](Schema.StepWithTarget.md).[assertedEvents](Schema.StepWithTarget.md#assertedevents)

#### Defined in

[Schema.ts:64](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L64)

---

### target

• `Optional` **target**: `string`

Defaults to main

#### Inherited from

[StepWithTarget](Schema.StepWithTarget.md).[target](Schema.StepWithTarget.md#target)

#### Defined in

[Schema.ts:71](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L71)

---

### timeout

• `Optional` **timeout**: `number`

#### Inherited from

[StepWithTarget](Schema.StepWithTarget.md).[timeout](Schema.StepWithTarget.md#timeout)

#### Defined in

[Schema.ts:63](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L63)

---

### type

• **type**: [`Navigate`](../enums/Schema.StepType.md#navigate)

#### Overrides

[StepWithTarget](Schema.StepWithTarget.md).[type](Schema.StepWithTarget.md#type)

#### Defined in

[Schema.ts:203](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L203)

---

### url

• **url**: `string`

#### Defined in

[Schema.ts:204](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L204)
