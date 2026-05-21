[**@puppeteer/replay**](../README.md)

---

[@puppeteer/replay](../README.md) / StepWithSelectors

# Interface: StepWithSelectors

Defined in: [Schema.ts:81](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L81)

## Extends

- [`StepWithFrame`](StepWithFrame.md)

## Extended by

- [`DoubleClickStep`](DoubleClickStep.md)
- [`ClickStep`](ClickStep.md)
- [`HoverStep`](HoverStep.md)
- [`ChangeStep`](ChangeStep.md)
- [`WaitForElementStep`](WaitForElementStep.md)

## Properties

### assertedEvents?

> `optional` **assertedEvents?**: [`NavigationEvent`](NavigationEvent.md)[]

Defined in: [Schema.ts:64](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L64)

#### Inherited from

[`StepWithFrame`](StepWithFrame.md).[`assertedEvents`](StepWithFrame.md#assertedevents)

---

### frame?

> `optional` **frame?**: [`FrameSelector`](../type-aliases/FrameSelector.md)

Defined in: [Schema.ts:78](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L78)

Defaults to main frame

#### Inherited from

[`StepWithFrame`](StepWithFrame.md).[`frame`](StepWithFrame.md#frame)

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

---

### target?

> `optional` **target?**: `string`

Defined in: [Schema.ts:71](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L71)

Defaults to main

#### Inherited from

[`StepWithFrame`](StepWithFrame.md).[`target`](StepWithFrame.md#target)

---

### timeout?

> `optional` **timeout?**: `number`

Defined in: [Schema.ts:63](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L63)

#### Inherited from

[`StepWithFrame`](StepWithFrame.md).[`timeout`](StepWithFrame.md#timeout)

---

### type

> **type**: [`StepType`](../enumerations/StepType.md)

Defined in: [Schema.ts:62](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L62)

#### Inherited from

[`StepWithFrame`](StepWithFrame.md).[`type`](StepWithFrame.md#type)
