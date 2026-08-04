import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    url: "https://murfitt.net",
    title: "Dan Murfitt",
    description: "Software engineering, web development and technology",
    author: "Dan Murfitt",
    profile: "https://github.com/danmurf",
    lang: "en",
    timezone: "Europe/London",
    dir: "ltr",
  },
  posts: {
    perPage: 10,
    perIndex: 10,
    scheduledPostMargin: 15 * 60 * 1000,
  },
  features: {
    lightAndDarkMode: true,
    dynamicOgImage: true,
    showArchives: true,
    showBackButton: true,
    editPost: {
      enabled: false,
    },
    search: "pagefind",
  },
  socials: [
    { name: "github", url: "https://github.com/danmurf" },
    { name: "x", url: "https://twitter.com/danmurf" },
    { name: "linkedin", url: "https://www.linkedin.com/in/danmurfitt/" },
    { name: "mail", url: "mailto:dan@murfitt.net" },
  ],
  shareLinks: [],
});
