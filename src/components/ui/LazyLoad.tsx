"use client";

import { useRef, useState, useEffect, type ReactNode } from "react";

interface LazyLoadProps {
  children: ReactNode;
  className?: string;
  rootMargin?: string;
}

export default function LazyLoad({ children, className, rootMargin = "200px" }: LazyLoadProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [rootMargin]);

  return (
    <div ref={ref} className={className}>
      {isVisible ? children : null}
    </div>
  );
}
