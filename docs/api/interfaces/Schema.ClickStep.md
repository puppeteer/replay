[@puppeteer/replay](../README.md) / [Schema](../modules/Schema.md) / ClickStep

# Interface: ClickStep

[Schema](../modules/Schema.md).ClickStep

## Hierarchy

- [`ClickAttributes`](Schema.ClickAttributes.md)

- [`StepWithSelectors`](Schema.StepWithSelectors.md)

  ↳ **`ClickStep`**

## Table of contents

### Properties

- [assertedEvents](Schema.ClickStep.md#assertedevents)
- [button](Schema.ClickStep.md#button)
- [deviceType](Schema.ClickStep.md#devicetype)
- [duration](Schema.ClickStep.md#duration)
- [frame](Schema.ClickStep.md#frame)
- [offsetX](Schema.ClickStep.md#offsetx)
- [offsetY](Schema.ClickStep.md#offsety)
- [selectors](Schema.ClickStep.md#selectors)
- [target](Schema.ClickStep.md#target)
- [timeout](Schema.ClickStep.md#timeout)
- [type](Schema.ClickStep.md#type)

## Properties

### assertedEvents

• `Optional` **assertedEvents**: [`NavigationEvent`](Schema.NavigationEvent.md)[]

#### Inherited from

[StepWithSelectors](Schema.StepWithSelectors.md).[assertedEvents](Schema.StepWithSelectors.md#assertedevents)

#### Defined in

[Schema.ts:61](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L61)

---

### button

• `Optional` **button**: [`PointerButtonType`](../modules/Schema.md#pointerbuttontype)

Defaults to 'primary' if the device type is a mouse.

#### Inherited from

[ClickAttributes](Schema.ClickAttributes.md).[button](Schema.ClickAttributes.md#button)

#### Defined in

[Schema.ts:116](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L116)

---

### deviceType

• `Optional` **deviceType**: [`PointerDeviceType`](../modules/Schema.md#pointerdevicetype)

Pointer type for the event. Defaults to 'mouse'.

#### Inherited from

[ClickAttributes](Schema.ClickAttributes.md).[deviceType](Schema.ClickAttributes.md#devicetype)

#### Defined in

[Schema.ts:112](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L112)

---

### duration

• `Optional` **duration**: `number`

Delay (in ms) between the mouse up and mouse down of the click. Defaults to
50ms.

#### Defined in

[Schema.ts:139](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L139)

---

### frame

• `Optional` **frame**: [`FrameSelector`](../modules/Schema.md#frameselector)

Defaults to main frame

#### Inherited from

[StepWithSelectors](Schema.StepWithSelectors.md).[frame](Schema.StepWithSelectors.md#frame)

#### Defined in

[Schema.ts:75](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L75)

---

### offsetX

• **offsetX**: `number`

in px, relative to the top-left corner of the element content box. Defaults
to the center of the element

#### Inherited from

[ClickAttributes](Schema.ClickAttributes.md).[offsetX](Schema.ClickAttributes.md#offsetx)

#### Defined in

[Schema.ts:121](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L121)

---

### offsetY

• **offsetY**: `number`

in px, relative to the top-left corner of the element content box. Defaults
to the center of the element

#### Inherited from

[ClickAttributes](Schema.ClickAttributes.md).[offsetY](Schema.ClickAttributes.md#offsety)

#### Defined in

[Schema.ts:126](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L126)

---

### selectors

• **selectors**: [`Selector`](../modules/Schema.md#selector)[]

A list of alternative selectors that lead to selection of a single element
to perform the step on. Currently, we support CSS selectors, ARIA selectors
(start with 'aria/'), XPath selectors (start with `xpath/`) and text
selectors (start with `text/`). Each selector could be a string or an array
of strings. If it's a string, it means that the selector points directly to
the target element. If it's an array, the last element is the selector for
the target element and the preceding selectors point to the ancestor
elements. If the parent element is a shadow root host, the subsequent
selector is evaluated only against the shadow DOM of the host (i.e.,
`parent.shadowRoot.querySelector`). If the parent element is not a shadow
root host, the subsequent selector is evaluated in the regular DOM (i.e.,
`parent.querySelector`).

During the execution, it's recommended that the implementation tries out
all of the alternative selectors to improve reliability of the replay as
some selectors might get outdated over time.

#### Inherited from

[StepWithSelectors](Schema.StepWithSelectors.md).[selectors](Schema.StepWithSelectors.md#selectors)

#### Defined in

[Schema.ts:97](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L97)

---

### target

• `Optional` **target**: `string`

Defaults to main

#### Inherited from

[StepWithSelectors](Schema.StepWithSelectors.md).[target](Schema.StepWithSelectors.md#target)

#### Defined in

[Schema.ts:68](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L68)

---

### timeout

• `Optional` **timeout**: `number`

#### Inherited from

[StepWithSelectors](Schema.StepWithSelectors.md).[timeout](Schema.StepWithSelectors.md#timeout)

#### Defined in

[Schema.ts:60](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L60)

---

### type

• **type**: [`Click`](../enums/Schema.StepType.md#click)

#### Overrides

[StepWithSelectors](Schema.StepWithSelectors.md).[type](Schema.StepWithSelectors.md#type)

#### Defined in

[Schema.ts:134](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L134)
