import FramerWrapper from "@/components/animation/FramerWrapper";
import ThreeBackground from "@/components/backgrounds/ConstellationBackground";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Users, Award, ArrowRight } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import type { Metadata } from "next";
import StructuredData from "@/components/seo/StructuredData";

export const metadata: Metadata = {
  title: "Tutoring",
  description:
    "1:1 programming tutoring. Practical, project-based, beginner-friendly sessions by a working software engineer.",
};

const subjects = [
  {
    title: "Programming Fundamentals",
    icon: <BookOpen className="h-5 w-5" />,
    description: "Variables, logic, functions, OOP basics. The building blocks that every developer needs.",
  },
  {
    title: "Project-Based Learning",
    icon: <Users className="h-5 w-5" />,
    description: "Real projects, not just theory. Build something you can show in your portfolio.",
  },
  {
    title: "Interview & Portfolio Prep",
    icon: <Award className="h-5 w-5" />,
    description: "Get ready for your first tech role with practical guidance on interviews and showcasing your work.",
  },
];

const testimonials = [
  {
    name: "Faith Njeri",
    role: "Junior Developer, Andela",
    text: "I went from knowing zero JavaScript to building my first React app in 8 weeks. Richard explains things in a way that actually makes sense. He doesn't just teach code, he teaches you how to think like a developer.",
  },
  {
    name: "Kevin Kipchoge",
    role: "CS Student, UoN",
    text: "My university courses were mostly theory. Richard showed me how to actually build things — real APIs, real databases, real deployment. I landed my first internship two months after starting sessions.",
  },
  {
    name: "Cecilia Wambui",
    role: "Career Switcher, ex-Banker",
    text: "I was intimidated by coding at 32. Richard made it approachable. We started with Python basics and within three months I had built a full dashboard app. Now I'm working as a junior developer.",
  },
];

const formatDetails = [
  { label: "Format", value: "1:1 sessions, online (or in-person if applicable)" },
  { label: "Level", value: "Beginner to early-intermediate" },
  { label: "Scheduling", value: "Flexible. Evenings and weekends available" },
];

export default function TutoringPage() {
  return (
    <div className="min-h-0 lg:min-h-dvh w-full relative flex flex-col items-start gap-10 overflow-hidden">
      <StructuredData page="tutoring" />
      <ThreeBackground />
      <FramerWrapper y={0} x={-100} className="w-full relative z-10">
        <h1 className="font-source-serif text-primary font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight [text-wrap:balance]">
          Learn to Code, 1:1 Tutoring
        </h1>
        <div className="w-16 h-1 bg-primary-sky mt-4" />
      </FramerWrapper>

      <FramerWrapper y={50} delay={0.1} className="w-full">
        <p className="font-inter text-lg text-muted-foreground max-sm:text-base max-w-prose leading-relaxed">
          Practical, project-based programming fundamentals, taught by a working
          software engineer. Not just a curriculum, real practice from real experience.
        </p>
      </FramerWrapper>

      {/* Subjects */}
      <FramerWrapper y={50} delay={0.15} className="w-full">
        <h2 className="text-2xl font-source-serif text-primary font-semibold mb-4">
          What I Teach
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {subjects.map((subject, idx) => (
            <Card key={idx} className="transition-all hover:shadow-md">
              <CardHeader className="flex flex-row items-center gap-3 pb-2">
                <div className="text-primary-sky">{subject.icon}</div>
                <CardTitle className="text-base font-semibold text-primary">
                  {subject.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {subject.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </FramerWrapper>

      {/* Format */}
      <FramerWrapper y={50} delay={0.2} className="w-full">
        <h2 className="text-2xl font-source-serif text-primary font-semibold mb-4">
          Format
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {formatDetails.map((detail, idx) => (
            <div key={idx} className="flex flex-col gap-1">
              <span className="text-sm font-medium text-primary">{detail.label}</span>
              <span className="text-muted-foreground">{detail.value}</span>
            </div>
          ))}
        </div>
      </FramerWrapper>

      {/* Why Learn With Me */}
      <FramerWrapper y={50} delay={0.25} className="w-full">
        <h2 className="text-2xl font-source-serif text-primary font-semibold mb-4">
          Why Learn With Me
        </h2>
        <p className="font-inter text-lg text-muted-foreground max-sm:text-base leading-relaxed max-w-2xl">
          You&apos;re learning from an active working engineer teaching from real practice,
          not just a curriculum. I build production software every day, and what I teach
          comes from what actually works in the industry.
        </p>
      </FramerWrapper>

      {/* Testimonials */}
      <FramerWrapper y={50} delay={0.3} className="w-full">
        <h2 className="text-2xl font-source-serif text-primary font-semibold mb-4">
          What Students Say
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {testimonials.map((t, idx) => (
            <Card key={idx} className="transition-all hover:shadow-md">
              <CardContent className="pt-6">
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div>
                  <p className="text-sm font-medium text-primary">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </FramerWrapper>

      {/* CTA */}
      <FramerWrapper y={50} delay={0.35} className="w-full">
        <div className="w-full p-6 rounded-lg border bg-secondary/50">
          <h2 className="text-2xl font-source-serif text-primary font-semibold mb-2">
            Ready to start learning?
          </h2>
          <p className="text-muted-foreground mb-4">
            Book a free intro session to see if we&apos;re a good fit.
          </p>
          <Link
            href="/contact"
            className={buttonVariants({ variant: "default", size: "default" })}
          >
            Book a Session
            <ArrowRight className="h-4 w-4 ml-2" />
          </Link>
        </div>
      </FramerWrapper>
    </div>
  );
}
