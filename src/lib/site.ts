export const SITE = {
  title: 'Dan Murfitt',
  description: 'Software engineering, web development and technology',
  url: 'https://murfitt.net',
  author: 'Dan Murfitt',
  social: {
    x: 'https://twitter.com/danmurf',
    linkedin: 'https://www.linkedin.com/in/danmurfitt/',
    github: 'https://github.com/danmurf',
  },
  verification: 'i_X2zxbHkmFz5EuSN1p37tKal2UF4ZxpA7QN4hZ-CIY',
  defaultImage: '/dan-og.jpeg',
  defaultImageAlt: 'Dan Murfitt',
};

export const POSTS_PER_PAGE = 5;

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(date);
}
