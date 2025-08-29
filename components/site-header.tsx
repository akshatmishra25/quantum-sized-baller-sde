"use client"

import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

const nav = [
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
]

export function SiteHeader() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])
  return (
    <header
      className={cn(
        "sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-background/60",
        scrolled ? "border-b border-border" : "",
      )}
      aria-label="Primary"
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <Link href="/" className="font-semibold tracking-tight text-white">
          <span className="text-pretty">Quantum Sized Baller SDE</span>
        </Link>
        <nav className="flex items-center gap-6" aria-label="Main navigation">
          {nav.map((item) => {
            const active = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm text-[var(--muted-foreground)] transition-colors hover:text-[var(--brand)]",
                  active && "text-[var(--brand)]",
                )}
              >
                {item.label}
              </Link>
            )
          })}
          <ThemeToggle />
        </nav>
      </div>
    </header>
  )
}
