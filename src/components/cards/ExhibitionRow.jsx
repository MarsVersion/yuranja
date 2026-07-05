import { Link } from 'react-router-dom'
import { formatExhibitionDates, getExhibitionCategory } from '../../data/exhibitions'

export function ExhibitionRow({ exhibition }) {
  const { slug, title, venue, city, dates } = exhibition
  const dateLabel = formatExhibitionDates(dates, 'short')
  const category = getExhibitionCategory(exhibition)

  return (
    <Link to={`/exhibitions/${slug}`} className="exhibitions-index__row group">
      <div className="exhibitions-index__row-top">
        <p className="exhibitions-index__row-category font-sans text-caption font-semibold uppercase">
          {category}
        </p>
        <time
          className="exhibitions-index__row-dates font-sans text-caption font-semibold uppercase"
          dateTime={dates.start}
        >
          {dateLabel}
        </time>
      </div>
      <div className="exhibitions-index__row-body">
        <div>
          <h2 className="exhibitions-index__row-title">{title}</h2>
          <p className="exhibitions-index__row-venue font-sans">
            {venue} · {city}
          </p>
        </div>
        <span
          className="exhibitions-index__row-arrow material-symbols-outlined"
          aria-hidden="true"
        >
          north_east
        </span>
      </div>
    </Link>
  )
}
