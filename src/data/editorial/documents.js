/**
 * Canonical YRJ editorial documents — single source for React UI and crawler HTML.
 * Do not invent authors, dates, or images. Only fields known on the live pages.
 */

import { absoluteUrl } from '../../config/site.js'
import { articleToSummaryHtml, blockToHtml, escapeHtml } from './blocks.js'
import { hello90Document } from './hello90.js'
import { whoseHomeIsItDocument } from './whoseHomeIsIt.js'

/** @type {import('./blocks.js').EditorialBlock[]} */
const soyoungBlocks = [
  {
    type: 'p',
    text: 'Soyoung Yoon has been appointed Director of the Independent Study Program (ISP) at the Whitney Museum of American Art in New York.',
  },
  {
    type: 'p',
    text: 'An art historian, writer, and educator, Yoon previously served as Associate Professor of Art History and Visual Studies at Eugene Lang College and Director of the Fine Arts MFA Program at Parsons School of Design, The New School. She participated in the ISP as a fellow in 2006–07 and returned as faculty from 2012 to 2023.',
  },
  {
    type: 'p',
    text: 'Founded in 1968, the ISP has played a significant role in shaping generations of artists, curators, and critics through its emphasis on critical inquiry, collective study, and experimental practice. Yoon assumes leadership of the program following its year-long suspension in 2025.',
  },
  {
    type: 'p',
    text: 'Reflecting on her appointment, Yoon described the ISP as a place for those who question established methodologies and institutional structures, and expressed her commitment to supporting new forms of artistic and intellectual engagement.',
  },
  {
    type: 'p',
    text: 'Her appointment marks a new chapter for one of the most influential independent study programs in contemporary art.',
  },
]

/** @type {import('./blocks.js').EditorialBlock[]} */
const aesfBlocks = [
  {
    type: 'p',
    parts: [
      { text: "AES+F's " },
      { em: 'Digital Safari: Fables of the Jungle' },
      {
        text: ' unfolds as a sumptuous and unsettling fable set within a digitally fabricated rainforest. Six young performers appear as animal–human hybrids: Wolf, Tiger, Vulture, Black Jaguar, Pallas\'s Cat, and Hyena. Wearing elaborate masks and couture-like costumes, they inhabit a world suspended between ritual and spectacle, seduction and threat. Here, disguise does not conceal identity but amplifies it, transforming fragile bodies into figures of authority and desire.',
      },
    ],
  },
  {
    type: 'p',
    text: 'Founded in Moscow in 1987, AES+F is a collective consisting of Tatiana Arzamasova, Lev Evzovich, Evgeny Svyatsky, and Vladimir Fridkes. Renowned for large-scale video installations and hyperreal digital tableaux, the group combines references from classical painting, fashion photography, mythology, and contemporary media culture. Their works frequently explore beauty, violence, consumerism, and the ambiguous relationship between fantasy and reality.',
  },
  {
    type: 'p',
    parts: [
      { text: 'In ' },
      { em: 'Digital Safari' },
      {
        text: ', the rainforest functions less as a natural habitat than as a theatrical setting. The performers evoke mythological creatures and allegorical figures, while their poised gestures and frontal gazes recall the artificial elegance of mannerist portraiture. Nature itself appears staged, a luxuriant backdrop populated by creatures that seem at once ancient and entirely contemporary.',
      },
    ],
  },
  {
    type: 'p',
    parts: [
      { text: "Sound plays a crucial role. Mozart's " },
      { em: 'Lacrimosa' },
      { text: ' from the ' },
      { em: 'Requiem' },
      {
        text: ' is reinterpreted by composer Vladimir Rannev for a mechanical music box, turning a familiar lament into an uncanny loop of repetition. Beauty and mourning become inseparable, suggesting a contemporary vanitas in which luxury, spectacle, and vulnerability coexist.',
      },
    ],
  },
  {
    type: 'p',
    parts: [
      { text: 'Rather than offering an ecological warning or a straightforward narrative, ' },
      { em: 'Digital Safari' },
      {
        text: ' presents a world of contradictions. Human and animal, innocence and aggression, intimacy and performance merge into a dazzling masquerade that reflects the ambiguities of life in an age of digital images and environmental uncertainty.',
      },
    ],
  },
  {
    type: 'externalLink',
    href: 'https://aesf.art/',
    label: 'aesf.art',
  },
]

