[@puppeteer/replay](../README.md) / EmulateNetworkConditionsStep

# Interface: EmulateNetworkConditionsStep

## Hierarchy

- [`StepWithTarget`](Schema.StepWithTarget.md)

  ↳ **`EmulateNetworkConditionsStep`**

## Table of contents

### Properties

- [assertedEvents](EmulateNetworkConditionsStep.md#assertedevents)
- [download](EmulateNetworkConditionsStep.md#download)
- [latency](EmulateNetworkConditionsStep.md#latency)
- [target](EmulateNetworkConditionsStep.md#target)
- [timeout](EmulateNetworkConditionsStep.md#timeout)
- [type](EmulateNetworkConditionsStep.md#type)
- [upload](EmulateNetworkConditionsStep.md#upload)

## Properties

### assertedEvents

• `Optional` **assertedEvents**: [`NavigationEvent`](Schema.NavigationEvent.md)[]

#### Inherited from

[StepWithTarget](Schema.StepWithTarget.md).[assertedEvents](Schema.StepWithTarget.md#assertedevents)

#### Defined in

[Schema.ts:64](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L64)

---

### download

• **download**: `number`

#### Defined in

[Schema.ts:156](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L156)

---

### latency

• **latency**: `number`

#### Defined in

[Schema.ts:158](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L158)

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

• **type**: [`EmulateNetworkConditions`](../enums/Schema.StepType.md#emulatenetworkconditions)

#### Overrides

[StepWithTarget](Schema.StepWithTarget.md).[type](Schema.StepWithTarget.md#type)

#### Defined in

[Schema.ts:155](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L155)

---

### upload

• **upload**: `number`

#### Defined in

[Schema.ts:157](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L157)
