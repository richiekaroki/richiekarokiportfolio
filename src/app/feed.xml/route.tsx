import { siteConfig } from "@/lib/config";

const posts = [
  {
    title: "Building a Production-Grade Job Application API with NestJS",
    link: "https://dev.to/richiekaroki",
    date: "2025-01-15",
    description: "How I built a production-grade API with JWT auth, RBAC, webhook delivery, and rate limiting using NestJS and TypeScript.",
  },
  {
    title: "Real-Time Chat Applications: Lessons from Building Developer Communities",
    link: "https://hashnode.com/@richiekaroki",
    date: "2024-11-20",
    description: "What I learned building real-time chat systems for developer communities using WebSockets and Firebase.",
  },
  {
    title: "Firebase-Powered Housing Recommender Systems",
    link: "https://dev.to/richiekaroki",
    date: "2024-09-10",
    description: "Building a recommendation engine that helps users find housing matches using Firebase and TypeScript.",
  },
];

export async function GET() {
  const items = posts
    .map(
      (post) => `    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${post.link}</link>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <description><![CDATA[${post.description}]]></description>
    </item>`
    )
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${siteConfig.name}</title>
    <link>${siteConfig.url}</link>
    <description>${siteConfig.description}</description>
    <atom:link href="${siteConfig.url}/feed.xml" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
