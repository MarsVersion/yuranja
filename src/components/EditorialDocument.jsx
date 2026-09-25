import { Link } from 'react-router-dom'
import { EditorialLabel } from './EditorialLabel'

/**
 * Renders a canonical editorial document for the human magazine UI.
 * Content comes from src/data/editorial/documents.js — same source as the crawler layer.
 *
 * @param {{
 *   document: import('../data/editorial/documents.js').editorialDocuments[number]
 *   imageSrc?: string
 *   imageClassName?: string
 * }} props
 */
export function EditorialDocument({ document: doc, imageSrc, imageClassName = 'w-1/2' }) {
  const heroSrc = imageSrc || doc.figure?.src

  return (
    <article className="page-atmosphere mx-auto max-w-[1440px] px-6 py-16 pb-32 md:px-20 md:py-24 md:pb-40">
      {heroSrc && doc.figure ? (
        <figure className={`${imageClassName} overflow-hidden bg-surface-muted`}>
          <img
            src={heroSrc}
            alt={doc.figure.alt ?? doc.title}
            className="h-auto w-full object-contain"
            loading={doc.figure.eager === false ? 'lazy' : 'eager'}
          />
          {doc.figure.caption || doc.figure.credit ? (
            <figcaption
              className={`mt-3 font-sans text-sm leading-snug text-ink/70${
                doc.figure.captionItalic ? ' italic' : ''
              }`}
            >
              {doc.figure.caption}
              {doc.figure.caption && doc.figure.credit && doc.figure.caption !== doc.figure.credit
                ? ` ${doc.figure.credit}`
                : null}
            </figcaption>
          ) : null}
        </figure>
      ) : null}

      {doc.label === 'About' && doc.backLink ? (
        <p className="page-label-accent font-sans text-caption font-semibold uppercase tracking-[0.2em]">
          <Link
            to={doc.backLink.to}
            className="page-link no-underline underline-offset-4 transition-opacity hover:underline hover:opacity-75"
          >
            {doc.backLink.label}
          </Link>
        </p>
      ) : doc.label ? (
        <EditorialLabel className={heroSrc ? 'mt-10' : undefined}>{doc.label}</EditorialLabel>
      ) : null}

      <h1
        className={`max-w-4xl font-serif leading-tight ${
          doc.path === '/people' || doc.path === '/about/editorial-board'
            ? 'mt-4 text-5xl md:text-7xl'
            : 'mt-4 text-4xl md:text-6xl'
        }`}
      >
        {doc.title}
      </h1>

      {doc.subtitle ? (
        <p className="mt-3 max-w-4xl font-serif text-2xl leading-snug md:text-3xl">{doc.subtitle}</p>
      ) : null}

      <div
        className={`mt-10 max-w-[730px] space-y-6 font-sans text-base leading-[1.77] md:text-lg ${
          doc.path === '/people' || doc.path === '/about/editorial-board'
            ? 'page-lede mt-8 max-w-3xl leading-relaxed'
            : 'page-lede'
        } ${doc.path === '/journal/soyoung-yoon-independent-study-program' ? 'max-w-3xl' : ''}`}
      >
        {doc.blocks.map((block, index) => (
          <BlockKey key={`${doc.id}-${index}`} block={block} />
        ))}
      </div>

      {doc.related?.length ? (
        <section className="page-divider mt-16 max-w-[730px] border-t pt-16">
          <h2 className="font-serif text-2xl leading-snug md:text-3xl">Related</h2>
          {doc.related.map((item) => (
            <p key={item.href} className="mt-6 font-sans text-base md:text-lg">
              <Link
                to={item.href}
                className="page-link underline underline-offset-4 transition-opacity hover:opacity-75"
              >
                {item.label}
              </Link>
            </p>
          ))}
        </section>
      ) : null}

      {doc.backLink && doc.label !== 'About' ? (
        <Link
          to={doc.backLink.to}
          className="page-link mt-16 inline-block font-sans text-caption font-semibold uppercase tracking-[0.2em]"
        >
          {doc.backLink.label}
        </Link>
      ) : null}
    </article>
  )
}

