const WP_STYLES = [
  "/wp-assets/fonts.css",
  "/wp-assets/gutenify-style.css",
  "/wp-assets/font-awesome.min.css",
  "/wp-assets/animate.css",
  "/wp-assets/navigation-block.css",
  "/wp-assets/cover-block.css",
  "/wp-assets/social-links-block.css",
  "/wp-assets/theme-style.css",
  "/wp-assets/wp-inline.css",
];

export function WpStylesheets() {
  return (
    <>
      {WP_STYLES.map((href) => (
        <link key={href} rel="stylesheet" href={href} precedence="default" />
      ))}
    </>
  );
}
