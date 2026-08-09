export default function Loading() {
  return (
    <div className="min-h-0 lg:min-h-dvh w-full relative flex flex-col items-start gap-8 overflow-hidden" role="status" aria-live="polite">
      {/* Back link skeleton */}
      <div className="h-4 w-24 bg-secondary rounded animate-pulse" />

      {/* Title skeleton */}
      <div className="w-full">
        <div className="h-12 w-72 bg-secondary rounded-lg animate-pulse" />
        <div className="w-16 h-1 bg-secondary mt-4 animate-pulse" />
      </div>

      {/* Description skeleton */}
      <div className="w-full space-y-3">
        <div className="h-4 bg-secondary rounded animate-pulse w-full" />
        <div className="h-4 bg-secondary rounded animate-pulse w-5/6" />
        <div className="h-4 bg-secondary rounded animate-pulse w-3/4" />
      </div>

      {/* Screenshot skeleton */}
      <div className="w-full aspect-video bg-secondary rounded-xl animate-pulse" />

      {/* Tags skeleton */}
      <div className="flex gap-2">
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="h-8 w-20 bg-secondary rounded-full animate-pulse" />
        ))}
      </div>

      {/* Buttons skeleton */}
      <div className="flex gap-3">
        <div className="h-10 w-28 bg-secondary rounded-lg animate-pulse" />
        <div className="h-10 w-32 bg-secondary rounded-lg animate-pulse" />
      </div>

      {/* Challenges skeleton */}
      <div className="w-full space-y-3">
        <div className="h-6 w-32 bg-secondary rounded animate-pulse" />
        {[1, 2, 3].map((i) => (
          <div key={i} className="h-4 bg-secondary rounded animate-pulse w-full" />
        ))}
      </div>

      {/* Outcomes skeleton */}
      <div className="w-full space-y-3">
        <div className="h-6 w-28 bg-secondary rounded animate-pulse" />
        {[1, 2, 3].map((i) => (
          <div key={i} className="h-4 bg-secondary rounded animate-pulse w-full" />
        ))}
      </div>

      <p className="sr-only">Loading project...</p>
    </div>
  );
}
