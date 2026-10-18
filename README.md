# remotereason.com

Remote Reason's website, built with [Astro](https://astro.build) and Tailwind CSS and deployed to GitHub Pages.

## Development

Requires Node.js `>= 22.22` (see `.nvmrc`).

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # static site in dist/
npm run preview  # serve dist/
npm run check    # type-check .astro/.ts files
```

## Structure

- `src/pages/` – routes. Pages keep the original URLs: `/`, `/page/<name>`, `/blog`, `/blog/<id>`, `/sitemap.xml`.
  - `page/[service].astro` renders the five service pages from `src/data/site.ts`.
  - `404.astro` shows the home page content, like the old catch-all route.
- `src/data/site.ts` – services, clients, case studies and social links.
- `src/data/pages.ts` – page titles, navigation and Open Graph metadata.
- `src/components/` – shared UI; `components/page/` holds the case study / service building blocks.
- `src/content/posts/<year>/<MM>-<DD>-<id>.md` – blog posts. The URL id is the part after the date.
- `src/lib/markdown-embeds.mjs` – Markdown plugin for `youtube: <url>` embeds and ```` ```mermaid ```` diagrams.
- `src/styles/` – Tailwind entry point and the Heroicons plugin (`hero-<name>` classes).
- `public/` – static files copied as-is (images, favicon, `CNAME`, `robots.txt`).

### Adding a blog post

Create `src/content/posts/<year>/<MM>-<DD>-<id>.md`, put the thumbnail in `public/images/posts/<year>/`, and add frontmatter:

```yaml
---
title: "Post title"
date: 2025-11-21
author: "Paul Sabou"
thumbnail: "11-21-post-title.png"
tags: ["llm", "gen_ai"]
description: "One or two sentences used on the blog index and in social cards."
---
```

## Deployment

Every push to `main` builds and deploys the site with `.github/workflows/deploy.yml`.

One-time GitHub setup: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
The custom domain comes from `public/CNAME` (`remotereason.com`). Point the domain's DNS at GitHub Pages
([docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)),
then enable **Enforce HTTPS**.
