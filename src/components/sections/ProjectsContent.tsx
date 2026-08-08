"use client";

import FramerWrapper from "@/components/animation/FramerWrapper";
import HoloGridBackground from "@/components/backgrounds/HoloGridBackground";
import ProjectCard from "@/components/sections/ProjectCard";
import Image from "next/image";
import work1 from "@/assets/work-1.png";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";
import { projects } from "@/lib/projects";

const featured = projects.filter(p =>
  ["job-application-api", "aivirtualmouse", "wam-onboarding", "broadcast-hub", "wam-sportsbook"].includes(p.slug)
);

const more = projects.filter(p =>
  ["product-dashboard", "zoo-app", "kanban-task-manager", "court-case-app", "livestock-demo"].includes(p.slug)
);

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
        <p className="font-inter text-lg w-full text-muted-foreground max-sm:text-base max-w-prose leading-relaxed">
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
