[@puppeteer/replay](../README.md) / Schema

# Namespace: Schema

## Table of contents

### Enumerations

- [AssertedEventType](../enums/Schema.AssertedEventType.md)
- [SelectorType](../enums/Schema.SelectorType.md)
- [StepType](../enums/Schema.StepType.md)

### Interfaces

- [BaseStep](../interfaces/Schema.BaseStep.md)
- [ChangeStep](../interfaces/Schema.ChangeStep.md)
- [ClickAttributes](../interfaces/Schema.ClickAttributes.md)
- [ClickStep](../interfaces/Schema.ClickStep.md)
- [CloseStep](../interfaces/Schema.CloseStep.md)
- [CustomStepParams](../interfaces/Schema.CustomStepParams.md)
- [DoubleClickStep](../interfaces/Schema.DoubleClickStep.md)
- [EmulateNetworkConditionsStep](../interfaces/Schema.EmulateNetworkConditionsStep.md)
- [HoverStep](../interfaces/Schema.HoverStep.md)
- [KeyDownStep](../interfaces/Schema.KeyDownStep.md)
- [KeyUpStep](../interfaces/Schema.KeyUpStep.md)
- [NavigateStep](../interfaces/Schema.NavigateStep.md)
- [NavigationEvent](../interfaces/Schema.NavigationEvent.md)
- [ScrollPageStep](../interfaces/Schema.ScrollPageStep.md)
- [SetViewportStep](../interfaces/Schema.SetViewportStep.md)
- [StepWithFrame](../interfaces/Schema.StepWithFrame.md)
- [StepWithSelectors](../interfaces/Schema.StepWithSelectors.md)
- [StepWithTarget](../interfaces/Schema.StepWithTarget.md)
- [UserFlow](../interfaces/Schema.UserFlow.md)
- [WaitForElementStep](../interfaces/Schema.WaitForElementStep.md)
- [WaitForExpressionStep](../interfaces/Schema.WaitForExpressionStep.md)

### Type Aliases

