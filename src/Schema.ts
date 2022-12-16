/**
    Copyright 2022 Google LLC

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        https://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
 */

export type Target = string;
export type Pattern = string;
export type Selector = string | string[];
export type FrameSelector = number[];

export enum SelectorType {
  CSS = 'css',
  ARIA = 'aria',
  Text = 'text',
  XPath = 'xpath',
}

export enum StepType {
  Change = 'change',
  Click = 'click',
  Close = 'close',
  CustomStep = 'customStep',
  DoubleClick = 'doubleClick',
  EmulateNetworkConditions = 'emulateNetworkConditions',
  Hover = 'hover',
  KeyDown = 'keyDown',
  KeyUp = 'keyUp',
  Navigate = 'navigate',
  Scroll = 'scroll',
  SetViewport = 'setViewport',
  WaitForURL = 'waitForURL',
  WaitForElement = 'waitForElement',
  WaitForExpression = 'waitForExpression',
}

export enum AssertedEventType {
  Navigation = 'navigation',
}

export interface NavigationEvent {
  type: AssertedEventType.Navigation;
  url?: Pattern;
  title?: Pattern;
}

export type AssertedEvent = NavigationEvent;

export interface BaseStep {
  type: StepType;
  timeout?: number;
  assertedEvents?: AssertedEvent[];
}

export interface StepWithTarget extends BaseStep {
  /**
   * Defaults to main
   */
  target?: Target;
}

export interface StepWithFrame extends StepWithTarget {
  /**
   * Defaults to main frame
   */
  frame?: FrameSelector;
}

export interface StepWithSelectors extends StepWithFrame {
  /**
   * A list of alternative selectors that lead to selection of a single element
   * to perform the step on. Currently, we support CSS selectors, ARIA selectors
   * (start with 'aria/'), XPath selectors (start with `xpath/`) and text
   * selectors (start with `text/`). Each selector could be a string or an array
   * of strings. If it's a string, it means that the selector points directly to
   * the target element. If it's an array, the last element is the selector for
   * the target element and the preceding selectors point to the ancestor
   * elements. If the parent element is a shadow root host, the subsequent
   * selector is evaluated only against the shadow DOM of the host (i.e.,
   * `parent.shadowRoot.querySelector`). If the parent element is not a shadow
   * root host, the subsequent selector is evaluated in the regular DOM (i.e.,
   * `parent.querySelector`).
   *
   * During the execution, it's recommended that the implementation tries out
   * all of the alternative selectors to improve reliability of the replay as
   * some selectors might get outdated over time.
   */
  selectors: Selector[];
}

export type PointerDeviceType = 'mouse' | 'pen' | 'touch';
export type PointerButtonType =
  | 'primary'
  | 'auxiliary'
  | 'secondary'
  | 'back'
  | 'forward';

export interface ClickAttributes {
  /**
   * Pointer type for the event. Defaults to 'mouse'.
   */
  deviceType?: PointerDeviceType;
  /**
   * Defaults to 'primary' if the device type is a mouse.
   */
  button?: PointerButtonType;
  /**
   * in px, relative to the top-left corner of the element content box. Defaults
   * to the center of the element
   */
  offsetX: number;
  /**
   * in px, relative to the top-left corner of the element content box. Defaults
   * to the center of the element
   */
  offsetY: number;
}

export interface DoubleClickStep extends ClickAttributes, StepWithSelectors {
  type: StepType.DoubleClick;
}

export interface ClickStep extends ClickAttributes, StepWithSelectors {
  type: StepType.Click;
  /**
   * Delay (in ms) between the mouse up and mouse down of the click. Defaults to
   * 50ms.
   */
  duration?: number;
}

export interface HoverStep extends StepWithSelectors {
  type: StepType.Hover;
}

export interface ChangeStep extends StepWithSelectors {
  type: StepType.Change;
  value: string;
}

export interface EmulateNetworkConditionsStep extends StepWithTarget {
  type: StepType.EmulateNetworkConditions;
  download: number;
  upload: number;
  latency: number;
}

export interface KeyDownStep extends StepWithTarget {
  type: StepType.KeyDown;
  key: Key;
}

export interface KeyUpStep extends StepWithTarget {
  type: StepType.KeyUp;
  key: Key;
}

export interface CloseStep extends StepWithTarget {
  type: StepType.Close;
}

export interface SetViewportStep extends StepWithTarget {
  type: StepType.SetViewport;
  width: number;
  height: number;
  deviceScaleFactor: number;
  isMobile: boolean;
  hasTouch: boolean;
  isLandscape: boolean;
}

export interface ScrollPageStep extends StepWithFrame {
  type: StepType.Scroll;
  /**
   * Absolute scroll x position in px. Defaults to 0
   */
  x?: number;
  /**
   * Absolute scroll y position in px. Defaults to 0
   */
  y?: number;
}

