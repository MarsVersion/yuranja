import { CONTACT_EMAIL } from '../config/contact'

const bodyCopy = 'font-sans text-[1.3rem] font-normal leading-[1.6]'
const closingNote = 'font-sans text-base font-normal leading-[1.6] text-ink/50'

export function ContactPage() {
  return (
    <main className="page-atmosphere mx-auto max-w-[900px] px-6 py-16 md:py-24">
      <h1 className="font-serif text-4xl md:text-5xl">Contact</h1>

      <p className={`mt-6 ${bodyCopy} text-ink/70`}>
        Yuranja welcomes enquiries from museums, galleries, non-profit art spaces, artists,
        curators, and readers.
      </p>

      <p className={`mt-10 ${bodyCopy} text-ink/70`}>
        Editorial enquiries, collaborations, corrections, recommendations, or general questions:
      </p>

      <a
        href={`mailto:${CONTACT_EMAIL}`}
        className="mt-4 block font-serif text-2xl leading-tight text-accent-green no-underline transition-opacity hover:opacity-75 md:text-[1.75rem]"
      >
        {CONTACT_EMAIL}
      </a>

      <p className={`mt-6 ${bodyCopy} text-ink/70`}>
        We usually reply within a few business days.
      </p>
    </main>
  )
}
