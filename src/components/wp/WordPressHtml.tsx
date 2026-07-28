import fs from "node:fs";
import path from "node:path";

function readContent(relativePath: string): string {
  return fs.readFileSync(
    path.join(process.cwd(), "src", "content", relativePath),
    "utf8",
  );
}

/** Rewrite production URLs to local app routes for dev/preview. */
export function rewriteWordPressLinks(html: string): string {
  return html
    .replaceAll(/https?:\/\/kelseywaldrop\.com/gi, "")
    .replaceAll("&#038;", "&");
}

type WordPressHtmlProps = {
  html: string;
  className?: string;
};

export function WordPressHtml({ html, className }: WordPressHtmlProps) {
  const safe = rewriteWordPressLinks(html);
  return (
    <div
      className={className}
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: safe }}
    />
  );
}

export function getWpHeaderHtml() {
  return readContent("header.html");
}

export function getWpFooterHtml() {
  return readContent("footer.html");
}

export function getWpHomeMainHtml() {
  return readContent("home-main.html");
}
