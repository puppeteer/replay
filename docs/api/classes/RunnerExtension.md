[**@puppeteer/replay**](../README.md)

---

[@puppeteer/replay](../README.md) / RunnerExtension

# Class: RunnerExtension

Defined in: [RunnerExtension.ts:19](https://github.com/puppeteer/replay/blob/main/src/RunnerExtension.ts#L19)

## Extended by

- [`PuppeteerRunnerExtension`](PuppeteerRunnerExtension.md)

## Constructors

### Constructor

> **new RunnerExtension**(): `RunnerExtension`

#### Returns

`RunnerExtension`

## Methods

### afterAllSteps()?

> `optional` **afterAllSteps**(`flow?`): `Promise`\<`void`\>

Defined in: [RunnerExtension.ts:21](https://github.com/puppeteer/replay/blob/main/src/RunnerExtension.ts#L21)

#### Parameters

##### flow?

[`UserFlow`](../interfaces/UserFlow.md)

#### Returns

`Promise`\<`void`\>

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

---

### beforeAllSteps()?

> `optional` **beforeAllSteps**(`flow?`): `Promise`\<`void`\>

Defined in: [RunnerExtension.ts:20](https://github.com/puppeteer/replay/blob/main/src/RunnerExtension.ts#L20)

#### Parameters

##### flow?

[`UserFlow`](../interfaces/UserFlow.md)

#### Returns

`Promise`\<`void`\>

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

---

### runStep()

> **runStep**(`step`, `flow?`): `Promise`\<`void`\>

Defined in: [RunnerExtension.ts:23](https://github.com/puppeteer/replay/blob/main/src/RunnerExtension.ts#L23)

#### Parameters

##### step

[`Step`](../type-aliases/Step.md)

##### flow?

[`UserFlow`](../interfaces/UserFlow.md)

#### Returns

`Promise`\<`void`\>
