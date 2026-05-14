import { useParams, Link } from 'react-router-dom'
import { EditorialLabel } from '../components/EditorialLabel'
import { getInstitution } from '../data/institutions'
import { PulseBadge } from '../components/cards'

export function InstitutionPage() {
  const { slug } = useParams()
  const i = getInstitution(slug)

  if (!i) {
    return (
      <main className="mx-auto max-w-[720px] px-6 py-24 text-center">
        <EditorialLabel>Listing</EditorialLabel>
        <h1 className="mt-4 font-display text-4xl">Space not found</h1>
        <p className="mt-4 font-body text-muted">
          We could not find that listing. Browse city guides to discover spaces we cover.
        </p>
        <Link
          to="/cities"
          className="mt-8 inline-block border border-ink px-8 py-4 font-body text-[11px] font-semibold uppercase tracking-[0.2em] hover:bg-ink hover:text-canvas"
        >
          Back to cities
        </Link>
      </main>
    )
  }

  return (
    <>
      <header className="relative h-[70vh] min-h-[420px] w-full overflow-hidden md:h-[85vh]">
        <img
          src={i.heroImage}
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-6 md:p-20">
          <div className="mx-auto flex max-w-[1440px] flex-col gap-4 text-white">
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-white/15 px-3 py-1 font-body text-[10px] font-semibold uppercase tracking-[0.2em] backdrop-blur">
                {i.type}
              </span>
              <PulseBadge label={i.pulse} />
            </div>
            <EditorialLabel variant="onDark" className="mt-1">
              {i.city}
            </EditorialLabel>
            <h1 className="font-display text-5xl md:text-7xl">{i.name}</h1>
            <div className="mt-2 flex items-center gap-3 text-accent-orange">
              <span aria-hidden>{'★'.repeat(i.rating)}</span>
              <span className="font-body text-sm font-light text-white/90">{i.ratingLabel}</span>
            </div>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-[1440px] px-6 py-20 md:px-20 md:py-28">
        <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-7">
            <EditorialLabel>The review</EditorialLabel>
            <h2 className="mt-4 font-display text-3xl md:text-4xl">From the editors</h2>
            <p className="mt-8 font-body text-lg font-light leading-relaxed text-muted">
              {i.review}
            </p>
          </div>
          <div className="md:col-span-4 md:col-start-9">
            <div className="border-l border-ink pl-8">
              <EditorialLabel>Address</EditorialLabel>
              <p className="mt-2 whitespace-pre-line font-body text-sm leading-relaxed">{i.address}</p>
              <a
                href={i.website}
                className="mt-4 inline-block font-body text-[11px] font-semibold uppercase tracking-[0.2em] text-accent-green underline-offset-4 hover:underline"
                target="_blank"
                rel="noreferrer"
              >
                Website
              </a>
              <div className="mt-8">
                <EditorialLabel>Opening hours</EditorialLabel>
                <p className="mt-2 whitespace-pre-line font-body text-sm leading-relaxed">{i.hours}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface-muted/80 py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-6 md:px-20">
          <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <EditorialLabel>Before you go</EditorialLabel>
              <h2 className="mt-4 font-display text-3xl md:text-4xl">Visitor information</h2>
            </div>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="border border-line bg-canvas p-8">
              <span className="material-symbols-outlined text-3xl text-accent-green">museum</span>
              <h3 className="mt-4 font-display text-2xl">Entry &amp; tickets</h3>
              <p className="mt-3 font-body text-sm text-muted">{i.entryFee}</p>
            </div>
            <div className="border border-line bg-canvas p-8 md:mt-16">
              <span className="material-symbols-outlined text-3xl text-accent-orange">
                location_on
              </span>
              <h3 className="mt-4 font-display text-2xl">Accessibility &amp; amenities</h3>
              <p className="mt-3 font-body text-sm text-muted">{i.accessibility}</p>
              <p className="mt-4 font-body text-sm text-muted">{i.amenities}</p>
            </div>
          </div>
          <div className="mt-8 grid gap-6 border border-line bg-canvas p-8 md:grid-cols-2">
            <div>
              <EditorialLabel>Audio guide</EditorialLabel>
              <p className="mt-2 font-body text-sm">{i.audioGuide}</p>
            </div>
            <div>
              <EditorialLabel>Elsewhere</EditorialLabel>
              <p className="mt-2 font-body text-sm text-muted">
                Open listings often mention this museum around {i.googleRating.toFixed(1)} on
                aggregate scales. On social channels, {i.instagramHashtagCount}.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-6 py-20 md:px-20 md:py-28">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-12 md:gap-8">
          <div className="order-2 md:order-1 md:col-span-5">
            <img
              src={i.exhibitionImage}
              alt=""
              className="aspect-[3/4] w-full object-cover"
            />
          </div>
          <div className="order-1 md:order-2 md:col-span-6 md:col-start-7">
            <EditorialLabel>On the walls</EditorialLabel>
            <h2 className="mt-4 font-display text-3xl md:text-4xl">{i.exhibitions[0]?.title}</h2>
            <p className="mt-4 font-body text-sm text-muted">
              {i.exhibitions[0]?.artists}
            </p>
            <p className="mt-6 font-body text-lg font-light text-muted">
              Calendars move; the dates below reflect our last walk-through. Confirm on the
              institution&apos;s site before you travel.
            </p>
            <ul className="mt-8 space-y-4 border-t border-line pt-8">
              {i.exhibitions.map((ex) => (
                <li key={ex.title} className="flex flex-col gap-1 md:flex-row md:justify-between">
                  <span className="font-display text-xl">{ex.title}</span>
                  <span className="font-body text-[11px] font-semibold uppercase tracking-[0.2em] text-muted">
                    Ends {ex.endsOn}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-ink py-20 text-canvas md:py-28">
        <div className="mx-auto max-w-[1440px] px-6 text-center md:px-20">
          <EditorialLabel variant="onDark" className="mx-auto max-w-xl">
            Practical notes
          </EditorialLabel>
          <h2 className="mt-4 font-display text-4xl md:text-5xl">Visit information</h2>
          <p className="mx-auto mt-6 max-w-2xl font-body text-base font-light text-white/75">
            Pair this visit with a walk, a second smaller space, or a late opening. Yuranja lists
            are built for real days — not idealized itineraries.
          </p>
          <div className="mt-16 grid gap-12 text-center md:grid-cols-3 md:gap-8">
            <div>
              <span className="material-symbols-outlined text-4xl text-white/90">map</span>
              <h3 className="mt-4 font-display text-2xl">Neighborhood map</h3>
              <p className="mt-3 font-body text-sm text-white/60">
                See nearby galleries and project rooms in the same afternoon radius.
              </p>
              <Link
                to="/map"
                className="mt-6 inline-block font-body text-[11px] font-semibold uppercase tracking-[0.25em] underline underline-offset-4"
              >
                Open map
              </Link>
            </div>
            <div>
              <span className="material-symbols-outlined text-4xl text-white/90">event</span>
              <h3 className="mt-4 font-display text-2xl">Late hours &amp; quiet slots</h3>
              <p className="mt-3 font-body text-sm text-white/60">
                We flag evenings and weekday mornings when the building breathes.
              </p>
              <span className="mt-6 inline-block font-body text-[11px] font-semibold uppercase tracking-[0.25em] text-white/50">
                Detailed in the listing above
              </span>
            </div>
            <div>
              <span className="material-symbols-outlined text-4xl text-white/90">search</span>
              <h3 className="mt-4 font-display text-2xl">Related spaces</h3>
              <p className="mt-3 font-body text-sm text-white/60">
                Discover what else in {i.city} shares this curatorial wavelength.
              </p>
              <Link
                to="/cities"
                className="mt-6 inline-block font-body text-[11px] font-semibold uppercase tracking-[0.25em] underline underline-offset-4"
              >
                Browse city
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
