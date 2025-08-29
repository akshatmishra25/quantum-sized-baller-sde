import Link from "next/link"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { Post } from "@/lib/posts"
import { categoryNames } from "@/lib/posts"

export function PostCard({ post }: { post: Post }) {
  return (
    <Card className="transition-transform hover:-translate-y-0.5">
      <CardHeader className="pb-2">
        <div className="flex items-center gap-2 mb-2">
          <Badge variant="outline" className="text-xs">
            {categoryNames[post.category]}
          </Badge>
        </div>
        <Link
          href={`/blog/${post.category}/${post.slug}`}
          className="text-lg font-semibold text-white underline-offset-2 hover:text-[var(--brand)] hover:underline"
        >
          {post.title}
        </Link>
      </CardHeader>
      <CardContent className="text-sm text-muted-foreground">
        <p className="mb-2">
          {new Date(post.date).toLocaleDateString(undefined, {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}{" "}
          • {post.readingTime}
        </p>
        <p className="line-clamp-2">{post.excerpt}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {post.tags.map((t) => (
            <Badge key={t} variant="secondary" className="border border-[color:var(--brand)] text-[var(--brand)]">
              {t}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
