[@puppeteer/replay](../README.md) / [Exports](../modules.md) / RunnerExtension

# Interface: RunnerExtension

## Implemented by

- [`PuppeteerRunnerExtension`](../classes/PuppeteerRunnerExtension.md)

## Table of contents

### Methods

- [afterAllSteps](RunnerExtension.md#afterallsteps)
- [afterEachStep](RunnerExtension.md#aftereachstep)
- [beforeAllSteps](RunnerExtension.md#beforeallsteps)
- [beforeEachStep](RunnerExtension.md#beforeeachstep)
- [runStep](RunnerExtension.md#runstep)

## Methods

### afterAllSteps

▸ `Optional` **afterAllSteps**(`flow`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `flow` | [`UserFlow`](Schema.UserFlow.md) |

#### Returns

`Promise`<`void`\>

#### Defined in

[RunnerExtension.ts:21](https://github.com/puppeteer/replay/blob/main/src/RunnerExtension.ts#L21)

___

### afterEachStep

▸ `Optional` **afterEachStep**(`step`, `flow`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `step` | [`Step`](../modules/Schema.md#step) |
| `flow` | [`UserFlow`](Schema.UserFlow.md) |

#### Returns

`Promise`<`void`\>

#### Defined in

[RunnerExtension.ts:24](https://github.com/puppeteer/replay/blob/main/src/RunnerExtension.ts#L24)

___

### beforeAllSteps

▸ `Optional` **beforeAllSteps**(`flow`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `flow` | [`UserFlow`](Schema.UserFlow.md) |

#### Returns

`Promise`<`void`\>

#### Defined in

[RunnerExtension.ts:20](https://github.com/puppeteer/replay/blob/main/src/RunnerExtension.ts#L20)

___

### beforeEachStep

▸ `Optional` **beforeEachStep**(`step`, `flow`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `step` | [`Step`](../modules/Schema.md#step) |
| `flow` | [`UserFlow`](Schema.UserFlow.md) |

#### Returns

`Promise`<`void`\>

#### Defined in

[RunnerExtension.ts:22](https://github.com/puppeteer/replay/blob/main/src/RunnerExtension.ts#L22)

___

### runStep

▸ **runStep**(`step`, `flow`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `step` | [`Step`](../modules/Schema.md#step) |
| `flow` | [`UserFlow`](Schema.UserFlow.md) |

#### Returns

`Promise`<`void`\>

#### Defined in

[RunnerExtension.ts:23](https://github.com/puppeteer/replay/blob/main/src/RunnerExtension.ts#L23)
