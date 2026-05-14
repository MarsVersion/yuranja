import { Link } from 'react-router-dom'

const links = [
  { to: '/about', label: 'About' },
  { to: '/cities', label: 'Cities' },
  { to: '/exhibitions', label: 'Exhibitions' },
  { to: '/about#editorial', label: 'Editorial Guide' },
  { to: '/privacy', label: 'Privacy' },
  { to: '/terms', label: 'Terms' },
]

export function Footer() {
  return (
    <footer className="border-t border-line bg-canvas">
      <div className="mx-auto flex max-w-[1440px] flex-col items-start justify-between gap-12 px-6 py-24 md:flex-row md:px-20">
        <div>
          <p className="font-display text-4xl text-ink md:text-5xl">Yuranja</p>
          <p className="mt-3 max-w-sm font-body text-sm font-light tracking-wide text-muted">
            See what matters.
          </p>
          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4">
            {links.map((l) => (
              <Link
                key={l.to + l.label}
                to={l.to}
                className="font-body text-[11px] font-semibold uppercase tracking-[0.2em] text-muted transition-colors hover:text-ink"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex w-full flex-col gap-8 md:max-w-sm md:items-end">
          <div className="flex gap-6 text-muted">
            <span className="material-symbols-outlined cursor-pointer hover:text-ink" aria-hidden>
              map
            </span>
            <span className="material-symbols-outlined cursor-pointer hover:text-ink" aria-hidden>
              search
            </span>
            <span className="material-symbols-outlined cursor-pointer hover:text-ink" aria-hidden>
              museum
            </span>
          </div>
          <div className="w-full md:text-right">
            <p className="font-body text-[11px] font-semibold uppercase tracking-[0.2em] text-muted">
              Newsletter
            </p>
            <div className="mt-3 flex w-full max-w-xs items-center border-b border-ink py-2 md:ml-auto">
              <input
                type="email"
                placeholder="Email address"
                className="w-full border-0 bg-transparent font-body text-[11px] font-semibold uppercase tracking-widest text-ink outline-none placeholder:text-muted focus:ring-0"
              />
              <button type="button" aria-label="Subscribe">
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
          </div>
          <p className="font-body text-[10px] uppercase tracking-[0.25em] text-muted">
            © {new Date().getFullYear()} Yuranja. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
