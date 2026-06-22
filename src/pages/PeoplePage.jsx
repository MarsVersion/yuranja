import { Link } from 'react-router-dom'
import { EditorialLabel } from '../components/EditorialLabel'
import { THOMAS_ELLER_PAGE_PATH } from './ThomasEllerPage'

export const PEOPLE_PATH = '/people'

const linkClass = 'page-link underline underline-offset-4 transition-opacity hover:opacity-75'

export function PeoplePage() {
  return (
    <main className="page-atmosphere mx-auto max-w-[1440px] px-6 py-16 pb-32 md:px-20 md:py-24 md:pb-40">
      <EditorialLabel>Journal</EditorialLabel>
      <h1 className="mt-4 font-serif text-5xl md:text-7xl">People</h1>
      <p className="page-lede mt-8 max-w-3xl font-sans text-lg leading-relaxed">
        Curators, writers, and artists whose work shapes how we read cities, institutions, and
        exhibitions.
      </p>

      <ul className="page-divider mt-16 max-w-[730px] space-y-8 border-t pt-16 font-sans text-base md:text-lg">
        <li>
          <Link to={THOMAS_ELLER_PAGE_PATH} className={linkClass}>
            Thomas Eller
          </Link>
        </li>
      </ul>
    </main>
  )
}
