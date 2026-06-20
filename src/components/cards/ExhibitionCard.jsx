import { Link } from 'react-router-dom'

export function ExhibitionCard({ exhibition, staggerClass = '', variant = 'home' }) {
  const aspectClass = variant === 'compact' ? 'aspect-[3/4]' : 'aspect-[16/9]'
  const { slug, title, venue, city, image } = exhibition

  return (
    <Link
      to={`/exhibitions/${slug}`}
      className={`group block scroll-mt-28 ${staggerClass}`}
    >
      <div className={`mb-6 overflow-hidden bg-surface-muted ${aspectClass}`}>
        {image ? (
          <img
            src={image}
            alt=""
            className="h-full w-full object-cover grayscale transition-transform duration-1000 group-hover:scale-110"
          />
        ) : null}
      </div>
      <div className="flex items-center justify-between border-b border-ink pb-4">
        <h3 className="font-serif text-2xl leading-tight md:text-3xl">{title}</h3>
        <span className="material-symbols-outlined shrink-0 transition-transform group-hover:translate-x-1">
          north_east
        </span>
      </div>
      <p className="mt-4 font-sans text-caption font-semibold uppercase tracking-[0.2em] text-ink">
        {venue} · {city}
      </p>
    </Link>
  )
}
