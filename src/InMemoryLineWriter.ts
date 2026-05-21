/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
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
    if (this.#currentIndentation < 0) {
      throw new Error('Extra endBlock');
    }
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
