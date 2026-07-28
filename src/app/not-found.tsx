import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center text-center gap-6">
      <h1 className="font-source-serif text-primary font-bold text-7xl sm:text-8xl">
        404
      </h1>
      <p className="font-inter text-xl text-muted-foreground max-w-md">
        This page doesn&apos;t exist yet. Maybe it&apos;s still being built, or the link is wrong.
      </p>
      <Link
        href="/"
        className={buttonVariants({ variant: "default", size: "default" })}
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to Home
      </Link>
    </div>
  );
}
