[@puppeteer/replay](../README.md) / LighthouseStringifyExtension

# Class: LighthouseStringifyExtension

## Hierarchy

- [`PuppeteerStringifyExtension`](PuppeteerStringifyExtension.md)

  ↳ **`LighthouseStringifyExtension`**

## Table of contents

### Constructors

- [constructor](LighthouseStringifyExtension.md#constructor)

### Methods

- [afterAllSteps](LighthouseStringifyExtension.md#afterallsteps)
- [afterEachStep](LighthouseStringifyExtension.md#aftereachstep)
- [beforeAllSteps](LighthouseStringifyExtension.md#beforeallsteps)
- [beforeEachStep](LighthouseStringifyExtension.md#beforeeachstep)
- [stringifyStep](LighthouseStringifyExtension.md#stringifystep)

## Constructors

### constructor

• **new LighthouseStringifyExtension**()

#### Inherited from

[PuppeteerStringifyExtension](PuppeteerStringifyExtension.md).[constructor](PuppeteerStringifyExtension.md#constructor)

## Methods

### afterAllSteps

▸ **afterAllSteps**(`out`, `flow`): `Promise`<`void`\>

#### Parameters

| Name   | Type                                           |
| :----- | :--------------------------------------------- |
| `out`  | [`LineWriter`](../interfaces/LineWriter.md)    |
| `flow` | [`UserFlow`](../interfaces/Schema.UserFlow.md) |

#### Returns

`Promise`<`void`\>

#### Overrides

[PuppeteerStringifyExtension](PuppeteerStringifyExtension.md).[afterAllSteps](PuppeteerStringifyExtension.md#afterallsteps)

#### Defined in

[lighthouse/LighthouseStringifyExtension.ts:84](https://github.com/puppeteer/replay/blob/main/src/lighthouse/LighthouseStringifyExtension.ts#L84)

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

[PuppeteerStringifyExtension](PuppeteerStringifyExtension.md).[afterEachStep](PuppeteerStringifyExtension.md#aftereachstep)

#### Defined in

[StringifyExtension.ts:33](https://github.com/puppeteer/replay/blob/main/src/StringifyExtension.ts#L33)

---

### beforeAllSteps

▸ **beforeAllSteps**(`out`, `flow`): `Promise`<`void`\>

#### Parameters

| Name   | Type                                           |
| :----- | :--------------------------------------------- |
| `out`  | [`LineWriter`](../interfaces/LineWriter.md)    |
| `flow` | [`UserFlow`](../interfaces/Schema.UserFlow.md) |

#### Returns

`Promise`<`void`\>

#### Overrides

[PuppeteerStringifyExtension](PuppeteerStringifyExtension.md).[beforeAllSteps](PuppeteerStringifyExtension.md#beforeallsteps)

#### Defined in

[lighthouse/LighthouseStringifyExtension.ts:28](https://github.com/puppeteer/replay/blob/main/src/lighthouse/LighthouseStringifyExtension.ts#L28)

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

[PuppeteerStringifyExtension](PuppeteerStringifyExtension.md).[beforeEachStep](PuppeteerStringifyExtension.md#beforeeachstep)

#### Defined in

[StringifyExtension.ts:23](https://github.com/puppeteer/replay/blob/main/src/StringifyExtension.ts#L23)

---

### stringifyStep

▸ **stringifyStep**(`out`, `step`, `flow`): `Promise`<`void`\>

#### Parameters

| Name   | Type                                           |
| :----- | :--------------------------------------------- |
| `out`  | [`LineWriter`](../interfaces/LineWriter.md)    |
| `step` | [`Step`](../modules/Schema.md#step)            |
| `flow` | [`UserFlow`](../interfaces/Schema.UserFlow.md) |

#### Returns

`Promise`<`void`\>

#### Overrides

[PuppeteerStringifyExtension](PuppeteerStringifyExtension.md).[stringifyStep](PuppeteerStringifyExtension.md#stringifystep)

#### Defined in

[lighthouse/LighthouseStringifyExtension.ts:58](https://github.com/puppeteer/replay/blob/main/src/lighthouse/LighthouseStringifyExtension.ts#L58)
