"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  if (!mounted) return null
  const isDark = theme === "dark"
  return (
    <button
      type="button"
      aria-label="Toggle theme"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="rounded-md border border-border px-2 py-1 text-xs text-muted-foreground transition-colors hover:text-[var(--brand)]"
    >
      {isDark ? "Dark" : "Light"}
    </button>
  )
}
