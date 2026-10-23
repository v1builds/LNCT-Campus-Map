import { mkdir, copyFile } from "node:fs/promises";
import { resolve } from "node:path";

const root = process.cwd();
const source = resolve(root, "index.html");
const outputDir = resolve(root, "www");
const output = resolve(outputDir, "index.html");

await mkdir(outputDir, { recursive: true });
await copyFile(source, output);
console.log("NAVIX web bundle prepared at www/index.html");
