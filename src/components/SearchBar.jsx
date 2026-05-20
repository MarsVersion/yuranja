import { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'

const PLACEHOLDERS = {
  hero: 'Search city, artist, institution, or exhibition',
  header: 'Search Yuranja',
  page: 'Search city, artist, institution, or exhibition',
}

/**
 * @param {{
 *   variant?: 'hero' | 'header' | 'page'
 *   initialQuery?: string
 *   autoFocus?: boolean
 *   inputId?: string
 *   className?: string
 *   ignoreEmptySubmit?: boolean
 *   onSubmit?: (query: string) => void
 * }} props
 */
export function SearchBar({
  variant = 'page',
  initialQuery = '',
  autoFocus = false,
  inputId = 'yuranja-search-input',
  className = '',
  ignoreEmptySubmit = false,
  onSubmit,
}) {
  const navigate = useNavigate()
  const inputRef = useRef(null)
  const placeholder = PLACEHOLDERS[variant]
  const isHeader = variant === 'header'
  const isHero = variant === 'hero'
  const showSubmitButton = !isHeader

  useEffect(() => {
    if (autoFocus && inputRef.current) {
      inputRef.current.focus()
    }
  }, [autoFocus])

  function handleSubmit(e) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const q = String(data.get('q') ?? '').trim()

    if (!q) {
      if (ignoreEmptySubmit) return
      navigate('/search')
      onSubmit?.('')
      return
    }

    navigate(`/search?q=${encodeURIComponent(q)}`)
    onSubmit?.(q)
  }

  const formClass = isHeader
    ? 'yuranja-search-bar yuranja-search-bar--header flex w-full'
    : isHero
      ? 'yuranja-search-bar yuranja-search-bar--hero flex w-full flex-col gap-2.5 sm:flex-row sm:items-stretch'
      : 'yuranja-search-bar flex w-full flex-col gap-3 sm:flex-row sm:items-stretch'

  const fieldClass = isHeader
    ? 'yuranja-search-bar__field yuranja-search-bar__field--header flex h-[46px] w-full min-w-[260px] max-w-[340px] items-center gap-2.5 border border-ink/25 bg-canvas px-4'
    : isHero
      ? 'yuranja-search-bar__field yuranja-search-bar__field--hero flex min-h-[52px] flex-1 items-center gap-2.5 border border-line bg-canvas px-4'
      : 'yuranja-search-bar__field flex min-h-[62px] flex-1 items-center gap-3 border border-line bg-canvas px-5 md:px-6'

  const iconClass = isHeader
    ? 'material-symbols-outlined yuranja-search-bar__icon yuranja-search-bar__icon--header shrink-0 text-ink'
    : isHero
      ? 'material-symbols-outlined yuranja-search-bar__icon yuranja-search-bar__icon--hero shrink-0 text-ink'
      : 'material-symbols-outlined yuranja-search-bar__icon shrink-0 text-ink'

  const inputClass = isHeader
    ? 'yuranja-search-bar__input w-full min-w-0 border-0 bg-transparent font-sans text-sm text-ink outline-none placeholder:text-ink/50 focus:ring-0'
    : isHero
      ? 'yuranja-search-bar__input w-full min-w-0 border-0 bg-transparent font-sans text-sm text-ink outline-none placeholder:text-ink/45 focus:ring-0'
      : 'yuranja-search-bar__input w-full min-w-0 border-0 bg-transparent font-sans text-base text-ink outline-none placeholder:text-ink/45 focus:ring-0 md:text-lg'

  const submitClass = isHero
    ? 'yuranja-search-bar__submit inline-flex min-h-[52px] items-center justify-center border border-ink bg-ink px-6 font-sans text-caption font-semibold uppercase tracking-[0.2em] text-canvas transition-colors hover:bg-canvas hover:text-ink'
    : 'yuranja-search-bar__submit inline-flex min-h-[62px] w-full items-center justify-center border border-ink bg-ink px-8 font-sans text-caption font-semibold uppercase tracking-[0.2em] text-canvas transition-colors hover:bg-canvas hover:text-ink sm:w-auto'

  return (
    <form
      onSubmit={handleSubmit}
      className={[formClass, className].filter(Boolean).join(' ')}
      role="search"
    >
      <label className="sr-only" htmlFor={inputId}>
        {placeholder}
      </label>
      <div className={fieldClass}>
        <span className={iconClass} aria-hidden>
          search
        </span>
        <input
          ref={inputRef}
          id={inputId}
          name="q"
          type="search"
          defaultValue={initialQuery}
          placeholder={placeholder}
          autoComplete="off"
          enterKeyHint="search"
          className={inputClass}
        />
      </div>
      {showSubmitButton ? (
        <button type="submit" className={submitClass}>
          Search
        </button>
      ) : null}
    </form>
  )
}
