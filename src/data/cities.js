import {
  aesfYuranja,
  cattelanExhibition,
  edVanDerElsken,
  guggenheimMuseumNewYork,
  HK,
  museoSoumayaMexicoCity,
  nationalArtCenterTokyo,
  neueNationalgalerieBerlin,
  TaipeiImg,
  tateModernLondon,
} from '../assets/images.js'

/** Shared editorial imagery from the original layout (architecture / spaces). */
export const featuredCities = [
  {
    slug: 'berlin',
    name: 'Berlin',
    district: 'Museum Island & Mitte',
    blurb: 'Museums, project rooms, and night openings that reward wandering.',
    intro:
      'Berlin treats art as public grammar: long afternoons in stone institutions, then evenings in rooms that did not exist a year ago. The city rewards a loose itinerary and a willingness to walk between scales.',
    whyItMatters:
      'Here the canon and the provisional share the same afternoon. Museum Island anchors the map, while Mitte and Kreuzberg keep the conversation in motion — which is why Berlin remains a benchmark for how a capital can feel alive without shouting.',
    image: neueNationalgalerieBerlin,
    imageCreditTitle: 'Neue Nationalgalerie Berlin',
    imageCreditPhoto: 'Photo by Birk Enwald on Unsplash',
    address: 'Guide focus · Mitte & Kreuzberg',
  },
  {
    slug: 'hong-kong',
    name: 'Hong Kong',
    district: 'Quarry Bay & Wan Chai',
    blurb: 'Private collections and fast-moving gallery weekends.',
    intro:
      'Para Site is an artist-led contemporary art space presenting exhibitions, commissions, residencies, and professional development programs. It fosters emerging practices, connects regional and international artistic dialogues, and supports new ideas.',
    whyItMatters:
      'Hong Kong’s institutions borrow from global contemporary practice while insisting on local lineages. For the traveler, that means depth without nostalgia—and a density of serious art spaces that justifies a dedicated trip.',
    image: HK,
    imageCreditTitle: 'Para Site',
    imageCreditPhoto: 'Photo by Pavlo Hromadchuk on Unsplash',
    address:
      '22/F, Wing Wah Industrial Building, 677 King’s Road, Quarry Bay, Hong Kong',
  },
  {
    slug: 'venice',
    name: 'Venice',
    district: 'Giardini & Arsenale',
    blurb: 'Biennale seasons, palazzos, and churches turned exhibition rooms.',
    intro:
      'Venice asks you to move by foot and by vaporetto: national pavilions in the Giardini, project rooms in the Arsenale, and churches that become temporary galleries without losing their silence.',
    whyItMatters:
      'No city stages the argument between history and the present as visibly. When the Biennale is on, the whole lagoon becomes a single itinerary — but Venice rewards return visits in the quieter months too.',
    image: tateModernLondon,
    imageCreditTitle: 'Venice · Guide placeholder',
    imageCreditPhoto: 'Image forthcoming',
    address: 'Guide focus · Giardini & Dorsoduro',
  },
  {
    slug: 'new-york',
    name: 'New York',
    district: 'Chelsea & Uptown',
    blurb: 'Block-long gallery rows and museums that anchor any trip.',
    intro:
      'New York is still the city where a single block can hold a dozen serious galleries and a world museum sits a short ride away. The rhythm is vertical: uptown weight, downtown velocity, and the river as a compass.',
    whyItMatters:
      'No other American city concentrates curatorial ambition this tightly. If you care about how institutions and dealers shape taste in real time, New York remains unavoidable — not loud, simply dense.',
    image: guggenheimMuseumNewYork,
    imageCreditTitle: 'Guggenheim Museum New York',
    imageCreditPhoto: 'Photo by Ashley Penney on Unsplash',
    address: 'Guide focus · Chelsea galleries',
  },
  
  {
    slug: 'london',
    name: 'London',
    district: 'Mayfair & South Bank',
    blurb: 'National collections and dealer galleries within a short walk.',
    intro:
      'London stacks deep time against restless contemporary: national collections that define schoolbooks, then Mayfair rooms where a single wall can reset a conversation. Rain helps; so does a good coat.',
    whyItMatters:
      'The Thames corridor still sets the tempo for how European and Atlantic worlds trade images. You come for the weight of the public collections and stay for the dealers who quietly move the next generation.',
    image: tateModernLondon,
    imageCreditTitle: 'Tate Modern London',
    imageCreditPhoto: 'Photo by Leander from Pexels',
    address: 'Guide focus · Mayfair',
  },
  {
    slug: 'taipei',
    name: 'Taipei',
    district: 'Zhongshan District',
    blurb: 'Museum-led contemporary programming and independent spaces across the city.',
    intro:
      'Taipei Fine Arts Museum is one of Asia’s leading museums of contemporary art. Through exhibitions, commissions, research, and public programs, it has played a pivotal role in shaping Taiwan’s contemporary art discourse while fostering international exchange.',
    whyItMatters:
      'Taipei combines a vibrant contemporary art scene with a strong institutional commitment to experimentation. Its museums and independent spaces create a rich dialogue between local perspectives and international practices, making the city an essential destination for contemporary art.',
    image: TaipeiImg,
    imageCreditTitle: 'Taipei Fine Arts Museum',
    imageCreditPhoto: 'Photo by Suzi Kim on Unsplash',
    address:
      'No. 181, Section 3, Zhongshan North Road, Zhongshan District, Taipei 10461, Taiwan',
  },

]

/** @param {string | undefined} slug */
export function getCityBySlug(slug) {
  if (!slug) return null
  return featuredCities.find((c) => c.slug === slug) ?? null
}

/** Homepage — Cities of the Month (ordered) */
export const citiesOfTheMonth = [
  'berlin',
  'hong-kong',
  'venice',
  'new-york',
  'tokyo',
  'london',
  'mexico-city',
]
  .map((slug) => getCityBySlug(slug))
  .filter(Boolean)

export const topPicks = [
  {
    id: '1',
    title: 'Neue Nationalgalerie',
    subtitle: 'Preis der Nationalgalerie 2026: Maurizio Cattelan',
    rating: 2,
    pulse: 'Trending',
    image: cattelanExhibition,
    href: '/spaces/neue-nationalgalerie',
  },
  {
    id: '2',
    title: 'Auditorium Santa Margherita – Emanuele Severino',
    subtitle: 'AES+F: Digital Safari — Fables of the Jungle',
    rating: 3,
    pulse: 'Hot',
    image: aesfYuranja,
    href: '/spaces/leeum',
  },
  {
    id: '3',
    title: 'Rijksmuseum',
    subtitle: 'Up Close: Ed van der Elsken',
    rating: 2,
    pulse: 'Ending Soon',
    image: edVanDerElsken,
    href: '/spaces/whitney',
  },
]
