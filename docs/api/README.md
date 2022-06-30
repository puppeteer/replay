@puppeteer/replay

# @puppeteer/replay

## Table of contents

### Namespaces

- [Schema](modules/Schema.md)

### Classes

- [LighthouseRunnerExtension](classes/LighthouseRunnerExtension.md)
- [LighthouseStringifyExtension](classes/LighthouseStringifyExtension.md)
- [PuppeteerRunnerExtension](classes/PuppeteerRunnerExtension.md)
- [PuppeteerRunnerOwningBrowserExtension](classes/PuppeteerRunnerOwningBrowserExtension.md)
- [PuppeteerStringifyExtension](classes/PuppeteerStringifyExtension.md)
- [Runner](classes/Runner.md)
- [RunnerExtension](classes/RunnerExtension.md)
- [StringifyExtension](classes/StringifyExtension.md)

### Interfaces

- [BaseStep](interfaces/BaseStep.md)
- [ChangeStep](interfaces/ChangeStep.md)
- [ClickAttributes](interfaces/ClickAttributes.md)
- [ClickStep](interfaces/ClickStep.md)
- [CloseStep](interfaces/CloseStep.md)
- [CustomStepParams](interfaces/CustomStepParams.md)
- [DoubleClickStep](interfaces/DoubleClickStep.md)
- [EmulateNetworkConditionsStep](interfaces/EmulateNetworkConditionsStep.md)
- [HoverStep](interfaces/HoverStep.md)
- [KeyDownStep](interfaces/KeyDownStep.md)
- [KeyUpStep](interfaces/KeyUpStep.md)
- [LineWriter](interfaces/LineWriter.md)
- [NavigateStep](interfaces/NavigateStep.md)
- [NavigationEvent](interfaces/NavigationEvent.md)
- [ScrollPageStep](interfaces/ScrollPageStep.md)
- [SetViewportStep](interfaces/SetViewportStep.md)
- [StepWithFrame](interfaces/StepWithFrame.md)
- [StepWithSelectors](interfaces/StepWithSelectors.md)
- [StepWithTarget](interfaces/StepWithTarget.md)
- [StringifyOptions](interfaces/StringifyOptions.md)
- [UserFlow](interfaces/UserFlow.md)
- [WaitForElementStep](interfaces/WaitForElementStep.md)
- [WaitForExpressionStep](interfaces/WaitForExpressionStep.md)

### Type aliases

