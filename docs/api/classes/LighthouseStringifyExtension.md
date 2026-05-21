[**@puppeteer/replay**](../README.md)

---

[@puppeteer/replay](../README.md) / LighthouseStringifyExtension

# Class: LighthouseStringifyExtension

Defined in: [lighthouse/LighthouseStringifyExtension.ts:26](https://github.com/puppeteer/replay/blob/main/src/lighthouse/LighthouseStringifyExtension.ts#L26)

## Extends

- [`PuppeteerStringifyExtension`](PuppeteerStringifyExtension.md)

## Constructors

### Constructor

> **new LighthouseStringifyExtension**(`targetBrowser?`): `LighthouseStringifyExtension`

Defined in: [PuppeteerStringifyExtension.ts:53](https://github.com/puppeteer/replay/blob/main/src/PuppeteerStringifyExtension.ts#L53)

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

Defined in: [lighthouse/LighthouseStringifyExtension.ts:85](https://github.com/puppeteer/replay/blob/main/src/lighthouse/LighthouseStringifyExtension.ts#L85)

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

Defined in: [StringifyExtension.ts:33](https://github.com/puppeteer/replay/blob/main/src/StringifyExtension.ts#L33)

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

Defined in: [lighthouse/LighthouseStringifyExtension.ts:29](https://github.com/puppeteer/replay/blob/main/src/lighthouse/LighthouseStringifyExtension.ts#L29)

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

[`PuppeteerStringifyExtension`](PuppeteerStringifyExtension.md).[`beforeEachStep`](PuppeteerStringifyExtension.md#beforeeachstep)

---

### stringifyStep()

> **stringifyStep**(`out`, `step`, `flow`): `Promise`\<`void`\>

Defined in: [lighthouse/LighthouseStringifyExtension.ts:59](https://github.com/puppeteer/replay/blob/main/src/lighthouse/LighthouseStringifyExtension.ts#L59)

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
