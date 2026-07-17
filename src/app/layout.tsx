import type { Metadata } from "next";
import {  Source_Serif_4, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
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

export const metadata: Metadata = {
  metadataBase: new URL("https://richiekaroki.vercel.app"),
  title: {
    default: siteConfig.name,
    template: `%s - Software Engineer`,
  },
  description: siteConfig.description,

  keywords: [
    "richard",
    "karoki",
    "Richard",
    "Karoki",
    "RICHARD",
    "KAROKI",
    "Richard Karoki",
    "richard karoki",
    "richiekaroki",
    "portfolio",
    "web developer",
    "web",
    "web dev",
    "developer",
    "PROGRAMMER",
    "programmer",
    "RICHARD KAROKI",
    "website",
    "richard developer",
    "software engineer",
    "full stack developer",
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
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    creator: "@richiekaroki",
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
        <script
          dangerouslySetInnerHTML={{
            __html: `try{const t=localStorage.getItem('theme');const d=t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme:dark)').matches);document.documentElement.classList.toggle('dark',d)}catch(e){}`,
          }}
        />
      </head>
      <body className={`${sourceSerif.variable} ${inter.variable} font-inter`}>
        <main
          className={cn(
            "flex relative break-words min-h-screen items-center justify-between pt-14 pb-4 px-5 md:px-10 lg:px-20 xl:px-40 max-sm:pt-20 overflow-x-hidden"
          )}
        >
          {/* NAVBAR ->  */}
          <Navbar />
          {children}
        </main>
        <Analytics />
      </body>
    </html>
  );
}
