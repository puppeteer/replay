[**@puppeteer/replay**](../README.md)

---

[@puppeteer/replay](../README.md) / LighthouseRunnerExtension

# Class: LighthouseRunnerExtension

Defined in: [lighthouse/LighthouseRunnerExtension.ts:22](https://github.com/puppeteer/replay/blob/main/src/lighthouse/LighthouseRunnerExtension.ts#L22)

## Extends

- [`PuppeteerRunnerExtension`](PuppeteerRunnerExtension.md)

## Constructors

### Constructor

> **new LighthouseRunnerExtension**(`browser`, `page`, `opts?`): `LighthouseRunnerExtension`

Defined in: [PuppeteerRunnerExtension.ts:45](https://github.com/puppeteer/replay/blob/main/src/PuppeteerRunnerExtension.ts#L45)

#### Parameters

##### browser

`Browser`

##### page

`Page`

##### opts?

###### timeout?

`number`

#### Returns

`LighthouseRunnerExtension`

#### Inherited from

[`PuppeteerRunnerExtension`](PuppeteerRunnerExtension.md).[`constructor`](PuppeteerRunnerExtension.md#constructor)

## Methods

### afterAllSteps()

> **afterAllSteps**(`flow`): `Promise`\<`void`\>

Defined in: [lighthouse/LighthouseRunnerExtension.ts:76](https://github.com/puppeteer/replay/blob/main/src/lighthouse/LighthouseRunnerExtension.ts#L76)

#### Parameters

##### flow

[`UserFlow`](../interfaces/UserFlow.md)

#### Returns

`Promise`\<`void`\>

#### Overrides

[`PuppeteerRunnerExtension`](PuppeteerRunnerExtension.md).[`afterAllSteps`](PuppeteerRunnerExtension.md#afterallsteps)

---

### afterEachStep()

> **afterEachStep**(`step`, `flow?`): `Promise`\<`void`\>

Defined in: [lighthouse/LighthouseRunnerExtension.ts:68](https://github.com/puppeteer/replay/blob/main/src/lighthouse/LighthouseRunnerExtension.ts#L68)

#### Parameters

##### step

[`Step`](../type-aliases/Step.md)

##### flow?

[`UserFlow`](../interfaces/UserFlow.md)

#### Returns

`Promise`\<`void`\>

#### Overrides

[`PuppeteerRunnerExtension`](PuppeteerRunnerExtension.md).[`afterEachStep`](PuppeteerRunnerExtension.md#aftereachstep)

---

### beforeAllSteps()

> **beforeAllSteps**(`flow`): `Promise`\<`void`\>

Defined in: [lighthouse/LighthouseRunnerExtension.ts:34](https://github.com/puppeteer/replay/blob/main/src/lighthouse/LighthouseRunnerExtension.ts#L34)

#### Parameters

##### flow

[`UserFlow`](../interfaces/UserFlow.md)

#### Returns

`Promise`\<`void`\>

#### Overrides

[`PuppeteerRunnerExtension`](PuppeteerRunnerExtension.md).[`beforeAllSteps`](PuppeteerRunnerExtension.md#beforeallsteps)

---

### beforeEachStep()

> **beforeEachStep**(`step`, `flow?`): `Promise`\<`void`\>

Defined in: [lighthouse/LighthouseRunnerExtension.ts:51](https://github.com/puppeteer/replay/blob/main/src/lighthouse/LighthouseRunnerExtension.ts#L51)

#### Parameters

##### step

[`Step`](../type-aliases/Step.md)

##### flow?

[`UserFlow`](../interfaces/UserFlow.md)

#### Returns

`Promise`\<`void`\>

#### Overrides

[`PuppeteerRunnerExtension`](PuppeteerRunnerExtension.md).[`beforeEachStep`](PuppeteerRunnerExtension.md#beforeeachstep)

---

### createFlowResult()

> **createFlowResult**(): `Promise`\<`FlowResult`\>

Defined in: [lighthouse/LighthouseRunnerExtension.ts:27](https://github.com/puppeteer/replay/blob/main/src/lighthouse/LighthouseRunnerExtension.ts#L27)

#### Returns

`Promise`\<`FlowResult`\>

---

### runStep()

> **runStep**(`step`, `flow?`): `Promise`\<`void`\>

Defined in: [PuppeteerRunnerExtension.ts:66](https://github.com/puppeteer/replay/blob/main/src/PuppeteerRunnerExtension.ts#L66)

#### Parameters

##### step

[`Step`](../type-aliases/Step.md)

##### flow?

[`UserFlow`](../interfaces/UserFlow.md)

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`PuppeteerRunnerExtension`](PuppeteerRunnerExtension.md).[`runStep`](PuppeteerRunnerExtension.md#runstep)
