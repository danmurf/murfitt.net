# murfitt.net

Built with [Astro](https://astro.build), Tailwind CSS v4, and the Sätteri markdown processor.

## Development

```shell
npm run dev
```

Type-check the project:

```shell
npm run check
```

## Building

```shell
npm run build
```

Output goes to `dist/`.

## Creating a new blog post

Add a markdown file to `src/content/blog/`:

```md
---
title: "My Blog Post"
slug: my-blog-post
date: '2026-09-26T09:00:00Z'
tags:
  - Tag Name
description: "Optional description used for SEO and RSS"
---

Post body here.
```

Posts are published automatically once their `date` has passed — a daily
GitHub Actions job rebuilds the site at 06:00 UTC to pick up future-dated posts.

### Images in a post

Create a directory with an `index.md` and place images alongside it:

```
src/content/blog/my-blog-post/
├── index.md
└── featured.jpg
```

Reference the image in the post body: `![Alt text](featured.jpg)`.

To use an image as the cover (shown at the top of the post and in OG/Twitter cards),
add front matter:

```yaml
cover:
  image: "featured.jpg"
  alt: "An image of ..."
  relative: true
```

### Comments

Add a "reply on X" CTA at the end of a post body:

```
::tweet-reply[1234567890123456789]
```

(the number is the tweet/status ID to link to)

### Embeds

```md
::youtube[VIDEO_ID]
::vimeo[12345678]
```

## Redirects

Old URLs (from the Hugo/Jekyll/Drupal eras) are mapped in `src/redirects.json`,
which is wired into Astro's `redirects` config. Each generates a static
meta-refresh stub page, which works on GitHub Pages.

## Deployment

GitHub Pages via `.github/workflows/astro.yml`. The `CNAME` file in `public/`
keeps the custom domain (murfitt.net).