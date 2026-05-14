import { PulseBadge } from './PulseBadge'

const ratings = [
  { stars: 1, label: 'Worth Visiting' },
  { stars: 2, label: 'Worth a Detour' },
  { stars: 3, label: 'Worth a Special Journey' },
]

const pulses = ['Hot', 'Trending', 'Quiet', 'Ending Soon']

function Stars({ count }) {
  return (
    <span className="text-accent-orange" aria-hidden>
      {'★'.repeat(count)}
    </span>
  )
}

export function RatingLegend({ className = '', variant = 'default' }) {
  const labelTone = variant === 'onDark' ? 'text-white/90' : 'text-ink'
  const eyebrowTone = variant === 'onDark' ? 'text-white/60' : 'text-muted'
  const dividerTone = variant === 'onDark' ? 'border-white/20' : 'border-line'

  return (
    <div className={className}>
      <ul className="space-y-4">
        {ratings.map((r) => (
          <li key={r.stars} className="flex flex-wrap items-baseline gap-3">
            <Stars count={r.stars} />
            <span className={`font-body text-sm tracking-wide ${labelTone}`}>{r.label}</span>
          </li>
        ))}
      </ul>
      <div className={`mt-10 border-t pt-8 ${dividerTone}`}>
        <p className={`font-body text-[11px] font-semibold uppercase tracking-[0.2em] ${eyebrowTone}`}>
          Pulse
        </p>
        <ul className="mt-4 flex flex-wrap gap-3">
          {pulses.map((p) => (
            <li key={p}>
              <PulseBadge label={p} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
