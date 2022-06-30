[@puppeteer/replay](../README.md) / Runner

# Class: Runner

## Table of contents

### Methods

- [abort](Runner.md#abort)
- [change](Runner.md#change)
- [click](Runner.md#click)
- [close](Runner.md#close)
- [doubleClick](Runner.md#doubleclick)
- [emulateNetworkConditions](Runner.md#emulatenetworkconditions)
- [hover](Runner.md#hover)
- [keyDown](Runner.md#keydown)
- [keyUp](Runner.md#keyup)
- [navigate](Runner.md#navigate)
- [run](Runner.md#run)
- [runStep](Runner.md#runstep)
- [scroll](Runner.md#scroll)
- [setViewport](Runner.md#setviewport)

## Methods

### abort

▸ **abort**(): `void`

#### Returns

`void`

#### Defined in

[Runner.ts:58](https://github.com/puppeteer/replay/blob/main/src/Runner.ts#L58)

---

### change

▸ **change**(`step`): `Promise`<`void`\>

#### Parameters

| Name   | Type                                                                  |
| :----- | :-------------------------------------------------------------------- |
| `step` | `Omit`<[`ChangeStep`](../interfaces/Schema.ChangeStep.md), `"type"`\> |

#### Returns

`Promise`<`void`\>

#### Defined in

[Runner.ts:117](https://github.com/puppeteer/replay/blob/main/src/Runner.ts#L117)

---

### click

▸ **click**(`step`): `Promise`<`void`\>

#### Parameters

| Name   | Type                                                                |
| :----- | :------------------------------------------------------------------ |
| `step` | `Omit`<[`ClickStep`](../interfaces/Schema.ClickStep.md), `"type"`\> |

#### Returns

`Promise`<`void`\>

#### Defined in

[Runner.ts:66](https://github.com/puppeteer/replay/blob/main/src/Runner.ts#L66)

---

### close

▸ **close**(`step`): `Promise`<`void`\>

#### Parameters

| Name   | Type                                                                |
| :----- | :------------------------------------------------------------------ |
| `step` | `Omit`<[`CloseStep`](../interfaces/Schema.CloseStep.md), `"type"`\> |

#### Returns

`Promise`<`void`\>

#### Defined in

[Runner.ts:101](https://github.com/puppeteer/replay/blob/main/src/Runner.ts#L101)

---

### doubleClick

▸ **doubleClick**(`step`): `Promise`<`void`\>

#### Parameters

| Name   | Type                                                                            |
| :----- | :------------------------------------------------------------------------------ |
| `step` | `Omit`<[`DoubleClickStep`](../interfaces/Schema.DoubleClickStep.md), `"type"`\> |

#### Returns

`Promise`<`void`\>

#### Defined in

[Runner.ts:124](https://github.com/puppeteer/replay/blob/main/src/Runner.ts#L124)

---

### emulateNetworkConditions

▸ **emulateNetworkConditions**(`step`): `Promise`<`void`\>

#### Parameters

| Name   | Type                                                                                                      |
| :----- | :-------------------------------------------------------------------------------------------------------- |
| `step` | `Omit`<[`EmulateNetworkConditionsStep`](../interfaces/Schema.EmulateNetworkConditionsStep.md), `"type"`\> |

#### Returns

`Promise`<`void`\>

#### Defined in

[Runner.ts:108](https://github.com/puppeteer/replay/blob/main/src/Runner.ts#L108)

---

### hover

▸ **hover**(`step`): `Promise`<`void`\>

#### Parameters

| Name   | Type                                                                |
| :----- | :------------------------------------------------------------------ |
| `step` | `Omit`<[`HoverStep`](../interfaces/Schema.HoverStep.md), `"type"`\> |

#### Returns

`Promise`<`void`\>

#### Defined in

[Runner.ts:73](https://github.com/puppeteer/replay/blob/main/src/Runner.ts#L73)

---

### keyDown

▸ **keyDown**(`step`): `Promise`<`void`\>

#### Parameters

| Name   | Type                                                                    |
| :----- | :---------------------------------------------------------------------- |
| `step` | `Omit`<[`KeyDownStep`](../interfaces/Schema.KeyDownStep.md), `"type"`\> |

#### Returns

`Promise`<`void`\>

#### Defined in

[Runner.ts:80](https://github.com/puppeteer/replay/blob/main/src/Runner.ts#L80)

---

### keyUp

▸ **keyUp**(`step`): `Promise`<`void`\>

#### Parameters

| Name   | Type                                                                |
| :----- | :------------------------------------------------------------------ |
| `step` | `Omit`<[`KeyUpStep`](../interfaces/Schema.KeyUpStep.md), `"type"`\> |

#### Returns

`Promise`<`void`\>

#### Defined in

[Runner.ts:87](https://github.com/puppeteer/replay/blob/main/src/Runner.ts#L87)

---

### navigate

▸ **navigate**(`step`): `Promise`<`void`\>

#### Parameters

| Name   | Type                                                                      |
| :----- | :------------------------------------------------------------------------ |
| `step` | `Omit`<[`NavigateStep`](../interfaces/Schema.NavigateStep.md), `"type"`\> |

#### Returns

`Promise`<`void`\>

#### Defined in

[Runner.ts:131](https://github.com/puppeteer/replay/blob/main/src/Runner.ts#L131)

---

### run

▸ **run**(): `Promise`<`boolean`\>

Run all the steps in the flow

#### Returns

`Promise`<`boolean`\>

whether all the steps are run or the execution is aborted

#### Defined in

[Runner.ts:149](https://github.com/puppeteer/replay/blob/main/src/Runner.ts#L149)

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

[Runner.ts:62](https://github.com/puppeteer/replay/blob/main/src/Runner.ts#L62)

---

### scroll

▸ **scroll**(`step`): `Promise`<`void`\>

#### Parameters

| Name   | Type                                                               |
| :----- | :----------------------------------------------------------------- |
| `step` | `Omit`<[`ScrollStep`](../modules/Schema.md#scrollstep), `"type"`\> |

#### Returns

`Promise`<`void`\>

#### Defined in

[Runner.ts:138](https://github.com/puppeteer/replay/blob/main/src/Runner.ts#L138)

---

### setViewport

▸ **setViewport**(`step`): `Promise`<`void`\>

#### Parameters

| Name   | Type                                                                            |
| :----- | :------------------------------------------------------------------------------ |
| `step` | `Omit`<[`SetViewportStep`](../interfaces/Schema.SetViewportStep.md), `"type"`\> |

#### Returns

`Promise`<`void`\>

#### Defined in

[Runner.ts:94](https://github.com/puppeteer/replay/blob/main/src/Runner.ts#L94)
