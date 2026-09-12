import { Link } from 'react-router-dom'
import { EditorialBoardMemberCard } from '../components/EditorialBoardMemberCard'
import { getEditorialByPath } from '../data/editorial/documents.js'
import { jungMeChai, thomasEller } from '../assets/people/images.js'

const linkClass =
  'page-link underline underline-offset-4 transition-opacity hover:opacity-75'

const memberImages = {
  'Jung Me Chai': jungMeChai,
  'Thomas Eller': thomasEller,
}

export function EditorialBoardPage() {
  const document = getEditorialByPath('/about/editorial-board')
  const boardMembers = document.boardMembers.map((member) => ({
    ...member,
    image: memberImages[member.name],
    imageAlt: `Portrait of ${member.name}`,
  }))

  return (
    <article className="page-atmosphere mx-auto max-w-[1440px] px-6 py-16 pb-32 md:px-20 md:py-24 md:pb-40">
      <p className="page-label-accent font-sans text-caption font-semibold uppercase tracking-[0.2em]">
        <Link to="/about" className={`${linkClass} no-underline hover:underline`}>
          About
        </Link>
      </p>

      <h1 className="mt-4 font-serif text-5xl md:text-7xl">{document.title}</h1>

      <div className="page-lede mt-8 max-w-3xl space-y-6 font-sans text-base leading-relaxed">
        {document.blocks
          .filter((block) => block.type === 'p')
          .map((block) => (
            <p key={block.text.slice(0, 48)}>{block.text}</p>
          ))}
      </div>

      <div className="page-divider mt-16 max-w-4xl border-t pt-16 md:mt-20 md:pt-20">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-2 md:gap-x-12 md:gap-y-20">
          {boardMembers.map((member, index) => (
            <EditorialBoardMemberCard key={`${member.name}-${index}`} {...member} />
          ))}
        </div>
      </div>
    </article>
  )
}
