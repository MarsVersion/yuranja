import { Link } from 'react-router-dom'
import { citiesOfTheMonth } from '../data/cities'
import { AESF_DIGITAL_SAFARI_ARTICLE_PATH } from './AesfDigitalSafariArticle'
import { NEUE_NATIONALGALERIE_ARTICLE_PATH } from './NeueNationalgalerieArticle'
import { THOMAS_ELLER_PAGE_PATH } from './ThomasEllerPage'
import { SOYOUNG_YOON_ARTICLE_PATH } from './SoyoungYoonArticle'
import { aesfYuranja, cattelanExhibition } from '../assets/images.js'
import heroImg from '../assets/WhitneyParty.jpg'
import soyoungYoonImg from '../assets/Soyoung Yoon.png'
import '../styles/home-editorial.css'

const heroCaption =
  'Art Party 2025 at the Whitney Museum of American Art. Photos by Deonté Lee / BFA.com'

const editorialRail = [
  {
    label: 'Conversation',
    title: 'Thomas Eller on Venice',
    text: 'Co-curator of the Mongolian Pavilion at the 2026 Biennale on curating across continents.',
    href: THOMAS_ELLER_PAGE_PATH,
    fullCard: true,
  },
  {
    label: 'This month',
    title: 'What to see this month',
    text: 'Exhibitions closing soon, late openings, and rooms our editors would revisit.',
    href: '/exhibitions',
  },
]

const citiesCollage = [
  { slug: 'berlin', opacity: 1, subtitle: true },
  { slug: 'hong-kong', opacity: 0.18, subtitle: true },
  { slug: 'venice', opacity: 0.22, subtitle: true },
  { slug: 'new-york', opacity: 0.1 },
  { slug: 'tokyo', opacity: 0.18, subtitle: true },
  { slug: 'london', opacity: 0.1 },
  { slug: 'mexico-city', opacity: 0.1 },
]

const cityBySlug = Object.fromEntries(citiesOfTheMonth.map((city) => [city.slug, city]))

