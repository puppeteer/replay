[**@puppeteer/replay**](../README.md)

---

[@puppeteer/replay](../README.md) / PuppeteerRunnerOwningBrowserExtension

# Class: PuppeteerRunnerOwningBrowserExtension

Defined in: [PuppeteerRunnerExtension.ts:281](https://github.com/puppeteer/replay/blob/main/src/PuppeteerRunnerExtension.ts#L281)

## Extends

- [`PuppeteerRunnerExtension`](PuppeteerRunnerExtension.md)

## Constructors

### Constructor

> **new PuppeteerRunnerOwningBrowserExtension**(`browser`, `page`, `opts?`): `PuppeteerRunnerOwningBrowserExtension`

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

`PuppeteerRunnerOwningBrowserExtension`

#### Inherited from

[`PuppeteerRunnerExtension`](PuppeteerRunnerExtension.md).[`constructor`](PuppeteerRunnerExtension.md#constructor)

## Methods

### afterAllSteps()

> **afterAllSteps**(): `Promise`\<`void`\>

Defined in: [PuppeteerRunnerExtension.ts:282](https://github.com/puppeteer/replay/blob/main/src/PuppeteerRunnerExtension.ts#L282)

#### Returns

`Promise`\<`void`\>

#### Overrides

[`PuppeteerRunnerExtension`](PuppeteerRunnerExtension.md).[`afterAllSteps`](PuppeteerRunnerExtension.md#afterallsteps)

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

[`PuppeteerRunnerExtension`](PuppeteerRunnerExtension.md).[`afterEachStep`](PuppeteerRunnerExtension.md#aftereachstep)

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

[`PuppeteerRunnerExtension`](PuppeteerRunnerExtension.md).[`beforeAllSteps`](PuppeteerRunnerExtension.md#beforeallsteps)

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

[`PuppeteerRunnerExtension`](PuppeteerRunnerExtension.md).[`beforeEachStep`](PuppeteerRunnerExtension.md#beforeeachstep)

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
