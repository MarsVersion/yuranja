import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation, useSearchParams } from 'react-router-dom'
import { SearchBar } from './SearchBar'

const nav = [
  { to: '/', label: 'Home', end: true },
  { to: '/cities', label: 'Cities' },
  { to: '/exhibitions', label: 'Exhibitions' },
  { to: '/about', label: 'About' },
]

function NavItem({ to, label, end }) {
  return (
    <NavLink
      to={to}
      end={end}
      className={({ isActive }) =>
        [
          'font-sans text-caption font-semibold uppercase tracking-[0.2em] transition-colors',
          isActive ? 'text-ink' : 'text-ink/50 hover:text-ink',
        ].join(' ')
      }
    >
      {label}
    </NavLink>
  )
}

export function Header() {
  const [open, setOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const location = useLocation()
  const [params] = useSearchParams()
  const isHome = location.pathname === '/'
  const headerQuery = location.pathname === '/search' ? (params.get('q') ?? '') : ''

  useEffect(() => {
    if (!searchOpen) return

    function handleKeyDown(e) {
      if (e.key === 'Escape') setSearchOpen(false)
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [searchOpen])

  function closeSearch() {
    setSearchOpen(false)
  }

  return (
    <header className="fixed top-0 z-50 w-full border-b border-line bg-canvas/95 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-[1440px] items-center justify-between gap-4 px-6 py-5 md:gap-6 md:px-20">
        <Link
          to="/"
          className="font-serif shrink-0 text-2xl font-semibold tracking-tight text-ink md:text-3xl"
        >
          Yuranja
        </Link>

        <div className="hidden flex-1 items-center justify-center gap-10 lg:flex">
          {nav.map((item) => (
            <NavItem key={item.to} {...item} />
          ))}
        </div>

        <div className="flex items-center gap-3 md:gap-4">
          {!isHome ? (
            <>
              <div className="hidden md:block">
                <SearchBar
                  key={`header-${headerQuery}`}
                  variant="header"
                  inputId="header-search-input"
                  initialQuery={headerQuery}
                />
              </div>
              <button
                type="button"
                className="text-ink transition-opacity hover:opacity-70 md:hidden"
                aria-label="Search"
                aria-expanded={searchOpen}
                aria-controls="header-search-panel"
                onClick={() => setSearchOpen((v) => !v)}
              >
                <span className="material-symbols-outlined text-[1.75rem]" aria-hidden>
                  search
                </span>
              </button>
            </>
          ) : null}
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

      {!isHome && searchOpen ? (
        <>
          <button
            type="button"
            className="fixed inset-0 z-40 bg-black/15 md:hidden"
            aria-label="Close search"
            onClick={closeSearch}
          />
          <div
            id="header-search-panel"
            className="relative z-50 border-t border-line bg-canvas px-6 py-6 md:hidden"
          >
            <SearchBar
              variant="page"
              inputId="header-mobile-search-input"
              initialQuery={headerQuery}
              autoFocus
              onSubmit={closeSearch}
            />
          </div>
        </>
      ) : null}

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
