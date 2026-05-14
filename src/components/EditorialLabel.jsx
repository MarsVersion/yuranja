/**
 * Small caps label above section titles — shared across the guide.
 * @param {{ children: React.ReactNode; variant?: 'default' | 'onDark' | 'accent'; className?: string }} props
 */
export function EditorialLabel({ children, variant = 'default', className = '' }) {
  const tone =
    variant === 'onDark'
      ? 'text-white/75'
      : variant === 'accent'
        ? 'text-accent-green'
        : 'text-muted'

  return (
    <p
      className={`font-body text-[11px] font-semibold uppercase tracking-[0.28em] ${tone} ${className}`}
    >
      {children}
    </p>
  )
}
