[@puppeteer/replay](../README.md) / [Schema](../modules/Schema.md) / ClickAttributes

# Interface: ClickAttributes

[Schema](../modules/Schema.md).ClickAttributes

## Hierarchy

- **`ClickAttributes`**

  ↳ [`DoubleClickStep`](Schema.DoubleClickStep.md)

  ↳ [`ClickStep`](Schema.ClickStep.md)

## Table of contents

### Properties

- [button](Schema.ClickAttributes.md#button)
- [deviceType](Schema.ClickAttributes.md#devicetype)
- [offsetX](Schema.ClickAttributes.md#offsetx)
- [offsetY](Schema.ClickAttributes.md#offsety)

## Properties

### button

• `Optional` **button**: ``"primary"`` \| ``"auxiliary"`` \| ``"secondary"`` \| ``"back"`` \| ``"forward"``

Defaults to 'primary' if the device type is a mouse.

#### Defined in

[Schema.ts:62](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L62)

___

### deviceType

• `Optional` **deviceType**: ``"mouse"`` \| ``"pen"`` \| ``"touch"``

Pointer type for the event. Defaults to 'mouse'.

#### Defined in

[Schema.ts:58](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L58)

___

### offsetX

• **offsetX**: `number`

in px, relative to the top-left corner of the element content box. Defaults
to the center of the element

#### Defined in

[Schema.ts:67](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L67)

___

### offsetY

• **offsetY**: `number`

in px, relative to the top-left corner of the element content box. Defaults
to the center of the element

#### Defined in

[Schema.ts:72](https://github.com/puppeteer/replay/blob/main/src/Schema.ts#L72)
