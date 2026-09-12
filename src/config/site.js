/** Canonical public origin for YRJ (Yuranja). */
export const SITE_ORIGIN = 'https://www.yuranja.com'

export const SITE_NAME = 'YRJ'
export const SITE_NAME_LONG = 'Yuranja'

export const SITE_TAGLINE = 'See what matters.'

export const SITE_DESCRIPTION =
  'Yuranja is an independent curated magazine and guide to exhibitions, art spaces, people, and ideas worth discovering.'

/** @param {string} path Absolute path beginning with / */
export function absoluteUrl(path = '/') {
  const normalized = path.startsWith('/') ? path : `/${path}`
  if (normalized === '/') return `${SITE_ORIGIN}/`
  return `${SITE_ORIGIN}${normalized.replace(/\/$/, '')}`
}
