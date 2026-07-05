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
    slug: 'carol-bove',
    title: 'Carol Bove',
    artists: ['Carol Bove'],
    curators: ['Katherine Brinson'],
    venue: 'Guggenheim Museum',
    city: 'New York',
    dates: {
      start: '2026-03-05',
      end: '2026-08-02',
    },
    address: '1071 Fifth Avenue, New York, NY 10128',
    openingHours: 'Daily 10:30–17:30',
    website: 'https://www.guggenheim.org/exhibition/carol-bove',
    description:
      'The first museum survey of Carol Bove brings together more than twenty-five years of work, from early assemblages and paper collages to monumental painted steel sculptures that transform Frank Lloyd Wright’s iconic rotunda.',
    yuranjaNote:
      'One of the year’s essential sculpture exhibitions, revealing how material, architecture, and perception continuously reshape one another.',
    tags: ['solo show', 'sculpture', 'museum survey'],
  },
  {
    slug: 'myths-and-monsters-the-art-of-fantasy-in-asia',
    title: 'Myths and Monsters: The Art of Fantasy in Asia',
    artists: ['Group Exhibition'],
    curators: [],
    venue: 'M+',
    city: 'Hong Kong',
    dates: {
      start: '2026-10-17',
      end: '2027-04-04',
    },
    address: 'West Kowloon Cultural District, 38 Museum Drive, Kowloon, Hong Kong',
    openingHours: 'Tue–Thu, Sat–Sun 10:00–18:00; Fri 10:00–22:00; Closed Mon',
    website: 'https://www.mplus.org.hk/en/exhibitions/myths-and-monsters-the-art-of-fantasy-in-asia/',
    description:
      'Spanning the nineteenth to the twenty-first centuries, this ambitious exhibition explores fantasy as a driving force in Asian visual culture. Through historical traditions, Surrealism, manga, anime, contemporary art, design, fashion, architecture, and digital media, it reveals how artists have used imagined worlds to respond to shifting social and political realities.',
    yuranjaNote:
      'One of the most anticipated exhibitions of the year, bringing together Asian visual traditions, contemporary art, manga, anime, and digital culture in a compelling cross-cultural narrative.',
    tags: [
      'group exhibition',
      'Asian contemporary art',
      'manga',
      'anime',
      'fantasy',
      'visual culture',
    ],
  },
  {
    slug: 'time-to-play-films-by-jacques-rozier',
    title: 'Time to Play: Films by Jacques Rozier',
    artists: ['Jacques Rozier'],
    curators: [],
    venue: 'Institute of Contemporary Arts (ICA)',
    city: 'London',
    dates: {
      start: '2026-07-01',
      end: '2026-07-30',
    },
    address: 'The Mall, London SW1Y 5AH, United Kingdom',
    openingHours: 'Screening times vary by programme',
    website: 'https://www.ica.art/films/rozier',
    description:
      'A month-long retrospective celebrating one of the French New Wave’s most original filmmakers. Spanning five feature films and a programme of shorts, the season explores Jacques Rozier’s playful, improvisational cinema, where chance encounters, youthful freedom, and the passing of time unfold with remarkable sensitivity.',
    yuranjaNote:
      'A rare opportunity to rediscover an underappreciated master of French cinema through beautifully restored films that remain strikingly fresh and influential.',
    tags: [
      'film',
      'retrospective',
      'French New Wave',
      'cinema',
      'Jacques Rozier',
    ],
  },
  {
    slug: 'will-you-be-profitable-my-friend',
    title: 'Will You Be Profitable, My Friend?',
    artists: ['Collection Exhibition'],
    curators: ['Matilda Olof-Ors'],
    venue: 'Moderna Museet',
    city: 'Stockholm',
    dates: {
      start: '2026-06-13',
      end: '2027-09-19',
    },
    address: 'Exercisplan 4, Skeppsholmen, 111 49 Stockholm, Sweden',
    openingHours: 'Tue & Fri 10:00–20:00; Wed–Thu, Sat–Sun 10:00–18:00; Closed Mon',
    website: 'https://www.modernamuseet.se/en/stockholm/exhibitions/swedish-post-war-period-in-the-moderna-museet-collection/',
    description:
      'Featuring around ninety works from the Moderna Museet Collection, this exhibition traces Swedish art from 1945 to 1979. From postwar abstraction and expressive painting to politically engaged installations, it explores four transformative decades shaped by the welfare state, the Cold War, and rapid social change.',
    yuranjaNote:
      'An outstanding introduction to post-war Swedish art, bringing together iconic works that reveal how artists responded to optimism, anxiety, and profound cultural transformation.',
    tags: [
      'collection exhibition',
      'post-war art',
      'Swedish art',
      'modern art',
      'painting',
      'installation',
    ],
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
    slug: 'regift',
    title: 'Regift',
    artists: ['Group Exhibition'],
    curators: ['Alison Coplan', 'Stefanie Hessler', 'John Miller'],
    venue: 'Luma Westbau',
    city: 'Zurich',
    dates: {
      start: '2026-06-13',
      end: '2026-09-06',
    },
    address: 'Limmatstrasse 270, 8005 Zurich, Switzerland',
    openingHours: 'Tue–Sun 11:00–18:00 (check venue for holiday hours)',
    website: 'https://swissinstitute.net/exhibitions/regift-2',
    description:
      'Marking Swiss Institute’s 40th anniversary, Regift revisits the landmark 2009 exhibition through more than fifty artists whose works explore generosity, exchange, reciprocity, and value. Co-produced with Luma Foundation, the exhibition expands the original premise to consider gift-giving rituals across cultures, from personal celebrations to ancestral offerings and collective futures.',
    yuranjaNote:
      'An ambitious anniversary exhibition that rethinks the gift as both artwork and social practice, bringing together four decades of Swiss Institute’s international artistic network.',
    tags: [
      'group exhibition',
      'contemporary art',
      'anniversary',
      'installation',
      'conceptual art',
      'gift economy',
    ],
  },
]

/** @param {ExhibitionRecord} exhibition */
export function getExhibitionCategory(exhibition) {
  const tag = exhibition.tags?.[0]
  if (!tag) return 'Exhibition'
  return tag
}

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
