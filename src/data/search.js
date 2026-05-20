import { featuredCities } from './cities'
import { exhibitions } from './exhibitions'
import { institutionsBySlug } from './institutions'

function clip(s, max = 160) {
  if (!s || s.length <= max) return s
  return `${s.slice(0, max).trim()}…`
}

function joinHaystack(parts) {
  return parts
    .flat()
    .filter(Boolean)
    .join(' ')
    .toLowerCase()
}

function buildItems() {
  const items = []

  for (const city of featuredCities) {
    items.push({
      id: `city-${city.slug}`,
      kind: 'city',
      typeLabel: 'City',
      title: city.name,
      excerpt: clip(city.blurb || city.intro),
      city: null,
      district: city.district,
      venue: null,
      href: `/cities/${city.slug}`,
      haystack: joinHaystack([
        city.name,
        city.slug,
        city.district,
        city.blurb,
        city.address,
        city.intro,
        city.whyItMatters,
      ]),
    })
  }

  for (const inst of Object.values(institutionsBySlug)) {
    items.push({
      id: `institution-${inst.slug}`,
      kind: 'institution',
      typeLabel: 'Institution',
      title: inst.name,
      excerpt: clip(inst.review),
      city: inst.city,
      district: null,
      venue: null,
      href: `/spaces/${inst.slug}`,
      haystack: joinHaystack([
        inst.name,
        inst.slug,
        inst.type,
        inst.city,
        inst.ratingLabel,
        inst.pulse,
        inst.review,
        inst.address,
        inst.hours,
        inst.entryFee,
        inst.accessibility,
        inst.amenities,
        inst.exhibitions?.map((e) => [e.title, e.artists, e.endsOn]),
      ]),
    })
  }

  for (const ex of exhibitions) {
    items.push({
      id: `exhibition-${ex.slug}`,
      kind: 'exhibition',
      typeLabel: 'Exhibition',
      title: ex.title,
      excerpt: clip(ex.description),
      city: ex.city,
      district: null,
      venue: ex.venue,
      href: `/exhibitions/${ex.slug}`,
      haystack: joinHaystack([
        ex.title,
        ex.slug,
        ex.venue,
        ex.city,
        ex.address,
        ex.description,
        ex.yuranjaNote,
        ex.openingHours,
        ex.artists,
        ex.curators,
        ex.tags,
      ]),
    })
  }

  return items
}

let cache
function allItems() {
  if (!cache) cache = buildItems()
  return cache
}

/** @param {string} rawQuery */
export function searchCatalog(rawQuery) {
  const q = rawQuery.trim().toLowerCase()
  if (!q) return []

  const tokens = q.split(/\s+/).filter(Boolean)
  return allItems().filter((item) => tokens.every((token) => item.haystack.includes(token)))
}

/** @param {ReturnType<typeof searchCatalog>} results */
export function groupResultsByKind(results) {
  return {
    cities: results.filter((r) => r.kind === 'city'),
    institutions: results.filter((r) => r.kind === 'institution'),
    exhibitions: results.filter((r) => r.kind === 'exhibition'),
  }
}