- [AssertedEvent](Schema.md#assertedevent)
- [AssertionStep](Schema.md#assertionstep)
- [CustomStep](Schema.md#customstep)
- [FrameSelector](Schema.md#frameselector)
- [Key](Schema.md#key)
- [Pattern](Schema.md#pattern)
- [PointerButtonType](Schema.md#pointerbuttontype)
- [PointerDeviceType](Schema.md#pointerdevicetype)
- [ScrollElementStep](Schema.md#scrollelementstep)
- [ScrollStep](Schema.md#scrollstep)
- [Selector](Schema.md#selector)
- [Step](Schema.md#step)
- [Target](Schema.md#target)
- [UserStep](Schema.md#userstep)

## Type Aliases

### AssertedEvent

Ƭ **AssertedEvent**: [`NavigationEvent`](../interfaces/Schema.NavigationEvent.md)

#### Defined in

[Schema.ts:56](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L56)

---

### AssertionStep

Ƭ **AssertionStep**: [`WaitForElementStep`](../interfaces/Schema.WaitForElementStep.md) \| [`WaitForExpressionStep`](../interfaces/Schema.WaitForExpressionStep.md)

#### Defined in

[Schema.ts:275](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L275)

---

### CustomStep

Ƭ **CustomStep**: [`CustomStepParams`](../interfaces/Schema.CustomStepParams.md) & [`StepWithTarget`](../interfaces/Schema.StepWithTarget.md) \| [`CustomStepParams`](../interfaces/Schema.CustomStepParams.md) & [`StepWithFrame`](../interfaces/Schema.StepWithFrame.md)

#### Defined in

[Schema.ts:209](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L209)

---

### FrameSelector

Ƭ **FrameSelector**: `number`[]

#### Defined in

[Schema.ts:20](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L20)

---

### Key

Ƭ **Key**: `"0"` \| `"1"` \| `"2"` \| `"3"` \| `"4"` \| `"5"` \| `"6"` \| `"7"` \| `"8"` \| `"9"` \| `"Power"` \| `"Eject"` \| `"Abort"` \| `"Help"` \| `"Backspace"` \| `"Tab"` \| `"Numpad5"` \| `"NumpadEnter"` \| `"Enter"` \| `"\r"` \| `"\n"` \| `"ShiftLeft"` \| `"ShiftRight"` \| `"ControlLeft"` \| `"ControlRight"` \| `"AltLeft"` \| `"AltRight"` \| `"Pause"` \| `"CapsLock"` \| `"Escape"` \| `"Convert"` \| `"NonConvert"` \| `"Space"` \| `"Numpad9"` \| `"PageUp"` \| `"Numpad3"` \| `"PageDown"` \| `"End"` \| `"Numpad1"` \| `"Home"` \| `"Numpad7"` \| `"ArrowLeft"` \| `"Numpad4"` \| `"Numpad8"` \| `"ArrowUp"` \| `"ArrowRight"` \| `"Numpad6"` \| `"Numpad2"` \| `"ArrowDown"` \| `"Select"` \| `"Open"` \| `"PrintScreen"` \| `"Insert"` \| `"Numpad0"` \| `"Delete"` \| `"NumpadDecimal"` \| `"Digit0"` \| `"Digit1"` \| `"Digit2"` \| `"Digit3"` \| `"Digit4"` \| `"Digit5"` \| `"Digit6"` \| `"Digit7"` \| `"Digit8"` \| `"Digit9"` \| `"KeyA"` \| `"KeyB"` \| `"KeyC"` \| `"KeyD"` \| `"KeyE"` \| `"KeyF"` \| `"KeyG"` \| `"KeyH"` \| `"KeyI"` \| `"KeyJ"` \| `"KeyK"` \| `"KeyL"` \| `"KeyM"` \| `"KeyN"` \| `"KeyO"` \| `"KeyP"` \| `"KeyQ"` \| `"KeyR"` \| `"KeyS"` \| `"KeyT"` \| `"KeyU"` \| `"KeyV"` \| `"KeyW"` \| `"KeyX"` \| `"KeyY"` \| `"KeyZ"` \| `"MetaLeft"` \| `"MetaRight"` \| `"ContextMenu"` \| `"NumpadMultiply"` \| `"NumpadAdd"` \| `"NumpadSubtract"` \| `"NumpadDivide"` \| `"F1"` \| `"F2"` \| `"F3"` \| `"F4"` \| `"F5"` \| `"F6"` \| `"F7"` \| `"F8"` \| `"F9"` \| `"F10"` \| `"F11"` \| `"F12"` \| `"F13"` \| `"F14"` \| `"F15"` \| `"F16"` \| `"F17"` \| `"F18"` \| `"F19"` \| `"F20"` \| `"F21"` \| `"F22"` \| `"F23"` \| `"F24"` \| `"NumLock"` \| `"ScrollLock"` \| `"AudioVolumeMute"` \| `"AudioVolumeDown"` \| `"AudioVolumeUp"` \| `"MediaTrackNext"` \| `"MediaTrackPrevious"` \| `"MediaStop"` \| `"MediaPlayPause"` \| `"Semicolon"` \| `"Equal"` \| `"NumpadEqual"` \| `"Comma"` \| `"Minus"` \| `"Period"` \| `"Slash"` \| `"Backquote"` \| `"BracketLeft"` \| `"Backslash"` \| `"BracketRight"` \| `"Quote"` \| `"AltGraph"` \| `"Props"` \| `"Cancel"` \| `"Clear"` \| `"Shift"` \| `"Control"` \| `"Alt"` \| `"Accept"` \| `"ModeChange"` \| `" "` \| `"Print"` \| `"Execute"` \| `"\u0000"` \| `"a"` \| `"b"` \| `"c"` \| `"d"` \| `"e"` \| `"f"` \| `"g"` \| `"h"` \| `"i"` \| `"j"` \| `"k"` \| `"l"` \| `"m"` \| `"n"` \| `"o"` \| `"p"` \| `"q"` \| `"r"` \| `"s"` \| `"t"` \| `"u"` \| `"v"` \| `"w"` \| `"x"` \| `"y"` \| `"z"` \| `"Meta"` \| `"*"` \| `"+"` \| `"-"` \| `"/"` \| `";"` \| `"="` \| `","` \| `"."` \| `` "`" `` \| `"["` \| `"\\"` \| `"]"` \| `"'"` \| `"Attn"` \| `"CrSel"` \| `"ExSel"` \| `"EraseEof"` \| `"Play"` \| `"ZoomOut"` \| `")"` \| `"!"` \| `"@"` \| `"#"` \| `"$"` \| `"%"` \| `"^"` \| `"&"` \| `"("` \| `"A"` \| `"B"` \| `"C"` \| `"D"` \| `"E"` \| `"F"` \| `"G"` \| `"H"` \| `"I"` \| `"J"` \| `"K"` \| `"L"` \| `"M"` \| `"N"` \| `"O"` \| `"P"` \| `"Q"` \| `"R"` \| `"S"` \| `"T"` \| `"U"` \| `"V"` \| `"W"` \| `"X"` \| `"Y"` \| `"Z"` \| `":"` \| `"<"` \| `"_"` \| `">"` \| `"?"` \| `"~"` \| `"{"` \| `"|"` \| `"}"` \| `"\""` \| `"SoftLeft"` \| `"SoftRight"` \| `"Camera"` \| `"Call"` \| `"EndCall"` \| `"VolumeDown"` \| `"VolumeUp"`

#### Defined in

[Schema.ts:297](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L297)

---

### Pattern

Ƭ **Pattern**: `string`

#### Defined in

[Schema.ts:18](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L18)

---

### PointerButtonType

Ƭ **PointerButtonType**: `"primary"` \| `"auxiliary"` \| `"secondary"` \| `"back"` \| `"forward"`

#### Defined in

[Schema.ts:101](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L101)

---

### PointerDeviceType

Ƭ **PointerDeviceType**: `"mouse"` \| `"pen"` \| `"touch"`

#### Defined in

[Schema.ts:100](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L100)

---

### ScrollElementStep

Ƭ **ScrollElementStep**: [`ScrollPageStep`](../interfaces/Schema.ScrollPageStep.md) & [`StepWithSelectors`](../interfaces/Schema.StepWithSelectors.md)

#### Defined in

[Schema.ts:194](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L194)

---

### ScrollStep

Ƭ **ScrollStep**: [`ScrollPageStep`](../interfaces/Schema.ScrollPageStep.md) \| [`ScrollElementStep`](Schema.md#scrollelementstep)

#### Defined in

[Schema.ts:196](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L196)

---

### Selector

Ƭ **Selector**: `string` \| `string`[]

#### Defined in

[Schema.ts:19](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L19)

---

### Step

Ƭ **Step**: [`UserStep`](Schema.md#userstep) \| [`AssertionStep`](Schema.md#assertionstep)

#### Defined in

[Schema.ts:277](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L277)

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

Ƭ **UserStep**: [`ChangeStep`](../interfaces/Schema.ChangeStep.md) \| [`ClickStep`](../interfaces/Schema.ClickStep.md) \| [`HoverStep`](../interfaces/Schema.HoverStep.md) \| [`CloseStep`](../interfaces/Schema.CloseStep.md) \| [`CustomStep`](Schema.md#customstep) \| [`DoubleClickStep`](../interfaces/Schema.DoubleClickStep.md) \| [`EmulateNetworkConditionsStep`](../interfaces/Schema.EmulateNetworkConditionsStep.md) \| [`KeyDownStep`](../interfaces/Schema.KeyDownStep.md) \| [`KeyUpStep`](../interfaces/Schema.KeyUpStep.md) \| [`NavigateStep`](../interfaces/Schema.NavigateStep.md) \| [`ScrollStep`](Schema.md#scrollstep) \| [`SetViewportStep`](../interfaces/Schema.SetViewportStep.md)

#### Defined in

[Schema.ts:213](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L213)
