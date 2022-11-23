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

/**
 * Copyright (c) 2020 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

export function formatJSONAsJS(json: unknown, indent: string): string {
  const buffer: string[] = [];
  format(json, buffer, 1, indent);
  return buffer.join('');
}

function format(
  json: unknown,
  buffer: string[] = [],
  level = 1,
  indent = '  '
) {
  switch (typeof json) {
    case 'bigint':
    case 'symbol':
    case 'function':
    case 'undefined':
      throw new Error('Invalid JSON');
    case 'number':
    case 'boolean':
      buffer.push(String(json));
      break;
    case 'string':
      buffer.push(formatAsJSLiteral(json));
      break;
    case 'object': {
      if (json === null) {
        buffer.push('null');
      } else if (Array.isArray(json)) {
        buffer.push('[\n');
        for (let i = 0; i < json.length; i++) {
          buffer.push(indent.repeat(level));
          format(json[i], buffer, level + 1, indent);
          if (i !== json.length - 1) {
            buffer.push(',');
          }
          buffer.push('\n');
        }
        buffer.push(indent.repeat(level - 1) + ']');
      } else {
        buffer.push('{\n');
        const keys = Object.keys(json);
        for (let i = 0; i < keys.length; i++) {
          const key = keys[i] as string;
          const value = (json as any)[key];
          if (value === undefined) {
            continue;
          }
          buffer.push(indent.repeat(level));
          buffer.push(key);
          buffer.push(': ');
          format(value, buffer, level + 1, indent);
          if (i !== keys.length - 1) {
            buffer.push(',');
          }
          buffer.push('\n');
        }
        buffer.push(indent.repeat(level - 1) + '}');
      }
      break;
    }
    default:
      throw new Error('Unknown object type');
  }
  return buffer;
}

// Taken from https://source.chromium.org/chromium/chromium/src/+/main:third_party/devtools-frontend/src/front_end/core/platform/string-utilities.ts;l=29;drc=111134437ee51d74433829bed0088f7239e18867.
const toHexadecimal = (charCode: number, padToLength: number): string => {
  return charCode.toString(16).toUpperCase().padStart(padToLength, '0');
};

// Remember to update the third group in the regexps patternsToEscape and
// patternsToEscapePlusSingleQuote when adding new entries in this map.
const escapedReplacements = new Map([
  ['\b', '\\b'],
  ['\f', '\\f'],
  ['\n', '\\n'],
  ['\r', '\\r'],
  ['\t', '\\t'],
  ['\v', '\\v'],
  ["'", "\\'"],
  ['\\', '\\\\'],
  ['<!--', '\\x3C!--'],
  ['<script', '\\x3Cscript'],
  ['</script', '\\x3C/script'],
]);

export const formatAsJSLiteral = (content: string): string => {
  const patternsToEscape =
    /(\\|<(?:!--|\/?script))|(\p{Control})|(\p{Surrogate})/gu;
  const patternsToEscapePlusSingleQuote =
    /(\\|'|<(?:!--|\/?script))|(\p{Control})|(\p{Surrogate})/gu;
  const escapePattern = (
    match: string,
    pattern: string,
    controlChar: string,
    loneSurrogate: string
  ): string => {
    if (controlChar) {
      if (escapedReplacements.has(controlChar)) {
        // @ts-ignore https://github.com/microsoft/TypeScript/issues/13086
        return escapedReplacements.get(controlChar);
      }
      const twoDigitHex = toHexadecimal(controlChar.charCodeAt(0), 2);
      return '\\x' + twoDigitHex;
    }
    if (loneSurrogate) {
      const fourDigitHex = toHexadecimal(loneSurrogate.charCodeAt(0), 4);
      return '\\u' + fourDigitHex;
    }
    if (pattern) {
      return escapedReplacements.get(pattern) || '';
    }
    return match;
  };

  let escapedContent = '';
  let quote = '';
  if (!content.includes("'")) {
    quote = "'";
    escapedContent = content.replace(patternsToEscape, escapePattern);
  } else if (!content.includes('"')) {
    quote = '"';
    escapedContent = content.replace(patternsToEscape, escapePattern);
  } else if (!content.includes('`') && !content.includes('${')) {
    quote = '`';
    escapedContent = content.replace(patternsToEscape, escapePattern);
  } else {
    quote = "'";
    escapedContent = content.replace(
      patternsToEscapePlusSingleQuote,
      escapePattern
    );
  }
  return `${quote}${escapedContent}${quote}`;
};
