[@puppeteer/replay](../README.md) / WaitForElementStep

# Interface: WaitForElementStep

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

## Hierarchy

- [`StepWithSelectors`](Schema.StepWithSelectors.md)

  ↳ **`WaitForElementStep`**

## Table of contents

### Properties

- [assertedEvents](WaitForElementStep.md#assertedevents)
- [attributes](WaitForElementStep.md#attributes)
- [count](WaitForElementStep.md#count)
- [frame](WaitForElementStep.md#frame)
- [operator](WaitForElementStep.md#operator)
- [properties](WaitForElementStep.md#properties)
- [selectors](WaitForElementStep.md#selectors)
- [target](WaitForElementStep.md#target)
- [timeout](WaitForElementStep.md#timeout)
- [type](WaitForElementStep.md#type)
- [visible](WaitForElementStep.md#visible)

## Properties

### assertedEvents

• `Optional` **assertedEvents**: [`NavigationEvent`](Schema.NavigationEvent.md)[]

#### Inherited from

[StepWithSelectors](Schema.StepWithSelectors.md).[assertedEvents](Schema.StepWithSelectors.md#assertedevents)

#### Defined in

[Schema.ts:64](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L64)

---

### attributes

• `Optional` **attributes**: `Object`

Whether to also check the element(s) for the given attributes.

#### Index signature

▪ [name: `string`]: `string`

#### Defined in

[Schema.ts:272](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L272)

---

### count

• `Optional` **count**: `number`

**`Default Value`**

`1`

#### Defined in

[Schema.ts:255](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L255)

---

### frame

• `Optional` **frame**: [`FrameSelector`](../modules/Schema.md#frameselector)

Defaults to main frame

#### Inherited from

[StepWithSelectors](Schema.StepWithSelectors.md).[frame](Schema.StepWithSelectors.md#frame)

#### Defined in

[Schema.ts:78](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L78)

---

### operator

• `Optional` **operator**: `">="` \| `"=="` \| `"<="`

**`Default Value`**

`'=='`

#### Defined in

[Schema.ts:251](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L251)

---

### properties

• `Optional` **properties**: `Partial`<`JSONSerializable`<`HTMLElement`\>\> & { `[key: string]`: `JSONValue`; }

Whether to also check the element(s) for the given properties.

#### Defined in

[Schema.ts:266](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L266)

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

[Schema.ts:100](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L100)

---

### target

• `Optional` **target**: `string`

Defaults to main

#### Inherited from

[StepWithSelectors](Schema.StepWithSelectors.md).[target](Schema.StepWithSelectors.md#target)

#### Defined in

[Schema.ts:71](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L71)

---

### timeout

• `Optional` **timeout**: `number`

#### Inherited from

[StepWithSelectors](Schema.StepWithSelectors.md).[timeout](Schema.StepWithSelectors.md#timeout)

#### Defined in

[Schema.ts:63](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L63)

---

### type

• **type**: [`WaitForElement`](../enums/Schema.StepType.md#waitforelement)

#### Overrides

[StepWithSelectors](Schema.StepWithSelectors.md).[type](Schema.StepWithSelectors.md#type)

#### Defined in

[Schema.ts:247](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L247)

---

### visible

• `Optional` **visible**: `boolean`

Whether to wait for elements matching this step to be hidden. This can be
thought of as an inversion of this step.

**`Default Value`**

`true`

#### Defined in

[Schema.ts:262](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L262)
