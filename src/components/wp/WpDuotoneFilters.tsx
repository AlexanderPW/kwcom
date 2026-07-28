/** SVG filters referenced by wp-inline cover duotone classes (injected by WP at end of page). */
export function WpDuotoneFilters() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 0 0"
      width={0}
      height={0}
      focusable="false"
      role="none"
      aria-hidden
      style={{
        visibility: "hidden",
        position: "absolute",
        left: -9999,
        overflow: "hidden",
      }}
    >
      <defs>
        <filter id="wp-duotone-000000-rgb797979-2">
          <feColorMatrix
            colorInterpolationFilters="sRGB"
            type="matrix"
            values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 "
          />
          <feComponentTransfer colorInterpolationFilters="sRGB">
            <feFuncR type="table" tableValues="0 0.30980392156863" />
            <feFuncG type="table" tableValues="0 0.30980392156863" />
            <feFuncB type="table" tableValues="0 0.30980392156863" />
            <feFuncA type="table" tableValues="1 1" />
          </feComponentTransfer>
          <feComposite in2="SourceGraphic" operator="in" />
        </filter>
      </defs>
    </svg>
  );
}
