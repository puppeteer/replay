[@puppeteer/replay](../README.md) / [Exports](../modules.md) / [Schema](../modules/Schema.md) / EmulateNetworkConditionsStep

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

[Schema.ts:34](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L34)

___

### download

• **download**: `number`

#### Defined in

[Schema.ts:74](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L74)

___

### latency

• **latency**: `number`

#### Defined in

[Schema.ts:76](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L76)

___

### target

• `Optional` **target**: `string`

Defaults to main

#### Inherited from

[StepWithTarget](Schema.StepWithTarget.md).[target](Schema.StepWithTarget.md#target)

#### Defined in

[Schema.ts:41](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L41)

___

### timeout

• `Optional` **timeout**: `number`

#### Inherited from

[StepWithTarget](Schema.StepWithTarget.md).[timeout](Schema.StepWithTarget.md#timeout)

#### Defined in

[Schema.ts:33](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L33)

___

### type

• **type**: ``"emulateNetworkConditions"``

#### Overrides

[StepWithTarget](Schema.StepWithTarget.md).[type](Schema.StepWithTarget.md#type)

#### Defined in

[Schema.ts:73](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L73)

___

### upload

• **upload**: `number`

#### Defined in

[Schema.ts:75](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L75)
