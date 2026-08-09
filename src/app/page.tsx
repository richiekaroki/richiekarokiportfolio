import type { Metadata } from "next";
import HomeContent from "@/components/sections/HomeContent";
import GitHubSection from "@/components/sections/GitHubSection";

export const metadata: Metadata = {
  title: {
    default: "Richard Karoki",
    template: "%s | Richard Karoki",
  },
  description:
    "Software Engineer building things that live on the internet — from AI systems to production-ready APIs. Based in Kenya.",
  openGraph: {
    title: "Richard Karoki",
    description:
      "Software Engineer building things that live on the internet — from AI systems to production-ready APIs.",
    url: "https://richiekaroki.vercel.app",
    siteName: "Richard Karoki",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Richard Karoki",
    description:
      "Software Engineer building things that live on the internet — from AI systems to production-ready APIs.",
    creator: "@richiekaroki",
  },
};

export default function Home() {
  return (
    <div className="w-full">
      <HomeContent />
      <div className="px-4 sm:px-6 lg:px-8">
        <GitHubSection />
      </div>
    </div>
  );
}
