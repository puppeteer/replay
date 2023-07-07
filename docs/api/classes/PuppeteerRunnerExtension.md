[@puppeteer/replay](../README.md) / PuppeteerRunnerExtension

# Class: PuppeteerRunnerExtension

## Hierarchy

- [`RunnerExtension`](RunnerExtension.md)

  ↳ **`PuppeteerRunnerExtension`**

  ↳↳ [`PuppeteerRunnerOwningBrowserExtension`](PuppeteerRunnerOwningBrowserExtension.md)

  ↳↳ [`LighthouseRunnerExtension`](LighthouseRunnerExtension.md)

## Table of contents

### Constructors

- [constructor](PuppeteerRunnerExtension.md#constructor)

### Methods

- [afterAllSteps](PuppeteerRunnerExtension.md#afterallsteps)
- [afterEachStep](PuppeteerRunnerExtension.md#aftereachstep)
- [beforeAllSteps](PuppeteerRunnerExtension.md#beforeallsteps)
- [beforeEachStep](PuppeteerRunnerExtension.md#beforeeachstep)
- [runStep](PuppeteerRunnerExtension.md#runstep)

## Constructors

### constructor

• **new PuppeteerRunnerExtension**(`browser`, `page`, `opts?`)

#### Parameters

| Name            | Type      |
| :-------------- | :-------- |
| `browser`       | `Browser` |
| `page`          | `Page`    |
| `opts?`         | `Object`  |
| `opts.timeout?` | `number`  |

#### Overrides

[RunnerExtension](RunnerExtension.md).[constructor](RunnerExtension.md#constructor)

#### Defined in

[PuppeteerRunnerExtension.ts:51](https://github.com/puppeteer/replay/blob/main/src/PuppeteerRunnerExtension.ts#L51)

## Methods

### afterAllSteps

▸ `Optional` **afterAllSteps**(`flow?`): `Promise`<`void`\>

#### Parameters

| Name    | Type                                           |
| :------ | :--------------------------------------------- |
| `flow?` | [`UserFlow`](../interfaces/Schema.UserFlow.md) |

#### Returns

`Promise`<`void`\>

#### Inherited from

[RunnerExtension](RunnerExtension.md).[afterAllSteps](RunnerExtension.md#afterallsteps)

#### Defined in

[RunnerExtension.ts:21](https://github.com/puppeteer/replay/blob/main/src/RunnerExtension.ts#L21)

---

### afterEachStep

▸ `Optional` **afterEachStep**(`step`, `flow?`): `Promise`<`void`\>

#### Parameters

| Name    | Type                                           |
| :------ | :--------------------------------------------- |
| `step`  | [`Step`](../modules/Schema.md#step)            |
| `flow?` | [`UserFlow`](../interfaces/Schema.UserFlow.md) |

#### Returns

`Promise`<`void`\>

#### Inherited from

[RunnerExtension](RunnerExtension.md).[afterEachStep](RunnerExtension.md#aftereachstep)

#### Defined in

[RunnerExtension.ts:24](https://github.com/puppeteer/replay/blob/main/src/RunnerExtension.ts#L24)

---

### beforeAllSteps

▸ `Optional` **beforeAllSteps**(`flow?`): `Promise`<`void`\>

#### Parameters

| Name    | Type                                           |
| :------ | :--------------------------------------------- |
| `flow?` | [`UserFlow`](../interfaces/Schema.UserFlow.md) |

#### Returns

`Promise`<`void`\>

#### Inherited from

[RunnerExtension](RunnerExtension.md).[beforeAllSteps](RunnerExtension.md#beforeallsteps)

#### Defined in

[RunnerExtension.ts:20](https://github.com/puppeteer/replay/blob/main/src/RunnerExtension.ts#L20)

---

### beforeEachStep

▸ `Optional` **beforeEachStep**(`step`, `flow?`): `Promise`<`void`\>

#### Parameters

| Name    | Type                                           |
| :------ | :--------------------------------------------- |
| `step`  | [`Step`](../modules/Schema.md#step)            |
| `flow?` | [`UserFlow`](../interfaces/Schema.UserFlow.md) |

#### Returns

`Promise`<`void`\>

#### Inherited from

[RunnerExtension](RunnerExtension.md).[beforeEachStep](RunnerExtension.md#beforeeachstep)

#### Defined in

[RunnerExtension.ts:22](https://github.com/puppeteer/replay/blob/main/src/RunnerExtension.ts#L22)

---

### runStep

▸ **runStep**(`step`, `flow?`): `Promise`<`void`\>

#### Parameters

| Name    | Type                                           |
| :------ | :--------------------------------------------- |
| `step`  | [`Step`](../modules/Schema.md#step)            |
| `flow?` | [`UserFlow`](../interfaces/Schema.UserFlow.md) |

#### Returns

`Promise`<`void`\>

#### Overrides

[RunnerExtension](RunnerExtension.md).[runStep](RunnerExtension.md#runstep)

#### Defined in

[PuppeteerRunnerExtension.ts:72](https://github.com/puppeteer/replay/blob/main/src/PuppeteerRunnerExtension.ts#L72)
