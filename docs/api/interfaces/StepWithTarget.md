[@puppeteer/replay](../README.md) / StepWithTarget

# Interface: StepWithTarget

## Hierarchy

- [`BaseStep`](Schema.BaseStep.md)

  ↳ **`StepWithTarget`**

## Table of contents

### Properties

- [assertedEvents](StepWithTarget.md#assertedevents)
- [target](StepWithTarget.md#target)
- [timeout](StepWithTarget.md#timeout)
- [type](StepWithTarget.md#type)

## Properties

### assertedEvents

• `Optional` **assertedEvents**: [`NavigationEvent`](Schema.NavigationEvent.md)[]

#### Inherited from

[BaseStep](Schema.BaseStep.md).[assertedEvents](Schema.BaseStep.md#assertedevents)

#### Defined in

[Schema.ts:33](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L33)

---

### target

• `Optional` **target**: `string`

Defaults to main

#### Defined in

[Schema.ts:40](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L40)

---

### timeout

• `Optional` **timeout**: `number`

#### Inherited from

[BaseStep](Schema.BaseStep.md).[timeout](Schema.BaseStep.md#timeout)

#### Defined in

[Schema.ts:32](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L32)

---

### type

• **type**: `string`

#### Inherited from

[BaseStep](Schema.BaseStep.md).[type](Schema.BaseStep.md#type)

#### Defined in

[Schema.ts:31](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L31)
