import { Link } from 'react-router-dom'
import { aesfYuranja } from '../assets/images.js'
import soyoungYoonImg from '../assets/Soyoung Yoon.png'
import { EditorialLabel } from '../components/EditorialLabel'
import { getJournalDocuments } from '../data/editorial/documents.js'
import { AESF_DIGITAL_SAFARI_ARTICLE_PATH } from './AesfDigitalSafariArticle'
import { SOYOUNG_YOON_ARTICLE_PATH } from './SoyoungYoonArticle'

export const JOURNAL_PATH = '/journal'

/** Articles whose hero image is imported by the page rather than stored on the record. */
const pageImages = {
  [AESF_DIGITAL_SAFARI_ARTICLE_PATH]: aesfYuranja,
  [SOYOUNG_YOON_ARTICLE_PATH]: soyoungYoonImg,
}

function journalImage(doc) {
  const src = doc.figure?.src || doc.socialImage || pageImages[doc.path]
  if (!src) return null
  return { src, alt: doc.figure?.alt ?? doc.title }
}

export function JournalPage() {
  const articles = getJournalDocuments()

  return (
    <main className="page-atmosphere mx-auto max-w-[1440px] px-6 py-16 pb-32 md:px-20 md:py-24 md:pb-40">
      <EditorialLabel>Journal</EditorialLabel>
      <h1 className="mt-4 font-serif text-5xl md:text-7xl">Journal</h1>
      <p className="page-lede mt-8 max-w-3xl font-sans text-lg leading-relaxed">
        Essays, artist projects and news from the Yuranja editors.
      </p>

      <ul className="page-divider mt-16 border-t md:mt-20">
        {articles.map((doc) => {
          const image = journalImage(doc)
          return (
            <li key={doc.id} className="border-b border-line">
              <Link
                to={doc.path}
                className="group grid gap-6 py-12 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:gap-12 md:py-16"
              >
                {image ? (
                  <div className="overflow-hidden bg-surface-muted">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="h-auto w-full object-contain"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                ) : null}
                <div className={image ? undefined : 'md:col-span-2 max-w-3xl'}>
                  <EditorialLabel>{doc.label}</EditorialLabel>
                  <h2 className="mt-4 font-serif text-3xl leading-tight md:text-4xl">{doc.title}</h2>
                  {doc.subtitle ? (
                    <p className="mt-3 font-serif text-xl leading-snug md:text-2xl">{doc.subtitle}</p>
                  ) : null}
                  {doc.author ? (
                    <p className="mt-4 font-sans text-caption font-semibold uppercase tracking-[0.2em]">
                      By {doc.author}
                    </p>
                  ) : null}
                  <p className="mt-5 max-w-2xl font-sans text-base leading-relaxed md:text-lg">
                    {doc.teaser ?? doc.description}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 font-sans text-caption font-semibold uppercase tracking-[0.2em]">
                    Read
                    <span className="material-symbols-outlined text-base transition-transform group-hover:translate-x-0.5">
                      north_east
                    </span>
                  </span>
                </div>
              </Link>
            </li>
          )
        })}
      </ul>
    </main>
  )
}
