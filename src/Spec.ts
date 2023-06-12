export const recording = {
  title: 'spec',
  steps: [
    {
      type: 'setViewport',
      width: 900,
      height: 700,
      deviceScaleFactor: 1,
      isMobile: false,
      hasTouch: false,
      isLandscape: false,
    },
    {
      type: 'navigate',
      url: 'http://localhost:8907/spec.html',
      assertedEvents: [
        {
          type: 'navigation',
          url: 'http://localhost:8907/spec.html',
          title: '',
        },
      ],
    },
    {
      type: 'click',
      target: 'main',
      selectors: [
        ['aria/Click'],
        ['#button'],
        ['xpath///*[@id="button"]'],
        ['text/Click'],
      ],
      offsetY: 18,
      offsetX: 36,
    },
    {
      type: 'doubleClick',
      target: 'main',
      selectors: [
        ['aria/Click'],
        ['#button'],
        ['xpath///*[@id="button"]'],
        ['text/Click'],
      ],
      offsetY: 18,
      offsetX: 36,
    },
    {
      type: 'keyDown',
      target: 'main',
      key: 'Tab',
    },
    {
      type: 'keyUp',
      key: 'Tab',
      target: 'main',
    },
    {
      type: 'change',
      value: 'test',
      selectors: [['#input'], ['xpath///*[@id="input"]']],
      target: 'main',
    },
    {
      type: 'change',
      value: 'testSuffix',
      selectors: [['#input-prefilled']],
      target: 'main',
    },

    {
      type: 'keyDown',
      target: 'main',
      key: 'Enter',
    },
    {
      type: 'keyUp',
      key: 'Enter',
      target: 'main',
    },
    {
      type: 'click',
      selectors: [['#input'], ['xpath///*[@id="input"]']],
      target: 'main',
      button: 'secondary',
      offsetX: 1,
      offsetY: 1,
    },
    {
      type: 'hover',
      target: 'main',
      selectors: [
        ['aria/Hover'],
        ['#hover'],
        ['xpath///*[@id="hover"]'],
        ['text/Hover'],
      ],
    },
    {
      type: 'waitForExpression',
      expression:
        'new Promise(resolve => setTimeout(() => resolve(true), 500))',
    },
    {
      type: 'waitForElement',
      target: 'main',
      selectors: ['#button'],
      count: 1,
      visible: true,
      properties: {
        id: 'button',
      },
      attributes: {
        id: 'button',
      },
    },
    {
      type: 'change',
      value: 'optionB',
      selectors: [['#select']],
      target: 'main',
    },
  ],
};

export const expectedLog = `window dimensions 900x700
click targetId=button button=0 detail=1 value=
click targetId=button button=0 detail=1 value=
click targetId=button button=0 detail=2 value=
dblclick targetId=button button=0 detail=2 value=
change targetId=input button=undefined detail=undefined value=test
change targetId=input-prefilled button=undefined detail=undefined value=testSuffix
contextmenu targetId=input button=2 detail=0 value=test
mouseenter targetId=hover button=0 detail=0 value=
change targetId=select button=undefined detail=undefined value=optionB
`.trim();

export const files = new Map([
  [
    'spec.html',
    `<!DOCTYPE html>
<button id="button" onclick="logEvent(event)" ondblclick="logEvent(event)">
    Click
</button>
<button
    id="hover"
    onmouseenter="logEvent(event)"
    onmouseleave="logEvent(event)"
>
    Hover
</button>
<input id="input" oncontextmenu="logEvent(event)" onchange="logEvent(event)" />
<input id="input-prefilled" onchange="logEvent(event)" value="test" />
<select id="select" onchange="logEvent(event)">
    <option value=""></option>
    <option value="optionA">Option A</option>
    <option value="optionB">Option B</option>
</select>
<pre id="log"></pre>
<script>
    function logStr(str) {
      log.innerText += str;
      const data = { username: 'example' };
      fetch('/log', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/text',
        },
        body: str,
      })
        .catch((error) => {
          console.error(error);
        });
    }
    function logEvent(event) {
      logStr(
          '\\n' +
          event.type +
          ' targetId=' +
          event.target.id +
          ' button=' +
          event.button +
          ' detail=' +
          event.detail +
          ' value=' +
          event.target.value
      );
    }
    logStr(\`window dimensions \${window.innerWidth}x\${window.innerHeight}\`);
    input.addEventListener('contextmenu', (e) => e.preventDefault(), false);
</script>`,
  ],
]);
