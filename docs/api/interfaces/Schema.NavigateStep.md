[@puppeteer/replay](../README.md) / [Exports](../modules.md) / [Schema](../modules/Schema.md) / NavigateStep

# Interface: NavigateStep

[Schema](../modules/Schema.md).NavigateStep

## Hierarchy

- [`StepWithTarget`](Schema.StepWithTarget.md)

  ↳ **`NavigateStep`**

## Table of contents

### Properties

- [assertedEvents](Schema.NavigateStep.md#assertedevents)
- [target](Schema.NavigateStep.md#target)
- [timeout](Schema.NavigateStep.md#timeout)
- [type](Schema.NavigateStep.md#type)
- [url](Schema.NavigateStep.md#url)

## Properties

### assertedEvents

• `Optional` **assertedEvents**: [`NavigationEvent`](Schema.NavigationEvent.md)[]

#### Inherited from

[StepWithTarget](Schema.StepWithTarget.md).[assertedEvents](Schema.StepWithTarget.md#assertedevents)

#### Defined in

[Schema.ts:34](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L34)

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

• **type**: ``"navigate"``

#### Overrides

[StepWithTarget](Schema.StepWithTarget.md).[type](Schema.StepWithTarget.md#type)

#### Defined in

[Schema.ts:122](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L122)

___

### url

• **url**: `string`

#### Defined in

[Schema.ts:123](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L123)
