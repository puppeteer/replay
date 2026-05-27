[**@puppeteer/replay**](../README.md)

---

[@puppeteer/replay](../README.md) / stringifyStep

# Function: stringifyStep()

> **stringifyStep**(`step`, `opts?`): `Promise`\<`string`\>

Defined in: [stringify.ts:69](https://github.com/puppeteer/replay/blob/main/src/stringify.ts#L69)

Stringifes a single step. Only the following hooks are invoked with the `flow` parameter as undefined:

- `beforeEachStep`
- `stringifyStep`
- `afterEachStep`

## Parameters

### step

[`Step`](../type-aliases/Step.md)

### opts?

[`StringifyOptions`](../interfaces/StringifyOptions.md)

## Returns

`Promise`\<`string`\>
