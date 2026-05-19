import { useState } from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import { EditorialLabel } from '../components/EditorialLabel'
import { groupResultsByKind, searchCatalog } from '../data/search'

const suggestions = [
  { label: 'Berlin', q: 'Berlin' },
  { label: 'Seoul', q: 'Seoul' },
  { label: 'New York', q: 'New York' },
  { label: 'Leeum', q: 'Leeum' },
  { label: 'Han River Studies', q: 'Han River' },
  { label: 'Paper Routes', q: 'Paper Routes' },
]

function ResultMeta({ item }) {
  const parts = []

  if (item.kind === 'city' && item.district) {
    parts.push({ key: 'd', node: item.district })
  }
  if (item.city && item.kind !== 'city') {
    parts.push({ key: 'c', node: item.city })
  }
  if (item.rating) {
    parts.push({
      key: 'r',
      node: (
        <span className="text-accent-orange" aria-hidden>
          {'★'.repeat(item.rating)}
        </span>
      ),
    })
  }
  if (item.ratingLabel && item.kind !== 'city') {
    parts.push({ key: 'l', node: item.ratingLabel })
  }
  if (item.pulse && item.kind !== 'city') {
    parts.push({ key: 'p', node: item.pulse })
  }
  if (item.endsOn) {
    parts.push({ key: 'e', node: `Through ${item.endsOn}` })
  }

  if (parts.length === 0) return null

  return (
    <p className="mt-4 font-sans text-xs tracking-wide text-muted">
      {parts.map((p, i) => (
        <span key={p.key}>
          {i > 0 ? <span className="mx-2 text-line">·</span> : null}
          <span className="normal-case tracking-normal">{p.node}</span>
        </span>
      ))}
    </p>
  )
}

function ResultBlock({ item }) {
  return (
    <Link
      to={item.href}
      className="group block border-b border-line py-10 transition-colors first:pt-2 last:border-b-0 hover:bg-surface-muted/30"
    >
      <h2 className="font-serif text-2xl leading-tight transition-colors group-hover:text-accent-green md:text-[1.75rem]">
        {item.title}
      </h2>
      {item.kind === 'exhibition' && item.institutionName ? (
        <p className="mt-2 font-sans text-sm font-light italic text-muted">
          {item.institutionName}
        </p>
      ) : null}
      {item.deck ? (
        <p className="mt-3 max-w-2xl font-sans text-sm font-light leading-relaxed text-muted">
          {item.deck}
        </p>
      ) : null}
      <ResultMeta item={item} />
      <span className="mt-5 inline-flex items-center gap-1 font-sans text-caption font-semibold uppercase tracking-[0.2em] text-ink opacity-0 transition-opacity group-hover:opacity-100">
        Open
        <span className="material-symbols-outlined text-base">north_east</span>
      </span>
    </Link>
  )
}

function ResultsGroup({ label, items }) {
  if (items.length === 0) return null
  return (
    <section className="mt-16 md:mt-20">
      <EditorialLabel className="mb-8">{label}</EditorialLabel>
      <div>
        {items.map((item) => (
          <ResultBlock key={item.id} item={item} />
        ))}
      </div>
    </section>
  )
}

