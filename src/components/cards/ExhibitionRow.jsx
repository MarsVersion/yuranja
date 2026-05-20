import { Link } from 'react-router-dom'
import { formatExhibitionDates } from '../../data/exhibitions'

export function ExhibitionRow({ exhibition }) {
  const { slug, title, venue, city, dates } = exhibition
  const dateLabel = formatExhibitionDates(dates, 'short')

  return (
    <Link
      to={`/exhibitions/${slug}`}
      className="group flex flex-col gap-2 border-b border-line py-8 transition-colors first:pt-0 hover:border-ink md:flex-row md:items-end md:justify-between"
    >
      <div>
        <p className="font-serif text-2xl md:text-3xl">{title}</p>
        <p className="mt-2 font-sans text-sm text-ink">
          {venue} · {city}
        </p>
      </div>
      <div className="flex items-center gap-4">
        <span className="font-sans text-caption font-semibold uppercase tracking-[0.25em] text-ink">
          {dateLabel}
        </span>
        <span className="material-symbols-outlined text-ink">event</span>
      </div>
    </Link>
  )
}
