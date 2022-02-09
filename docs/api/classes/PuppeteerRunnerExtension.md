[@puppeteer/replay](../README.md) / [Exports](../modules.md) / PuppeteerRunnerExtension

# Class: PuppeteerRunnerExtension

## Implements

- [`RunnerExtension`](../interfaces/RunnerExtension.md)

## Table of contents

### Constructors

- [constructor](PuppeteerRunnerExtension.md#constructor)

### Methods

- [runStep](PuppeteerRunnerExtension.md#runstep)

## Constructors

### constructor

• **new PuppeteerRunnerExtension**(`browser`, `page`, `opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `browser` | `Browser` |
| `page` | `Page` |
| `opts?` | `Object` |
| `opts.timeout?` | `number` |

#### Defined in

[PuppeteerRunnerExtension.ts:29](https://github.com/puppeteer/replay/blob/main/src/PuppeteerRunnerExtension.ts#L29)

## Methods

### runStep

▸ **runStep**(`step`, `flow`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `step` | [`Step`](../modules/Schema.md#step) |
| `flow` | [`UserFlow`](../interfaces/Schema.UserFlow.md) |

#### Returns

`Promise`<`void`\>

#### Implementation of

[RunnerExtension](../interfaces/RunnerExtension.md).[runStep](../interfaces/RunnerExtension.md#runstep)

#### Defined in

[PuppeteerRunnerExtension.ts:35](https://github.com/puppeteer/replay/blob/main/src/PuppeteerRunnerExtension.ts#L35)
