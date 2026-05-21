/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

export interface LineWriter {
  appendLine(line: string): LineWriter;
  startBlock(): LineWriter;
  endBlock(): LineWriter;
  getIndent(): string;
  getSize(): number;
}
