export function AboutPage() {
  return (
    <main className="mx-auto max-w-[1440px] px-6 py-16 md:px-20 md:py-24">
      <h1 className="font-serif text-5xl md:text-7xl">About Yuranja</h1>
      <p className="mt-8 max-w-2xl font-sans text-lg font-light text-muted">
        Yuranja is a Michelin-style guide for art. We help travelers and locals answer one question:
        in this city, which spaces are genuinely worth your time?
      </p>
      <section id="editorial" className="mt-24 max-w-3xl scroll-mt-28 border-t border-line pt-16">
        <h2 className="font-serif text-3xl md:text-4xl">Editorial guide</h2>
        <p className="mt-6 font-sans text-base font-light leading-relaxed text-muted">
          Editors visit anonymously, pay for their own tickets when required, and return on
          weekends to see how a space feels when it is crowded. Ratings describe how far we would
          travel; pulse captures tempo — what feels electric, calm, or about to close.
        </p>
      </section>
    </main>
  )
}
