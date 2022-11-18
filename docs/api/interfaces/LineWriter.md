[@puppeteer/replay](../README.md) / LineWriter

# Interface: LineWriter

Copyright 2022 Google LLC

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    https://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

## Table of contents

### Methods

- [appendLine](LineWriter.md#appendline)
- [endBlock](LineWriter.md#endblock)
- [getIndent](LineWriter.md#getindent)
- [getSize](LineWriter.md#getsize)
- [startBlock](LineWriter.md#startblock)

## Methods

### appendLine

▸ **appendLine**(`line`): [`LineWriter`](LineWriter.md)

#### Parameters

| Name   | Type     |
| :----- | :------- |
| `line` | `string` |

#### Returns

[`LineWriter`](LineWriter.md)

#### Defined in

[LineWriter.ts:18](https://github.com/puppeteer/replay/blob/main/src/LineWriter.ts#L18)

---

### endBlock

▸ **endBlock**(): [`LineWriter`](LineWriter.md)

#### Returns

[`LineWriter`](LineWriter.md)

#### Defined in

[LineWriter.ts:20](https://github.com/puppeteer/replay/blob/main/src/LineWriter.ts#L20)

---

### getIndent

▸ **getIndent**(): `string`

#### Returns

`string`

#### Defined in

[LineWriter.ts:21](https://github.com/puppeteer/replay/blob/main/src/LineWriter.ts#L21)

---

### getSize

▸ **getSize**(): `number`

#### Returns

`number`

#### Defined in

[LineWriter.ts:22](https://github.com/puppeteer/replay/blob/main/src/LineWriter.ts#L22)

---

### startBlock

▸ **startBlock**(): [`LineWriter`](LineWriter.md)

#### Returns

[`LineWriter`](LineWriter.md)

#### Defined in

[LineWriter.ts:19](https://github.com/puppeteer/replay/blob/main/src/LineWriter.ts#L19)
