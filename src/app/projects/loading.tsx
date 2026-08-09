export default function Loading() {
  return (
    <div className="min-h-0 lg:min-h-dvh w-full relative flex flex-col items-start gap-8 overflow-hidden" role="status" aria-live="polite">
      {/* Title skeleton */}
      <div className="w-full">
        <div className="h-10 w-56 bg-secondary rounded-lg animate-pulse" />
        <div className="w-16 h-1 bg-secondary mt-4 animate-pulse" />
      </div>

      {/* Featured projects skeleton */}
      <div className="w-full space-y-4">
        <div className="h-6 w-36 bg-secondary rounded animate-pulse" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[1, 2].map((i) => (
            <div key={i} className="h-44 bg-secondary rounded-xl animate-pulse" />
          ))}
        </div>
      </div>

      {/* More projects skeleton */}
      <div className="w-full space-y-4">
        <div className="h-6 w-32 bg-secondary rounded animate-pulse" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="h-36 bg-secondary rounded-xl animate-pulse" />
          ))}
        </div>
      </div>

      <p className="sr-only">Loading projects...</p>
    </div>
  );
}
