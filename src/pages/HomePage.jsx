import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { EditorialLabel } from '../components/EditorialLabel'
import { featuredCities, topPicks } from '../data/cities'
import { CityCard, RatingLegend, TopPickCard } from '../components/cards'

const heroImg =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCaOtmopfa0vVC_8CUBEVoYftCuR79yMT-a1ZbFauPbw3v7gsFSWx-wMJpT4ZP1fwo1cMOL5brPKdrcKFG2jAL1jB-UbAOzkYsqJuQmedE32JkcYVYXgm3lBSea5lLoSD6nFK8ZREAY30SsWnqNlGtjSpZ1G2Kw4idhaqeg_gIOQ6H7OcaCuTCVEdpYFmJseZC_rlvJOalSMs-VJSU5RNAzRHxfNDKQtkyt1uueISV3eUuFnSB-2KkPCbYGCG90pRXaXLgUc-sWkzI'

export function HomePage() {
  const [heroQuery, setHeroQuery] = useState('')
  const navigate = useNavigate()

  function handleHeroSearch(e) {
    e.preventDefault()
    const trimmed = heroQuery.trim()
    if (!trimmed) return
    navigate(`/search?q=${encodeURIComponent(trimmed)}`)
  }

  return (
    <>
      <section className="relative flex min-h-screen flex-col justify-end overflow-hidden pt-24">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImg}
            alt=""
            className="h-full w-full object-cover grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        </div>
        <div className="relative z-10 mx-auto mb-12 w-full max-w-[1440px] px-6 py-12 md:px-20">
          <EditorialLabel variant="onDark" className="tracking-[0.35em] text-white/90">
            See what matters.
          </EditorialLabel>
          <h1 className="mt-4 font-display text-5xl leading-[0.95] tracking-tight text-white md:text-8xl lg:text-[120px]">
            Yuranja
          </h1>
          <p className="mt-6 max-w-xl font-body text-lg font-light text-white/90 md:text-xl">
            A guide to art spaces genuinely worth your time.
          </p>
          <form
            onSubmit={handleHeroSearch}
            className="mt-10 flex max-w-2xl flex-col gap-4 sm:flex-row sm:items-stretch"
          >
            <label className="sr-only" htmlFor="hero-search">
              Search by city, artist, or exhibition
            </label>
            <div className="flex min-h-[52px] w-full flex-1 items-center gap-3 border border-white/40 bg-white/10 px-4 py-3 backdrop-blur-md">
              <span className="material-symbols-outlined text-white/80">search</span>
              <input
                id="hero-search"
                name="q"
                type="search"
                value={heroQuery}
                onChange={(e) => setHeroQuery(e.target.value)}
                placeholder="Search by city, artist, or exhibition"
                autoComplete="off"
                className="w-full border-0 bg-transparent font-body text-sm text-white outline-none placeholder:text-white/60 focus:ring-0"
              />
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-stretch">
              <button
                type="submit"
                className="inline-flex min-h-[52px] items-center justify-center border border-white/50 bg-white/95 px-8 font-body text-[11px] font-semibold uppercase tracking-[0.2em] text-ink transition-colors hover:bg-canvas"
              >
                Search
              </button>
              <Link
                to="/cities"
                className="inline-flex min-h-[52px] items-center justify-center border border-ink bg-ink px-8 font-body text-[11px] font-semibold uppercase tracking-[0.2em] text-canvas transition-colors hover:bg-canvas hover:text-ink"
              >
                Explore cities
              </Link>
            </div>
          </form>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-6 py-24 md:px-20 md:py-40">
        <div className="mb-16 flex flex-col justify-between gap-6 border-b border-line pb-10 md:flex-row md:items-end">
          <div>
            <EditorialLabel>Editors&apos; choice</EditorialLabel>
            <h2 className="mt-4 font-display text-4xl uppercase md:text-5xl">Top Picks</h2>
          </div>
          <p className="max-w-md font-body text-sm text-muted">
            Spaces our editors would send a friend to first — museums, galleries, and projects
            with a clear point of view.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-7">
            <TopPickCard large {...topPicks[0]} />
          </div>
          <div className="flex flex-col gap-24 pt-0 md:col-span-5 md:pt-24">
            <TopPickCard {...topPicks[1]} />
            <TopPickCard {...topPicks[2]} />
          </div>
        </div>
      </section>

      <section className="border-y border-ink bg-ink py-24 text-canvas md:py-40">
        <div className="mx-auto grid max-w-[1440px] gap-16 px-6 md:grid-cols-2 md:px-20 md:gap-24">
          <div>
            <EditorialLabel variant="onDark">How we rank</EditorialLabel>
            <h2 className="mt-4 font-display text-4xl uppercase md:text-5xl">Rating system</h2>
            <p className="mt-6 font-body text-base font-light text-white/75">
              Three anchors, one pulse. Ratings describe how far we would travel; pulse describes
              what it feels like to visit right now.
            </p>
          </div>
          <RatingLegend variant="onDark" />
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-6 py-24 md:px-20 md:py-40">
        <div className="mb-16 text-center">
          <EditorialLabel className="mx-auto max-w-xl">The atlas</EditorialLabel>
          <h2 className="mt-4 font-display text-4xl uppercase md:text-5xl">City guides</h2>
          <p className="mx-auto mt-4 max-w-2xl font-body text-lg font-light text-muted">
            Start with a neighborhood, leave with a shortlist you can actually finish in a weekend.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-y-16 gap-x-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredCities.map((city, i) => (
            <CityCard
              key={city.slug}
              city={city}
              staggerClass={
                i === 1 || i === 4 ? 'lg:mt-24' : i === 3 ? 'lg:-mt-24' : ''
              }
            />
          ))}
        </div>
      </section>

      <section id="featured-exhibition" className="border-t border-ink bg-surface-muted/60">
        <div className="mx-auto grid max-w-[1440px] items-center gap-12 px-6 py-24 md:grid-cols-12 md:gap-8 md:px-20 md:py-40">
          <div className="order-2 md:order-1 md:col-span-5">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDERuUCVruxDygR6Jvc1qRxhwigI_aQstcOPyOXUbg7hi2WBHcbYujOaXcvMG9dzcy44osHdryKj0zBzTcwiKRiD1lfuY5UtL2FRbmdRDU-LGnklrM0D9reMWpJhVZbzt7AS0sLBQN_JtvwBHlyAgsyZ0_g1lTaTJKD4J1_qX-e-3xWKHUQo_gcEtMkcQWGijZtVvLv3r6DmFsIh07hAsOogSF0tRMfguimlGvuVBMsqF7HoVzALAn-jm3hnYtUWpl5KW8qISfQn-s"
              alt=""
              className="aspect-video w-full object-cover grayscale md:aspect-[4/5]"
            />
          </div>
          <div className="order-1 md:order-2 md:col-span-6 md:col-start-7">
            <EditorialLabel>Featured exhibition</EditorialLabel>
            <h2 className="mt-4 font-display text-4xl md:text-5xl">Night Rooms</h2>
            <p className="mt-6 font-body text-lg font-light text-muted">
              A citywide trail of intimate installations — sound, light, and sculpture in spaces
              not built as museums. Yuranja mapped the route so you can visit in one evening.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <span className="font-body text-[11px] font-semibold uppercase tracking-[0.25em]">
                Through Aug 31
              </span>
              <span className="h-px w-12 bg-ink" aria-hidden />
              <Link
                to="/exhibitions"
                className="font-body text-[11px] font-semibold uppercase tracking-[0.25em] text-accent-green underline-offset-4 hover:underline"
              >
                View trail
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="editorial" className="border-t border-ink py-24 md:py-40">
        <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-12 px-6 md:flex-row md:gap-16 md:px-20">
          <div className="md:w-1/2">
            <EditorialLabel variant="accent" className="mb-6 block">
              Editorial guide
            </EditorialLabel>
            <h2 className="font-display text-4xl uppercase leading-tight md:text-5xl">
              How we choose what makes the list
            </h2>
            <p className="mt-8 font-body text-lg font-light text-muted">
              Our editors visit anonymously, return on weekends, and talk to artists and guards
              alike. If a space is here, it earned its place with work you can see on the walls —
              not with catalogue copy alone.
            </p>
            <Link
              to="/about#editorial"
              className="mt-10 inline-block border border-ink px-8 py-4 font-body text-[11px] font-semibold uppercase tracking-[0.2em] transition-colors hover:bg-ink hover:text-canvas"
            >
              Read the guide
            </Link>
          </div>
          <div className="aspect-video w-full overflow-hidden bg-surface-muted md:w-1/2">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBYQ7hVwju41YDm3eo7tyMoua_mGFGEooI9dgDIWq4W1dqvstknn1IQeXAzzyJx46NpetXJmR1VuV7eU6waDJMHO_s2sYRPx83KUu0Nx8FfyQARy3pCwsmkDFZbGf47zmwCEbberOQsQWf88smwo3nQ6-dRomhCqTl3YFcEI4QOZG45C3M6tkfSTJVuOXa2lav-SSFlh6YhNBtewfifxYkdUN9xtDQocmNepOa1wLPWUMqELDHk1OaYzEZ0ALC8Sv80bfAW0TQtFIo"
              alt=""
              className="h-full w-full object-cover grayscale"
            />
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-surface-muted/40 py-24 md:py-32">
        <div className="mx-auto max-w-[1440px] px-6 md:px-20">
          <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <EditorialLabel>Visitor information</EditorialLabel>
              <h2 className="mt-3 font-display text-3xl uppercase md:text-4xl">Plan like a local</h2>
            </div>
            <p className="max-w-md font-body text-sm text-muted">
              Hours change, tickets sell out, and the best rooms are sometimes the quiet ones. Each
              Yuranja listing includes what you need before you go.
            </p>
          </div>
          <div className="grid gap-10 md:grid-cols-3 md:gap-12">
            <div className="flex flex-col items-start border border-line bg-canvas p-8">
              <span className="material-symbols-outlined text-3xl text-accent-green">location_on</span>
              <h3 className="mt-6 font-display text-2xl">Neighborhood context</h3>
              <p className="mt-3 font-body text-sm text-muted">
                Where to walk before and after — second stops, bookshops, and quiet corners nearby.
              </p>
            </div>
            <div className="flex flex-col items-start border border-line bg-canvas p-8">
              <span className="material-symbols-outlined text-3xl text-accent-orange">event</span>
              <h3 className="mt-6 font-display text-2xl">Exhibition windows</h3>
              <p className="mt-3 font-body text-sm text-muted">
                Closing dates and late openings so you do not arrive on the wrong Tuesday.
              </p>
            </div>
            <div className="flex flex-col items-start border border-line bg-canvas p-8">
              <span className="material-symbols-outlined text-3xl text-ink">museum</span>
              <h3 className="mt-6 font-display text-2xl">Space types</h3>
              <p className="mt-3 font-body text-sm text-muted">
                Museums, galleries, project rooms, and private collections — labeled clearly.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
