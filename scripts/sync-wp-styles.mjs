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
