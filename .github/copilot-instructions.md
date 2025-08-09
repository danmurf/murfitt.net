# Murfitt.net Personal Website

Always reference these instructions first and fallback to search or bash commands only when you encounter unexpected information that does not match the info here.

This is a Hugo static site generator project for Dan Murfitt's personal website (murfitt.net). The site includes a blog with 79+ posts, about page, contact page, and uses the PaperMod theme.

## Working Effectively

Bootstrap, build, and test the repository:

- Install Hugo extended v0.108.0: `wget -O /tmp/hugo.deb https://github.com/gohugoio/hugo/releases/download/v0.108.0/hugo_extended_0.108.0_linux-amd64.deb && sudo dpkg -i /tmp/hugo.deb`
- Initialize theme submodule: `git submodule update --init --recursive`
- **CRITICAL**: Add network error handling to config.yaml: Add `ignoreErrors: ["error-remote-getjson"]` after the `buildExpired: false` line in config.yaml. This is required for builds in network-limited environments.
- Build the site: `hugo --minify` -- takes ~250ms. NEVER CANCEL. Set timeout to 5+ minutes to be safe.
- Build with drafts: `hugo --buildDrafts --minify` -- takes ~250ms. NEVER CANCEL. Set timeout to 5+ minutes.
- Clean previous build: `rm -rf public/`

Run the development server:
- ALWAYS run the bootstrapping steps first
- Development server: `hugo server --buildDrafts --bind=0.0.0.0 --port=1313`
- Access at: http://localhost:1313/
- Server starts in ~250ms and includes live reload functionality

## Key Project Structure

```
.
├── config.yaml          # Main Hugo configuration
├── content/             # Site content
│   ├── blog/           # Blog posts (79+ markdown files)
│   ├── about.md        # About page
│   ├── contact.md      # Contact page
│   ├── privacy.md      # Privacy policy
│   └── disclosure.md   # Disclosure policy
├── static/             # Static assets (images, icons)
├── layouts/            # Custom Hugo templates
│   ├── partials/      # Template partials
│   └── shortcodes/    # Custom shortcodes
├── themes/PaperMod/    # Theme (git submodule)
├── public/             # Generated site (build output)
└── .github/workflows/hugo.yml  # CI/CD pipeline
```

## Content Creation

Create a new blog post:
- Simple post: `hugo new blog/my-post.md`
- Post with images: `hugo new blog/my-post/index.md`

For posts with images, create the directory structure and add this frontmatter:
```yaml
---
title: "My Blog Post"
date: 2023-09-03T08:39:41+01:00
draft: true
cover:
    responsiveImages: true
    relative: true
    image: "images/featured.jpg"
    alt: "Description of image"
    caption: "Image caption"
---
```

## Validation

ALWAYS manually validate changes by:
- Building the site successfully: `hugo --minify`
- Starting the development server: `hugo server --buildDrafts`
- Testing key pages:
  - Homepage: `curl -s http://localhost:1313/ | grep -o '<title>[^<]*</title>'`
  - Blog listing: `curl -s http://localhost:1313/blog/ | grep -o '<title>[^<]*</title>'`
  - About page: `curl -s http://localhost:1313/about/ | grep -o '<title>[^<]*</title>'`
  - Contact page: `curl -s http://localhost:1313/contact/ | grep -o '<title>[^<]*</title>'`
- Creating test blog posts to ensure content creation workflow works

### Complete End-to-End Validation Workflow
After any changes, run this complete validation sequence:
1. `rm -rf public/` (clean build)
2. `hugo --minify` (test production build)
3. `hugo server --buildDrafts --bind=0.0.0.0 --port=1313 &` (start dev server)
4. `curl -s http://localhost:1313/ | grep '<title>Dan Murfitt</title>'` (verify homepage)
5. `curl -s http://localhost:1313/blog/ | grep '<title>Blog | Dan Murfitt</title>'` (verify blog)
6. `hugo new blog/test-validation.md` (test content creation)
7. `rm content/blog/test-validation.md` (cleanup)
8. Stop development server (Ctrl+C or kill process)

## Build Configuration

Key configuration in `config.yaml`:
- Hugo theme: PaperMod
- Base URL: https://murfitt.net
- Build settings: minification enabled, drafts disabled in production
- **CRITICAL**: `ignoreErrors: ["error-remote-getjson"]` required for network-limited environments

## Deployment

The site automatically deploys via GitHub Actions:
- Trigger: pushes to `master` branch
- Hugo version: 0.108.0 extended
- Builds to GitHub Pages
- Includes Dart Sass support
- Handles git submodules automatically

## Common Tasks Reference

### Repository root contents
```
README.md          # Basic setup instructions
config.yaml        # Hugo configuration
.gitmodules        # Git submodules configuration
content/           # Site content
layouts/           # Custom templates
static/            # Static assets
themes/            # PaperMod theme (submodule)
.github/           # GitHub Actions workflows
```

### Dependencies
- Hugo extended v0.108.0 (REQUIRED: extended version for SCSS support)
- Git (for submodule management)
- No npm dependencies required

### Time Expectations
- Hugo installation: ~30 seconds
- Submodule initialization: ~10 seconds
- Site build: ~250ms. NEVER CANCEL. Set timeout to 5+ minutes.
- Development server startup: ~250ms
- All operations are fast, but always allow adequate timeout for network operations

### Troubleshooting
- **CRITICAL**: If build fails with Vimeo API errors like "Failed to get JSON resource", add `ignoreErrors: ["error-remote-getjson"]` to config.yaml after the `buildExpired: false` line. This is required for builds in network-limited environments.
- If theme missing, run: `git submodule update --init --recursive`
- If Hugo command not found, install extended version as shown above
- Development server binds to 0.0.0.0:1313 for external access

## Theme Management

The PaperMod theme is managed as a git submodule:
- Theme repo: https://github.com/adityatelange/hugo-PaperMod.git
- Local path: `themes/PaperMod/`
- Update theme: `git submodule update --remote themes/PaperMod`

## Content Guidelines

- Blog posts use markdown format
- Front matter includes title, date, draft status
- Images should be optimized and use responsive image features
- All content follows Hugo's content organization standards
- Draft posts only visible with `--buildDrafts` flag