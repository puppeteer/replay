[**@puppeteer/replay**](../README.md)

---

[@puppeteer/replay](../README.md) / PuppeteerRunnerExtension

# Class: PuppeteerRunnerExtension

Defined in: [PuppeteerRunnerExtension.ts:30](https://github.com/puppeteer/replay/blob/main/src/PuppeteerRunnerExtension.ts#L30)

## Extends

- [`RunnerExtension`](RunnerExtension.md)

## Extended by

- [`PuppeteerRunnerOwningBrowserExtension`](PuppeteerRunnerOwningBrowserExtension.md)
- [`LighthouseRunnerExtension`](LighthouseRunnerExtension.md)

## Constructors

### Constructor

> **new PuppeteerRunnerExtension**(`browser`, `page`, `opts?`): `PuppeteerRunnerExtension`

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

`PuppeteerRunnerExtension`

#### Overrides

[`RunnerExtension`](RunnerExtension.md).[`constructor`](RunnerExtension.md#constructor)

## Methods

### afterAllSteps()?

> `optional` **afterAllSteps**(`flow?`): `Promise`\<`void`\>

Defined in: [RunnerExtension.ts:11](https://github.com/puppeteer/replay/blob/main/src/RunnerExtension.ts#L11)

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

Defined in: [RunnerExtension.ts:14](https://github.com/puppeteer/replay/blob/main/src/RunnerExtension.ts#L14)

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

Defined in: [RunnerExtension.ts:10](https://github.com/puppeteer/replay/blob/main/src/RunnerExtension.ts#L10)

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

Defined in: [RunnerExtension.ts:12](https://github.com/puppeteer/replay/blob/main/src/RunnerExtension.ts#L12)

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

Defined in: [PuppeteerRunnerExtension.ts:56](https://github.com/puppeteer/replay/blob/main/src/PuppeteerRunnerExtension.ts#L56)

#### Parameters

##### step

[`Step`](../type-aliases/Step.md)

##### flow?

[`UserFlow`](../interfaces/UserFlow.md)

#### Returns

`Promise`\<`void`\>

#### Overrides

[`RunnerExtension`](RunnerExtension.md).[`runStep`](RunnerExtension.md#runstep)