/** @type {import('./blocks.js').EditorialBlock[]} */
const cattelanBlocks = [
  {
    type: 'p',
    text: 'Italian artist Maurizio Cattelan has been awarded the Preis der Nationalgalerie 2026 and will present his first major solo exhibition in Germany at the Neue Nationalgalerie during Berlin Art Week in September 2026.',
  },
  {
    type: 'p',
    parts: [
      {
        text: 'Since the early 1990s, Cattelan has occupied a singular position within contemporary art. Working across sculpture, installation, and conceptual practice, he employs humour, provocation, and moral ambiguity to address themes of power, religion, collective memory, and social responsibility. Works such as ',
      },
      { em: 'La Nona Ora' },
      {
        text: ' (1999), depicting Pope John Paul II struck by a meteorite, and ',
      },
      { em: 'Him' },
      {
        text: ' (2001), a kneeling schoolboy bearing the face of Adolf Hitler, have become iconic examples of an artistic language that oscillates between tragedy and satire.',
      },
    ],
  },
  {
    type: 'p',
    text: 'The jury—composed of Emma Lavigne, Sam Keller, and Klaus Biesenbach—emphasized Cattelan\'s lasting impact on Berlin\'s artistic landscape following his role as co-curator of the 4th Berlin Biennale in 2006. Two decades later, his return to the city is seen as an opportunity to reconsider questions of remembrance, institutional authority, and political polarization through an artistic practice grounded in what has been described as “comic existentialism.”',
  },
  {
    type: 'p',
    text: 'The exhibition also marks a new chapter for the Preis der Nationalgalerie. Celebrating its twenty-fifth anniversary, the prize will adopt a revised format from 2026 onward, honouring internationally significant artists whose work has not yet been comprehensively presented in Berlin through dedicated solo exhibitions at the Neue Nationalgalerie.',
  },
  {
    type: 'p',
    text: 'Curated by Lisa Botti in collaboration with Klaus Biesenbach, the exhibition will open in September 2026 alongside an award ceremony during Berlin Art Week.',
  },
  {
    type: 'externalLink',
    href: 'https://www.smb.museum/ausstellungen/detail/maurizio-cattelan/',
    label: 'smb.museum',
  },
]

/** @type {import('./blocks.js').EditorialBlock[]} */
const thomasEllerBlocks = [
  {
    type: 'p',
    text: 'German curator, writer, and artist Thomas Eller has pursued a multifaceted career spanning Europe, the United States, and Asia. Trained initially as an artist, he has consistently worked across disciplinary boundaries, combining artistic practice, curatorial experimentation, and editorial engagement.',
  },
  {
    type: 'p',
    parts: [
      { text: 'Eller first gained wider recognition as the founder of ' },
      { em: 'artnet Magazine' },
      {
        text: ', helping to establish one of the earliest online platforms dedicated to contemporary art criticism and cultural commentary. Between 2008 and 2010, he served as Artistic Director of the Temporäre Kunsthalle Berlin, an influential institution situated on Schlossplatz that became a site for debate on the role of public art institutions in a reunified Berlin.',
      },
    ],
  },
  {
    type: 'p',
    parts: [
      {
        text: 'His engagement with Asia has been equally significant. After relocating to Beijing in 2014, Eller founded Gallery Weekend Beijing and became President of ',
      },
      { em: 'Ran Dian' },
      {
        text: ', a Hong Kong–based publication devoted to contemporary art in China and beyond. From 2019 to 2021 he directed the Taoxichuan China Arts & Sciences project in Jingdezhen and worked as an associate researcher at Tsinghua University.',
      },
    ],
  },
  {
    type: 'p',
    parts: [
      {
        text: 'Parallel to his curatorial and editorial activities, Eller has maintained an artistic practice centred on photography, moving images, sculpture, and questions of perception. Since 2011, he has developed the ongoing body of work ',
      },
      { em: 'The White Male Complex' },
      {
        text: ', examining identity, philosophy, religion, and social structures through fragmented narratives and manipulated imagery.',
      },
    ],
  },
  {
    type: 'p',
    parts: [
      {
        text: 'In 2026, Eller returned to the Venice Biennale as co-curator of the Mongolian Pavilion together with Uranchimeg Tsultem. Titled ',
      },
      { em: 'Entanglements: Connectivities Across Borders' },
      {
        text: ', the exhibition brings together works by Nomin Bold, Gerelkhuu Ganbold, Tuguldur Yondonjamts, and Dorjderem Davaa, exploring historical and contemporary exchanges across Eurasia. The pavilion proposes Mongolia not as a fixed territory but as a space of connectivity, inclusion, and transformation.',
      },
    ],
  },
  {
    type: 'p',
    text: 'Moving between artistic production, institutional critique, publishing, and transnational cultural mediation, Thomas Eller exemplifies a generation of practitioners for whom art making and intellectual inquiry remain inseparable.',
  },
]

