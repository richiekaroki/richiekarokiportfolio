export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  link: string;
  repo?: string;
  image?: string;
  challenges: string[];
  outcomes: string[];
}

export const projects: Project[] = [
  {
    slug: "job-application-api",
    title: "Job Application API",
    description:
      "Production grade Job Applications API with JWT auth, 4 role RBAC, and webhook delivery. Built with NestJS, TypeScript, PostgreSQL and Redis.",
    longDescription:
      "A production grade Job Applications API designed for enterprise recruitment platforms. Built with NestJS and TypeScript, it handles secure authentication with refresh token rotation, 4 role RBAC with ownership verification, and real time webhook delivery with HMAC SHA256 signing for downstream integrations.",
    tags: ["NestJS", "TypeScript", "PostgreSQL", "Redis", "JWT"],
    link: "https://job-application-api-17rf.onrender.com/api/v1/docs",
    repo: "https://github.com/richiekaroki/job-application-api",
    challenges: [
      "Implementing secure JWT auth with refresh token rotation without blocking legitimate users",
      "Designing a webhook delivery system with HMAC SHA256 signing that handles retries and failures gracefully",
      "Building a 4 role RBAC system with ownership verification that scales without becoming unwieldy",
    ],
    outcomes: [
      "Full Swagger documentation for API consumers",
      "Rate limiting to prevent abuse",
      "Deployed on Railway with CI/CD pipeline",
    ],
  },
  {
    slug: "aivirtualmouse",
    title: "AI Virtual Mouse",
    description:
      "Real time hand motion capture and interpretation pipeline. Recognizes 32 gestures via webcam with live skeleton overlay. Built with MediaPipe, OpenCV, Flask, and SocketIO.",
    longDescription:
      "A real time motion capture and analysis system designed as foundational infrastructure for sign language translation and accessibility technology. Originally built for gesture-based cursor control, this project evolved into a full motion interpretation pipeline with 12 AI features including continuous CSLR, fingerspelling A-Z, HID output, and a Vision Transformer architecture. 142 tests passing, deployed on Render.",
    tags: ["Python", "MediaPipe", "OpenCV", "Flask", "Computer Vision"],
    link: "https://hand-motion-pipeline.onrender.com",
    repo: "https://github.com/richiekaroki/AIVirtualMouse",
    challenges: [
      "Building a real time pipeline that processes 32 hand gesture combinations at 15 FPS over WebSocket",
      "Implementing dual classification: rule based (32 combos) and ML based (RandomForest with Platt calibration)",
      "Extending gesture recognition into sign language infrastructure with CTC/attention decoding and DTW template matching",
    ],
    outcomes: [
      "12 AI features integrated: handedness, two-hand detection, continuous CSLR, fingerspelling, HID output, NLP translator",
      "142 tests passing with per module coverage",
      "Live demo deployed on Render with browser webcam support",
    ],
  },
  {
    slug: "wam-onboarding",
    title: "Mr.Wam Onboarding Platform",
    description:
      "Dynamic onboarding platform for financial services. Visual form builder with conditional logic, passwordless auth, PDF export, and submission tracking. Full stack with Next.js, Django, and PostgreSQL.",
    longDescription:
      "A dynamic onboarding platform for financial services that lets admins build custom onboarding forms (KYC, loan applications, investment declarations) with a visual drag and drop builder. Clients fill forms via unique links. Features passwordless magic link auth, submission status workflow, PDF export, bulk actions, escalating reminders, and audit logging. Full stack with Next.js frontend and Django REST backend.",
    tags: ["Next.js", "Django", "PostgreSQL", "TypeScript", "Full Stack"],
    link: "https://onboarding-frontend.vercel.app/",
    repo: "https://github.com/richiekaroki/wam-onboarding-platform",
    image: "/screenshots/actserv-onboarding.png",
    challenges: [
      "Building a visual form builder with drag and drop, conditional logic, and form versioning",
      "Implementing passwordless auth with magic links and JWT for both admin and client flows",
      "Designing a submission status workflow with bulk actions, PDF export, and escalating deadline reminders",
    ],
    outcomes: [
      "Admin dashboard with real time submission tracking and audit logging",
      "Client-facing forms via unique links with mobile responsive design",
      "Docker compose setup for local development with full API documentation",
    ],
  },
  {
    slug: "broadcast-hub",
    title: "Broadcast Hub",
    description:
      "Media and Broadcast Content Management Platform. Streamlines content workflows from ingestion to publication. Built with NestJS and React.",
    longDescription:
      "A full-stack content management platform for media and broadcast organizations. Built with NestJS on the backend and React on the frontend, it streamlines content workflows from ingestion to publication with real time scheduling and clean API separation.",
    tags: ["NestJS", "React", "TypeScript", "Full Stack"],
    link: "https://broadcast-hub-web.vercel.app/",
    repo: "https://github.com/richiekaroki/broadcast-hub",
    image: "/screenshots/broadcast-hub.png",
    challenges: [
      "Building a real time content workflow that handles concurrent edits without data loss",
      "Designing a clean API layer that both the React frontend and third party integrations can consume",
      "Managing complex state across the broadcast scheduling interface",
    ],
    outcomes: [
      "End-to-end content management from upload to scheduling",
      "Clean separation between backend API and frontend presentation layer",
      "Deployed on Vercel with automatic previews",
    ],
  },
  {
    slug: "wam-sportsbook",
    title: "WAM Sportsbook Landing",
    description:
      "Sportsbook landing page demo with real time bet slip state management and derived odds calculations. Built with SvelteKit, TypeScript, and Tailwind CSS.",
    longDescription:
      "A sportsbook landing page demo built with SvelteKit, TypeScript, and Tailwind CSS. Features real time bet slip state management, derived odds calculations, and responsive design for the sports betting industry. Uses Svelte 5 runes for reactive state management.",
    tags: ["SvelteKit", "TypeScript", "Tailwind CSS", "State Management"],
    link: "https://wam-sportsbook-landing.vercel.app/",
    repo: "https://github.com/richiekaroki/wam-sportsbook-landing",
    image: "/screenshots/wam-sportsbook.png",
    challenges: [
      "Implementing real time bet slip state that stays in sync across components using Svelte 5 runes",
      "Building derived odds calculations that update instantly as selections change",
      "Creating a responsive layout that handles complex betting interfaces on mobile",
    ],
    outcomes: [
      "Real-time bet slip with instant odds calculations",
      "Clean, responsive design optimized for sports betting UX",
      "SvelteKit powered for fast page loads and smooth interactions",
    ],
  },
  {
    slug: "product-dashboard",
    title: "Product Dashboard",
    description:
      "Real-time product analytics dashboard with interactive charts, filtering, and responsive data visualization. Built with TypeScript and React.",
    longDescription:
      "A real time product analytics dashboard that visualizes key metrics and performance data. Built with TypeScript and React, it provides responsive charts, tables, and filtering capabilities for data driven decision making.",
    tags: ["TypeScript", "React", "Analytics", "Dashboard"],
    link: "https://product-dashboard-nine-kappa.vercel.app/",
    repo: "https://github.com/richiekaroki/product-dashboard",
    image: "/screenshots/product-dashboard.png",
    challenges: [
      "Rendering large datasets without blocking the main thread",
      "Building responsive charts that work across all screen sizes",
      "Implementing real time data updates without causing layout thrashing",
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
      "Interactive zoo management SPA built with Vue.js, Vue Router, and Bootstrap CSS. Dynamically fetches animal data from API Ninjas.",
    longDescription:
      "An interactive zoo management single page application built with Vue.js, Vue Router, and Bootstrap CSS. Features animal browsing with descriptions and images dynamically fetched from API Ninjas, categorization, and a clean responsive interface.",
    tags: ["Vue", "JavaScript", "Responsive"],
    link: "https://zoo-app-nu.vercel.app",
    repo: "https://github.com/richiekaroki/zoo-app",
    image: "/screenshots/zoo-app.png",
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
    slug: "kanban-task-manager",
    title: "Kanban Task Manager",
    description:
      "Kanban style task manager with drag and drop, filtering, and local storage persistence. Built with Angular 17 and TypeScript.",
    longDescription:
      "An Angular-based Kanban style task manager app to organize tasks by status (To Do, In Progress, Done). Features drag and drop between columns, task filtering and search, local storage persistence, form validation, and responsive SCSS-based UI.",
    tags: ["Angular", "TypeScript", "SCSS", "RxJS"],
    link: "https://github.com/richiekaroki/kanban-task-manager",
    repo: "https://github.com/richiekaroki/kanban-task-manager",
    challenges: [
      "Implementing drag and drop between columns with smooth animations",
      "Building a reactive state management system with RxJS and local storage sync",
      "Creating responsive SCSS layouts that work across all screen sizes",
    ],
    outcomes: [
      "Drag-and-drop task management with persistent state",
      "Filter and search capabilities for quick task retrieval",
      "Modular Angular architecture with clean component separation",
    ],
  },
  {
    slug: "court-case-app",
    title: "Kenya Court Cases App",
    description:
      "Court case management application for tracking and organizing Kenyan legal case data. Built with TypeScript and React.",
    longDescription:
      "A court case management application built with TypeScript and React. Tracks and organizes Kenyan legal case data with a clean, functional interface for legal professionals. Features case search, status tracking, and organized data views.",
    tags: ["TypeScript", "React", "Legal Tech"],
    link: "https://github.com/richiekaroki/court-case-app",
    repo: "https://github.com/richiekaroki/court-case-app",
    challenges: [
      "Designing a data model that captures the complexity of Kenyan legal case information",
      "Building a search and filter system that handles large case volumes efficiently",
      "Creating an interface that's functional without being overwhelming for legal professionals",
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
      "Livestock management demo application showcasing full stack TypeScript capabilities with agricultural data modeling.",
    longDescription:
      "A livestock management demo application built with TypeScript. Demonstrates full stack capabilities with a focus on data modeling, UI design, and agricultural technology.",
    tags: ["TypeScript", "Full Stack", "Agritech"],
    link: "https://github.com/richiekaroki/livestock-demo",
    repo: "https://github.com/richiekaroki/livestock-demo",
    challenges: [
      "Building a data model that captures livestock management workflows",
      "Creating a clean UI for agricultural data that's typically complex",
      "Demonstrating full stack capabilities in a focused, demoable project",
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
