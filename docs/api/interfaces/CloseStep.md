[@puppeteer/replay](../README.md) / CloseStep

# Interface: CloseStep

## Hierarchy

- [`StepWithTarget`](Schema.StepWithTarget.md)

  ↳ **`CloseStep`**

## Table of contents

### Properties

- [assertedEvents](CloseStep.md#assertedevents)
- [target](CloseStep.md#target)
- [timeout](CloseStep.md#timeout)
- [type](CloseStep.md#type)

## Properties

### assertedEvents

• `Optional` **assertedEvents**: [`NavigationEvent`](Schema.NavigationEvent.md)[]

#### Inherited from

[StepWithTarget](Schema.StepWithTarget.md).[assertedEvents](Schema.StepWithTarget.md#assertedevents)

#### Defined in

[Schema.ts:33](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L33)

---

### target

• `Optional` **target**: `string`

Defaults to main

#### Inherited from

[StepWithTarget](Schema.StepWithTarget.md).[target](Schema.StepWithTarget.md#target)

#### Defined in

[Schema.ts:40](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L40)

---

### timeout

• `Optional` **timeout**: `number`

#### Inherited from

[StepWithTarget](Schema.StepWithTarget.md).[timeout](Schema.StepWithTarget.md#timeout)

#### Defined in

[Schema.ts:32](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L32)

---

### type

• **type**: `"close"`

#### Overrides

[StepWithTarget](Schema.StepWithTarget.md).[type](Schema.StepWithTarget.md#type)

#### Defined in

[Schema.ts:141](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L141)
