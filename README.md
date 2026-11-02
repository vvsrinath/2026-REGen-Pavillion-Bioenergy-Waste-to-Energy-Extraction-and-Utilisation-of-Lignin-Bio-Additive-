# REGen Pavilion — Lignin Bio-Additive Research

A responsive research website for the project **“Extraction and Utilisation of Lignin as Bio-Additive in a
Compression Ignition Engine Fuelled with Diesel Fuel — An Approach to Improve Fuel Properties.”**

Built with React, Vite, Tailwind CSS and Lucide icons. The site is a single-page research programme with
separate privacy and ownership pages, and deploys as a static site on Netlify.

> **Content integrity:** the site describes proposed research. It does not claim completed experiments,
> measured performance, emissions reductions, funding, partnerships or commercial outcomes. Charts and the
> blend matrix are explicitly labelled as planned or illustrative.

---

## Quick start

Requirements: Node.js 20+ and npm.

```bash
npm install
npm run dev      # local development at http://localhost:5173
npm run build    # production build in dist/
npm run preview  # preview the production build
```

---

## Deploy to Netlify

### Option A — Git integration (recommended)

1. Push this folder to GitHub, GitLab or Bitbucket.
2. In Netlify choose **Add new site → Import an existing project**.
3. Select the repository. Netlify reads `netlify.toml`, so the defaults should be:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
4. Deploy. Every push to the production branch rebuilds the site.

### Option B — Netlify CLI

```bash
npm install -g netlify-cli
npm run build
netlify deploy --prod --dir dist
```

### SPA routing

`public/_redirects` and the `[[redirects]]` rule in `netlify.toml` send unknown paths to `index.html`, so
React Router can serve `/privacy`, `/ownership` and the 404 page without a server.

---

## Before you publish

1. **Set the real site URL.** Replace every `https://YOUR-SITE.netlify.app/` in:
   - `index.html` — canonical, `og:url`, `og:image`, `twitter:image`
   - `public/robots.txt`
   - `public/sitemap.xml`

   Search the project for `YOUR-SITE` to find them all. Absolute URLs are required for social previews.

2. **Update the CSP hash if you edit the JSON-LD block.** The `script-src` directive in `netlify.toml`
   contains a SHA-256 hash for the inline `ResearchProject` JSON-LD in `index.html`. If that block changes,
   recompute the hash:

   ```bash
   python3 - <<'PY'
   import re, hashlib, base64
   html = open("dist/index.html", encoding="utf-8").read()
   content = re.search(r'<script type="application/ld\+json">(.*?)</script>', html, re.S).group(1)
   print("sha256-" + base64.b64encode(hashlib.sha256(content.encode()).digest()).decode())
   PY
   ```

   Then update `script-src` in `netlify.toml`.

3. **Enable form submissions.** The collaboration form posts to Netlify Forms:
   - `public/__forms.html` contains the hidden static form used by Netlify for detection.
   - The React form in `src/components/Collaboration.jsx` submits URL-encoded data to `/`.
   - After a successful submission, the form builds a formatted `mailto:` draft (name, institution, email,
     interest and message) to `9926009061@klu.ac.in` and opens it in the visitor's email app. The success
     and error states also keep a visible link to that draft, so an enquiry never dead-ends.
    - After the first deploy, confirm **Forms → collaboration** exists in the Netlify dashboard, then add an
       **Email notification** addressed to your verified inbox. Form submissions are stored by Netlify, but
       they will not arrive by email until this notification is configured in the site dashboard.
   - Form fields must stay in sync between `public/__forms.html` and the React component.

4. **Verify content with the team and mentor.** In particular:
   - the mentor’s name/designation,
   - the feedstock species and collection plan,
   - test methods and laboratory access,
   - the indicative milestone schedule,
   - any contact details before publishing them.

5. **Replace illustrative imagery.** The biomass, methodology and workflow images are illustrative project
   assets. Field photographs of the selected *Prosopis juliflora* stand, the recovered lignin, the
   conversion set-up and the engine test rig should replace them when approved.

6. **Contact details.** The only published contact address is the owner-supplied project email
   `9926009061@klu.ac.in`. Do not add personal phone numbers, home addresses or other people’s email
   addresses without their explicit permission. Srinath’s GitHub and LinkedIn links are included because
   they were explicitly supplied.

---

## Project structure

