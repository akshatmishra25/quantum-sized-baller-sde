import { getAllCategories, categoryNames, getPostsByCategory } from "@/lib/posts"
import Link from "next/link"

export default function BlogIndexPage() {
  const categories = getAllCategories()

  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="mb-8 text-3xl font-bold text-foreground">Blog Categories</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => {
          const posts = getPostsByCategory(category)
          const postCount = posts.length
          
          return (
            <Link 
              key={category} 
              href={`/blog/${category}`}
              className="group block p-6 bg-gray-800/50 dark:bg-gray-800/50 rounded-lg border border-border hover:border-gray-500 dark:hover:border-gray-500 transition-all duration-200 hover:bg-gray-800/70 dark:hover:bg-gray-800/70"
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-foreground group-hover:text-[var(--brand)] transition-colors">
                  {categoryNames[category]}
                </h2>
                <span className="text-sm text-muted-foreground bg-muted px-2 py-1 rounded-full">
                  {postCount} {postCount === 1 ? 'post' : 'posts'}
                </span>
              </div>
              
              <div className="space-y-2">
                {posts.slice(0, 3).map((post) => (
                  <div key={post.slug} className="text-sm text-muted-foreground group-hover:text-foreground/75">
                    • {post.title}
                  </div>
                ))}
                {postCount > 3 && (
                  <div className="text-sm text-muted-foreground/60">
                    +{postCount - 3} more...
                  </div>
                )}
              </div>
              
              <div className="mt-4 text-sm text-[var(--brand)] group-hover:text-[var(--brand)]/80 transition-colors">
                View all posts →
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
