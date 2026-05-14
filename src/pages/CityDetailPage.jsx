import { Link, useParams } from 'react-router-dom'
import { EditorialLabel } from '../components/EditorialLabel'
import { getCityBySlug } from '../data/cities'
import { institutionsBySlug } from '../data/institutions'

function spacesForCity(cityName) {
  return Object.values(institutionsBySlug).filter((i) => i.city === cityName)
}

export function CityDetailPage() {
  const { slug } = useParams()
  const city = getCityBySlug(slug)

  if (!city) {
    return (
      <main className="mx-auto max-w-[720px] px-6 py-24 text-center">
        <EditorialLabel>City guide</EditorialLabel>
        <h1 className="mt-4 font-display text-4xl">This city is not in the atlas</h1>
        <p className="mt-6 font-body text-sm font-light leading-relaxed text-muted">
          The URL may be mistyped, or we have not yet published a guide under that name. The index
          below lists every city in this edition.
        </p>
        <Link
          to="/cities"
          className="mt-10 inline-block border border-ink px-8 py-4 font-body text-[11px] font-semibold uppercase tracking-[0.2em] transition-colors hover:bg-ink hover:text-canvas"
        >
          All cities
        </Link>
      </main>
    )
  }

  const picks = spacesForCity(city.name)

  return (
    <>
      <header className="relative h-[55vh] min-h-[360px] w-full overflow-hidden md:h-[70vh]">
        <img src={city.image} alt="" className="h-full w-full object-cover grayscale" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-6 md:p-20">
          <div className="mx-auto max-w-[1440px] text-white">
            <EditorialLabel variant="onDark">City guide</EditorialLabel>
            <h1 className="mt-4 font-display text-5xl md:text-7xl">{city.name}</h1>
            <p className="mt-4 max-w-xl font-body text-sm font-light text-white/85 md:text-base">
              {city.district}
            </p>
          </div>
        </div>
      </header>

      <article className="mx-auto max-w-[1440px] px-6 py-16 md:px-20 md:py-24">
        <section className="max-w-3xl">
          <EditorialLabel>At a glance</EditorialLabel>
          <p className="mt-5 font-body text-xl font-light leading-relaxed text-ink md:text-2xl">
            {city.intro}
          </p>
          <p className="mt-4 font-body text-sm text-muted">{city.address}</p>
        </section>

        <section className="mt-20 max-w-3xl border-t border-line pt-16">
          <EditorialLabel>Why this city matters</EditorialLabel>
          <h2 className="mt-4 font-display text-3xl leading-tight md:text-4xl">
            A note from the editors
          </h2>
          <p className="mt-6 font-body text-base font-light leading-relaxed text-muted md:text-lg">
            {city.whyItMatters}
          </p>
        </section>

        <section className="mt-20 border-t border-line pt-16">
          <EditorialLabel>For your visit</EditorialLabel>
          <h2 className="mt-4 font-display text-3xl uppercase md:text-4xl">
            Start with these spaces
          </h2>
          <p className="mt-4 max-w-2xl font-body text-sm font-light leading-relaxed text-muted">
            Rooms we have reported from in full. When a city has no starred entries yet, the guide
            still orients you — the shortlist simply stays open.
          </p>

          {picks.length > 0 ? (
            <ul className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
              {picks.map((space) => (
                <li key={space.slug}>
                  <Link
                    to={`/spaces/${space.slug}`}
                    className="group flex h-full flex-col border border-line bg-canvas p-8 transition-colors hover:border-ink"
                  >
                    <span className="font-body text-[10px] font-semibold uppercase tracking-[0.2em] text-accent-green">
                      {space.type}
                    </span>
                    <h3 className="mt-4 font-display text-2xl leading-tight">{space.name}</h3>
                    <p className="mt-4 line-clamp-4 flex-1 font-body text-sm font-light leading-relaxed text-muted">
                      {space.review}
                    </p>
                    <p className="mt-6 flex flex-wrap items-center gap-2 font-body text-[11px] text-muted">
                      <span className="text-accent-orange" aria-hidden>
                        {'★'.repeat(space.rating)}
                      </span>
                      <span>·</span>
                      <span>{space.ratingLabel}</span>
                      <span>·</span>
                      <span>{space.pulse}</span>
                    </p>
                    <span className="mt-8 inline-flex items-center gap-2 font-body text-[11px] font-semibold uppercase tracking-[0.2em] text-ink">
                      Read the listing
                      <span className="material-symbols-outlined text-base transition-transform group-hover:translate-x-0.5">
                        north_east
                      </span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <div className="mt-12 max-w-2xl border border-line bg-surface-muted/25 px-10 py-12">
              <EditorialLabel className="mb-4">In progress</EditorialLabel>
              <p className="font-body text-base font-light leading-relaxed text-muted">
                We have not yet filed full reviews under {city.name} in this edition. The atlas entry
                stays live so you can orient by neighborhood; the shortlist will fill as editors
                return from the field.
              </p>
              <p className="mt-5 font-body text-sm font-light leading-relaxed text-muted">
                Until then, use the exhibition calendar and the map to plan on foot — the same
                standards apply, only the bylines are still in draft.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  to="/exhibitions"
                  className="border border-ink bg-ink px-6 py-3 font-body text-[11px] font-semibold uppercase tracking-[0.2em] text-canvas transition-colors hover:bg-canvas hover:text-ink"
                >
                  Exhibitions
                </Link>
                <Link
                  to="/map"
                  className="border border-line bg-canvas px-6 py-3 font-body text-[11px] font-semibold uppercase tracking-[0.2em] text-muted transition-colors hover:border-ink hover:text-ink"
                >
                  Map
                </Link>
              </div>
            </div>
          )}
        </section>
      </article>
    </>
  )
}
