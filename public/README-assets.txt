STATIC ASSETS — MANUAL COPY REQUIRED
=====================================

The following binary/image files must be copied manually from the original project
into this directory (NEW/public/):

  Source:      artifacts/pyrite-ventures/public/
  Destination: NEW/public/

Files to copy:
  - hero-bg.png       (Hero section background image)
  - favicon.svg       (Browser tab icon)
  - opengraph.jpg     (OG image for social sharing / SEO)

These files are referenced in:
  - src/app/globals.css     → hero-bg.png (background-image in .hero-section)
  - src/app/layout.tsx      → favicon.svg (in <head> via Next.js metadata icons)
  - src/app/layout.tsx      → opengraph.jpg (in metadata.openGraph.images)

Copy command (run from repo root):
  cp artifacts/pyrite-ventures/public/hero-bg.png NEW/public/
  cp artifacts/pyrite-ventures/public/favicon.svg NEW/public/
  cp artifacts/pyrite-ventures/public/opengraph.jpg NEW/public/
