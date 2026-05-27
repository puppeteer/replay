[**@puppeteer/replay**](../README.md)

---

[@puppeteer/replay](../README.md) / LighthouseStringifyExtension

# Class: LighthouseStringifyExtension

Defined in: [lighthouse/LighthouseStringifyExtension.ts:16](https://github.com/puppeteer/replay/blob/main/src/lighthouse/LighthouseStringifyExtension.ts#L16)

## Extends

- [`PuppeteerStringifyExtension`](PuppeteerStringifyExtension.md)

## Constructors

### Constructor

> **new LighthouseStringifyExtension**(`targetBrowser?`): `LighthouseStringifyExtension`

Defined in: [PuppeteerStringifyExtension.ts:43](https://github.com/puppeteer/replay/blob/main/src/PuppeteerStringifyExtension.ts#L43)

#### Parameters

##### targetBrowser?

`TargetBrowser` = `'chrome'`

#### Returns

`LighthouseStringifyExtension`

#### Inherited from

[`PuppeteerStringifyExtension`](PuppeteerStringifyExtension.md).[`constructor`](PuppeteerStringifyExtension.md#constructor)

## Methods

### afterAllSteps()

> **afterAllSteps**(`out`, `flow`): `Promise`\<`void`\>

Defined in: [lighthouse/LighthouseStringifyExtension.ts:75](https://github.com/puppeteer/replay/blob/main/src/lighthouse/LighthouseStringifyExtension.ts#L75)

#### Parameters

##### out

[`LineWriter`](../interfaces/LineWriter.md)

##### flow

[`UserFlow`](../interfaces/UserFlow.md)

#### Returns

`Promise`\<`void`\>

#### Overrides

[`PuppeteerStringifyExtension`](PuppeteerStringifyExtension.md).[`afterAllSteps`](PuppeteerStringifyExtension.md#afterallsteps)

---

### afterEachStep()?

> `optional` **afterEachStep**(`out`, `step`, `flow?`): `Promise`\<`void`\>

Defined in: [StringifyExtension.ts:23](https://github.com/puppeteer/replay/blob/main/src/StringifyExtension.ts#L23)

#### Parameters

##### out

[`LineWriter`](../interfaces/LineWriter.md)

##### step

[`Step`](../type-aliases/Step.md)

##### flow?

[`UserFlow`](../interfaces/UserFlow.md)

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`PuppeteerStringifyExtension`](PuppeteerStringifyExtension.md).[`afterEachStep`](PuppeteerStringifyExtension.md#aftereachstep)

---

### beforeAllSteps()

> **beforeAllSteps**(`out`, `flow`): `Promise`\<`void`\>

Defined in: [lighthouse/LighthouseStringifyExtension.ts:19](https://github.com/puppeteer/replay/blob/main/src/lighthouse/LighthouseStringifyExtension.ts#L19)

#### Parameters

##### out

[`LineWriter`](../interfaces/LineWriter.md)

##### flow

[`UserFlow`](../interfaces/UserFlow.md)

#### Returns

`Promise`\<`void`\>

#### Overrides

[`PuppeteerStringifyExtension`](PuppeteerStringifyExtension.md).[`beforeAllSteps`](PuppeteerStringifyExtension.md#beforeallsteps)

---

### beforeEachStep()?

> `optional` **beforeEachStep**(`out`, `step`, `flow?`): `Promise`\<`void`\>

Defined in: [StringifyExtension.ts:13](https://github.com/puppeteer/replay/blob/main/src/StringifyExtension.ts#L13)

#### Parameters

##### out

[`LineWriter`](../interfaces/LineWriter.md)

##### step

[`Step`](../type-aliases/Step.md)

##### flow?

[`UserFlow`](../interfaces/UserFlow.md)

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`PuppeteerStringifyExtension`](PuppeteerStringifyExtension.md).[`beforeEachStep`](PuppeteerStringifyExtension.md#beforeeachstep)

---

### stringifyStep()

> **stringifyStep**(`out`, `step`, `flow`): `Promise`\<`void`\>

Defined in: [lighthouse/LighthouseStringifyExtension.ts:49](https://github.com/puppeteer/replay/blob/main/src/lighthouse/LighthouseStringifyExtension.ts#L49)

#### Parameters

##### out

[`LineWriter`](../interfaces/LineWriter.md)

##### step

[`Step`](../type-aliases/Step.md)

##### flow

[`UserFlow`](../interfaces/UserFlow.md)

#### Returns

`Promise`\<`void`\>

#### Overrides

[`PuppeteerStringifyExtension`](PuppeteerStringifyExtension.md).[`stringifyStep`](PuppeteerStringifyExtension.md#stringifystep)
