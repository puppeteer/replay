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

[Schema.ts:54](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L54)

---

### download

• **download**: `number`

#### Defined in

[Schema.ts:146](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L146)

---

### latency

• **latency**: `number`

#### Defined in

[Schema.ts:148](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L148)

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

• **type**: [`EmulateNetworkConditions`](../enums/Schema.StepType.md#emulatenetworkconditions)

#### Overrides

[StepWithTarget](Schema.StepWithTarget.md).[type](Schema.StepWithTarget.md#type)

#### Defined in

[Schema.ts:145](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L145)

---

### upload

• **upload**: `number`

#### Defined in

[Schema.ts:147](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L147)
