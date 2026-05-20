/**
 * @typedef {Object} ExhibitionRecord
 * @property {string} slug
 * @property {string} title
 * @property {string[]} artists
 * @property {string[]} [curators]
 * @property {string} venue
 * @property {string} city
 * @property {{ start: string, end: string }} dates
 * @property {string} address
 * @property {string} openingHours
 * @property {string} website
 * @property {string} description
 * @property {string} [yuranjaNote]
 * @property {string[]} tags
 */

/** @type {ExhibitionRecord[]} */
export const exhibitions = [
  {
    slug: 'hilma-af-klint-the-beyond',
    title: 'Hilma af Klint: The Beyond',
    artists: ['Hilma af Klint'],
    curators: ['Iris Müller-Westermann'],
    venue: 'Guggenheim Museum',
    city: 'New York',
    dates: {
      start: '2026-04-10',
      end: '2026-09-27',
    },
    address: '1071 Fifth Avenue, New York, NY',
    openingHours: 'Daily 10:30–17:30',
    website: 'https://www.guggenheim.org',
    description:
      "A major survey of Hilma af Klint's visionary paintings, highlighting her pioneering role in abstraction and spiritual art.",
    yuranjaNote:
      'A rare opportunity to experience one of the most influential artists of the twentieth century.',
    tags: ['solo show', 'painting', 'retrospective'],
  },
  {
    slug: 'night-rooms',
    title: 'Night Rooms',
    artists: ['Raven Chacon', 'Lawrence Abu Hamdan', 'Tiona Nekkia McClodden'],
    curators: ['Berlin Curatorial Collective'],
    venue: 'Multi-venue trail',
    city: 'Berlin',
    dates: {
      start: '2026-03-01',
      end: '2026-08-31',
    },
    address: 'Mitte & Kreuzberg — see venue map on the trail site',
    openingHours: 'Thu–Sat 18:00–23:00 (varies by venue)',
    website: '',
    description:
      'A citywide trail of intimate installations — sound, light, and sculpture in spaces not built as museums. The route is designed for a single evening on foot, with each stop readable in under twenty minutes.',
    yuranjaNote:
      'Start at dusk; the sequence matters. Pick up the printed map at the first venue — the digital version does not include the basement room.',
    tags: ['group show', 'installation', 'video', 'media art'],
  },
  {
    slug: 'han-river-studies',
    title: 'Han River Studies',
    artists: ['Park Seo-Bo', 'Lee Bul', 'Minjung Kim'],
    curators: ['Kim Sung-won'],
    venue: 'Leeum Museum of Art',
    city: 'Seoul',
    dates: {
      start: '2026-05-15',
      end: '2026-11-02',
    },
    address: '60-16 Itaewon-ro 55-gil, Yongsan-gu, Seoul',
    openingHours: 'Mon, Wed–Sun 10:00–18:00 (last entry 17:30)',
    website: 'https://www.leeumhoam.org',
    description:
      'Three generations read the river as material and metaphor — ink, steel, and light moving between tradition and the present. The hang is spare; give yourself time in the upper galleries where the city falls away.',
    yuranjaNote:
      'Pair with a slow walk through Samcheong-dong before opening hour — the museum rewards arrival, not rush.',
    tags: ['group show', 'painting', 'sculpture', 'installation'],
  },
  {
    slug: 'nocturnes-sound-and-shadow',
    title: 'Nocturnes: Sound and Shadow',
    artists: ['Tiona Nekkia McClodden', 'Raven Chacon', 'Lawrence Abu Hamdan'],
    curators: ['Adrienne Edwards'],
    venue: 'Whitney Museum of American Art',
    city: 'New York',
    dates: {
      start: '2026-06-01',
      end: '2027-01-12',
    },
    address: '99 Gansevoort St, New York, NY 10014',
    openingHours: 'Mon, Wed 10:30–18:00 · Fri 10:30–22:00 · Sat–Sun 10:30–18:00',
    website: 'https://whitney.org',
    description:
      'Sound and image treated as equal weights — works that ask you to stand still long enough for the room to change. The Whitney’s temporary galleries have rarely felt this quiet or this insistent.',
    yuranjaNote:
      'Friday evenings are worth the crowd; the river light through the west windows lands after 19:00 in winter.',
    tags: ['group show', 'video', 'media art', 'installation'],
  },
  {
    slug: 'preis-der-nationalgalerie-2026',
    title: 'Preis der Nationalgalerie 2026',
    artists: ['Maurizio Cattelan'],
    curators: ['Klaus Biesenbach'],
    venue: 'Neue Nationalgalerie',
    city: 'Berlin',
    dates: {
      start: '2026-02-14',
      end: '2026-09-14',
    },
    address: 'Potsdamer Str. 50, 10785 Berlin',
    openingHours: 'Tue–Wed 10:00–18:00 · Thu 10:00–20:00 · Fri–Sun 10:00–18:00',
    website:
      'https://www.smb.museum/en/museums-institutions/neue-nationalgalerie/home.html',
    description:
      'Cattelan’s proposal for the prize year is characteristically precise and provocatively plain — a single gesture that reframes the glass pavilion as stage rather than container. Expect lines on weekends; weekdays before noon are calmest.',
    tags: ['solo show', 'sculpture', 'installation'],
  },
  {
    slug: 'up-close-ed-van-der-elsken',
    title: 'Up Close: Ed van der Elsken',
    artists: ['Ed van der Elsken'],
    curators: ['Mattie Boom', 'Hripsimé Visser'],
    venue: 'Rijksmuseum',
    city: 'Amsterdam',
    dates: {
      start: '2026-01-20',
      end: '2026-05-18',
    },
    address: 'Museumstraat 1, 1071 XX Amsterdam',
    openingHours: 'Daily 09:00–17:00',
    website: 'https://www.rijksmuseum.nl',
    description:
      'Street photography with the heat still on it — Amsterdam, Paris, and Tokyo as van der Elsken lived them, not as nostalgia. The edit is tight; the prints are worth standing close to.',
    yuranjaNote:
      'The side gallery with contact sheets is easy to miss — turn left after the main hall.',
    tags: ['solo show', 'photography', 'retrospective'],
  },
]

