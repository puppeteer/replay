[**@puppeteer/replay**](../README.md)

---

[@puppeteer/replay](../README.md) / WaitForElementStep

# Interface: WaitForElementStep

Defined in: [Schema.ts:237](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L237)

`waitForElement` allows waiting for the presence (or absence) of the number
of elements identified by the selector.

For example, the following step would wait for less than three elements
to be on the page that match the selector `.my-class`.

```
{
  "type": "waitForElement",
  "selectors": [".my-class"],
  "operator": "<=",
  "count": 2,
}
```

## Extends

- [`StepWithSelectors`](StepWithSelectors.md)

## Properties

### assertedEvents?

> `optional` **assertedEvents?**: [`NavigationEvent`](NavigationEvent.md)[]

Defined in: [Schema.ts:54](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L54)

#### Inherited from

[`StepWithSelectors`](StepWithSelectors.md).[`assertedEvents`](StepWithSelectors.md#assertedevents)

---

### attributes?

> `optional` **attributes?**: `object`

Defined in: [Schema.ts:263](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L263)

Whether to also check the element(s) for the given attributes.

#### Index Signature

\[`name`: `string`\]: `string`

---

### count?

> `optional` **count?**: `number`

Defined in: [Schema.ts:246](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L246)

#### Default Value

`1`

---

### frame?

> `optional` **frame?**: [`FrameSelector`](../type-aliases/FrameSelector.md)

Defined in: [Schema.ts:68](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L68)

Defaults to main frame

#### Inherited from

[`StepWithSelectors`](StepWithSelectors.md).[`frame`](StepWithSelectors.md#frame)

---

### operator?

> `optional` **operator?**: `">="` \| `"=="` \| `"<="`

Defined in: [Schema.ts:242](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L242)

#### Default Value

`'=='`

---

### properties?

> `optional` **properties?**: `Partial`\<`JSONSerializable`\<`HTMLElement`\>\> & `object`

Defined in: [Schema.ts:257](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L257)

Whether to also check the element(s) for the given properties.

---

### selectors

> **selectors**: [`Selector`](../type-aliases/Selector.md)[]

Defined in: [Schema.ts:90](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L90)

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

Defined in: [Schema.ts:61](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L61)

Defaults to main

#### Inherited from

[`StepWithSelectors`](StepWithSelectors.md).[`target`](StepWithSelectors.md#target)

---

### timeout?

> `optional` **timeout?**: `number`

Defined in: [Schema.ts:53](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L53)

#### Inherited from

[`StepWithSelectors`](StepWithSelectors.md).[`timeout`](StepWithSelectors.md#timeout)

---

### type

> **type**: [`WaitForElement`](../enumerations/StepType.md#waitforelement)

Defined in: [Schema.ts:238](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L238)

#### Overrides

[`StepWithSelectors`](StepWithSelectors.md).[`type`](StepWithSelectors.md#type)

---

### visible?

> `optional` **visible?**: `boolean`

Defined in: [Schema.ts:253](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L253)

Whether to wait for elements matching this step to be hidden. This can be
thought of as an inversion of this step.

#### Default Value

`true`
