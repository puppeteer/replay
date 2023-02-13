[@puppeteer/replay](../README.md) / LighthouseRunnerExtension

# Class: LighthouseRunnerExtension

## Hierarchy

- [`PuppeteerRunnerExtension`](PuppeteerRunnerExtension.md)

  ↳ **`LighthouseRunnerExtension`**

## Table of contents

### Constructors

- [constructor](LighthouseRunnerExtension.md#constructor)

### Methods

- [afterAllSteps](LighthouseRunnerExtension.md#afterallsteps)
- [afterEachStep](LighthouseRunnerExtension.md#aftereachstep)
- [beforeAllSteps](LighthouseRunnerExtension.md#beforeallsteps)
- [beforeEachStep](LighthouseRunnerExtension.md#beforeeachstep)
- [createFlowResult](LighthouseRunnerExtension.md#createflowresult)
- [runStep](LighthouseRunnerExtension.md#runstep)

## Constructors

### constructor

• **new LighthouseRunnerExtension**(`browser`, `page`, `opts?`)

#### Parameters

| Name            | Type      |
| :-------------- | :-------- |
| `browser`       | `Browser` |
| `page`          | `Page`    |
| `opts?`         | `Object`  |
| `opts.timeout?` | `number`  |

#### Inherited from

[PuppeteerRunnerExtension](PuppeteerRunnerExtension.md).[constructor](PuppeteerRunnerExtension.md#constructor)

#### Defined in

[PuppeteerRunnerExtension.ts:47](https://github.com/puppeteer/replay/blob/main/src/PuppeteerRunnerExtension.ts#L47)

## Methods

### afterAllSteps

▸ **afterAllSteps**(`flow`): `Promise`<`void`\>

#### Parameters

| Name   | Type                                           |
| :----- | :--------------------------------------------- |
| `flow` | [`UserFlow`](../interfaces/Schema.UserFlow.md) |

#### Returns

`Promise`<`void`\>

#### Overrides

[PuppeteerRunnerExtension](PuppeteerRunnerExtension.md).[afterAllSteps](PuppeteerRunnerExtension.md#afterallsteps)

#### Defined in

[lighthouse/LighthouseRunnerExtension.ts:76](https://github.com/puppeteer/replay/blob/main/src/lighthouse/LighthouseRunnerExtension.ts#L76)

---

### afterEachStep

▸ **afterEachStep**(`step`, `flow?`): `Promise`<`void`\>

#### Parameters

| Name    | Type                                           |
| :------ | :--------------------------------------------- |
| `step`  | [`Step`](../modules/Schema.md#step)            |
| `flow?` | [`UserFlow`](../interfaces/Schema.UserFlow.md) |

#### Returns

`Promise`<`void`\>

#### Overrides

[PuppeteerRunnerExtension](PuppeteerRunnerExtension.md).[afterEachStep](PuppeteerRunnerExtension.md#aftereachstep)

#### Defined in

[lighthouse/LighthouseRunnerExtension.ts:68](https://github.com/puppeteer/replay/blob/main/src/lighthouse/LighthouseRunnerExtension.ts#L68)

---

### beforeAllSteps

▸ **beforeAllSteps**(`flow`): `Promise`<`void`\>

#### Parameters

| Name   | Type                                           |
| :----- | :--------------------------------------------- |
| `flow` | [`UserFlow`](../interfaces/Schema.UserFlow.md) |

#### Returns

`Promise`<`void`\>

#### Overrides

[PuppeteerRunnerExtension](PuppeteerRunnerExtension.md).[beforeAllSteps](PuppeteerRunnerExtension.md#beforeallsteps)

#### Defined in

[lighthouse/LighthouseRunnerExtension.ts:34](https://github.com/puppeteer/replay/blob/main/src/lighthouse/LighthouseRunnerExtension.ts#L34)

---

### beforeEachStep

▸ **beforeEachStep**(`step`, `flow?`): `Promise`<`void`\>

#### Parameters

| Name    | Type                                           |
| :------ | :--------------------------------------------- |
| `step`  | [`Step`](../modules/Schema.md#step)            |
| `flow?` | [`UserFlow`](../interfaces/Schema.UserFlow.md) |

#### Returns

`Promise`<`void`\>

#### Overrides

[PuppeteerRunnerExtension](PuppeteerRunnerExtension.md).[beforeEachStep](PuppeteerRunnerExtension.md#beforeeachstep)

#### Defined in

[lighthouse/LighthouseRunnerExtension.ts:51](https://github.com/puppeteer/replay/blob/main/src/lighthouse/LighthouseRunnerExtension.ts#L51)

---

### createFlowResult

▸ **createFlowResult**(): `Promise`<`FlowResult`\>

#### Returns

`Promise`<`FlowResult`\>

#### Defined in

[lighthouse/LighthouseRunnerExtension.ts:27](https://github.com/puppeteer/replay/blob/main/src/lighthouse/LighthouseRunnerExtension.ts#L27)

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

#### Inherited from

[PuppeteerRunnerExtension](PuppeteerRunnerExtension.md).[runStep](PuppeteerRunnerExtension.md#runstep)

#### Defined in

[PuppeteerRunnerExtension.ts:68](https://github.com/puppeteer/replay/blob/main/src/PuppeteerRunnerExtension.ts#L68)
