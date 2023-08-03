@puppeteer/replay

# @puppeteer/replay

## Table of contents

### Namespaces

- [Schema](modules/Schema.md)

### Enumerations

- [AssertedEventType](enums/AssertedEventType.md)
- [SelectorType](enums/SelectorType.md)
- [StepType](enums/StepType.md)

### Classes

- [JSONStringifyExtension](classes/JSONStringifyExtension.md)
- [LighthouseRunnerExtension](classes/LighthouseRunnerExtension.md)
- [LighthouseStringifyExtension](classes/LighthouseStringifyExtension.md)
- [PuppeteerReplayStringifyExtension](classes/PuppeteerReplayStringifyExtension.md)
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

### Type Aliases

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
- [SourceMap](README.md#sourcemap)
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
- [formatAsJSLiteral](README.md#formatasjsliteral)
- [formatJSONAsJS](README.md#formatjsonasjs)
- [getSelectorType](README.md#getselectortype)
- [parse](README.md#parse)
- [parseSourceMap](README.md#parsesourcemap)
- [parseStep](README.md#parsestep)
- [selectorToPElementSelector](README.md#selectortopelementselector)
- [stringify](README.md#stringify)
- [stringifyStep](README.md#stringifystep)
- [stripSourceMap](README.md#stripsourcemap)
- [validTimeout](README.md#validtimeout)

## Type Aliases

### AssertedEvent

Ƭ **AssertedEvent**: [`NavigationEvent`](interfaces/Schema.NavigationEvent.md)

#### Defined in

[Schema.ts:59](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L59)

---

### AssertionStep

Ƭ **AssertionStep**: [`WaitForElementStep`](interfaces/Schema.WaitForElementStep.md) \| [`WaitForExpressionStep`](interfaces/Schema.WaitForExpressionStep.md)

#### Defined in

[Schema.ts:296](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L296)

---

### CustomStep

Ƭ **CustomStep**: [`CustomStepParams`](interfaces/Schema.CustomStepParams.md) & [`StepWithTarget`](interfaces/Schema.StepWithTarget.md) \| [`CustomStepParams`](interfaces/Schema.CustomStepParams.md) & [`StepWithFrame`](interfaces/Schema.StepWithFrame.md)

#### Defined in

[Schema.ts:213](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L213)

---

### FrameSelector

Ƭ **FrameSelector**: `number`[]

#### Defined in

[Schema.ts:22](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L22)

---

### Key

Ƭ **Key**: `"0"` \| `"1"` \| `"2"` \| `"3"` \| `"4"` \| `"5"` \| `"6"` \| `"7"` \| `"8"` \| `"9"` \| `"Power"` \| `"Eject"` \| `"Abort"` \| `"Help"` \| `"Backspace"` \| `"Tab"` \| `"Numpad5"` \| `"NumpadEnter"` \| `"Enter"` \| `"\r"` \| `"\n"` \| `"ShiftLeft"` \| `"ShiftRight"` \| `"ControlLeft"` \| `"ControlRight"` \| `"AltLeft"` \| `"AltRight"` \| `"Pause"` \| `"CapsLock"` \| `"Escape"` \| `"Convert"` \| `"NonConvert"` \| `"Space"` \| `"Numpad9"` \| `"PageUp"` \| `"Numpad3"` \| `"PageDown"` \| `"End"` \| `"Numpad1"` \| `"Home"` \| `"Numpad7"` \| `"ArrowLeft"` \| `"Numpad4"` \| `"Numpad8"` \| `"ArrowUp"` \| `"ArrowRight"` \| `"Numpad6"` \| `"Numpad2"` \| `"ArrowDown"` \| `"Select"` \| `"Open"` \| `"PrintScreen"` \| `"Insert"` \| `"Numpad0"` \| `"Delete"` \| `"NumpadDecimal"` \| `"Digit0"` \| `"Digit1"` \| `"Digit2"` \| `"Digit3"` \| `"Digit4"` \| `"Digit5"` \| `"Digit6"` \| `"Digit7"` \| `"Digit8"` \| `"Digit9"` \| `"KeyA"` \| `"KeyB"` \| `"KeyC"` \| `"KeyD"` \| `"KeyE"` \| `"KeyF"` \| `"KeyG"` \| `"KeyH"` \| `"KeyI"` \| `"KeyJ"` \| `"KeyK"` \| `"KeyL"` \| `"KeyM"` \| `"KeyN"` \| `"KeyO"` \| `"KeyP"` \| `"KeyQ"` \| `"KeyR"` \| `"KeyS"` \| `"KeyT"` \| `"KeyU"` \| `"KeyV"` \| `"KeyW"` \| `"KeyX"` \| `"KeyY"` \| `"KeyZ"` \| `"MetaLeft"` \| `"MetaRight"` \| `"ContextMenu"` \| `"NumpadMultiply"` \| `"NumpadAdd"` \| `"NumpadSubtract"` \| `"NumpadDivide"` \| `"F1"` \| `"F2"` \| `"F3"` \| `"F4"` \| `"F5"` \| `"F6"` \| `"F7"` \| `"F8"` \| `"F9"` \| `"F10"` \| `"F11"` \| `"F12"` \| `"F13"` \| `"F14"` \| `"F15"` \| `"F16"` \| `"F17"` \| `"F18"` \| `"F19"` \| `"F20"` \| `"F21"` \| `"F22"` \| `"F23"` \| `"F24"` \| `"NumLock"` \| `"ScrollLock"` \| `"AudioVolumeMute"` \| `"AudioVolumeDown"` \| `"AudioVolumeUp"` \| `"MediaTrackNext"` \| `"MediaTrackPrevious"` \| `"MediaStop"` \| `"MediaPlayPause"` \| `"Semicolon"` \| `"Equal"` \| `"NumpadEqual"` \| `"Comma"` \| `"Minus"` \| `"Period"` \| `"Slash"` \| `"Backquote"` \| `"BracketLeft"` \| `"Backslash"` \| `"BracketRight"` \| `"Quote"` \| `"AltGraph"` \| `"Props"` \| `"Cancel"` \| `"Clear"` \| `"Shift"` \| `"Control"` \| `"Alt"` \| `"Accept"` \| `"ModeChange"` \| `" "` \| `"Print"` \| `"Execute"` \| `"\u0000"` \| `"a"` \| `"b"` \| `"c"` \| `"d"` \| `"e"` \| `"f"` \| `"g"` \| `"h"` \| `"i"` \| `"j"` \| `"k"` \| `"l"` \| `"m"` \| `"n"` \| `"o"` \| `"p"` \| `"q"` \| `"r"` \| `"s"` \| `"t"` \| `"u"` \| `"v"` \| `"w"` \| `"x"` \| `"y"` \| `"z"` \| `"Meta"` \| `"*"` \| `"+"` \| `"-"` \| `"/"` \| `";"` \| `"="` \| `","` \| `"."` \| ``"`"`` \| `"["` \| `"\\"` \| `"]"` \| `"'"` \| `"Attn"` \| `"CrSel"` \| `"ExSel"` \| `"EraseEof"` \| `"Play"` \| `"ZoomOut"` \| `")"` \| `"!"` \| `"@"` \| `"#"` \| `"$"` \| `"%"` \| `"^"` \| `"&"` \| `"("` \| `"A"` \| `"B"` \| `"C"` \| `"D"` \| `"E"` \| `"F"` \| `"G"` \| `"H"` \| `"I"` \| `"J"` \| `"K"` \| `"L"` \| `"M"` \| `"N"` \| `"O"` \| `"P"` \| `"Q"` \| `"R"` \| `"S"` \| `"T"` \| `"U"` \| `"V"` \| `"W"` \| `"X"` \| `"Y"` \| `"Z"` \| `":"` \| `"<"` \| `"_"` \| `">"` \| `"?"` \| `"~"` \| `"{"` \| `"|"` \| `"}"` \| `"\""` \| `"SoftLeft"` \| `"SoftRight"` \| `"Camera"` \| `"Call"` \| `"EndCall"` \| `"VolumeDown"` \| `"VolumeUp"`

#### Defined in

[Schema.ts:318](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L318)

---

### Pattern

Ƭ **Pattern**: `string`

#### Defined in

[Schema.ts:20](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L20)

---

### PointerButtonType

Ƭ **PointerButtonType**: `"primary"` \| `"auxiliary"` \| `"secondary"` \| `"back"` \| `"forward"`

#### Defined in

[Schema.ts:104](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L104)

---

### PointerDeviceType

Ƭ **PointerDeviceType**: `"mouse"` \| `"pen"` \| `"touch"`

#### Defined in

[Schema.ts:103](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L103)

---

### ScrollElementStep

Ƭ **ScrollElementStep**: [`ScrollPageStep`](interfaces/Schema.ScrollPageStep.md) & [`StepWithSelectors`](interfaces/Schema.StepWithSelectors.md)

#### Defined in

[Schema.ts:198](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L198)

---

### ScrollStep

Ƭ **ScrollStep**: [`ScrollPageStep`](interfaces/Schema.ScrollPageStep.md) \| [`ScrollElementStep`](modules/Schema.md#scrollelementstep)

#### Defined in

[Schema.ts:200](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L200)

---

### Selector

Ƭ **Selector**: `string` \| `string`[]

#### Defined in

[Schema.ts:21](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L21)

---

### SourceMap

Ƭ **SourceMap**: `number`[]

The format is [version, [lineNo, length], [lineNo, length] ... [lineNo, length]].

#### Defined in

[stringify.ts:35](https://github.com/puppeteer/replay/blob/main/src/stringify.ts#L35)

---

### Step

Ƭ **Step**: [`UserStep`](modules/Schema.md#userstep) \| [`AssertionStep`](modules/Schema.md#assertionstep)

#### Defined in

[Schema.ts:298](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L298)

---

### Target

Ƭ **Target**: `string`

#### Defined in

[Schema.ts:19](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L19)

---

### UserStep

Ƭ **UserStep**: [`ChangeStep`](interfaces/Schema.ChangeStep.md) \| [`ClickStep`](interfaces/Schema.ClickStep.md) \| [`HoverStep`](interfaces/Schema.HoverStep.md) \| [`CloseStep`](interfaces/Schema.CloseStep.md) \| [`CustomStep`](modules/Schema.md#customstep) \| [`DoubleClickStep`](interfaces/Schema.DoubleClickStep.md) \| [`EmulateNetworkConditionsStep`](interfaces/Schema.EmulateNetworkConditionsStep.md) \| [`KeyDownStep`](interfaces/Schema.KeyDownStep.md) \| [`KeyUpStep`](interfaces/Schema.KeyUpStep.md) \| [`NavigateStep`](interfaces/Schema.NavigateStep.md) \| [`ScrollStep`](modules/Schema.md#scrollstep) \| [`SetViewportStep`](interfaces/Schema.SetViewportStep.md)

#### Defined in

[Schema.ts:217](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L217)

## Variables

### maxTimeout

• `Const` **maxTimeout**: `30000`

#### Defined in

[SchemaUtils.ts:563](https://github.com/puppeteer/replay/blob/main/src/SchemaUtils.ts#L563)

---

### minTimeout

• `Const` **minTimeout**: `1`

#### Defined in

[SchemaUtils.ts:562](https://github.com/puppeteer/replay/blob/main/src/SchemaUtils.ts#L562)

---

### mouseButtonMap

• `Const` **mouseButtonMap**: `ReadonlyMap`<`string`, `"left"` \| `"middle"` \| `"right"` \| `"back"` \| `"forward"`\>

#### Defined in

[SchemaUtils.ts:70](https://github.com/puppeteer/replay/blob/main/src/SchemaUtils.ts#L70)

---

### pointerDeviceTypes

• `Const` **pointerDeviceTypes**: `ReadonlySet`<`string`\>

#### Defined in

[SchemaUtils.ts:64](https://github.com/puppeteer/replay/blob/main/src/SchemaUtils.ts#L64)

---

### typeableInputTypes

• `Const` **typeableInputTypes**: `ReadonlySet`<`string`\>

#### Defined in

[SchemaUtils.ts:53](https://github.com/puppeteer/replay/blob/main/src/SchemaUtils.ts#L53)

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

[SchemaUtils.ts:48](https://github.com/puppeteer/replay/blob/main/src/SchemaUtils.ts#L48)

---

### createRunner

▸ **createRunner**(): `Promise`<[`Runner`](classes/Runner.md)\>

#### Returns

`Promise`<[`Runner`](classes/Runner.md)\>

#### Defined in

[Runner.ts:102](https://github.com/puppeteer/replay/blob/main/src/Runner.ts#L102)

▸ **createRunner**(`flow`): `Promise`<[`Runner`](classes/Runner.md)\>

#### Parameters

| Name   | Type                                        |
| :----- | :------------------------------------------ |
| `flow` | [`UserFlow`](interfaces/Schema.UserFlow.md) |

#### Returns

`Promise`<[`Runner`](classes/Runner.md)\>

#### Defined in

[Runner.ts:103](https://github.com/puppeteer/replay/blob/main/src/Runner.ts#L103)

▸ **createRunner**(`extension`): `Promise`<[`Runner`](classes/Runner.md)\>

#### Parameters

| Name        | Type                                            |
| :---------- | :---------------------------------------------- |
| `extension` | [`RunnerExtension`](classes/RunnerExtension.md) |

#### Returns

`Promise`<[`Runner`](classes/Runner.md)\>

#### Defined in

[Runner.ts:104](https://github.com/puppeteer/replay/blob/main/src/Runner.ts#L104)

▸ **createRunner**(`flow`, `extension`): `Promise`<[`Runner`](classes/Runner.md)\>

#### Parameters

| Name        | Type                                            |
| :---------- | :---------------------------------------------- |
| `flow`      | [`UserFlow`](interfaces/Schema.UserFlow.md)     |
| `extension` | [`RunnerExtension`](classes/RunnerExtension.md) |

#### Returns

`Promise`<[`Runner`](classes/Runner.md)\>

#### Defined in

[Runner.ts:105](https://github.com/puppeteer/replay/blob/main/src/Runner.ts#L105)

---

### formatAsJSLiteral

▸ **formatAsJSLiteral**(`content`): `string`

#### Parameters

| Name      | Type     |
| :-------- | :------- |
| `content` | `string` |

#### Returns

`string`

#### Defined in

[JSONUtils.ts:111](https://github.com/puppeteer/replay/blob/main/src/JSONUtils.ts#L111)

---

### formatJSONAsJS

▸ **formatJSONAsJS**(`json`, `indent`): `string`

Copyright (c) 2020 The Chromium Authors. All rights reserved.
Use of this source code is governed by a BSD-style license that can be
found in the LICENSE file.

#### Parameters

| Name     | Type      |
| :------- | :-------- |
| `json`   | `unknown` |
| `indent` | `string`  |

#### Returns

`string`

#### Defined in

[JSONUtils.ts:23](https://github.com/puppeteer/replay/blob/main/src/JSONUtils.ts#L23)

---

### getSelectorType

▸ **getSelectorType**(`selector`): [`SelectorType`](enums/Schema.SelectorType.md)

Detects what type of a selector the string contains. For example,
`aria/Label` is a SelectorType.ARIA.

Note that CSS selectors are special and usually don't require a prefix,
therefore, SelectorType.CSS is the default type if other types didn't match.

#### Parameters

| Name       | Type     |
| :--------- | :------- |
| `selector` | `string` |

#### Returns

[`SelectorType`](enums/Schema.SelectorType.md)

#### Defined in

[SchemaUtils.ts:615](https://github.com/puppeteer/replay/blob/main/src/SchemaUtils.ts#L615)

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

[SchemaUtils.ts:571](https://github.com/puppeteer/replay/blob/main/src/SchemaUtils.ts#L571)

---

### parseSourceMap

▸ **parseSourceMap**(`text`): [`SourceMap`](README.md#sourcemap) \| `undefined`

Extracts a source map from a text.

#### Parameters

| Name   | Type     |
| :----- | :------- |
| `text` | `string` |

#### Returns

[`SourceMap`](README.md#sourcemap) \| `undefined`

#### Defined in

[stringify.ts:109](https://github.com/puppeteer/replay/blob/main/src/stringify.ts#L109)

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

[SchemaUtils.ts:495](https://github.com/puppeteer/replay/blob/main/src/SchemaUtils.ts#L495)

---

### selectorToPElementSelector

▸ **selectorToPElementSelector**(`selector`): `string`

Converts a selector or an array of selector parts into a Puppeteer selector.

**`See`**

https://pptr.dev/guides/query-selectors#p-elements

#### Parameters

| Name       | Type                   |
| :--------- | :--------------------- |
| `selector` | `string` \| `string`[] |

#### Returns

`string`

#### Defined in

[SchemaUtils.ts:629](https://github.com/puppeteer/replay/blob/main/src/SchemaUtils.ts#L629)

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

[stringify.ts:45](https://github.com/puppeteer/replay/blob/main/src/stringify.ts#L45)

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

[stringify.ts:79](https://github.com/puppeteer/replay/blob/main/src/stringify.ts#L79)

---

### stripSourceMap

▸ **stripSourceMap**(`text`): `string`

#### Parameters

| Name   | Type     |
| :----- | :------- |
| `text` | `string` |

#### Returns

`string`

#### Defined in

[stringify.ts:120](https://github.com/puppeteer/replay/blob/main/src/stringify.ts#L120)

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

[SchemaUtils.ts:567](https://github.com/puppeteer/replay/blob/main/src/SchemaUtils.ts#L567)
