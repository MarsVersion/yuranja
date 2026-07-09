import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { injectPlausibleScript, isPlausibleEnabled, trackPageview } from '../lib/plausible'

/** Survives React StrictMode remounts (useRef resets on remount). */
let lastTrackedPath = ''

/**
 * Loads script.manual.js once and sends exactly one pageview per React Router
 * navigation. Manual mode is required — the standard script double-counts
 * client-side navigations in this app.
 */
export function PlausibleAnalytics() {
  const location = useLocation()

  useEffect(() => {
    injectPlausibleScript()
  }, [])

  useEffect(() => {
    if (!isPlausibleEnabled) return

    const path = `${location.pathname}${location.search}${location.hash}`
    if (lastTrackedPath === path) return
    lastTrackedPath = path

    trackPageview()
  }, [location.pathname, location.search, location.hash])

  return null
}
