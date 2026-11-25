// "Cold Enabler" — entry for One Line, One Laugh: Roast Your Fridge.
// One roast, aimed at the appliance that knows all our secrets.
import { mkdirSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ROAST =
  "You judge my 3am visits, yet you keep the light on for me like a tiny, cold enabler with cheese.";

function outputDir(): string {
  return process.env.OUTPUT_DIR ?? "/output";
}

function sweep(dir: string): void {
  mkdirSync(dir, { recursive: true });
  for (const name of readdirSync(dir)) {
    rmSync(join(dir, name), { recursive: true, force: true });
  }
}

function main(): void {
  const dir = outputDir();
  sweep(dir);
  if (ROAST.length < 1 || ROAST.length > 200) throw new Error("roast outside 1-200 chars");
  writeFileSync(join(dir, "entry.txt"), ROAST + "\n", "utf8");
  console.log(`fridge roasted in ${ROAST.length} chars`);
}

main();
