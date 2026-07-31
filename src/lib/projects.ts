export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  link: string;
  repo?: string;
  challenges: string[];
  outcomes: string[];
}

export const projects: Project[] = [
  {
    slug: "job-application-api",
    title: "Job Application API",
    description:
      "Production grade Job Applications API built with NestJS, TypeScript, PostgreSQL and Redis.",
    longDescription:
      "A production-grade Job Applications API designed for enterprise recruitment platforms. Built with NestJS and TypeScript, it handles secure authentication, role-based access control, and real-time webhook delivery for downstream integrations.",
    tags: ["NestJS", "TypeScript", "PostgreSQL", "Redis", "JWT"],
    link: "https://job-application-api-production.up.railway.app/api/v1/docs",
    repo: "https://github.com/richiekaroki/job-application-api",
    challenges: [
      "Implementing secure JWT auth with refresh token rotation without blocking legitimate users",
      "Designing a webhook delivery system with HMAC SHA256 signing that handles retries and failures gracefully",
      "Building a 4-role RBAC system that scales without becoming unwieldy",
    ],
    outcomes: [
      "Full Swagger documentation for API consumers",
      "Rate limiting to prevent abuse",
      "Deployed on Railway with CI/CD pipeline",
    ],
  },
  {
    slug: "broadcast-hub",
    title: "Broadcast Hub",
    description:
      "Media and Broadcast Content Management Platform built with NestJS and React.",
    longDescription:
      "A full-stack content management platform for media and broadcast organizations. Built with NestJS on the backend and React on the frontend, it streamlines content workflows from ingestion to publication.",
    tags: ["NestJS", "React", "TypeScript", "Full Stack"],
    link: "https://broadcast-hub-web.vercel.app/",
    repo: "https://github.com/richiekaroki/broadcast-hub",
    challenges: [
      "Building a real-time content workflow that handles concurrent edits without data loss",
      "Designing a clean API layer that both the React frontend and third-party integrations can consume",
      "Managing complex state across the broadcast scheduling interface",
    ],
    outcomes: [
      "End-to-end content management from upload to scheduling",
      "Clean separation between backend API and frontend presentation layer",
      "Deployed on Vercel with automatic previews",
    ],
  },
  {
    slug: "actserv-onboarding",
    title: "Actserv Onboarding Platform",
    description:
      "Enterprise onboarding platform built with TypeScript.",
    longDescription:
      "An enterprise-grade employee onboarding platform that streamlines the journey from offer letter to fully productive team member. Built with TypeScript and React, it handles document collection, task tracking, and progress monitoring.",
    tags: ["TypeScript", "React", "Enterprise", "Frontend"],
    link: "https://onboarding-frontend.vercel.app/",
    challenges: [
      "Building a multi-step onboarding flow that adapts to different employee roles and departments",
      "Implementing document upload with validation and status tracking",
      "Creating an admin dashboard that shows real-time onboarding progress across the organization",
    ],
    outcomes: [
      "Reduced onboarding time by centralizing all tasks in one platform",
      "Role-based onboarding flows that adapt automatically",
      "Clean, production-ready interface that scales with the organization",
    ],
  },
  {
    slug: "product-dashboard",
    title: "Product Dashboard",
    description:
      "A real time product analytics dashboard built with TypeScript and React.",
    longDescription:
      "A real-time product analytics dashboard that visualizes key metrics and performance data. Built with TypeScript and React, it provides responsive charts, tables, and filtering capabilities for data-driven decision making.",
    tags: ["TypeScript", "React", "Analytics", "Dashboard"],
    link: "https://product-dashboard-nine-kappa.vercel.app/",
    challenges: [
      "Rendering large datasets without blocking the main thread",
      "Building responsive charts that work across all screen sizes",
      "Implementing real-time data updates without causing layout thrashing",
    ],
    outcomes: [
      "Interactive charts with drill-down capabilities",
      "Responsive design that works on desktop and mobile",
      "Fast rendering even with large datasets",
    ],
  },
  {
    slug: "zoo-app",
    title: "Zoo App",
    description:
      "An interactive zoo management application built with Vue.js.",
    longDescription:
      "An interactive zoo management application built with Vue.js. Features animal browsing, categorization, and a clean responsive interface for managing and exploring zoo information.",
    tags: ["Vue", "JavaScript", "Responsive"],
    link: "https://zoo-app-nu.vercel.app",
    challenges: [
      "Building a responsive interface that works well on both desktop and mobile",
      "Implementing smooth animal browsing with filtering and categorization",
      "Keeping the codebase clean and maintainable with Vue.js best practices",
    ],
    outcomes: [
      "Clean, intuitive interface for browsing animal information",
      "Responsive design that adapts to all screen sizes",
      "Fast, lightweight application with good performance",
    ],
  },
  {
    slug: "solami-sportsbook",
    title: "Solami Sportsbook Landing",
    description:
      "Sportsbook landing page demo built with SvelteKit, TypeScript, and Tailwind CSS.",
    longDescription:
      "A sportsbook landing page demo built with SvelteKit, TypeScript, and Tailwind CSS. Features real-time bet slip state management, derived odds calculations, and responsive design for the sports betting industry.",
    tags: ["SvelteKit", "TypeScript", "Tailwind CSS", "State Management"],
    link: "https://solami-sportsbook-landing.vercel.app",
    challenges: [
      "Implementing real-time bet slip state that stays in sync across components",
      "Building derived odds calculations that update instantly as selections change",
      "Creating a responsive layout that handles complex betting interfaces on mobile",
    ],
    outcomes: [
      "Real-time bet slip with instant odds calculations",
      "Clean, responsive design optimized for sports betting UX",
      "SvelteKit-powered for fast page loads and smooth interactions",
    ],
  },
  {
    slug: "court-case-app",
    title: "Court Case App",
    description:
      "A court case management application built with TypeScript.",
    longDescription:
      "A court case management application built with TypeScript. Tracks and organizes legal case data with a clean, functional interface for legal professionals.",
    tags: ["TypeScript", "React", "Legal Tech"],
    link: "https://github.com/richiekaroki/court-case-app",
    repo: "https://github.com/richiekaroki/court-case-app",
    challenges: [
      "Designing a data model that captures the complexity of legal case information",
      "Building a search and filter system that handles large case volumes",
      "Creating an interface that's functional without being overwhelming",
    ],
    outcomes: [
      "Clean data model for case tracking and organization",
      "Search and filter capabilities for quick case retrieval",
      "Functional interface designed for daily use by legal professionals",
    ],
  },
  {
    slug: "livestock-demo",
    title: "Livestock Demo",
    description:
      "A livestock management demo application built with TypeScript.",
    longDescription:
      "A livestock management demo application built with TypeScript. Demonstrates full stack capabilities with a focus on data modeling, UI design, and agricultural technology.",
    tags: ["TypeScript", "Full Stack", "Agritech"],
    link: "https://github.com/richiekaroki/livestock-demo",
    repo: "https://github.com/richiekaroki/livestock-demo",
    challenges: [
      "Building a data model that captures livestock management workflows",
      "Creating a clean UI for agricultural data that's typically complex",
      "Demonstrating full stack capabilities in a focused, demo-able project",
    ],
    outcomes: [
      "Full stack demo showcasing TypeScript capabilities",
      "Clean data model for livestock tracking",
      "UI designed for clarity in agricultural contexts",
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
