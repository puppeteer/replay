[**@puppeteer/replay**](../README.md)

---

[@puppeteer/replay](../README.md) / Runner

# Class: Runner

Defined in: [Runner.ts:31](https://github.com/puppeteer/replay/blob/main/src/Runner.ts#L31)

## Accessors

### flow

#### Set Signature

> **set** **flow**(`flow`): `void`

Defined in: [Runner.ts:47](https://github.com/puppeteer/replay/blob/main/src/Runner.ts#L47)

##### Parameters

###### flow

[`UserFlow`](../interfaces/UserFlow.md)

##### Returns

`void`

## Methods

### abort()

> **abort**(): `void`

Defined in: [Runner.ts:43](https://github.com/puppeteer/replay/blob/main/src/Runner.ts#L43)

#### Returns

`void`

---

### run()

> **run**(): `Promise`\<`boolean`\>

Defined in: [Runner.ts:71](https://github.com/puppeteer/replay/blob/main/src/Runner.ts#L71)

Run all the steps in the flow

#### Returns

`Promise`\<`boolean`\>

whether all the steps are run or the execution is aborted

---

### runAfterAllSteps()

> **runAfterAllSteps**(`flow?`): `Promise`\<`void`\>

Defined in: [Runner.ts:55](https://github.com/puppeteer/replay/blob/main/src/Runner.ts#L55)

#### Parameters

##### flow?

[`UserFlow`](../interfaces/UserFlow.md)

#### Returns

`Promise`\<`void`\>

---

### runBeforeAllSteps()

> **runBeforeAllSteps**(`flow?`): `Promise`\<`void`\>

Defined in: [Runner.ts:51](https://github.com/puppeteer/replay/blob/main/src/Runner.ts#L51)

#### Parameters

##### flow?

[`UserFlow`](../interfaces/UserFlow.md)

#### Returns

`Promise`\<`void`\>

---

### runStep()

> **runStep**(`step`): `Promise`\<`void`\>

Defined in: [Runner.ts:63](https://github.com/puppeteer/replay/blob/main/src/Runner.ts#L63)

Runs the provided `step` with `beforeEachStep` and `afterEachStep` hooks.
Parameters from the `flow` apply if the `flow` is set.

#### Parameters

##### step

[`Step`](../type-aliases/Step.md)

#### Returns

`Promise`\<`void`\>
