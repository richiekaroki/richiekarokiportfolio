export default function Loading() {
  return (
    <div className="min-h-0 lg:min-h-dvh w-full relative flex flex-col items-start gap-8 overflow-hidden" role="status" aria-live="polite">
      {/* Title skeleton */}
      <div className="w-full">
        <div className="h-10 w-48 bg-secondary rounded-lg animate-pulse" />
        <div className="w-16 h-1 bg-secondary mt-4 animate-pulse" />
      </div>

      {/* Intro skeleton */}
      <div className="w-full space-y-3">
        <div className="h-4 bg-secondary rounded animate-pulse w-full" />
        <div className="h-4 bg-secondary rounded animate-pulse w-5/6" />
        <div className="h-4 bg-secondary rounded animate-pulse w-2/3" />
      </div>

      {/* Cards skeleton */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="h-48 bg-secondary rounded-xl animate-pulse" />
        ))}
      </div>

      <p className="sr-only">Loading articles...</p>
    </div>
  );
}
