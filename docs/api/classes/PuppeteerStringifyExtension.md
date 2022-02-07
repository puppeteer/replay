[@puppeteer/replay](../README.md) / [Exports](../modules.md) / PuppeteerStringifyExtension

# Class: PuppeteerStringifyExtension

## Implements

- [`StringifyExtension`](../interfaces/StringifyExtension.md)

## Table of contents

### Constructors

- [constructor](PuppeteerStringifyExtension.md#constructor)

### Methods

- [afterAllSteps](PuppeteerStringifyExtension.md#afterallsteps)
- [beforeAllSteps](PuppeteerStringifyExtension.md#beforeallsteps)
- [stringifyStep](PuppeteerStringifyExtension.md#stringifystep)

## Constructors

### constructor

• **new PuppeteerStringifyExtension**()

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

#### Implementation of

[StringifyExtension](../interfaces/StringifyExtension.md).[afterAllSteps](../interfaces/StringifyExtension.md#afterallsteps)

#### Defined in

[PuppeteerStringifyExtension.ts:60](https://github.com/puppeteer/replay/blob/main/src/PuppeteerStringifyExtension.ts#L60)

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

#### Implementation of

[StringifyExtension](../interfaces/StringifyExtension.md).[beforeAllSteps](../interfaces/StringifyExtension.md#beforeallsteps)

#### Defined in

[PuppeteerStringifyExtension.ts:43](https://github.com/puppeteer/replay/blob/main/src/PuppeteerStringifyExtension.ts#L43)

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

#### Implementation of

[StringifyExtension](../interfaces/StringifyExtension.md).[stringifyStep](../interfaces/StringifyExtension.md#stringifystep)

#### Defined in

[PuppeteerStringifyExtension.ts:66](https://github.com/puppeteer/replay/blob/main/src/PuppeteerStringifyExtension.ts#L66)