```
.
├── index.html                  Vite entry, SEO/OG metadata, JSON-LD
├── netlify.toml                Build, SPA redirects, security headers, caching
├── LICENSE                     Proprietary ownership and copyright notice
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── public/
│   ├── __forms.html            Netlify form detection
│   ├── _redirects              SPA fallback
│   ├── robots.txt
│   ├── sitemap.xml
│   ├── manifest.webmanifest
│   └── assets/                 Hero image, responsive research images, PDFs, icons
├── src/
│   ├── App.jsx                 Routes, skip link, shared header/footer
│   ├── main.jsx
│   ├── index.css               Tailwind layers, responsive type, component classes
│   ├── data/content.js         Verified research content and planned programme data
│   ├── components/
│   │   ├── Header.jsx          Sticky nav, active-section tracking, accessible drawer
│   │   ├── Hero.jsx            Responsive project introduction and status
│   │   ├── ResearchOverview.jsx
│   │   ├── Workflow.jsx        8-stage proposed workflow
│   │   ├── Methodology.jsx     Interactive methodology accordion
│   │   ├── DataVisualisation.jsx
│   │   ├── Impact.jsx
│   │   ├── Collaboration.jsx   Validated Netlify enquiry form
│   │   ├── Funding.jsx
│   │   ├── Team.jsx
│   │   ├── Publications.jsx
│   │   ├── FinalCta.jsx
│   │   ├── Footer.jsx
│   │   └── … shared UI helpers
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Privacy.jsx
│   │   ├── Ownership.jsx       IP, copyright and research ownership statement
│   │   └── NotFound.jsx
│   └── …
├── legacy/index-v7.html        Previous static single-page site, kept for reference
└── assets/                     Original source assets used to build public/assets
```

`legacy/` and the `.bak`/`.prefix` files are not included in the production build.

---

## Responsive design notes

- Mobile-first layout with breakpoint-based heading sizes and fluid section spacing.
- Breakpoints cover 320 px through 1920 px+; layouts reorganise rather than simply shrink.
- Navigation becomes a keyboard-accessible drawer below 1280 px.
- Tables switch to stacked cards on mobile; the desktop table is horizontally scrollable.
- Charts use responsive HTML/CSS rather than fixed-width images.
- Hero and poster use responsive `srcset`/`sizes`; below-the-fold images are lazy-loaded.
- `prefers-reduced-motion` disables reveal and smooth-scroll animation.
- The site prevents horizontal overflow with `overflow-x: clip`.

## Accessibility notes

- Skip link, semantic landmarks, one `h1`, labelled sections and form controls.
- Visible focus styles and keyboard support throughout.
- Mobile drawer: focus moves into the panel, Escape closes it, focus is trapped, body scroll is locked.
- Accordion uses `aria-expanded` / `aria-controls`.
- Form errors are associated with fields and focus moves to the first invalid field.
- Success and error messages use live regions.

## Forms and privacy

- The form requests only name, institution, professional email, area of interest, message and consent.
- It warns against submitting confidential data.
- Netlify Forms processes submissions; add a notification destination in the Netlify dashboard.
- After a successful submission the form opens a formatted email draft to the project address, and both the
  success and error states provide a manual fallback link to the same draft.
- The site uses no analytics, advertising cookies or tracking pixels.
- The privacy page explains data use, retention and removal requests.

## Available documents

Only these research documents are currently published:

- `public/assets/regen-pavillion-abstract.pdf` — submitted abstract.
- `public/assets/regen-pavillion-poster.pdf` — research poster.

The poster includes charts labelled as representative / expected trends. Those graphics are illustrative
and must not be interpreted as measured project results. Its workflow also includes example biomass species;
the website's specified project feedstock remains *Prosopis juliflora*.

The presentation card is intentionally marked **Not available**. Do not add placeholder links.

## SEO checklist

- [x] Descriptive title and meta description
- [x] Canonical URL (replace placeholder)
- [x] Open Graph and Twitter card metadata
- [x] `ResearchProject` JSON-LD
- [x] `sitemap.xml` and `robots.txt`
- [x] Semantic headings and accessible navigation
- [ ] Replace `YOUR-SITE` with the live Netlify URL before launch
- [ ] Verify the final social preview with Netlify’s deploy preview or a card validator

## Ownership, IP and licence

The REGen Pavilion research programme — including its research concept, research direction, methods,
research outputs, downloadable documents and website content — is owned and managed solely by **Srinath
Vatchavari Venkateshan**. Copyright © 2026 Srinath Vatchavari Venkateshan. All rights reserved.

Aarya Brat Shankar and R. Bhuvaneshwaran are acknowledged supporting contributors. Dr. S. K. Gowthaman is
the faculty mentor. Their involvement, acknowledgement or author credit does **not** grant ownership,
copyright or other rights in the research or its outputs.

No part of the research, documents or site may be reproduced, adapted, distributed or used commercially
without prior written permission from the owner, except where applicable law permits it. See `LICENSE` and
the public `/ownership` page. This wording records the project’s position; it does not override applicable
institutional policy or law, and any separate written agreement signed by the owner takes precedence.

Third-party references link to their DOI records and remain the property of their respective authors and
publishers. Fonts (Inter, Manrope) and Lucide icons are open-source packages installed via npm and retain
their own licences. KARE is referenced as the institutional affiliation, not as an owner of the project’s
IP.
