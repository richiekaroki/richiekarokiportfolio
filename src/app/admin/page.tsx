"use client";

import Link from "next/link";
import { ExternalLink, BarChart3, FileText, Mail } from "lucide-react";
import FramerWrapper from "@/components/animation/FramerWrapper";

export default function AdminPage() {
  return (
    <div className="min-h-0 lg:min-h-dvh w-full relative flex flex-col items-start gap-8 overflow-hidden">
      <FramerWrapper y={0} x={-100} className="w-full">
        <h1 className="font-source-serif text-primary font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight">
          Dashboard
        </h1>
        <div className="w-16 h-1 bg-primary-sky mt-4" />
      </FramerWrapper>

      <FramerWrapper y={50} delay={0.1} className="w-full">
        <p className="font-inter text-lg text-muted-foreground max-sm:text-base max-w-2xl leading-relaxed">
          Quick links to analytics and tracked events. Full analytics are available in the Vercel dashboard.
        </p>
      </FramerWrapper>

      <FramerWrapper y={50} delay={0.15} className="w-full">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Link
            href="https://vercel.com/richiekaroki/richiekarokiportfolio/analytics"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-5 rounded-lg border border-border/50 bg-secondary/30 hover:bg-accent transition-all group"
          >
            <BarChart3 className="h-8 w-8 text-primary-sky flex-shrink-0" />
            <div>
              <p className="font-medium text-primary group-hover:text-primary-sky transition-colors">Vercel Analytics</p>
              <p className="text-sm text-muted-foreground">Page views, visitors, performance</p>
            </div>
            <ExternalLink className="h-4 w-4 text-muted-foreground ml-auto flex-shrink-0" />
          </Link>

          <Link
            href="https://vercel.com/richiekaroki/richiekarokiportfolio Speed Insights"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-5 rounded-lg border border-border/50 bg-secondary/30 hover:bg-accent transition-all group"
          >
            <BarChart3 className="h-8 w-8 text-primary-sky flex-shrink-0" />
            <div>
              <p className="font-medium text-primary group-hover:text-primary-sky transition-colors">Speed Insights</p>
              <p className="text-sm text-muted-foreground">Core Web Vitals in production</p>
            </div>
            <ExternalLink className="h-4 w-4 text-muted-foreground ml-auto flex-shrink-0" />
          </Link>

          <Link
            href="/feed.xml"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-5 rounded-lg border border-border/50 bg-secondary/30 hover:bg-accent transition-all group"
          >
            <FileText className="h-8 w-8 text-primary-sky flex-shrink-0" />
            <div>
              <p className="font-medium text-primary group-hover:text-primary-sky transition-colors">RSS Feed</p>
              <p className="text-sm text-muted-foreground">Blog posts feed for readers</p>
            </div>
            <ExternalLink className="h-4 w-4 text-muted-foreground ml-auto flex-shrink-0" />
          </Link>
        </div>
      </FramerWrapper>

      <FramerWrapper y={50} delay={0.2} className="w-full">
        <h2 className="text-2xl font-source-serif text-primary font-semibold mb-4">
          Tracked Events
        </h2>
        <div className="w-full rounded-lg border border-border/50 overflow-hidden">
          <div className="grid grid-cols-3 gap-4 p-4 bg-secondary/50 text-sm font-medium text-primary">
            <span>Event</span>
            <span>Description</span>
            <span>Where</span>
          </div>
          <div className="grid grid-cols-3 gap-4 p-4 border-t border-border/50 text-sm">
            <span className="text-muted-foreground">resume_download</span>
            <span>User downloaded resume PDF</span>
            <span className="text-muted-foreground">Home page</span>
          </div>
          <div className="grid grid-cols-3 gap-4 p-4 border-t border-border/50 text-sm">
            <span className="text-muted-foreground">contact_form_submit</span>
            <span>User submitted contact form</span>
            <span className="text-muted-foreground">Contact page</span>
          </div>
        </div>
      </FramerWrapper>

      <FramerWrapper y={50} delay={0.25} className="w-full">
        <p className="text-sm text-muted-foreground">
          Events are tracked via Vercel Analytics. View detailed breakdowns in the{" "}
          <Link
            href="https://vercel.com/richiekaroki/richiekarokiportfolio/analytics"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-sky hover:underline"
          >
            Vercel Dashboard
          </Link>
          .
        </p>
      </FramerWrapper>
    </div>
  );
}
