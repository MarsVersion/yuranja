export function PulseBadge({ label }) {
  const tone =
    label === 'Hot'
      ? 'bg-accent-orange/15 text-accent-orange ring-accent-orange/30'
      : label === 'Trending'
        ? 'bg-accent-green/10 text-accent-green ring-accent-green/25'
        : label === 'Ending Soon'
          ? 'bg-ink/5 text-ink ring-ink/15'
          : 'bg-muted/10 text-muted ring-muted/25'

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full px-3 py-1 font-sans text-caption font-semibold uppercase tracking-widest ring-1 ring-inset ${tone}`}
    >
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-current opacity-40" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-current" />
      </span>
      {label}
    </span>
  )
}