function SearchEmptyIntro() {
  const [draft, setDraft] = useState('')
  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault()
    const t = draft.trim()
    if (!t) return
    navigate(`/search?q=${encodeURIComponent(t)}`)
  }

  return (
    <div className="mt-16 border border-line bg-surface-muted/30 px-8 py-12 md:mt-20 md:px-12 md:py-16">
      <EditorialLabel>Search the guide</EditorialLabel>
      <h2 className="mt-4 font-serif text-3xl leading-tight md:text-4xl">
        Find a city, a room, or a show
      </h2>
      <p className="mt-6 max-w-xl font-sans text-base font-light leading-relaxed text-muted">
        Yuranja indexes the six cities we cover in depth, the spaces we have walked ourselves, and
        the exhibitions on their walls. Type a name — no account, no noise.
      </p>
      <form onSubmit={handleSubmit} className="mt-10 flex max-w-lg flex-col gap-3 sm:flex-row sm:items-stretch">
        <label className="sr-only" htmlFor="search-page-input">
          Search query
        </label>
        <div className="flex min-h-[48px] flex-1 items-center gap-2 border border-line bg-canvas px-4">
          <span className="material-symbols-outlined text-muted">search</span>
          <input
            id="search-page-input"
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            placeholder="City, institution, artist, exhibition…"
            className="w-full border-0 bg-transparent font-sans text-sm text-ink outline-none placeholder:text-muted/80 focus:ring-0"
            autoComplete="off"
          />
        </div>
        <button
          type="submit"
          className="min-h-[48px] border border-ink bg-ink px-8 font-sans text-caption font-semibold uppercase tracking-[0.2em] text-canvas transition-colors hover:bg-canvas hover:text-ink"
        >
          Search
        </button>
      </form>
      <div className="mt-14 border-t border-line pt-10">
        <EditorialLabel>Suggested starting points</EditorialLabel>
        <ul className="mt-6 flex flex-wrap gap-3">
          {suggestions.map((s) => (
            <li key={s.q}>
              <Link
                to={`/search?q=${encodeURIComponent(s.q)}`}
                className="inline-block border border-line bg-canvas px-4 py-2 font-sans text-caption font-semibold uppercase tracking-[0.15em] text-ink transition-colors hover:border-ink"
              >
                {s.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <p className="mt-10 font-sans text-sm text-muted">
        Prefer to wander?{' '}
        <Link to="/cities" className="text-accent-green underline-offset-4 hover:underline">
          Open the city index
        </Link>{' '}
        or{' '}
        <Link to="/exhibitions" className="text-accent-green underline-offset-4 hover:underline">
          read what is on view
        </Link>
        .
      </p>
    </div>
  )
}

function NoMatches({ query }) {
  return (
    <div className="mt-16 border border-line bg-canvas px-8 py-12 md:mt-20 md:px-12">
      <EditorialLabel>No direct match</EditorialLabel>
      <h2 className="mt-4 font-serif text-2xl md:text-3xl">
        Nothing under that name in this edition
      </h2>
      <p className="mt-5 max-w-xl font-sans text-sm font-light leading-relaxed text-muted">
        The index is narrow by design: six cities, three fully written spaces, and the exhibitions
        we last saw on site. Try a shorter phrase, a city name, or one of the suggestions below.
      </p>
      <p className="mt-2 font-sans text-sm text-muted">
        You searched for <span className="font-medium text-ink">&ldquo;{query}&rdquo;</span>
      </p>
      <ul className="mt-10 flex flex-wrap gap-3">
        {suggestions.slice(0, 4).map((s) => (
          <li key={s.q}>
            <Link
              to={`/search?q=${encodeURIComponent(s.q)}`}
              className="inline-block border border-line px-4 py-2 font-sans text-caption font-semibold uppercase tracking-[0.15em] transition-colors hover:border-ink"
            >
              {s.label}
            </Link>
          </li>
        ))}
      </ul>
      <Link
        to="/cities"
        className="mt-10 inline-block font-sans text-caption font-semibold uppercase tracking-[0.2em] text-accent-green underline-offset-4 hover:underline"
      >
        Return to the city index
      </Link>
    </div>
  )
}

export function SearchResultsPage() {
  const [params] = useSearchParams()
  const q = params.get('q') ?? ''
  const results = searchCatalog(q)
  const grouped = groupResultsByKind(results)

  return (
    <main className="mx-auto max-w-[880px] px-6 py-16 md:py-24">
      <EditorialLabel>The index</EditorialLabel>
      <h1 className="mt-3 font-serif text-4xl md:text-5xl">Search</h1>

      {!q ? (
        <SearchEmptyIntro />
      ) : (
        <>
          <p className="mt-6 max-w-xl font-sans text-sm font-light leading-relaxed text-muted">
            Matches for <span className="font-medium text-ink">&ldquo;{q}&rdquo;</span> across
            cities, spaces, and exhibitions.
          </p>

          {results.length === 0 ? (
            <NoMatches query={q} />
          ) : (
            <>
              <ResultsGroup label="Cities" items={grouped.cities} />
              <ResultsGroup label="Spaces" items={grouped.spaces} />
              <ResultsGroup label="Exhibitions" items={grouped.exhibitions} />
            </>
          )}
        </>
      )}
    </main>
  )
}
