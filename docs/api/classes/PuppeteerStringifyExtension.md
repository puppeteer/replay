[**@puppeteer/replay**](../README.md)

---

[@puppeteer/replay](../README.md) / PuppeteerStringifyExtension

# Class: PuppeteerStringifyExtension

Defined in: [PuppeteerStringifyExtension.ts:39](https://github.com/puppeteer/replay/blob/main/src/PuppeteerStringifyExtension.ts#L39)

## Extends

- [`StringifyExtension`](StringifyExtension.md)

## Extended by

- [`LighthouseStringifyExtension`](LighthouseStringifyExtension.md)

## Constructors

### Constructor

> **new PuppeteerStringifyExtension**(`targetBrowser?`): `PuppeteerStringifyExtension`

Defined in: [PuppeteerStringifyExtension.ts:43](https://github.com/puppeteer/replay/blob/main/src/PuppeteerStringifyExtension.ts#L43)

#### Parameters

##### targetBrowser?

`TargetBrowser` = `'chrome'`

#### Returns

`PuppeteerStringifyExtension`

#### Overrides

[`StringifyExtension`](StringifyExtension.md).[`constructor`](StringifyExtension.md#constructor)

## Methods

### afterAllSteps()

> **afterAllSteps**(`out`, `flow`): `Promise`\<`void`\>

Defined in: [PuppeteerStringifyExtension.ts:65](https://github.com/puppeteer/replay/blob/main/src/PuppeteerStringifyExtension.ts#L65)

#### Parameters

##### out

[`LineWriter`](../interfaces/LineWriter.md)

##### flow

[`UserFlow`](../interfaces/UserFlow.md)

#### Returns

`Promise`\<`void`\>

#### Overrides

[`StringifyExtension`](StringifyExtension.md).[`afterAllSteps`](StringifyExtension.md#afterallsteps)

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

[`StringifyExtension`](StringifyExtension.md).[`afterEachStep`](StringifyExtension.md#aftereachstep)

---

### beforeAllSteps()

> **beforeAllSteps**(`out`, `flow`): `Promise`\<`void`\>

Defined in: [PuppeteerStringifyExtension.ts:48](https://github.com/puppeteer/replay/blob/main/src/PuppeteerStringifyExtension.ts#L48)

#### Parameters

##### out

[`LineWriter`](../interfaces/LineWriter.md)

##### flow

[`UserFlow`](../interfaces/UserFlow.md)

#### Returns

`Promise`\<`void`\>

#### Overrides

[`StringifyExtension`](StringifyExtension.md).[`beforeAllSteps`](StringifyExtension.md#beforeallsteps)

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

[`StringifyExtension`](StringifyExtension.md).[`beforeEachStep`](StringifyExtension.md#beforeeachstep)

---

### stringifyStep()

> **stringifyStep**(`out`, `step`, `flow`): `Promise`\<`void`\>

Defined in: [PuppeteerStringifyExtension.ts:76](https://github.com/puppeteer/replay/blob/main/src/PuppeteerStringifyExtension.ts#L76)

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

[`StringifyExtension`](StringifyExtension.md).[`stringifyStep`](StringifyExtension.md#stringifystep)
