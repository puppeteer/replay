[**@puppeteer/replay**](../README.md)

---

[@puppeteer/replay](../README.md) / JSONStringifyExtension

# Class: JSONStringifyExtension

Defined in: [JSONStringifyExtension.ts:27](https://github.com/puppeteer/replay/blob/main/src/JSONStringifyExtension.ts#L27)

Stringifies a user flow to JSON with source maps.

You probably want to strip the source map because not all
parsers support comments in JSON.

## Extends

- [`StringifyExtension`](StringifyExtension.md)

## Constructors

### Constructor

> **new JSONStringifyExtension**(): `JSONStringifyExtension`

#### Returns

`JSONStringifyExtension`

#### Inherited from

[`StringifyExtension`](StringifyExtension.md).[`constructor`](StringifyExtension.md#constructor)

## Methods

### afterAllSteps()

> **afterAllSteps**(`out`): `Promise`\<`void`\>

Defined in: [JSONStringifyExtension.ts:42](https://github.com/puppeteer/replay/blob/main/src/JSONStringifyExtension.ts#L42)

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

[`StringifyExtension`](StringifyExtension.md).[`afterEachStep`](StringifyExtension.md#aftereachstep)

---

### beforeAllSteps()

> **beforeAllSteps**(`out`, `flow`): `Promise`\<`void`\>

Defined in: [JSONStringifyExtension.ts:28](https://github.com/puppeteer/replay/blob/main/src/JSONStringifyExtension.ts#L28)

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

[`StringifyExtension`](StringifyExtension.md).[`beforeEachStep`](StringifyExtension.md#beforeeachstep)

---

### stringifyStep()

> **stringifyStep**(`out`, `step`, `flow?`): `Promise`\<`void`\>

Defined in: [JSONStringifyExtension.ts:50](https://github.com/puppeteer/replay/blob/main/src/JSONStringifyExtension.ts#L50)

#### Parameters

##### out

[`LineWriter`](../interfaces/LineWriter.md)

##### step

[`Step`](../type-aliases/Step.md)

##### flow?

[`UserFlow`](../interfaces/UserFlow.md)

#### Returns

`Promise`\<`void`\>

#### Overrides

[`StringifyExtension`](StringifyExtension.md).[`stringifyStep`](StringifyExtension.md#stringifystep)
