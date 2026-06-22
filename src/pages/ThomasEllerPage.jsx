import { Link } from 'react-router-dom'
import { EditorialLabel } from '../components/EditorialLabel'
import { thomasEller } from '../assets/people/images.js'

export const THOMAS_ELLER_PAGE_PATH = '/people/thomas-eller'
export const THOMAS_ELLER_VENICE_CONVERSATION_PATH = '/journal/thomas-eller-venice'

const linkClass = 'page-link underline underline-offset-4 transition-opacity hover:opacity-75'

export function ThomasEllerPage() {
  return (
    <article className="page-atmosphere mx-auto max-w-[1440px] px-6 py-16 pb-32 md:px-20 md:py-24 md:pb-40">
      <figure className="w-1/2 overflow-hidden bg-surface-muted">
        <img
          src={thomasEller}
          alt="Thomas Eller"
          className="h-auto w-full object-contain"
        />
        <figcaption className="mt-3 font-sans text-sm italic leading-snug text-ink/70">
        © Thomas Eller, curator, writer and artist. Courtesy of the artist.
        </figcaption>
      </figure>

      <EditorialLabel className="mt-10">People</EditorialLabel>
      <h1 className="mt-4 max-w-4xl font-serif text-4xl leading-tight md:text-6xl">
        Thomas Eller
      </h1>

      <div className="page-lede mt-10 max-w-[730px] space-y-6 font-sans text-base leading-[1.77] md:text-lg">
        <p>
          German curator, writer, and artist Thomas Eller has pursued a multifaceted career spanning
          Europe, the United States, and Asia. Trained initially as an artist, he has consistently
          worked across disciplinary boundaries, combining artistic practice, curatorial
          experimentation, and editorial engagement.
        </p>
        <p>
          Eller first gained wider recognition as the founder of <em>artnet Magazine</em>, helping
          to establish one of the earliest online platforms dedicated to contemporary art criticism
          and cultural commentary. Between 2008 and 2010, he served as Artistic Director of the
          Temporäre Kunsthalle Berlin, an influential institution situated on Schlossplatz that
          became a site for debate on the role of public art institutions in a reunified Berlin.
        </p>
        <p>
          His engagement with Asia has been equally significant. After relocating to Beijing in
          2014, Eller founded Gallery Weekend Beijing and became President of <em>Ran Dian</em>, a
          Hong Kong–based publication devoted to contemporary art in China and beyond. From 2019 to
          2021 he directed the Taoxichuan China Arts &amp; Sciences project in Jingdezhen and worked
          as an associate researcher at Tsinghua University.
        </p>
        <p>
          Parallel to his curatorial and editorial activities, Eller has maintained an artistic
          practice centred on photography, moving images, sculpture, and questions of perception.
          Since 2011, he has developed the ongoing body of work <em>The White Male Complex</em>,
          examining identity, philosophy, religion, and social structures through fragmented
          narratives and manipulated imagery.
        </p>
        <p>
          In 2026, Eller returned to the Venice Biennale as co-curator of the Mongolian Pavilion
          together with Uranchimeg Tsultem. Titled{' '}
          <em>Entanglements: Connectivities Across Borders</em>, the exhibition brings together
          works by Nomin Bold, Gerelkhuu Ganbold, Tuguldur Yondonjamts, and Dorjderem Davaa,
          exploring historical and contemporary exchanges across Eurasia. The pavilion proposes
          Mongolia not as a fixed territory but as a space of connectivity, inclusion, and
          transformation.
        </p>
        <p>
          Moving between artistic production, institutional critique, publishing, and transnational
          cultural mediation, Thomas Eller exemplifies a generation of practitioners for whom art
          making and intellectual inquiry remain inseparable.
        </p>
      </div>

      <section className="page-divider mt-16 max-w-[730px] border-t pt-16">
        <h2 className="font-serif text-2xl leading-snug md:text-3xl">Related</h2>
        <p className="mt-6 font-sans text-base md:text-lg">
          <Link to={THOMAS_ELLER_VENICE_CONVERSATION_PATH} className={linkClass}>
            Conversation – Thomas Eller on Venice
          </Link>
        </p>
      </section>

      <Link
        to="/people"
        className="page-link mt-12 inline-block font-sans text-caption font-semibold uppercase tracking-[0.2em]"
      >
        ← Back to People
      </Link>
    </article>
  )
}
