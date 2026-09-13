/**
 * Hello 90 — editorial document.
 * Body prose is loaded from content/journal/hello-90.md (single source of truth).
 * Do not rewrite that file’s copy here.
 */

import hello90Markdown from '../../../content/journal/hello-90.md?raw'

export const HELLO_90_PATH = '/journal/hello-90'

export const HELLO_90_IMAGE_0 =
  '/images/journal/01-Hello90%200%20deg.jpg'
export const HELLO_90_IMAGE_90 =
  '/images/journal/02-Hello90%2090%20deg.jpg'

/**
 * Convert the Markdown body into editorial paragraph blocks.
 * Skips the H1 and the standalone subtitle line; preserves paragraph text exactly.
 * @param {string} markdown
 * @returns {import('./blocks.js').EditorialBlock[]}
 */
export function hello90BodyBlocksFromMarkdown(markdown) {
  const lines = String(markdown).replace(/\r\n/g, '\n').split('\n')
  /** @type {string[]} */
  const bodyLines = []
  let skippedTitle = false
  let skippedSubtitle = false

  for (const line of lines) {
    const trimmed = line.trim()
    if (!skippedTitle && trimmed.startsWith('#')) {
      skippedTitle = true
      continue
    }
    if (skippedTitle && !skippedSubtitle && trimmed === 'Interactive video installation') {
      skippedSubtitle = true
      continue
    }
    bodyLines.push(line)
  }

  return bodyLines
    .join('\n')
    .split(/\n\s*\n/)
    .map((chunk) => chunk.replace(/^\n+|\n+$/g, '').trimEnd())
    .filter((chunk) => chunk.trim().length > 0)
    .map((text) => ({ type: 'p', text }))
}

const hello90BodyBlocks = hello90BodyBlocksFromMarkdown(hello90Markdown)

/** @type {import('./blocks.js').EditorialBlock[]} */
const hello90Blocks = [
  {
    type: 'figure',
    src: HELLO_90_IMAGE_0,
    alt: 'Hojun Song, Hello 90, 2014 — Hello90 0 deg',
    fullWidth: true,
    captionParts: [
      { text: 'Hojun Song, ' },
      { em: 'Hello 90' },
      { text: ', 2014\nHello90 0 deg\n© Hojun Song' },
    ],
    eager: true,
  },
  {
    type: 'figure',
    src: HELLO_90_IMAGE_90,
    alt: 'Hojun Song, Hello 90, 2014 — Hello90 90 deg',
    fullWidth: true,
    captionParts: [
      { text: 'Hojun Song, ' },
      { em: 'Hello 90' },
      { text: ', 2014\nHello90 90 deg\n© Hojun Song' },
    ],
  },
  ...hello90BodyBlocks,
  {
    type: 'externalLink',
    href: 'https://hojunsong.com/',
    label: 'Artist website →',
  },
]

export const hello90Document = {
  id: 'hello-90',
  path: HELLO_90_PATH,
  label: 'Journal',
  title: 'Hojun Song, Hello 90',
  subtitle: 'Interactive video installation, 2014',
  description:
    'A ninety-degree bow can signal respect, discipline, obedience—or something more unsettling. Hojun Song’s Hello 90 takes a familiar collective gesture apart, one body at a time.',
  schemaType: 'Article',
  about: ['Hojun Song', 'Hello 90'],
  socialImage: HELLO_90_IMAGE_90,
  backLink: { to: '/', label: '← Back to home' },
  blocks: hello90Blocks,
}
