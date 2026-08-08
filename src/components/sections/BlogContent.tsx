"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import FramerWrapper from "@/components/animation/FramerWrapper";
import { ExternalLink, Clock, Calendar } from "lucide-react";

interface Article {
  id: number;
  title: string;
  description: string;
  url: string;
  published_at: string;
  reading_time_minutes: number;
  tag_list: string[];
  cover_image?: string;
  public_reactions_count: number;
}

export default function BlogContent() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://dev.to/api/articles?username=richard_karoki_ea09a225a2&per_page=10")
      .then((res) => res.json())
      .then((data) => {
        setArticles(Array.isArray(data) ? data : []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <div className="min-h-0 lg:min-h-dvh w-full relative flex flex-col items-start gap-8 overflow-hidden">
      <FramerWrapper y={0} x={-100} className="w-full">
        <h1 className="font-source-serif text-primary font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight [text-wrap:balance]">
          Blog
        </h1>
        <div className="w-16 h-1 bg-primary-sky mt-4" />
      </FramerWrapper>

      <FramerWrapper y={50} delay={0.1} className="w-full">
        <p className="font-inter text-lg text-muted-foreground max-sm:text-base max-w-prose leading-relaxed">
          Thoughts on web development, software engineering, and building things
          that matter. Also writing on{" "}
          <a
            href="https://dev.to/richard_karoki_ea09a225a2"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-sky hover:underline"
          >
            Dev.to
          </a>.
        </p>
      </FramerWrapper>

      {loading ? (
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="rounded-xl border border-border/50 bg-card p-6 animate-pulse"
            >
              <div className="h-5 bg-secondary rounded w-3/4 mb-3" />
              <div className="h-4 bg-secondary rounded w-full mb-2" />
              <div className="h-4 bg-secondary rounded w-2/3 mb-4" />
              <div className="flex gap-2">
                <div className="h-6 bg-secondary rounded-full w-16" />
                <div className="h-6 bg-secondary rounded-full w-20" />
              </div>
            </div>
          ))}
        </div>
      ) : articles.length > 0 ? (
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
          {articles.map((article) => (
            <FramerWrapper key={article.id} y={50} delay={0.15} className="w-full">
              <Link
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block w-full rounded-xl border border-border/50 bg-card p-6 transition-all hover:shadow-lg hover:border-primary-sky/30"
              >
                {article.cover_image && (
                  <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-4">
                    <img
                      src={article.cover_image}
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                )}
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-source-serif text-lg font-bold text-primary leading-tight group-hover:text-primary-sky transition-colors">
                    {article.title}
                  </h3>
                  <ExternalLink className="h-4 w-4 flex-shrink-0 text-muted-foreground group-hover:text-primary-sky transition-colors mt-1" />
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mt-2 line-clamp-2">
                  {article.description}
                </p>
                <div className="flex items-center gap-4 mt-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {new Date(article.published_at).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {article.reading_time_minutes} min read
                  </span>
                </div>
                {article.tag_list.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {article.tag_list.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-secondary text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </Link>
            </FramerWrapper>
          ))}
        </div>
      ) : (
        <FramerWrapper y={50} delay={0.15} className="w-full">
          <div className="w-full p-10 rounded-xl border border-border/50 bg-secondary/30 text-center">
            <h2 className="font-source-serif text-xl font-semibold text-primary mb-2">
              No articles yet
            </h2>
            <p className="text-muted-foreground mb-4 max-w-md mx-auto">
              I&apos;m working on writing more. In the meantime, check out my
              profile on Dev.to for updates.
            </p>
            <a
              href="https://dev.to/richard_karoki_ea09a225a2"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary-sky text-white font-medium hover:bg-primary-sky/90 active:scale-[0.97] transition-all"
            >
              Visit My Dev.to
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </FramerWrapper>
      )}
    </div>
  );
}
