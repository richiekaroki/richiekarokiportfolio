# Richard Karoki — Portfolio

Personal developer portfolio built with Next.js, Tailwind CSS, and Framer Motion.

**Live:** [richiekaroki.vercel.app](https://richiekaroki.vercel.app)

## Tech Stack

- **Framework:** Next.js 15 (React 19)
- **Styling:** Tailwind CSS 3.4
- **Animations:** Framer Motion 12
- **Language:** TypeScript 5.9
- **UI:** shadcn/ui
- **Email:** Resend
- **Analytics:** Vercel Analytics

## Pages

| Route | Description |
|---|---|
| `/` | Hero section with animated role text, social links, resume download |
| `/about` | Personal bio, photo gallery, hobbies |
| `/skills` | Languages, frameworks, and tools with icon grids |
| `/education` | BSc Computer Technology (JKUAT) + certifications |
| `/projects` | Curated project cards from GitHub repos |
| `/contact` | Contact form with Resend email integration |

## Features

- Dark mode with pure black (#000000) theme
- macOS-style dock navigation with magnification animation
- Text scramble effect on hover
- Animated role rotator on hero section
- Responsive design (mobile-first)
- Vercel Analytics (Core Web Vitals)
- Server actions for contact form

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
