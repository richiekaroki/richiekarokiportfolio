import FramerWrapper from "@/components/animation/FramerWrapper";
import ThreeBackground from "@/components/backgrounds/FloatingGeoBackground";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Plug, Rocket, Network, Search, ArrowRight } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import type { Metadata } from "next";
import StructuredData from "@/components/seo/StructuredData";

export const metadata: Metadata = {
  title: "Consulting",
  description:
    "Freelance IT consulting for full-stack web apps, API design, MVP builds, network setup, and code audits by Richard Karoki.",
};

const services = [
  {
    title: "Full-Stack Web Apps",
    icon: <Code className="h-5 w-5" />,
    description: "Next.js, React, Vue, Laravel, Flask, Node/TypeScript. Production-grade applications built end to end.",
  },
  {
    title: "API Design & Integration",
    icon: <Plug className="h-5 w-5" />,
    description: "REST APIs, third-party integrations, webhook systems. Reliable interfaces that connect your services.",
  },
  {
    title: "MVP Builds for Startups",
    icon: <Rocket className="h-5 w-5" />,
    description: "From idea to working product, fast. Focused on shipping the core value without over-engineering.",
  },
  {
    title: "Network Setup & Administration",
    icon: <Network className="h-5 w-5" />,
    description: "Enterprise-grade configs, Cisco-based infrastructure, reliable and secure network architecture.",
  },
  {
    title: "Code Audits & Performance",
    icon: <Search className="h-5 w-5" />,
    description: "Review your existing codebase for bugs, security issues, and performance bottlenecks. Actionable recommendations.",
  },
];

const testimonials = [
  {
    name: "Wanjiku Mwangi",
    role: "Founder, SafeHouse Tech",
    text: "Richard built our entire rental matching platform from scratch. The Firebase integration alone saved us months of work. He delivered on time and the system has been rock solid since launch.",
  },
  {
    name: "Otieno Odhiambo",
    role: "CTO, Payroll Africa",
    text: "We needed a production-grade API with JWT auth and webhook delivery. Richard didn't just build it — he documented everything, wrote tests, and walked our team through the architecture. Highly recommend.",
  },
  {
    name: "Amina Hassan",
    role: "Product Lead, JobLink",
    text: "Richard audited our codebase and found performance bottlenecks we had missed for months. His recommendations were practical and easy to implement. Our app speed improved by 40% after his review.",
  },
];

const caseStudies = [
  {
    title: "Job Platform with JWT Auth & Webhooks",
    description:
      "Built an enterprise-grade job platform handling secure authentication and real-time webhook delivery. Stack: NestJS, TypeScript, PostgreSQL, Redis.",
  },
  {
    title: "Housing Recommender System",
    description:
      "Built a Firebase-powered recommendation engine helping users find housing matches faster. Stack: React, Firebase, TypeScript.",
  },
];

export default function ConsultingPage() {
  return (
    <div className="min-h-0 lg:min-h-dvh w-full relative flex flex-col items-start gap-10 overflow-hidden">
      <StructuredData page="consulting" />
      <ThreeBackground />
      <FramerWrapper y={0} x={-100} className="w-full relative z-10">
        <h1 className="font-source-serif text-primary font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight [text-wrap:balance]">
          Freelance IT Consulting
        </h1>
        <div className="w-16 h-1 bg-primary-sky mt-4" />
      </FramerWrapper>

      <FramerWrapper y={50} delay={0.1} className="w-full">
        <p className="font-inter text-lg text-muted-foreground max-sm:text-base max-w-prose leading-relaxed">
          Practical, production-grade software built by someone who ships.
          Whether you need a full-stack build, an API integrated, or your infrastructure
          sorted, I deliver real results.
        </p>
      </FramerWrapper>

      {/* Services */}
      <FramerWrapper y={50} delay={0.15} className="w-full">
        <h2 className="text-2xl font-source-serif text-primary font-semibold mb-4">
          What I Do
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {services.map((service, idx) => (
            <Card key={idx} className="transition-all hover:shadow-md">
              <CardHeader className="flex flex-row items-center gap-3 pb-2">
                <div className="text-primary-sky">{service.icon}</div>
                <CardTitle className="text-base font-semibold text-primary">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </FramerWrapper>

      {/* How I Work */}
      <FramerWrapper y={50} delay={0.2} className="w-full">
        <h2 className="text-2xl font-source-serif text-primary font-semibold mb-4">
          How I Work
        </h2>
        <div className="flex flex-col sm:flex-row gap-4 sm:items-center">
          {["Discovery call", "Scope & quote", "Build & deliver"].map((step, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-sky text-white text-sm font-bold">
                {idx + 1}
              </span>
              <span className="text-muted-foreground">{step}</span>
              {idx < 2 && <ArrowRight className="h-4 w-4 text-muted-foreground hidden sm:block" />}
            </div>
          ))}
        </div>
      </FramerWrapper>

      {/* Case Studies */}
      <FramerWrapper y={50} delay={0.25} className="w-full">
        <h2 className="text-2xl font-source-serif text-primary font-semibold mb-4">
          Case Studies
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {caseStudies.map((study, idx) => (
            <Card key={idx} className="transition-all hover:shadow-md">
              <CardHeader>
                <CardTitle className="text-base font-semibold text-primary">
                  {study.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {study.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </FramerWrapper>

      {/* Testimonials */}
      <FramerWrapper y={50} delay={0.3} className="w-full">
        <h2 className="text-2xl font-source-serif text-primary font-semibold mb-4">
          What Clients Say
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
            Ready to start a project?
          </h2>
          <p className="text-muted-foreground mb-4">
            Contact me for a free scoping call and quote.
          </p>
          <Link
            href="/contact"
            className={buttonVariants({ variant: "default", size: "default" })}
          >
            Book a Consultation
            <ArrowRight className="h-4 w-4 ml-2" />
          </Link>
        </div>
      </FramerWrapper>
    </div>
  );
}
