import DOMPurify from 'dompurify';

/**
 * @param {string} html
 */
export function isBodyEmpty(html) {
  if (!html?.trim()) return true;
  const text = html.replace(/<[^>]*>/g, '').replace(/&nbsp;/g, ' ').trim();
  return !text;
}

/**
 * @param {string} html
 */
export function sanitizeBlogHtml(html) {
  if (!html?.trim()) return '';
  return DOMPurify.sanitize(html, {
    ALLOWED_TAGS: [
      'p',
      'br',
      'strong',
      'b',
      'em',
      'i',
      'u',
      's',
      'strike',
      'h2',
      'h3',
      'h4',
      'ul',
      'ol',
      'li',
      'blockquote',
      'a',
      'img',
      'hr'
    ],
    ALLOWED_ATTR: ['href', 'src', 'alt', 'title', 'target', 'rel', 'class'],
    ALLOW_DATA_ATTR: false
  });
}

/**
 * Plain-text posts saved before the rich editor should still read well.
 * @param {string} body
 */
export function isLikelyHtml(body) {
  return /<\s*(p|h[1-6]|ul|ol|li|blockquote|img|strong|em|a|br)\b/i.test(body || '');
}

/**
 * @param {string} body
 */
export function renderBlogBody(body) {
  const raw = body?.trim() || '';
  if (!raw) return '';
  if (isLikelyHtml(raw)) return sanitizeBlogHtml(raw);
  const escaped = raw
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
  return escaped.replace(/\n/g, '<br>');
}
