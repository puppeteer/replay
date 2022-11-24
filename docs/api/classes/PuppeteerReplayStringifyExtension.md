[@puppeteer/replay](../README.md) / PuppeteerReplayStringifyExtension

# Class: PuppeteerReplayStringifyExtension

Stringifies a user flow to a script that uses @puppeteer/replay's own API.

## Hierarchy

- [`StringifyExtension`](StringifyExtension.md)

  ↳ **`PuppeteerReplayStringifyExtension`**

## Table of contents

### Constructors

- [constructor](PuppeteerReplayStringifyExtension.md#constructor)

### Methods

- [afterAllSteps](PuppeteerReplayStringifyExtension.md#afterallsteps)
- [afterEachStep](PuppeteerReplayStringifyExtension.md#aftereachstep)
- [beforeAllSteps](PuppeteerReplayStringifyExtension.md#beforeallsteps)
- [beforeEachStep](PuppeteerReplayStringifyExtension.md#beforeeachstep)
- [stringifyStep](PuppeteerReplayStringifyExtension.md#stringifystep)

## Constructors

### constructor

• **new PuppeteerReplayStringifyExtension**()

#### Inherited from

[StringifyExtension](StringifyExtension.md).[constructor](StringifyExtension.md#constructor)

## Methods

### afterAllSteps

▸ **afterAllSteps**(`out`): `Promise`<`void`\>

#### Parameters

| Name  | Type                                        |
| :---- | :------------------------------------------ |
| `out` | [`LineWriter`](../interfaces/LineWriter.md) |

#### Returns

`Promise`<`void`\>

#### Overrides

[StringifyExtension](StringifyExtension.md).[afterAllSteps](StringifyExtension.md#afterallsteps)

#### Defined in

[PuppeteerReplayStringifyExtension.ts:37](https://github.com/puppeteer/replay/blob/main/src/PuppeteerReplayStringifyExtension.ts#L37)

---

### afterEachStep

▸ `Optional` **afterEachStep**(`out`, `step`, `flow?`): `Promise`<`void`\>

#### Parameters

| Name    | Type                                           |
| :------ | :--------------------------------------------- |
| `out`   | [`LineWriter`](../interfaces/LineWriter.md)    |
| `step`  | [`Step`](../modules/Schema.md#step)            |
| `flow?` | [`UserFlow`](../interfaces/Schema.UserFlow.md) |

#### Returns

`Promise`<`void`\>

#### Inherited from

[StringifyExtension](StringifyExtension.md).[afterEachStep](StringifyExtension.md#aftereachstep)

#### Defined in

[StringifyExtension.ts:33](https://github.com/puppeteer/replay/blob/main/src/StringifyExtension.ts#L33)

---

### beforeAllSteps

▸ **beforeAllSteps**(`out`): `Promise`<`void`\>

#### Parameters

| Name  | Type                                        |
| :---- | :------------------------------------------ |
| `out` | [`LineWriter`](../interfaces/LineWriter.md) |

#### Returns

`Promise`<`void`\>

#### Overrides

[StringifyExtension](StringifyExtension.md).[beforeAllSteps](StringifyExtension.md#beforeallsteps)

#### Defined in

[PuppeteerReplayStringifyExtension.ts:26](https://github.com/puppeteer/replay/blob/main/src/PuppeteerReplayStringifyExtension.ts#L26)

---

### beforeEachStep

▸ `Optional` **beforeEachStep**(`out`, `step`, `flow?`): `Promise`<`void`\>

#### Parameters

| Name    | Type                                           |
| :------ | :--------------------------------------------- |
| `out`   | [`LineWriter`](../interfaces/LineWriter.md)    |
| `step`  | [`Step`](../modules/Schema.md#step)            |
| `flow?` | [`UserFlow`](../interfaces/Schema.UserFlow.md) |

#### Returns

`Promise`<`void`\>

#### Inherited from

[StringifyExtension](StringifyExtension.md).[beforeEachStep](StringifyExtension.md#beforeeachstep)

#### Defined in

[StringifyExtension.ts:23](https://github.com/puppeteer/replay/blob/main/src/StringifyExtension.ts#L23)

---

### stringifyStep

▸ **stringifyStep**(`out`, `step`): `Promise`<`void`\>

#### Parameters

| Name   | Type                                        |
| :----- | :------------------------------------------ |
| `out`  | [`LineWriter`](../interfaces/LineWriter.md) |
| `step` | [`Step`](../modules/Schema.md#step)         |

#### Returns

`Promise`<`void`\>

#### Overrides

[StringifyExtension](StringifyExtension.md).[stringifyStep](StringifyExtension.md#stringifystep)

#### Defined in

[PuppeteerReplayStringifyExtension.ts:54](https://github.com/puppeteer/replay/blob/main/src/PuppeteerReplayStringifyExtension.ts#L54)
