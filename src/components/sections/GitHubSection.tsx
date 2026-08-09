"use client";

import { ExternalLink, Star, GitFork } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import FramerWrapper from "@/components/animation/FramerWrapper";

interface GitHubRepo {
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  topics: string[];
}

const LANGUAGE_COLORS: Record<string, string> = {
  TypeScript: "bg-[#3178c6]",
  JavaScript: "bg-[#f7df1e]",
  Python: "bg-[#3572A5]",
  Svelte: "bg-[#ff3e00]",
  "C#": "bg-[#178600]",
  HTML: "bg-[#e34c26]",
  CSS: "bg-[#563d7c]",
  Go: "bg-[#00ADD8]",
  Rust: "bg-[#dea584]",
  Java: "bg-[#b07219]",
  "C++": "bg-[#f34b7d]",
  C: "bg-[#555555]",
  Shell: "bg-[#89e051]",
};

function getTimeAgo(dateStr: string): string {
  const now = new Date();
  const date = new Date(dateStr);
  const diffMs = now.getTime() - date.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  if (diffDays < 1) return "today";
  if (diffDays === 1) return "yesterday";
  if (diffDays < 30) return `${diffDays} days ago`;
  if (diffDays < 365) return `${Math.floor(diffDays / 30)} months ago`;
  return `${Math.floor(diffDays / 365)} years ago`;
}

export default function GitHubSection() {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);

  useEffect(() => {
    fetch("https://api.github.com/users/richiekaroki/repos?sort=updated&per_page=6")
      .then((res) => (res.ok ? res.json() : []))
      .then((data) => setRepos(data))
      .catch(() => setRepos([]));
  }, []);

  if (repos.length === 0) return null;

  return (
    <section className="w-full py-16">
      <FramerWrapper y={0} x={-50} className="w-full">
        <h2 className="font-source-serif text-primary font-bold text-3xl sm:text-4xl leading-tight [text-wrap:balance]">
          Open Source
        </h2>
        <div className="w-16 h-1 bg-primary-sky mt-4" />
        <p className="mt-4 text-muted-foreground max-w-prose leading-relaxed">
          Things I build in the open. Every project here is public on GitHub.
        </p>
      </FramerWrapper>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
        {repos.map((repo, idx) => (
          <FramerWrapper key={repo.name} y={50} delay={0.1 + idx * 0.05} className="w-full">
            <Link
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block h-full p-5 rounded-xl border border-border/50 bg-card transition-all hover:shadow-md hover:border-primary-sky/30"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-medium text-primary text-sm leading-tight group-hover:text-primary-sky transition-colors">
                  {repo.name}
                </h3>
                <ExternalLink className="h-3.5 w-3.5 text-muted-foreground shrink-0 mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {repo.description && (
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed line-clamp-2">
                  {repo.description}
                </p>
              )}

              <div className="mt-3 flex items-center gap-3 flex-wrap">
                {repo.language && (
                  <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                    <span
                      className={`w-2 h-2 rounded-full ${LANGUAGE_COLORS[repo.language] || "bg-gray-400"}`}
                    />
                    {repo.language}
                  </span>
                )}
                {repo.stargazers_count > 0 && (
                  <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                    <Star className="h-3 w-3" />
                    {repo.stargazers_count}
                  </span>
                )}
                {repo.forks_count > 0 && (
                  <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                    <GitFork className="h-3 w-3" />
                    {repo.forks_count}
                  </span>
                )}
                <span className="text-xs text-muted-foreground ml-auto">
                  {getTimeAgo(repo.updated_at)}
                </span>
              </div>

              {repo.topics && repo.topics.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {repo.topics.slice(0, 3).map((topic) => (
                    <span
                      key={topic}
                      className="px-2 py-0.5 text-[10px] rounded-full border border-border bg-secondary/50 text-muted-foreground"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              )}
            </Link>
          </FramerWrapper>
        ))}
      </div>

      <FramerWrapper y={20} delay={0.4} className="w-full mt-6">
        <div className="flex justify-center">
          <Link
            href="https://github.com/richiekaroki"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border bg-background text-sm font-medium hover:bg-accent active:scale-[0.97] transition-all"
          >
            View All on GitHub
            <ExternalLink className="h-3.5 w-3.5" />
          </Link>
        </div>
      </FramerWrapper>
    </section>
  );
}
