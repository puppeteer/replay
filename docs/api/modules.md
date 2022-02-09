[@puppeteer/replay](README.md) / Exports

# @puppeteer/replay

## Table of contents

### Namespaces

- [Schema](modules/Schema.md)

### Classes

- [PuppeteerRunnerExtension](classes/PuppeteerRunnerExtension.md)
- [PuppeteerStringifyExtension](classes/PuppeteerStringifyExtension.md)
- [Runner](classes/Runner.md)

### Interfaces

- [LineWriter](interfaces/LineWriter.md)
- [RunnerExtension](interfaces/RunnerExtension.md)
- [StringifyExtension](interfaces/StringifyExtension.md)
- [StringifyOptions](interfaces/StringifyOptions.md)

### Functions

- [createRunner](modules.md#createrunner)
- [parse](modules.md#parse)
- [stringify](modules.md#stringify)

## Functions

### createRunner

▸ **createRunner**(`flow`, `extension?`): `Promise`<[`Runner`](classes/Runner.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `flow` | [`UserFlow`](interfaces/Schema.UserFlow.md) |
| `extension?` | [`RunnerExtension`](interfaces/RunnerExtension.md) |

#### Returns

`Promise`<[`Runner`](classes/Runner.md)\>

#### Defined in

[Runner.ts:68](https://github.com/puppeteer/replay/blob/main/src/Runner.ts#L68)

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

[SchemaUtils.ts:464](https://github.com/puppeteer/replay/blob/main/src/SchemaUtils.ts#L464)

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
