import { Link } from 'react-router-dom'
import { EditorialBoardMemberCard } from '../components/EditorialBoardMemberCard'
import { jungMeChai, thomasEller } from '../assets/people/images.js'

const linkClass =
  'page-link underline underline-offset-4 transition-opacity hover:opacity-75'

const boardMembers = [
  {
    image: jungMeChai,
    name: 'Jung Me Chai',
    role: 'Founder of Yuranja. Curator, writer, and creative technologist.',
    imageAlt: 'Portrait of Jung Me Chai',
    biography: [
      'Jung Me Chai is a curator and former director of DISKURS Berlin. She has curated exhibitions and collaborated with museums, biennials, and institutions across Europe and Korea. For more than ten years, she wrote for art magazines and publications, developing a practice grounded in close looking, critical judgment, and clear communication.',
      'She is also the creator of Busy Mars, an AI-based platform for discovering artists, curators, and cultural practitioners.',
    ],
  },
  {
    image: thomasEller,
    name: 'Thomas Eller',
    role: 'Curator, writer, and artist.',
    imageAlt: 'Portrait of Thomas Eller',
    biography: [
      'Thomas Eller is a German curator, writer, and visual artist with longstanding experience across Europe, the United States, and Asia. He founded artnet Magazine and has held leadership roles, including Artistic Director of the Temporäre Kunsthalle Berlin and President of Ran Dian, a Hong Kong-based magazine focused on contemporary art in Asia.',
      'In 2026, he serves as co-curator of the Mongolian Pavilion at the Venice Biennale.',
    ],
  },
]

export function EditorialBoardPage() {
  return (
    <article className="page-atmosphere mx-auto max-w-[1440px] px-6 py-16 pb-32 md:px-20 md:py-24 md:pb-40">
      <p className="page-label-accent font-sans text-caption font-semibold uppercase tracking-[0.2em]">
        <Link to="/about" className={`${linkClass} no-underline hover:underline`}>
          About
        </Link>
      </p>

      <h1 className="mt-4 font-serif text-5xl md:text-7xl">Editorial Board</h1>

      <div className="page-lede mt-8 max-w-3xl space-y-6 font-sans text-base leading-relaxed">
        <p>
          Yuranja is developed in collaboration with a growing network of curators, writers, and
          art professionals who contribute their expertise and perspectives from different regions
          and disciplines.
        </p>
        <p>
          The editorial board helps ensure that Yuranja reflects informed judgment, critical rigor,
          and an international outlook.
        </p>
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
