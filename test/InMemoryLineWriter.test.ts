/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import { describe, it } from 'node:test';
import assert from 'node:assert';
import { InMemoryLineWriter } from '../src/InMemoryLineWriter.js';

describe('InMemoryLineWriter', () => {
  it('should open and close blocks', () => {
    const out = new InMemoryLineWriter('  ');
    out.appendLine('{').startBlock();
    out.appendLine('console.log("test");');
    out.endBlock().appendLine('}');
    assert.strictEqual(
      out.toString(),
      `{
  console.log("test");
}
`
    );
  });
});
