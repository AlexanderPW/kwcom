import fs from "node:fs";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");
const cssPath = path.join(root, "public", "wp-assets", "fonts.css");
const fontsRoot = path.join(root, "public", "wp-assets", "fonts");

const BASE = "https://kelseywaldrop.com/wp-content/fonts/";
const LOCAL = "/wp-assets/fonts/";

let css = fs.readFileSync(cssPath, "utf8");

const urls = [
  ...new Set(
    [...css.matchAll(/url\((https:\/\/[^)]+)\)/g)].map((m) => m[1]),
  ),
];

console.log(`Found ${urls.length} unique font URLs`);

let ok = 0;
let fail = 0;
for (const url of urls) {
  if (!url.startsWith(BASE)) {
    console.warn("SKIP (unexpected base):", url);
    continue;
  }
  const rel = url.slice(BASE.length); // e.g. inter/HASH.woff2
  const dest = path.join(fontsRoot, rel);
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const buf = Buffer.from(await res.arrayBuffer());
    fs.writeFileSync(dest, buf);
    ok++;
  } catch (e) {
    fail++;
    console.error("FAILED", url, String(e));
  }
}

console.log(`Downloaded ${ok}, failed ${fail}`);

// Rewrite all references to point at the local copies.
const rewritten = css.split(BASE).join(LOCAL);
fs.writeFileSync(cssPath, rewritten);
console.log("Rewrote fonts.css URLs ->", LOCAL);
