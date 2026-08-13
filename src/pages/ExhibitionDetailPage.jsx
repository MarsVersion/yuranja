import { Link, useParams } from 'react-router-dom'
import { EditorialLabel } from '../components/EditorialLabel'
import {
  getAdmissionDisplay,
  formatExhibitionDates,
  formatList,
  getExhibitionBySlug,
} from '../data/exhibitions'
import '../styles/exhibition-detail.css'

function MetaField({ label, value, children }) {
  if (!value && !children) return null

  return (
    <div className="exhibition-detail__meta-row grid gap-2 border-b py-5 md:grid-cols-[9rem_1fr] md:gap-8 md:py-6">
      <dt className="exhibition-detail__meta-label font-sans text-caption font-semibold uppercase tracking-[0.2em]">
        {label}
      </dt>
      <dd className="exhibition-detail__meta-value font-sans text-sm leading-relaxed md:text-base">
        {children ?? value}
      </dd>
    </div>
  )
}

export function ExhibitionDetailPage() {
  const { slug } = useParams()
  const exhibition = getExhibitionBySlug(slug)

  if (!exhibition) {
    return (
      <main className="exhibition-detail exhibition-detail--empty page-atmosphere mx-auto max-w-[720px] px-6 text-center">
        <EditorialLabel>Exhibitions</EditorialLabel>
        <h1 className="exhibition-detail__title mt-4 font-serif text-4xl">This listing is not in the calendar</h1>
        <p className="exhibition-detail__prose mt-6 font-sans text-sm">
          The URL may be mistyped, or the show has moved off our current shortlist.
        </p>
        <Link
          to="/exhibitions"
          className="exhibition-detail__cta mt-10 inline-block border px-8 py-4 font-sans text-caption font-semibold uppercase tracking-[0.2em]"
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
    admission,
    description,
    yuranjaNote,
    tags,
  } = exhibition

  const dateLabel = formatExhibitionDates(dates)
  const artistLabel = formatList(artists)
  const curatorLabel = formatList(curators)
  const admissionDisplay = getAdmissionDisplay(admission)

  return (
    <main className="exhibition-detail page-atmosphere mx-auto max-w-[1440px] px-6 md:px-20">
      <div className="max-w-3xl">
        <EditorialLabel>Exhibition</EditorialLabel>
        <h1 className="exhibition-detail__title font-serif text-4xl leading-tight md:text-6xl">{title}</h1>

        <dl className="exhibition-detail__meta">
          <MetaField label="Artists" value={artistLabel} />
          <MetaField label={curators?.length === 1 ? 'Curator' : 'Curators'} value={curatorLabel} />
          <MetaField label="Venue" value={venue} />
          <MetaField label="City" value={city} />
          <MetaField label="Dates" value={dateLabel} />
          <MetaField label="Address" value={address} />
          <MetaField label="Opening hours" value={openingHours} />
          <MetaField label="Admission">
            <span>{admissionDisplay}</span>
            {admission?.ticketUrl ? (
              <>
                {' '}
                <a
                  href={admission.ticketUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="exhibition-detail__link underline"
                >
                  View current tickets ↗
                </a>
              </>
            ) : null}
          </MetaField>
          <MetaField label="Website">
            {website ? (
              <a
                href={website}
                target="_blank"
                rel="noopener noreferrer"
                className="exhibition-detail__link underline"
              >
                {website.replace(/^https?:\/\/(www\.)?/, '')}
              </a>
            ) : null}
          </MetaField>
        </dl>

        {description ? (
          <section className="exhibition-detail__section">
            <EditorialLabel>Description</EditorialLabel>
            <p className="exhibition-detail__prose font-sans text-base md:text-lg">{description}</p>
          </section>
        ) : null}

        {yuranjaNote ? (
          <section className="exhibition-detail__note">
            <EditorialLabel variant="accent">Yuranja note</EditorialLabel>
            <p className="exhibition-detail__prose font-sans text-base md:text-lg">{yuranjaNote}</p>
          </section>
        ) : null}

        {tags?.length ? (
          <section className="exhibition-detail__section">
            <EditorialLabel>Tags</EditorialLabel>
            <ul className="mt-4 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <li
                  key={tag}
                  className="exhibition-detail__tag border px-3 py-1 font-sans text-micro font-semibold uppercase tracking-[0.15em]"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </section>
        ) : null}

        <Link to="/exhibitions" className="exhibition-detail__back font-sans text-caption font-semibold uppercase">
          ← All exhibitions
        </Link>
      </div>
    </main>
  )
}
