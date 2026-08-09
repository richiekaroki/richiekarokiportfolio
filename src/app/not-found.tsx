import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import RKLogo from "@/components/ui/RKLogo";
import { projects } from "@/lib/projects";

const recentProjects = projects.slice(0, 4);

export default function NotFound() {
  return (
    <div className="min-h-0 lg:min-h-dvh w-full flex flex-col items-center text-center gap-8 py-16">
      <div className="flex flex-col items-center gap-6">
        <RKLogo size="xl" />
        <h1 className="font-source-serif text-primary font-bold text-7xl sm:text-8xl">
          404
        </h1>
        <p className="font-inter text-xl text-muted-foreground max-w-md">
          This page doesn&apos;t exist yet. Maybe it&apos;s still being built, or the link is wrong.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary-sky text-white font-medium hover:bg-primary-sky/90 active:scale-[0.97] transition-all"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>
      </div>

      <div className="w-full max-w-4xl mt-8">
        <h2 className="text-lg font-semibold text-primary mb-4">
          While you&apos;re here, check out some projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {recentProjects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="group p-4 rounded-xl border border-border/50 bg-card text-left transition-all hover:shadow-md hover:border-primary-sky/30"
            >
              <h3 className="text-sm font-medium text-primary group-hover:text-primary-sky transition-colors">
                {project.title}
              </h3>
              <p className="mt-1 text-xs text-muted-foreground line-clamp-2">
                {project.description}
              </p>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {project.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 text-[10px] rounded-full border border-border bg-secondary/50 text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
