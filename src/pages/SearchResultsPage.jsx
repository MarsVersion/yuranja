import { Link, useSearchParams } from 'react-router-dom'
import { EditorialLabel } from '../components/EditorialLabel'
import { SearchBar } from '../components/SearchBar'
import { groupResultsByKind, searchCatalog } from '../data/search'

function ResultBlock({ item }) {
  const meta = []

  if (item.kind === 'city' && item.district) {
    meta.push(item.district)
  }
  if (item.city && item.kind !== 'city') {
    meta.push(item.city)
  }
  if (item.venue) {
    meta.push(item.venue)
  }

  return (
    <Link
      to={item.href}
      className="group block border border-line bg-canvas p-6 transition-colors hover:border-ink md:p-8"
    >
      <p className="font-sans text-micro font-semibold uppercase tracking-[0.2em] text-ink/50">
        {item.typeLabel}
      </p>
      <h2 className="mt-3 font-serif text-2xl leading-tight text-ink md:text-3xl">{item.title}</h2>
      {meta.length > 0 ? (
        <p className="mt-2 font-sans text-sm text-ink">{meta.join(' · ')}</p>
      ) : null}
      {item.excerpt ? (
        <p className="mt-4 max-w-2xl font-sans text-sm leading-relaxed text-ink">{item.excerpt}</p>
      ) : null}
      <span className="mt-6 inline-flex items-center gap-1 font-sans text-caption font-semibold uppercase tracking-[0.2em] text-ink">
        View
        <span className="material-symbols-outlined text-base transition-transform group-hover:translate-x-0.5">
          north_east
        </span>
      </span>
    </Link>
  )
}

function ResultsGroup({ label, items }) {
  if (items.length === 0) return null

  return (
    <section className="mt-16 md:mt-20">
      <EditorialLabel>{label}</EditorialLabel>
      <ul className="mt-8 flex flex-col gap-4">
        {items.map((item) => (
          <li key={item.id}>
            <ResultBlock item={item} />
          </li>
        ))}
      </ul>
    </section>
  )
}

export function SearchResultsPage() {
  const [params] = useSearchParams()
  const q = params.get('q')?.trim() ?? ''
  const shouldFocus = params.get('focus') === '1'
  const results = searchCatalog(q)
  const grouped = groupResultsByKind(results)
  const hasQuery = q.length > 0

  return (
    <main className="mx-auto max-w-[1440px] px-6 py-16 md:px-20 md:py-24">
      <div className="mx-auto max-w-[880px]">
        <EditorialLabel>The index</EditorialLabel>
        <h1 className="mt-3 font-serif text-4xl md:text-5xl">Search</h1>

        <div className="mt-10 border-b border-line pb-12 md:pb-14">
          <SearchBar
            key={q}
            variant="page"
            inputId="search-page-input"
            initialQuery={q}
            autoFocus={shouldFocus || !hasQuery}
          />
        </div>

        {!hasQuery ? (
          <p className="mt-12 font-sans text-base leading-relaxed text-ink md:text-lg">
            Search by city, artist, institution, or exhibition.
          </p>
        ) : results.length === 0 ? (
          <p className="mt-12 font-sans text-base leading-relaxed text-ink md:text-lg">
            No results found. Try searching by city, artist, institution, or exhibition.
          </p>
        ) : (
          <>
            <p className="mt-8 font-sans text-sm text-ink">
              {results.length} {results.length === 1 ? 'result' : 'results'} for{' '}
              <span className="font-medium">&ldquo;{q}&rdquo;</span>
            </p>
            <ResultsGroup label="Cities" items={grouped.cities} />
            <ResultsGroup label="Institutions" items={grouped.institutions} />
            <ResultsGroup label="Exhibitions" items={grouped.exhibitions} />
          </>
        )}

        {hasQuery && results.length === 0 ? (
          <Link
            to="/cities"
            className="mt-10 inline-block font-sans text-caption font-semibold uppercase tracking-[0.2em] text-accent-green underline-offset-4 hover:underline"
          >
            Browse city guides
          </Link>
        ) : null}
      </div>
    </main>
  )
}
