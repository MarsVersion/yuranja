import { ExhibitionCard } from '../components/cards'
import { EditorialLabel } from '../components/EditorialLabel'
import { exhibitions } from '../data/exhibitions'

export function ExhibitionsPage() {
  return (
    <main className="page-atmosphere mx-auto max-w-[1440px] px-6 py-16 md:px-20 md:py-24">
      <section className="mb-24 md:mb-40">
        <EditorialLabel>The guide</EditorialLabel>
        <h1 className="mt-4 font-serif text-5xl md:text-7xl">Exhibitions</h1>
        <p className="page-lede mt-8 max-w-3xl font-sans text-lg leading-relaxed">
          Selected exhibitions, museums, galleries, and project spaces worth seeing — chosen for
          visitors who want more than a random pin on Google Maps.
        </p>
      </section>

      <section className="grid grid-cols-1 gap-x-8 gap-y-20 md:grid-cols-2 lg:grid-cols-3">
        {exhibitions.map((exhibition) => (
          <ExhibitionCard key={exhibition.slug} exhibition={exhibition} variant="compact" />
        ))}
      </section>
    </main>
  )
}
