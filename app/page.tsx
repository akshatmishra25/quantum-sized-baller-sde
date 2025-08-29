import { posts } from "@/lib/posts"
import { PostCard } from "@/components/post-card"
import Link from "next/link"

export default function HomePage() {
  const featured = posts.find((p) => p.featured) || posts[0]
  const latest = posts.filter((p) => p.slug !== featured.slug)

  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <section className="mb-10">
        <h1 className="text-pretty text-3xl font-semibold text-white">
          Code. Physics. The Beautiful Game. Deconstructed.
        </h1>
        <p className="mt-3 max-w-prose text-sm leading-7 text-[#E2E2E2]">
          I write about software engineering, physics, football analysis, music, and life philosophy — with a focus on
          clarity, depth, and craft.
        </p>
      </section>

      <section className="mb-10">
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-white">Featured</h2>
          <Link href="/blog" className="text-sm text-[var(--brand)] underline-offset-2 hover:underline">
            View all
          </Link>
        </div>
        <PostCard post={featured} />
      </section>

      <section>
        <h2 className="mb-3 text-xl font-semibold text-white">Latest</h2>
        <div className="space-y-4">
          {latest.map((p) => (
            <PostCard key={p.slug} post={p} />
          ))}
        </div>
      </section>
    </div>
  )
}
