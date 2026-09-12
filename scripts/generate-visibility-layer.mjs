/**
 * Build-time AI / search visibility layer for YRJ.
 * Reads the same visibility catalog as the React app (via Vite SSR) and writes:
 * - robots.txt, sitemap.xml, llms.txt
 * - /feed/*.json
 * - per-route HTML shells with metadata, JSON-LD, and crawlable summaries
 *
 * Run after `vite build` so asset hashes from dist/index.html are reused.
 */
import { mkdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { createServer } from 'vite'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(__dirname, '..')
const distDir = path.join(root, 'dist')

function escapeXml(value) {
  return String(value ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;')
}

function extractAssetTags(indexHtml) {
  const script = indexHtml.match(/<script type="module"[^>]*src="([^"]+)"[^>]*><\/script>/)?.[0]
  const stylesheet = indexHtml.match(/<link rel="stylesheet"[^>]*href="([^"]+)"[^>]*>/)?.[0]
  if (!script || !stylesheet) {
    throw new Error('Could not find hashed JS/CSS tags in dist/index.html')
  }
  return { script, stylesheet }
}

function buildHead({ title, description, url, jsonLd, stylesheet, image, ogType = 'website' }) {
  const jsonLdBlock = jsonLd
    ? `<script type="application/ld+json">${JSON.stringify(jsonLd)}</script>`
    : ''
  const imageTags = image
    ? `    <meta property="og:image" content="${escapeXml(image)}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:image" content="${escapeXml(image)}" />`
    : `    <meta name="twitter:card" content="summary" />`

  return `    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${escapeXml(title)}</title>
    <meta name="description" content="${escapeXml(description)}" />
    <link rel="canonical" href="${escapeXml(url)}" />
    <meta property="og:type" content="${escapeXml(ogType)}" />
    <meta property="og:site_name" content="Yuranja" />
    <meta property="og:title" content="${escapeXml(title)}" />
    <meta property="og:description" content="${escapeXml(description)}" />
    <meta property="og:url" content="${escapeXml(url)}" />
${imageTags}
    <meta name="twitter:title" content="${escapeXml(title)}" />
    <meta name="twitter:description" content="${escapeXml(description)}" />
    <link rel="icon" href="/favicon/favicon.ico" sizes="any" />
    <link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg" />
    <link rel="manifest" href="/manifest.webmanifest" />
    <meta name="theme-color" content="#ffffff" />
    <link
      href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,300,0,0&display=swap"
      rel="stylesheet"
    />
    ${stylesheet}
    ${jsonLdBlock}`
}

function buildPageHtml({ head, bodyHtml, script }) {
  return `<!doctype html>
<html lang="en" class="light">
  <head>
${head}
  </head>
  <body>
    <div id="root">
      <main id="yrj-machine-summary">
${bodyHtml}
      </main>
    </div>
    ${script}
  </body>
</html>
`
}

async function writeDistFile(relativePath, contents) {
  const fullPath = path.join(distDir, relativePath)
  await mkdir(path.dirname(fullPath), { recursive: true })
  await writeFile(fullPath, contents, 'utf8')
}

async function main() {
  const indexHtml = await readFile(path.join(distDir, 'index.html'), 'utf8')
  const { script, stylesheet } = extractAssetTags(indexHtml)

  const server = await createServer({
    root,
    server: { middlewareMode: true },
    appType: 'custom',
    plugins: [],
  })

  try {
    const catalog = await server.ssrLoadModule('/src/lib/visibilityCatalog.js')
    const site = await server.ssrLoadModule('/src/config/site.js')
    const pages = catalog.getVisibilityPages()
    const { SITE_ORIGIN, absoluteUrl } = site

    const robots = `User-agent: *
Allow: /

Sitemap: ${SITE_ORIGIN}/sitemap.xml
`
    await writeDistFile('robots.txt', robots)

    const sitemapUrls = pages
      .map((page) => {
        const loc = absoluteUrl(page.path)
        return `  <url>
    <loc>${escapeXml(loc)}</loc>
  </url>`
      })
      .join('\n')

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapUrls}
</urlset>
`
    await writeDistFile('sitemap.xml', sitemap)

    const llms = `# YRJ / Yuranja

> YRJ is an independent curated magazine and guide to exhibitions, art spaces, people, and ideas worth discovering.

YRJ is selective rather than comprehensive. It is written for a broad, curious public — not only art professionals.

## Main sections

- [Exhibitions](${SITE_ORIGIN}/exhibitions): selected exhibitions with dates, venues, and YRJ editorial notes
- [Cities](${SITE_ORIGIN}/cities): city guides to museums, galleries, and project spaces
- [Spaces](${SITE_ORIGIN}/spaces/whitney): selected art institutions and rooms (see also city guides)
- [People](${SITE_ORIGIN}/people): contributors and profiles
- [About](${SITE_ORIGIN}/about): editorial principle and initiator

## Machine-readable feeds

- ${SITE_ORIGIN}/feed/exhibitions.json
- ${SITE_ORIGIN}/feed/spaces.json
- ${SITE_ORIGIN}/feed/cities.json

## Editorial principle

YRJ selects and contextualizes exhibitions and art spaces for travelers and locals who want to know which rooms deserve more than a quick map pin.

## Sitemap

${SITE_ORIGIN}/sitemap.xml
`
    await writeDistFile('llms.txt', llms)

    const exhibitionsFeed = {
      generatedAt: new Date().toISOString(),
      source: SITE_ORIGIN,
      items: catalog.getExhibitionsFeed(),
    }
    const spacesFeed = {
      generatedAt: new Date().toISOString(),
      source: SITE_ORIGIN,
      items: catalog.getSpacesFeed(),
    }
    const citiesFeed = {
      generatedAt: new Date().toISOString(),
      source: SITE_ORIGIN,
      items: catalog.getCitiesFeed(),
    }

    await writeDistFile('feed/exhibitions.json', `${JSON.stringify(exhibitionsFeed, null, 2)}\n`)
    await writeDistFile('feed/spaces.json', `${JSON.stringify(spacesFeed, null, 2)}\n`)
    await writeDistFile('feed/cities.json', `${JSON.stringify(citiesFeed, null, 2)}\n`)

    for (const page of pages) {
      const url = absoluteUrl(page.path)
      const image = page.socialImage ? absoluteUrl(page.socialImage) : null
      const head = buildHead({
        title: page.title,
        description: page.description,
        url,
        jsonLd: page.jsonLd,
        stylesheet,
        image,
        ogType: page.type === 'Article' ? 'article' : 'website',
      })
      const html = buildPageHtml({
        head,
        bodyHtml: page.summaryHtml,
        script,
      })

      if (page.path === '/') {
        await writeDistFile('index.html', html)
      } else {
        const routeDir = page.path.replace(/^\//, '')
        await writeDistFile(path.join(routeDir, 'index.html'), html)
      }
    }

    console.log(`YRJ visibility layer: ${pages.length} HTML routes, sitemap, robots, llms.txt, 3 feeds`)
  } finally {
    await server.close()
  }
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
