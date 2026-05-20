import { Link, useParams } from 'react-router-dom'
import { EditorialLabel } from '../components/EditorialLabel'
import {
  formatExhibitionDates,
  formatList,
  getExhibitionBySlug,
} from '../data/exhibitions'

function MetaField({ label, value, children }) {
  if (!value && !children) return null

  return (
    <div className="grid gap-2 border-b border-line py-5 md:grid-cols-[9rem_1fr] md:gap-8 md:py-6">
      <dt className="font-sans text-caption font-semibold uppercase tracking-[0.2em] text-ink/50">
        {label}
      </dt>
      <dd className="font-sans text-sm leading-relaxed text-ink md:text-base">{children ?? value}</dd>
    </div>
  )
}

export function ExhibitionDetailPage() {
  const { slug } = useParams()
  const exhibition = getExhibitionBySlug(slug)

  if (!exhibition) {
    return (
      <main className="mx-auto max-w-[720px] px-6 py-24 text-center">
        <EditorialLabel>Exhibitions</EditorialLabel>
        <h1 className="mt-4 font-serif text-4xl">This listing is not in the calendar</h1>
        <p className="mt-6 font-sans text-sm leading-relaxed text-ink">
          The URL may be mistyped, or the show has moved off our current shortlist.
        </p>
        <Link
          to="/exhibitions"
          className="mt-10 inline-block border border-ink px-8 py-4 font-sans text-caption font-semibold uppercase tracking-[0.2em] transition-colors hover:bg-ink hover:text-canvas"
        >
          All exhibitions
        </Link>
      </main>
    )
  }

  const {
    title,
    artists,
    curators,
    venue,
    city,
    dates,
    address,
    openingHours,
    website,
    description,
    yuranjaNote,
    tags,
  } = exhibition

  const dateLabel = formatExhibitionDates(dates)
  const artistLabel = formatList(artists)
  const curatorLabel = formatList(curators)

  return (
    <main className="mx-auto max-w-[1440px] px-6 py-16 md:px-20 md:py-24">
      <div className="max-w-3xl">
        <EditorialLabel>Exhibition</EditorialLabel>
        <h1 className="mt-4 font-serif text-4xl leading-tight md:text-6xl">{title}</h1>

        <dl className="mt-12 border-t border-ink">
          <MetaField label="Artists" value={artistLabel} />
          <MetaField label={curators?.length === 1 ? 'Curator' : 'Curators'} value={curatorLabel} />
          <MetaField label="Venue" value={venue} />
          <MetaField label="City" value={city} />
          <MetaField label="Dates" value={dateLabel} />
          <MetaField label="Address" value={address} />
          <MetaField label="Opening hours" value={openingHours} />
          <MetaField label="Website">
            {website ? (
              <a
                href={website}
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 transition-colors hover:text-accent-green"
              >
                {website.replace(/^https?:\/\/(www\.)?/, '')}
              </a>
            ) : null}
          </MetaField>
        </dl>

        {description ? (
          <section className="mt-12 border-t border-line pt-10">
            <EditorialLabel>Description</EditorialLabel>
            <p className="mt-4 font-sans text-base leading-relaxed text-ink md:text-lg">
              {description}
            </p>
          </section>
        ) : null}

        {yuranjaNote ? (
          <section className="mt-12 border-l-2 border-accent-green pl-6">
            <EditorialLabel variant="accent">Yuranja note</EditorialLabel>
            <p className="mt-3 font-sans text-base leading-relaxed text-ink md:text-lg">
              {yuranjaNote}
            </p>
          </section>
        ) : null}

        {tags?.length ? (
          <section className="mt-12 border-t border-line pt-10">
            <EditorialLabel>Tags</EditorialLabel>
            <ul className="mt-4 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <li
                  key={tag}
                  className="border border-line px-3 py-1 font-sans text-micro font-semibold uppercase tracking-[0.15em] text-ink"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </section>
        ) : null}

        <Link
          to="/exhibitions"
          className="mt-16 inline-block font-sans text-caption font-semibold uppercase tracking-[0.2em] text-accent-green underline-offset-4 hover:underline"
        >
          ← All exhibitions
        </Link>
      </div>
    </main>
  )
}
