[**@puppeteer/replay**](../README.md)

---

[@puppeteer/replay](../README.md) / StringifyExtension

# Class: StringifyExtension

Defined in: [StringifyExtension.ts:10](https://github.com/puppeteer/replay/blob/main/src/StringifyExtension.ts#L10)

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

Defined in: [StringifyExtension.ts:12](https://github.com/puppeteer/replay/blob/main/src/StringifyExtension.ts#L12)

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

### beforeAllSteps()?

> `optional` **beforeAllSteps**(`out`, `flow`): `Promise`\<`void`\>

Defined in: [StringifyExtension.ts:11](https://github.com/puppeteer/replay/blob/main/src/StringifyExtension.ts#L11)

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

---

### stringifyStep()

> **stringifyStep**(`out`, `step`, `flow?`): `Promise`\<`void`\>

Defined in: [StringifyExtension.ts:18](https://github.com/puppeteer/replay/blob/main/src/StringifyExtension.ts#L18)

#### Parameters

##### out

[`LineWriter`](../interfaces/LineWriter.md)

##### step

[`Step`](../type-aliases/Step.md)

##### flow?

[`UserFlow`](../interfaces/UserFlow.md)

#### Returns

`Promise`\<`void`\>
