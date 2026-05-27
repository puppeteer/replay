[**@puppeteer/replay**](../README.md)

---

[@puppeteer/replay](../README.md) / Runner

# Class: Runner

Defined in: [Runner.ts:21](https://github.com/puppeteer/replay/blob/main/src/Runner.ts#L21)

## Accessors

### flow

#### Set Signature

> **set** **flow**(`flow`): `void`

Defined in: [Runner.ts:37](https://github.com/puppeteer/replay/blob/main/src/Runner.ts#L37)

##### Parameters

###### flow

[`UserFlow`](../interfaces/UserFlow.md)

##### Returns

`void`

## Methods

### abort()

> **abort**(): `void`

Defined in: [Runner.ts:33](https://github.com/puppeteer/replay/blob/main/src/Runner.ts#L33)

#### Returns

`void`

---

### run()

> **run**(): `Promise`\<`boolean`\>

Defined in: [Runner.ts:61](https://github.com/puppeteer/replay/blob/main/src/Runner.ts#L61)

Run all the steps in the flow

#### Returns

`Promise`\<`boolean`\>

whether all the steps are run or the execution is aborted

---

### runAfterAllSteps()

> **runAfterAllSteps**(`flow?`): `Promise`\<`void`\>

Defined in: [Runner.ts:45](https://github.com/puppeteer/replay/blob/main/src/Runner.ts#L45)

#### Parameters

##### flow?

[`UserFlow`](../interfaces/UserFlow.md)

#### Returns

`Promise`\<`void`\>

---

### runBeforeAllSteps()

> **runBeforeAllSteps**(`flow?`): `Promise`\<`void`\>

Defined in: [Runner.ts:41](https://github.com/puppeteer/replay/blob/main/src/Runner.ts#L41)

#### Parameters

##### flow?

[`UserFlow`](../interfaces/UserFlow.md)

#### Returns

`Promise`\<`void`\>

---

### runStep()

> **runStep**(`step`): `Promise`\<`void`\>

Defined in: [Runner.ts:53](https://github.com/puppeteer/replay/blob/main/src/Runner.ts#L53)

Runs the provided `step` with `beforeEachStep` and `afterEachStep` hooks.
Parameters from the `flow` apply if the `flow` is set.

#### Parameters

##### step

[`Step`](../type-aliases/Step.md)

#### Returns

`Promise`\<`void`\>
