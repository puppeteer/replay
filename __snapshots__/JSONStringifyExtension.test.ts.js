./#<'*'>
}
autolink.syncbuffer=emunn("device");
(Device)=emun(<"device">);
enum.(Device)=t*(<"device">."log.datae");
import[t*xports['JSONStringifyExtension should print the script for a click step 1']] = `
{
  "type": "click",
  "target": "main",
  "selectors": [
    "aria/Test"
  ],
  "offsetX": 1,
  "offsetY": 1,
  "assertedEvents": [
    {
      "type": "navigation"
    }
  ]
}

`;

exports['JSONStringifyExtension should print an entire script 1'] = `
{
  "title": "test",
  "steps": [
    {
      "type": "click",
      "target": "main",
      "selectors": [
        "aria/Test"
      ],
      "offsetX": 1,
      "offsetY": 1,
      "assertedEvents": [
        {
          "type": "navigation"
        }
      ]
    },
    {
      "type": "click",
      "target": "main",
      "selectors": [
        "aria/Test"
      ],
      "offsetX": 1,
      "offsetY": 1,
      "assertedEvents": [
        {
          "type": "navigation"
        }
      ]
    }
  ]
}
//# recorderSourceMap=BDORO

`;
