import { getPostsByCategory, categoryNames, getAllCategories } from "@/lib/posts"
import { PostCard } from "@/components/post-card"
import Link from "next/link"
import { notFound } from "next/navigation"

interface CategoryPageProps {
  params: {
    category: string
  }
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const { category } = params
  const posts = getPostsByCategory(category)
  const allCategories = getAllCategories()
  
  // Check if category exists
  if (!allCategories.includes(category)) {
    notFound()
  }

  const categoryName = categoryNames[category]

  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <div className="mb-8">
        <Link 
          href="/blog" 
          className="text-blue-400 hover:text-blue-300 transition-colors mb-4 inline-block"
        >
          ← Back to Categories
        </Link>
        <h1 className="text-3xl font-bold text-white">{categoryName}</h1>
        <p className="text-gray-400 mt-2">
          {posts.length} {posts.length === 1 ? 'post' : 'posts'} in this category
        </p>
      </div>
      
      <div className="space-y-6">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
      
      {posts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-400 text-lg">No posts found in this category yet.</p>
          <Link 
            href="/blog" 
            className="text-blue-400 hover:text-blue-300 transition-colors mt-4 inline-block"
          >
            Browse other categories
          </Link>
        </div>
      )}
    </div>
  )
}

// Generate static params for all categories
export function generateStaticParams() {
  const categories = getAllCategories()
  return categories.map((category) => ({
    category,
  }))
}
