/**
 * @param {{
 *   image: string
 *   name: string
 *   role: string
 *   biography: string[]
 *   imageAlt?: string
 * }} props
 */
export function EditorialBoardMemberCard({ image, name, role, biography, imageAlt }) {
  return (
    <article className="flex h-full flex-col">
      <div className="aspect-[4/5] w-full overflow-hidden rounded-2xl shadow-sm">
        <img
          src={image}
          alt={imageAlt ?? name}
          className="h-full w-full object-cover grayscale"
          loading="lazy"
        />
      </div>
      <div className="mt-5 flex flex-1 flex-col">
        <h2 className="font-serif text-2xl leading-tight text-ink md:text-[1.65rem]">{name}</h2>
        <p className="mt-2 font-sans text-sm leading-relaxed text-ink">{role}</p>
        <div className="mt-4 space-y-4 font-sans text-base leading-relaxed text-ink">
          {biography.map((paragraph) => (
            <p key={paragraph.slice(0, 48)}>{paragraph}</p>
          ))}
        </div>
      </div>
    </article>
  )
}
