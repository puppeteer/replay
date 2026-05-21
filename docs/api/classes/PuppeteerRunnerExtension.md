[**@puppeteer/replay**](../README.md)

---

[@puppeteer/replay](../README.md) / PuppeteerRunnerExtension

# Class: PuppeteerRunnerExtension

Defined in: [PuppeteerRunnerExtension.ts:40](https://github.com/puppeteer/replay/blob/main/src/PuppeteerRunnerExtension.ts#L40)

## Extends

- [`RunnerExtension`](RunnerExtension.md)

## Extended by

- [`PuppeteerRunnerOwningBrowserExtension`](PuppeteerRunnerOwningBrowserExtension.md)
- [`LighthouseRunnerExtension`](LighthouseRunnerExtension.md)

## Constructors

### Constructor

> **new PuppeteerRunnerExtension**(`browser`, `page`, `opts?`): `PuppeteerRunnerExtension`

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

`PuppeteerRunnerExtension`

#### Overrides

[`RunnerExtension`](RunnerExtension.md).[`constructor`](RunnerExtension.md#constructor)

## Methods

### afterAllSteps()?

> `optional` **afterAllSteps**(`flow?`): `Promise`\<`void`\>

Defined in: [RunnerExtension.ts:21](https://github.com/puppeteer/replay/blob/main/src/RunnerExtension.ts#L21)

#### Parameters

##### flow?

[`UserFlow`](../interfaces/UserFlow.md)

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`RunnerExtension`](RunnerExtension.md).[`afterAllSteps`](RunnerExtension.md#afterallsteps)

---

### afterEachStep()?

> `optional` **afterEachStep**(`step`, `flow?`): `Promise`\<`void`\>

Defined in: [RunnerExtension.ts:24](https://github.com/puppeteer/replay/blob/main/src/RunnerExtension.ts#L24)

#### Parameters

##### step

[`Step`](../type-aliases/Step.md)

##### flow?

[`UserFlow`](../interfaces/UserFlow.md)

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`RunnerExtension`](RunnerExtension.md).[`afterEachStep`](RunnerExtension.md#aftereachstep)

---

### beforeAllSteps()?

> `optional` **beforeAllSteps**(`flow?`): `Promise`\<`void`\>

Defined in: [RunnerExtension.ts:20](https://github.com/puppeteer/replay/blob/main/src/RunnerExtension.ts#L20)

#### Parameters

##### flow?

[`UserFlow`](../interfaces/UserFlow.md)

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`RunnerExtension`](RunnerExtension.md).[`beforeAllSteps`](RunnerExtension.md#beforeallsteps)

---

### beforeEachStep()?

> `optional` **beforeEachStep**(`step`, `flow?`): `Promise`\<`void`\>

Defined in: [RunnerExtension.ts:22](https://github.com/puppeteer/replay/blob/main/src/RunnerExtension.ts#L22)

#### Parameters

##### step

[`Step`](../type-aliases/Step.md)

##### flow?

[`UserFlow`](../interfaces/UserFlow.md)

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`RunnerExtension`](RunnerExtension.md).[`beforeEachStep`](RunnerExtension.md#beforeeachstep)

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

#### Overrides

[`RunnerExtension`](RunnerExtension.md).[`runStep`](RunnerExtension.md#runstep)
