[@puppeteer/replay](../README.md) / [Exports](../modules.md) / PuppeteerRunnerExtension

# Class: PuppeteerRunnerExtension

## Implements

- [`RunnerExtension`](../interfaces/RunnerExtension.md)

## Table of contents

### Constructors

- [constructor](PuppeteerRunnerExtension.md#constructor)

### Properties

- [browser](PuppeteerRunnerExtension.md#browser)
- [page](PuppeteerRunnerExtension.md#page)
- [timeout](PuppeteerRunnerExtension.md#timeout)

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

[PuppeteerRunnerExtension.ts:29](https://github.com/puppeteer/replay/blob/34579ab/src/PuppeteerRunnerExtension.ts#L29)

## Properties

### browser

• `Protected` **browser**: `Browser`

#### Defined in

[PuppeteerRunnerExtension.ts:25](https://github.com/puppeteer/replay/blob/34579ab/src/PuppeteerRunnerExtension.ts#L25)

___

### page

• `Protected` **page**: `Page`

#### Defined in

[PuppeteerRunnerExtension.ts:26](https://github.com/puppeteer/replay/blob/34579ab/src/PuppeteerRunnerExtension.ts#L26)

___

### timeout

• `Protected` **timeout**: `number`

#### Defined in

[PuppeteerRunnerExtension.ts:27](https://github.com/puppeteer/replay/blob/34579ab/src/PuppeteerRunnerExtension.ts#L27)

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

[PuppeteerRunnerExtension.ts:35](https://github.com/puppeteer/replay/blob/34579ab/src/PuppeteerRunnerExtension.ts#L35)
