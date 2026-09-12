import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { SITE_DESCRIPTION, SITE_NAME_LONG, absoluteUrl } from '../config/site'
import { getPageMetaByPath } from '../lib/visibilityCatalog'

function upsertMeta(selector, attributes) {
  let el = document.head.querySelector(selector)
  if (!el) {
    el = document.createElement('meta')
    document.head.appendChild(el)
  }
  for (const [key, value] of Object.entries(attributes)) {
    el.setAttribute(key, value)
  }
}

function upsertLink(rel, href) {
  let el = document.head.querySelector(`link[rel="${rel}"]`)
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

function upsertJsonLd(data) {
  const id = 'yrj-jsonld'
  let el = document.getElementById(id)
  if (!data) {
    el?.remove()
    return
  }
  if (!el) {
    el = document.createElement('script')
    el.type = 'application/ld+json'
    el.id = id
    document.head.appendChild(el)
  }
  el.textContent = JSON.stringify(data)
}

/**
 * Updates document title, description, canonical, Open Graph, and JSON-LD
 * on client-side navigations. Build-time HTML shells cover non-JS crawlers.
 */
export function DocumentMeta() {
  const { pathname } = useLocation()

  useEffect(() => {
    const meta = getPageMetaByPath(pathname)
    const title = meta?.title ?? `${SITE_NAME_LONG} — See what matters.`
    const description = meta?.description ?? SITE_DESCRIPTION
    const url = absoluteUrl(meta?.path ?? pathname)
    const jsonLd = meta?.jsonLd ?? null
    const image = meta?.socialImage ? absoluteUrl(meta.socialImage) : null

    document.title = title

    upsertMeta('meta[name="description"]', { name: 'description', content: description })
    upsertLink('canonical', url)

    upsertMeta('meta[property="og:type"]', {
      property: 'og:type',
      content: meta?.type === 'Article' ? 'article' : 'website',
    })
    upsertMeta('meta[property="og:site_name"]', { property: 'og:site_name', content: SITE_NAME_LONG })
    upsertMeta('meta[property="og:title"]', { property: 'og:title', content: title })
    upsertMeta('meta[property="og:description"]', {
      property: 'og:description',
      content: description,
    })
    upsertMeta('meta[property="og:url"]', { property: 'og:url', content: url })

    if (image) {
      upsertMeta('meta[property="og:image"]', { property: 'og:image', content: image })
      upsertMeta('meta[name="twitter:card"]', { name: 'twitter:card', content: 'summary_large_image' })
      upsertMeta('meta[name="twitter:image"]', { name: 'twitter:image', content: image })
    } else {
      document.head.querySelector('meta[property="og:image"]')?.remove()
      document.head.querySelector('meta[name="twitter:image"]')?.remove()
      upsertMeta('meta[name="twitter:card"]', { name: 'twitter:card', content: 'summary' })
    }

    upsertMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: title })
    upsertMeta('meta[name="twitter:description"]', {
      name: 'twitter:description',
      content: description,
    })

    upsertJsonLd(jsonLd)
  }, [pathname])

  return null
}
