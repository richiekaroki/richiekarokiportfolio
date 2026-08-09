export default function Loading() {
  return (
    <div className="min-h-0 lg:min-h-dvh w-full relative flex flex-col items-start gap-8 overflow-hidden" role="status" aria-live="polite">
      {/* Title skeleton */}
      <div className="w-full">
        <div className="h-10 w-40 bg-secondary rounded-lg animate-pulse" />
        <div className="w-16 h-1 bg-secondary mt-4 animate-pulse" />
      </div>

      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Form skeleton */}
        <div className="space-y-4">
          <div className="h-10 w-full bg-secondary rounded-lg animate-pulse" />
          <div className="h-10 w-full bg-secondary rounded-lg animate-pulse" />
          <div className="h-10 w-full bg-secondary rounded-lg animate-pulse" />
          <div className="h-32 w-full bg-secondary rounded-lg animate-pulse" />
          <div className="h-10 w-32 bg-secondary rounded-lg animate-pulse" />
        </div>

        {/* Info skeleton */}
        <div className="space-y-6">
          <div className="space-y-3">
            <div className="h-5 w-36 bg-secondary rounded animate-pulse" />
            <div className="h-4 w-full bg-secondary rounded animate-pulse" />
            <div className="h-4 w-3/4 bg-secondary rounded animate-pulse" />
          </div>
          <div className="space-y-3">
            <div className="h-5 w-28 bg-secondary rounded animate-pulse" />
            <div className="h-4 w-48 bg-secondary rounded animate-pulse" />
          </div>
          <div className="flex gap-3">
            <div className="h-10 w-10 bg-secondary rounded-full animate-pulse" />
            <div className="h-10 w-10 bg-secondary rounded-full animate-pulse" />
            <div className="h-10 w-10 bg-secondary rounded-full animate-pulse" />
          </div>
        </div>
      </div>

      <p className="sr-only">Loading contact form...</p>
    </div>
  );
}