- [AssertedEvent](README.md#assertedevent)
- [AssertionStep](README.md#assertionstep)
- [CustomStep](README.md#customstep)
- [FrameSelector](README.md#frameselector)
- [Key](README.md#key)
- [Pattern](README.md#pattern)
- [PointerButtonType](README.md#pointerbuttontype)
- [PointerDeviceType](README.md#pointerdevicetype)
- [ScrollElementStep](README.md#scrollelementstep)
- [ScrollStep](README.md#scrollstep)
- [Selector](README.md#selector)
- [Step](README.md#step)
- [Target](README.md#target)
- [UserStep](README.md#userstep)

### Variables

- [maxTimeout](README.md#maxtimeout)
- [minTimeout](README.md#mintimeout)
- [mouseButtonMap](README.md#mousebuttonmap)
- [pointerDeviceTypes](README.md#pointerdevicetypes)
- [typeableInputTypes](README.md#typeableinputtypes)

### Functions

- [assertAllStepTypesAreHandled](README.md#assertallsteptypesarehandled)
- [createRunner](README.md#createrunner)
- [parse](README.md#parse)
- [parseStep](README.md#parsestep)
- [stringify](README.md#stringify)
- [stringifyStep](README.md#stringifystep)
- [validTimeout](README.md#validtimeout)

## Type aliases

### AssertedEvent

Ƭ **AssertedEvent**: [`NavigationEvent`](interfaces/Schema.NavigationEvent.md)

#### Defined in

[Schema.ts:28](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L28)

---

### AssertionStep

Ƭ **AssertionStep**: [`WaitForElementStep`](interfaces/Schema.WaitForElementStep.md) \| [`WaitForExpressionStep`](interfaces/Schema.WaitForExpressionStep.md)

#### Defined in

[Schema.ts:247](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L247)

---

### CustomStep

Ƭ **CustomStep**: [`CustomStepParams`](interfaces/Schema.CustomStepParams.md) & [`StepWithTarget`](interfaces/Schema.StepWithTarget.md) \| [`CustomStepParams`](interfaces/Schema.CustomStepParams.md) & [`StepWithFrame`](interfaces/Schema.StepWithFrame.md)

#### Defined in

[Schema.ts:181](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L181)

---

### FrameSelector

Ƭ **FrameSelector**: `number`[]

#### Defined in

[Schema.ts:20](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L20)

---

### Key

Ƭ **Key**: `"0"` \| `"1"` \| `"2"` \| `"3"` \| `"4"` \| `"5"` \| `"6"` \| `"7"` \| `"8"` \| `"9"` \| `"Power"` \| `"Eject"` \| `"Abort"` \| `"Help"` \| `"Backspace"` \| `"Tab"` \| `"Numpad5"` \| `"NumpadEnter"` \| `"Enter"` \| `"\r"` \| `"\n"` \| `"ShiftLeft"` \| `"ShiftRight"` \| `"ControlLeft"` \| `"ControlRight"` \| `"AltLeft"` \| `"AltRight"` \| `"Pause"` \| `"CapsLock"` \| `"Escape"` \| `"Convert"` \| `"NonConvert"` \| `"Space"` \| `"Numpad9"` \| `"PageUp"` \| `"Numpad3"` \| `"PageDown"` \| `"End"` \| `"Numpad1"` \| `"Home"` \| `"Numpad7"` \| `"ArrowLeft"` \| `"Numpad4"` \| `"Numpad8"` \| `"ArrowUp"` \| `"ArrowRight"` \| `"Numpad6"` \| `"Numpad2"` \| `"ArrowDown"` \| `"Select"` \| `"Open"` \| `"PrintScreen"` \| `"Insert"` \| `"Numpad0"` \| `"Delete"` \| `"NumpadDecimal"` \| `"Digit0"` \| `"Digit1"` \| `"Digit2"` \| `"Digit3"` \| `"Digit4"` \| `"Digit5"` \| `"Digit6"` \| `"Digit7"` \| `"Digit8"` \| `"Digit9"` \| `"KeyA"` \| `"KeyB"` \| `"KeyC"` \| `"KeyD"` \| `"KeyE"` \| `"KeyF"` \| `"KeyG"` \| `"KeyH"` \| `"KeyI"` \| `"KeyJ"` \| `"KeyK"` \| `"KeyL"` \| `"KeyM"` \| `"KeyN"` \| `"KeyO"` \| `"KeyP"` \| `"KeyQ"` \| `"KeyR"` \| `"KeyS"` \| `"KeyT"` \| `"KeyU"` \| `"KeyV"` \| `"KeyW"` \| `"KeyX"` \| `"KeyY"` \| `"KeyZ"` \| `"MetaLeft"` \| `"MetaRight"` \| `"ContextMenu"` \| `"NumpadMultiply"` \| `"NumpadAdd"` \| `"NumpadSubtract"` \| `"NumpadDivide"` \| `"F1"` \| `"F2"` \| `"F3"` \| `"F4"` \| `"F5"` \| `"F6"` \| `"F7"` \| `"F8"` \| `"F9"` \| `"F10"` \| `"F11"` \| `"F12"` \| `"F13"` \| `"F14"` \| `"F15"` \| `"F16"` \| `"F17"` \| `"F18"` \| `"F19"` \| `"F20"` \| `"F21"` \| `"F22"` \| `"F23"` \| `"F24"` \| `"NumLock"` \| `"ScrollLock"` \| `"AudioVolumeMute"` \| `"AudioVolumeDown"` \| `"AudioVolumeUp"` \| `"MediaTrackNext"` \| `"MediaTrackPrevious"` \| `"MediaStop"` \| `"MediaPlayPause"` \| `"Semicolon"` \| `"Equal"` \| `"NumpadEqual"` \| `"Comma"` \| `"Minus"` \| `"Period"` \| `"Slash"` \| `"Backquote"` \| `"BracketLeft"` \| `"Backslash"` \| `"BracketRight"` \| `"Quote"` \| `"AltGraph"` \| `"Props"` \| `"Cancel"` \| `"Clear"` \| `"Shift"` \| `"Control"` \| `"Alt"` \| `"Accept"` \| `"ModeChange"` \| `" "` \| `"Print"` \| `"Execute"` \| `"\u0000"` \| `"a"` \| `"b"` \| `"c"` \| `"d"` \| `"e"` \| `"f"` \| `"g"` \| `"h"` \| `"i"` \| `"j"` \| `"k"` \| `"l"` \| `"m"` \| `"n"` \| `"o"` \| `"p"` \| `"q"` \| `"r"` \| `"s"` \| `"t"` \| `"u"` \| `"v"` \| `"w"` \| `"x"` \| `"y"` \| `"z"` \| `"Meta"` \| `"*"` \| `"+"` \| `"-"` \| `"/"` \| `";"` \| `"="` \| `","` \| `"."` \| `` "`" `` \| `"["` \| `"\\"` \| `"]"` \| `"'"` \| `"Attn"` \| `"CrSel"` \| `"ExSel"` \| `"EraseEof"` \| `"Play"` \| `"ZoomOut"` \| `")"` \| `"!"` \| `"@"` \| `"#"` \| `"$"` \| `"%"` \| `"^"` \| `"&"` \| `"("` \| `"A"` \| `"B"` \| `"C"` \| `"D"` \| `"E"` \| `"F"` \| `"G"` \| `"H"` \| `"I"` \| `"J"` \| `"K"` \| `"L"` \| `"M"` \| `"N"` \| `"O"` \| `"P"` \| `"Q"` \| `"R"` \| `"S"` \| `"T"` \| `"U"` \| `"V"` \| `"W"` \| `"X"` \| `"Y"` \| `"Z"` \| `":"` \| `"<"` \| `"_"` \| `">"` \| `"?"` \| `"~"` \| `"{"` \| `"|"` \| `"}"` \| `"\""` \| `"SoftLeft"` \| `"SoftRight"` \| `"Camera"` \| `"Call"` \| `"EndCall"` \| `"VolumeDown"` \| `"VolumeUp"`

#### Defined in

[Schema.ts:269](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L269)

---

### Pattern

Ƭ **Pattern**: `string`

#### Defined in

[Schema.ts:18](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L18)

---

### PointerButtonType

Ƭ **PointerButtonType**: `"primary"` \| `"auxiliary"` \| `"secondary"` \| `"back"` \| `"forward"`

#### Defined in

[Schema.ts:73](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L73)

---

### PointerDeviceType

Ƭ **PointerDeviceType**: `"mouse"` \| `"pen"` \| `"touch"`

#### Defined in

[Schema.ts:72](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L72)

---

### ScrollElementStep

Ƭ **ScrollElementStep**: [`ScrollPageStep`](interfaces/Schema.ScrollPageStep.md) & [`StepWithSelectors`](interfaces/Schema.StepWithSelectors.md)

#### Defined in

[Schema.ts:166](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L166)

---

### ScrollStep

Ƭ **ScrollStep**: [`ScrollPageStep`](interfaces/Schema.ScrollPageStep.md) \| [`ScrollElementStep`](modules/Schema.md#scrollelementstep)

#### Defined in

[Schema.ts:168](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L168)

---

### Selector

Ƭ **Selector**: `string` \| `string`[]

#### Defined in

[Schema.ts:19](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L19)

---

### Step

Ƭ **Step**: [`UserStep`](modules/Schema.md#userstep) \| [`AssertionStep`](modules/Schema.md#assertionstep)

#### Defined in

[Schema.ts:249](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L249)

---

### Target

Ƭ **Target**: `string`

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

#### Defined in

[Schema.ts:17](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L17)

---

### UserStep

Ƭ **UserStep**: [`ChangeStep`](interfaces/Schema.ChangeStep.md) \| [`ClickStep`](interfaces/Schema.ClickStep.md) \| [`HoverStep`](interfaces/Schema.HoverStep.md) \| [`CloseStep`](interfaces/Schema.CloseStep.md) \| [`CustomStep`](modules/Schema.md#customstep) \| [`DoubleClickStep`](interfaces/Schema.DoubleClickStep.md) \| [`EmulateNetworkConditionsStep`](interfaces/Schema.EmulateNetworkConditionsStep.md) \| [`KeyDownStep`](interfaces/Schema.KeyDownStep.md) \| [`KeyUpStep`](interfaces/Schema.KeyUpStep.md) \| [`NavigateStep`](interfaces/Schema.NavigateStep.md) \| [`ScrollStep`](modules/Schema.md#scrollstep) \| [`SetViewportStep`](interfaces/Schema.SetViewportStep.md)

#### Defined in

[Schema.ts:185](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L185)

## Variables

### maxTimeout

• `Const` **maxTimeout**: `30000`

#### Defined in

[SchemaUtils.ts:524](https://github.com/puppeteer/replay/blob/main/src/SchemaUtils.ts#L524)

---

### minTimeout

• `Const` **minTimeout**: `1`

#### Defined in

[SchemaUtils.ts:523](https://github.com/puppeteer/replay/blob/main/src/SchemaUtils.ts#L523)

---

### mouseButtonMap

• `Const` **mouseButtonMap**: `ReadonlyMap`<`string`, `"left"` \| `"middle"` \| `"right"` \| `"back"` \| `"forward"`\>

#### Defined in

[SchemaUtils.ts:68](https://github.com/puppeteer/replay/blob/main/src/SchemaUtils.ts#L68)

---

### pointerDeviceTypes

• `Const` **pointerDeviceTypes**: `ReadonlySet`<`string`\>

#### Defined in

[SchemaUtils.ts:62](https://github.com/puppeteer/replay/blob/main/src/SchemaUtils.ts#L62)

---

### typeableInputTypes

• `Const` **typeableInputTypes**: `ReadonlySet`<`string`\>

#### Defined in

[SchemaUtils.ts:51](https://github.com/puppeteer/replay/blob/main/src/SchemaUtils.ts#L51)

## Functions

### assertAllStepTypesAreHandled

▸ **assertAllStepTypesAreHandled**(`s`): `never`

#### Parameters

| Name | Type    |
| :--- | :------ |
| `s`  | `never` |

#### Returns

`never`

#### Defined in

[SchemaUtils.ts:46](https://github.com/puppeteer/replay/blob/main/src/SchemaUtils.ts#L46)

---

### createRunner

▸ **createRunner**(`flow`, `extension?`): `Promise`<[`Runner`](classes/Runner.md)\>

#### Parameters

| Name         | Type                                            |
| :----------- | :---------------------------------------------- |
| `flow`       | [`UserFlow`](interfaces/Schema.UserFlow.md)     |
| `extension?` | [`RunnerExtension`](classes/RunnerExtension.md) |

#### Returns

`Promise`<[`Runner`](classes/Runner.md)\>

#### Defined in

[Runner.ts:172](https://github.com/puppeteer/replay/blob/main/src/Runner.ts#L172)

---

### parse

▸ **parse**(`data`): [`UserFlow`](interfaces/Schema.UserFlow.md)

#### Parameters

| Name   | Type      |
| :----- | :-------- |
| `data` | `unknown` |

#### Returns

[`UserFlow`](interfaces/Schema.UserFlow.md)

#### Defined in

[SchemaUtils.ts:532](https://github.com/puppeteer/replay/blob/main/src/SchemaUtils.ts#L532)

---

### parseStep

▸ **parseStep**(`step`, `idx?`): [`Step`](modules/Schema.md#step)

#### Parameters

| Name   | Type      |
| :----- | :-------- |
| `step` | `unknown` |
| `idx?` | `number`  |

#### Returns

[`Step`](modules/Schema.md#step)

#### Defined in

[SchemaUtils.ts:456](https://github.com/puppeteer/replay/blob/main/src/SchemaUtils.ts#L456)

---

### stringify

▸ **stringify**(`flow`, `opts?`): `Promise`<`string`\>

Stringifes an entire recording. The following hooks are invoked with the `flow` parameter containing the entire flow:

- `beforeAllSteps` (once)
- `beforeEachStep` (per step)
- `stringifyStep` (per step)
- `afterEachStep` (per step)
- `afterAllSteps` (once)

#### Parameters

| Name    | Type                                                 |
| :------ | :--------------------------------------------------- |
| `flow`  | [`UserFlow`](interfaces/Schema.UserFlow.md)          |
| `opts?` | [`StringifyOptions`](interfaces/StringifyOptions.md) |

#### Returns

`Promise`<`string`\>

#### Defined in

[stringify.ts:37](https://github.com/puppeteer/replay/blob/main/src/stringify.ts#L37)

---

### stringifyStep

▸ **stringifyStep**(`step`, `opts?`): `Promise`<`string`\>

Stringifes a single step. Only the following hooks are invoked with the `flow` parameter as undefined:

- `beforeEachStep`
- `stringifyStep`
- `afterEachStep`

#### Parameters

| Name    | Type                                                 |
| :------ | :--------------------------------------------------- |
| `step`  | [`Step`](modules/Schema.md#step)                     |
| `opts?` | [`StringifyOptions`](interfaces/StringifyOptions.md) |

#### Returns

`Promise`<`string`\>

#### Defined in

[stringify.ts:64](https://github.com/puppeteer/replay/blob/main/src/stringify.ts#L64)

---

### validTimeout

▸ **validTimeout**(`timeout`): `boolean`

#### Parameters

| Name      | Type     |
| :-------- | :------- |
| `timeout` | `number` |

#### Returns

`boolean`

#### Defined in

[SchemaUtils.ts:528](https://github.com/puppeteer/replay/blob/main/src/SchemaUtils.ts#L528)
