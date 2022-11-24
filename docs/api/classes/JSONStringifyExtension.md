[@puppeteer/replay](../README.md) / JSONStringifyExtension

# Class: JSONStringifyExtension

Stringifies a user flow to JSON with source maps.

You probably want to strip the source map because not all
parsers support comments in JSON.

## Hierarchy

- [`StringifyExtension`](StringifyExtension.md)

  ↳ **`JSONStringifyExtension`**

## Table of contents

### Constructors

- [constructor](JSONStringifyExtension.md#constructor)

### Methods

- [afterAllSteps](JSONStringifyExtension.md#afterallsteps)
- [afterEachStep](JSONStringifyExtension.md#aftereachstep)
- [beforeAllSteps](JSONStringifyExtension.md#beforeallsteps)
- [beforeEachStep](JSONStringifyExtension.md#beforeeachstep)
- [stringifyStep](JSONStringifyExtension.md#stringifystep)

## Constructors

### constructor

• **new JSONStringifyExtension**()

#### Inherited from

[StringifyExtension](StringifyExtension.md).[constructor](StringifyExtension.md#constructor)

## Methods

### afterAllSteps

▸ **afterAllSteps**(`out`): `Promise`<`void`\>

#### Parameters

| Name  | Type                                        |
| :---- | :------------------------------------------ |
| `out` | [`LineWriter`](../interfaces/LineWriter.md) |

#### Returns

`Promise`<`void`\>

#### Overrides

[StringifyExtension](StringifyExtension.md).[afterAllSteps](StringifyExtension.md#afterallsteps)

#### Defined in

[JSONStringifyExtension.ts:42](https://github.com/puppeteer/replay/blob/main/src/JSONStringifyExtension.ts#L42)

---

### afterEachStep

▸ `Optional` **afterEachStep**(`out`, `step`, `flow?`): `Promise`<`void`\>

#### Parameters

| Name    | Type                                           |
| :------ | :--------------------------------------------- |
| `out`   | [`LineWriter`](../interfaces/LineWriter.md)    |
| `step`  | [`Step`](../modules/Schema.md#step)            |
| `flow?` | [`UserFlow`](../interfaces/Schema.UserFlow.md) |

#### Returns

`Promise`<`void`\>

#### Inherited from

[StringifyExtension](StringifyExtension.md).[afterEachStep](StringifyExtension.md#aftereachstep)

#### Defined in

[StringifyExtension.ts:33](https://github.com/puppeteer/replay/blob/main/src/StringifyExtension.ts#L33)

---

### beforeAllSteps

▸ **beforeAllSteps**(`out`, `flow`): `Promise`<`void`\>

#### Parameters

| Name   | Type                                           |
| :----- | :--------------------------------------------- |
| `out`  | [`LineWriter`](../interfaces/LineWriter.md)    |
| `flow` | [`UserFlow`](../interfaces/Schema.UserFlow.md) |

#### Returns

`Promise`<`void`\>

#### Overrides

[StringifyExtension](StringifyExtension.md).[beforeAllSteps](StringifyExtension.md#beforeallsteps)

#### Defined in

[JSONStringifyExtension.ts:28](https://github.com/puppeteer/replay/blob/main/src/JSONStringifyExtension.ts#L28)

---

### beforeEachStep

▸ `Optional` **beforeEachStep**(`out`, `step`, `flow?`): `Promise`<`void`\>

#### Parameters

| Name    | Type                                           |
| :------ | :--------------------------------------------- |
| `out`   | [`LineWriter`](../interfaces/LineWriter.md)    |
| `step`  | [`Step`](../modules/Schema.md#step)            |
| `flow?` | [`UserFlow`](../interfaces/Schema.UserFlow.md) |

#### Returns

`Promise`<`void`\>

#### Inherited from

[StringifyExtension](StringifyExtension.md).[beforeEachStep](StringifyExtension.md#beforeeachstep)

#### Defined in

[StringifyExtension.ts:23](https://github.com/puppeteer/replay/blob/main/src/StringifyExtension.ts#L23)

---

### stringifyStep

▸ **stringifyStep**(`out`, `step`, `flow?`): `Promise`<`void`\>

#### Parameters

| Name    | Type                                           |
| :------ | :--------------------------------------------- |
| `out`   | [`LineWriter`](../interfaces/LineWriter.md)    |
| `step`  | [`Step`](../modules/Schema.md#step)            |
| `flow?` | [`UserFlow`](../interfaces/Schema.UserFlow.md) |

#### Returns

`Promise`<`void`\>

#### Overrides

[StringifyExtension](StringifyExtension.md).[stringifyStep](StringifyExtension.md#stringifystep)

#### Defined in

[JSONStringifyExtension.ts:50](https://github.com/puppeteer/replay/blob/main/src/JSONStringifyExtension.ts#L50)
