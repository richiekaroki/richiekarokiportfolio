"use client";

import { useRef } from "react";
import Link from "next/link";
import { track } from "@vercel/analytics";
import SocialLinks from "@/components/sections/SocialLinks";
import HeroContent from "@/components/sections/HeroContent";
import HeroImage from "@/components/sections/HeroImage";
import ScrambleButton from "@/components/animation/ScrambleButton";
import FramerWrapper from "@/components/animation/FramerWrapper";
import TwoPathSplit from "@/components/sections/TwoPathSplit";
import ProjectCard from "@/components/sections/ProjectCard";
import dynamic from "next/dynamic";
const ParticleHero = dynamic(() => import("@/components/three/ParticleHero"), { ssr: false });

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
    slug: "zoo-app",
    title: "Zoo App",
    description:
      "An interactive zoo management application built with Vue.js. Features animal browsing, categorization, and a clean responsive interface.",
    tags: ["Vue", "JavaScript", "Responsive"],
    link: "https://zoo-app-nu.vercel.app",
  },
];

const services = [
  {
    title: "Full-Stack Web Apps",
    description: "Next.js, React, Vue, Laravel, Flask, Node/TypeScript. Production-grade applications built end to end.",
  },
  {
    title: "API Design & Integration",
    description: "REST APIs, third-party integrations, webhook systems. Reliable interfaces that connect your services.",
  },
  {
    title: "MVP Builds for Startups",
    description: "From idea to working product, fast. Focused on shipping the core value without over-engineering.",
  },
  {
    title: "1:1 Programming Tutoring",
    description: "Practical, project-based fundamentals taught by a working engineer. Beginner to early-intermediate.",
  },
];

export default function HomeContent() {
  const hoveredCta = useRef<string | null>(null);

  return (
    <div className="w-full">
      {/* ── HERO SECTION ── */}
      <section className="relative w-full min-h-0 lg:min-h-dvh flex items-start lg:items-center">
        {/* Particle background */}
        <div className="absolute inset-0 z-0">
          <ParticleHero hoveredCta={hoveredCta} />
        </div>

        {/* Hero content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-16 lg:pt-20">
          <div className="flex flex-col lg:flex-row items-center lg:items-center justify-between gap-12 lg:gap-20">
            {/* LEFT — Text */}
            <FramerWrapper className="flex-1 max-w-xl" y={0} x={-80}>
              <HeroContent />
              <div className="mt-8 flex items-center gap-4">
                <SocialLinks />
                <Link href="/Richie-software-engineer.pdf" download onClick={() => track("resume_download")}>
                  <ScrambleButton label="Download Resume" />
                </Link>
              </div>
            </FramerWrapper>

            {/* RIGHT — Image */}
            <FramerWrapper
              className="flex-shrink-0"
              y={0}
              x={80}
              delay={0.2}
            >
              <HeroImage />
            </FramerWrapper>
          </div>
        </div>
      </section>

      {/* ── TWO-PATH SPLIT ── */}
      <section className="w-full py-16">
        <TwoPathSplit onHover={(cta) => { hoveredCta.current = cta; }} />
      </section>

      {/* ── PROJECTS ── */}
      <section className="w-full py-16">
        <FramerWrapper y={0} x={-50} className="w-full">
          <h2 className="font-source-serif text-primary font-bold text-3xl sm:text-4xl leading-tight [text-wrap:balance]">
            Featured Projects
          </h2>
          <div className="w-16 h-1 bg-primary-sky mt-4" />
        </FramerWrapper>

        <FramerWrapper y={50} delay={0.1} className="w-full mt-8">
          <ProjectCard value={featured[0]} num={0} featured />
        </FramerWrapper>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          {featured.slice(1).map((val, indx) => (
            <ProjectCard key={indx} value={val} num={indx + 1} />
          ))}
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="w-full py-16">
        <FramerWrapper y={0} x={-50} className="w-full">
          <h2 className="font-source-serif text-primary font-bold text-3xl sm:text-4xl leading-tight [text-wrap:balance]">
            What I Do
          </h2>
          <div className="w-16 h-1 bg-primary-sky mt-4" />
        </FramerWrapper>

        <FramerWrapper y={50} delay={0.1} className="w-full mt-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {services.map((service, idx) => (
              <div key={idx} className="p-5 rounded-lg border border-border/50 transition-all hover:shadow-md">
                <h3 className="text-base font-semibold text-primary mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </FramerWrapper>

        <FramerWrapper y={50} delay={0.2} className="w-full mt-8">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary-sky text-white font-medium hover:bg-primary-sky/90 active:scale-[0.97] transition-all"
          >
            Get in touch
          </Link>
        </FramerWrapper>
      </section>
    </div>
  );
}
