import Link from "next/link"

export default function CategoryNotFound() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-12 text-center">
      <h1 className="text-4xl font-bold text-white mb-4">Category Not Found</h1>
      <p className="text-gray-400 text-lg mb-8">
        The category you're looking for doesn't exist or has been moved.
      </p>
      <Link
        href="/blog"
        className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
      >
        Browse All Categories
      </Link>
    </div>
  )
}
