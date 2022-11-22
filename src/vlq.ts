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

const alpha =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

const charToIdx = alpha.split('').reduce((acc, char, idx) => {
  acc.set(char, idx);
  return acc;
}, new Map());

const LEAST_5_BIT_MASK = 0b011111;
const CONTINUATION_BIT_MASK = 0b100000;
const MAX_INT = 2147483647;

/**
 * Encoding variable length integer into base64 (6-bit):
 *
 * 1 N N N N N | 0 N N N N N
 *
 * The first bit indicates if there is more data for the int.
 */
export function encodeInt(num: number) {
  if (num < 0) {
    throw new Error('Only postive integers and zero are supported');
  }
  if (num > MAX_INT) {
    throw new Error(
      'Only integers between 0 and ' + MAX_INT + ' are supported'
    );
  }
  const result = [];
  do {
    let payload = num & LEAST_5_BIT_MASK;
    num >>>= 5;
    if (num > 0) payload |= CONTINUATION_BIT_MASK;
    result.push(alpha[payload]);
  } while (num !== 0);
  return result.join('');
}

export function encode(nums: number[]): string {
  const parts = [];
  for (const num of nums) {
    parts.push(encodeInt(num));
  }
  return parts.join('');
}

export function decode(str: string) {
  const results = [];
  const chrs = str.split('');

  let result = 0;
  let shift = 0;
  for (const ch of chrs) {
    const num = charToIdx.get(ch);
    result |= (num & LEAST_5_BIT_MASK) << shift;
    shift += 5;
    const hasMore = num & CONTINUATION_BIT_MASK;
    if (!hasMore) {
      results.push(result);
      result = 0;
      shift = 0;
    }
  }

  return results;
}
