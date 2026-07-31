export default function Skeleton3D({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative w-full h-full overflow-hidden rounded-lg bg-secondary/50 ${className}`}
    >
      <div className="absolute inset-0 animate-pulse">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-primary-sky/20" />
        <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 rounded-full bg-primary-sky/15" />
        <div className="absolute bottom-1/3 left-1/3 w-1 h-1 rounded-full bg-primary-sky/10" />
        <div className="absolute top-1/2 right-1/4 w-2.5 h-2.5 rounded-full bg-primary-sky/20" />
        <div className="absolute bottom-1/4 right-1/3 w-1.5 h-1.5 rounded-full bg-primary-sky/15" />
      </div>
    </div>
  );
}
