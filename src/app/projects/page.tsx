import type { Metadata } from "next";
import FramerWrapper from "@/components/animation/FramerWrapper";
import ProjectsContent from "@/components/sections/ProjectsContent";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "A curated collection of projects by Richard Karoki — featuring production APIs, full stack applications, and creative web development work.",
  openGraph: {
    title: "Projects | Richard Karoki",
    description:
      "Explore projects by Richard Karoki — production APIs, broadcast platforms, onboarding tools, and more.",
    url: "https://richiekaroki.vercel.app/projects",
  },
};

export default function ProjectsPage() {
  return (
    <div className="min-h-0 lg:min-h-dvh w-full relative flex flex-col items-start gap-8 overflow-hidden">
      <FramerWrapper y={0} x={-100} className="w-full">
        <h1 className="font-source-serif text-primary font-bold text-5xl sm:text-6xl max-sm:text-3xl leading-tight [text-wrap:balance]">
          Projects
        </h1>
        <div className="w-16 h-1 bg-primary-sky mt-4" />
      </FramerWrapper>

      <ProjectsContent />
    </div>
  );
}