export type ScrollElementStep = ScrollPageStep & StepWithSelectors;

export type ScrollStep = ScrollPageStep | ScrollElementStep;

export interface NavigateStep extends StepWithTarget {
  type: StepType.Navigate;
  url: string;
}

export interface CustomStepParams {
  type: StepType.CustomStep;
  name: string;
  parameters: unknown;
}

export type CustomStep =
  | (CustomStepParams & StepWithTarget)
  | (CustomStepParams & StepWithFrame);

export type UserStep =
  | ChangeStep
  | ClickStep
  | HoverStep
  | CloseStep
  | CustomStep
  | DoubleClickStep
  | EmulateNetworkConditionsStep
  | KeyDownStep
  | KeyUpStep
  | NavigateStep
  | ScrollStep
  | SetViewportStep;

/**
 * `waitForURL` allows waiting for a particular URL to match the given URL. This
 * can either be a submatch (default) or exact.
 *
 * @example
 * The following step would wait for a URL to have `"google.com"` as its hostname.
 *
 * ```ts
 * {
 *   "type": "waitForURL",
 *   "url": "google.com"
 * }
 * ```
 */
export interface WaitForURLStep extends StepWithFrame {
  type: StepType.WaitForURL;
  /**
   * URL to match. This can be simple a hostname such as `"https://google.com"`
   * or something more complex like `"https://localhost:1024/test?test=1"`; in
   * either case, the URL is parsed per the spec
   * https://url.spec.whatwg.org/#example-url-parsing.
   */
  url: string;
  /**
   * Whether to match exactly or submatch.
   *
   * @defaultValue `false`
   */
  exact?: boolean;
}

/**
 * `waitForElement` allows waiting for the presence (or absence) of the number
 * of elements identified by the selector.
 *
 * For example, the following step would wait for less than three elements
 * to be on the page that match the selector `.my-class`.
 *
 * ```
 * {
 *   "type": "waitForElement",
 *   "selectors": [".my-class"],
 *   "operator": "<=",
 *   "count": 2,
 * }
 * ```
 */
export interface WaitForElementStep extends StepWithSelectors {
  type: StepType.WaitForElement;
  /**
   * @defaultValue `'=='`
   */
  operator?: '>=' | '==' | '<=';
  /**
   * @defaultValue `1`
   */
  count?: number;
  /**
   * Whether to wait for elements matching this step to be hidden. This can be
   * thought of as an inversion of this step.
   *
   * @defaultValue `false`
   */
  hidden?: boolean;
  /**
   * Whether to also check the element(s) for the given properties.
   */
  properties?: Partial<HTMLElement> & { [name: string]: unknown };
}

/**
 * `waitForExpression` allows for a JavaScript expression to resolve to truthy
 * value.
 *
 * For example, the following step pauses for two seconds and then resolves to
 * true allowing the replay to continue.
 *
 * ```
 * {
 *   "type": "waitForExpression",
 *   "expression": "new Promise(resolve => setTimeout(() => resolve(true),
 * 2000))",
 * }
 * ```
 */
export interface WaitForExpressionStep extends StepWithFrame {
  type: StepType.WaitForExpression;
  expression: string;
}

export type AssertionStep =
  | WaitForElementStep
  | WaitForExpressionStep
  | WaitForURLStep;

export type Step = UserStep | AssertionStep;

export interface UserFlow {
  /**
   * Human-readble title describing the recorder user flow.
   */
  title: string;
  /**
   * Timeout in milliseconds.
   */
  timeout?: number;
  /**
   * The name of the attribute to use to generate selectors instead of regular
   * CSS selectors. For example, specifying `data-testid` would generate the
   * selector `[data-testid=value]` for the element `<div data-testid=value>`.
   */
  selectorAttribute?: string;
  steps: Step[];
}

