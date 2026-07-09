export function LegalPage({ title, lastUpdated, children }) {
  return (
    <main className="mx-auto max-w-[720px] px-6 py-16 md:py-24">
      <h1 className="font-serif text-4xl md:text-5xl">{title}</h1>
      {lastUpdated && (
        <p className="mt-4 font-sans text-sm leading-relaxed text-ink">{lastUpdated}</p>
      )}
      <div className="legal-content mt-8 space-y-10 font-sans text-sm leading-relaxed text-ink [&_section>p+p]:mt-3 [&_section>h2+p]:mt-3">
        {children}
      </div>
    </main>
  )
}
