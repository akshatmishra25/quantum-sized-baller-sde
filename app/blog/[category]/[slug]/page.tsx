import { allPosts, categoryNames, getAllCategories } from "@/lib/posts"
import { notFound } from "next/navigation"
import Link from "next/link"
import { MarkdownRenderer } from "@/components/markdown-renderer"

interface BlogPostPageProps {
  params: Promise<{
    category: string
    slug: string
  }>
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { category, slug } = await params
  const allCategories = getAllCategories()
  
  // Check if category exists
  if (!allCategories.includes(category)) {
    notFound()
  }

  const post = allPosts.find(p => p.slug === slug && p.category === category)
  
  if (!post) {
    notFound()
  }

  const categoryName = categoryNames[category]

  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <div className="mb-8">
        <Link 
          href={`/blog/${category}`} 
          className="text-[var(--brand)] hover:text-[var(--brand)]/80 transition-colors mb-4 inline-block"
        >
          ← Back to {categoryName}
        </Link>
        <Link 
          href="/blog" 
          className="text-[var(--brand)] hover:text-[var(--brand)]/80 transition-colors ml-4 mb-4 inline-block"
        >
          ← All Categories
        </Link>
      </div>
      
      <article className="prose dark:prose-invert max-w-none">
        <header className="mb-8">
          <div className="mb-4">
            <span className="inline-block bg-[var(--brand)] text-white px-3 py-1 rounded-full text-sm font-medium">
              {categoryName}
            </span>
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-4">{post.title}</h1>
          <div className="flex items-center gap-4 text-muted-foreground text-sm">
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.readingTime}</span>
            {post.author && (
              <>
                <span>•</span>
                <span>By {post.author}</span>
              </>
            )}
          </div>
          {post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-4">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-muted text-muted-foreground px-2 py-1 rounded text-xs"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </header>
        
        <MarkdownRenderer content={post.content} />
      </article>
    </div>
  )
}

// Generate static params for all posts
export function generateStaticParams() {
  return allPosts.map((post) => ({
    category: post.category,
    slug: post.slug,
  }))
}
