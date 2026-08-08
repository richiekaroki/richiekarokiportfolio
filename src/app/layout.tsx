import type { Metadata, Viewport } from "next";
import {  Source_Serif_4, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/layout/Navbar";
import PageTransition from "@/components/animation/PageTransition";
import StructuredData from "@/components/seo/StructuredData";
import DeferredAnalytics from "@/components/ui/DeferredAnalytics";
import WebVitals from "@/components/ui/WebVitals";
import BackToTop from "@/components/ui/BackToTop";
import { Toaster } from "sonner";
import { siteConfig } from "@/lib/config";
const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-source-serif",
  display: "swap",
});
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://richiekaroki.vercel.app"),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,

  keywords: [
    "Richard Karoki",
    "richiekaroki",
    "portfolio",
    "web developer",
    "software engineer",
    "full stack developer",
    "TypeScript",
    "React",
    "NestJS",
    "Kenya",
  ],
  authors: [
    {
      name: "Richard Karoki",
      url: "https://github.com/richiekaroki",
    },
  ],
  creator: "Richard Karoki",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: `${siteConfig.url}/og`,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    creator: "@richiekaroki",
    images: [`${siteConfig.url}/og`],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <StructuredData />
        <script
          dangerouslySetInnerHTML={{
            __html: `try{const t=localStorage.getItem('theme');const d=t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme:dark)').matches);document.documentElement.classList.toggle('dark',d)}catch(e){}`,
          }}
        />
      </head>
      <body className={`${sourceSerif.variable} ${inter.variable} font-inter`}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md focus:outline-none focus:ring-2 focus:ring-primary-sky"
        >
          Skip to content
        </a>
        <Navbar />
        <main
          id="main-content"
          className={cn(
            "flex relative break-words min-h-0 lg:min-h-dvh items-start justify-between pt-24 pb-8 px-5 md:px-10 lg:px-20 xl:px-40 max-sm:pt-28 max-lg:pb-24 overflow-x-hidden"
          )}
        >
          <PageTransition>{children}</PageTransition>
        </main>
        <DeferredAnalytics />
        <WebVitals />
        <BackToTop />
        <Toaster position="bottom-center" richColors />
      </body>
    </html>
  );
}
