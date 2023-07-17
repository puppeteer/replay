exports[
  'SchemaUtils Selectors selectorToPElementSelector should convert .cls > div #id 1'
] = `
.cls > div #id
`;

exports[
  'SchemaUtils Selectors selectorToPElementSelector should convert .cls > div #id,.cls > div #id 1'
] = `
.cls > div #id >>>> .cls > div #id
`;

exports[
  'SchemaUtils Selectors selectorToPElementSelector should convert text/my text ("my text") 1'
] = `
::-p-text(my text \\(\\"my text\\"\\))
`;

exports[
  'SchemaUtils Selectors selectorToPElementSelector should convert text/my text ("my text"),aria/Test my test[role="button"] 1'
] = `
::-p-text(my text \\(\\"my text\\"\\)) >>>> ::-p-aria(Test my test[role=\\"button\\"])
`;

exports[
  'SchemaUtils Selectors selectorToPElementSelector should convert text/my) 1'
] = `
::-p-text(my\\))
`;

exports[
  'SchemaUtils Selectors selectorToPElementSelector should convert text/my() 1'
] = `
::-p-text(my\\(\\))
`;

exports[
  'SchemaUtils Selectors selectorToPElementSelector should convert text/" 1'
] = `
::-p-text(\\")
`;

exports[
  "SchemaUtils Selectors selectorToPElementSelector should convert text/' 1"
] = `
::-p-text(\\')
`;

exports[
  'SchemaUtils Selectors selectorToPElementSelector should convert xpath///*[@id="id"] 1'
] = `
::-p-xpath(//*[@id=\\"id\\"])
`;

exports[
  'SchemaUtils Selectors selectorToPElementSelector should convert pierce/#id 1'
] = `
:scope >>> #id
`;

exports[
  'SchemaUtils Selectors selectorToPElementSelector should convert pierce/#inner 1'
] = `
:scope >>> #inner
`;
