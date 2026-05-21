[**@puppeteer/replay**](../README.md)

---

[@puppeteer/replay](../README.md) / DoubleClickStep

# Interface: DoubleClickStep

Defined in: [Schema.ts:138](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L138)

## Extends

- [`ClickAttributes`](ClickAttributes.md).[`StepWithSelectors`](StepWithSelectors.md)

## Properties

### assertedEvents?

> `optional` **assertedEvents?**: [`NavigationEvent`](NavigationEvent.md)[]

Defined in: [Schema.ts:64](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L64)

#### Inherited from

[`StepWithSelectors`](StepWithSelectors.md).[`assertedEvents`](StepWithSelectors.md#assertedevents)

---

### button?

> `optional` **button?**: [`PointerButtonType`](../type-aliases/PointerButtonType.md)

Defined in: [Schema.ts:119](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L119)

Defaults to 'primary' if the device type is a mouse.

#### Inherited from

[`ClickAttributes`](ClickAttributes.md).[`button`](ClickAttributes.md#button)

---

### deviceType?

> `optional` **deviceType?**: [`PointerDeviceType`](../type-aliases/PointerDeviceType.md)

Defined in: [Schema.ts:115](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L115)

Pointer type for the event. Defaults to 'mouse'.

#### Inherited from

[`ClickAttributes`](ClickAttributes.md).[`deviceType`](ClickAttributes.md#devicetype)

---

### duration?

> `optional` **duration?**: `number`

Defined in: [Schema.ts:135](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L135)

Delay (in ms) between the mouse up and mouse down of the click.

#### Default Value

`50`

#### Inherited from

[`ClickAttributes`](ClickAttributes.md).[`duration`](ClickAttributes.md#duration)

---

### frame?

> `optional` **frame?**: [`FrameSelector`](../type-aliases/FrameSelector.md)

Defined in: [Schema.ts:78](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L78)

Defaults to main frame

#### Inherited from

[`StepWithSelectors`](StepWithSelectors.md).[`frame`](StepWithSelectors.md#frame)

---

### offsetX

> **offsetX**: `number`

Defined in: [Schema.ts:124](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L124)

in px, relative to the top-left corner of the element content box. Defaults
to the center of the element

#### Inherited from

[`ClickAttributes`](ClickAttributes.md).[`offsetX`](ClickAttributes.md#offsetx)

---

### offsetY

> **offsetY**: `number`

Defined in: [Schema.ts:129](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L129)

in px, relative to the top-left corner of the element content box. Defaults
to the center of the element

#### Inherited from

[`ClickAttributes`](ClickAttributes.md).[`offsetY`](ClickAttributes.md#offsety)

---

### selectors

> **selectors**: [`Selector`](../type-aliases/Selector.md)[]

Defined in: [Schema.ts:100](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L100)

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

[`StepWithSelectors`](StepWithSelectors.md).[`selectors`](StepWithSelectors.md#selectors)

---

### target?

> `optional` **target?**: `string`

Defined in: [Schema.ts:71](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L71)

Defaults to main

#### Inherited from

[`StepWithSelectors`](StepWithSelectors.md).[`target`](StepWithSelectors.md#target)

---

### timeout?

> `optional` **timeout?**: `number`

Defined in: [Schema.ts:63](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L63)

#### Inherited from

[`StepWithSelectors`](StepWithSelectors.md).[`timeout`](StepWithSelectors.md#timeout)

---

### type

> **type**: [`DoubleClick`](../enumerations/StepType.md#doubleclick)

Defined in: [Schema.ts:139](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L139)

#### Overrides

[`StepWithSelectors`](StepWithSelectors.md).[`type`](StepWithSelectors.md#type)
