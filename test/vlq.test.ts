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

import { encodeInt, decode, encode } from '../src/vlq.js';
import { assert } from 'chai';

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
