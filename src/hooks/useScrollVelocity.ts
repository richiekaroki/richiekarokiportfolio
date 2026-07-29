"use client";

import { useEffect, useRef } from "react";

export function useScrollVelocity() {
  const velocity = useRef(0);
  const lastScroll = useRef(typeof window !== "undefined" ? window.scrollY : 0);
  const lastTime = useRef(Date.now());

  useEffect(() => {
    const handleScroll = () => {
      const now = Date.now();
      const dt = now - lastTime.current;
      if (dt > 0) {
        const dy = Math.abs(window.scrollY - lastScroll.current);
        const raw = Math.min(dy / dt / 10, 1);
        velocity.current += (raw - velocity.current) * 0.3;
      }
      lastScroll.current = window.scrollY;
      lastTime.current = now;
    };

    const decay = () => {
      velocity.current *= 0.92;
      requestAnimationFrame(decay);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    const raf = requestAnimationFrame(decay);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return velocity;
}
