import { useEffect, useRef } from 'react'

/**
 * Autoplay a muted, looping background video (mobile-safe).
 * @param {string} src
 * @param {number} [playbackRate=1]
 */
export function useBackgroundVideo(src, playbackRate = 1) {
  const videoRef = useRef(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return undefined

    video.muted = true
    video.defaultMuted = true
    video.loop = true
    video.playsInline = true
    video.playbackRate = playbackRate
    video.setAttribute('muted', '')
    video.setAttribute('playsinline', '')
    video.setAttribute('webkit-playsinline', '')

    const play = () => {
      if (!videoRef.current) return
      videoRef.current.muted = true
      videoRef.current.playbackRate = playbackRate
      const attempt = videoRef.current.play()
      if (attempt !== undefined) {
        void attempt.catch(() => {})
      }
    }

    const events = ['loadedmetadata', 'loadeddata', 'canplay', 'canplaythrough']
    events.forEach((event) => video.addEventListener(event, play))

    const onVisibility = () => {
      if (!document.hidden) play()
    }

    const onPageShow = () => play()
    const onGesture = () => play()

    document.addEventListener('visibilitychange', onVisibility)
    window.addEventListener('pageshow', onPageShow)
    document.addEventListener('touchstart', onGesture, { passive: true })
    document.addEventListener('click', onGesture)

    if (video.readyState >= 2) {
      play()
    } else {
      video.load()
      play()
    }

    return () => {
      events.forEach((event) => video.removeEventListener(event, play))
      document.removeEventListener('visibilitychange', onVisibility)
      window.removeEventListener('pageshow', onPageShow)
      document.removeEventListener('touchstart', onGesture)
      document.removeEventListener('click', onGesture)
    }
  }, [src, playbackRate])

  return videoRef
}
