"use client";

import Link from "next/link";
import { Briefcase, BookOpen, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import FramerWrapper from "@/components/animation/FramerWrapper";

const paths = [
  {
    title: "Hire Me",
    icon: <Briefcase className="h-6 w-6" />,
    description:
      "Need a web app built, an API integrated, or your infrastructure sorted? I take on freelance and contract work for full-stack builds, MVPs, network setup, and code audits.",
    href: "/contact?type=consulting",
    cta: "Get in Touch",
  },
  {
    title: "Learn With Me",
    icon: <BookOpen className="h-6 w-6" />,
    description:
      "Learning to code or stuck on fundamentals? I tutor programming basics 1:1. Practical, project-based, beginner-friendly.",
    href: "/contact?type=tutoring",
    cta: "Get in Touch",
  },
];

export default function TwoPathSplit({ onHover }: { onHover?: (cta: "hire" | "learn" | null) => void }) {
  return (
    <section className="w-full max-w-5xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {paths.map((path, idx) => (
          <FramerWrapper key={idx} y={40} delay={0.1 + idx * 0.15} className="w-full">
            <Link
              href={path.href}
              className="block group h-full"
              onMouseEnter={() => onHover?.(idx === 0 ? "hire" : "learn")}
              onMouseLeave={() => onHover?.(null)}
            >
              <Card className="h-full transition-all duration-300 hover:shadow-lg hover:border-primary-sky/50 cursor-pointer border-border/50">
                <CardHeader className="flex flex-row items-center gap-3 pb-3">
                  <div className="text-primary-sky">{path.icon}</div>
                  <CardTitle className="text-xl font-bold text-primary">
                    {path.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col gap-5">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {path.description}
                  </p>
                  <span className="inline-flex items-center text-sm font-medium text-primary-sky group-hover:underline">
                    {path.cta}
                    <ArrowRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
                  </span>
                </CardContent>
              </Card>
            </Link>
          </FramerWrapper>
        ))}
      </div>
    </section>
  );
}
