[**@puppeteer/replay**](../README.md)

---

[@puppeteer/replay](../README.md) / getSelectorType

# Function: getSelectorType()

> **getSelectorType**(`selector`): [`SelectorType`](../enumerations/SelectorType.md)

Defined in: [SchemaUtils.ts:615](https://github.com/puppeteer/replay/blob/main/src/SchemaUtils.ts#L615)

Detects what type of a selector the string contains. For example,
`aria/Label` is a SelectorType.ARIA.

Note that CSS selectors are special and usually don't require a prefix,
therefore, SelectorType.CSS is the default type if other types didn't match.

## Parameters

### selector

`string`

## Returns

[`SelectorType`](../enumerations/SelectorType.md)
