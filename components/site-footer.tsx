import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 px-4 py-6 md:flex-row">
        <p className="text-sm text-muted-foreground">© 2025 Quantum Sized Baller SDE</p>
        <div className="flex items-center gap-5">
          <Link
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground transition-colors hover:text-[var(--brand)]"
          >
            GitHub<span className="sr-only"> (opens in new tab)</span>
          </Link>
          <Link
            href="https://x.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground transition-colors hover:text-[var(--brand)]"
          >
            X<span className="sr-only"> (opens in new tab)</span>
          </Link>
          <Link
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground transition-colors hover:text-[var(--brand)]"
          >
            LinkedIn<span className="sr-only"> (opens in new tab)</span>
          </Link>
        </div>
      </div>
    </footer>
  )
}
