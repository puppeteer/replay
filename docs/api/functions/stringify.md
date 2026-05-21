[**@puppeteer/replay**](../README.md)

---

[@puppeteer/replay](../README.md) / stringify

# Function: stringify()

> **stringify**(`flow`, `opts?`): `Promise`\<`string`\>

Defined in: [stringify.ts:45](https://github.com/puppeteer/replay/blob/main/src/stringify.ts#L45)

Stringifes an entire recording. The following hooks are invoked with the `flow` parameter containing the entire flow:

- `beforeAllSteps` (once)
- `beforeEachStep` (per step)
- `stringifyStep` (per step)
- `afterEachStep` (per step)
- `afterAllSteps` (once)

## Parameters

### flow

[`UserFlow`](../interfaces/UserFlow.md)

### opts?

[`StringifyOptions`](../interfaces/StringifyOptions.md)

## Returns

`Promise`\<`string`\>
