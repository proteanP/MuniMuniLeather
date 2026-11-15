# Editing the muni·muni site

This is a small Astro site. Merging a pull request to `main` publishes it.

## Where things live
- All text, links and the photo list: `src/content/site.json`. Change words and links there, not in the page files.
- Colors, fonts and spacing: `src/styles/tokens.css`. Change a token there; don't hard-code colors or fonts anywhere else.
- Photos: put the image file in `public/photos/`, then add one entry to `photos` in `src/content/site.json`:
  `{ "file": "wallet-brown.jpg", "alt": "Brown leather wallet, folded, on a wooden table" }`.
  Every photo needs an `alt` that describes what is in it. The gallery shows photos in the order they are listed. Keep each photo around 1000 px wide and under about 200 KB.
- About text: `about` in `src/content/site.json`. Leave it `""` to hide the section.
- Logo: the image file is in `public/brand/`; `brand.logo` in `site.json` points at it. To swap the logo, add the new file there and set `brand.logo.file` to its file name (no folder).
- Links: each entry in `links` has a `url` and the `label` shown on the page. Set `links.instagram.url` to the full profile URL to show the Instagram link; leave it `""` to hide it.
- Page layout: `src/pages/index.astro` puts the sections in order; each section is one component in `src/components/`. Only edit these to change the layout, not the words.

## Rules
- Keep changes small. Don't add frameworks, packages or new pages unless asked.
- Don't copy text into components; read it from `site.json`.
- Run `npm ci` then `npm run build` and make sure it passes before opening a pull request.
- Each pull request gets a build check and a preview link; check the preview before merging.
