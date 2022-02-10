[@puppeteer/replay](../README.md) / [Schema](../modules/Schema.md) / WaitForElementStep

# Interface: WaitForElementStep

[Schema](../modules/Schema.md).WaitForElementStep

`waitForElement` allows waiting for the presence (or absence) of the number of
elements identified by the selector.

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

- [assertedEvents](Schema.WaitForElementStep.md#assertedevents)
- [count](Schema.WaitForElementStep.md#count)
- [frame](Schema.WaitForElementStep.md#frame)
- [operator](Schema.WaitForElementStep.md#operator)
- [selectors](Schema.WaitForElementStep.md#selectors)
- [target](Schema.WaitForElementStep.md#target)
- [timeout](Schema.WaitForElementStep.md#timeout)
- [type](Schema.WaitForElementStep.md#type)

## Properties

### assertedEvents

• `Optional` **assertedEvents**: [`NavigationEvent`](Schema.NavigationEvent.md)[]

#### Inherited from

[StepWithSelectors](Schema.StepWithSelectors.md).[assertedEvents](Schema.StepWithSelectors.md#assertedevents)

#### Defined in

[Schema.ts:33](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L33)

___

### count

• `Optional` **count**: `number`

Defaults to 1

#### Defined in

[Schema.ts:173](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L173)

___

### frame

• `Optional` **frame**: [`FrameSelector`](../modules/Schema.md#frameselector)

Defaults to main frame

#### Inherited from

[StepWithSelectors](Schema.StepWithSelectors.md).[frame](Schema.StepWithSelectors.md#frame)

#### Defined in

[Schema.ts:47](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L47)

___

### operator

• `Optional` **operator**: ``">="`` \| ``"=="`` \| ``"<="``

Defaults to '=='

#### Defined in

[Schema.ts:169](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L169)

___

### selectors

• **selectors**: [`Selector`](../modules/Schema.md#selector)[]

#### Inherited from

[StepWithSelectors](Schema.StepWithSelectors.md).[selectors](Schema.StepWithSelectors.md#selectors)

#### Defined in

[Schema.ts:51](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L51)

___

### target

• `Optional` **target**: `string`

Defaults to main

#### Inherited from

[StepWithSelectors](Schema.StepWithSelectors.md).[target](Schema.StepWithSelectors.md#target)

#### Defined in

[Schema.ts:40](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L40)

___

### timeout

• `Optional` **timeout**: `number`

#### Inherited from

[StepWithSelectors](Schema.StepWithSelectors.md).[timeout](Schema.StepWithSelectors.md#timeout)

#### Defined in

[Schema.ts:32](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L32)

___

### type

• **type**: ``"waitForElement"``

#### Overrides

[StepWithSelectors](Schema.StepWithSelectors.md).[type](Schema.StepWithSelectors.md#type)

#### Defined in

[Schema.ts:165](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L165)
