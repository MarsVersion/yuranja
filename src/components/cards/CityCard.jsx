import { Link } from 'react-router-dom'

export function CityCard({ city, staggerClass = '', variant = 'home' }) {
  const aspectClass = variant === 'compact' ? 'aspect-[3/4]' : 'aspect-[16/9]'

  return (
    <Link
      to={`/cities/${city.slug}`}
      className={`group block scroll-mt-28 ${staggerClass}`}
    >
      <div className={`mb-6 overflow-hidden bg-surface-muted ${aspectClass}`}>
        <img
          src={city.image}
          alt=""
          className="h-full w-full object-cover grayscale transition-transform duration-1000 group-hover:scale-110"
        />
      </div>
      <div className="flex items-center justify-between border-b border-ink pb-4">
        <h3 className="font-serif text-2xl uppercase md:text-3xl">{city.name}</h3>
        <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">
          north_east
        </span>
      </div>
      <p className="mt-4 font-sans text-caption font-semibold uppercase tracking-[0.2em] text-muted">
        {city.district}
      </p>
    </Link>
  )
}
