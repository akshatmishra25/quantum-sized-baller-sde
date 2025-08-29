import { notFound } from "next/navigation"
import { posts } from "@/lib/posts"
import { MarkdownRenderer } from "@/components/markdown-renderer"
import { ReadingProgress } from "@/components/reading-progress"

type Props = { params: { slug: string } }

export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }))
}

export default function PostPage({ params }: Props) {
  const post = posts.find((p) => p.slug === params.slug)
  if (!post) return notFound()
  const date = new Date(post.date).toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
  return (
    <>
      <ReadingProgress />
      <article className="mx-auto max-w-[80ch] px-4 py-12">
        <header className="mb-8">
          <h1 className="text-pretty text-3xl font-semibold text-white">{post.title}</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            {post.author ?? "Quantum"} • {date} • {post.readingTime}
          </p>
        </header>
        <MarkdownRenderer content={post.content} />
      </article>
    </>
  )
}
