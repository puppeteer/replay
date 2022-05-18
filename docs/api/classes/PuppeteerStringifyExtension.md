[@puppeteer/replay](../README.md) / PuppeteerStringifyExtension

# Class: PuppeteerStringifyExtension

## Hierarchy

- [`StringifyExtension`](StringifyExtension.md)

  ↳ **`PuppeteerStringifyExtension`**

## Table of contents

### Constructors

- [constructor](PuppeteerStringifyExtension.md#constructor)

### Methods

- [afterAllSteps](PuppeteerStringifyExtension.md#afterallsteps)
- [afterEachStep](PuppeteerStringifyExtension.md#aftereachstep)
- [beforeAllSteps](PuppeteerStringifyExtension.md#beforeallsteps)
- [beforeEachStep](PuppeteerStringifyExtension.md#beforeeachstep)
- [stringifyStep](PuppeteerStringifyExtension.md#stringifystep)

## Constructors

### constructor

• **new PuppeteerStringifyExtension**()

#### Inherited from

[StringifyExtension](StringifyExtension.md).[constructor](StringifyExtension.md#constructor)

## Methods

### afterAllSteps

▸ **afterAllSteps**(`out`, `flow`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `out` | [`LineWriter`](../interfaces/LineWriter.md) |
| `flow` | [`UserFlow`](../interfaces/Schema.UserFlow.md) |

#### Returns

`Promise`<`void`\>

#### Overrides

[StringifyExtension](StringifyExtension.md).[afterAllSteps](StringifyExtension.md#afterallsteps)

#### Defined in

[PuppeteerStringifyExtension.ts:59](https://github.com/puppeteer/replay/blob/main/src/PuppeteerStringifyExtension.ts#L59)

___

### afterEachStep

▸ `Optional` **afterEachStep**(`out`, `step`, `flow`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `out` | [`LineWriter`](../interfaces/LineWriter.md) |
| `step` | [`Step`](../modules/Schema.md#step) |
| `flow` | [`UserFlow`](../interfaces/Schema.UserFlow.md) |

#### Returns

`Promise`<`void`\>

#### Inherited from

[StringifyExtension](StringifyExtension.md).[afterEachStep](StringifyExtension.md#aftereachstep)

#### Defined in

[StringifyExtension.ts:33](https://github.com/puppeteer/replay/blob/main/src/StringifyExtension.ts#L33)

___

### beforeAllSteps

▸ **beforeAllSteps**(`out`, `flow`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `out` | [`LineWriter`](../interfaces/LineWriter.md) |
| `flow` | [`UserFlow`](../interfaces/Schema.UserFlow.md) |

#### Returns

`Promise`<`void`\>

#### Overrides

[StringifyExtension](StringifyExtension.md).[beforeAllSteps](StringifyExtension.md#beforeallsteps)

#### Defined in

[PuppeteerStringifyExtension.ts:46](https://github.com/puppeteer/replay/blob/main/src/PuppeteerStringifyExtension.ts#L46)

___

### beforeEachStep

▸ `Optional` **beforeEachStep**(`out`, `step`, `flow`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `out` | [`LineWriter`](../interfaces/LineWriter.md) |
| `step` | [`Step`](../modules/Schema.md#step) |
| `flow` | [`UserFlow`](../interfaces/Schema.UserFlow.md) |

#### Returns

`Promise`<`void`\>

#### Inherited from

[StringifyExtension](StringifyExtension.md).[beforeEachStep](StringifyExtension.md#beforeeachstep)

#### Defined in

[StringifyExtension.ts:23](https://github.com/puppeteer/replay/blob/main/src/StringifyExtension.ts#L23)

___

### stringifyStep

▸ **stringifyStep**(`out`, `step`, `flow`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `out` | [`LineWriter`](../interfaces/LineWriter.md) |
| `step` | [`Step`](../modules/Schema.md#step) |
| `flow` | [`UserFlow`](../interfaces/Schema.UserFlow.md) |

#### Returns

`Promise`<`void`\>

#### Overrides

[StringifyExtension](StringifyExtension.md).[stringifyStep](StringifyExtension.md#stringifystep)

#### Defined in

[PuppeteerStringifyExtension.ts:69](https://github.com/puppeteer/replay/blob/main/src/PuppeteerStringifyExtension.ts#L69)