/** @type {import('./blocks.js').EditorialBlock[]} */
const veniceConversationBlocks = [
  {
    type: 'p',
    text: 'Co-curator of the Mongolian Pavilion at the 2026 Biennale on curating across continents.',
  },
  {
    type: 'p',
    parts: [
      { text: 'In conversation with Yuranja, Thomas Eller reflects on ' },
      { em: 'Entanglements: Connectivities Across Borders' },
      {
        text: " — the Mongolian Pavilion's presentation at the 60th Venice Biennale — and on what it means to curate across Eurasian histories, national pavilions, and the porous borders of contemporary art.",
      },
    ],
  },
  {
    type: 'internalLink',
    to: '/people/thomas-eller',
    label: 'Thomas Eller',
  },
]

/** @type {import('./blocks.js').EditorialBlock[]} */
const peopleIndexBlocks = [
  {
    type: 'p',
    text: 'Curators, writers, and artists whose work shapes how we read cities, institutions, and exhibitions.',
  },
  {
    type: 'internalLink',
    to: '/people/thomas-eller',
    label: 'Thomas Eller',
  },
]

/** @type {import('./blocks.js').EditorialBlock[]} */
const editorialBoardIntroBlocks = [
  {
    type: 'p',
    text: 'Yuranja is developed in collaboration with a growing network of curators, writers, and art professionals who contribute their expertise and perspectives from different regions and disciplines.',
  },
  {
    type: 'p',
    text: 'The editorial board helps ensure that Yuranja reflects informed judgment, critical rigor, and an international outlook.',
  },
]

