[@puppeteer/replay](../README.md) / [Schema](../modules/Schema.md) / KeyUpStep

# Interface: KeyUpStep

[Schema](../modules/Schema.md).KeyUpStep

## Hierarchy

- [`StepWithTarget`](Schema.StepWithTarget.md)

  ↳ **`KeyUpStep`**

## Table of contents

### Properties

- [assertedEvents](Schema.KeyUpStep.md#assertedevents)
- [key](Schema.KeyUpStep.md#key)
- [target](Schema.KeyUpStep.md#target)
- [timeout](Schema.KeyUpStep.md#timeout)
- [type](Schema.KeyUpStep.md#type)

## Properties

### assertedEvents

• `Optional` **assertedEvents**: [`NavigationEvent`](Schema.NavigationEvent.md)[]

#### Inherited from

[StepWithTarget](Schema.StepWithTarget.md).[assertedEvents](Schema.StepWithTarget.md#assertedevents)

#### Defined in

[Schema.ts:54](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L54)

---

### key

• **key**: [`Key`](../modules/Schema.md#key)

#### Defined in

[Schema.ts:158](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L158)

---

### target

• `Optional` **target**: `string`

Defaults to main

#### Inherited from

[StepWithTarget](Schema.StepWithTarget.md).[target](Schema.StepWithTarget.md#target)

#### Defined in

[Schema.ts:61](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L61)

---

### timeout

• `Optional` **timeout**: `number`

#### Inherited from

[StepWithTarget](Schema.StepWithTarget.md).[timeout](Schema.StepWithTarget.md#timeout)

#### Defined in

[Schema.ts:53](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L53)

---

### type

• **type**: [`KeyUp`](../enums/Schema.StepType.md#keyup)

#### Overrides

[StepWithTarget](Schema.StepWithTarget.md).[type](Schema.StepWithTarget.md#type)

#### Defined in

[Schema.ts:157](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L157)
