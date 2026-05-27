[**@puppeteer/replay**](../README.md)

---

[@puppeteer/replay](../README.md) / RunnerExtension

# Class: RunnerExtension

Defined in: [RunnerExtension.ts:9](https://github.com/puppeteer/replay/blob/main/src/RunnerExtension.ts#L9)

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

Defined in: [RunnerExtension.ts:11](https://github.com/puppeteer/replay/blob/main/src/RunnerExtension.ts#L11)

#### Parameters

##### flow?

[`UserFlow`](../interfaces/UserFlow.md)

#### Returns

`Promise`\<`void`\>

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

---

### beforeAllSteps()?

> `optional` **beforeAllSteps**(`flow?`): `Promise`\<`void`\>

Defined in: [RunnerExtension.ts:10](https://github.com/puppeteer/replay/blob/main/src/RunnerExtension.ts#L10)

#### Parameters

##### flow?

[`UserFlow`](../interfaces/UserFlow.md)

#### Returns

`Promise`\<`void`\>

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

---

### runStep()

> **runStep**(`step`, `flow?`): `Promise`\<`void`\>

Defined in: [RunnerExtension.ts:13](https://github.com/puppeteer/replay/blob/main/src/RunnerExtension.ts#L13)

#### Parameters

##### step

[`Step`](../type-aliases/Step.md)

##### flow?

[`UserFlow`](../interfaces/UserFlow.md)

#### Returns

`Promise`\<`void`\>
