/**
 * Test client-side navigation only (no full page reloads).
 */
import { chromium } from 'playwright'

const baseUrl = process.argv[2] || 'http://localhost:5175'

async function navigateViaClick(page, href) {
  const before = eventCount
  await page.click(`a[href="${href}"]`, { timeout: 10000 })
  await page.waitForTimeout(2000)
  return eventCount - before
}

let eventCount = 0

async function main() {
  const browser = await chromium.launch({ headless: true })
  const page = await browser.newPage()

  page.on('response', (res) => {
    if (res.url().includes('plausible.io/api/event') && res.request().method() === 'POST') {
      const body = res.request().postData() || ''
      if (body.includes('"n":"pageview"')) {
        eventCount++
        console.log(`  pageview POST #${eventCount} status=${res.status()}`)
      }
    }
  })

  console.log('Load home (full page load)')
  await page.goto(baseUrl, { waitUntil: 'networkidle' })
  await page.waitForTimeout(1500)

  for (const href of ['/cities', '/about', '/exhibitions']) {
    console.log(`Client nav click -> ${href}`)
    const n = await navigateViaClick(page, href)
    console.log(`  -> ${n} event(s)\n`)
  }

  await browser.close()
}

main()
