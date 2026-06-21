import {
  aesfYuranja,
  artMuseumSeoul,
  cattelanExhibition,
  edVanDerElsken,
  guggenheimMuseumNewYork,
  museoSoumayaMexicoCity,
  nationalArtCenterTokyo,
  neueNationalgalerieBerlin,
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
    slug: 'seoul',
    name: 'Seoul',
    district: 'Samcheong & Gangnam',
    blurb: 'Private collections and fast-moving gallery weekends.',
    intro:
      'Seoul moves at the pace of its seasons: hillside museums, discreet foundations, and gallery weekends that fill calendars months ahead. The best visits balance architecture, ink tradition, and what is being painted this year.',
    whyItMatters:
      'South Korea’s institutions borrow from global contemporary while insisting on local lineages. For the traveler, that means depth without nostalgia — and a density of serious rooms that justifies a dedicated trip.',
    image: artMuseumSeoul,
    imageCreditTitle: 'Art Museum Seoul',
    imageCreditPhoto: 'Photo by Andrea De Santis on Unsplash',
    address: 'Guide focus · Samcheong-dong',
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
    slug: 'tokyo',
    name: 'Tokyo',
    district: 'Roppongi & Omotesando',
    blurb: 'Architect-led museums and intimate project spaces.',
    intro:
      'Tokyo rewards patience: buildings that read as sculpture, exhibitions installed with forensic care, and neighborhoods where a wrong turn still lands you in front of something thoughtful.',
    whyItMatters:
      'Japanese institutions often lead with architecture and material craft before the wall text speaks. For visitors, that discipline produces some of the clearest viewing conditions in the world.',
    image: nationalArtCenterTokyo,
    imageCreditTitle: 'National Art Center Tokyo',
    imageCreditPhoto: 'Photo by whymahn yap from Pexels',
    address: 'Guide focus · Roppongi Art Triangle',
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
    slug: 'mexico-city',
    name: 'Mexico City',
    district: 'Polanco & Roma',
    blurb: 'Museums, foundations, and courtyard galleries with long seasons.',
    intro:
      'Mexico City stretches exhibitions across seasons that feel human: courtyards, high altitude light, and foundations that treat locality as method rather than decoration.',
    whyItMatters:
      'The dialogue between Mesoamerican depth and international contemporary is written into the architecture here. For readers who want warmth without noise, the capital rewards slow return visits.',
    image: museoSoumayaMexicoCity,
    imageCreditTitle: 'Museo Soumaya Mexico City',
    imageCreditPhoto: 'Photo by Dante Muñoz from Pexels',
    address: 'Guide focus · Polanco',
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
  'seoul',
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
