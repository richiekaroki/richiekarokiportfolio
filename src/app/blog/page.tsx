import type { Metadata } from "next";
import BlogContent from "@/components/sections/BlogContent";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Articles about web development, software engineering, and technology by Richard Karoki.",
  openGraph: {
    title: "Blog | Richard Karoki",
    description:
      "Articles about web development, software engineering, and technology by Richard Karoki.",
    url: "https://richiekaroki.vercel.app/blog",
  },
};

export default function BlogPage() {
  return <BlogContent />;
}
