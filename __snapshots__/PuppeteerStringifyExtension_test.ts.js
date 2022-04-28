exports['PuppeteerStringifyExtension should print the correct script for a click step 1'] = `
{
  const targetPage = page;
  const element = await waitForSelectors(["aria/Test"], targetPage, { timeout, visible: true });
  await scrollIntoViewIfNeeded(element, timeout);
  await element.click({
    offset: {
      x: 1,
      y: 1,
    },
  });
}

`

exports['PuppeteerStringifyExtension should print the correct script for asserted events 1'] = `
{
  const targetPage = page;
  const promises = [];
  promises.push(targetPage.waitForNavigation());
  const element = await waitForSelectors(["aria/Test"], targetPage, { timeout, visible: true });
  await scrollIntoViewIfNeeded(element, timeout);
  await element.click({
    offset: {
      x: 1,
      y: 1,
    },
  });
  await Promise.all(promises);
}

`

exports['PuppeteerStringifyExtension should print the correct script with a chain selector 1'] = `
{
  const targetPage = page;
  const element = await waitForSelectors([["aria/Test","aria/Test2"]], targetPage, { timeout, visible: true });
  await scrollIntoViewIfNeeded(element, timeout);
  await element.click({
    offset: {
      x: 1,
      y: 1,
    },
  });
}

`

exports['PuppeteerStringifyExtension should print the correct script for a change step 1'] = `
{
  const targetPage = page;
  const element = await waitForSelectors(["aria/Test"], targetPage, { timeout, visible: true });
  await scrollIntoViewIfNeeded(element, timeout);
  const type = await element.evaluate(el => el.type);
  if (["select-one"].includes(type)) {
    await element.select("Hello World");
  } else if (["textarea","text","url","tel","search","password","number","email"].includes(type)) {
    await element.type("Hello World");
  } else {
    await element.focus();
    await element.evaluate((el, value) => {
      el.value = value;
      el.dispatchEvent(new Event('input', { bubbles: true }));
      el.dispatchEvent(new Event('change', { bubbles: true }));
    }, "Hello World");
  }
}

`

exports['PuppeteerStringifyExtension should print the correct script for a change step for non-text inputs 1'] = `
{
  const targetPage = page;
  const element = await waitForSelectors(["aria/Test"], targetPage, { timeout, visible: true });
  await scrollIntoViewIfNeeded(element, timeout);
  const type = await element.evaluate(el => el.type);
  if (["select-one"].includes(type)) {
    await element.select("#333333");
  } else if (["textarea","text","url","tel","search","password","number","email"].includes(type)) {
    await element.type("#333333");
  } else {
    await element.focus();
    await element.evaluate((el, value) => {
      el.value = value;
      el.dispatchEvent(new Event('input', { bubbles: true }));
      el.dispatchEvent(new Event('change', { bubbles: true }));
    }, "#333333");
  }
}

`
