import { Link } from 'react-router-dom'
import { topPicks } from '../data/cities'
import { aesfYuranja, cattelanExhibition } from '../assets/images.js'
import heroImg from '../assets/WhitneyParty.jpg'
import soyoungYoonImg from '../assets/Soyoung Yoon.png'
import '../styles/home-editorial.css'

const heroCaption =
  'Art Party 2025 at the Whitney Museum of American Art. Photos by Deonté Lee / BFA.com'

const editorialRail = [
  {
    label: 'News',
    title: 'Soyoung Yoon appointed Director of ISP',
    text: 'The Whitney Independent Study Program enters a new chapter under Yoon’s leadership.',
    href: '/soyoung-yoon-whitney-isp',
  },
  {
    label: "Editor's note",
    title: 'Thomas Eller on Venice',
    text: 'Co-curator of the Mongolian Pavilion at the 2026 Biennale on curating across continents.',
    href: '/about/editorial-board',
  },
  {
    label: 'Worth seeing',
    title: 'What to see this week',
    text: 'Exhibitions closing soon, late openings, and rooms our editors would revisit.',
    href: '/exhibitions',
  },
]

const cities = [
  { name: 'Berlin', href: '/cities/berlin' },
  { name: 'Seoul', href: '/cities/seoul' },
  { name: 'Venice', href: '/exhibitions' },
  { name: 'New York', href: '/cities/new-york' },
]

export function HomePage() {
  const [neueNationalgalerie, auditorium] = topPicks

  return (
    <div className="home-mag">
      {/* Section 1 — Hero */}
      <section className="home-mag__hero-block">
        <figure className="hero">
          <img src={heroImg} alt="" />
          <div className="hero-overlay">
            <h1 className="home-mag__hero-title">Yuranja</h1>
            <p className="home-mag__hero-lede">
              A guide to art spaces genuinely worth your time.
            </p>
          </div>
        </figure>
        <p className="hero-caption">{heroCaption}</p>
      </section>

      {/* Section 2 — Featured */}
      <section id="featured" className="home-mag__section">
        <div className="home-mag__wrap">
          <div className="home-mag__featured">
            <Link to={neueNationalgalerie.href} className="home-mag__feature-main">
              <p className="home-mag__label">Why go</p>
              <div className="home-mag__feature-main-image">
                <img src={cattelanExhibition} alt="" />
              </div>
              <h2 className="home-mag__feature-main-title">Neue Nationalgalerie</h2>
              <p className="home-mag__feature-main-sub">
                {`Preis der Nationalgalerie 2026:\nMaurizio Cattelan`}
              </p>
            </Link>

            <div className="home-mag__feature-rail">
              <Link to="/soyoung-yoon-whitney-isp" className="home-mag__fragment">
                <p className="home-mag__label">News</p>
                <div className="home-mag__fragment-image home-mag__fragment-image--contain">
                  <img src={soyoungYoonImg} alt="Soyoung Yoon" />
                </div>
                <h3 className="home-mag__fragment-title">
                  Soyoung Yoon appointed Director of the Independent Study Program
                </h3>
                <p className="home-mag__fragment-sub">
                  Yoon returns to the Whitney ISP after serving as fellow and faculty — a new
                  chapter for one of contemporary art&apos;s most influential study programs.
                </p>
                <span className="home-mag__link" style={{ marginTop: '0.875rem', display: 'inline-block' }}>
                  Read →
                </span>
              </Link>

              <div className="home-mag__fragment-spacer" aria-hidden />

              <Link
                to={auditorium.href}
                className="home-mag__fragment home-mag__fragment--overlap home-mag__fragment--aesf"
              >
                <p className="home-mag__label">Worth seeing</p>
                <div className="home-mag__fragment-image">
                  <img src={aesfYuranja} alt="" />
                </div>
                <h3 className="home-mag__fragment-title">
                  Auditorium Santa Margherita — Emanuele Severino
                </h3>
                <p className="home-mag__fragment-sub">
                  {`AES+F:\nDigital Safari —\nFables of the Jungle`}
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 — Journal */}
      <section className="home-mag__section home-mag__journal">
        <div className="home-mag__wrap">
          <div className="home-mag__journal-grid">
            <aside>
              <h2 className="home-mag__rail-heading">Editorial notes</h2>
              <div className="home-mag__rail-list">
                {editorialRail.map((item) => (
                  <article key={item.title} className="home-mag__rail-item">
                    <p className="home-mag__label">{item.label}</p>
                    <h3 className="home-mag__rail-item-title">{item.title}</h3>
                    <p className="home-mag__rail-item-text">{item.text}</p>
                    <Link to={item.href} className="home-mag__link" style={{ marginTop: '0.75rem', display: 'inline-block' }}>
                      Read →
                    </Link>
                  </article>
                ))}
              </div>
            </aside>

            <div>
              <p className="home-mag__label">Editor&apos;s note</p>
              <h2 className="home-mag__journal-main-title">
                How we choose what makes the list
              </h2>
              <p className="home-mag__journal-main-text">
                {`Our editors visit anonymously, return on weekends, and speak with artists and guards alike.\n\nIf a place appears here, it earned its position through experience, not catalogue copy.`}
              </p>
              <Link to="/about#editorial" className="home-mag__link" style={{ marginTop: '2rem', display: 'inline-block' }}>
                Read the guide →
              </Link>

              <article className="home-mag__journal-block">
                <p className="home-mag__label">Featured exhibition</p>
                <h3 className="home-mag__journal-block-title">Night Rooms</h3>
                <p className="home-mag__body" style={{ marginTop: '1rem', maxWidth: '32rem', whiteSpace: 'pre-line' }}>
                  {`A citywide trail of intimate installations —\nsound, light and sculpture in spaces\nnot built as museums.`}
                </p>
                <Link to="/exhibitions/night-rooms" className="home-mag__link" style={{ marginTop: '1.25rem', display: 'inline-block' }}>
                  View trail →
                </Link>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 — Cities */}
      <section className="home-mag__section home-mag__cities">
        <div className="home-mag__wrap">
          {cities.map((city) => (
            <Link key={city.name} to={city.href} className="home-mag__city">
              {city.name}
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
