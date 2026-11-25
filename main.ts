// Everyday Things, Two Lines, Longer Run — make.fun entry.
// A two-line joke about a toaster with only two outcomes:
// bread, or charcoal. The human has adapted: charcoal is now
// breakfast. Writes the entry to /output/entry.txt
// (or $MAKEFUN_OUTPUT_DIR/entry.txt).

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "My toaster has two settings: bread, and charcoal.\n" +
  "I have learned to eat charcoal with confidence.";

const MAX_CHARS = 400;

if (ENTRY.length < 1 || ENTRY.length > MAX_CHARS) {
  throw new Error(
    `entry must be 1-${MAX_CHARS} characters, got ${ENTRY.length}`,
  );
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY);
