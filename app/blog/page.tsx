import { posts } from "@/lib/posts"
import { PostCard } from "@/components/post-card"

export default function BlogIndexPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="mb-6 text-2xl font-semibold text-white">Blog</h1>
      <div className="space-y-4">
        {posts.map((p) => (
          <PostCard key={p.slug} post={p} />
        ))}
      </div>
    </div>
  )
}
