[@puppeteer/replay](../README.md) / [Schema](../modules/Schema.md) / EmulateNetworkConditionsStep

# Interface: EmulateNetworkConditionsStep

[Schema](../modules/Schema.md).EmulateNetworkConditionsStep

## Hierarchy

- [`StepWithTarget`](Schema.StepWithTarget.md)

  ↳ **`EmulateNetworkConditionsStep`**

## Table of contents

### Properties

- [assertedEvents](Schema.EmulateNetworkConditionsStep.md#assertedevents)
- [download](Schema.EmulateNetworkConditionsStep.md#download)
- [latency](Schema.EmulateNetworkConditionsStep.md#latency)
- [target](Schema.EmulateNetworkConditionsStep.md#target)
- [timeout](Schema.EmulateNetworkConditionsStep.md#timeout)
- [type](Schema.EmulateNetworkConditionsStep.md#type)
- [upload](Schema.EmulateNetworkConditionsStep.md#upload)

## Properties

### assertedEvents

• `Optional` **assertedEvents**: [`NavigationEvent`](Schema.NavigationEvent.md)[]

#### Inherited from

[StepWithTarget](Schema.StepWithTarget.md).[assertedEvents](Schema.StepWithTarget.md#assertedevents)

#### Defined in

[Schema.ts:61](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L61)

---

### download

• **download**: `number`

#### Defined in

[Schema.ts:153](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L153)

---

### latency

• **latency**: `number`

#### Defined in

[Schema.ts:155](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L155)

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

• **type**: [`EmulateNetworkConditions`](../enums/Schema.StepType.md#emulatenetworkconditions)

#### Overrides

[StepWithTarget](Schema.StepWithTarget.md).[type](Schema.StepWithTarget.md#type)

#### Defined in

[Schema.ts:152](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L152)

---

### upload

• **upload**: `number`

#### Defined in

[Schema.ts:154](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L154)
