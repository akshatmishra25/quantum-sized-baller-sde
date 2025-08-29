import Link from "next/link"

export default function NotFound() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-20 text-center">
      <h1 className="mb-2 text-2xl font-semibold text-white">Post not found</h1>
      <p className="mb-4 text-muted-foreground">The article you’re looking for doesn’t exist.</p>
      <Link href="/blog" className="text-[var(--brand)] underline-offset-2 hover:underline">
        Go to Blog
      </Link>
    </div>
  )
}
