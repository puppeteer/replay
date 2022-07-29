[@puppeteer/replay](../README.md) / NavigateStep

# Interface: NavigateStep

## Hierarchy

- [`StepWithTarget`](Schema.StepWithTarget.md)

  ↳ **`NavigateStep`**

## Table of contents

### Properties

- [assertedEvents](NavigateStep.md#assertedevents)
- [target](NavigateStep.md#target)
- [timeout](NavigateStep.md#timeout)
- [type](NavigateStep.md#type)
- [url](NavigateStep.md#url)

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

• **type**: `"navigate"`

#### Overrides

[StepWithTarget](Schema.StepWithTarget.md).[type](Schema.StepWithTarget.md#type)

#### Defined in

[Schema.ts:165](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L165)

---

### url

• **url**: `string`

#### Defined in

[Schema.ts:166](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L166)
