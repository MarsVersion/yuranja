import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const nav = [
  { to: '/', label: 'Home', end: true },
  { to: '/cities', label: 'Cities' },
  { to: '/exhibitions', label: 'Exhibitions' },
  { to: '/map', label: 'Map' },
  { to: '/about', label: 'About' },
]

function NavItem({ to, label, end }) {
  return (
    <NavLink
      to={to}
      end={end}
      className={({ isActive }) =>
        [
          'font-body text-[11px] font-semibold uppercase tracking-[0.2em] transition-colors',
          isActive ? 'text-ink' : 'text-muted hover:text-ink',
        ].join(' ')
      }
    >
      {label}
    </NavLink>
  )
}

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 z-50 w-full border-b border-line bg-canvas/95 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-[1440px] items-center justify-between gap-6 px-6 py-5 md:px-20">
        <Link
          to="/"
          className="font-display shrink-0 text-2xl font-semibold tracking-tight text-ink md:text-3xl"
        >
          Yuranja
        </Link>

        <div className="hidden flex-1 items-center justify-center gap-10 lg:flex">
          {nav.map((item) => (
            <NavItem key={item.to} {...item} />
          ))}
        </div>

        <div className="flex items-center gap-4 md:gap-5">
          <Link
            to="/search"
            className="text-muted transition-opacity hover:opacity-70"
            aria-label="Search"
          >
            <span className="material-symbols-outlined" aria-hidden>
              search
            </span>
          </Link>
          <Link
            to="/map"
            className="hidden text-muted transition-opacity hover:opacity-70 sm:block"
            aria-label="Map"
          >
            <span className="material-symbols-outlined" aria-hidden>
              map
            </span>
          </Link>
          <button
            type="button"
            className="lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
      </nav>

      <div
        id="mobile-nav"
        className={`border-t border-line bg-canvas px-6 py-6 lg:hidden ${open ? 'block' : 'hidden'}`}
      >
        <div className="mx-auto flex max-w-[1440px] flex-col gap-4">
          {nav.map((item) => (
            <NavItem key={item.to} {...item} />
          ))}
        </div>
      </div>
    </header>
  )
}
