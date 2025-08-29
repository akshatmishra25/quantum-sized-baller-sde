export default function BlogPostLoading() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <div className="mb-8">
        <div className="h-4 bg-gray-700 rounded w-24 mb-4 animate-pulse"></div>
        <div className="h-4 bg-gray-700 rounded w-32 mb-4 animate-pulse"></div>
        <div className="h-12 bg-gray-700 rounded w-full mb-4 animate-pulse"></div>
        <div className="h-4 bg-gray-700 rounded w-48 mb-4 animate-pulse"></div>
        <div className="flex gap-2 mb-4">
          <div className="h-6 bg-gray-700 rounded w-16 animate-pulse"></div>
          <div className="h-6 bg-gray-700 rounded w-20 animate-pulse"></div>
        </div>
      </div>
      
      <div className="space-y-4">
        <div className="h-4 bg-gray-700 rounded w-full animate-pulse"></div>
        <div className="h-4 bg-gray-700 rounded w-5/6 animate-pulse"></div>
        <div className="h-4 bg-gray-700 rounded w-4/5 animate-pulse"></div>
        <div className="h-4 bg-gray-700 rounded w-full animate-pulse"></div>
        <div className="h-4 bg-gray-700 rounded w-3/4 animate-pulse"></div>
        <div className="h-4 bg-gray-700 rounded w-5/6 animate-pulse"></div>
      </div>
    </div>
  )
}
