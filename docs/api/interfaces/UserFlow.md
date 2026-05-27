[**@puppeteer/replay**](../README.md)

---

[@puppeteer/replay](../README.md) / UserFlow

# Interface: UserFlow

Defined in: [Schema.ts:290](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L290)

## Properties

### selectorAttribute?

> `optional` **selectorAttribute?**: `string`

Defined in: [Schema.ts:304](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L304)

The name of the attribute to use to generate selectors instead of regular
CSS selectors. For example, specifying `data-testid` would generate the
selector `[data-testid=value]` for the element `<div data-testid=value>`.

---

### steps

> **steps**: [`Step`](../type-aliases/Step.md)[]

Defined in: [Schema.ts:305](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L305)

---

### timeout?

> `optional` **timeout?**: `number`

Defined in: [Schema.ts:298](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L298)

Timeout in milliseconds.

---

### title

> **title**: `string`

Defined in: [Schema.ts:294](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L294)

Human-readble title describing the recorder user flow.
