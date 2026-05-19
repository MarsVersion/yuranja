import { ExhibitionRow } from '../components/cards'

const rows = [
  {
    title: 'Night Rooms',
    venue: 'Multi-venue · Berlin',
    dates: 'Through Aug 31',
  },
  {
    title: 'Han River Studies',
    venue: 'Leeum Museum of Art · Seoul',
    dates: 'Through Nov 2',
  },
  {
    title: 'Nocturnes: Sound and Shadow',
    venue: 'Whitney Museum · New York',
    dates: 'Through Jan 12, 2027',
  },
]

export function ExhibitionsPage() {
  return (
    <main className="mx-auto max-w-[1440px] px-6 py-16 md:px-20 md:py-24">
      <p className="font-sans text-caption font-semibold uppercase tracking-[0.25em] text-muted">
        Current &amp; upcoming
      </p>
      <h1 className="mt-4 font-serif text-5xl md:text-7xl">Exhibitions</h1>
      <p className="mt-8 max-w-2xl font-sans text-lg font-light text-muted">
        A rolling shortlist of shows we would reroute a day around — not every opening in every
        city, only the ones that feel urgent on the ground.
      </p>
      <div className="mx-auto mt-16 max-w-3xl">
        {rows.map((r) => (
          <ExhibitionRow key={r.title} {...r} />
        ))}
      </div>
    </main>
  )
}
