"use client";

import FramerWrapper from "@/components/animation/FramerWrapper";
import HoloGridBackground from "@/components/backgrounds/HoloGridBackground";
import ProjectCard from "@/components/sections/ProjectCard";
import Image from "next/image";
import work1 from "@/assets/work-1.png";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";

const featured = [
  {
    slug: "job-application-api",
    title: "Job Application API",
    description:
      "Production grade Job Applications API built with NestJS, TypeScript, PostgreSQL and Redis. Features JWT auth with refresh token rotation, 4 role RBAC, webhook delivery with HMAC SHA256 signing, rate limiting, and full Swagger documentation.",
    tags: ["NestJS", "TypeScript", "PostgreSQL", "Redis", "JWT"],
    link: "https://job-application-api-production.up.railway.app/api/v1/docs",
    repo: "https://github.com/richiekaroki/job-application-api",
  },
  {
    slug: "broadcast-hub",
    title: "Broadcast Hub",
    description:
      "Media and Broadcast Content Management Platform built with NestJS and React. Full stack solution for managing broadcast content workflows with a modern TypeScript stack.",
    tags: ["NestJS", "React", "TypeScript", "Full Stack"],
    link: "https://broadcast-hub-web.vercel.app/",
    repo: "https://github.com/richiekaroki/broadcast-hub",
  },
  {
    slug: "actserv-onboarding",
    title: "Actserv Onboarding Platform",
    description:
      "Enterprise onboarding platform built with TypeScript. Streamlines the employee onboarding journey with a clean, production ready interface.",
    tags: ["TypeScript", "React", "Enterprise", "Frontend"],
    link: "https://onboarding-frontend.vercel.app/",
  },
  {
    slug: "product-dashboard",
    title: "Product Dashboard",
    description:
      "A real time product analytics dashboard built with TypeScript and React. Visualizes key metrics and performance data with responsive charts and tables.",
    tags: ["TypeScript", "React", "Analytics", "Dashboard"],
    link: "https://product-dashboard-nine-kappa.vercel.app/",
  },
  {
    slug: "zoo-app",
    title: "Zoo App",
    description:
      "An interactive zoo management application built with Vue.js. Features animal browsing, categorization, and a clean responsive interface.",
    tags: ["Vue", "JavaScript", "Responsive"],
    link: "https://zoo-app-nu.vercel.app",
  },
];

const more = [
  {
    slug: "solami-sportsbook",
    title: "Solami Sportsbook Landing",
    description:
      "Sportsbook landing page demo built with SvelteKit, TypeScript, and Tailwind CSS. Features real time bet slip state management, derived odds calculations, and responsive design.",
    tags: ["SvelteKit", "TypeScript", "Tailwind CSS", "State Management"],
    link: "https://solami-sportsbook-landing.vercel.app",
  },
  {
    slug: "court-case-app",
    title: "Court Case App",
    description:
      "A court case management application built with TypeScript. Tracks and organizes legal case data with a clean, functional interface.",
    tags: ["TypeScript", "React", "Legal Tech"],
    link: "https://github.com/richiekaroki/court-case-app",
    repo: "https://github.com/richiekaroki/court-case-app",
  },
  {
    slug: "livestock-demo",
    title: "Livestock Demo",
    description:
      "A livestock management demo application built with TypeScript. Demonstrates full stack capabilities with a focus on data modeling and UI.",
    tags: ["TypeScript", "Full Stack", "Agritech"],
    link: "https://github.com/richiekaroki/livestock-demo",
    repo: "https://github.com/richiekaroki/livestock-demo",
  },
];

export default function ProjectsContent() {
  const [showAll, setShowAll] = useState(false);

  return (
    <>
      <HoloGridBackground />

      <FramerWrapper y={50} delay={0.1} className="w-full">
        <div className="relative w-full aspect-video max-h-[280px] rounded-lg overflow-hidden">
          <Image
            src={work1}
            alt="Richard Karoki, Work"
            fill
            priority
            placeholder="blur"
            className="object-cover"
            sizes="100vw"
          />
        </div>
      </FramerWrapper>

      <FramerWrapper y={50} delay={0.15} className="w-full">
        <p className="font-inter text-lg w-full text-muted-foreground max-sm:text-base max-w-2xl leading-relaxed">
          A curated collection of creative endeavors and technical projects.
          Each piece represents a journey of innovation, problem solving, and
          continuous learning.
        </p>
      </FramerWrapper>

      {/* Featured: first card full-width, rest in 2-col grid */}
      <FramerWrapper y={50} delay={0.2} className="w-full">
        <ProjectCard value={featured[0]} num={0} featured />
      </FramerWrapper>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
        {featured.slice(1).map((val, indx) => (
          <ProjectCard key={indx} value={val} num={indx + 1} />
        ))}
      </div>

      {showAll && (
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
          {more.map((val, indx) => (
            <ProjectCard key={indx} value={val} num={indx + featured.length} />
          ))}
        </div>
      )}

      <Button
        variant="ghost"
        onClick={() => setShowAll(!showAll)}
        className="gap-2 text-muted-foreground"
      >
        {showAll ? (
          <>Show less <ChevronUp className="h-4 w-4" /></>
        ) : (
          <>View all projects <ChevronDown className="h-4 w-4" /></>
        )}
      </Button>
    </>
  );
}
