import { notFound } from "next/navigation"
import { posts } from "@/lib/posts"
import { PostCard } from "@/components/post-card"

type Props = { params: { tag: string } }

export async function generateStaticParams() {
  const allTags = Array.from(new Set(posts.flatMap((p) => p.tags)))
  return allTags.map((t) => ({ tag: t.toLowerCase() }))
}

export default function TagPage({ params }: Props) {
  const tagParam = params.tag.toLowerCase()
  const tagged = posts.filter((p) => p.tags.some((t) => t.toLowerCase() === tagParam))
  if (tagged.length === 0) return notFound()
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="mb-6 text-2xl font-semibold text-white">Posts tagged #{params.tag}</h1>
      <div className="space-y-4">
        {tagged.map((p) => (
          <PostCard key={p.slug} post={p} />
        ))}
      </div>
    </div>
  )
}
