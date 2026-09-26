import { getCollection, type CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'blog'>;

/** All posts, newest first, excluding posts dated in the future (matches Hugo buildFuture: false) */
export async function getPublishedPosts(): Promise<Post[]> {
  const posts = await getCollection('blog');
  const now = new Date();
  return posts
    .filter((p) => p.data.date <= now)
    .sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

export function postUrl(slug: string): string {
  return `/blog/${slug}/`;
}

export function tagUrl(tag: string): string {
  return `/tags/${slugifyTag(tag)}/`;
}

export function slugifyTag(tag: string): string {
  // matches Hugo's urlize: lowercase, spaces -> dashes, parens stripped, punctuation (dot, plus, hyphen) kept
  return tag
    .toLowerCase()
    .trim()
    .replace(/[()]/g, '')
    .replace(/\s+/g, '-');
}

export async function getAllTags(posts: Post[]): Promise<Map<string, Post[]>> {
  const tags = new Map<string, Post[]>();
  for (const post of posts) {
    for (const tag of post.data.tags) {
      const list = tags.get(tag) ?? [];
      list.push(post);
      tags.set(tag, list);
    }
  }
  return tags;
}