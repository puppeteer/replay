[**@puppeteer/replay**](../README.md)

---

[@puppeteer/replay](../README.md) / LighthouseRunnerExtension

# Class: LighthouseRunnerExtension

Defined in: [lighthouse/LighthouseRunnerExtension.ts:12](https://github.com/puppeteer/replay/blob/main/src/lighthouse/LighthouseRunnerExtension.ts#L12)

## Extends

- [`PuppeteerRunnerExtension`](PuppeteerRunnerExtension.md)

## Constructors

### Constructor

> **new LighthouseRunnerExtension**(`browser`, `page`, `opts?`): `LighthouseRunnerExtension`

Defined in: [PuppeteerRunnerExtension.ts:35](https://github.com/puppeteer/replay/blob/main/src/PuppeteerRunnerExtension.ts#L35)

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

Defined in: [lighthouse/LighthouseRunnerExtension.ts:66](https://github.com/puppeteer/replay/blob/main/src/lighthouse/LighthouseRunnerExtension.ts#L66)

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

Defined in: [lighthouse/LighthouseRunnerExtension.ts:58](https://github.com/puppeteer/replay/blob/main/src/lighthouse/LighthouseRunnerExtension.ts#L58)

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

Defined in: [lighthouse/LighthouseRunnerExtension.ts:24](https://github.com/puppeteer/replay/blob/main/src/lighthouse/LighthouseRunnerExtension.ts#L24)

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

Defined in: [lighthouse/LighthouseRunnerExtension.ts:41](https://github.com/puppeteer/replay/blob/main/src/lighthouse/LighthouseRunnerExtension.ts#L41)

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

Defined in: [lighthouse/LighthouseRunnerExtension.ts:17](https://github.com/puppeteer/replay/blob/main/src/lighthouse/LighthouseRunnerExtension.ts#L17)

#### Returns

`Promise`\<`FlowResult`\>

---

### runStep()

> **runStep**(`step`, `flow?`): `Promise`\<`void`\>

Defined in: [PuppeteerRunnerExtension.ts:56](https://github.com/puppeteer/replay/blob/main/src/PuppeteerRunnerExtension.ts#L56)

#### Parameters

##### step

[`Step`](../type-aliases/Step.md)

##### flow?

[`UserFlow`](../interfaces/UserFlow.md)

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`PuppeteerRunnerExtension`](PuppeteerRunnerExtension.md).[`runStep`](PuppeteerRunnerExtension.md#runstep)
