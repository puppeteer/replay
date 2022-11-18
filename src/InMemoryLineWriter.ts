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

import { LineWriter } from './LineWriter.js';

export class InMemoryLineWriter implements LineWriter {
  #indentation: string;
  #currentIndentation = 0;
  #lines: string[] = [];

  constructor(indentation: string) {
    this.#indentation = indentation;
  }

  appendLine(line: string): LineWriter {
    const lines = line.split('\n').map((line) => {
      const indentedLine = line
        ? this.#indentation.repeat(this.#currentIndentation) + line.trimEnd()
        : '';
      return indentedLine;
    });

    this.#lines.push(...lines);
    return this;
  }

  startBlock(): LineWriter {
    this.#currentIndentation++;
    return this;
  }

  endBlock(): LineWriter {
    this.#currentIndentation--;
    return this;
  }

  toString(): string {
    // Scripts should end with a final blank line.
    return this.#lines.join('\n') + '\n';
  }

  getIndent(): string {
    return this.#indentation;
  }

  getSize(): number {
    return this.#lines.length;
  }
}
