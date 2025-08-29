import Link from "next/link"

export default function BlogPostNotFound() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-12 text-center">
      <h1 className="text-4xl font-bold text-white mb-4">Blog Post Not Found</h1>
      <p className="text-gray-400 text-lg mb-8">
        The blog post you're looking for doesn't exist or has been moved.
      </p>
      <div className="space-y-4">
        <Link
          href="/blog"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors mr-4"
        >
          Browse All Categories
        </Link>
        <Link
          href="/blog"
          className="inline-block bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg transition-colors"
        >
          Go Home
        </Link>
      </div>
    </div>
  )
}
