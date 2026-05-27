[**@puppeteer/replay**](../README.md)

---

[@puppeteer/replay](../README.md) / ClickAttributes

# Interface: ClickAttributes

Defined in: [Schema.ts:101](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L101)

## Extended by

- [`DoubleClickStep`](DoubleClickStep.md)
- [`ClickStep`](ClickStep.md)

## Properties

### button?

> `optional` **button?**: [`PointerButtonType`](../type-aliases/PointerButtonType.md)

Defined in: [Schema.ts:109](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L109)

Defaults to 'primary' if the device type is a mouse.

---

### deviceType?

> `optional` **deviceType?**: [`PointerDeviceType`](../type-aliases/PointerDeviceType.md)

Defined in: [Schema.ts:105](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L105)

Pointer type for the event. Defaults to 'mouse'.

---

### duration?

> `optional` **duration?**: `number`

Defined in: [Schema.ts:125](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L125)

Delay (in ms) between the mouse up and mouse down of the click.

#### Default Value

`50`

---

### offsetX

> **offsetX**: `number`

Defined in: [Schema.ts:114](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L114)

in px, relative to the top-left corner of the element content box. Defaults
to the center of the element

---

### offsetY

> **offsetY**: `number`

Defined in: [Schema.ts:119](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L119)

in px, relative to the top-left corner of the element content box. Defaults
to the center of the element
