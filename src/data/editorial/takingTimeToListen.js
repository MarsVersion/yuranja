/**
 * Taking Time to Listen — editorial document.
 * Body prose follows src/assets/texts/Gupta Yuranja.docx (wording, paragraphs and headings preserved).
 */

export const TAKING_TIME_TO_LISTEN_PATH = '/journal/taking-time-to-listen'

export const GUPTA_TRUTH_IMAGE = '/images/journal/shilpa-gupta-truth.jpg'
export const GUPTA_UNTITLED_IMAGE =
  '/images/journal/shilpa-gupta-still-they-know-not-what-i-dream-untitled.jpg'
export const GUPTA_DONT_SEE_IMAGE = '/images/journal/shilpa-gupta-dont-see-dont-hear-dont-speak.jpg'

/** @type {import('./blocks.js').EditorialBlock[]} */
const takingTimeToListenBlocks = [
  {
    type: 'p',
    text: 'In a dark room, microphones hang from the ceiling at different heights. Songs drift between them. The microphones have become speakers: instead of receiving voices, they send them out into the space.',
  },
  {
    type: 'p',
    text: 'The room takes time to come into view. As the eyes adjust, light bulbs, cables and shadows gradually appear. Moving between the hanging objects requires a slower pace.',
  },
  {
    type: 'p',
    text: 'Not every language will be familiar to every listener. Yet recognising the words is only one part of the encounter. “Listening Air” makes room for spending time with a voice without fully understanding what it carries.',
  },
  {
    type: 'p',
    text: 'This attention to the act of listening runs through Shilpa Gupta’s “What Still Holds” at Hamburger Bahnhof in Berlin. Questions about truth, borders and freedom of expression emerge through ordinary actions: walking, listening, looking at a book, moving a pencil across paper. Politics becomes tangible through the ways bodies move and familiar objects are used.',
  },
  { type: 'h2', text: 'Seeing from Somewhere' },
  {
    type: 'p',
    text: 'Near the entrance, five large letters spell out “T R U T H”. They face different directions, making the word difficult to read as a whole. Walking between them brings some parts into view while others disappear.',
  },
  {
    type: 'p',
    text: 'Knowing the word does not make it possible to see all of it from a single position.',
  },
  {
    type: 'p',
    text: 'A few steps change the view. Getting closer to one part can obscure the rest. The work draws attention to the relationship between a position and what becomes visible from it.',
  },
  {
    type: 'p',
    text: 'This does not necessarily suggest that truth is absent, or that every view is equally valid. It raises a more specific question: how easily can a partial view be mistaken for the whole?',
  },
  {
    type: 'p',
    text: 'Gupta often works with familiar things: microphones, books, pencils and sheets of paper. Small changes in their use reveal connections that might otherwise pass unnoticed. A microphone carries a song. A book draws attention to a concealed name. A broken pencil holds a trace of someone’s effort to write.',
  },
  {
    type: 'p',
    text: 'Gupta has connected her approach to jugaad, the everyday practice of finding a solution with whatever is available, learned on the streets of Mumbai. Ordinary objects become a way into questions that might otherwise feel distant or abstract.',
  },
  { type: 'h2', text: 'The Name Behind a Voice' },
  {
    type: 'p',
    text: 'In “Someone Else”, one hundred books published anonymously or under pseudonyms are represented in metal and arranged on shelves. They cannot be opened as books would be in a library. Attention shifts from their contents to the circumstances in which their authors wrote.',
  },
  {
    type: 'p',
    text: 'Political pressure, religious threats, social prejudice and discrimination can make publishing under one’s own name dangerous—or impossible. A concealed name records something of that pressure. It may also mark a way the writer found to keep their words in circulation.',
  },
  {
    type: 'p',
    text: 'Freedom of expression is often discussed in terms of what a person is allowed to say. Gupta adds another question: under whose name can they say it?',
  },
  {
    type: 'p',
    text: 'A name can bring recognition, but it can also expose a person to danger. Anonymity may be what allows a voice to reach others.',
  },
  {
    type: 'figure',
    src: GUPTA_DONT_SEE_IMAGE,
    alt: 'Shilpa Gupta, Untitled (Don’t See, Don’t Hear, Don’t Speak): a pale stone bust on a column, its hands covering its eyes and mouth, Hamburger Bahnhof',
    fullWidth: true,
    caption:
      'Shilpa Gupta, “Untitled (Don’t See, Don’t Hear, Don’t Speak)”, Hamburger Bahnhof – Nationalgalerie der Gegenwart.',
    credit: 'Photo: Yuranja.',
  },
  { type: 'h2', text: 'Drawing a Country, Making a Record' },
  {
    type: 'p',
    text: 'For “100 Hand-Drawn Maps of My Country”, participants draw their country from memory. Even when the country is the same, its outline changes from one drawing to the next. Coastlines shift. Some areas grow larger; others become faint or disappear.',
  },
  {
    type: 'p',
    text: 'Measured against an official map, these differences might be treated as mistakes. But each drawing also carries something of the person who made it: familiar places, learned images and remembered experiences.',
  },
  {
    type: 'p',
    text: 'A country with an apparently fixed outline takes many forms in people’s minds. The drawings reveal a gap between the authority of a map and the uneven, personal ways a territory is remembered. A border that appears settled on paper may be much less stable in memory.',
  },
  {
    type: 'p',
    text: 'In “Untitled (Nothing Will Go on Record)”, visitors place paper on a table and rub it with a pencil. An image gradually emerges.',
  },
  {
    type: 'p',
    text: 'The action is simple, but it takes time. The angle of the pencil, the pressure of a hand and the position of the paper all affect the result. Bringing the image into view also leaves traces of the body’s involvement.',
  },
  {
    type: 'p',
    text: 'Remembering becomes an activity rather than something contained entirely in a stored record. Returning to a surface and working across it brings the image into a new encounter, in the present.',
  },
  {
    type: 'p',
    text: '“Untitled (Tower of Broken Pencil Points)” approaches writing through what remains after the tool breaks. Countless pencil tips form a slender column. They can no longer make a mark, yet they bear evidence of use.',
  },
  {
    type: 'p',
    text: 'The fragments draw attention to the effort behind writing: the repeated movements that precede a finished sentence, and the possibility of continuing after an interruption.',
  },
  {
    type: 'figure',
    src: GUPTA_UNTITLED_IMAGE,
    alt: 'Shilpa Gupta, StillTheyKnowNotWhatIDream; Untitled: two suspended flap boards reading “I LOVE YOU” and “I LOVE YOU TOO” in a gallery at Hamburger Bahnhof',
    fullWidth: true,
    caption:
      'Shilpa Gupta, “StillTheyKnowNotWhatIDream; Untitled”, Hamburger Bahnhof – Nationalgalerie der Gegenwart.',
    credit: 'Photo: Yuranja.',
  },
  { type: 'h2', text: 'What Stays with Us' },
  {
    type: 'p',
    text: 'The time required by these works matters. In the dark room of “Listening Air”, there is little to gain by rushing. A voice can be heard before its meaning is clear; staying with it allows the encounter to continue without immediate resolution.',
  },
  {
    type: 'p',
    text: 'Elsewhere, letters require movement, remembered maps invite comparison, and a rubbing develops through repeated gestures. Attention takes different forms, but in each case the visitor has something to do beyond quickly identifying an image or a message.',
  },
  {
    type: 'p',
    text: 'These actions give “What Still Holds” its particular force. Truth, memory and expression are approached through the conditions that make them accessible: a place to stand, time to listen, a means of leaving a mark.',
  },
  {
    type: 'p',
    text: 'What persists across the exhibition is the effort to keep something in circulation. A voice reaches another listener. A concealed name allows a book to be published. Such gestures are small, and their results are never entirely secure. Yet they create the possibility that something can be heard, remembered or taken up again by someone else.',
  },
  {
    type: 'p',
    compact: true,
    parts: [
      { strong: 'Shilpa Gupta — “What Still Holds”' },
      {
        text: '\n27 March 2026 – 3 January 2027\nHamburger Bahnhof – Nationalgalerie der Gegenwart\nInvalidenstraße 50, 10557 Berlin, Germany\nAdmission: €16 / concessions €8\nIncludes temporary exhibitions.',
      },
    ],
  },
  {
    type: 'externalLink',
    href: 'https://www.smb.museum/en/exhibitions/detail/shilpa-gupta/',
    label: 'Official exhibition page',
  },
]

