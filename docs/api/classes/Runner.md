[@puppeteer/replay](../README.md) / Runner

# Class: Runner

## Table of contents

### Methods

- [abort](Runner.md#abort)
- [run](Runner.md#run)
- [runStep](Runner.md#runstep)

## Methods

### abort

▸ **abort**(): `void`

#### Returns

`void`

#### Defined in

[Runner.ts:44](https://github.com/puppeteer/replay/blob/main/src/Runner.ts#L44)

---

### run

▸ **run**(): `Promise`<`boolean`\>

Run all the steps in the flow

#### Returns

`Promise`<`boolean`\>

whether all the steps are run or the execution is aborted

#### Defined in

[Runner.ts:56](https://github.com/puppeteer/replay/blob/main/src/Runner.ts#L56)

---

### runStep

▸ **runStep**(`step`): `Promise`<`void`\>

#### Parameters

| Name   | Type                                |
| :----- | :---------------------------------- |
| `step` | [`Step`](../modules/Schema.md#step) |

#### Returns

`Promise`<`void`\>

#### Defined in

[Runner.ts:48](https://github.com/puppeteer/replay/blob/main/src/Runner.ts#L48)
