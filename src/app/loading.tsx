import RKLogo from "@/components/ui/RKLogo";

export default function Loading() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center gap-4">
      <div className="relative">
        <RKLogo size="lg" />
        <div className="absolute inset-0 rounded-full border-2 border-primary-sky border-t-transparent animate-spin" />
      </div>
      <p className="text-sm text-muted-foreground font-inter">Loading...</p>
    </div>
  );
}