export function HomePage() {
  return (
    <div className="home-mag">
      {/* Section 1 — Hero */}
      <section className="home-mag__hero-block">
        <figure className="hero">
          <img src={heroImg} alt="" />
          <div className="hero-overlay">
            <h1 className="home-mag__hero-title">Yuranja</h1>
            <p className="home-mag__hero-lede">
            A guide to art spaces worth the journey.
            </p>
          </div>
        </figure>
        <p className="hero-caption">{heroCaption}</p>
      </section>

      {/* Section 2 — Featured */}
      <section id="featured" className="home-mag__section">
        <div className="home-mag__wrap">
          <div className="home-mag__featured">
            <Link to={NEUE_NATIONALGALERIE_ARTICLE_PATH} className="home-mag__feature-main">
              <p className="home-mag__label">Why go</p>
              <div className="home-mag__feature-main-image">
                <img src={cattelanExhibition} alt="" />
              </div>
              <h2 className="home-mag__feature-main-title">
                Maurizio Cattelan Receives the Preis der Nationalgalerie 2026
              </h2>
              <p className="home-mag__feature-main-sub">
                Italian artist Maurizio Cattelan has been awarded the Preis der Nationalgalerie 2026
                and will present his first major solo exhibition in Germany at the Neue
                Nationalgalerie during Berlin Art Week in September 2026.
              </p>
            </Link>

            <div className="home-mag__feature-rail">
              <article className="home-mag__fragment">
                <p className="home-mag__label">News</p>
                <Link
                  to={SOYOUNG_YOON_ARTICLE_PATH}
                  className="home-mag__fragment-image home-mag__fragment-image--contain"
                >
                  <img src={soyoungYoonImg} alt="Soyoung Yoon" />
                </Link>
                <Link to={SOYOUNG_YOON_ARTICLE_PATH} className="home-mag__fragment-title-link">
                  <h3 className="home-mag__fragment-title">
                    Soyoung Yoon appointed Director of the Independent Study Program
                  </h3>
                </Link>
                <p className="home-mag__fragment-sub">
                  Nearly twenty years after joining the Whitney Museum&apos;s Independent Study
                  Program as a fellow, Soyoung Yoon returns to lead one of the most influential
                  platforms for artists, curators, and writers in contemporary art.
                </p>
                <Link
                  to={SOYOUNG_YOON_ARTICLE_PATH}
                  className="home-mag__link home-mag__read"
                >
                  Read →
                </Link>
              </article>

              <div className="home-mag__fragment-spacer" aria-hidden />

              <article className="home-mag__fragment home-mag__fragment--overlap home-mag__fragment--aesf">
                <p className="home-mag__label">Worth seeing</p>
                <Link
                  to={AESF_DIGITAL_SAFARI_ARTICLE_PATH}
                  className="home-mag__fragment-image"
                >
                  <img src={aesfYuranja} alt="" />
                </Link>
                <Link
                  to={AESF_DIGITAL_SAFARI_ARTICLE_PATH}
                  className="home-mag__fragment-title-link"
                >
                  <h3 className="home-mag__fragment-title">
                    Auditorium Santa Margherita — Emanuele Severino
                  </h3>
                </Link>
                <p className="home-mag__fragment-sub">
                  {`AES+F:\nDigital Safari —\nFables of the Jungle`}
                </p>
                <Link
                  to={AESF_DIGITAL_SAFARI_ARTICLE_PATH}
                  className="home-mag__link home-mag__read"
                >
                  Read →
                </Link>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 — Journal */}
      <section className="home-mag__section home-mag__journal">
        <div className="home-mag__wrap">
          <div className="home-mag__journal-grid">
            <aside>
              <h3 className="home-mag__rail-heading">Journal</h3>
              <div className="home-mag__rail-list">
                {editorialRail.map((item) =>
                  item.fullCard ? (
                    <Link
                      key={item.title}
                      to={item.href}
                      className="home-mag__rail-item home-mag__rail-item--link"
                    >
                      <p className="home-mag__label">{item.label}</p>
                      <h4 className="home-mag__rail-item-title">{item.title}</h4>
                      <p className="home-mag__rail-item-text">{item.text}</p>
                      <span
                        className="home-mag__link"
                        style={{ marginTop: '0.75rem', display: 'inline-block' }}
                      >
                        Read →
                      </span>
                    </Link>
                  ) : (
                    <article key={item.title} className="home-mag__rail-item">
                      <p className="home-mag__label">{item.label}</p>
                      <h3 className="home-mag__rail-item-title">{item.title}</h3>
                      <p className="home-mag__rail-item-text">{item.text}</p>
                      <Link
                        to={item.href}
                        className="home-mag__link"
                        style={{ marginTop: '0.75rem', display: 'inline-block' }}
                      >
                        Read →
                      </Link>
                    </article>
                  ),
                )}
              </div>
            </aside>

            <div>
              <p className="home-mag__label">Editor&apos;s note</p>
              <h2 className="home-mag__journal-main-title">
                How we choose 
                <br />
                what makes the list
              </h2>
              <p className="home-mag__journal-main-text">
                Our editors visit anonymously. We pay attention not only to individual exhibitions
                but also to curatorial vision, quality of presentation, public programs,
                accessibility, and the broader setting that make a place worth seeking out.
              </p>
              <Link to="/about#editorial" className="home-mag__link" style={{ marginTop: '2rem', display: 'inline-block' }}>
                Read the guide →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 — Cities */}
      <section className="home-mag__section home-mag__cities">
        <div className="home-mag__wrap home-mag__cities-collage">
          <p className="home-mag__cities-label">Cities of the Month</p>

          <div className="home-mag__cities-stage">
            <div className="home-mag__cities-typography">
              {citiesCollage.map((entry) => {
                const city = cityBySlug[entry.slug]
                if (!city) return null

                return (
                  <div
                    key={city.slug}
                    className={`home-mag__city-note home-mag__city-note--${city.slug}`}
                    style={{ '--city-opacity': entry.opacity }}
                  >
                    <Link to={`/cities/${city.slug}`} className="home-mag__city-note-link">
                      {city.name}
                    </Link>
                    {entry.subtitle ? (
                      <span className="home-mag__city-note-annotation">{city.district}</span>
                    ) : null}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
