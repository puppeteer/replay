[**@puppeteer/replay**](../README.md)

---

[@puppeteer/replay](../README.md) / PuppeteerReplayStringifyExtension

# Class: PuppeteerReplayStringifyExtension

Defined in: [PuppeteerReplayStringifyExtension.ts:15](https://github.com/puppeteer/replay/blob/main/src/PuppeteerReplayStringifyExtension.ts#L15)

Stringifies a user flow to a script that uses @puppeteer/replay's own API.

## Extends

- [`StringifyExtension`](StringifyExtension.md)

## Constructors

### Constructor

> **new PuppeteerReplayStringifyExtension**(): `PuppeteerReplayStringifyExtension`

#### Returns

`PuppeteerReplayStringifyExtension`

#### Inherited from

[`StringifyExtension`](StringifyExtension.md).[`constructor`](StringifyExtension.md#constructor)

## Methods

### afterAllSteps()

> **afterAllSteps**(`out`): `Promise`\<`void`\>

Defined in: [PuppeteerReplayStringifyExtension.ts:27](https://github.com/puppeteer/replay/blob/main/src/PuppeteerReplayStringifyExtension.ts#L27)

#### Parameters

##### out

[`LineWriter`](../interfaces/LineWriter.md)

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

> **beforeAllSteps**(`out`): `Promise`\<`void`\>

Defined in: [PuppeteerReplayStringifyExtension.ts:16](https://github.com/puppeteer/replay/blob/main/src/PuppeteerReplayStringifyExtension.ts#L16)

#### Parameters

##### out

[`LineWriter`](../interfaces/LineWriter.md)

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

> **stringifyStep**(`out`, `step`): `Promise`\<`void`\>

Defined in: [PuppeteerReplayStringifyExtension.ts:44](https://github.com/puppeteer/replay/blob/main/src/PuppeteerReplayStringifyExtension.ts#L44)

#### Parameters

##### out

[`LineWriter`](../interfaces/LineWriter.md)

##### step

[`Step`](../type-aliases/Step.md)

#### Returns

`Promise`\<`void`\>

#### Overrides

[`StringifyExtension`](StringifyExtension.md).[`stringifyStep`](StringifyExtension.md#stringifystep)
