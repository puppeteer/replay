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

[Schema.ts:33](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L33)

---

### download

• **download**: `number`

#### Defined in

[Schema.ts:125](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L125)

---

### latency

• **latency**: `number`

#### Defined in

[Schema.ts:127](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L127)

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

• **type**: `"emulateNetworkConditions"`

#### Overrides

[StepWithTarget](Schema.StepWithTarget.md).[type](Schema.StepWithTarget.md#type)

#### Defined in

[Schema.ts:124](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L124)

---

### upload

• **upload**: `number`

#### Defined in

[Schema.ts:126](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L126)
