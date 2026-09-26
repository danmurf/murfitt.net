import { defineMdastPlugin } from 'satteri';

function escapeHtml(s) {
  return String(s ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function directiveId(node) {
  return String(node.children?.[0]?.value ?? '').trim();
}

/**
 * Renders migrated Hugo shortcodes (converted to directives by scripts/migrate.mjs):
 *
 * ::tweet-reply[1234567890]
 * ::youtube[VIDEOID]
 * ::vimeo[123456]
 * ::img{src="..." alt="..." caption="..." link="..." title="..." attr="..." attrlink="..."}
 */
export const remarkShortcodes = defineMdastPlugin({
  name: 'remark-shortcodes',
  leafDirective(node, ctx) {
    const html = renderDirective(node);
    if (html) ctx.replaceNode(node, { rawHtml: html });
  },
});

function htmlFor(name, node) {
  if (name === 'tweet-reply') {
    const id = directiveId(node);
    if (!/^\d+$/.test(id)) return null;
    return `<div class="shortcode-tweet-reply not-prose my-6"><h3>Comments</h3><p>If you found this helpful, or have any questions, please feel free to <a href="https://twitter.com/danmurf/status/${id}" target="_blank" rel="noopener noreferrer">drop me a reply on X (formerly Twitter)</a>.</p></div>`;
  }

  if (name === 'youtube') {
    const id = directiveId(node);
    if (!/^[A-Za-z0-9_-]+$/.test(id)) return null;
    return `<div class="shortcode-video not-prose my-6 aspect-video w-full"><iframe src="https://www.youtube-nocookie.com/embed/${id}" title="YouTube video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen loading="lazy" style="width:100%;height:100%"></iframe></div>`;
  }

  if (name === 'vimeo') {
    const id = directiveId(node);
    if (!/^\d+$/.test(id)) return null;
    return `<div class="shortcode-video not-prose my-6 aspect-video w-full"><iframe src="https://player.vimeo.com/video/${id}" title="Vimeo video" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen loading="lazy" style="width:100%;height:100%"></iframe></div>`;
  }

  if (name === 'img') {
    const attrs = node.attributes ?? {};
    if (!attrs.src) return null;
    const alt = escapeHtml(attrs.alt || attrs.caption || '');
    const imgTag = `<img src="${escapeHtml(attrs.src)}" alt="${alt}" loading="lazy" decoding="async">`;
    const wrapped = attrs.link ? `<a href="${escapeHtml(attrs.link)}">${imgTag}</a>` : imgTag;
    let caption = '';
    if (attrs.title || attrs.caption || attrs.attr) {
      const titleHtml = attrs.title ? `<h4>${escapeHtml(attrs.title)}</h4>` : '';
      const attrHtml = attrs.attr
        ? attrs.attrlink
          ? ` <a href="${escapeHtml(attrs.attrlink)}">${escapeHtml(attrs.attr)}</a>`
          : ` ${escapeHtml(attrs.attr)}`
        : '';
      const captionHtml =
        attrs.caption || attrs.attr
          ? `<p>${escapeHtml(attrs.caption ?? '')}${attrHtml}</p>`
          : '';
      caption = `<figcaption class="caption">${titleHtml}${captionHtml}</figcaption>`;
    }
    return `<figure class="shortcode-figure not-prose my-6">${wrapped}${caption}</figure>`;
  }

  return null;
}

function renderDirective(node) {
  return htmlFor(node.name, node);
}