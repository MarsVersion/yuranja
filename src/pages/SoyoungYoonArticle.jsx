import { Link } from 'react-router-dom'
import { EditorialLabel } from '../components/EditorialLabel'
import soyoungYoonImg from '../assets/Soyoung Yoon.png'

export const SOYOUNG_YOON_ARTICLE_PATH = '/journal/soyoung-yoon-independent-study-program'

export function SoyoungYoonArticle() {
  return (
    <article className="page-atmosphere mx-auto max-w-[1440px] px-6 py-16 pb-32 md:px-20 md:py-24 md:pb-40">
      <EditorialLabel>Journal</EditorialLabel>
      <h1 className="mt-4 max-w-4xl font-serif text-4xl leading-tight md:text-6xl">
        Soyoung Yoon appointed Director of the Independent Study Program
      </h1>



      <div className="page-lede mt-10 max-w-3xl space-y-6 font-sans text-base leading-relaxed md:text-lg">
        <p>
          Soyoung Yoon has been appointed Director of the Independent Study Program (ISP) at the
          Whitney Museum of American Art in New York.
        </p>
        <p>
          An art historian, writer, and educator, Yoon previously served as Associate Professor of
          Art History and Visual Studies at Eugene Lang College and Director of the Fine Arts MFA
          Program at Parsons School of Design, The New School. She participated in the ISP as a
          fellow in 2006–07 and returned as faculty from 2012 to 2023.
        </p>
        <p>
          Founded in 1968, the ISP has played a significant role in shaping generations of artists,
          curators, and critics through its emphasis on critical inquiry, collective study, and
          experimental practice. Yoon assumes leadership of the program following its year-long
          suspension in 2025.
        </p>
        <p>
          Reflecting on her appointment, Yoon described the ISP as a place for those who question
          established methodologies and institutional structures, and expressed her commitment to
          supporting new forms of artistic and intellectual engagement.
        </p>
        <p>
          Her appointment marks a new chapter for one of the most influential independent study
          programs in contemporary art.
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