export type Key =
  | '0'
  | '1'
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'
  | 'Power'
  | 'Eject'
  | 'Abort'
  | 'Help'
  | 'Backspace'
  | 'Tab'
  | 'Numpad5'
  | 'NumpadEnter'
  | 'Enter'
  | '\r'
  | '\n'
  | 'ShiftLeft'
  | 'ShiftRight'
  | 'ControlLeft'
  | 'ControlRight'
  | 'AltLeft'
  | 'AltRight'
  | 'Pause'
  | 'CapsLock'
  | 'Escape'
  | 'Convert'
  | 'NonConvert'
  | 'Space'
  | 'Numpad9'
  | 'PageUp'
  | 'Numpad3'
  | 'PageDown'
  | 'End'
  | 'Numpad1'
  | 'Home'
  | 'Numpad7'
  | 'ArrowLeft'
  | 'Numpad4'
  | 'Numpad8'
  | 'ArrowUp'
  | 'ArrowRight'
  | 'Numpad6'
  | 'Numpad2'
  | 'ArrowDown'
  | 'Select'
  | 'Open'
  | 'PrintScreen'
  | 'Insert'
  | 'Numpad0'
  | 'Delete'
  | 'NumpadDecimal'
  | 'Digit0'
  | 'Digit1'
  | 'Digit2'
  | 'Digit3'
  | 'Digit4'
  | 'Digit5'
  | 'Digit6'
  | 'Digit7'
  | 'Digit8'
  | 'Digit9'
  | 'KeyA'
  | 'KeyB'
  | 'KeyC'
  | 'KeyD'
  | 'KeyE'
  | 'KeyF'
  | 'KeyG'
  | 'KeyH'
  | 'KeyI'
  | 'KeyJ'
  | 'KeyK'
  | 'KeyL'
  | 'KeyM'
  | 'KeyN'
  | 'KeyO'
  | 'KeyP'
  | 'KeyQ'
  | 'KeyR'
  | 'KeyS'
  | 'KeyT'
  | 'KeyU'
  | 'KeyV'
  | 'KeyW'
  | 'KeyX'
  | 'KeyY'
  | 'KeyZ'
  | 'MetaLeft'
  | 'MetaRight'
  | 'ContextMenu'
  | 'NumpadMultiply'
  | 'NumpadAdd'
  | 'NumpadSubtract'
  | 'NumpadDivide'
  | 'F1'
  | 'F2'
  | 'F3'
  | 'F4'
  | 'F5'
  | 'F6'
  | 'F7'
  | 'F8'
  | 'F9'
  | 'F10'
  | 'F11'
  | 'F12'
  | 'F13'
  | 'F14'
  | 'F15'
  | 'F16'
  | 'F17'
  | 'F18'
  | 'F19'
  | 'F20'
  | 'F21'
  | 'F22'
  | 'F23'
  | 'F24'
  | 'NumLock'
  | 'ScrollLock'
  | 'AudioVolumeMute'
  | 'AudioVolumeDown'
  | 'AudioVolumeUp'
  | 'MediaTrackNext'
  | 'MediaTrackPrevious'
  | 'MediaStop'
  | 'MediaPlayPause'
  | 'Semicolon'
  | 'Equal'
  | 'NumpadEqual'
  | 'Comma'
  | 'Minus'
  | 'Period'
  | 'Slash'
  | 'Backquote'
  | 'BracketLeft'
  | 'Backslash'
  | 'BracketRight'
  | 'Quote'
  | 'AltGraph'
  | 'Props'
  | 'Cancel'
  | 'Clear'
  | 'Shift'
  | 'Control'
  | 'Alt'
  | 'Accept'
  | 'ModeChange'
  | ' '
  | 'Print'
  | 'Execute'
  | '\u0000'
  | 'a'
  | 'b'
  | 'c'
  | 'd'
  | 'e'
  | 'f'
  | 'g'
  | 'h'
  | 'i'
  | 'j'
  | 'k'
  | 'l'
  | 'm'
  | 'n'
  | 'o'
  | 'p'
  | 'q'
  | 'r'
  | 's'
  | 't'
  | 'u'
  | 'v'
  | 'w'
  | 'x'
  | 'y'
  | 'z'
  | 'Meta'
  | '*'
  | '+'
  | '-'
  | '/'
  | ';'
  | '='
  | ','
  | '.'
  | '`'
  | '['
  | '\\'
  | ']'
  | "'"
  | 'Attn'
  | 'CrSel'
  | 'ExSel'
  | 'EraseEof'
  | 'Play'
  | 'ZoomOut'
  | ')'
  | '!'
  | '@'
  | '#'
  | '$'
  | '%'
  | '^'
  | '&'
  | '('
  | 'A'
  | 'B'
  | 'C'
  | 'D'
  | 'E'
  | 'F'
  | 'G'
  | 'H'
  | 'I'
  | 'J'
  | 'K'
  | 'L'
  | 'M'
  | 'N'
  | 'O'
  | 'P'
  | 'Q'
  | 'R'
  | 'S'
  | 'T'
  | 'U'
  | 'V'
  | 'W'
  | 'X'
  | 'Y'
  | 'Z'
  | ':'
  | '<'
  | '_'
  | '>'
  | '?'
  | '~'
  | '{'
  | '|'
  | '}'
  | '"'
  | 'SoftLeft'
  | 'SoftRight'
  | 'Camera'
  | 'Call'
  | 'EndCall'
  | 'VolumeDown'
  | 'VolumeUp';
