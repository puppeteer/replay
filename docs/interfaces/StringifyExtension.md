[@puppeteer/replay](../README.md) / [Exports](../modules.md) / StringifyExtension

# Interface: StringifyExtension

## Implemented by

- [`PuppeteerStringifyExtension`](../classes/PuppeteerStringifyExtension.md)

## Table of contents

### Methods

- [afterAllSteps](StringifyExtension.md#afterallsteps)
- [afterEachStep](StringifyExtension.md#aftereachstep)
- [beforeAllSteps](StringifyExtension.md#beforeallsteps)
- [beforeEachStep](StringifyExtension.md#beforeeachstep)
- [stringifyStep](StringifyExtension.md#stringifystep)

## Methods

### afterAllSteps

▸ `Optional` **afterAllSteps**(`out`, `flow`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `out` | [`LineWriter`](LineWriter.md) |
| `flow` | [`UserFlow`](Schema.UserFlow.md) |

#### Returns

`Promise`<`void`\>

#### Defined in

[StringifyExtension.ts:22](https://github.com/puppeteer/replay/blob/34579ab/src/StringifyExtension.ts#L22)

___

### afterEachStep

▸ `Optional` **afterEachStep**(`out`, `step`, `flow`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `out` | [`LineWriter`](LineWriter.md) |
| `step` | [`Step`](../modules/Schema.md#step) |
| `flow` | [`UserFlow`](Schema.UserFlow.md) |

#### Returns

`Promise`<`void`\>

#### Defined in

[StringifyExtension.ts:25](https://github.com/puppeteer/replay/blob/34579ab/src/StringifyExtension.ts#L25)

___

### beforeAllSteps

▸ `Optional` **beforeAllSteps**(`out`, `flow`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `out` | [`LineWriter`](LineWriter.md) |
| `flow` | [`UserFlow`](Schema.UserFlow.md) |

#### Returns

`Promise`<`void`\>

#### Defined in

[StringifyExtension.ts:21](https://github.com/puppeteer/replay/blob/34579ab/src/StringifyExtension.ts#L21)

___

### beforeEachStep

▸ `Optional` **beforeEachStep**(`out`, `step`, `flow`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `out` | [`LineWriter`](LineWriter.md) |
| `step` | [`Step`](../modules/Schema.md#step) |
| `flow` | [`UserFlow`](Schema.UserFlow.md) |

#### Returns

`Promise`<`void`\>

#### Defined in

[StringifyExtension.ts:23](https://github.com/puppeteer/replay/blob/34579ab/src/StringifyExtension.ts#L23)

___

### stringifyStep

▸ **stringifyStep**(`out`, `step`, `flow`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `out` | [`LineWriter`](LineWriter.md) |
| `step` | [`Step`](../modules/Schema.md#step) |
| `flow` | [`UserFlow`](Schema.UserFlow.md) |

#### Returns

`Promise`<`void`\>

#### Defined in

[StringifyExtension.ts:24](https://github.com/puppeteer/replay/blob/34579ab/src/StringifyExtension.ts#L24)
