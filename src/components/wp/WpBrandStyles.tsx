/** Ensures brand tokens apply after synced WP stylesheets (link tags). */
export function WpBrandStyles() {
  return <link rel="stylesheet" href="/wp-assets/brand.css" precedence="default" />;
}
