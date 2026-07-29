"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function PulseRing({ delay, color, speed }: { delay: number; color: string; speed: number }) {
  const ref = useRef<THREE.Mesh>(null!);
  const frameCount = useRef(0);

  useFrame(() => {
    frameCount.current++;
    if (frameCount.current % 2 !== 0) return;
    const t = ((Date.now() * 0.001 * speed + delay) % 4) / 4;
    ref.current.scale.setScalar(t * 3);
    (ref.current.material as THREE.MeshBasicMaterial).opacity = (1 - t) * 0.25;
  });

  return (
    <mesh ref={ref} rotation={[Math.PI / 2, 0, 0]}>
      <ringGeometry args={[0.9, 1, 64]} />
      <meshBasicMaterial color={color} transparent side={THREE.DoubleSide} />
    </mesh>
  );
}

function PulseWaveScene({ typing, submitted }: { typing?: boolean; submitted?: boolean }) {
  const baseSpeed = typing ? 1.8 : 0.8;

  const rings = useMemo(
    () => [
      { delay: 0, color: "#d97706" },
      { delay: 1, color: "#3b82f6" },
      { delay: 2, color: "#d97706" },
      { delay: 3, color: "#3b82f6" },
    ],
    []
  );

  const burstRings = useMemo(
    () => [
      { delay: 0, color: "#3b82f6" },
      { delay: 0.3, color: "#d97706" },
      { delay: 0.6, color: "#3b82f6" },
      { delay: 0.9, color: "#d97706" },
    ],
    []
  );

  const activeRings = submitted ? burstRings : rings;
  const speed = submitted ? 3 : baseSpeed;

  return (
    <Canvas camera={{ position: [0, 2, 6], fov: 50 }} dpr={[1, 1.5]}>
      {activeRings.map((r, i) => (
        <PulseRing key={i} {...r} speed={speed} />
      ))}
    </Canvas>
  );
}

export default function PulseWave({ typing, submitted }: { typing?: boolean; submitted?: boolean }) {
  return <PulseWaveScene typing={typing} submitted={submitted} />;
}