function InlineParts({ parts }) {
  return parts.map((part, i) => {
    if ('em' in part) return <em key={i}>{part.em}</em>
    if ('strong' in part) return <strong key={i}>{part.strong}</strong>
    if ('link' in part) {
      return part.external ? (
        <a
          key={i}
          href={part.href}
          className="page-link underline underline-offset-4"
          target="_blank"
          rel="noreferrer"
        >
          {part.link}
        </a>
      ) : (
        <Link key={i} to={part.href} className="page-link underline underline-offset-4">
          {part.link}
        </Link>
      )
    }
    return <span key={i}>{part.text}</span>
  })
}

function BlockKey({ block }) {
  if (block.type === 'h2') {
    return (
      <h2 className="!mt-12 font-serif text-2xl leading-snug md:text-3xl first:!mt-0">{block.text}</h2>
    )
  }
  if (block.type === 'h3') {
    return <h3 className="!mt-10 font-serif text-xl leading-snug md:text-2xl">{block.text}</h3>
  }
  if (block.type === 'quote') {
    return <blockquote className="border-l border-line pl-6 italic">{block.text}</blockquote>
  }
  if (block.type === 'externalLink') {
    return (
      <p className="!mt-8">
        <a
          href={block.href}
          className="page-link underline underline-offset-4 transition-opacity hover:opacity-75"
          target="_blank"
          rel="noreferrer"
        >
          {block.label}
        </a>
      </p>
    )
  }
  if (block.type === 'internalLink') {
    return (
      <p className="!mt-8">
        <Link
          to={block.to}
          className="page-link underline underline-offset-4 transition-opacity hover:opacity-75"
        >
          {block.label}
        </Link>
      </p>
    )
  }
  if (block.type === 'table') {
    return (
      <div className="!mt-8 -mx-6 overflow-x-auto px-6 md:mx-0 md:px-0">
        <table className="w-full min-w-[36rem] border-collapse text-left text-sm md:text-base">
          {block.caption ? <caption className="mb-4 text-left font-serif text-lg">{block.caption}</caption> : null}
          <thead>
            <tr className="border-b border-line">
              {(block.headers ?? []).map((header) => (
                <th key={header} className="py-3 pr-4 font-sans text-caption font-semibold uppercase tracking-[0.14em]">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {(block.rows ?? []).map((row, rowIndex) => (
              <tr key={rowIndex} className="border-b border-line/70 align-top">
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex} className="py-3 pr-4 leading-relaxed">
                    {Array.isArray(cell) ? <InlineParts parts={cell} /> : cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }
  if (block.type === 'figure') {
    const cropLeft = typeof block.cropLeft === 'number' ? block.cropLeft : 0
    const imageWidthPct = cropLeft > 0 ? 100 / (1 - cropLeft / 100) : 100
    const imageShiftPct = cropLeft > 0 ? -cropLeft / (1 - cropLeft / 100) : 0

    return (
      <figure
        className={`!mb-4 ${
          block.fullWidth ? 'w-full max-w-none !mt-8' : 'max-w-[730px] !mt-12'
        }`}
      >
        {block.src ? (
          cropLeft > 0 ? (
            <div className="w-full overflow-hidden">
              <img
                src={block.src}
                alt={block.alt ?? ''}
                className="h-auto max-w-none object-contain"
                style={{
                  width: `${imageWidthPct}%`,
                  marginLeft: `${imageShiftPct}%`,
                }}
                loading={block.eager ? 'eager' : 'lazy'}
              />
            </div>
          ) : (
            <img
              src={block.src}
              alt={block.alt ?? ''}
              className="h-auto w-full object-contain"
              loading={block.eager ? 'eager' : 'lazy'}
            />
          )
        ) : null}
        {block.captionParts?.length || block.caption || block.credit ? (
          <figcaption className="mt-3 whitespace-pre-line font-sans text-sm leading-snug text-ink/70">
            {block.captionParts?.length ? <InlineParts parts={block.captionParts} /> : block.caption}
            {block.credit ? (
              <>
                {(block.captionParts?.length || block.caption) && ' '}
                {block.credit}
              </>
            ) : null}
          </figcaption>
        ) : null}
      </figure>
    )
  }
  if (block.parts?.length) {
    return (
      <p className={block.compact ? '!mt-10 whitespace-pre-line leading-snug' : undefined}>
        <InlineParts parts={block.parts} />
      </p>
    )
  }
  return (
    <p className={block.compact ? '!mt-10 whitespace-pre-line leading-snug' : undefined}>
      {block.text}
    </p>
  )
}
