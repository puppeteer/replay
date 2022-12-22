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

import { parse, getSelectorType } from '../src/SchemaUtils.js';
import { AssertedEventType, SelectorType, StepType } from '../src/Schema.js';
import { assert } from 'chai';

describe('SchemaUtils', () => {
  describe('Schema parser', () => {
    it('should parse a sample Schema JSON', () => {
      const actual = parse({
        title: 'test',
        steps: [
          {
            type: 'setViewport',
            width: 735,
            height: 1064,
            deviceScaleFactor: 1,
            isMobile: false,
            hasTouch: false,
            isLandscape: false,
          },
          {
            type: 'navigate',
            url: 'https://www.google.com/',
            assertedEvents: [
              {
                type: 'navigation',
                url: 'https://www.google.com/',
                title: 'Google',
              },
            ],
          },
          {
            type: 'click',
            selectors: [
              ['aria/Google'],
              ['body > div.L3eUgb > div.o3j99.LLD4me.yr19Zb.LS8OJ > div > img'],
            ],
            duration: 10,
            button: 'auxiliary',
            target: 'main',
            offsetX: 213.5,
            offsetY: 46,
          },
          {
            type: 'doubleClick',
            selectors: [
              ['aria/Google'],
              ['body > div.L3eUgb > div.o3j99.LLD4me.yr19Zb.LS8OJ > div > img'],
            ],
            button: 'auxiliary',
            target: 'main',
            offsetX: 213.5,
            offsetY: 46,
          },
          {
            type: 'hover',
            selectors: [
              ['aria/Google'],
              ['body > div.L3eUgb > div.o3j99.LLD4me.yr19Zb.LS8OJ > div > img'],
            ],
            target: 'main',
          },
          {
            type: 'click',
            selectors: [
              ['aria/Images'],
              ['#gb > div > div:nth-child(1) > div > div:nth-child(2) > a'],
            ],
            target: 'main',
            offsetX: 16.640625,
            offsetY: 15,
            assertedEvents: [
              {
                type: 'navigation',
                url: 'https://www.google.com/imghp?hl=en&ogbl',
                title: 'Google Images',
              },
            ],
          },
          {
            type: 'click',
            selectors: [['aria/Search'], ['#sbtc > div > div.a4bIc > input']],
            target: 'main',
            offsetX: 126,
            offsetY: 26.5,
          },
        ],
      });
      assert.deepEqual(actual, {
        title: 'test',
        steps: [
          {
            type: StepType.SetViewport,
            width: 735,
            height: 1064,
            deviceScaleFactor: 1,
            isMobile: false,
            hasTouch: false,
            isLandscape: false,
          },
          {
            type: StepType.Navigate,
            url: 'https://www.google.com/',
            assertedEvents: [
              {
                type: AssertedEventType.Navigation,
                url: 'https://www.google.com/',
                title: 'Google',
              },
            ],
          },
          {
            type: StepType.Click,
            selectors: [
              ['aria/Google'],
              ['body > div.L3eUgb > div.o3j99.LLD4me.yr19Zb.LS8OJ > div > img'],
            ],
            duration: 10,
            button: 'auxiliary',
            target: 'main',
            offsetX: 213.5,
            offsetY: 46,
          },
          {
            type: StepType.DoubleClick,
            selectors: [
              ['aria/Google'],
              ['body > div.L3eUgb > div.o3j99.LLD4me.yr19Zb.LS8OJ > div > img'],
            ],
            button: 'auxiliary',
            target: 'main',
            offsetX: 213.5,
            offsetY: 46,
          },
          {
            type: StepType.Hover,
            selectors: [
              ['aria/Google'],
              ['body > div.L3eUgb > div.o3j99.LLD4me.yr19Zb.LS8OJ > div > img'],
            ],
            target: 'main',
          },
          {
            type: StepType.Click,
            selectors: [
              ['aria/Images'],
              ['#gb > div > div:nth-child(1) > div > div:nth-child(2) > a'],
            ],
            target: 'main',
            offsetX: 16.640625,
            offsetY: 15,
            assertedEvents: [
              {
                type: AssertedEventType.Navigation,
                url: 'https://www.google.com/imghp?hl=en&ogbl',
                title: 'Google Images',
              },
            ],
          },
          {
            type: StepType.Click,
            selectors: [['aria/Search'], ['#sbtc > div > div.a4bIc > input']],
            target: 'main',
            offsetX: 126,
            offsetY: 26.5,
          },
        ],
      });
    });

    it('should parse a script without steps', () => {
      const actual = parse({
        title: 'test',
        steps: [],
      });
      assert.deepEqual(actual, {
        title: 'test',
        steps: [],
      });
    });

    it('should parse a script with timeout', () => {
      const actual = parse({
        title: 'test',
        timeout: 100,
        steps: [],
      });
      assert.deepEqual(actual, {
        title: 'test',
        timeout: 100,
        steps: [],
      });
    });

    it('should parse a script with setViewport step', () => {
      assert.deepEqual(
        parse({
          title: 'test',
          steps: [
            {
              type: 'setViewport',
              width: 735,
              height: 1064,
              deviceScaleFactor: 1,
              isMobile: false,
              hasTouch: false,
              isLandscape: false,
            },
          ],
        }),
        {
          title: 'test',
          steps: [
            {
              type: StepType.SetViewport,
              width: 735,
              height: 1064,
              deviceScaleFactor: 1,
              isMobile: false,
              hasTouch: false,
              isLandscape: false,
            },
          ],
        }
      );
    });

    it('should parse a script with emulateNetworkConditionsStep step', () => {
      assert.deepEqual(
        parse({
          title: 'test',
          steps: [
            {
              type: 'emulateNetworkConditions',
              download: 1,
              upload: 1,
              latency: 1,
            },
          ],
        }),
        {
          title: 'test',
          steps: [
            {
              type: StepType.EmulateNetworkConditions,
              download: 1,
              upload: 1,
              latency: 1,
            },
          ],
        }
      );
    });

    it('should parse a script with keyDown step', () => {
      assert.deepEqual(
        parse({
          title: 'test',
          steps: [
            {
              type: 'keyDown',
              target: 'main',
              key: 'A',
            },
          ],
        }),
        {
          title: 'test',
          steps: [
            {
              type: StepType.KeyDown,
              target: 'main',
              key: 'A',
            },
          ],
        }
      );
    });

    it('should parse a script with waitForElement step', () => {
      assert.deepEqual(
        parse({
          title: 'test',
          steps: [
            {
              type: 'waitForElement',
              selectors: [['aria/Test']],
            },
          ],
        }),
        {
          title: 'test',
          steps: [
            {
              type: StepType.WaitForElement,
              selectors: [['aria/Test']],
            },
          ],
        }
      );
      assert.deepEqual(
        parse({
          title: 'test',
          steps: [
            {
              type: 'waitForElement',
              selectors: [['aria/Test']],
              operator: '==',
              count: 1,
              properties: {},
              attributes: {},
              visible: true,
            },
          ],
        }),
        {
          title: 'test',
          steps: [
            {
              type: StepType.WaitForElement,
              selectors: [['aria/Test']],
              operator: '==',
              count: 1,
              properties: {},
              attributes: {},
              visible: true,
            },
          ],
        }
      );
    });

    it('should parse a script with waitForExpression step', () => {
      assert.deepEqual(
        parse({
          title: 'test',
          steps: [
            {
              type: 'waitForExpression',
              expression: '1 + 2',
            },
          ],
        }),
        {
          title: 'test',
          steps: [
            {
              type: StepType.WaitForExpression,
              expression: '1 + 2',
            },
          ],
        }
      );
    });

    it('should parse a script with close step', () => {
      assert.deepEqual(
        parse({
          title: 'test',
          steps: [
            {
              type: 'close',
            },
          ],
        }),
        {
          title: 'test',
          steps: [
            {
              type: StepType.Close,
            },
          ],
        }
      );
    });

    it('should parse a script with custom step', () => {
      assert.deepEqual(
        parse({
          title: 'test',
          steps: [
            {
              type: 'customStep',
              name: 'test',
              parameters: ['1', '2'],
            },
          ],
        }),
        {
          title: 'test',
          steps: [
            {
              type: StepType.CustomStep,
              name: 'test',
              parameters: ['1', '2'],
            },
          ],
        }
      );
    });

    it('should parse a script with navigate step', () => {
      assert.deepEqual(
        parse({
          title: 'test',
          steps: [
            {
              type: 'navigate',
              url: 'http://localhost',
            },
          ],
        }),
        {
          title: 'test',
          steps: [
            {
              type: StepType.Navigate,
              url: 'http://localhost',
            },
          ],
        }
      );
      assert.deepEqual(
        parse({
          title: 'test',
          steps: [
            {
              type: 'navigate',
              url: 'http://localhost',
              target: 'main',
            },
          ],
        }),
        {
          title: 'test',
          steps: [
            {
              type: StepType.Navigate,
              url: 'http://localhost',
              target: 'main',
            },
          ],
        }
      );
    });

    it('should parse a script with scroll step', () => {
      assert.deepEqual(
        parse({
          title: 'test',
          steps: [
            {
              type: 'scroll',
              x: 1,
              y: 1,
            },
          ],
        }),
        {
          title: 'test',
          steps: [
            {
              type: StepType.Scroll,
              x: 1,
              y: 1,
            },
          ],
        }
      );
      assert.deepEqual(
        parse({
          title: 'test',
          steps: [
            {
              type: 'scroll',
              frame: [1],
            },
          ],
        }),
        {
          title: 'test',
          steps: [
            {
              type: StepType.Scroll,
              frame: [1],
            },
          ],
        }
      );
      assert.deepEqual(
        parse({
          title: 'test',
          steps: [
            {
              type: 'scroll',
              selectors: [['aria/Test']],
            },
          ],
        }),
        {
          title: 'test',
          steps: [
            {
              type: StepType.Scroll,
              selectors: [['aria/Test']],
            },
          ],
        }
      );
    });

    it('should parse a script with keyUp step', () => {
      assert.deepEqual(
        parse({
          title: 'test',
          steps: [
            {
              type: 'keyUp',
              target: 'main',
              key: 'A',
            },
          ],
        }),
        {
          title: 'test',
          steps: [
            {
              type: StepType.KeyUp,
              target: 'main',
              key: 'A',
            },
          ],
        }
      );
    });

    it('should parse a script with change step', () => {
      assert.deepEqual(
        parse({
          title: 'test',
          steps: [
            {
              type: 'change',
              selectors: [['aria/Test']],
              target: 'main',
              value: 'Test',
            },
          ],
        }),
        {
          title: 'test',
          steps: [
            {
              type: StepType.Change,
              selectors: [['aria/Test']],
              target: 'main',
              value: 'Test',
            },
          ],
        }
      );

      assert.deepEqual(
        parse({
          title: 'test',
          steps: [
            {
              type: 'change',
              selectors: [['aria/Test']],
              target: 'main',
              frame: [1],
              value: 'Test',
            },
          ],
        }),
        {
          title: 'test',
          steps: [
            {
              type: StepType.Change,
              selectors: [['aria/Test']],
              frame: [1],
              target: 'main',
              value: 'Test',
            },
          ],
        }
      );

      assert.deepEqual(
        parse({
          title: 'test',
          steps: [
            {
              type: 'change',
              selectors: [['aria/Test']],
              value: 'Test',
            },
          ],
        }),
        {
          title: 'test',
          steps: [
            {
              type: StepType.Change,
              selectors: [['aria/Test']],
              value: 'Test',
            },
          ],
        }
      );
    });

    it('should parse a script with click step', () => {
      assert.deepEqual(
        parse({
          title: 'test',
          steps: [
            {
              type: 'click',
              selectors: [['aria/Test']],
              target: 'main',
              offsetX: 126,
              offsetY: 26.5,
            },
          ],
        }),
        {
          title: 'test',
          steps: [
            {
              type: StepType.Click,
              selectors: [['aria/Test']],
              target: 'main',
              offsetX: 126,
              offsetY: 26.5,
            },
          ],
        }
      );

      assert.deepEqual(
        parse({
          title: 'test',
          steps: [
            {
              type: 'click',
              selectors: [['aria/Test']],
              frame: [0],
              target: 'main',
              offsetX: 126,
              offsetY: 26.5,
            },
          ],
        }),
        {
          title: 'test',
          steps: [
            {
              type: StepType.Click,
              selectors: [['aria/Test']],
              frame: [0],
              target: 'main',
              offsetX: 126,
              offsetY: 26.5,
            },
          ],
        }
      );
    });

    it('should parse a script with click step', () => {
      assert.deepEqual(
        parse({
          title: 'test',
          steps: [
            {
              type: 'click',
              selectors: [['aria/Test']],
              offsetX: 126,
              offsetY: 26.5,
              timeout: 1000,
            },
          ],
        }),
        {
          title: 'test',
          steps: [
            {
              type: StepType.Click,
              selectors: [['aria/Test']],
              offsetX: 126,
              offsetY: 26.5,
              timeout: 1000,
            },
          ],
        }
      );
    });

    it('should parse a script with selectorAttribute', () => {
      assert.deepEqual(
        parse({
          title: 'test',
          selectorAttribute: 'data-testid',
          steps: [],
        }),
        {
          title: 'test',
          selectorAttribute: 'data-testid',
          steps: [],
        }
      );
    });

    it('should handle wrong input with errors', () => {
      const testCases = [
        {
          input: {},
          error: 'Recording is missing `title`',
        },
        {
          input: { title: 'test' },
          error: 'Recording is missing `steps`',
        },
        {
          input: { title: 'test', steps: {} },
          error: 'Recording `steps` is not an array',
        },
        {
          input: { title: 'test', steps: [], timeout: 30001 },
          error: 'Timeout is not between 1 and 30000 milliseconds',
        },
        {
          input: { title: 'test', steps: [], timeout: 0 },
          error: 'Timeout is not between 1 and 30000 milliseconds',
        },
        {
          input: {
            title: 'test',
            steps: [
              { type: 'navigate', url: 'https://example.com', timeout: 30001 },
            ],
          },
          error: 'Timeout is not between 1 and 30000 milliseconds',
        },
        {
          input: {
            title: 'test',
            steps: [
              { type: 'navigate', url: 'https://example.com', timeout: 0 },
            ],
          },
          error: 'Timeout is not between 1 and 30000 milliseconds',
        },
        {
          input: {
            title: 'test',
            steps: [
              {
                type: 'waitForElement',
                attributes: { test: 5 },
              },
            ],
          },
          error:
            "WaitForElement step's attribute is not a dictionary of strings",
        },
        {
          input: {
            title: 'test',
            steps: [
              {
                type: 'waitForElement',
                properties: null,
              },
            ],
          },
          error: "WaitForElement step's attribute is not an object",
        },
      ];
      for (const testCase of testCases) {
        assert.throws(() => parse(testCase.input), testCase.error);
      }
    });
  });

  describe('Selectors', () => {
    it('should detect selector types', () => {
      assert.strictEqual(getSelectorType('css/.cls'), SelectorType.CSS);
      assert.strictEqual(getSelectorType('.cls'), SelectorType.CSS);
      assert.strictEqual(getSelectorType('aria/Text'), SelectorType.ARIA);
      assert.strictEqual(getSelectorType('text/Text'), SelectorType.Text);
      assert.strictEqual(getSelectorType('xpath///div'), SelectorType.XPath);
    });
  });
});
