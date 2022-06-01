[@puppeteer/replay](../README.md) / StringifyExtension

# Class: StringifyExtension

## Hierarchy

- **`StringifyExtension`**

  ↳ [`PuppeteerStringifyExtension`](PuppeteerStringifyExtension.md)

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

• **new StringifyExtension**()

## Methods

### afterAllSteps

▸ `Optional` **afterAllSteps**(`out`, `flow`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `out` | [`LineWriter`](../interfaces/LineWriter.md) |
| `flow` | [`UserFlow`](../interfaces/Schema.UserFlow.md) |

#### Returns

`Promise`<`void`\>

#### Defined in

[StringifyExtension.ts:22](https://github.com/puppeteer/replay/blob/main/src/StringifyExtension.ts#L22)

___

### afterEachStep

▸ `Optional` **afterEachStep**(`out`, `step`, `flow?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `out` | [`LineWriter`](../interfaces/LineWriter.md) |
| `step` | [`Step`](../modules/Schema.md#step) |
| `flow?` | [`UserFlow`](../interfaces/Schema.UserFlow.md) |

#### Returns

`Promise`<`void`\>

#### Defined in

[StringifyExtension.ts:33](https://github.com/puppeteer/replay/blob/main/src/StringifyExtension.ts#L33)

___

### beforeAllSteps

▸ `Optional` **beforeAllSteps**(`out`, `flow`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `out` | [`LineWriter`](../interfaces/LineWriter.md) |
| `flow` | [`UserFlow`](../interfaces/Schema.UserFlow.md) |

#### Returns

`Promise`<`void`\>

#### Defined in

[StringifyExtension.ts:21](https://github.com/puppeteer/replay/blob/main/src/StringifyExtension.ts#L21)

___

### beforeEachStep

▸ `Optional` **beforeEachStep**(`out`, `step`, `flow?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `out` | [`LineWriter`](../interfaces/LineWriter.md) |
| `step` | [`Step`](../modules/Schema.md#step) |
| `flow?` | [`UserFlow`](../interfaces/Schema.UserFlow.md) |

#### Returns

`Promise`<`void`\>

#### Defined in

[StringifyExtension.ts:23](https://github.com/puppeteer/replay/blob/main/src/StringifyExtension.ts#L23)

___

### stringifyStep

▸ **stringifyStep**(`out`, `step`, `flow?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `out` | [`LineWriter`](../interfaces/LineWriter.md) |
| `step` | [`Step`](../modules/Schema.md#step) |
| `flow?` | [`UserFlow`](../interfaces/Schema.UserFlow.md) |

#### Returns

`Promise`<`void`\>

#### Defined in

[StringifyExtension.ts:28](https://github.com/puppeteer/replay/blob/main/src/StringifyExtension.ts#L28)