/** @param {string | undefined} slug */
export function getExhibitionBySlug(slug) {
  if (!slug) return null
  return exhibitions.find((e) => e.slug === slug) ?? null
}

/** @param {{ start?: string, end?: string }} dates @param {'long' | 'short'} [style] */
export function formatExhibitionDates(dates, style = 'long') {
  if (!dates?.start && !dates?.end) return ''

  const opts =
    style === 'short'
      ? { month: 'short', day: 'numeric', year: 'numeric' }
      : { month: 'long', day: 'numeric', year: 'numeric' }

  const fmt = new Intl.DateTimeFormat('en-US', opts)

  if (dates.start && dates.end) {
    const startYear = dates.start.slice(0, 4)
    const endYear = dates.end.slice(0, 4)
    const startStr = fmt.format(new Date(`${dates.start}T12:00:00`))
    const endStr = fmt.format(new Date(`${dates.end}T12:00:00`))
    if (startYear === endYear && style === 'short') {
      const endNoYear = new Intl.DateTimeFormat('en-US', {
        month: 'short',
        day: 'numeric',
      }).format(new Date(`${dates.end}T12:00:00`))
      return `${startStr} — ${endNoYear}, ${endYear}`
    }
    return `${startStr} — ${endStr}`
  }

  if (dates.end) {
    return `Through ${fmt.format(new Date(`${dates.end}T12:00:00`))}`
  }

  return fmt.format(new Date(`${dates.start}T12:00:00`))
}

/** @param {string[] | undefined} items */
export function formatList(items) {
  if (!items?.length) return ''
  return items.join(', ')
}
