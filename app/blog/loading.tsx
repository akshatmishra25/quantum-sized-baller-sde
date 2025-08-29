export default function Loading() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <div className="h-8 w-1/2 animate-pulse rounded bg-muted" />
      <div className="mt-6 space-y-3">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="h-24 animate-pulse rounded bg-muted" />
        ))}
      </div>
    </div>
  )
}
