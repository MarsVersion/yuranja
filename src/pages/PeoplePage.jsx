import { Link } from 'react-router-dom'
import { EditorialLabel } from '../components/EditorialLabel'
import { getEditorialByPath } from '../data/editorial/documents.js'

export const PEOPLE_PATH = '/people'

const linkClass = 'page-link underline underline-offset-4 transition-opacity hover:opacity-75'

export function PeoplePage() {
  const document = getEditorialByPath(PEOPLE_PATH)
  const peopleLinks = document.blocks.filter((block) => block.type === 'internalLink')
  const intro = document.blocks.find((block) => block.type === 'p')

  return (
    <main className="page-atmosphere mx-auto max-w-[1440px] px-6 py-16 pb-32 md:px-20 md:py-24 md:pb-40">
      <EditorialLabel>{document.label}</EditorialLabel>
      <h1 className="mt-4 font-serif text-5xl md:text-7xl">{document.title}</h1>
      <p className="page-lede mt-8 max-w-3xl font-sans text-lg leading-relaxed">{intro?.text}</p>

      <ul className="page-divider mt-16 max-w-[730px] space-y-8 border-t pt-16 font-sans text-base md:text-lg">
        {peopleLinks.map((item) => (
          <li key={item.to}>
            <Link to={item.to} className={linkClass}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  )
}
