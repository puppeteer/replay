[@puppeteer/replay](../README.md) / PuppeteerStringifyExtension

# Class: PuppeteerStringifyExtension

## Hierarchy

- [`StringifyExtension`](StringifyExtension.md)

  ↳ **`PuppeteerStringifyExtension`**

  ↳↳ [`LighthouseStringifyExtension`](LighthouseStringifyExtension.md)

## Table of contents

### Constructors

- [constructor](PuppeteerStringifyExtension.md#constructor)

### Methods

- [afterAllSteps](PuppeteerStringifyExtension.md#afterallsteps)
- [afterEachStep](PuppeteerStringifyExtension.md#aftereachstep)
- [beforeAllSteps](PuppeteerStringifyExtension.md#beforeallsteps)
- [beforeEachStep](PuppeteerStringifyExtension.md#beforeeachstep)
- [stringifyStep](PuppeteerStringifyExtension.md#stringifystep)

## Constructors

### constructor

• **new PuppeteerStringifyExtension**(`targetBrowser?`): [`PuppeteerStringifyExtension`](PuppeteerStringifyExtension.md)

#### Parameters

| Name            | Type            | Default value |
| :-------------- | :-------------- | :------------ |
| `targetBrowser` | `TargetBrowser` | `'chrome'`    |

#### Returns

[`PuppeteerStringifyExtension`](PuppeteerStringifyExtension.md)

#### Overrides

[StringifyExtension](StringifyExtension.md).[constructor](StringifyExtension.md#constructor)

#### Defined in

[PuppeteerStringifyExtension.ts:53](https://github.com/puppeteer/replay/blob/main/src/PuppeteerStringifyExtension.ts#L53)

## Methods

### afterAllSteps

▸ **afterAllSteps**(`out`, `flow`): `Promise`\<`void`\>

#### Parameters

| Name   | Type                                           |
| :----- | :--------------------------------------------- |
| `out`  | [`LineWriter`](../interfaces/LineWriter.md)    |
| `flow` | [`UserFlow`](../interfaces/Schema.UserFlow.md) |

#### Returns

`Promise`\<`void`\>

#### Overrides

[StringifyExtension](StringifyExtension.md).[afterAllSteps](StringifyExtension.md#afterallsteps)

#### Defined in

[PuppeteerStringifyExtension.ts:78](https://github.com/puppeteer/replay/blob/main/src/PuppeteerStringifyExtension.ts#L78)

---

### afterEachStep

▸ **afterEachStep**(`out`, `step`, `flow?`): `Promise`\<`void`\>

#### Parameters

| Name    | Type                                           |
| :------ | :--------------------------------------------- |
| `out`   | [`LineWriter`](../interfaces/LineWriter.md)    |
| `step`  | [`Step`](../modules/Schema.md#step)            |
| `flow?` | [`UserFlow`](../interfaces/Schema.UserFlow.md) |

#### Returns

`Promise`\<`void`\>

#### Inherited from

[StringifyExtension](StringifyExtension.md).[afterEachStep](StringifyExtension.md#aftereachstep)

#### Defined in

[StringifyExtension.ts:33](https://github.com/puppeteer/replay/blob/main/src/StringifyExtension.ts#L33)

---

### beforeAllSteps

▸ **beforeAllSteps**(`out`, `flow`): `Promise`\<`void`\>

#### Parameters

| Name   | Type                                           |
| :----- | :--------------------------------------------- |
| `out`  | [`LineWriter`](../interfaces/LineWriter.md)    |
| `flow` | [`UserFlow`](../interfaces/Schema.UserFlow.md) |

#### Returns

`Promise`\<`void`\>

#### Overrides

[StringifyExtension](StringifyExtension.md).[beforeAllSteps](StringifyExtension.md#beforeallsteps)

#### Defined in

[PuppeteerStringifyExtension.ts:58](https://github.com/puppeteer/replay/blob/main/src/PuppeteerStringifyExtension.ts#L58)

---

### beforeEachStep

▸ **beforeEachStep**(`out`, `step`, `flow?`): `Promise`\<`void`\>

#### Parameters

| Name    | Type                                           |
| :------ | :--------------------------------------------- |
| `out`   | [`LineWriter`](../interfaces/LineWriter.md)    |
| `step`  | [`Step`](../modules/Schema.md#step)            |
| `flow?` | [`UserFlow`](../interfaces/Schema.UserFlow.md) |

#### Returns

`Promise`\<`void`\>

#### Inherited from

[StringifyExtension](StringifyExtension.md).[beforeEachStep](StringifyExtension.md#beforeeachstep)

#### Defined in

[StringifyExtension.ts:23](https://github.com/puppeteer/replay/blob/main/src/StringifyExtension.ts#L23)

---

### stringifyStep

▸ **stringifyStep**(`out`, `step`, `flow`): `Promise`\<`void`\>

#### Parameters

| Name   | Type                                           |
| :----- | :--------------------------------------------- |
| `out`  | [`LineWriter`](../interfaces/LineWriter.md)    |
| `step` | [`Step`](../modules/Schema.md#step)            |
| `flow` | [`UserFlow`](../interfaces/Schema.UserFlow.md) |

#### Returns

`Promise`\<`void`\>

#### Overrides

[StringifyExtension](StringifyExtension.md).[stringifyStep](StringifyExtension.md#stringifystep)

#### Defined in

[PuppeteerStringifyExtension.ts:93](https://github.com/puppeteer/replay/blob/main/src/PuppeteerStringifyExtension.ts#L93)
