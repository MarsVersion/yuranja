/**
 * Single catalog for machine visibility: metadata, JSON-LD, feeds, and crawlable summaries.
 * Sourced from the same editorial data modules as the React UI.
 */
import { SITE_DESCRIPTION, SITE_NAME, SITE_NAME_LONG, SITE_ORIGIN, SITE_TAGLINE, absoluteUrl } from '../config/site'
import { featuredCities } from '../data/cities'
import {
  editorialJsonLd,
  editorialSummaryHtml,
  getEditorialDocuments,
} from '../data/editorial/documents.js'
import { exhibitions, formatExhibitionDates, formatList } from '../data/exhibitions'
import { institutionsBySlug } from '../data/institutions'

/** Lightweight non-magazine pages (no long-form editorial body in data modules). */
export const UTILITY_PAGES = [
  {
    path: '/contact',
    title: 'Contact',
    description: 'Contact YRJ / Yuranja.',
    type: 'ContactPage',
  },
  {
    path: '/privacy',
    title: 'Privacy',
    description: 'Privacy policy for YRJ / Yuranja.',
    type: 'WebPage',
  },
  {
    path: '/terms',
    title: 'Terms',
    description: 'Terms of use for YRJ / Yuranja.',
    type: 'WebPage',
  },
]

function truncate(text, max = 160) {
  const clean = String(text || '')
    .replace(/\s+/g, ' ')
    .trim()
  if (clean.length <= max) return clean
  return `${clean.slice(0, max - 1).trimEnd()}…`
}

function pageTitle(segment) {
  return `${segment} | ${SITE_NAME}`
}

/** @param {import('../data/exhibitions.js').ExhibitionRecord} exhibition */
export function exhibitionMeta(exhibition) {
  const artists = formatList(exhibition.artists)
  const titleCore = artists
    ? `${exhibition.title} — ${exhibition.venue}, ${exhibition.city}`
    : `${exhibition.title} — ${exhibition.venue}`
  const description = truncate(
    exhibition.yuranjaNote || exhibition.description || `${exhibition.title} at ${exhibition.venue}.`,
  )
  return {
    path: `/exhibitions/${exhibition.slug}`,
    title: pageTitle(titleCore),
    description,
    type: 'ExhibitionEvent',
    exhibition,
  }
}

/** @param {import('../data/exhibitions.js').ExhibitionRecord} exhibition */
export function exhibitionJsonLd(exhibition) {
  const url = absoluteUrl(`/exhibitions/${exhibition.slug}`)
  /** @type {Record<string, unknown>} */
  const data = {
    '@context': 'https://schema.org',
    '@type': 'ExhibitionEvent',
    name: exhibition.title,
    url,
    description: exhibition.yuranjaNote || exhibition.description,
    startDate: exhibition.dates?.start,
    endDate: exhibition.dates?.end,
    eventStatus: 'https://schema.org/EventScheduled',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    location: {
      '@type': 'Place',
      name: exhibition.venue,
      address: exhibition.address,
    },
  }
  if (exhibition.artists?.length) {
    data.performer = exhibition.artists.map((name) => ({ '@type': 'Person', name }))
  }
  if (exhibition.curators?.length) {
    data.organizer = exhibition.curators.map((name) => ({ '@type': 'Person', name }))
  }
  if (exhibition.website) {
    data.sameAs = exhibition.website
  }
  return data
}

/** @param {typeof featuredCities[number]} city */
export function cityMeta(city) {
  return {
    path: `/cities/${city.slug}`,
    title: pageTitle(`${city.name} — City guide`),
    description: truncate(city.blurb || city.intro),
    type: 'City',
    city,
  }
}

/** Institution pages — exclude Neue Nationalgalerie (editorial article owns that URL). */
export function listableInstitutions() {
  return Object.values(institutionsBySlug).filter((i) => i.slug !== 'neue-nationalgalerie')
}

/** @param {ReturnType<typeof listableInstitutions>[number]} institution */
export function institutionMeta(institution) {
  return {
    path: `/spaces/${institution.slug}`,
    title: pageTitle(`${institution.name} — ${institution.city}`),
    description: truncate(institution.review),
    type: 'Museum',
    institution,
  }
}

