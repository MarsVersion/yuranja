import { Link } from 'react-router-dom'
import { EditorialLabel } from '../components/EditorialLabel'
import { THOMAS_ELLER_PAGE_PATH } from './ThomasEllerPage'

const linkClass = 'page-link underline underline-offset-4 transition-opacity hover:opacity-75'

export function ThomasEllerVeniceConversation() {
  return (
    <article className="page-atmosphere mx-auto max-w-[1440px] px-6 py-16 pb-32 md:px-20 md:py-24 md:pb-40">
      <EditorialLabel>Conversation</EditorialLabel>
      <h1 className="mt-4 max-w-4xl font-serif text-4xl leading-tight md:text-6xl">
        Thomas Eller on Venice
      </h1>

      <div className="page-lede mt-10 max-w-[730px] space-y-6 font-sans text-base leading-[1.77] md:text-lg">
        <p>
          Co-curator of the Mongolian Pavilion at the 2026 Biennale on curating across continents.
        </p>
        <p>
          In conversation with Yuranja, Thomas Eller reflects on{' '}
          <em>Entanglements: Connectivities Across Borders</em> — the Mongolian Pavilion&apos;s
          presentation at the 60th Venice Biennale — and on what it means to curate across
          Eurasian histories, national pavilions, and the porous borders of contemporary art.
        </p>
      </div>

      <p className="mt-8 max-w-[730px] font-sans text-base md:text-lg">
        <Link to={THOMAS_ELLER_PAGE_PATH} className={linkClass}>
          Thomas Eller
        </Link>
      </p>

      <Link
        to="/"
        className="page-link mt-12 inline-block font-sans text-caption font-semibold uppercase tracking-[0.2em]"
      >
        ← Back to home
      </Link>
    </article>
  )
}
