import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const externalLinkClass =
  'page-link underline underline-offset-4 transition-opacity hover:opacity-75'

const LINKS = {
  hybridCurator: 'https://hybridcurator.com',
  busyMars: 'https://www.busymars.com',
  discursus: 'https://www.discursus.info/',
  neoSlow: 'https://neoslow.com/',
}

export function AboutPage() {
  const location = useLocation()

  useEffect(() => {
    if (!location.hash) return
    const id = location.hash.replace('#', '')
    requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })
  }, [location.pathname, location.hash])

  return (
    <article className="page-atmosphere mx-auto max-w-[1440px] px-6 py-16 pb-32 md:px-20 md:py-24 md:pb-40">
      <h1 className="font-serif text-5xl md:text-7xl">About Yuranja</h1>
      <div className="page-lede mt-8 max-w-2xl space-y-6 font-sans text-lg leading-relaxed">
        <p>
          Yuranja derives from the Korean word 유랑자 (yurangja), meaning a wanderer or traveler.
          Some art spaces are worth the journey.
        </p>
        <p>
          Yuranja is an editorial guide to museums, galleries, and exhibitions worth seeing. It
          helps travelers and locals answer a simple question: in this city, which art spaces deserve
          more than a quick stop on Google Maps?
        </p>
      </div>

      <section id="editorial" className="page-divider mt-24 max-w-3xl scroll-mt-32 border-t pt-16">
        <h2 className="font-serif text-3xl md:text-4xl">Editorial guide</h2>
        <div className="page-lede mt-6 space-y-6 font-sans text-base leading-relaxed">
          <p>
            Editors visit anonymously and pay for their own tickets when required. We look beyond
            individual exhibitions to consider curatorial vision, quality of presentation, public
            programs, and the setting that make a place worth seeking out.
          </p>
          <p>
            Ratings describe how far we would travel; Pulse reflects what a place contributes to its
            city at a given moment — established, emerging, overlooked, or impossible to ignore.
          </p>
        </div>
      </section>

      <section id="initiated-by" className="page-divider mt-24 max-w-3xl scroll-mt-32 border-t pt-16">
        <h2 className="font-serif text-3xl md:text-4xl">Initiated by</h2>
        <div className="page-lede mt-6 space-y-6 font-sans text-base leading-relaxed">
          <p>
            Yuranja is an independent editorial practice initiated by Jung Me Chai, a curator,
            writer, and creative technologist working across contemporary art, technology, and
            research.
          </p>
          <p>
            She is the founder and former director of DISKURS Berlin and has curated exhibitions and
            collaborated with museums, biennials, and institutions across Europe and Korea for more
            than two decades.
          </p>
          <p>
            She has also written extensively for art magazines and publications, developing a
            practice grounded in close looking, critical judgment, and clear communication.
          </p>
          <p>
            Jung Me Chai is also the creator of Busy Mars, an AI-based platform for discovering
            artists, curators, and cultural practitioners.
          </p>
          <p>
            Yuranja is developed through a hybrid mode of authorship: a singular curatorial
            perspective extended through AI systems as tools for research, structuring, and
            development.
          </p>
          <p>AI does not replace editorial judgment. It expands its reach and capacity.</p>
          <p>
            At its core, Yuranja remains human: defined by decisions about what to select, connect,
            and make visible.
          </p>
        </div>

        <nav aria-label="Related projects" className="page-divider mt-10 border-t pt-8">
          <p className="page-label-accent font-sans text-caption font-semibold uppercase tracking-[0.2em]">
            Links
          </p>
          <ul className="page-lede mt-4 space-y-3 font-sans text-base">
            <li>
              <a href={LINKS.hybridCurator} target="_blank" rel="noopener noreferrer" className={externalLinkClass}>
                HybridCurator
              </a>
            </li>
            <li>
              <a href={LINKS.busyMars} target="_blank" rel="noopener noreferrer" className={externalLinkClass}>
                Busy Mars
              </a>
            </li>
            <li>
              <a href={LINKS.discursus} target="_blank" rel="noopener noreferrer" className={externalLinkClass}>
                DISKURS Berlin
              </a>
            </li>
            <li>
              <a href={LINKS.neoSlow} target="_blank" rel="noopener noreferrer" className={externalLinkClass}>
                Neo Slow
              </a>
            </li>
          </ul>
        </nav>
      </section>
    </article>
  )
}
