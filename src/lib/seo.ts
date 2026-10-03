/** Creates a concise human-readable SEO description from the first meaningful paragraph. */
export function createDescriptionFromContent(content: string): string {
  const text = content
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/~{3}[\s\S]*?~{3}/g, ' ')
    .replace(/<!--[\s\S]*?-->/g, ' ')
    .replace(/::[a-z-]+(?:\[[^\]]*\]|\{[^}]*\})?/gi, ' ')
    .replace(/!\[[^\]]*\]\([^)]*\)/g, ' ')
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
    .replace(/https?:\/\/\S+/g, ' ')
    .replace(/[#*_`>|]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

  if (!text) return '';

  const limit = 160;
  if (text.length <= limit) return text;

  const boundary = text.lastIndexOf(' ', limit);
  return `${text.slice(0, boundary > 0 ? boundary : limit).trim()}…`;
}

export type StructuredData = Record<string, unknown>;

export function personSchema(
  name: string,
  url: string,
  socialUrls: string[],
): StructuredData {
  return {
    '@type': 'Person',
    name,
    url,
    sameAs: socialUrls,
  };
}

export function websiteSchema(
  name: string,
  description: string,
  url: string,
  author: StructuredData,
): StructuredData {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name,
    description,
    url,
    inLanguage: 'en-GB',
    author,
  };
}

export function blogPostingSchema({
  title,
  description,
  url,
  publishedTime,
  author,
  publisher,
  image,
}: {
  title: string;
  description: string;
  url: string;
  publishedTime?: Date;
  author: StructuredData;
  publisher: StructuredData;
  image?: string;
}): StructuredData {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description,
    mainEntityOfPage: url,
    ...(publishedTime ? { datePublished: publishedTime.toISOString() } : {}),
    ...(image ? { image } : {}),
    author,
    publisher,
  };
}
