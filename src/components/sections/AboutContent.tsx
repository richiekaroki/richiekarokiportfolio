"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import FramerWrapper from "@/components/animation/FramerWrapper";
import SectionNav from "@/components/layout/SectionNav";
import dynamic from "next/dynamic";
const AmbientDepth = dynamic(() => import("@/components/three/AmbientDepth"), { ssr: false });
import { Circle, Globe2, Languages } from "lucide-react";
import Image from "next/image";
import richie1 from "@/assets/user-richie.jpg";
import richie2 from "@/assets/user-richie2.jpg";
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTypescript,
  SiCplusplus,
  SiPython,
  SiReact,
  SiNextdotjs,
  SiVuedotjs,
  SiSvelte,
  SiTailwindcss,
  SiGit,
  SiDocker,
  SiFirebase,
  SiDjango,
  SiRedis,
  SiPostgresql,
} from "react-icons/si";
import { FaJava, FaLaravel } from "react-icons/fa";
import { VscCode } from "react-icons/vsc";

const navItems = [
  { id: "bio", label: "Bio" },
  { id: "quick-facts", label: "Quick Facts" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "certifications", label: "Certifications" },
  { id: "writing", label: "Writing" },
];

const languages = [
  { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" /> },
  { name: "Python", icon: <SiPython className="text-[#3776AB]" /> },
  { name: "Java", icon: <FaJava className="text-[#ED8B00]" /> },
  { name: "C++", icon: <SiCplusplus className="text-[#00599C]" /> },
];

const frontend = [
  { name: "React", icon: <SiReact className="text-[#61DAFB]" /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "Vue.js", icon: <SiVuedotjs className="text-[#4FC08D]" /> },
  { name: "Svelte", icon: <SiSvelte className="text-[#FF3E00]" /> },
  { name: "HTML5", icon: <SiHtml5 className="text-[#E34F26]" /> },
  { name: "CSS3", icon: <SiCss className="text-[#1572B6]" /> },
  { name: "Tailwind", icon: <SiTailwindcss className="text-[#06B6D4]" /> },
];

const backend = [
  { name: "NestJS", icon: <SiJavascript className="text-[#F7DF1E]" /> },
  { name: "Node.js", icon: <SiJavascript className="text-[#F7DF1E]" /> },
  { name: "Laravel", icon: <FaLaravel className="text-[#FF2D20]" /> },
  { name: "Django", icon: <SiDjango className="text-[#092E20]" /> },
];

const database = [
  { name: "PostgreSQL", icon: <SiPostgresql className="text-[#4169E1]" /> },
  { name: "Redis", icon: <SiRedis className="text-[#DC382D]" /> },
  { name: "Firebase", icon: <SiFirebase className="text-[#FFCA28]" /> },
];

const tools = [
  { name: "Docker", icon: <SiDocker className="text-[#2496ED]" /> },
  { name: "Git", icon: <SiGit className="text-[#F05032]" /> },
  { name: "VS Code", icon: <VscCode className="text-[#007ACC]" /> },
];

const quickFacts = [
  { name: "Language", answer: "English", icon: <Languages className="h-11 w-11" /> },
  { name: "Nationality", answer: "Kenyan", icon: <Globe2 className="h-8 w-8" /> },
];

export default function AboutContent() {
  const [activeSection, setActiveSection] = useState("bio");
  const sectionRefs = useRef<Map<string, HTMLElement>>(new Map());

  const registerRef = useCallback((id: string, el: HTMLElement | null) => {
    if (el) sectionRefs.current.set(id, el);
    else sectionRefs.current.delete(id);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        }
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    sectionRefs.current.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-0 lg:min-h-screen w-full relative flex flex-col overflow-hidden">
      <AmbientDepth section={activeSection} />

      {/* Mobile nav (horizontal tabs) */}
      <div className="lg:hidden relative z-20">
        <SectionNav items={navItems} activeSection={activeSection} />
      </div>

      {/* Desktop sidebar (fixed, outside flow) */}
      <div className="hidden lg:block">
        <SectionNav items={navItems} activeSection={activeSection} />
      </div>

      <div className="relative z-10 w-full flex flex-1">
        {/* Content — left padding on lg+ to clear fixed sidebar */}
        <div className="flex-1 flex flex-col gap-8 sm:gap-10 px-6 lg:pl-56 lg:pr-12 pt-14 pb-10 lg:pt-10">
          <FramerWrapper y={0} x={-100} className="w-full">
            <h1 className="font-source-serif text-primary font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight [text-wrap:balance]">
              Software Engineer Based In Kenya.
            </h1>
            <div className="w-16 h-1 bg-primary-sky mt-4" />
          </FramerWrapper>

          {/* Bio */}
          <section id="bio" ref={(el) => registerRef("bio", el)}>
            <FramerWrapper y={50} delay={0.15} className="w-full">
              <div className="w-full flex flex-col sm:flex-row gap-8 items-center">
                <div className="flex-1">
                  <p className="font-inter text-lg text-muted-foreground max-sm:text-base leading-relaxed">
                    I am a Software Engineer based in Kenya, and I build things that live on the internet.
                    Whether it is an AI powered gesture recognition system, a production ready API, or a
                    mobile app that helps people find housing, I find deep satisfaction in turning complex
                    problems into elegant, user friendly solutions.
                  </p>
                  <p className="font-inter text-lg text-muted-foreground max-sm:text-base mt-4 leading-relaxed">
                    My journey into software started with curiosity and a stubborn desire to understand
                    how things work. That curiosity led me through the full stack of modern web
                    development. I work with TypeScript, Python, NestJS, Vue, React, Flutter,
                    PostgreSQL, and Redis on a daily basis.
                  </p>
                </div>
                <div className="w-full sm:w-[280px] md:w-[320px] flex-shrink-0 relative overflow-hidden rounded-xl aspect-[3/4]">
                  <Image
                    src={richie1}
                    alt="Richard Karoki at work"
                    fill
                    className="object-cover rounded-xl grayscale hover:grayscale-0 transition-all duration-500"
                    sizes="(max-width: 640px) 100vw, 320px"
                    priority
                  />
                </div>
              </div>
            </FramerWrapper>

            <FramerWrapper y={50} delay={0.25} className="w-full mt-10">
              <div className="w-full flex flex-col sm:flex-row gap-8 items-center">
                <div className="w-full sm:w-[280px] md:w-[320px] flex-shrink-0 relative overflow-hidden rounded-xl aspect-square order-2 sm:order-1">
                  <Image
                    src={richie2}
                    alt="Richard Karoki portrait"
                    fill
                    className="object-cover rounded-xl grayscale hover:grayscale-0 transition-all duration-500"
                    sizes="(max-width: 640px) 100vw, 320px"
                  />
                </div>
                <div className="flex-1 order-1 sm:order-2">
                  <p className="font-inter text-lg text-muted-foreground max-sm:text-base leading-relaxed">
                    I have built housing recommender systems powered by Firebase, enterprise grade job
                    platforms with JWT authentication and webhook delivery, and real time chat applications
                    that serve developer communities.
                  </p>
                  <p className="font-inter text-lg text-muted-foreground max-sm:text-base mt-4 leading-relaxed">
                    What excites me most is the space where technology meets real human need. I have
                    spent years contributing to open source projects, writing about web development on
                    platforms like Dev.to and Hashnode, and exploring the cutting edge of artificial
                    intelligence and accessibility technology.
                  </p>
                </div>
              </div>
            </FramerWrapper>
          </section>

          {/* Quick Facts */}
          <section id="quick-facts" ref={(el) => registerRef("quick-facts", el)}>
            <FramerWrapper className="w-full" y={50} delay={0.3}>
              <div className="w-full flex flex-row justify-between max-lg:flex-col gap-6">
                {quickFacts.map((val, indx) => (
                  <div className="p-1 w-fit relative" key={indx}>
                    <h2 className="gap-2 text-3xl font-source-serif text-primary font-semibold relative flex icon_underline max-sm:text-2xl">{val.icon}{val.name}</h2>
                    <div className="flex gap-2 justify-center items-center flex-row text-xl text-primary pt-3 max-lg:justify-start">
                      <Circle className="h-3 w-3" /> {val.answer}
                    </div>
                  </div>
                ))}
              </div>
            </FramerWrapper>
          </section>

          {/* Skills */}
          <section id="skills" ref={(el) => registerRef("skills", el)}>
            <FramerWrapper className="w-full" y={50} delay={0.35}>
              <h2 className="text-2xl font-source-serif text-primary font-semibold mb-4">Languages</h2>
              <div className="w-full grid grid-cols-[repeat(auto-fit,minmax(100px,1fr))] gap-4">
                {languages.map((skill, idx) => (
                  <div key={idx} className="flex flex-col items-center gap-2 p-3 rounded-lg bg-secondary/50">
                    <span className="text-2xl">{skill.icon}</span>
                    <span className="text-xs text-muted-foreground text-center">{skill.name}</span>
                  </div>
                ))}
              </div>
            </FramerWrapper>

            <FramerWrapper className="w-full" y={50} delay={0.4}>
              <h2 className="text-2xl font-source-serif text-primary font-semibold mb-4 mt-10">Frontend</h2>
              <div className="w-full grid grid-cols-[repeat(auto-fit,minmax(100px,1fr))] gap-4">
                {frontend.map((skill, idx) => (
                  <div key={idx} className="flex flex-col items-center gap-2 p-3 rounded-lg bg-secondary/50">
                    <span className="text-2xl">{skill.icon}</span>
                    <span className="text-xs text-muted-foreground text-center">{skill.name}</span>
                  </div>
                ))}
              </div>
            </FramerWrapper>

            <FramerWrapper className="w-full" y={50} delay={0.45}>
              <h2 className="text-2xl font-source-serif text-primary font-semibold mb-4 mt-10">Backend</h2>
              <div className="w-full grid grid-cols-[repeat(auto-fit,minmax(100px,1fr))] gap-4">
                {backend.map((skill, idx) => (
                  <div key={idx} className="flex flex-col items-center gap-2 p-3 rounded-lg bg-secondary/50">
                    <span className="text-2xl">{skill.icon}</span>
                    <span className="text-xs text-muted-foreground text-center">{skill.name}</span>
                  </div>
                ))}
              </div>
            </FramerWrapper>

            <FramerWrapper className="w-full" y={50} delay={0.5}>
              <h2 className="text-2xl font-source-serif text-primary font-semibold mb-4 mt-10">Database</h2>
              <div className="w-full grid grid-cols-[repeat(auto-fit,minmax(100px,1fr))] gap-4">
                {database.map((skill, idx) => (
                  <div key={idx} className="flex flex-col items-center gap-2 p-3 rounded-lg bg-secondary/50">
                    <span className="text-2xl">{skill.icon}</span>
                    <span className="text-xs text-muted-foreground text-center">{skill.name}</span>
                  </div>
                ))}
              </div>
            </FramerWrapper>

            <FramerWrapper className="w-full" y={50} delay={0.55}>
              <h2 className="text-2xl font-source-serif text-primary font-semibold mb-4 mt-10">Tools</h2>
              <div className="w-full grid grid-cols-[repeat(auto-fit,minmax(100px,1fr))] gap-4">
                {tools.map((skill, idx) => (
                  <div key={idx} className="flex flex-col items-center gap-2 p-3 rounded-lg bg-secondary/50">
                    <span className="text-2xl">{skill.icon}</span>
                    <span className="text-xs text-muted-foreground text-center">{skill.name}</span>
                  </div>
                ))}
              </div>
            </FramerWrapper>
          </section>

          {/* Education */}
          <section id="education" ref={(el) => registerRef("education", el)}>
            <FramerWrapper className="w-full" y={50} delay={0.5}>
              <h2 className="text-2xl font-source-serif text-primary font-semibold mb-6">Education</h2>
              <div className="w-full flex flex-col sm:flex-row gap-4 sm:gap-0">
                <div className="sm:w-1/4 font-source-serif flex sm:items-start sm:justify-start text-base sm:text-lg text-muted-foreground">
                  2017 to 2023
                </div>
                <div className="relative sm:w-3/4 sm:border-l border-border pl-6 gap-3">
                  <div className="text-xl sm:text-2xl font-source-serif text-primary">
                    BSc in Computer Technology
                  </div>
                  <p className="font-inter text-sm text-muted-foreground mt-1">
                    Jomo Kenyatta University of Agriculture and Technology
                  </p>
                  <p className="font-inter text-sm sm:text-base w-full text-muted-foreground mt-2 leading-relaxed">
                    Studied software engineering, data structures, algorithms, databases,
                    and network systems. Built multiple projects including a gesture
                    recognition system and web based applications during the program.
                  </p>
                </div>
              </div>
            </FramerWrapper>
          </section>

          {/* Certifications */}
          <section id="certifications" ref={(el) => registerRef("certifications", el)}>
            <FramerWrapper className="w-full" y={50} delay={0.55}>
              <h2 className="text-2xl font-source-serif text-primary font-semibold mb-6">Certifications</h2>
              <div className="w-full flex flex-col sm:flex-row gap-4 sm:gap-0">
                <div className="sm:w-1/4 font-source-serif flex sm:items-start sm:justify-start text-base sm:text-lg text-muted-foreground">
                  Certifications
                </div>
                <div className="relative sm:w-3/4 sm:border-l border-border pl-6 gap-3">
                  <div className="flex flex-col gap-3">
                    <div>
                      <span className="text-base font-source-serif text-primary">JavaScript Algorithms and Data Structures</span>
                      <p className="font-inter text-sm text-muted-foreground">freeCodeCamp</p>
                    </div>
                    <div>
                      <span className="text-base font-source-serif text-primary">Problem Solving (Basic)</span>
                      <p className="font-inter text-sm text-muted-foreground">HackerRank</p>
                    </div>
                    <div>
                      <span className="text-base font-source-serif text-primary">Networking Basics</span>
                      <p className="font-inter text-sm text-muted-foreground">Cisco Networking Academy</p>
                    </div>
                  </div>
                </div>
              </div>
            </FramerWrapper>
          </section>

          {/* Writing */}
          <section id="writing" ref={(el) => registerRef("writing", el)}>
            <FramerWrapper className="w-full" y={50} delay={0.6}>
              <h2 className="text-2xl font-source-serif text-primary font-semibold mb-4">Writing</h2>
              <div className="w-full h-fit flex flex-col sm:flex-row flex-wrap gap-4">
                <a
                  href="https://dev.to/richiekaroki"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary-sky transition-colors"
                >
                  <Circle className="h-3 w-3 flex-shrink-0 text-primary-sky" />
                  Dev.to Blog
                </a>
                <a
                  href="https://hashnode.com/@richiekaroki"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary-sky transition-colors"
                >
                  <Circle className="h-3 w-3 flex-shrink-0 text-primary-sky" />
                  Hashnode Blog
                </a>
              </div>
            </FramerWrapper>
          </section>
        </div>
      </div>
    </div>
  );
}
