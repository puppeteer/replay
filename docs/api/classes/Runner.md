[@puppeteer/replay](../README.md) / Runner

# Class: Runner

## Table of contents

### Accessors

- [flow](Runner.md#flow)

### Methods

- [abort](Runner.md#abort)
- [run](Runner.md#run)
- [runAfterAllSteps](Runner.md#runafterallsteps)
- [runBeforeAllSteps](Runner.md#runbeforeallsteps)
- [runStep](Runner.md#runstep)

## Accessors

### flow

• `set` **flow**(`flow`): `void`

#### Parameters

| Name   | Type                                           |
| :----- | :--------------------------------------------- |
| `flow` | [`UserFlow`](../interfaces/Schema.UserFlow.md) |

#### Returns

`void`

#### Defined in

[Runner.ts:47](https://github.com/puppeteer/replay/blob/main/src/Runner.ts#L47)

## Methods

### abort

▸ **abort**(): `void`

#### Returns

`void`

#### Defined in

[Runner.ts:43](https://github.com/puppeteer/replay/blob/main/src/Runner.ts#L43)

---

### run

▸ **run**(): `Promise`<`boolean`\>

Run all the steps in the flow

#### Returns

`Promise`<`boolean`\>

whether all the steps are run or the execution is aborted

#### Defined in

[Runner.ts:71](https://github.com/puppeteer/replay/blob/main/src/Runner.ts#L71)

---

### runAfterAllSteps

▸ **runAfterAllSteps**(`flow?`): `Promise`<`void`\>

#### Parameters

| Name    | Type                                           |
| :------ | :--------------------------------------------- |
| `flow?` | [`UserFlow`](../interfaces/Schema.UserFlow.md) |

#### Returns

`Promise`<`void`\>

#### Defined in

[Runner.ts:55](https://github.com/puppeteer/replay/blob/main/src/Runner.ts#L55)

---

### runBeforeAllSteps

▸ **runBeforeAllSteps**(`flow?`): `Promise`<`void`\>

#### Parameters

| Name    | Type                                           |
| :------ | :--------------------------------------------- |
| `flow?` | [`UserFlow`](../interfaces/Schema.UserFlow.md) |

#### Returns

`Promise`<`void`\>

#### Defined in

[Runner.ts:51](https://github.com/puppeteer/replay/blob/main/src/Runner.ts#L51)

---

### runStep

▸ **runStep**(`step`): `Promise`<`void`\>

Runs the provided `step` with `beforeEachStep` and `afterEachStep` hooks.
Parameters from the `flow` apply if the `flow` is set.

#### Parameters

| Name   | Type                                |
| :----- | :---------------------------------- |
| `step` | [`Step`](../modules/Schema.md#step) |

#### Returns

`Promise`<`void`\>

#### Defined in

[Runner.ts:63](https://github.com/puppeteer/replay/blob/main/src/Runner.ts#L63)
