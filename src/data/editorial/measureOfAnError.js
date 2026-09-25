/**
 * The Measure of an Error — editorial document.
 * Body prose follows the approved DOCX wording (paragraphs and artwork titles preserved).
 */

export const THE_MEASURE_OF_AN_ERROR_PATH = '/journal/the-measure-of-an-error'

export const POLLUX_MIRROR_IMAGE = '/images/journal/seo-young-chang-polluxs-mirror.jpeg'
export const BLIND_SPOT_DRAWING_IMAGE =
  '/images/journal/inhwan-oh-blind-spot-drawing.png'

/** @type {import('./blocks.js').EditorialBlock[]} */
const measureOfAnErrorBlocks = [
  {
    type: 'p',
    text: 'If human beings are already prone to error, what else could “human error” mean?',
  },
  {
    type: 'p',
    text: 'Walking through Inhwan Oh vs. Seo Young Chang: „Human Error“ at the Buk-Seoul Museum of Art, I began to wonder whether the error lies in the person—or in the expectations placed on them.',
  },
  {
    type: 'p',
    text: 'In „Isn’t It Beautiful, Like a Rainbow, That We Are Not One“, queer participants followed the same instructions: each selected objects they owned in the colours of the rainbow and arranged them in a prescribed order. The colours and their order were fixed, but the objects speak to different lives. The objects are also displayed beside their photographs. Some no longer look quite as they did when the pictures were taken. Seen together, the photographs and objects make the passage of time part of the work.',
  },
  {
    type: 'p',
    text: 'In „Blind Spot Drawing,“ participants mark the parts of their bodies they cannot reach with their own hands. Our bodies are closer to us than anything else, yet we cannot touch or examine every part of them ourselves. Oh locates the “blind spot” within the body.',
  },
  {
    type: 'figure',
    src: BLIND_SPOT_DRAWING_IMAGE,
    alt: 'Inhwan Oh, Blind Spot Drawing — installation view with body outlines marking unreachable areas',
    fullWidth: true,
    captionParts: [
      { text: 'Inhwan Oh, ' },
      { em: 'Blind Spot Drawing' },
      { text: '.' },
    ],
    credit: 'Photo: Yuranja.',
  },
  {
    type: 'p',
    text: 'Another work that stayed with me concerns women whose names changed after marriage. A name is spoken and written every day, yet the name one lives under is not always a matter of personal choice. Oh uses the heat of an iron to imprint the names of the women he interviewed onto fabric, then presses the creases flat. A trace remains. A changed name does not erase the years lived under the previous one.',
  },
  {
    type: 'p',
    text: 'Chang’s work slowed my pace. It can be difficult to stay with a video that offers no clear narrative. Her videos seem to begin telling a story, then break away from it. Something unsettling enters otherwise familiar scenes, making it difficult to leave.',
  },
  {
    type: 'figure',
    src: POLLUX_MIRROR_IMAGE,
    alt: 'Seo Young Chang, Pollux’s Mirror — video and sculptural installation at Buk-Seoul Museum of Art',
    fullWidth: true,
    cropLeft: 16,
    captionParts: [
      { text: 'Seo Young Chang, ' },
      { em: 'Pollux’s Mirror' },
      { text: '.' },
    ],
    credit: 'Photo: Yuranja.',
  },
  {
    type: 'p',
    text: 'In works such as „Your Delivery“, „Full of Holes“, and "All No Grip“, sculptures and installations stand alongside the videos. Their forms seem to echo the images on screen, but the relationship remains elusive. The tension between the body’s vulnerability and the smooth, impersonal surfaces of technology lingers even after the videos end.',
  },
  {
    type: 'p',
    text: 'Oh’s works question the fixed identities that names, bodies, and social rules assign us. Chang places the body’s finite life beside technology’s promise of continual progress. One finds room to act differently within a system; the other asks what happens when a body cannot keep pace with it. Together, their works suggest that “human error” may tell us as much about the demands of a system as it does about the people living within it.',
  },
  {
    type: 'p',
    compact: true,
    parts: [
      { strong: '2026 Title Match: Inhwan Oh vs. Seo Young Chang: Human Error' },
      {
        text: '\nBuk-Seoul Museum of Art, 1238 Dongil-ro, Nowon-gu, Seoul\n13 August – 25 October 2026\nAdmission: Free',
      },
    ],
  },
  {
    type: 'externalLink',
    href: 'https://sema.seoul.go.kr/en/whatson/exhibition/detail?exNo=1568948&acadmyEeNo=0&evtNo=0&glolangType=ENG',
    label: 'Official exhibition page',
  },
]

export const measureOfAnErrorDocument = {
  id: 'the-measure-of-an-error',
  path: THE_MEASURE_OF_AN_ERROR_PATH,
  label: 'Journal',
  title: 'The Measure of an Error',
  subtitle: 'Inhwan Oh vs. Seo Young Chang: Human Error',
  description:
    'If human beings are already prone to error, what else could “human error” mean? A walk through Inhwan Oh vs. Seo Young Chang: Human Error at the Buk-Seoul Museum of Art.',
  schemaType: 'Article',
  about: [
    'Inhwan Oh',
    'Seo Young Chang',
    'Human Error',
    'Buk-Seoul Museum of Art',
  ],
  socialImage: POLLUX_MIRROR_IMAGE,
  backLink: { to: '/', label: '← Back to home' },
  blocks: measureOfAnErrorBlocks,
}
