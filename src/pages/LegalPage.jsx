export function LegalPage({ title, body }) {
  return (
    <main className="mx-auto max-w-[720px] px-6 py-16 md:py-24">
      <h1 className="font-serif text-4xl md:text-5xl">{title}</h1>
      <p className="mt-8 font-sans text-sm leading-relaxed text-muted">{body}</p>
    </main>
  )
}
