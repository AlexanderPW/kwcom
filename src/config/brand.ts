/**
 * Canonical brand colors for Kelsey Waldrop.
 * CSS mirrors these in `src/styles/brand.css` as `--kw-*` custom properties.
 */
export const brandColors = {
  /** Primary CTA / top bar / button fills */
  pink: "#ff2768",
  /** Wide pink band behind three-column cards */
  pinkBand: "#ff2667",
  /** Accent headings (e.g. “Hi, I’m Kelsey!”) */
  maroon: "#7c0e38",
  /** Nav link hover, theme “purple” preset */
  purple: "#c74a73",

  white: "#ffffff",
  black: "#000000",

  grayBody: "#717171",
  grayBoulder: "#777777",
  grayMuted: "#abb8c3",
  grayDuotone: "#797979",
  graySecondary: "#e7e7e7",
  grayDark: "#191919",
  grayFooter: "#121010",
  grayFooterBar: "#1d1b1b",
  border: "#f2f2f2",
} as const;

export type BrandColorKey = keyof typeof brandColors;

/** CSS custom property names (without `var()`) */
export const brandCssVars = {
  pink: "--kw-pink",
  pinkBand: "--kw-pink-band",
  maroon: "--kw-maroon",
  purple: "--kw-purple",
  white: "--kw-white",
  black: "--kw-black",
  grayBody: "--kw-gray-body",
  grayBoulder: "--kw-gray-boulder",
  grayMuted: "--kw-gray-muted",
  grayDuotone: "--kw-gray-duotone",
  graySecondary: "--kw-gray-secondary",
  grayDark: "--kw-gray-dark",
  grayFooter: "--kw-gray-footer",
  grayFooterBar: "--kw-gray-footer-bar",
  border: "--kw-border",
  cta: "--kw-cta",
  linkHover: "--kw-link-hover",
  headingAccent: "--kw-heading-accent",
  primary: "--kw-primary",
  button: "--kw-button",
  buttonHover: "--kw-button-hover",
} as const;
