/**
 * Plausible integration verification — run after `npm run dev` with .env configured.
 * Usage: node scripts/verify-plausible.mjs [baseUrl]
 */
import { chromium } from 'playwright'

const baseUrl = process.argv[2] || 'http://localhost:5173'
const results = []

function pass(label, detail = '') {
  results.push({ ok: true, label, detail })
}

function fail(label, detail = '') {
  results.push({ ok: false, label, detail })
}

const blockedTrackers = [
  'google-analytics.com',
  'googletagmanager.com',
  'connect.facebook.net',
  'facebook.net/tr',
  'doubleclick.net',
]

async function main() {
  const browser = await chromium.launch({ headless: true })
  const page = await browser.newPage()

  const eventPosts = []
  const consoleErrors = []
  const blockedRequests = []

  page.on('console', (msg) => {
    if (msg.type() === 'error') consoleErrors.push(msg.text())
  })

  page.on('request', (req) => {
    const url = req.url()
    if (blockedTrackers.some((t) => url.includes(t))) blockedRequests.push(url)
  })

  page.on('response', async (res) => {
    const url = res.url()
    if (url.includes('plausible.io/api/event') && res.request().method() === 'POST') {
      const body = res.request().postData() || ''
      const isPageview = body.includes('"n":"pageview"') || body.includes('"n": "pageview"')
      if (isPageview) {
        eventPosts.push({ url, status: res.status(), at: Date.now() })
      }
    }
  })

  try {
    await page.goto(baseUrl, { waitUntil: 'networkidle', timeout: 30000 })
    await page.waitForTimeout(1500)

    const scriptCount = await page.evaluate(
      () => document.querySelectorAll('script[src*="plausible.io"]').length,
    )
    if (scriptCount === 1) pass('Script loaded once', `found ${scriptCount} plausible.io script tag`)
    else fail('Script loaded once', `expected 1 script tag, found ${scriptCount}`)

    const initialEvents = eventPosts.length
    if (initialEvents >= 1) pass('Initial pageview tracked', `${initialEvents} POST(s) on load`)
    else fail('Initial pageview tracked', 'no POST to plausible.io/api/event on load')

    const beforeNav = eventPosts.length
    await page.click('a[href="/cities"], a[href="/yuranja/cities"]', { timeout: 10000 }).catch(async () => {
      await page.goto(`${baseUrl.replace(/\/$/, '')}/cities`, { waitUntil: 'networkidle' })
    })
    await page.waitForTimeout(1500)

    const citiesEvents = eventPosts.length - beforeNav
    if (citiesEvents === 1) pass('Cities route: one pageview', 'exactly 1 POST')
    else fail('Cities route: one pageview', `expected 1 POST, got ${citiesEvents}`)

    const beforeAbout = eventPosts.length
    await page.click('a[href="/about"], a[href="/yuranja/about"]', { timeout: 10000 }).catch(async () => {
      await page.goto(`${baseUrl.replace(/\/$/, '')}/about`, { waitUntil: 'networkidle' })
    })
    await page.waitForTimeout(1500)

    const aboutEvents = eventPosts.length - beforeAbout
    if (aboutEvents === 1) pass('About route: one pageview', 'exactly 1 POST')
    else fail('About route: one pageview', `expected 1 POST, got ${aboutEvents}`)

    const all202 = eventPosts.every((e) => e.status === 202)
    if (all202 && eventPosts.length > 0) pass('All events returned 202', `${eventPosts.length} POST(s)`)
    else fail('All events returned 202', eventPosts.map((e) => e.status).join(', ') || 'none')

    const cookies = await page.context().cookies()
    const plausibleCookies = cookies.filter((c) => c.domain.includes('plausible'))
    if (plausibleCookies.length === 0) pass('No Plausible cookies', `${cookies.length} total cookies`)
    else fail('No Plausible cookies', JSON.stringify(plausibleCookies))

    const html = await page.content()
    const hasCookieBanner = /cookie (banner|consent|notice)|gdpr|onetrust|cookiebot/i.test(html)
    if (!hasCookieBanner) pass('No cookie banner in DOM')
    else fail('No cookie banner in DOM', 'cookie-related UI detected')

    if (blockedRequests.length === 0) pass('No ad/tracking SDK requests')
    else fail('No ad/tracking SDK requests', blockedRequests.join('; '))

    const analyticsErrors = consoleErrors.filter(
      (e) => !e.includes('favicon') && !e.includes('404') && !e.includes('Failed to load resource'),
    )
    if (analyticsErrors.length === 0) pass('No console errors', `${consoleErrors.length} ignored resource warnings`)
    else fail('No console errors', analyticsErrors.join(' | '))
  } catch (err) {
    fail('Verification run', err.message)
  } finally {
    await browser.close()
  }

  console.log('\nPlausible verification results\n' + '='.repeat(40))
  for (const r of results) {
    console.log(`${r.ok ? 'PASS' : 'FAIL'}  ${r.label}${r.detail ? ` — ${r.detail}` : ''}`)
  }
  console.log('='.repeat(40))
  const failed = results.filter((r) => !r.ok).length
  process.exit(failed > 0 ? 1 : 0)
}

main()
