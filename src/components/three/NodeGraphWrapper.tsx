"use client";

import React from "react";
import dynamic from "next/dynamic";
import { useState, useEffect, type ReactNode } from "react";

const NodeGraph = dynamic(() => import("@/components/three/NodeGraph"), {
  ssr: false,
  loading: () => (
    <div className="relative w-full h-[50vh] min-h-[350px] flex items-center justify-center">
      <div className="flex flex-wrap gap-3 justify-center max-w-lg px-4">
        {["Next.js", "React", "Python", "Flask", "Node.js", "PostgreSQL", "TypeScript", "Vue", "NestJS", "Docker", "Firebase", "Redis"].map((tech) => (
          <span key={tech} className="px-4 py-2 rounded-full bg-secondary text-sm font-medium text-muted-foreground border border-border">
            {tech}
          </span>
        ))}
      </div>
    </div>
  ),
});

class ErrorBoundary extends React.Component<
  { children: ReactNode; fallback: ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: ReactNode; fallback: ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  render() {
    if (this.state.hasError) return this.props.fallback;
    return this.props.children;
  }
}

const staticFallback = (
  <div className="relative w-full h-[50vh] min-h-[350px] flex items-center justify-center">
    <div className="flex flex-wrap gap-3 justify-center max-w-lg px-4">
      {["Next.js", "React", "Python", "Flask", "Node.js", "PostgreSQL", "TypeScript", "Vue", "NestJS", "Docker", "Firebase", "Redis"].map((tech) => (
        <span key={tech} className="px-4 py-2 rounded-full bg-secondary text-sm font-medium text-muted-foreground border border-border">
          {tech}
        </span>
      ))}
    </div>
  </div>
);

export default function NodeGraphWrapper() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return staticFallback;

  return (
    <ErrorBoundary fallback={staticFallback}>
      <NodeGraph />
    </ErrorBoundary>
  );
}