/** @param {ReturnType<typeof listableInstitutions>[number]} institution */
export function institutionJsonLd(institution) {
  return {
    '@context': 'https://schema.org',
    '@type': institution.type === 'Museum' ? 'Museum' : 'LocalBusiness',
    name: institution.name,
    url: absoluteUrl(`/spaces/${institution.slug}`),
    description: institution.review,
    address: institution.address,
    ...(institution.website ? { sameAs: institution.website } : {}),
  }
}

export function websiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME_LONG,
    alternateName: SITE_NAME,
    url: SITE_ORIGIN,
    description: SITE_DESCRIPTION,
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME_LONG,
      url: SITE_ORIGIN,
    },
  }
}

/** All indexable public pages with metadata. */
export function getVisibilityPages() {
  /** @type {Array<Record<string, unknown>>} */
  const pages = [
    {
      path: '/',
      title: `${SITE_NAME_LONG} — ${SITE_TAGLINE}`,
      description: SITE_DESCRIPTION,
      type: 'WebSite',
      jsonLd: websiteJsonLd(),
      summaryHtml: `
        <h1>${SITE_NAME_LONG}</h1>
        <p>${SITE_DESCRIPTION}</p>
        <p>Selective guide to exhibitions, cities, art spaces, people, and editorial stories.</p>
        <ul>
          <li>
            <a href="/journal/whose-home-is-it">Whose Home Is It?</a>
            — Frieze Seoul 2026
          </li>
          <li>
            <a href="/spaces/neue-nationalgalerie">Maurizio Cattelan Receives the Preis der Nationalgalerie 2026</a>
            — Why go
          </li>
          <li>
            <a href="/journal/soyoung-yoon-independent-study-program">Soyoung Yoon appointed Director of the Independent Study Program</a>
            — News
          </li>
          <li>
            <a href="/journal/aes-f-digital-safari">AES+F: Digital Safari — Fables of the Jungle</a>
            — Worth seeing
          </li>
          <li><a href="/exhibitions">Exhibitions</a></li>
          <li><a href="/cities">Cities</a></li>
          <li><a href="/people">People</a></li>
          <li><a href="/about">About</a></li>
        </ul>
      `,
    },
    {
      path: '/exhibitions',
      title: pageTitle('Exhibitions'),
      description: 'Current and forthcoming exhibitions selected by YRJ editors.',
      type: 'CollectionPage',
      summaryHtml: `
        <h1>Exhibitions</h1>
        <p>Current and forthcoming exhibitions selected by YRJ editors.</p>
        <ul>
          ${exhibitions
            .map(
              (e) =>
                `<li><a href="/exhibitions/${e.slug}">${escapeHtml(e.title)}</a> — ${escapeHtml(e.venue)}, ${escapeHtml(e.city)}</li>`,
            )
            .join('\n')}
        </ul>
      `,
    },
    {
      path: '/cities',
      title: pageTitle('Cities'),
      description: 'City guides to museums, galleries, and project spaces worth seeking out.',
      type: 'CollectionPage',
      summaryHtml: `
        <h1>Cities</h1>
        <p>City guides to museums, galleries, and project spaces worth seeking out.</p>
        <ul>
          ${featuredCities
            .map((c) => `<li><a href="/cities/${c.slug}">${escapeHtml(c.name)}</a> — ${escapeHtml(c.blurb)}</li>`)
            .join('\n')}
        </ul>
      `,
    },
  ]

  for (const exhibition of exhibitions) {
    const meta = exhibitionMeta(exhibition)
    const artists = formatList(exhibition.artists)
    const curators = formatList(exhibition.curators)
    const dates = formatExhibitionDates(exhibition.dates)
    pages.push({
      ...meta,
      jsonLd: exhibitionJsonLd(exhibition),
      summaryHtml: `
        <article>
          <h1>${escapeHtml(exhibition.title)}</h1>
          ${artists ? `<p><strong>Artists:</strong> ${escapeHtml(artists)}</p>` : ''}
          ${curators ? `<p><strong>Curators:</strong> ${escapeHtml(curators)}</p>` : ''}
          <p><strong>Institution:</strong> ${escapeHtml(exhibition.venue)}</p>
          <p><strong>City:</strong> ${escapeHtml(exhibition.city)}</p>
          ${dates ? `<p><strong>Dates:</strong> ${escapeHtml(dates)}</p>` : ''}
          <p>${escapeHtml(exhibition.description)}</p>
          ${
            exhibition.yuranjaNote
              ? `<p><strong>YRJ note:</strong> ${escapeHtml(exhibition.yuranjaNote)}</p>`
              : ''
          }
          ${
            exhibition.website
              ? `<p><a href="${escapeAttr(exhibition.website)}">Official exhibition page</a></p>`
              : ''
          }
          <p><a href="/exhibitions">All exhibitions</a></p>
        </article>
      `,
    })
  }

  for (const city of featuredCities) {
    const meta = cityMeta(city)
    pages.push({
      ...meta,
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'TouristDestination',
        name: city.name,
        url: absoluteUrl(meta.path),
        description: city.intro || city.blurb,
      },
      summaryHtml: `
        <article>
          <h1>${escapeHtml(city.name)}</h1>
          <p>${escapeHtml(city.district)}</p>
          <p>${escapeHtml(city.intro)}</p>
          <p>${escapeHtml(city.whyItMatters)}</p>
          <p><a href="/cities">All cities</a></p>
        </article>
      `,
    })
  }

  for (const institution of listableInstitutions()) {
    const meta = institutionMeta(institution)
    pages.push({
      ...meta,
      jsonLd: institutionJsonLd(institution),
      summaryHtml: `
        <article>
          <h1>${escapeHtml(institution.name)}</h1>
          <p>${escapeHtml(institution.type)} · ${escapeHtml(institution.city)}</p>
          <p>${escapeHtml(institution.review)}</p>
          <p><strong>Address:</strong> ${escapeHtml(institution.address)}</p>
          ${
            institution.website
              ? `<p><a href="${escapeAttr(institution.website)}">Official website</a></p>`
              : ''
          }
        </article>
      `,
    })
  }

  for (const doc of getEditorialDocuments()) {
    const headline = doc.subtitle ? `${doc.title} — ${doc.subtitle}` : doc.title
    pages.push({
      path: doc.path,
      title: pageTitle(headline),
      description: doc.description,
      type: doc.schemaType,
      socialImage: doc.socialImage || doc.figure?.src || null,
      jsonLd: editorialJsonLd(doc),
      summaryHtml: editorialSummaryHtml(doc),
    })
  }

  for (const utility of UTILITY_PAGES) {
    pages.push({
      ...utility,
      title: pageTitle(utility.title),
      summaryHtml: `
        <article>
          <h1>${escapeHtml(utility.title)}</h1>
          <p>${escapeHtml(utility.description)}</p>
        </article>
      `,
    })
  }

  return pages
}

