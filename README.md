# Richard Karoki — Portfolio

Personal developer portfolio built with Next.js, Tailwind CSS, Framer Motion, and Three.js.

**Live:** [richiekaroki.vercel.app](https://richiekaroki.vercel.app)

---

### Opening — Who I Am

Hi, I'm Richard Karoki. I'm a full-stack software engineer based in Kenya. I build things that live on the internet — and that simple idea is what drives everything I do.

Whether it's an AI-powered gesture recognition system, a production-ready API with enterprise authentication, or a mobile app that helps people find housing, I find deep satisfaction in turning complex problems into elegant, user-friendly solutions.

My journey into software started with curiosity and a stubborn desire to understand how things work. That curiosity led me through a BSc in Computer Technology at JKUAT, and it's kept me building ever since.

---

### What I Build — Projects

Let me walk you through a few things I've built.

**Job Application API** — This is a production-grade REST API built with NestJS, TypeScript, PostgreSQL, and Redis. It has JWT authentication with refresh token rotation, four-role access control, webhook delivery with HMAC-SHA256 signing, rate limiting, and full Swagger documentation. It's deployed on Railway and serves real traffic. This project taught me what "production-ready" actually means — not just making it work, but making it secure, documented, and reliable.

**Broadcast Hub** — A full-stack media content management platform. NestJS backend, React frontend. It manages broadcast content workflows — the kind of system a media company would use internally. This one pushed me into understanding how to build for non-technical users who just need the tool to work without thinking about it.

**Actserv Onboarding Platform** — An enterprise employee onboarding system built with TypeScript and React. Clean interface, production-ready. This was about taking a messy real-world process and making it feel simple.

**Zoo App** — An interactive zoo management application built with Vue.js. Animal browsing, categorization, clean responsive interface. Sometimes the best projects are the ones that solve a specific problem well.

Each of these projects uses a different stack or solves a different problem. That's intentional — I'm not a single-framework developer. I pick the right tools for the job.

---

### Technical Depth — How I Think

My core stack is TypeScript, React, Next.js, NestJS, PostgreSQL, and Redis. But I don't define myself by frameworks. What matters to me is understanding the systems underneath.

When I built the Job Application API, I didn't just implement JWT auth — I studied how refresh token rotation works, why it matters for security, and how to implement it correctly with Redis as the token store. When I built the webhook system, I learned about HMAC signing, replay attacks, and idempotency.

I work across the full stack because I believe you can't build great software without understanding both ends. The frontend tells you what the user needs. The backend tells you what the system can deliver. The gap between those two is where engineering happens.

I also write regularly about what I learn — on Dev.to and Hashnode. Writing forces me to understand things deeply enough to explain them clearly. If I can't explain it simply, I don't understand it well enough yet.

---

### How I Work — Consulting

Outside of full-time roles, I take on freelance consulting work. Here's how I work:

First, a discovery call. I want to understand your problem before I touch any code. What are you trying to build? Who is it for? What does success look like?

Second, scoping and quoting. I give you a realistic timeline and a fixed price. No surprises.

Third, build and deliver. I ship production-ready code with documentation, tests where they matter, and clear handoff instructions.

I've built full-stack web applications, REST APIs with third-party integrations, MVPs for startups, and I've done network infrastructure work with Cisco-based systems. If you need a web app built, an API integrated, or your infrastructure sorted — I deliver real results.

---

### How I Teach — Tutoring

I also tutor programming — one-on-one, practical, project-based. Not just curriculum, but real practice from real experience.

I teach programming fundamentals, project-based learning, and interview and portfolio preparation. My students are beginners to early-intermediate. I work evenings and weekends, and I keep it flexible because life happens.

The difference between learning from a course and learning from a working engineer is that I teach from what actually works in production. The patterns I show you are the ones I use every day.

---

### Closing — Let's Connect

If any of that resonates — whether you need a builder, a consultant, or a tutor — I'd love to hear from you.

You can reach me through the contact form on my site, or directly at <karokirichard522@gmail.com>. My GitHub is richiekaroki, and my phone is +254 748 754 251.

Thanks for your time.

---

## Tech Stack

- **Framework:** Next.js 15 (React 19)
- **Styling:** Tailwind CSS 3.4
- **Animations:** Framer Motion 12
- **3D Backgrounds:** Three.js / @react-three/fiber
- **Language:** TypeScript 5.9
- **UI:** shadcn/ui
- **Email:** Resend
- **Analytics:** Vercel Analytics

## Pages

| Route | Description |
| --- | --- |
| `/` | Hero, featured projects, services, resume download |
| `/about` | Bio, skills (Expert/Proficient/Familiar), education, certifications, writing |
| `/contact` | Contact form with Resend email integration |

## Features

- Dark mode with near-black (#0b0b0b) theme — no halation
- macOS-style dock navigation with magnification animation
- 4 Three.js animated backgrounds (particles, wireframe shapes, rings, constellation)
- Text scramble effect on hover
- Responsive design (mobile-first)
- Keyboard accessible with focus-visible indicators
- Skip-to-content link for screen readers
- Semantic HTML with ARIA landmarks
- Form validation with inline error/success states
- Reduced motion support (`prefers-reduced-motion`)
- Vercel Analytics (Core Web Vitals)
- Server actions for contact form

## Performance

- Three.js canvases: `dpr={[1, 1.5]}` caps Retina pixel ratio
- Frame throttling on decorative scenes (30fps instead of 60fps)
- `useMemo` on all geometry and position calculations
- `IntersectionObserver` on hero particles (only morph when visible)
- Mobile particle count reduced from 2200 to 400
- Dynamic imports with `ssr: false` for all Three.js components
- Turbopack for fast dev compilation

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

```env
RESEND_API_KEY=your_resend_api_key
```

## License

MIT
