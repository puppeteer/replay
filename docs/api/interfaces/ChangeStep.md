[**@puppeteer/replay**](../README.md)

---

[@puppeteer/replay](../README.md) / ChangeStep

# Interface: ChangeStep

Defined in: [Schema.ts:150](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L150)

## Extends

- [`StepWithSelectors`](StepWithSelectors.md)

## Properties

### assertedEvents?

> `optional` **assertedEvents?**: [`NavigationEvent`](NavigationEvent.md)[]

Defined in: [Schema.ts:64](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L64)

#### Inherited from

[`StepWithSelectors`](StepWithSelectors.md).[`assertedEvents`](StepWithSelectors.md#assertedevents)

---

### frame?

> `optional` **frame?**: [`FrameSelector`](../type-aliases/FrameSelector.md)

Defined in: [Schema.ts:78](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L78)

Defaults to main frame

#### Inherited from

[`StepWithSelectors`](StepWithSelectors.md).[`frame`](StepWithSelectors.md#frame)

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

> **type**: [`Change`](../enumerations/StepType.md#change)

Defined in: [Schema.ts:151](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L151)

#### Overrides

[`StepWithSelectors`](StepWithSelectors.md).[`type`](StepWithSelectors.md#type)

---

### value

> **value**: `string`

Defined in: [Schema.ts:152](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L152)
