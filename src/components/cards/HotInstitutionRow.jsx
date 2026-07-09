/**
 * @param {{ institution: import('../data/cityHotInstitutions').HotInstitution }} props
 */
export function HotInstitutionRow({ institution }) {
  const { name, category, website, address, description } = institution

  return (
    <li>
      <a
        href={website}
        target="_blank"
        rel="noreferrer"
        className="group block border-b border-line py-10 transition-colors last:border-b-0 hover:border-ink/40 md:py-12"
      >
        <p className="font-sans text-caption font-bold uppercase tracking-[0.4em] text-white">
          {category}
        </p>
        <h3 className="mt-3 font-serif text-2xl leading-tight md:text-[1.625rem]">{name}</h3>
        <p className="mt-2 font-sans text-sm text-ink/65">{address}</p>
        <p className="mt-4 max-w-2xl font-sans text-sm leading-relaxed text-ink">{description}</p>
        <span className="mt-5 inline-block font-sans text-caption font-semibold uppercase tracking-[0.2em] text-ink/50 transition-colors group-hover:text-ink">
          Official website
        </span>
      </a>
    </li>
  )
}
