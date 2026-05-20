export function AboutPage() {
  return (
    <div className="mx-auto max-w-[1440px] px-6 py-16 pb-32 md:px-20 md:py-24 md:pb-40">
      <h1 className="font-serif text-5xl md:text-7xl">About Yuranja</h1>
      <p className="mt-8 max-w-2xl font-sans text-lg leading-relaxed text-ink">
        Yuranja is an editorial guide to museums, galleries, and exhibitions worth seeing. It
        helps travelers and locals answer a simple question: in this city, which art spaces are
        worth visiting?
      </p>

      <section id="editorial" className="mt-24 max-w-3xl scroll-mt-28 border-t border-line pt-16">
        <h2 className="font-serif text-3xl md:text-4xl">Editorial guide</h2>
        <p className="mt-6 font-sans text-base leading-relaxed text-ink">
          Editors visit anonymously, pay for their own tickets when required, and return on
          weekends to see how a space feels when it is crowded. Ratings describe how far we would
          travel; pulse captures tempo — what feels electric, calm, or about to close.
        </p>
      </section>

      <section id="initiated-by" className="mt-24 max-w-3xl scroll-mt-28 border-t border-line pt-16">
        <h2 className="font-serif text-3xl md:text-4xl">Initiated by</h2>
        <div className="mt-6 flex flex-col gap-6 font-sans text-base leading-relaxed text-ink">
          <p>
            Yuranja is developed as an independent editorial practice by Jung Me Chai, a curator,
            writer, and creative technologist working across contemporary art, technology, and
            research.
          </p>
          <p>
            She is a curator and former director of DISKURS Berlin. Over the past two decades, she
            has curated exhibitions and collaborated with museums, biennials, and institutions
            across Europe and Korea.
          </p>
          <p>
            For more than twenty years, she also wrote for a range of art magazines and
            publications, shaping a practice grounded in close looking, critical judgment, and clear
            communication.
          </p>
          <p>
            She is also the creator of Busy Mars, an AI-based platform for discovering artists,
            curators, and cultural practitioners.
          </p>
          <p>
            Yuranja is shaped through a hybrid mode of authorship: a single curatorial perspective,
            extended through collaboration with AI systems as tools for research, structuring, and
            development.
          </p>
          <p>
            This approach does not replace editorial judgment — it expands its scale and capacity.
          </p>
          <p>
            At its core, Yuranja remains human: defined by decisions about what to select, connect,
            and make visible.
          </p>
        </div>
      </section>
    </div>
  )
}
