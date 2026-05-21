[**@puppeteer/replay**](../README.md)

---

[@puppeteer/replay](../README.md) / StringifyExtension

# Class: StringifyExtension

Defined in: [StringifyExtension.ts:20](https://github.com/puppeteer/replay/blob/main/src/StringifyExtension.ts#L20)

## Extended by

- [`JSONStringifyExtension`](JSONStringifyExtension.md)
- [`PuppeteerStringifyExtension`](PuppeteerStringifyExtension.md)
- [`PuppeteerReplayStringifyExtension`](PuppeteerReplayStringifyExtension.md)

## Constructors

### Constructor

> **new StringifyExtension**(): `StringifyExtension`

#### Returns

`StringifyExtension`

## Methods

### afterAllSteps()?

> `optional` **afterAllSteps**(`out`, `flow`): `Promise`\<`void`\>

Defined in: [StringifyExtension.ts:22](https://github.com/puppeteer/replay/blob/main/src/StringifyExtension.ts#L22)

#### Parameters

##### out

[`LineWriter`](../interfaces/LineWriter.md)

##### flow

[`UserFlow`](../interfaces/UserFlow.md)

#### Returns

`Promise`\<`void`\>

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

---

### beforeAllSteps()?

> `optional` **beforeAllSteps**(`out`, `flow`): `Promise`\<`void`\>

Defined in: [StringifyExtension.ts:21](https://github.com/puppeteer/replay/blob/main/src/StringifyExtension.ts#L21)

#### Parameters

##### out

[`LineWriter`](../interfaces/LineWriter.md)

##### flow

[`UserFlow`](../interfaces/UserFlow.md)

#### Returns

`Promise`\<`void`\>

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

---

### stringifyStep()

> **stringifyStep**(`out`, `step`, `flow?`): `Promise`\<`void`\>

Defined in: [StringifyExtension.ts:28](https://github.com/puppeteer/replay/blob/main/src/StringifyExtension.ts#L28)

#### Parameters

##### out

[`LineWriter`](../interfaces/LineWriter.md)

##### step

[`Step`](../type-aliases/Step.md)

##### flow?

[`UserFlow`](../interfaces/UserFlow.md)

#### Returns

`Promise`\<`void`\>
