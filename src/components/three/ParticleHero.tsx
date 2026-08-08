"use client";

import { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { THEME_COLORS } from "@/lib/theme-colors";

function scatterPositions(n: number) {
  const arr = new Float32Array(n * 3);
  for (let i = 0; i < n; i++) {
    arr[i * 3] = (Math.random() - 0.5) * 10;
    arr[i * 3 + 1] = (Math.random() - 0.5) * 6;
    arr[i * 3 + 2] = (Math.random() - 0.5) * 6;
  }
  return arr;
}

function screenPositions(n: number) {
  const arr = new Float32Array(n * 3);
  const w = 4.6, h = 2.8;
  for (let i = 0; i < n; i++) {
    const t = Math.random();
    let x, y;
    if (t < 0.25) { x = -w / 2 + Math.random() * w; y = h / 2; }
    else if (t < 0.5) { x = -w / 2 + Math.random() * w; y = -h / 2; }
    else if (t < 0.75) { x = -w / 2; y = -h / 2 + Math.random() * h; }
    else { x = w / 2; y = -h / 2 + Math.random() * h; }
    arr[i * 3] = x + (Math.random() - 0.5) * 0.15;
    arr[i * 3 + 1] = y + (Math.random() - 0.5) * 0.15;
    arr[i * 3 + 2] = (Math.random() - 0.5) * 0.5;
  }
  return arr;
}

function ParticleField({ morphed, count, scrollProgress, hoveredCta }: { morphed: boolean; count: number; scrollProgress: React.RefObject<number>; hoveredCta: React.RefObject<string | null> }) {
  const pointsRef = useRef<THREE.Points>(null!);
  const progress = useRef(0);

  const { start, end, current } = useMemo(() => {
    const s = scatterPositions(count);
    const e = screenPositions(count);
    const c = new Float32Array(s);
    return { start: s, end: e, current: c };
  }, [count]);

  useFrame(() => {
    const target = morphed ? 1 : 0;
    progress.current += (target - progress.current) * 0.04;
    const posAttr = pointsRef.current.geometry.attributes.position as THREE.BufferAttribute;
    const pos = posAttr.array as Float32Array;

    const scrollAmt = scrollProgress.current ?? 0;
    const compression = scrollAmt * 0.8;

    for (let i = 0; i < count; i++) {
      const ix = i * 3;
      const iy = i * 3 + 1;
      const bx = start[ix] + (end[ix] - start[ix]) * progress.current;
      const by = start[iy] + (end[iy] - start[iy]) * progress.current;
      const dx = bx * compression;
      const dy = by * compression * 0.5;
      pos[ix] = bx - dx;
      pos[iy] = by - dy;
      pos[i * 3 + 2] = start[i * 3 + 2] + (end[i * 3 + 2] - start[i * 3 + 2]) * progress.current;
    }

    if (progress.current > 0.98) {
      const t = Date.now() * 0.001;
      for (let i = 0; i < count; i++) {
        const phase = i * 0.1;
        pos[i * 3] += Math.sin(t * 0.3 + phase) * 0.02;
        pos[i * 3 + 1] += Math.cos(t * 0.2 + phase * 1.3) * 0.015;
      }
    }

    const cta = hoveredCta.current;
    if (cta && progress.current > 0.98) {
      const tx = cta === "hire" ? -1.5 : 1.5;
      const ty = -1.0;
      for (let i = 0; i < count; i++) {
        const ix = i * 3;
        const iy = i * 3 + 1;
        const dx = tx - pos[ix];
        const dy = ty - pos[iy];
        pos[ix] += dx * 0.015;
        pos[iy] += dy * 0.015;
      }
    }

    posAttr.needsUpdate = true;
    pointsRef.current.rotation.y += 0.0009;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[current, 3]} />
      </bufferGeometry>
      <pointsMaterial color={THEME_COLORS.amber} size={0.08} transparent opacity={1} sizeAttenuation />
    </points>
  );
}

export default function ParticleHero({ hoveredCta }: { hoveredCta?: React.RefObject<string | null> }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [morphed, setMorphed] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isDesktop, setIsDesktop] = useState(true);
  const scrollProgress = useRef(0);
  const defaultHoveredCta = useRef(null);
  const ctaRef = hoveredCta ?? defaultHoveredCta;

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    setIsDesktop(mq.matches);
    setMounted(true);
    const handler = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setMorphed(true);
        scrollProgress.current = 1 - entry.intersectionRatio;
      },
      { threshold: Array.from({ length: 20 }, (_, i) => i / 19) }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [mounted]);

  if (!mounted) return null;

  const particleCount = isDesktop ? 2200 : 600;

  return (
    <div ref={containerRef} style={{ position: "relative", width: "100%", height: "100%" }}>
      <Canvas camera={{ position: [0, 0, 8], fov: 60 }} dpr={[1, 1.5]} style={{ background: "transparent", pointerEvents: "none" }}>
        <ParticleField morphed={morphed} count={particleCount} scrollProgress={scrollProgress} hoveredCta={ctaRef} />
      </Canvas>
    </div>
  );
}
