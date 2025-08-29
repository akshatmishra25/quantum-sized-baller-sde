"use client"

import { useEffect, useState } from "react"

export function ReadingProgress() {
  const [progress, setProgress] = useState(0)
  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement
      const scrollTop = el.scrollTop || document.body.scrollTop
      const scrollHeight = el.scrollHeight - el.clientHeight
      const pct = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0
      setProgress(pct)
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll)
    return () => {
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
    }
  }, [])
  return (
    <div aria-hidden className="fixed left-0 top-0 z-50 h-0.5 bg-[var(--brand)]" style={{ width: `${progress}%` }} />
  )
}
