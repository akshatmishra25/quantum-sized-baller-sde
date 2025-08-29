import Link from "next/link"

export default function NotFound() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-20 text-center">
      <h1 className="mb-2 text-2xl font-semibold text-white">No posts found</h1>
      <p className="mb-4 text-muted-foreground">We couldn’t find posts for this tag.</p>
      <Link href="/blog" className="text-[var(--brand)] underline-offset-2 hover:underline">
        Browse all posts
      </Link>
    </div>
  )
}
