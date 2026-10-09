/**
 * Curated "Hot 5" institutions per city — editorial shortlists for city guides.
 * @typedef {{ name: string, category: string, website: string, address: string, description: string, notice?: string }} HotInstitution
 */

/** @type {Record<string, HotInstitution[]>} */
export const cityHotInstitutions = {
  seoul: [
    {
      name: 'MMCA Seoul — National Museum of Modern and Contemporary Art',
      category: 'Museum',
      website: 'https://www.mmca.go.kr/eng/',
      address: '30 Samcheong-ro, Jongno-gu, Seoul',
      description:
        'The Seoul branch of South Korea’s national museum of modern and contemporary art. Located near Gyeongbokgung Palace, it presents Korean and international exhibitions across galleries, courtyards and other project spaces.',
    },
    {
      name: 'Buk-Seoul Museum of Art — SeMA',
      category: 'Museum',
      website: 'https://sema.seoul.go.kr/en/visit/bukseoul',
      address: '1238 Dongil-ro, Nowon-gu, Seoul',
      description:
        'A branch of the Seoul Museum of Art set within a public park in northern Seoul. Its programme includes contemporary art, exhibitions for children and projects connecting the museum with its surrounding community.',
    },
    {
      name: 'Leeum Museum of Art',
      category: 'Museum',
      website: 'https://www.leeumhoam.org/',
      address: '60-16 Itaewon-ro 55-gil, Yongsan-gu, Seoul',
      description:
        'A private museum bringing together traditional Korean art and modern and contemporary works. Its buildings were designed by Mario Botta, Jean Nouvel and Rem Koolhaas.',
    },
    {
      name: 'Art Sonje Center',
      category: 'Contemporary Art Centre',
      website: 'https://artsonje.org/en/',
      address: '87 Yulgok-ro 3-gil, Jongno-gu, Seoul',
      description:
        'A non-profit contemporary art centre in Samcheong-dong, presenting exhibitions, performances and experimental projects by Korean and international artists.',
    },
    {
      name: 'Atelier Hermès — Maison Hermès Dosan Park',
      category: 'Gallery',
      website: 'https://www.fondationdentreprisehermes.org/en/node/450',
      address: 'B1F, 7 Dosan-daero 45-gil, Gangnam-gu, Seoul',
      description:
        'A contemporary art gallery within Maison Hermès Dosan Park, presenting exhibitions and commissioned projects with a focus on experimental artistic practices.',
      notice: 'Temporarily closed for renovation from 10 April 2026 until May 2027.',
    },
  ],
  stockholm: [
    {
      name: 'Moderna Museet',
      category: 'Museum',
      website: 'https://www.modernamuseet.se/',
      address: 'Exercisplan 4, 111 49 Stockholm',
      description:
        'Sweden’s national museum of modern and contemporary art, located on Skeppsholmen island. Its collection spans the twentieth century to the present, alongside temporary exhibitions of Swedish and international art.',
    },
    {
      name: 'Magasin III Museum for Contemporary Art',
      category: 'Contemporary Art Centre',
      website: 'https://www.magasin3.com/',
      address: 'Frihamnsgatan 28, 115 56 Stockholm',
      description:
        'An independent contemporary art institution in a former warehouse in Stockholm’s free-port district, known for commissioning installations and presenting international artists.',
      notice:
        'Closed until further notice: Magasin III ended its exhibition activities in Stockholm on 31 December 2024.',
    },
    {
      name: 'Bonniers Konsthall',
      category: 'Kunsthalle',
      website: 'https://bonnierskonsthall.se/',
      address: 'Torsgatan 19, 113 21 Stockholm',
      description:
        'A contemporary art institution in a distinctive glass building in central Stockholm, presenting exhibitions by emerging and established Swedish and international artists.',
    },
    {
      name: 'Färgfabriken',
      category: 'Exhibition Space',
      website: 'https://fargfabriken.se/',
      address: 'Lövholmsbrinken 1, 117 65 Stockholm',
      description:
        'An exhibition space in a former paint factory, bringing together contemporary art, architecture and questions about urban life.',
    },
  ],
  berlin: [
    {
      name: 'Hamburger Bahnhof',
      category: 'Museum',
      website: 'https://www.smb.museum/en/museums-institutions/hamburger-bahnhof/',
      address: 'Invalidenstraße 50–51, 10557 Berlin',
      description:
        "Germany's leading museum for contemporary art, with major installations, media art, and post-1960 works. Its vast industrial architecture makes it a destination in itself.",
    },
    {
      name: 'Neue Nationalgalerie',
      category: 'Museum',
      website: 'https://www.smb.museum/en/museums-institutions/neue-nationalgalerie/',
      address: 'Potsdamer Straße 50, 10785 Berlin',
      description:
        "Mies van der Rohe's architectural masterpiece pairs modern art with one of the world's most iconic museum buildings. Temporary exhibitions are consistently among Europe's strongest.",
    },
    {
      name: 'KINDL – Centre for Contemporary Art',
      category: 'Contemporary Art Centre',
      website: 'https://www.kindl-berlin.de',
      address: 'Am Sudhaus 3, 12053 Berlin',
      description:
        'A former brewery transformed into an ambitious exhibition venue. Monumental industrial spaces allow artists to realise projects impossible in conventional galleries.',
    },
    {
      name: 'Schinkel Pavillon',
      category: 'Kunsthalle',
      website: 'https://www.schinkelpavillon.de',
      address: 'Oberwallstraße 32, 10117 Berlin',
      description:
        "One of Berlin's sharpest curatorial programmes. Experimental exhibitions unfold inside an exceptional post-war modernist pavilion.",
    },
    {
      name: 'SAVVY Contemporary',
      category: 'Project Space',
      website: 'https://savvy-contemporary.com',
      address: 'Reinickendorfer Straße 17, 13347 Berlin',
      description:
        "A globally respected platform connecting artistic practice with decolonial thought, research, and public discourse. One of Berlin's most intellectually engaging institutions.",
    },
  ],
  'hong-kong': [
    {
      name: 'M+',
      category: 'Museum',
      website: 'https://www.mplus.org.hk',
      address: '38 Museum Drive, West Kowloon',
      description:
        "Asia's flagship museum of visual culture, bringing together contemporary art, design, architecture, and moving image across global perspectives.",
    },
    {
      name: 'Tai Kwun Contemporary',
      category: 'Contemporary Art Centre',
      website: 'https://www.taikwun.hk',
      address: '10 Hollywood Road, Central',
      description:
        'A beautifully restored heritage complex where contemporary exhibitions engage with history, architecture, and the city itself.',
    },
    {
      name: 'Para Site',
      category: 'Non-profit Art Space',
      website: 'https://www.para-site.art',
      address: '22/F, Wing Wah Industrial Building, Quarry Bay',
      description:
        "One of Asia's most influential independent art spaces. Internationally respected for thoughtful exhibitions and long-term support of emerging voices.",
    },
    {
      name: 'Asia Art Archive',
      category: 'Research Collection',
      website: 'https://aaa.org.hk',
      address: 'Hollywood Road, Sheung Wan',
      description:
        "More than an archive, it is one of the world's most important resources for researching recent Asian art and exhibition histories.",
    },
    {
      name: 'Blindspot Gallery',
      category: 'Gallery',
      website: 'https://blindspotgallery.com',
      address: 'Wong Chuk Hang',
      description:
        'Known for discovering and championing artists from Hong Kong and the wider region through consistently strong exhibitions.',
    },
  ],
  venice: [
    {
      name: 'La Biennale di Venezia',
      category: 'Biennale',
      website: 'https://www.labiennale.org',
      address: 'Giardini & Arsenale',
      description:
        "The world's most influential recurring exhibition of contemporary art. Every serious follower of contemporary art returns here.",
    },
    {
      name: 'Punta della Dogana',
      category: 'Collection',
      website: 'https://www.pinaultcollection.com',
      address: 'Dorsoduro 2',
      description:
        "The Pinault Collection's spectacular waterfront museum combines bold contemporary exhibitions with Tadao Ando's architecture.",
    },
    {
      name: 'Palazzo Grassi',
      category: 'Collection',
      website: 'https://www.pinaultcollection.com',
      address: 'Campo San Samuele 3231',
      description:
        "Large-scale international exhibitions presented within one of Venice's grand historic palazzi.",
    },
    {
      name: 'Peggy Guggenheim Collection',
      category: 'Museum',
      website: 'https://www.guggenheim-venice.it',
      address: 'Dorsoduro 701',
      description:
        "A landmark collection of twentieth-century art housed in Peggy Guggenheim's former home overlooking the Grand Canal.",
    },
    {
      name: 'Ocean Space',
      category: 'Art Centre',
      website: 'https://www.ocean-space.org',
      address: 'Campo San Lorenzo',
      description:
        'An experimental venue exploring the intersection of art, ecology, and environmental research.',
    },
  ],
  'new-york': [
    {
      name: 'The Museum of Modern Art (MoMA)',
      category: 'Museum',
      website: 'https://www.moma.org',
      address: '11 West 53rd Street',
      description:
        "One of the world's defining museums of modern and contemporary art. Essential for understanding twentieth-century artistic history.",
    },
    {
      name: 'The Metropolitan Museum of Art',
      category: 'Museum',
      website: 'https://www.metmuseum.org',
      address: '1000 Fifth Avenue',
      description:
        'Its contemporary exhibitions exist within one of the richest encyclopedic collections anywhere.',
    },
    {
      name: 'Whitney Museum of American Art',
      category: 'Museum',
      website: 'https://whitney.org',
      address: '99 Gansevoort Street',
      description:
        'The definitive museum for American contemporary art, with strong biennials and an exceptional location beside the High Line.',
    },
    {
      name: 'New Museum',
      category: 'Museum',
      website: 'https://www.newmuseum.org',
      address: '235 Bowery',
      description:
        'Dedicated entirely to contemporary art, with consistently adventurous programming and emerging international artists.',
    },
    {
      name: 'Artists Space',
      category: 'Non-profit Art Space',
      website: 'https://artistsspace.org',
      address: 'Tribeca',
      description:
        "One of New York's most influential artist-run organisations, known for supporting experimental practices before they reach mainstream institutions.",
    },
  ],
  london: [
    {
      name: 'Tate Modern',
      category: 'Museum',
      website: 'https://www.tate.org.uk/visit/tate-modern',
      address: 'Bankside',
      description:
        "One of the world's leading museums of modern and contemporary art inside a transformed power station.",
    },
    {
      name: 'Whitechapel Gallery',
      category: 'Kunsthalle',
      website: 'https://www.whitechapelgallery.org',
      address: 'Whitechapel High Street',
      description:
        'Historically significant and consistently influential in introducing major contemporary artists to London audiences.',
    },
    {
      name: 'Institute of Contemporary Arts (ICA)',
      category: 'Contemporary Art Centre',
      website: 'https://www.ica.art',
      address: 'The Mall',
      description:
        'An interdisciplinary institution where contemporary art, film, music, and critical discussion intersect.',
    },
    {
      name: 'Serpentine Galleries',
      category: 'Gallery',
      website: 'https://www.serpentinegalleries.org',
      address: 'Kensington Gardens',
      description:
        'Internationally recognised for ambitious commissions and the annual Serpentine Pavilion.',
    },
    {
      name: 'Camden Art Centre',
      category: 'Contemporary Art Centre',
      website: 'https://camdenartcentre.org',
      address: 'Arkwright Road',
      description:
        'A favourite among artists for its thoughtful exhibitions, residencies, and commitment to emerging practices.',
    },
  ],
  taipei: [
    {
      name: 'Taipei Fine Arts Museum',
      category: 'Museum',
      website: 'https://www.tfam.museum',
      address: 'Zhongshan District',
      description:
        "Taiwan's leading contemporary art museum and a cornerstone of experimental artistic practice in East Asia.",
    },
    {
      name: 'Museum of Contemporary Art Taipei (MOCA Taipei)',
      category: 'Museum',
      website: 'https://www.mocataipei.org.tw',
      address: 'Datong District',
      description:
        'A former school building transformed into a museum known for accessible, experimental contemporary exhibitions.',
    },
    {
      name: 'TKG+',
      category: 'Gallery',
      website: 'https://www.tkgplus.com',
      address: 'Neihu District',
      description:
        "One of Taiwan's most internationally connected galleries, presenting leading contemporary artists from the region and beyond.",
    },
    {
      name: 'Kuandu Museum of Fine Arts',
      category: 'Museum',
      website: 'https://kdmofa.tnua.edu.tw',
      address: 'Beitou District',
      description:
        'University-affiliated museum supporting emerging artists and experimental exhibition formats.',
    },
    {
      name: 'Hong Foundation',
      category: 'Collection',
      website: 'https://hongfoundation.org.tw',
      address: 'Taipei',
      description:
        'A private collection and exhibition programme supporting contemporary artists in Taiwan through focused presentations and long-term patronage.',
    },
  ],
}

/**
 * Venues outside the city itself, listed as a separate group on its guide.
 * @type {Record<string, { title: string, institutions: HotInstitution[] }>}
 */
export const cityNearbyInstitutions = {
  stockholm: {
    title: 'Elsewhere in Sweden',
    institutions: [
      {
        name: 'Malmö Konsthall',
        category: 'Kunsthalle',
        website: 'https://malmokonsthall.se/',
        address: 'S:t Johannesgatan 7, 211 46 Malmö',
        description:
          'A large contemporary art exhibition space known for its flexible, light-filled architecture, designed by Klas Anshelm.',
      },
    ],
  },
}

/** @param {string | undefined} slug */
export function getHotInstitutionsForCity(slug) {
  if (!slug) return []
  return cityHotInstitutions[slug] ?? []
}

/** @param {string | undefined} slug */
export function getNearbyInstitutionsForCity(slug) {
  if (!slug) return null
  return cityNearbyInstitutions[slug] ?? null
}
