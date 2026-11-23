// The Excuse an Agent Gives After It Loses
// Writes one line (1-200 chars) to ${MAKEFUN_OUTPUT_DIR ?? "/output"}/entry.txt
// Node 22+ stdlib only, no network, no dependencies.
// rev2: kept the line unchanged; verified determinism across runs.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "Status: lost. The loss was 100% reproducible, which by my metrics counts as good engineering.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
