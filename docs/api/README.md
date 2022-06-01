@puppeteer/replay

# @puppeteer/replay

## Table of contents

### Namespaces

- [Schema](modules/Schema.md)

### Classes

- [PuppeteerRunnerExtension](classes/PuppeteerRunnerExtension.md)
- [PuppeteerStringifyExtension](classes/PuppeteerStringifyExtension.md)
- [Runner](classes/Runner.md)
- [RunnerExtension](classes/RunnerExtension.md)
- [StringifyExtension](classes/StringifyExtension.md)

### Interfaces

- [LineWriter](interfaces/LineWriter.md)
- [StringifyOptions](interfaces/StringifyOptions.md)

### Functions

- [createRunner](README.md#createrunner)
- [parse](README.md#parse)
- [parseStep](README.md#parsestep)
- [stringify](README.md#stringify)
- [stringifyStep](README.md#stringifystep)

## Functions

### createRunner

▸ **createRunner**(`flow`, `extension?`): `Promise`<[`Runner`](classes/Runner.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `flow` | [`UserFlow`](interfaces/Schema.UserFlow.md) |
| `extension?` | [`RunnerExtension`](classes/RunnerExtension.md) |

#### Returns

`Promise`<[`Runner`](classes/Runner.md)\>

#### Defined in

[Runner.ts:71](https://github.com/puppeteer/replay/blob/main/src/Runner.ts#L71)

___

### parse

▸ **parse**(`data`): [`UserFlow`](interfaces/Schema.UserFlow.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `unknown` |

#### Returns

[`UserFlow`](interfaces/Schema.UserFlow.md)

#### Defined in

[SchemaUtils.ts:518](https://github.com/puppeteer/replay/blob/main/src/SchemaUtils.ts#L518)

___

### parseStep

▸ **parseStep**(`step`, `idx?`): [`Step`](modules/Schema.md#step)

#### Parameters

| Name | Type |
| :------ | :------ |
| `step` | `unknown` |
| `idx?` | `number` |

#### Returns

[`Step`](modules/Schema.md#step)

#### Defined in

[SchemaUtils.ts:444](https://github.com/puppeteer/replay/blob/main/src/SchemaUtils.ts#L444)

___

### stringify

▸ **stringify**(`flow`, `opts?`): `Promise`<`string`\>

Stringifes an entire recording. The following hooks are invoked with the `flow` parameter containing the entire flow:
- `beforeAllSteps` (once)
- `beforeEachStep` (per step)
- `stringifyStep` (per step)
- `afterEachStep` (per step)
- `afterAllSteps` (once)

#### Parameters

| Name | Type |
| :------ | :------ |
| `flow` | [`UserFlow`](interfaces/Schema.UserFlow.md) |
| `opts?` | [`StringifyOptions`](interfaces/StringifyOptions.md) |

#### Returns

`Promise`<`string`\>

#### Defined in

[stringify.ts:35](https://github.com/puppeteer/replay/blob/main/src/stringify.ts#L35)

___

### stringifyStep

▸ **stringifyStep**(`step`, `opts?`): `Promise`<`string`\>

Stringifes a single step. Only the following hooks are invoked with the `flow` parameter as undefined:
- `beforeEachStep`
- `stringifyStep`
- `afterEachStep`

#### Parameters

| Name | Type |
| :------ | :------ |
| `step` | [`Step`](modules/Schema.md#step) |
| `opts?` | [`StringifyOptions`](interfaces/StringifyOptions.md) |

#### Returns

`Promise`<`string`\>

#### Defined in

[stringify.ts:69](https://github.com/puppeteer/replay/blob/main/src/stringify.ts#L69)
