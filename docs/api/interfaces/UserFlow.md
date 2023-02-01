[@puppeteer/replay](../README.md) / UserFlow

# Interface: UserFlow

## Table of contents

### Properties

- [selectorAttribute](UserFlow.md#selectorattribute)
- [steps](UserFlow.md#steps)
- [timeout](UserFlow.md#timeout)
- [title](UserFlow.md#title)

## Properties

### selectorAttribute

• `Optional` **selectorAttribute**: `string`

The name of the attribute to use to generate selectors instead of regular
CSS selectors. For example, specifying `data-testid` would generate the
selector `[data-testid=value]` for the element `<div data-testid=value>`.

#### Defined in

[Schema.ts:313](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L313)

---

### steps

• **steps**: [`Step`](../modules/Schema.md#step)[]

#### Defined in

[Schema.ts:314](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L314)

---

### timeout

• `Optional` **timeout**: `number`

Timeout in milliseconds.

#### Defined in

[Schema.ts:307](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L307)

---

### title

• **title**: `string`

Human-readble title describing the recorder user flow.

#### Defined in

[Schema.ts:303](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L303)
