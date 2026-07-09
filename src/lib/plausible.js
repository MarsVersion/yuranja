export const PLAUSIBLE_DOMAIN = import.meta.env.VITE_PLAUSIBLE_DOMAIN?.trim() ?? ''
export const PLAUSIBLE_CAPTURE_LOCALHOST =
  import.meta.env.VITE_PLAUSIBLE_CAPTURE_LOCALHOST === 'true'

const DEFAULT_SCRIPT_URL = PLAUSIBLE_CAPTURE_LOCALHOST
  ? 'https://plausible.io/js/script.local.manual.js'
  : 'https://plausible.io/js/script.manual.js'

export const PLAUSIBLE_SCRIPT_URL =
  import.meta.env.VITE_PLAUSIBLE_SCRIPT_URL?.trim() || DEFAULT_SCRIPT_URL

/** Enabled in production when domain is set; in dev only when localhost tracking is opted in. */
export const isPlausibleEnabled =
  Boolean(PLAUSIBLE_DOMAIN) && (!import.meta.env.DEV || PLAUSIBLE_CAPTURE_LOCALHOST)

let scriptInjected = false

/** Official queue stub — allows pageview calls before the script finishes loading. */
function ensurePlausibleQueue() {
  window.plausible =
    window.plausible ||
    function plausibleQueue() {
      ;(window.plausible.q = window.plausible.q || []).push(arguments)
    }
}

/** Inject the official Plausible script once (guarded for React StrictMode). */
export function injectPlausibleScript() {
  if (!isPlausibleEnabled || scriptInjected) return
  scriptInjected = true

  ensurePlausibleQueue()

  const script = document.createElement('script')
  script.defer = true
  script.dataset.domain = PLAUSIBLE_DOMAIN
  script.src = PLAUSIBLE_SCRIPT_URL
  document.head.appendChild(script)
}

/** Track one pageview — used with script.manual.js for React Router navigations. */
export function trackPageview() {
  if (!isPlausibleEnabled) return
  ensurePlausibleQueue()
  window.plausible('pageview')
}
