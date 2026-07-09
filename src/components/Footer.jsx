import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CONTACT_EMAIL } from '../config/contact'

const links = [
  { to: '/about', label: 'About' },
  { to: '/cities', label: 'Cities' },
  { to: '/exhibitions', label: 'Exhibitions' },
  { to: '/contact', label: 'Contact' },
  { to: '/about#editorial', label: 'Editorial Guide' },
  { to: '/privacy', label: 'Privacy' },
  { to: '/terms', label: 'Terms' },
]

function NewsletterSignup() {
  const [email, setEmail] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    const trimmed = email.trim()
    if (!trimmed) return

    const subject = encodeURIComponent('Newsletter signup')
    const body = encodeURIComponent(`Please add me to the Yuranja newsletter:\n\n${trimmed}`)
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`
  }

  return (
    <form onSubmit={handleSubmit} className="mt-3 flex w-full max-w-xs items-center border-b border-ink py-2 md:ml-auto">
      <input
        type="email"
        name="email"
        autoComplete="email"
        required
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder="Email address"
        className="w-full border-0 bg-transparent font-sans text-caption font-semibold uppercase tracking-widest text-ink outline-none placeholder:text-ink focus:ring-0"
      />
      <button type="submit" aria-label="Subscribe to newsletter">
        <span className="material-symbols-outlined">arrow_forward</span>
      </button>
    </form>
  )
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="mx-auto flex max-w-[1440px] flex-col items-start justify-between gap-12 px-6 py-24 md:flex-row md:px-20">
        <div>
          <p className="font-serif text-4xl text-ink md:text-5xl">Yuranja</p>
          <p className="mt-3 max-w-sm font-sans text-sm tracking-wide text-ink">
            See what matters.
          </p>
          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4">
            {links.map((l) => (
              <Link
                key={l.to + l.label}
                to={l.to}
                className="font-sans text-caption font-semibold uppercase tracking-[0.2em] text-ink transition-colors hover:text-ink"
              >
                {l.label}
              </Link>
            ))}
            
          </div>
        </div>

        <div className="flex w-full flex-col gap-8 md:max-w-sm md:items-end">
          <div className="w-full md:text-right">
            <p className="font-sans text-caption font-semibold uppercase tracking-[0.2em] text-ink">
              Newsletter
            </p>
            <NewsletterSignup />
          </div>
          <p className="font-sans text-micro uppercase tracking-[0.25em] text-ink">
            © {new Date().getFullYear()} Yuranja. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
