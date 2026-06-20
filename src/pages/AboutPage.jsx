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
      <p className="page-lede mt-8 max-w-2xl font-sans text-lg leading-relaxed">
        Yuranja is an editorial guide to museums, galleries, and exhibitions worth seeing. It
        helps travelers and locals answer a simple question: in this city, which art spaces are
        worth visiting?
      </p>

      <section id="editorial" className="page-divider mt-24 max-w-3xl scroll-mt-32 border-t pt-16">
        <h2 className="font-serif text-3xl md:text-4xl">Editorial guide</h2>
        <p className="page-lede mt-6 font-sans text-base leading-relaxed">
          Editors visit anonymously, pay for their own tickets when required, and return on
          weekends to see how a space feels when it is crowded. Ratings describe how far we would
          travel; pulse captures tempo — what feels electric, calm, or about to close.
        </p>
       
      </section>

      <section id="initiated-by" className="page-divider mt-24 max-w-3xl scroll-mt-32 border-t pt-16">
        <h2 className="font-serif text-3xl md:text-4xl">Initiated by</h2>
        <div className="page-lede mt-6 space-y-6 font-sans text-base leading-relaxed">
          <p>
            Yuranja is developed as an independent editorial practice by{' '}
            <a
              href={LINKS.hybridCurator}
              target="_blank"
              rel="noopener noreferrer"
              className={externalLinkClass}
            >
              Jung Me Chai
            </a>
            , a curator, writer, and creative technologist working across contemporary art,
            technology, and research.
          </p>
          <p>
            She is a curator and former director of{' '}
            <a
              href={LINKS.discursus}
              target="_blank"
              rel="noopener noreferrer"
              className={externalLinkClass}
            >
              DISKURS Berlin
            </a>
            . Over the past two decades, she has curated exhibitions and collaborated with museums,
            biennials, and institutions across Europe and Korea.
          </p>
          <p>
            For more than twenty years, she also wrote for a range of art magazines and
            publications, shaping a practice grounded in close looking, critical judgment, and clear
            communication.
          </p>
          <p>
            She is also the creator of{' '}
            <a
              href={LINKS.busyMars}
              target="_blank"
              rel="noopener noreferrer"
              className={externalLinkClass}
            >
              Busy Mars
            </a>
            , an AI-based platform for discovering artists, curators, and cultural practitioners.
          </p>
          <p>
            Yuranja is shaped through a hybrid mode of authorship: a single curatorial perspective,
            extended through collaboration with AI systems as tools for research, structuring, and
            development.
          </p>
          <p>
            This approach does not replace editorial judgment — it expands its scale and capacity.
          </p>
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
                Discursus
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
