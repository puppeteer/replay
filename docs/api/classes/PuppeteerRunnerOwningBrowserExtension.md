[**@puppeteer/replay**](../README.md)

---

[@puppeteer/replay](../README.md) / PuppeteerRunnerOwningBrowserExtension

# Class: PuppeteerRunnerOwningBrowserExtension

Defined in: [PuppeteerRunnerExtension.ts:271](https://github.com/puppeteer/replay/blob/main/src/PuppeteerRunnerExtension.ts#L271)

## Extends

- [`PuppeteerRunnerExtension`](PuppeteerRunnerExtension.md)

## Constructors

### Constructor

> **new PuppeteerRunnerOwningBrowserExtension**(`browser`, `page`, `opts?`): `PuppeteerRunnerOwningBrowserExtension`

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

`PuppeteerRunnerOwningBrowserExtension`

#### Inherited from

[`PuppeteerRunnerExtension`](PuppeteerRunnerExtension.md).[`constructor`](PuppeteerRunnerExtension.md#constructor)

## Methods

### afterAllSteps()

> **afterAllSteps**(): `Promise`\<`void`\>

Defined in: [PuppeteerRunnerExtension.ts:272](https://github.com/puppeteer/replay/blob/main/src/PuppeteerRunnerExtension.ts#L272)

#### Returns

`Promise`\<`void`\>

#### Overrides

[`PuppeteerRunnerExtension`](PuppeteerRunnerExtension.md).[`afterAllSteps`](PuppeteerRunnerExtension.md#afterallsteps)

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

[`PuppeteerRunnerExtension`](PuppeteerRunnerExtension.md).[`afterEachStep`](PuppeteerRunnerExtension.md#aftereachstep)

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

[`PuppeteerRunnerExtension`](PuppeteerRunnerExtension.md).[`beforeAllSteps`](PuppeteerRunnerExtension.md#beforeallsteps)

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

[`PuppeteerRunnerExtension`](PuppeteerRunnerExtension.md).[`beforeEachStep`](PuppeteerRunnerExtension.md#beforeeachstep)

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
