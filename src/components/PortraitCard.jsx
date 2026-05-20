/**
 * @param {{ image: string, name: string, title: string, imageAlt?: string }} props
 */
export function PortraitCard({ image, name, title, imageAlt }) {
  return (
    <figure className="flex flex-col">
      <div className="aspect-[4/5] w-full overflow-hidden rounded-2xl shadow-sm sm:max-w-[280px]">
        <img
          src={image}
          alt={imageAlt ?? name}
          className="h-full w-full object-cover grayscale"
          loading="lazy"
        />
      </div>
      <figcaption className="mt-4 max-w-[280px]">
        <p className="font-serif text-xl leading-tight text-ink">{name}</p>
        <p className="mt-2 font-sans text-sm leading-relaxed text-ink">{title}</p>
      </figcaption>
    </figure>
  )
}
