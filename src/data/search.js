import { featuredCities } from './cities'
import { institutionsBySlug } from './institutions'

function clip(s, max = 130) {
  if (!s || s.length <= max) return s
  return `${s.slice(0, max).trim()}…`
}

function buildItems() {
  const items = []

  for (const city of featuredCities) {
    items.push({
      id: `city-${city.slug}`,
      kind: 'city',
      title: city.name,
      deck: city.intro,
      city: city.name,
      district: city.district,
      rating: null,
      pulse: null,
      ratingLabel: null,
      endsOn: null,
      artists: null,
      institutionName: null,
      href: `/cities/${city.slug}`,
      haystack: `${city.name} ${city.slug} ${city.district} ${city.blurb} ${city.address} ${city.intro} ${city.whyItMatters}`.toLowerCase(),
    })
  }

  for (const inst of Object.values(institutionsBySlug)) {
    items.push({
      id: `space-${inst.slug}`,
      kind: 'space',
      title: inst.name,
      deck: clip(inst.review),
      city: inst.city,
      district: null,
      rating: inst.rating,
      pulse: inst.pulse,
      ratingLabel: inst.ratingLabel,
      endsOn: null,
      artists: null,
      institutionName: null,
      href: `/spaces/${inst.slug}`,
      haystack:
        `${inst.name} ${inst.slug} ${inst.city} ${inst.type} ${inst.review} ${inst.exhibitions.map((e) => `${e.title} ${e.artists}`).join(' ')}`.toLowerCase(),
    })
    for (const ex of inst.exhibitions) {
      items.push({
        id: `exhibition-${inst.slug}-${ex.title}`,
        kind: 'exhibition',
        title: ex.title,
        deck: ex.artists,
        city: inst.city,
        district: null,
        rating: inst.rating,
        pulse: inst.pulse,
        ratingLabel: inst.ratingLabel,
        endsOn: ex.endsOn,
        artists: ex.artists,
        institutionName: inst.name,
        href: `/spaces/${inst.slug}`,
        haystack: `${ex.title} ${ex.artists} ${inst.name} ${inst.city}`.toLowerCase(),
      })
    }
  }

  return items
}

let cache
function allItems() {
  if (!cache) cache = buildItems()
  return cache
}

export function searchCatalog(rawQuery) {
  const q = rawQuery.trim().toLowerCase()
  if (!q) return []

  const tokens = q.split(/\s+/).filter(Boolean)
  return allItems().filter((item) => tokens.every((t) => item.haystack.includes(t)))
}

export function groupResultsByKind(results) {
  return {
    cities: results.filter((r) => r.kind === 'city'),
    spaces: results.filter((r) => r.kind === 'space'),
    exhibitions: results.filter((r) => r.kind === 'exhibition'),
  }
}
