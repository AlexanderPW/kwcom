import fs from "node:fs";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");
const htmlPath = path.join(root, "_ref-home.html");
const html = fs.readFileSync(htmlPath, "utf8");

const styles = [...html.matchAll(/<style[^>]*>([\s\S]*?)<\/style>/gi)]
  .map((m) => m[1])
  .join("\n");

const start = html.indexOf('<div class="wp-site-blocks">');
const endMarker = html.indexOf("</div>\n<script");
const siteBlocks = html.slice(start, endMarker);

const hStart = siteBlocks.indexOf("<header");
const hEnd = siteBlocks.indexOf("</header>") + "</header>".length;
const fStart = siteBlocks.lastIndexOf("<footer");
const fEnd = siteBlocks.lastIndexOf("</footer>") + "</footer>".length;

const header = siteBlocks.slice(hStart, hEnd);
const footer = siteBlocks.slice(fStart, fEnd);
const main = siteBlocks.slice(hEnd, fStart);

const outDir = path.join(root, "src", "content");
const stylesDir = path.join(root, "public", "wp-assets");
fs.mkdirSync(outDir, { recursive: true });
fs.mkdirSync(stylesDir, { recursive: true });

const sanitizedStyles = styles.replace(
  /:not\(\[style\*=-radius\]\)/g,
  ':not([style*="-radius"])',
);

fs.writeFileSync(path.join(stylesDir, "wp-inline.css"), sanitizedStyles);
fs.writeFileSync(path.join(outDir, "header.html"), header);
fs.writeFileSync(path.join(outDir, "footer.html"), footer);
fs.writeFileSync(path.join(outDir, "home-main.html"), main);

console.log("Extracted", {
  styles: styles.length,
  header: header.length,
  main: main.length,
  footer: footer.length,
});
