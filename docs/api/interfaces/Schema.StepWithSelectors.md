[@puppeteer/replay](../README.md) / [Schema](../modules/Schema.md) / StepWithSelectors

# Interface: StepWithSelectors

[Schema](../modules/Schema.md).StepWithSelectors

## Hierarchy

- [`StepWithFrame`](Schema.StepWithFrame.md)

  ↳ **`StepWithSelectors`**

  ↳↳ [`DoubleClickStep`](Schema.DoubleClickStep.md)

  ↳↳ [`ClickStep`](Schema.ClickStep.md)

  ↳↳ [`HoverStep`](Schema.HoverStep.md)

  ↳↳ [`ChangeStep`](Schema.ChangeStep.md)

  ↳↳ [`WaitForElementStep`](Schema.WaitForElementStep.md)

  ↳↳ [`DoubleClickStep`](DoubleClickStep.md)

  ↳↳ [`ClickStep`](ClickStep.md)

  ↳↳ [`HoverStep`](HoverStep.md)

  ↳↳ [`ChangeStep`](ChangeStep.md)

  ↳↳ [`WaitForElementStep`](WaitForElementStep.md)

## Table of contents

### Properties

- [assertedEvents](Schema.StepWithSelectors.md#assertedevents)
- [frame](Schema.StepWithSelectors.md#frame)
- [selectors](Schema.StepWithSelectors.md#selectors)
- [target](Schema.StepWithSelectors.md#target)
- [timeout](Schema.StepWithSelectors.md#timeout)
- [type](Schema.StepWithSelectors.md#type)

## Properties

### assertedEvents

• `Optional` **assertedEvents**: [`NavigationEvent`](Schema.NavigationEvent.md)[]

#### Inherited from

[StepWithFrame](Schema.StepWithFrame.md).[assertedEvents](Schema.StepWithFrame.md#assertedevents)

#### Defined in

[Schema.ts:64](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L64)

---

### frame

• `Optional` **frame**: [`FrameSelector`](../modules/Schema.md#frameselector)

Defaults to main frame

#### Inherited from

[StepWithFrame](Schema.StepWithFrame.md).[frame](Schema.StepWithFrame.md#frame)

#### Defined in

[Schema.ts:78](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L78)

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

#### Defined in

[Schema.ts:100](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L100)

---

### target

• `Optional` **target**: `string`

Defaults to main

#### Inherited from

[StepWithFrame](Schema.StepWithFrame.md).[target](Schema.StepWithFrame.md#target)

#### Defined in

[Schema.ts:71](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L71)

---

### timeout

• `Optional` **timeout**: `number`

#### Inherited from

[StepWithFrame](Schema.StepWithFrame.md).[timeout](Schema.StepWithFrame.md#timeout)

#### Defined in

[Schema.ts:63](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L63)

---

### type

• **type**: [`StepType`](../enums/Schema.StepType.md)

#### Inherited from

[StepWithFrame](Schema.StepWithFrame.md).[type](Schema.StepWithFrame.md#type)

#### Defined in

[Schema.ts:62](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L62)
