import { ExhibitionRow } from '../components/cards'
import { EditorialLabel } from '../components/EditorialLabel'
import { exhibitions } from '../data/exhibitions'
import { useBackgroundVideo } from '../hooks/useBackgroundVideo'
import '../styles/exhibitions-index.css'

const EXHIBITIONS_VIDEO_SRC = `${import.meta.env.BASE_URL}videos/red-woman.mp4`

export function ExhibitionsPage() {
  const videoRef = useBackgroundVideo(EXHIBITIONS_VIDEO_SRC, 0.5)

  return (
    <div className="exhibitions-index">
      <div className="exhibitions-index__media" aria-hidden="true">
        <video
          ref={videoRef}
          className="exhibitions-index__video"
          src={EXHIBITIONS_VIDEO_SRC}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          disablePictureInPicture
          disableRemotePlayback
        >
          <source src={EXHIBITIONS_VIDEO_SRC} type="video/mp4" />
        </video>
        <div className="exhibitions-index__overlay" />
      </div>

      <div className="exhibitions-index__content mx-auto max-w-[1440px] px-6 md:px-20">
        <section className="exhibitions-index__hero">
          <EditorialLabel variant="onDark">The guide</EditorialLabel>
          <h1 className="mt-4 font-serif text-5xl text-white md:text-7xl">Exhibitions</h1>
          <p className="mt-8 max-w-3xl font-sans text-lg leading-relaxed text-white/88">
            Selected exhibitions, museums, galleries, and project spaces worth seeing — chosen for
            visitors who want more than a random pin on Google Maps.
          </p>
        </section>

        <section className="exhibitions-index__list" aria-label="Exhibition index">
          {exhibitions.map((exhibition) => (
            <ExhibitionRow key={exhibition.slug} exhibition={exhibition} />
          ))}
        </section>
      </div>
    </div>
  )
}
