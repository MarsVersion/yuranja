import { Link } from 'react-router-dom'
import { EditorialLabel } from '../components/EditorialLabel'
import aesfHeroImg from '../assets/AESF Yuranja.png'

export const AESF_DIGITAL_SAFARI_ARTICLE_PATH = '/journal/aes-f-digital-safari'

export function AesfDigitalSafariArticle() {
  return (
    <article className="page-atmosphere mx-auto max-w-[1440px] px-6 py-16 pb-32 md:px-20 md:py-24 md:pb-40">
      <figure className="w-full overflow-hidden bg-surface-muted">
        <img
          src={aesfHeroImg}
          alt="AES+F, Digital Safari: Fables of the Jungle"
          className="h-auto w-full object-contain"
        />
        <figcaption className="mt-3 font-sans text-sm leading-snug text-ink/70">
          © AES+F
        </figcaption>
      </figure>

      <EditorialLabel className="mt-10">Artist Profile</EditorialLabel>
      <h1 className="mt-4 max-w-4xl font-serif text-4xl leading-tight md:text-6xl">AES+F</h1>
      <h2 className="mt-3 max-w-4xl font-serif text-2xl leading-snug md:text-3xl">
        Digital Safari: Fables of the Jungle
      </h2>

      <div className="page-lede mt-10 max-w-[730px] space-y-6 font-sans text-base leading-[1.77] md:text-lg">
        <p>
          AES+F&apos;s <em>Digital Safari: Fables of the Jungle</em> unfolds as a sumptuous and
          unsettling fable set within a digitally fabricated rainforest. Six young performers appear
          as animal–human hybrids: Wolf, Tiger, Vulture, Black Jaguar, Pallas&apos;s Cat, and Hyena.
          Wearing elaborate masks and couture-like costumes, they inhabit a world suspended between
          ritual and spectacle, seduction and threat. Here, disguise does not conceal identity but
          amplifies it, transforming fragile bodies into figures of authority and desire.
        </p>
        <p>
          Founded in Moscow in 1987, AES+F is a collective consisting of Tatiana Arzamasova, Lev
          Evzovich, Evgeny Svyatsky, and Vladimir Fridkes. Renowned for large-scale video
          installations and hyperreal digital tableaux, the group combines references from classical
          painting, fashion photography, mythology, and contemporary media culture. Their works
          frequently explore beauty, violence, consumerism, and the ambiguous relationship between
          fantasy and reality.
        </p>
        <p>
          In <em>Digital Safari</em>, the rainforest functions less as a natural habitat than as a
          theatrical setting. The performers evoke mythological creatures and allegorical figures,
          while their poised gestures and frontal gazes recall the artificial elegance of mannerist
          portraiture. Nature itself appears staged, a luxuriant backdrop populated by creatures
          that seem at once ancient and entirely contemporary.
        </p>
        <p>
          Sound plays a crucial role. Mozart&apos;s <em>Lacrimosa</em> from the <em>Requiem</em> is
          reinterpreted by composer Vladimir Rannev for a mechanical music box, turning a familiar
          lament into an uncanny loop of repetition. Beauty and mourning become inseparable,
          suggesting a contemporary vanitas in which luxury, spectacle, and vulnerability coexist.
        </p>
        <p>
          Rather than offering an ecological warning or a straightforward narrative,{' '}
          <em>Digital Safari</em> presents a world of contradictions. Human and animal, innocence
          and aggression, intimacy and performance merge into a dazzling masquerade that reflects
          the ambiguities of life in an age of digital images and environmental uncertainty.
        </p>
      </div>

      <Link
        to="/"
        className="page-link mt-12 inline-block font-sans text-caption font-semibold uppercase tracking-[0.2em]"
      >
        ← Back to home
      </Link>
    </article>
  )
}
