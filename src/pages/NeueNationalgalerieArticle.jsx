import { Link } from 'react-router-dom'
import { EditorialLabel } from '../components/EditorialLabel'
import cattelanHeroImg from '../assets/MaurizioCattelan NNG.jpg'

export const NEUE_NATIONALGALERIE_ARTICLE_PATH = '/spaces/neue-nationalgalerie'

export function NeueNationalgalerieArticle() {
  return (
    <article className="page-atmosphere mx-auto max-w-[1440px] px-6 py-16 pb-32 md:px-20 md:py-24 md:pb-40">
      <figure className="w-full overflow-hidden bg-surface-muted">
        <img
          src={cattelanHeroImg}
          alt="Maurizio Cattelan at Neue Nationalgalerie, Berlin"
          className="h-auto w-full object-contain"
        />
        <figcaption className="mt-3 font-sans text-sm leading-snug text-ink/70">
          Maurizio Cattelan, Neue Nationalgalerie, Berlin, © Peter Rigaud, 2025
        </figcaption>
      </figure>

      <EditorialLabel className="mt-10">Why go</EditorialLabel>
      <h1 className="mt-4 max-w-4xl font-serif text-4xl leading-tight md:text-6xl">
        Maurizio Cattelan Receives the Preis der Nationalgalerie 2026
      </h1>

      <div className="page-lede mt-10 max-w-[730px] space-y-6 font-sans text-base leading-[1.77] md:text-lg">
        <p>
          Italian artist Maurizio Cattelan has been awarded the Preis der Nationalgalerie 2026 and
          will present his first major solo exhibition in Germany at the Neue Nationalgalerie
          during Berlin Art Week in September 2026.
        </p>
        <p>
          Since the early 1990s, Cattelan has occupied a singular position within contemporary art.
          Working across sculpture, installation, and conceptual practice, he employs humour,
          provocation, and moral ambiguity to address themes of power, religion, collective memory,
          and social responsibility. Works such as <em>La Nona Ora</em> (1999), depicting Pope
          John Paul II struck by a meteorite, and <em>Him</em> (2001), a kneeling schoolboy bearing
          the face of Adolf Hitler, have become iconic examples of an artistic language that
          oscillates between tragedy and satire.
        </p>
        <p>
          The jury—composed of Emma Lavigne, Sam Keller, and Klaus Biesenbach—emphasized
          Cattelan&apos;s lasting impact on Berlin&apos;s artistic landscape following his role as
          co-curator of the 4th Berlin Biennale in 2006. Two decades later, his return to the city
          is seen as an opportunity to reconsider questions of remembrance, institutional authority,
          and political polarization through an artistic practice grounded in what has been described
          as &ldquo;comic existentialism.&rdquo;
        </p>
        <p>
          The exhibition also marks a new chapter for the Preis der Nationalgalerie. Celebrating its
          twenty-fifth anniversary, the prize will adopt a revised format from 2026 onward,
          honouring internationally significant artists whose work has not yet been comprehensively
          presented in Berlin through dedicated solo exhibitions at the Neue Nationalgalerie.
        </p>
        <p>
          Curated by Lisa Botti in collaboration with Klaus Biesenbach, the exhibition will open in
          September 2026 alongside an award ceremony during Berlin Art Week.
        </p>
      </div>

      <p className="mt-8 max-w-[730px] font-sans text-base md:text-lg">
        <a
          href="https://www.smb.museum/ausstellungen/detail/maurizio-cattelan/"
          className="page-link underline underline-offset-4 transition-opacity hover:opacity-75"
          target="_blank"
          rel="noreferrer"
        >
          smb.museum
        </a>
      </p>

      <Link
        to="/"
        className="page-link mt-12 inline-block font-sans text-caption font-semibold uppercase tracking-[0.2em]"
      >
        ← Back to home
      </Link>
    </article>
  )
}
