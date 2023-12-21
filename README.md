# Murfitt.net

To build all content, including drafts, and run a web server:

```shell
hugo server --buildDrafts
```

To create a new blog post:

```shell
hugo new blog/my-blog.md
```

To create a new blog post which contains images, you will need to create the post in a directory:

```shell
hugo new blog/my-blog/index.md
```

You can then add an image file to that directory, and refer to it as the cover photo:

```yaml
---
title: "My Blog"
date: 2023-09-03T08:39:41+01:00
draft: true
cover:
    responsiveImages: true # will generate responsive images automatically
    image: "images/featured.jpg" # path relative to the new folder you created. E.g. ./blog/my-blog/images/featured.jpg
    # image: https://i.ibb.co/K0HVPBd/paper-mod-profilemode.png # can also be a direct external link
    alt: "An image of ..."
    caption: "A picture showing ..."
---
```
