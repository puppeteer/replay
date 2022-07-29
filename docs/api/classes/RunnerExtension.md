[@puppeteer/replay](../README.md) / RunnerExtension

# Class: RunnerExtension

## Hierarchy

- **`RunnerExtension`**

  ↳ [`PuppeteerRunnerExtension`](PuppeteerRunnerExtension.md)

## Table of contents

### Constructors

- [constructor](RunnerExtension.md#constructor)

### Methods

- [afterAllSteps](RunnerExtension.md#afterallsteps)
- [afterEachStep](RunnerExtension.md#aftereachstep)
- [beforeAllSteps](RunnerExtension.md#beforeallsteps)
- [beforeEachStep](RunnerExtension.md#beforeeachstep)
- [runStep](RunnerExtension.md#runstep)

## Constructors

### constructor

• **new RunnerExtension**()

## Methods

### afterAllSteps

▸ `Optional` **afterAllSteps**(`flow?`): `Promise`<`void`\>

#### Parameters

| Name    | Type                                           |
| :------ | :--------------------------------------------- |
| `flow?` | [`UserFlow`](../interfaces/Schema.UserFlow.md) |

#### Returns

`Promise`<`void`\>

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

#### Defined in

[RunnerExtension.ts:23](https://github.com/puppeteer/replay/blob/main/src/RunnerExtension.ts#L23)
