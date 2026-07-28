"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function PulseRing({ delay, color }: { delay: number; color: string }) {
  const ref = useRef<THREE.Mesh>(null!);

  useFrame(() => {
    const t = ((Date.now() * 0.001 + delay) % 4) / 4;
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

function PulseWaveScene() {
  const rings = useMemo(
    () => [
      { delay: 0, color: "#d97706" },
      { delay: 1, color: "#3b82f6" },
      { delay: 2, color: "#d97706" },
      { delay: 3, color: "#3b82f6" },
    ],
    []
  );

  return (
    <Canvas camera={{ position: [0, 2, 6], fov: 50 }}>
      {rings.map((r, i) => (
        <PulseRing key={i} {...r} />
      ))}
    </Canvas>
  );
}

export default function PulseWave() {
  return <PulseWaveScene />;
}
