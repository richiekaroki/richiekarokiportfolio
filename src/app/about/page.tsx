import type { Metadata } from "next";
import AboutContent from "@/components/sections/AboutContent";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Richard Karoki — a Software Engineer based in Kenya. Skilled in TypeScript, Python, React, Next.js, NestJS, Vue, PostgreSQL, and Redis. BSc in Computer Technology from JKUAT.",
  openGraph: {
    title: "About | Richard Karoki",
    description:
      "Learn about Richard Karoki — a Software Engineer based in Kenya building AI systems, production APIs, and mobile apps.",
    url: "https://richiekaroki.vercel.app/about",
  },
};

export default function AboutPage() {
  return <AboutContent />;
}
