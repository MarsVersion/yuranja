import { Link } from 'react-router-dom'
import { PulseBadge } from './PulseBadge'

export function TopPickCard({ title, subtitle, rating, pulse, image, href, large, containImage }) {
  const imageContainerClass = containImage
    ? 'overflow-hidden bg-surface-muted w-full'
    : `overflow-hidden bg-surface-muted ${large ? 'aspect-[4/5]' : 'aspect-square md:aspect-[3/4]'}`

  const imageClass = containImage
    ? 'h-auto w-full object-contain grayscale transition-transform duration-700 group-hover:scale-105'
    : 'h-full w-full object-cover grayscale transition-transform duration-700 group-hover:scale-105'

  return (
    <Link to={href} className="group flex flex-col gap-6">
      <div className={imageContainerClass}>
        <img src={image} alt="" className={imageClass} />
      </div>
      <div className="flex items-start justify-between gap-4 border-t border-ink pt-4">
        <div>
          <p className="font-serif text-xl uppercase md:text-2xl">{title}</p>
          <p className="mt-2 max-w-md font-sans text-sm text-ink">{subtitle}</p>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <span className="text-accent-orange">{'★'.repeat(rating)}</span>
            {pulse ? <PulseBadge label={pulse} /> : null}
          </div>
        </div>
        <span className="material-symbols-outlined shrink-0 text-ink transition-transform group-hover:translate-x-1">
          museum
        </span>
      </div>
    </Link>
  )
}
