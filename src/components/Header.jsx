import { useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

const nav = [
  { to: '/', label: 'Home', end: true },
  { to: '/cities', label: 'Cities' },
  { to: '/exhibitions', label: 'Exhibitions' },
]

const aboutLinks = [
  { to: '/about', label: 'About', end: true },
  { to: '/about/editorial-board', label: 'Editorial Board' },
]

const navLinkClass = ({ isActive }) =>
  [
    'font-sans text-caption font-semibold uppercase tracking-[0.2em] transition-colors',
    isActive ? 'text-ink' : 'text-ink/50 hover:text-ink',
  ].join(' ')

const dropdownLinkClass = ({ isActive }) =>
  [
    'block px-5 py-3 font-sans text-caption font-semibold uppercase tracking-[0.2em] transition-colors',
    isActive ? 'bg-surface-muted/60 text-ink' : 'text-ink hover:bg-surface-muted/40',
  ].join(' ')

function NavItem({ to, label, end, onNavigate }) {
  return (
    <NavLink to={to} end={end} className={navLinkClass} onClick={onNavigate}>
      {label}
    </NavLink>
  )
}

function AboutNavDropdown({ onNavigate }) {
  const { pathname } = useLocation()
  const isAboutSection =
    pathname === '/about' || pathname.startsWith('/about/')

  return (
    <div className="group relative">
      <NavLink
        to="/about"
        className={({ isActive }) =>
          [
            'inline-flex items-center gap-1 font-sans text-caption font-semibold uppercase tracking-[0.2em] transition-colors',
            isActive || isAboutSection ? 'text-ink' : 'text-ink/50 hover:text-ink',
          ].join(' ')
        }
        aria-haspopup="true"
        aria-expanded={undefined}
      >
        About
        <span
          className="material-symbols-outlined text-base leading-none opacity-60 transition-transform group-hover:rotate-180 lg:group-focus-within:rotate-180"
          aria-hidden
        >
          expand_more
        </span>
      </NavLink>

      <div className="pointer-events-none invisible absolute left-1/2 top-full z-50 w-[15rem] -translate-x-1/2 pt-3 opacity-0 transition-[opacity,visibility] duration-150 group-hover:pointer-events-auto group-hover:visible group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:visible group-focus-within:opacity-100">
        <div className="border border-line bg-canvas py-1 shadow-sm">
          {aboutLinks.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={dropdownLinkClass}
              onClick={onNavigate}
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  )
}

export function Header() {
  const [open, setOpen] = useState(false)
  const [aboutMobileOpen, setAboutMobileOpen] = useState(false)
  const { pathname } = useLocation()
  const isAboutSection =
    pathname === '/about' || pathname.startsWith('/about/')

  function closeMobileNav() {
    setOpen(false)
    setAboutMobileOpen(false)
  }

  return (
    <header className="site-header fixed top-0 z-50 w-full backdrop-blur-sm">
      <nav className="mx-auto flex max-w-[1440px] items-center justify-between gap-4 px-6 py-5 md:gap-6 md:px-20">
        <Link
          to="/"
          className="inline-flex shrink-0 items-center gap-2.5 font-serif text-2xl font-semibold tracking-tight text-ink md:gap-3 md:text-3xl"
        >
          <img
            src={`${import.meta.env.BASE_URL}favicon/favicon.svg`}
            alt=""
            className="h-[30.8px] w-auto md:h-[35.2px]"
            aria-hidden="true"
          />
          Yuranja
        </Link>

        <div className="hidden flex-1 items-center justify-center gap-10 lg:flex">
          {nav.map((item) => (
            <NavItem key={item.to} {...item} />
          ))}
          <AboutNavDropdown />
        </div>

        <button
          type="button"
          className="lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="material-symbols-outlined">menu</span>
        </button>
      </nav>

      <div
        id="mobile-nav"
        className={`border-t border-line bg-canvas px-6 py-6 lg:hidden ${open ? 'block' : 'hidden'}`}
      >
        <div className="mx-auto flex max-w-[1440px] flex-col gap-4">
          {nav.map((item) => (
            <NavItem key={item.to} {...item} onNavigate={closeMobileNav} />
          ))}
          <div>
            <button
              type="button"
              className={[
                'flex w-full items-center justify-between font-sans text-caption font-semibold uppercase tracking-[0.2em] transition-colors',
                isAboutSection ? 'text-ink' : 'text-ink/50',
              ].join(' ')}
              aria-expanded={aboutMobileOpen}
              onClick={() => setAboutMobileOpen((v) => !v)}
            >
              About
              <span className="material-symbols-outlined text-base" aria-hidden>
                {aboutMobileOpen ? 'expand_less' : 'expand_more'}
              </span>
            </button>
            {aboutMobileOpen ? (
              <div className="mt-3 flex flex-col gap-3 border-l border-line pl-6">
                {aboutLinks.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    end={item.end}
                    className={navLinkClass}
                    onClick={closeMobileNav}
                  >
                    {item.label}
                  </NavLink>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </header>
  )
}
