[**@puppeteer/replay**](../README.md)

---

[@puppeteer/replay](../README.md) / LineWriter

# Interface: LineWriter

Defined in: [LineWriter.ts:17](https://github.com/puppeteer/replay/blob/main/src/LineWriter.ts#L17)

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

## Methods

### appendLine()

> **appendLine**(`line`): `LineWriter`

Defined in: [LineWriter.ts:18](https://github.com/puppeteer/replay/blob/main/src/LineWriter.ts#L18)

#### Parameters

##### line

`string`

#### Returns

`LineWriter`

---

### endBlock()

> **endBlock**(): `LineWriter`

Defined in: [LineWriter.ts:20](https://github.com/puppeteer/replay/blob/main/src/LineWriter.ts#L20)

#### Returns

`LineWriter`

---

### getIndent()

> **getIndent**(): `string`

Defined in: [LineWriter.ts:21](https://github.com/puppeteer/replay/blob/main/src/LineWriter.ts#L21)

#### Returns

`string`

---

### getSize()

> **getSize**(): `number`

Defined in: [LineWriter.ts:22](https://github.com/puppeteer/replay/blob/main/src/LineWriter.ts#L22)

#### Returns

`number`

---

### startBlock()

> **startBlock**(): `LineWriter`

Defined in: [LineWriter.ts:19](https://github.com/puppeteer/replay/blob/main/src/LineWriter.ts#L19)

#### Returns

`LineWriter`
