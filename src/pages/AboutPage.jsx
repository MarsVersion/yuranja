import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { getEditorialByPath } from '../data/editorial/documents.js'

const externalLinkClass =
  'page-link underline underline-offset-4 transition-opacity hover:opacity-75'

export function AboutPage() {
  const location = useLocation()
  const document = getEditorialByPath('/about')

  useEffect(() => {
    if (!location.hash) return
    const id = location.hash.replace('#', '')
    requestAnimationFrame(() => {
      window.document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })
  }, [location.pathname, location.hash])

  return (
    <article className="page-atmosphere mx-auto max-w-[1440px] px-6 py-16 pb-32 md:px-20 md:py-24 md:pb-40">
      <h1 className="font-serif text-5xl md:text-7xl">{document.title}</h1>
      <div className="page-lede mt-8 max-w-2xl space-y-6 font-sans text-lg leading-relaxed">
        {document.blocks
          .filter((block) => block.type === 'p')
          .map((block) => (
            <p key={block.text.slice(0, 48)}>{block.text}</p>
          ))}
      </div>

      {document.sections?.map((section) => (
        <section
          key={section.id}
          id={section.id}
          className="page-divider mt-24 max-w-3xl scroll-mt-32 border-t pt-16"
        >
          <h2 className="font-serif text-3xl md:text-4xl">{section.title}</h2>
          <div className="page-lede mt-6 space-y-6 font-sans text-base leading-relaxed">
            {section.blocks
              .filter((block) => block.type === 'p')
              .map((block) => (
                <p key={block.text.slice(0, 48)}>{block.text}</p>
              ))}
          </div>

          {section.links?.length ? (
            <nav aria-label="Related projects" className="page-divider mt-10 border-t pt-8">
              <p className="page-label-accent font-sans text-caption font-semibold uppercase tracking-[0.2em]">
                Links
              </p>
              <ul className="page-lede mt-4 space-y-3 font-sans text-base">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={externalLinkClass}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ) : null}
        </section>
      ))}
    </article>
  )
}
