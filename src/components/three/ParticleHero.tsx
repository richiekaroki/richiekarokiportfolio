"use client";

import { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function scatterPositions(n: number) {
  const arr = new Float32Array(n * 3);
  for (let i = 0; i < n; i++) {
    arr[i * 3] = (Math.random() - 0.5) * 12;
    arr[i * 3 + 1] = (Math.random() - 0.5) * 8;
    arr[i * 3 + 2] = (Math.random() - 0.5) * 4;
  }
  return arr;
}

function ParticleField({ count }: { count: number }) {
  const pointsRef = useRef<THREE.Points>(null!);
  const speedRef = useRef(0.3 + Math.random() * 0.2);

  const { positions, seeds } = useMemo(() => {
    const pos = scatterPositions(count);
    const s = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i++) s[i] = Math.random() * Math.PI * 2;
    return { positions: pos, seeds: s };
  }, [count]);

  useFrame(({ clock }) => {
    const posAttr = pointsRef.current.geometry.attributes.position as THREE.BufferAttribute;
    const pos = posAttr.array as Float32Array;
    const t = clock.getElapsedTime() * speedRef.current;

    for (let i = 0; i < count; i++) {
      const ix = i * 3;
      const iy = i * 3 + 1;
      const seedX = seeds[ix];
      const seedY = seeds[iy];
      pos[ix] = positions[ix] + Math.sin(t * 0.4 + seedX) * 0.3;
      pos[iy] = positions[iy] + Math.cos(t * 0.3 + seedY) * 0.2;
    }

    posAttr.needsUpdate = true;
    pointsRef.current.rotation.y = t * 0.02;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        color="#94a3b8"
        size={0.03}
        transparent
        opacity={0.35}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

export default function ParticleHero() {
  const [mounted, setMounted] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    setIsDesktop(mq.matches);
    setMounted(true);
    const handler = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  if (!mounted || !isDesktop) return null;

  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      <Canvas camera={{ position: [0, 0, 6], fov: 60 }} dpr={[1, 1.5]} style={{ background: "transparent" }}>
        <ParticleField count={300} />
      </Canvas>
    </div>
  );
}