/** @param {string} pathname */
export function getPageMetaByPath(pathname) {
  const path = pathname.replace(/\/$/, '') || '/'
  const pages = getVisibilityPages()
  return pages.find((p) => p.path === path) ?? null
}

export function getExhibitionsFeed() {
  return exhibitions.map((exhibition) => ({
    title: exhibition.title,
    artists: exhibition.artists ?? [],
    institution: exhibition.venue,
    city: exhibition.city,
    startDate: exhibition.dates?.start ?? null,
    endDate: exhibition.dates?.end ?? null,
    curators: exhibition.curators ?? [],
    url: absoluteUrl(`/exhibitions/${exhibition.slug}`),
    yrjEditorialText: exhibition.yuranjaNote ?? null,
    description: exhibition.description,
    sourceUrl: exhibition.website ?? null,
    address: exhibition.address ?? null,
  }))
}

export function getSpacesFeed() {
  return listableInstitutions().map((institution) => ({
    name: institution.name,
    slug: institution.slug,
    type: institution.type,
    city: institution.city,
    url: absoluteUrl(`/spaces/${institution.slug}`),
    yrjEditorialText: institution.review,
    address: institution.address,
    sourceUrl: institution.website ?? null,
  }))
}

export function getCitiesFeed() {
  return featuredCities.map((city) => ({
    name: city.name,
    slug: city.slug,
    district: city.district,
    url: absoluteUrl(`/cities/${city.slug}`),
    blurb: city.blurb,
    intro: city.intro,
    whyItMatters: city.whyItMatters,
  }))
}

export function escapeHtml(value) {
  return String(value ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
}

export function escapeAttr(value) {
  return escapeHtml(value).replaceAll("'", '&#39;')
}
