import rss from '@astrojs/rss';
import { getPublishedPosts } from '../../lib/posts';
import { SITE } from '../../lib/site';

export async function GET(context) {
  const posts = await getPublishedPosts();
  return rss({
    title: `Tags on ${SITE.title}`,
    description: `Recent content in Tags on ${SITE.title}`,
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.date,
      link: `/blog/${post.data.slug}/`,
      categories: post.data.tags,
    })),
    customData: '<language>en-gb</language>',
  });
}