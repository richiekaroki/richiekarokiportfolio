import { siteConfig } from "@/lib/config";

interface StructuredDataProps {
  page?: "home" | "about" | "consulting" | "tutoring" | "projects" | "contact";
}

interface SchemaObject {
  "@context": string;
  "@type": string;
  [key: string]: unknown;
}

export default function StructuredData({ page = "home" }: StructuredDataProps) {
  const schemas: SchemaObject[] = [];

  // Person schema (always included)
  schemas.push({
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    url: siteConfig.url,
    image: `${siteConfig.url}/portfolioLogo.jpg`,
    jobTitle: "Software Engineer",
    description: siteConfig.description,
    address: {
      "@type": "PostalAddress",
      addressCountry: "KE",
    },
    sameAs: [
      "https://github.com/richiekaroki",
      "https://x.com/richiekaroki",
      "https://www.linkedin.com/in/richard-karoki-007/",
      "https://dev.to/richiekaroki",
      "https://hashnode.com/@richiekaroki",
    ],
    knowsAbout: [
      "TypeScript",
      "React",
      "Next.js",
      "Node.js",
      "NestJS",
      "Vue.js",
      "Python",
      "PostgreSQL",
      "Redis",
      "Docker",
      "Full Stack Development",
      "Web Development",
      "API Design",
      "Software Engineering",
    ],
    offers: {
      "@type": "Offer",
      itemOffered: [
        {
          "@type": "Service",
          name: "Full-Stack Web Development",
          description: "Production-grade applications built end to end with Next.js, React, Vue, Laravel, Flask, Node/TypeScript.",
        },
        {
          "@type": "Service",
          name: "API Design & Integration",
          description: "REST APIs, third-party integrations, webhook systems. Reliable interfaces that connect your services.",
        },
        {
          "@type": "Service",
          name: "Programming Tutoring",
          description: "Practical, project-based programming fundamentals, taught by a working software engineer.",
        },
      ],
    },
  });

  // WebSite schema (home page only)
  if (page === "home") {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: siteConfig.name,
      url: siteConfig.url,
      description: siteConfig.description,
      author: {
        "@type": "Person",
        name: siteConfig.name,
      },
    });
  }

  // ProfessionalService schema (consulting page)
  if (page === "consulting") {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      name: `${siteConfig.name} - Freelance IT Consulting`,
      description: "Freelance IT consulting for full-stack web apps, API design, MVP builds, network setup, and code audits.",
      url: `${siteConfig.url}/consulting`,
      provider: {
        "@type": "Person",
        name: siteConfig.name,
      },
    });
  }

  // Course schema (tutoring page)
  if (page === "tutoring") {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "Course",
      name: `${siteConfig.name} - Programming Tutoring`,
      description: "1:1 programming tutoring. Practical, project-based, beginner-friendly sessions by a working software engineer.",
      url: `${siteConfig.url}/tutoring`,
      provider: {
        "@type": "Person",
        name: siteConfig.name,
      },
    });
  }

  // Breadcrumb schema (sub-pages only)
  if (page !== "home") {
    const pageName = page.charAt(0).toUpperCase() + page.slice(1);
    schemas.push({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: siteConfig.url,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: pageName,
          item: `${siteConfig.url}/${page}`,
        },
      ],
    });
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.length === 1 ? schemas[0] : schemas) }}
    />
  );
}
