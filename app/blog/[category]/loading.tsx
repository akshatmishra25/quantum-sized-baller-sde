export default function CategoryLoading() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <div className="mb-8">
        <div className="h-4 bg-gray-700 rounded w-32 mb-4 animate-pulse"></div>
        <div className="h-8 bg-gray-700 rounded w-64 mb-2 animate-pulse"></div>
        <div className="h-4 bg-gray-700 rounded w-48 animate-pulse"></div>
      </div>
      
      <div className="space-y-6">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="border border-gray-700 rounded-lg p-6">
            <div className="h-6 bg-gray-700 rounded w-3/4 mb-3 animate-pulse"></div>
            <div className="h-4 bg-gray-700 rounded w-1/2 mb-2 animate-pulse"></div>
            <div className="h-4 bg-gray-700 rounded w-full mb-2 animate-pulse"></div>
            <div className="h-4 bg-gray-700 rounded w-2/3 animate-pulse"></div>
          </div>
        ))}
      </div>
    </div>
  )
}
