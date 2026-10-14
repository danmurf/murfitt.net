---
title: "Creating a Blog Post with Hugo"
date: 2026-10-14T00:00:00Z
draft: true
description: "An example post showing how to create, preview and review a new blog post with Hugo."
tags: ["Hugo", "Blogging", "Git"]
---

This is an example post for trying out the blog publishing workflow. Hugo keeps the content in Markdown files, so adding a post can be as simple as creating a file and opening a pull request.

To create a new post, run this from the root of the repository:

```shell
hugo new blog/my-blog.md
```

The new file appears in `content/blog/`. Hugo adds a title, date and `draft: true` to the metadata at the top of the file. You can edit these fields, then write the post underneath using Markdown.

<!--more-->

## Previewing the post

To see the post locally, including drafts, run:

```shell
hugo server --buildDrafts
```

Open the local address printed by Hugo and go to the blog page. The preview updates as you save changes, which makes it easy to check headings, links and code examples while you write.

## Adding images

If a post needs images, create it as a page bundle instead:

```shell
hugo new blog/my-blog/index.md
```

Put the images in the same directory as `index.md` and refer to them with relative paths. This keeps the post and its images together.

## Reviewing and publishing

Commit the new post on a branch and open a pull request. That gives you a place to review the text and check the site build before merging.

This example is deliberately marked as a draft, so the normal site build will leave it out. When a post is ready to publish, set `draft: false` and check that its date is not in the future. Once those changes are merged into `main`, the site's GitHub Pages workflow builds and deploys it.
