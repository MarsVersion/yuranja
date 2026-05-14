import { CityCard } from '../components/cards'
import { EditorialLabel } from '../components/EditorialLabel'
import { featuredCities } from '../data/cities'

export function CityGuidePage() {
  return (
    <main className="mx-auto max-w-[1440px] px-6 py-16 md:px-20 md:py-24">
      <section className="mb-24 md:mb-40">
        <EditorialLabel>The atlas</EditorialLabel>
        <h1 className="mt-4 font-display text-5xl md:text-7xl">Cities</h1>
        <p className="mt-8 max-w-3xl font-body text-lg font-light leading-relaxed text-muted">
          Yuranja maps the rooms that reward a flight: museums with restless programs, galleries
          that treat artists like authors, and project spaces that only exist for a season. Choose
          a city to read the full note.
        </p>
      </section>

      <section className="grid grid-cols-1 gap-x-8 gap-y-20 md:grid-cols-2 lg:grid-cols-3">
        {featuredCities.map((city) => (
          <CityCard key={city.slug} city={city} variant="compact" />
        ))}
      </section>
    </main>
  )
}
