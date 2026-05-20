import { ExhibitionRow } from '../components/cards'
import { EditorialLabel } from '../components/EditorialLabel'
import { exhibitions } from '../data/exhibitions'

export function ExhibitionsPage() {
  return (
    <main className="mx-auto max-w-[1440px] px-6 py-16 md:px-20 md:py-24">
      <EditorialLabel>Current &amp; upcoming</EditorialLabel>
      <h1 className="mt-4 font-serif text-5xl md:text-7xl">Exhibitions</h1>
      <p className="mt-8 max-w-2xl font-sans text-lg text-ink">
        A rolling shortlist of shows we would reroute a day around — not every opening in every
        city, only the ones that feel urgent on the ground.
      </p>
      <div className="mx-auto mt-16 max-w-3xl">
        {exhibitions.map((exhibition) => (
          <ExhibitionRow key={exhibition.slug} exhibition={exhibition} />
        ))}
      </div>
    </main>
  )
}
