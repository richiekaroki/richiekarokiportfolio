"use client";

import { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function useParticleCount() {
  const [count, setCount] = useState(2200);
  useEffect(() => {
    const update = () => setCount(window.innerWidth < 768 ? 900 : 2200);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  return count;
}

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
  const w = 4.6,
    h = 2.8;
  for (let i = 0; i < n; i++) {
    const t = Math.random();
    let x, y;
    if (t < 0.25) {
      x = -w / 2 + Math.random() * w;
      y = h / 2;
    } else if (t < 0.5) {
      x = -w / 2 + Math.random() * w;
      y = -h / 2;
    } else if (t < 0.75) {
      x = -w / 2;
      y = -h / 2 + Math.random() * h;
    } else {
      x = w / 2;
      y = -h / 2 + Math.random() * h;
    }
    arr[i * 3] = x + (Math.random() - 0.5) * 0.15;
    arr[i * 3 + 1] = y + (Math.random() - 0.5) * 0.15;
    arr[i * 3 + 2] = (Math.random() - 0.5) * 0.5;
  }
  return arr;
}

function ParticleField({ morphed }: { morphed: boolean }) {
  const count = useParticleCount();
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

    const posAttr = pointsRef.current.geometry.attributes
      .position as THREE.BufferAttribute;
    const pos = posAttr.array as Float32Array;
    for (let i = 0; i < count * 3; i++) {
      pos[i] = start[i] + (end[i] - start[i]) * progress.current;
    }
    posAttr.needsUpdate = true;

    pointsRef.current.rotation.y += 0.0009;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[current, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#d97706"
        size={0.045}
        transparent
        opacity={0.9}
      />
    </points>
  );
}

export default function ParticleHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [morphed, setMorphed] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion || !mounted) return;
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setMorphed(true);
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [prefersReducedMotion, mounted]);

  return (
    <div
      ref={containerRef}
      style={{ position: "relative", width: "100%", height: "100%" }}
    >
      {!mounted || prefersReducedMotion ? (
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse at center, rgba(217,119,6,0.08) 0%, transparent 70%)",
          }}
        />
      ) : (
        <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
          <ParticleField morphed={morphed} />
        </Canvas>
      )}
    </div>
  );
}