export const editorialDocuments = [
  hello90Document,
  whoseHomeIsItDocument,
  {
    id: 'soyoung-yoon-isp',
    path: '/journal/soyoung-yoon-independent-study-program',
    label: 'Journal',
    title: 'Soyoung Yoon appointed Director of the Independent Study Program',
    description:
      'Soyoung Yoon has been appointed Director of the Independent Study Program (ISP) at the Whitney Museum of American Art in New York.',
    schemaType: 'Article',
    about: ['Soyoung Yoon', 'Whitney Museum of American Art', 'Independent Study Program'],
    backLink: { to: '/', label: '← Back to home' },
    blocks: soyoungBlocks,
  },
  {
    id: 'aes-f-digital-safari',
    path: '/journal/aes-f-digital-safari',
    label: 'Artists and new work',
    title: 'AES+F',
    subtitle: 'Digital Safari: Fables of the Jungle',
    description:
      "AES+F's Digital Safari: Fables of the Jungle — a YRJ editorial on the collective's digitally fabricated rainforest fable.",
    schemaType: 'Article',
    about: ['AES+F', 'Digital Safari: Fables of the Jungle'],
    figure: {
      alt: 'AES+F, Digital Safari: Fables of the Jungle',
      caption: '© AES+F',
    },
    backLink: { to: '/', label: '← Back to home' },
    blocks: aesfBlocks,
  },
  {
    id: 'neue-nationalgalerie-cattelan',
    path: '/spaces/neue-nationalgalerie',
    label: 'Why go',
    title: 'Maurizio Cattelan Receives the Preis der Nationalgalerie 2026',
    description:
      'Maurizio Cattelan receives the Preis der Nationalgalerie 2026 and will present a major solo exhibition at Neue Nationalgalerie during Berlin Art Week.',
    schemaType: 'Article',
    about: ['Maurizio Cattelan', 'Neue Nationalgalerie', 'Preis der Nationalgalerie 2026'],
    figure: {
      alt: 'Maurizio Cattelan at Neue Nationalgalerie, Berlin',
      caption: 'Maurizio Cattelan, Neue Nationalgalerie, Berlin, © Peter Rigaud, 2025',
    },
    backLink: { to: '/', label: '← Back to home' },
    blocks: cattelanBlocks,
  },
  {
    id: 'thomas-eller-profile',
    path: '/people/thomas-eller',
    label: 'People',
    title: 'Thomas Eller',
    description:
      'YRJ profile: curator, writer, and artist Thomas Eller — from artnet Magazine and Temporäre Kunsthalle Berlin to the Mongolian Pavilion in Venice.',
    schemaType: 'ProfilePage',
    about: ['Thomas Eller'],
    figure: {
      alt: 'Thomas Eller',
      caption: '© Thomas Eller, curator, writer and artist. Courtesy of the artist.',
      captionItalic: true,
    },
    related: [
      {
        href: '/journal/thomas-eller-venice',
        label: 'Conversation – Thomas Eller on Venice',
      },
    ],
    backLink: { to: '/people', label: '← Back to People' },
    blocks: thomasEllerBlocks,
  },
  {
    id: 'thomas-eller-venice',
    path: '/journal/thomas-eller-venice',
    label: 'Conversation',
    title: 'Thomas Eller on Venice',
    description:
      'A YRJ conversation with Thomas Eller, co-curator of the Mongolian Pavilion at the Venice Biennale.',
    schemaType: 'Article',
    about: ['Thomas Eller', 'Venice Biennale', 'Mongolian Pavilion'],
    backLink: { to: '/', label: '← Back to home' },
    blocks: veniceConversationBlocks,
  },
  {
    id: 'people-index',
    path: '/people',
    label: 'Journal',
    title: 'People',
    description:
      'Curators, writers, and artists whose work shapes how we read cities, institutions, and exhibitions.',
    schemaType: 'CollectionPage',
    about: ['People'],
    backLink: null,
    blocks: peopleIndexBlocks,
  },
  {
    id: 'about',
    path: '/about',
    title: 'About Yuranja',
    description:
      'Yuranja is an editorial guide to museums, galleries, and exhibitions worth seeing — derived from the Korean word 유랑자 (yurangja), meaning a wanderer or traveler.',
    schemaType: 'AboutPage',
    about: ['Yuranja', 'Jung Me Chai'],
    backLink: null,
    blocks: [
      {
        type: 'p',
        text: 'Yuranja derives from the Korean word 유랑자 (yurangja), meaning a wanderer or traveler. Some art spaces are worth the journey.',
      },
      {
        type: 'p',
        text: 'Yuranja is an editorial guide to museums, galleries, and exhibitions worth seeing. It helps travelers and locals answer a simple question: in this city, which art spaces deserve more than a quick stop on Google Maps?',
      },
    ],
    sections: [
      {
        id: 'editorial',
        title: 'Editorial guide',
        blocks: [
          {
            type: 'p',
            text: 'Editors visit anonymously and pay for their own tickets when required. We look beyond individual exhibitions to consider curatorial vision, quality of presentation, public programs, and the setting that make a place worth seeking out.',
          },
          {
            type: 'p',
            text: 'Ratings describe how far we would travel; Pulse reflects what a place contributes to its city at a given moment — established, emerging, overlooked, or impossible to ignore.',
          },
        ],
      },
      {
        id: 'initiated-by',
        title: 'Initiated by',
        blocks: [
          {
            type: 'p',
            text: 'Yuranja is an independent editorial practice initiated by Jung Me Chai, a curator, writer, and creative technologist working across contemporary art, technology, and research.',
          },
          {
            type: 'p',
            text: 'She is the founder and former director of DISKURS Berlin and has curated exhibitions and collaborated with museums, biennials, and institutions across Europe and Korea for more than two decades.',
          },
          {
            type: 'p',
            text: 'She has also written extensively for art magazines and publications, developing a practice grounded in close looking, critical judgment, and clear communication.',
          },
          {
            type: 'p',
            text: 'Jung Me Chai is also the creator of Busy Mars, an AI-based platform for discovering artists, curators, and cultural practitioners.',
          },
          {
            type: 'p',
            text: 'Yuranja is developed through a hybrid mode of authorship: a singular curatorial perspective extended through AI systems as tools for research, structuring, and development.',
          },
          {
            type: 'p',
            text: 'AI does not replace editorial judgment. It expands its reach and capacity.',
          },
          {
            type: 'p',
            text: 'At its core, Yuranja remains human: defined by decisions about what to select, connect, and make visible.',
          },
        ],
        links: [
          { href: 'https://hybridcurator.com', label: 'HybridCurator' },
          { href: 'https://www.busymars.com', label: 'Busy Mars' },
          { href: 'https://www.discursus.info/', label: 'DISKURS Berlin' },
          { href: 'https://neoslow.com/', label: 'Neo Slow' },
        ],
      },
    ],
  },
  {
    id: 'editorial-board',
    path: '/about/editorial-board',
    label: 'About',
    title: 'Editorial Board',
    description: 'The editors and collaborators behind YRJ.',
    schemaType: 'AboutPage',
    about: ['Editorial Board', 'Jung Me Chai', 'Thomas Eller'],
    backLink: { to: '/about', label: 'About' },
    boardMembers: [
      {
        name: 'Jung Me Chai',
        role: 'Founder of Yuranja. Curator, writer, and creative technologist.',
        biography: [
          'Jung Me Chai is a curator and former director of DISKURS Berlin. She has curated exhibitions and collaborated with museums, biennials, and institutions across Europe and Korea. For more than ten years, she wrote for art magazines and publications, developing a practice grounded in close looking, critical judgment, and clear communication.',
          'She is also the creator of Busy Mars, an AI-based platform for discovering artists, curators, and cultural practitioners.',
        ],
      },
      {
        name: 'Thomas Eller',
        role: 'Curator, writer, and artist.',
        biography: [
          'Thomas Eller is a German curator, writer, and visual artist with longstanding experience across Europe, the United States, and Asia. He founded artnet Magazine and has held leadership roles, including Artistic Director of the Temporäre Kunsthalle Berlin and President of Ran Dian, a Hong Kong-based magazine focused on contemporary art in Asia.',
          'In 2026, he serves as co-curator of the Mongolian Pavilion at the Venice Biennale.',
        ],
      },
    ],
    blocks: editorialBoardIntroBlocks,
  },
]

