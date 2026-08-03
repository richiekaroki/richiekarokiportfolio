import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { projects, getProjectBySlug } from "@/lib/projects";
import FramerWrapper from "@/components/animation/FramerWrapper";
import type { Metadata } from "next";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project Not Found" };
  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      type: "article",
    },
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <div className="min-h-0 lg:min-h-dvh w-full relative flex flex-col items-start gap-8 overflow-hidden">
      <FramerWrapper y={0} x={-100} className="w-full">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-6"
        >
          <ArrowLeft className="h-4 w-4" />
          All Projects
        </Link>
        <h1 className="font-source-serif text-primary font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight [text-wrap:balance]">
          {project.title}
        </h1>
        <div className="w-16 h-1 bg-primary-sky mt-4" />
      </FramerWrapper>

      <FramerWrapper y={50} delay={0.1} className="w-full">
        <p className="font-inter text-lg text-muted-foreground max-sm:text-base max-w-prose leading-relaxed">
          {project.longDescription}
        </p>
      </FramerWrapper>

      <FramerWrapper y={50} delay={0.15} className="w-full">
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-secondary text-secondary-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      </FramerWrapper>

      <FramerWrapper y={50} delay={0.2} className="w-full">
        <div className="flex flex-wrap gap-3">
          <Link
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary-sky text-white font-medium hover:bg-primary-sky/90 active:scale-[0.97] transition-all"
          >
            <ExternalLink className="h-4 w-4" />
            Live Demo
          </Link>
          {project.repo && (
            <Link
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border bg-secondary/50 text-primary font-medium hover:bg-accent active:scale-[0.97] transition-all"
            >
              <SiGithub className="h-4 w-4" />
              Source Code
            </Link>
          )}
        </div>
      </FramerWrapper>

      <FramerWrapper y={50} delay={0.25} className="w-full">
        <h2 className="text-2xl font-source-serif text-primary font-semibold mb-4">
          Challenges
        </h2>
        <ul className="space-y-3">
          {project.challenges.map((challenge, i) => (
            <li key={i} className="flex gap-3 text-muted-foreground leading-relaxed">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-sky/10 text-primary-sky text-sm font-bold flex items-center justify-center mt-0.5">
                {i + 1}
              </span>
              {challenge}
            </li>
          ))}
        </ul>
      </FramerWrapper>

      <FramerWrapper y={50} delay={0.3} className="w-full">
        <h2 className="text-2xl font-source-serif text-primary font-semibold mb-4">
          Outcomes
        </h2>
        <ul className="space-y-3">
          {project.outcomes.map((outcome, i) => (
            <li key={i} className="flex gap-3 text-muted-foreground leading-relaxed">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500/10 text-green-600 dark:text-green-400 text-sm font-bold flex items-center justify-center mt-0.5" aria-hidden="true">
                ✓
              </span>
              {outcome}
            </li>
          ))}
        </ul>
      </FramerWrapper>
    </div>
  );
}
