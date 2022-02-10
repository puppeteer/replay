[@puppeteer/replay](../README.md) / [Schema](../modules/Schema.md) / UserFlow

# Interface: UserFlow

[Schema](../modules/Schema.md).UserFlow

## Table of contents

### Properties

- [selectorAttribute](Schema.UserFlow.md#selectorattribute)
- [steps](Schema.UserFlow.md#steps)
- [timeout](Schema.UserFlow.md#timeout)
- [title](Schema.UserFlow.md#title)

## Properties

### selectorAttribute

• `Optional` **selectorAttribute**: `string`

The name of the attribute to use to generate selectors instead of regular
CSS selectors. For example, specifying `data-testid` would generate the
selector `[data-testid=value]` for the element `<div data-testid=value>`.

#### Defined in

[Schema.ts:210](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L210)

___

### steps

• **steps**: [`Step`](../modules/Schema.md#step)[]

#### Defined in

[Schema.ts:211](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L211)

___

### timeout

• `Optional` **timeout**: `number`

Timeout in milliseconds.

#### Defined in

[Schema.ts:204](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L204)

___

### title

• **title**: `string`

Human-readble title describing the recorder user flow.

#### Defined in

[Schema.ts:200](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L200)
