import fs from "node:fs";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");
const outDir = path.join(root, "public", "wp-assets");
fs.mkdirSync(outDir, { recursive: true });

const assets = [
  [
    "https://kelseywaldrop.com/wp-content/fonts/2763d56c45420bb215f6b737c7d631e4.css",
    "fonts.css",
  ],
  [
    "https://kelseywaldrop.com/wp-content/themes/gutenify-base/style.css",
    "gutenify-style.css",
  ],
  [
    "https://kelseywaldrop.com/wp-content/themes/gutenify-base/css/theme-style.css",
    "theme-style.css",
  ],
  [
    "https://kelseywaldrop.com/wp-content/themes/gutenify-base/css/font-awesome/css/all.min.css",
    "font-awesome.min.css",
  ],
  [
    "https://kelseywaldrop.com/wp-content/themes/gutenify-base/css/animate.css",
    "animate.css",
  ],
  [
    "https://kelseywaldrop.com/wp-includes/blocks/navigation/style.min.css",
    "navigation-block.css",
  ],
  [
    "https://kelseywaldrop.com/wp-includes/blocks/cover/style.min.css",
    "cover-block.css",
  ],
  [
    "https://kelseywaldrop.com/wp-includes/blocks/social-links/style.min.css",
    "social-links-block.css",
  ],
];

for (const [url, name] of assets) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed ${url}: ${res.status}`);
  const text = await res.text();
  fs.writeFileSync(path.join(outDir, name), text);
  console.log("Saved", name);
}

// Localize hot-linked fonts referenced by fonts.css so they load same-origin
// (cross-origin webfonts from kelseywaldrop.com fail CORS and fall back to
// system fonts, which breaks the hero typography). Downloads any missing files
// and rewrites the URLs to /wp-assets/fonts/.
const FONT_BASE = "https://kelseywaldrop.com/wp-content/fonts/";
const FONT_LOCAL = "/wp-assets/fonts/";
const fontsCssPath = path.join(outDir, "fonts.css");
const fontsRoot = path.join(outDir, "fonts");
let fontsCss = fs.readFileSync(fontsCssPath, "utf8");
const fontUrls = [
  ...new Set([...fontsCss.matchAll(/url\((https:\/\/[^)]+)\)/g)].map((m) => m[1])),
];
for (const fontUrl of fontUrls) {
  if (!fontUrl.startsWith(FONT_BASE)) {
    console.warn("SKIP (unexpected font base):", fontUrl);
    continue;
  }
  const dest = path.join(fontsRoot, fontUrl.slice(FONT_BASE.length));
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  const fres = await fetch(fontUrl);
  if (!fres.ok) throw new Error(`Failed ${fontUrl}: ${fres.status}`);
  fs.writeFileSync(dest, Buffer.from(await fres.arrayBuffer()));
}
fs.writeFileSync(fontsCssPath, fontsCss.split(FONT_BASE).join(FONT_LOCAL));
console.log(`Localized ${fontUrls.length} font files -> ${FONT_LOCAL}`);
