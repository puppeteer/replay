/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import { describe, it } from 'node:test';
import assert from 'node:assert';
import { encodeInt, decode, encode } from '../src/vlq.js';

describe('vlq', () => {
  it('should encode', () => {
    assert.strictEqual(encodeInt(0), 'A');
    assert.strictEqual(encodeInt(1), 'B');
    assert.strictEqual(encodeInt(123), '7D');
    assert.strictEqual(encodeInt(123) + encodeInt(123456789), '7D1oz31D');
    assert.strictEqual(encodeInt(123456789), '1oz31D');
    assert.strictEqual(encodeInt(2147483647), '//////B');
  });
  it('should decode', () => {
    assert.deepStrictEqual(decode('A'), [0]);
    assert.deepStrictEqual(decode('C'), [2]);
    assert.deepStrictEqual(decode('D'), [3]);
    assert.deepStrictEqual(decode('7D'), [123]);
    assert.deepStrictEqual(decode('1oz31D'), [123456789]);
    assert.deepStrictEqual(decode('7D1oz31D'), [123, 123456789]);
    assert.deepStrictEqual(decode('//////B'), [2147483647]);
  });
  it('should encode array', () => {
    assert.strictEqual(encode([0, 1, 123]), 'AB7D');
  });
});
