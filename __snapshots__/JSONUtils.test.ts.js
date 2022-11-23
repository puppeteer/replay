exports['JSONUtils should format JSON as JS 1'] = `
{
  title: 'test',
  test: true,
  steps: [
    {
      type: 'click',
      target: 'main',
      selectors: [
        'aria/Test',
        [
          '.cls',
          '.cls'
        ]
      ],
      offsetX: 1,
      offsetY: 1,
      assertedEvents: [
        {
          type: 'navigation'
        }
      ]
    },
    {
      type: 'click',
      target: 'main',
      selectors: [
        'aria/Test'
      ],
      offsetX: 1,
      offsetY: 1,
      assertedEvents: [
        {
          type: 'navigation'
        }
      ]
    }
  ],
  otherTest: 1.234,
  nullTest: null
}
`;

exports['JSONUtils should properly escape <script> 1'] = `
'\\x3Cscript>test\\x3C/script>\\x3Cscript>test\\x3C/script>\\x3Cscript>test\\x3C/script>'
`;
