[**@puppeteer/replay**](../README.md)

---

[@puppeteer/replay](../README.md) / ClickAttributes

# Interface: ClickAttributes

Defined in: [Schema.ts:111](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L111)

## Extended by

- [`DoubleClickStep`](DoubleClickStep.md)
- [`ClickStep`](ClickStep.md)

## Properties

### button?

> `optional` **button?**: [`PointerButtonType`](../type-aliases/PointerButtonType.md)

Defined in: [Schema.ts:119](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L119)

Defaults to 'primary' if the device type is a mouse.

---

### deviceType?

> `optional` **deviceType?**: [`PointerDeviceType`](../type-aliases/PointerDeviceType.md)

Defined in: [Schema.ts:115](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L115)

Pointer type for the event. Defaults to 'mouse'.

---

### duration?

> `optional` **duration?**: `number`

Defined in: [Schema.ts:135](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L135)

Delay (in ms) between the mouse up and mouse down of the click.

#### Default Value

`50`

---

### offsetX

> **offsetX**: `number`

Defined in: [Schema.ts:124](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L124)

in px, relative to the top-left corner of the element content box. Defaults
to the center of the element

---

### offsetY

> **offsetY**: `number`

Defined in: [Schema.ts:129](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L129)

in px, relative to the top-left corner of the element content box. Defaults
to the center of the element
