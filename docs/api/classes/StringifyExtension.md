[@puppeteer/replay](../README.md) / StringifyExtension

# Class: StringifyExtension

## Hierarchy

- **`StringifyExtension`**

  ↳ [`JSONStringifyExtension`](JSONStringifyExtension.md)

  ↳ [`PuppeteerStringifyExtension`](PuppeteerStringifyExtension.md)

  ↳ [`PuppeteerReplayStringifyExtension`](PuppeteerReplayStringifyExtension.md)

## Table of contents

### Constructors

- [constructor](StringifyExtension.md#constructor)

### Methods

- [afterAllSteps](StringifyExtension.md#afterallsteps)
- [afterEachStep](StringifyExtension.md#aftereachstep)
- [beforeAllSteps](StringifyExtension.md#beforeallsteps)
- [beforeEachStep](StringifyExtension.md#beforeeachstep)
- [stringifyStep](StringifyExtension.md#stringifystep)

## Constructors

### constructor

• **new StringifyExtension**(): [`StringifyExtension`](StringifyExtension.md)

#### Returns

[`StringifyExtension`](StringifyExtension.md)

## Methods

### afterAllSteps

▸ **afterAllSteps**(`out`, `flow`): `Promise`\<`void`\>

#### Parameters

| Name   | Type                                           |
| :----- | :--------------------------------------------- |
| `out`  | [`LineWriter`](../interfaces/LineWriter.md)    |
| `flow` | [`UserFlow`](../interfaces/Schema.UserFlow.md) |

#### Returns

`Promise`\<`void`\>

#### Defined in

[StringifyExtension.ts:22](https://github.com/puppeteer/replay/blob/main/src/StringifyExtension.ts#L22)

---

### afterEachStep

▸ **afterEachStep**(`out`, `step`, `flow?`): `Promise`\<`void`\>

#### Parameters

| Name    | Type                                           |
| :------ | :--------------------------------------------- |
| `out`   | [`LineWriter`](../interfaces/LineWriter.md)    |
| `step`  | [`Step`](../modules/Schema.md#step)            |
| `flow?` | [`UserFlow`](../interfaces/Schema.UserFlow.md) |

#### Returns

`Promise`\<`void`\>

#### Defined in

[StringifyExtension.ts:33](https://github.com/puppeteer/replay/blob/main/src/StringifyExtension.ts#L33)

---

### beforeAllSteps

▸ **beforeAllSteps**(`out`, `flow`): `Promise`\<`void`\>

#### Parameters

| Name   | Type                                           |
| :----- | :--------------------------------------------- |
| `out`  | [`LineWriter`](../interfaces/LineWriter.md)    |
| `flow` | [`UserFlow`](../interfaces/Schema.UserFlow.md) |

#### Returns

`Promise`\<`void`\>

#### Defined in

[StringifyExtension.ts:21](https://github.com/puppeteer/replay/blob/main/src/StringifyExtension.ts#L21)

---

### beforeEachStep

▸ **beforeEachStep**(`out`, `step`, `flow?`): `Promise`\<`void`\>

#### Parameters

| Name    | Type                                           |
| :------ | :--------------------------------------------- |
| `out`   | [`LineWriter`](../interfaces/LineWriter.md)    |
| `step`  | [`Step`](../modules/Schema.md#step)            |
| `flow?` | [`UserFlow`](../interfaces/Schema.UserFlow.md) |

#### Returns

`Promise`\<`void`\>

#### Defined in

[StringifyExtension.ts:23](https://github.com/puppeteer/replay/blob/main/src/StringifyExtension.ts#L23)

---

### stringifyStep

▸ **stringifyStep**(`out`, `step`, `flow?`): `Promise`\<`void`\>

#### Parameters

| Name    | Type                                           |
| :------ | :--------------------------------------------- |
| `out`   | [`LineWriter`](../interfaces/LineWriter.md)    |
| `step`  | [`Step`](../modules/Schema.md#step)            |
| `flow?` | [`UserFlow`](../interfaces/Schema.UserFlow.md) |

#### Returns

`Promise`\<`void`\>

#### Defined in

[StringifyExtension.ts:28](https://github.com/puppeteer/replay/blob/main/src/StringifyExtension.ts#L28)
