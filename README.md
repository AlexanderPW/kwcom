# kelseywaldrop.com (Next.js migration)

Rebuild of [kelseywaldrop.com](https://kelseywaldrop.com) from WordPress (HostGator) to **Next.js**, **Tailwind CSS**, and **Vercel**.

## Stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS v4

## Development

Node.js LTS is required. From the repo root:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project status

- [x] App scaffold
- [x] **Home page: WordPress HTML + theme CSS (pixel-accurate migration path)**
- [ ] Re-sync when WP home changes (`npm run wp:extract` after saving `_ref-home.html` from live site, or extend script to fetch automatically)
- [ ] Inner pages (placeholders only)
- [ ] Blog / podcast content migration
- [ ] Email capture popup (Popup Maker on WP today)
- [ ] Contact forms (Forminator on WP today)
- [ ] Production deploy + DNS cutover to Vercel

## WordPress parity (home)

The home route renders extracted block markup from the live site:

- `src/content/header.html`, `home-main.html`, `footer.html`
- `public/wp-assets/wp-inline.css` (page-specific styles from WP)
- Theme/block styles loaded via `WpStylesheets` (same URLs as production today)

Refresh extracted content after WP edits:

```bash
# Download latest homepage HTML to _ref-home.html (browser save or curl), then:
npm run wp:extract
```
