LIGNIN BIO-ADDITIVE RESEARCH WEBSITE — VERSION 5

Included:
- index.html: professional, responsive research website (single page)
- 404.html: themed "page not found" page (served automatically by Netlify)
- assets/regen-pavillion-poster.pdf: the presented research poster, shown in
  the "Poster" section with a preview image and a download button
- assets/: responsive images (WebP at 3 widths + PNG fallback), poster
  preview (WebP + PNG), SVG/ICO favicons and 192/512 px app icons
- manifest.webmanifest: installable web-app metadata
- netlify.toml: Netlify build, security headers and caching configuration
- robots.txt, sitemap.xml: search-engine basics
- README.txt: this file

========================================================================
DEPLOY TO NETLIFY (EASIEST — DRAG & DROP)
========================================================================
1. Go to https://app.netlify.com/drop
2. Drag the ENTIRE project folder (this folder) onto the page.
3. Netlify publishes it immediately and gives you a live URL like
   https://your-site-name.netlify.app
4. Optional: Site settings > Change site name to pick a nicer URL.

No build step is required. netlify.toml is read automatically.

========================================================================
DEPLOY TO NETLIFY (GIT-BASED, CONTINUOUS DEPLOY)
========================================================================
1. Push this folder to a GitHub/GitLab/Bitbucket repository.
2. In Netlify: "Add new site" > "Import an existing project".
3. Choose the repository.
4. Build command: leave EMPTY (or set to: echo "no build")
   Publish directory: .      (a single dot = repository root)
5. Deploy. Every push to the main branch re-deploys the site.

Alternatively, from a terminal with the Netlify CLI installed:
   netlify deploy --prod --dir .
(Files netlify.toml, robots.txt and sitemap.xml are picked up automatically.)

========================================================================
AFTER THE FIRST DEPLOY — REPLACE PLACEHOLDERS
========================================================================
Replace https://YOUR-SITE.netlify.app/ with your real Netlify URL in:
1. sitemap.xml and robots.txt
2. index.html <head>: <link rel="canonical">, <meta property="og:url">,
   og:image and twitter:image (absolute URLs are required for social
   previews to render).
Search for "YOUR-SITE" to find every occurrence.

========================================================================
OPTIONAL — ANALYTICS
========================================================================
- Easiest: Netlify dashboard > Site configuration > Analytics > Enable
  (server-side, no code change, privacy-friendly).
- Or paste a privacy-friendly snippet (e.g. Plausible, GoatCounter) where
  the comment marker is in index.html <head>.

========================================================================
IMPORTANT CONTENT NOTES
========================================================================
- Verify the student email addresses (9926009061@klu.ac.in,
  9926001001@klu.ac.in, 9926006025@klu.ac.in) before publishing.
- Public websites are visible to anyone. Confirm permission before
  publishing team email addresses.
- The site labels research as in progress and claims no experimental results.
- Some graphics are illustrative. The biomass feedstock image shows generic
  examples; replace it with the actual selected feedstock if different.
- Verify references, extraction method, species and protocol with the mentor.

========================================================================
PERFORMANCE / MAINTENANCE NOTES
========================================================================
- Images ship as WebP at 3 widths (with a compressed PNG fallback) via
  <picture>/srcset, cutting asset weight from ~8 MB to well under 1 MB
  and letting phones download smaller variants.
- Assets are cached for one year (immutable); index.html is always
  revalidated. If you edit an image but keep the same filename, rename the
  file (e.g. add a version suffix) so the CDN serves the new copy.
- The mobile navigation is a CSS-only hamburger (no JavaScript), and the
  page has a print stylesheet for poster/handout use.
