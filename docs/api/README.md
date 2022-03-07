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

[SchemaUtils.ts:452](https://github.com/puppeteer/replay/blob/main/src/SchemaUtils.ts#L452)

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

[SchemaUtils.ts:380](https://github.com/puppeteer/replay/blob/main/src/SchemaUtils.ts#L380)

___

### stringify

▸ **stringify**(`flow`, `opts?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `flow` | [`UserFlow`](interfaces/Schema.UserFlow.md) |
| `opts?` | [`StringifyOptions`](interfaces/StringifyOptions.md) |

#### Returns

`Promise`<`string`\>

#### Defined in

[stringify.ts:27](https://github.com/puppeteer/replay/blob/main/src/stringify.ts#L27)
