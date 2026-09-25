/**
 * Shared render helpers for editorial body blocks.
 * Used by the React magazine UI and the build-time crawler HTML layer.
 */

/** @typedef {{ text: string }} TextPart */
/** @typedef {{ em: string }} EmPart */
/** @typedef {{ strong: string }} StrongPart */
/** @typedef {{ link: string, href: string, external?: boolean }} LinkPart */
/** @typedef {TextPart | EmPart | StrongPart | LinkPart} InlinePart */

/**
 * @typedef {Object} EditorialBlock
 * @property {'p' | 'h2' | 'h3' | 'quote' | 'externalLink' | 'internalLink' | 'table' | 'figure'} type
 * @property {string} [text]
 * @property {InlinePart[]} [parts]
 * @property {string} [href]
 * @property {string} [label]
 * @property {string} [to]
 * @property {string} [caption]
 * @property {string[]} [headers]
 * @property {InlinePart[][][]} [rows]
 * @property {string} [src]
 * @property {string} [alt]
 * @property {InlinePart[]} [captionParts]
 * @property {string} [credit]
 * @property {boolean} [eager]
 * @property {boolean} [fullWidth]
 * @property {boolean} [compact]
 * @property {number} [cropLeft]
 */

export function escapeHtml(value) {
  return String(value ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
}

function escapeAttr(value) {
  return escapeHtml(value).replaceAll("'", '&#39;')
}

/** @param {InlinePart[]} parts */
export function partsToHtml(parts) {
  return parts
    .map((part) => {
      if ('em' in part) return `<em>${escapeHtml(part.em)}</em>`
      if ('strong' in part) return `<strong>${escapeHtml(part.strong)}</strong>`
      if ('link' in part) {
        const rel = part.external ? ' target="_blank" rel="noreferrer"' : ''
        return `<a href="${escapeAttr(part.href)}"${rel}>${escapeHtml(part.link)}</a>`
      }
      return escapeHtml(part.text)
    })
    .join('')
}

/** @param {EditorialBlock} block */
export function blockToHtml(block) {
  switch (block.type) {
    case 'h2':
      return `<h2>${escapeHtml(block.text)}</h2>`
    case 'h3':
      return `<h3>${escapeHtml(block.text)}</h3>`
    case 'quote':
      return `<blockquote><p>${escapeHtml(block.text)}</p></blockquote>`
    case 'externalLink':
      return `<p><a href="${escapeAttr(block.href)}" target="_blank" rel="noreferrer">${escapeHtml(block.label)}</a></p>`
    case 'internalLink':
      return `<p><a href="${escapeAttr(block.to)}">${escapeHtml(block.label)}</a></p>`
    case 'table': {
      const head = `<thead><tr>${(block.headers ?? [])
        .map((h) => `<th>${escapeHtml(h)}</th>`)
        .join('')}</tr></thead>`
      const body = `<tbody>${(block.rows ?? [])
        .map(
          (row) =>
            `<tr>${row
              .map((cell) => `<td>${Array.isArray(cell) ? partsToHtml(cell) : escapeHtml(cell)}</td>`)
              .join('')}</tr>`,
        )
        .join('')}</tbody>`
      const caption = block.caption ? `<caption>${escapeHtml(block.caption)}</caption>` : ''
      return `<table>${caption}${head}${body}</table>`
    }
    case 'figure': {
      const loading = block.eager ? 'eager' : 'lazy'
      const img = block.src
        ? `<img src="${escapeAttr(block.src)}" alt="${escapeAttr(block.alt ?? '')}" loading="${loading}" />`
        : ''
      const captionInner = block.captionParts?.length
        ? partsToHtml(block.captionParts)
        : block.caption
          ? escapeHtml(block.caption)
          : ''
      const credit = block.credit ? `<span>${escapeHtml(block.credit)}</span>` : ''
      const figcaption =
        captionInner || credit
          ? `<figcaption>${captionInner}${captionInner && credit ? ' ' : ''}${credit}</figcaption>`
          : ''
      return `<figure>${img}${figcaption}</figure>`
    }
    case 'p':
    default:
      if (block.parts?.length) return `<p>${partsToHtml(block.parts)}</p>`
      return `<p>${escapeHtml(block.text)}</p>`
  }
}

/**
 * @param {object} article
 * @param {string} article.title
 * @param {string} [article.subtitle]
 * @param {string} [article.label]
 * @param {{ src?: string, alt?: string, caption?: string, credit?: string }} [article.figure]
 * @param {EditorialBlock[]} article.blocks
 * @param {{ label: string, href: string }[]} [article.related]
 */
export function articleToSummaryHtml(article) {
  const figure = article.figure
    ? `<figure>${
        article.figure.src
          ? `<img src="${escapeAttr(article.figure.src)}" alt="${escapeAttr(article.figure.alt ?? article.title)}" />`
          : ''
      }${
        article.figure.caption || article.figure.credit
          ? `<figcaption>${escapeHtml(article.figure.caption ?? '')}${
              article.figure.caption && article.figure.credit ? ' ' : ''
            }${escapeHtml(article.figure.credit ?? '')}</figcaption>`
          : article.figure.alt
            ? `<figcaption>${escapeHtml(article.figure.alt)}</figcaption>`
            : ''
      }</figure>`
    : ''

  const header = `
    <header>
      ${article.label ? `<p>${escapeHtml(article.label)}</p>` : ''}
      <h1>${escapeHtml(article.title)}</h1>
      ${article.subtitle ? `<p>${escapeHtml(article.subtitle)}</p>` : ''}
    </header>
  `

  const body = `<section>${article.blocks.map(blockToHtml).join('\n')}</section>`

  const related = article.related?.length
    ? `<section><h2>Related</h2>${article.related
        .map((item) => `<p><a href="${escapeAttr(item.href)}">${escapeHtml(item.label)}</a></p>`)
        .join('\n')}</section>`
    : ''

  return `<article>${figure}${header}${body}${related}</article>`
}
