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

import { LineWriterImpl } from "../src/LineWriterImpl.js";
import { PuppeteerStringifyExtension } from "../src/PuppeteerStringifyExtension.js";
import { assert } from "chai";

describe("PuppeteerStringifyExtension", () => {
  const ext = new PuppeteerStringifyExtension();

  it("should print the correct script for a click step", async () => {
    const step = {
      type: "click" as const,
      target: "main",
      selectors: ["aria/Test"],
      offsetX: 1,
      offsetY: 1,
    };
    const flow = { title: "test", steps: [step] };

    const writer = new LineWriterImpl("  ");
    await ext.stringifyStep(writer, step, flow);
    assert.deepEqual(
      writer.toString(),
      `{
  const targetPage = page;
  const element = await waitForSelectors(["aria/Test"], targetPage, { timeout, visible: true });
  await scrollIntoViewIfNeeded(element, timeout);
  await element.click({ offset: { x: 1, y: 1} });
}
`
    );
  });

  it("should print the correct script for asserted events", async () => {
    const step = {
      type: "click" as const,
      target: "main",
      selectors: ["aria/Test"],
      offsetX: 1,
      offsetY: 1,
      assertedEvents: [{ type: "navigation" as const }],
    };
    const flow = { title: "test", steps: [step] };

    const writer = new LineWriterImpl("  ");
    await ext.stringifyStep(writer, step, flow);
    assert.deepEqual(
      writer.toString(),
      `{
  const targetPage = page;
  const promises = [];
  promises.push(targetPage.waitForNavigation());
  const element = await waitForSelectors(["aria/Test"], targetPage, { timeout, visible: true });
  await scrollIntoViewIfNeeded(element, timeout);
  await element.click({ offset: { x: 1, y: 1} });
  await Promise.all(promises);
}
`
    );
  });

  it("should print the correct script with a chain selector", async () => {
    const step = {
      type: "click" as const,
      target: "main",
      selectors: [["aria/Test", "aria/Test2"]],
      offsetX: 1,
      offsetY: 1,
    };
    const flow = { title: "test", steps: [step] };

    const writer = new LineWriterImpl("  ");
    await ext.stringifyStep(writer, step, flow);
    assert.deepEqual(
      writer.toString(),
      `{
  const targetPage = page;
  const element = await waitForSelectors([["aria/Test","aria/Test2"]], targetPage, { timeout, visible: true });
  await scrollIntoViewIfNeeded(element, timeout);
  await element.click({ offset: { x: 1, y: 1} });
}
`
    );
  });

  it("should print the correct script for a change step", async () => {
    const step = {
      type: "change" as const,
      target: "main",
      selectors: ["aria/Test"],
      value: "Hello World",
    };
    const flow = { title: "test", steps: [step] };

    const writer = new LineWriterImpl("  ");
    await ext.stringifyStep(writer, step, flow);
    assert.deepEqual(
      writer.toString(),
      `{
  const targetPage = page;
  const element = await waitForSelectors(["aria/Test"], targetPage, { timeout, visible: true });
  await scrollIntoViewIfNeeded(element, timeout);
  const type = await element.evaluate(el => el.type);
  if (["textarea","select-one","text","url","tel","search","password","number","email"].includes(type)) {
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
    );
  });

  it("should print the correct script for a change step for non-text inputs", async () => {
    const step = {
      type: "change" as const,
      target: "main",
      selectors: ["aria/Test"],
      value: "#333333",
    };
    const flow = { title: "test", steps: [step] };

    const writer = new LineWriterImpl("  ");
    await ext.stringifyStep(writer, step, flow);
    assert.deepEqual(
      writer.toString(),
      `{
  const targetPage = page;
  const element = await waitForSelectors(["aria/Test"], targetPage, { timeout, visible: true });
  await scrollIntoViewIfNeeded(element, timeout);
  const type = await element.evaluate(el => el.type);
  if (["textarea","select-one","text","url","tel","search","password","number","email"].includes(type)) {
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
    );
  });
});