export function getEditorialByPath(path) {
  const normalized = path.replace(/\/$/, '') || '/'
  return editorialDocuments.find((doc) => doc.path === normalized) ?? null
}

export function getEditorialDocuments() {
  return editorialDocuments
}

/** @param {typeof editorialDocuments[number]} doc */
export function editorialJsonLd(doc) {
  const url = absoluteUrl(doc.path)
  const type =
    doc.schemaType === 'ProfilePage'
      ? 'ProfilePage'
      : doc.schemaType === 'CollectionPage'
        ? 'CollectionPage'
        : doc.schemaType === 'AboutPage'
          ? 'AboutPage'
          : 'Article'

  /** @type {Record<string, unknown>} */
  const data = {
    '@context': 'https://schema.org',
    '@type': type,
    headline: doc.subtitle ? `${doc.title} — ${doc.subtitle}` : doc.title,
    name: doc.title,
    description: doc.description,
    mainEntityOfPage: url,
    url,
    publisher: {
      '@type': 'Organization',
      name: 'Yuranja',
      alternateName: 'YRJ',
      url: absoluteUrl('/'),
    },
  }

  if (doc.about?.length) {
    data.about = doc.about.map((name) => ({ '@type': 'Thing', name }))
  }

  const imagePath = doc.socialImage || doc.figure?.src
  if (imagePath) {
    data.image = absoluteUrl(imagePath)
  }

  return data
}

/** @param {typeof editorialDocuments[number]} doc */
export function editorialSummaryHtml(doc) {
  let html = articleToSummaryHtml(doc)

  if (doc.sections?.length) {
    html += doc.sections
      .map((section) => {
        const body = section.blocks.map(blockToHtml).join('\n')
        const links = section.links?.length
          ? `<nav aria-label="${escapeHtml(section.title)} links"><p>Links</p><ul>${section.links
              .map(
                (link) =>
                  `<li><a href="${escapeHtml(link.href)}" target="_blank" rel="noreferrer">${escapeHtml(link.label)}</a></li>`,
              )
              .join('')}</ul></nav>`
          : ''
        return `<section id="${escapeHtml(section.id)}"><h2>${escapeHtml(section.title)}</h2>${body}${links}</section>`
      })
      .join('\n')
  }

  if (doc.boardMembers?.length) {
    html += doc.boardMembers
      .map(
        (member) => `
      <section>
        <h2>${escapeHtml(member.name)}</h2>
        <p>${escapeHtml(member.role)}</p>
        ${member.biography.map((p) => `<p>${escapeHtml(p)}</p>`).join('\n')}
      </section>`,
      )
      .join('\n')
  }

  return html
}
