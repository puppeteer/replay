exports[
  'PuppeteerStringifyExtension should print the correct script for a click step 1'
] = `
{
  const targetPage = page;
  await scrollIntoViewIfNeeded([
    'aria/Test'
  ], targetPage, timeout);
  const element = await waitForSelectors([
    'aria/Test'
  ], targetPage, { timeout, visible: true });
  await element.click({
    offset: {
      x: 1,
      y: 1,
    },
  });
}

`;

exports[
  'PuppeteerStringifyExtension should print the correct script for asserted events 1'
] = `
{
  const targetPage = page;
  const promises = [];
  promises.push(targetPage.waitForNavigation());
  await scrollIntoViewIfNeeded([
    'aria/Test'
  ], targetPage, timeout);
  const element = await waitForSelectors([
    'aria/Test'
  ], targetPage, { timeout, visible: true });
  await element.click({
    offset: {
      x: 1,
      y: 1,
    },
  });
  await Promise.all(promises);
}

`;

exports[
  'PuppeteerStringifyExtension should print the correct script with a chain selector 1'
] = `
{
  const targetPage = page;
  await scrollIntoViewIfNeeded([
    [
      'aria/Test',
      'aria/Test2'
    ]
  ], targetPage, timeout);
  const element = await waitForSelectors([
    [
      'aria/Test',
      'aria/Test2'
    ]
  ], targetPage, { timeout, visible: true });
  await element.click({
    offset: {
      x: 1,
      y: 1,
    },
  });
}

`;

exports[
  'PuppeteerStringifyExtension should print the correct script for a change step 1'
] = `
{
  const targetPage = page;
  await scrollIntoViewIfNeeded([
    'aria/Test'
  ], targetPage, timeout);
  const element = await waitForSelectors([
    'aria/Test'
  ], targetPage, { timeout, visible: true });
  const inputType = await element.evaluate(el => el.type);
  if (inputType === 'select-one') {
    await changeSelectElement(element, 'Hello World')
  } else if ([
    'textarea',
    'text',
    'url',
    'tel',
    'search',
    'password',
    'number',
    'email'
  ].includes(inputType)) {
    await typeIntoElement(element, 'Hello World');
  } else {
    await changeElementValue(element, 'Hello World');
  }
}

`;

exports[
  'PuppeteerStringifyExtension should print the correct script for a change step for non-text inputs 1'
] = `
{
  const targetPage = page;
  await scrollIntoViewIfNeeded([
    'aria/Test'
  ], targetPage, timeout);
  const element = await waitForSelectors([
    'aria/Test'
  ], targetPage, { timeout, visible: true });
  const inputType = await element.evaluate(el => el.type);
  if (inputType === 'select-one') {
    await changeSelectElement(element, '#333333')
  } else if ([
    'textarea',
    'text',
    'url',
    'tel',
    'search',
    'password',
    'number',
    'email'
  ].includes(inputType)) {
    await typeIntoElement(element, '#333333');
  } else {
    await changeElementValue(element, '#333333');
  }
}

`;
