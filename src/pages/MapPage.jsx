export function MapPage() {
  return (
    <main className="mx-auto max-w-[1440px] px-6 py-16 md:px-20 md:py-24">
      <p className="font-sans text-caption font-semibold uppercase tracking-[0.25em] text-muted">
        Atlas
      </p>
      <h1 className="mt-4 font-serif text-5xl md:text-7xl">Map</h1>
      <p className="mt-8 max-w-2xl font-sans text-lg font-light text-muted">
        The interactive atlas is on its way. For now, jump into a city guide — every Yuranja pick
        includes neighborhood context so you can plan on foot.
      </p>
      <div className="mt-16 flex aspect-[16/9] max-w-4xl items-center justify-center border border-dashed border-line bg-surface-muted/50">
        <div className="flex flex-col items-center gap-4 text-center">
          <span className="material-symbols-outlined text-5xl text-muted">map</span>
          <p className="font-sans text-sm text-muted">Map preview · launching next</p>
        </div>
      </div>
    </main>
  )
}
