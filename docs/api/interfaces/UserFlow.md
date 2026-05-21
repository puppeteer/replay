[**@puppeteer/replay**](../README.md)

---

[@puppeteer/replay](../README.md) / UserFlow

# Interface: UserFlow

Defined in: [Schema.ts:300](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L300)

## Properties

### selectorAttribute?

> `optional` **selectorAttribute?**: `string`

Defined in: [Schema.ts:314](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L314)

The name of the attribute to use to generate selectors instead of regular
CSS selectors. For example, specifying `data-testid` would generate the
selector `[data-testid=value]` for the element `<div data-testid=value>`.

---

### steps

> **steps**: [`Step`](../type-aliases/Step.md)[]

Defined in: [Schema.ts:315](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L315)

---

### timeout?

> `optional` **timeout?**: `number`

Defined in: [Schema.ts:308](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L308)

Timeout in milliseconds.

---

### title

> **title**: `string`

Defined in: [Schema.ts:304](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L304)

Human-readble title describing the recorder user flow.
