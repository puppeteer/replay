[@puppeteer/replay](../README.md) / KeyDownStep

# Interface: KeyDownStep

## Hierarchy

- [`StepWithTarget`](Schema.StepWithTarget.md)

  ↳ **`KeyDownStep`**

## Table of contents

### Properties

- [assertedEvents](KeyDownStep.md#assertedevents)
- [key](KeyDownStep.md#key)
- [target](KeyDownStep.md#target)
- [timeout](KeyDownStep.md#timeout)
- [type](KeyDownStep.md#type)

## Properties

### assertedEvents

• `Optional` **assertedEvents**: [`NavigationEvent`](Schema.NavigationEvent.md)[]

#### Inherited from

[StepWithTarget](Schema.StepWithTarget.md).[assertedEvents](Schema.StepWithTarget.md#assertedevents)

#### Defined in

[Schema.ts:61](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L61)

---

### key

• **key**: [`Key`](../modules/Schema.md#key)

#### Defined in

[Schema.ts:160](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L160)

---

### target

• `Optional` **target**: `string`

Defaults to main

#### Inherited from

[StepWithTarget](Schema.StepWithTarget.md).[target](Schema.StepWithTarget.md#target)

#### Defined in

[Schema.ts:68](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L68)

---

### timeout

• `Optional` **timeout**: `number`

#### Inherited from

[StepWithTarget](Schema.StepWithTarget.md).[timeout](Schema.StepWithTarget.md#timeout)

#### Defined in

[Schema.ts:60](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L60)

---

### type

• **type**: [`KeyDown`](../enums/Schema.StepType.md#keydown)

#### Overrides

[StepWithTarget](Schema.StepWithTarget.md).[type](Schema.StepWithTarget.md#type)

#### Defined in

[Schema.ts:159](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L159)
