import rss from '@astrojs/rss';
import { getPublishedPosts, getAllTags, slugifyTag } from '../../../lib/posts';
import { SITE } from '../../../lib/site';

export async function getStaticPaths() {
  const posts = await getPublishedPosts();
  const tags = await getAllTags(posts);
  return [...tags.entries()].map(([tag, tagPosts]) => ({
    params: { tag: slugifyTag(tag) },
    props: { tag, posts: tagPosts },
  }));
}

export async function GET(context) {
  const { tag, posts } = context.props;
  const sorted = posts.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
  return rss({
    title: `${SITE.title} » ${tag}`,
    description: `Posts tagged "${tag}" on ${SITE.title}`,
    site: context.site,
    items: sorted.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.date,
      link: `/blog/${post.data.slug}/`,
      categories: post.data.tags,
    })),
    customData: '<language>en-gb</language>',
  });
}