export const takingTimeToListenDocument = {
  id: 'taking-time-to-listen',
  path: TAKING_TIME_TO_LISTEN_PATH,
  label: 'Journal',
  title: 'Taking Time to Listen',
  subtitle: 'Shilpa Gupta’s “What Still Holds” at Hamburger Bahnhof, Berlin',
  author: 'Jung Me Chai',
  description:
    'In a dark room, microphones hang from the ceiling at different heights. A review of Shilpa Gupta’s “What Still Holds” at Hamburger Bahnhof, Berlin.',
  teaser:
    'Questions about truth, borders and freedom of expression emerge through ordinary actions: walking, listening, looking at a book, moving a pencil across paper.',
  schemaType: 'Article',
  about: ['Shilpa Gupta', 'What Still Holds', 'Hamburger Bahnhof – Nationalgalerie der Gegenwart'],
  socialImage: GUPTA_TRUTH_IMAGE,
  compactImages: true,
  figure: {
    src: GUPTA_TRUTH_IMAGE,
    alt: 'Shilpa Gupta, Truth: five monumental white letters, some reversed, standing in a skylit gallery at Hamburger Bahnhof',
    caption:
      'Shilpa Gupta, “Truth”, Hamburger Bahnhof – Nationalgalerie der Gegenwart. Photo: Yuranja.',
  },
  exhibition: {
    category: 'Review',
    title: 'Shilpa Gupta — “What Still Holds”',
    venue: 'Hamburger Bahnhof – Nationalgalerie der Gegenwart',
    city: 'Berlin',
    dates: { start: '2026-03-27', end: '2027-01-03' },
  },
  backLink: { to: '/exhibitions', label: '← Back to Exhibitions' },
  blocks: takingTimeToListenBlocks,
}
