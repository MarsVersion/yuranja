import { Link } from 'react-router-dom'

export function ExhibitionRow({ title, venue, dates, to = '/exhibitions' }) {
  return (
    <Link
      to={to}
      className="group flex flex-col gap-2 border-b border-line py-8 transition-colors first:pt-0 hover:border-ink md:flex-row md:items-end md:justify-between"
    >
      <div>
        <p className="font-display text-2xl md:text-3xl">{title}</p>
        <p className="mt-2 font-body text-sm text-muted">{venue}</p>
      </div>
      <div className="flex items-center gap-4">
        <span className="font-body text-[11px] font-semibold uppercase tracking-[0.25em] text-muted">
          {dates}
        </span>
        <span className="material-symbols-outlined text-muted group-hover:text-ink">event</span>
      </div>
    </Link>
  )
}
