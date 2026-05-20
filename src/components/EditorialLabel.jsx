/**
 * Small caps label above section titles — shared across the guide.
 * @param {{ children: React.ReactNode; variant?: 'default' | 'onDark' | 'hero' | 'accent'; className?: string }} props
 */
export function EditorialLabel({ children, variant = 'default', className = '' }) {
  const tone =
    variant === 'onDark'
      ? 'text-white/75'
      : variant === 'hero'
        ? 'text-hero-lavender'
        : variant === 'accent'
          ? 'text-accent-green'
          : 'text-ink'

  return (
    <p
      className={`font-sans text-caption font-semibold uppercase tracking-[0.28em] ${tone} ${className}`}
    >
      {children}
    </p>
  )
}
