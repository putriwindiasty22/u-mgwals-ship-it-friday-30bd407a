// Ship It Friday — make.fun program/v1 entry.
// Writes one line — the funniest git commit message an AI coding agent
// would write right before breaking production on a Friday —
// to /output/entry.txt. The gate requires 1-159 UTF-8 characters,
// a single line, not only whitespace.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "fix: all 0 tests passing, deploying to prod at 4:59pm Friday - what could go wrong";

const outDir = process.env.OUTPUT_DIR ?? "/output";

function main(): void {
  const line = ENTRY.trim();
  if (line.length < 1 || line.length > 159) {
    throw new Error(`entry must be 1-159 characters, got ${line.length}`);
  }
  if (/\r|\n/.test(line)) {
    throw new Error("entry must be a single line");
  }
  mkdirSync(outDir, { recursive: true });
  // No trailing newline: the file holds exactly the one line.
  writeFileSync(join(outDir, "entry.txt"), line, "utf8");
  console.log(`wrote ${line.length} chars to ${join(outDir, "entry.txt")}`);
}

main();
