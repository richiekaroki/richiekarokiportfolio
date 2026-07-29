"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const STAR_COUNT = 120;
const CONNECTION_DISTANCE = 2.2;

function generateStars(count: number) {
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 12;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 8;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 6 - 2;
  }
  return positions;
}

function Stars({ positions }: { positions: Float32Array }) {
  const ref = useRef<THREE.Points>(null!);
  const frameCount = useRef(0);

  useFrame(() => {
    frameCount.current++;
    if (frameCount.current % 2 !== 0) return;
    ref.current.rotation.y += 0.0003;
    ref.current.rotation.x += 0.0001;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#d97706"
        size={0.06}
        transparent
        opacity={0.9}
        sizeAttenuation
      />
    </points>
  );
}

function Connections({ positions }: { positions: Float32Array }) {
  const ref = useRef<THREE.LineSegments>(null!);
  const frameCount = useRef(0);
  const posArray = useMemo(() => {
    const lines: number[] = [];
    const count = positions.length / 3;
    for (let i = 0; i < count; i++) {
      for (let j = i + 1; j < count; j++) {
        const dx = positions[i * 3] - positions[j * 3];
        const dy = positions[i * 3 + 1] - positions[j * 3 + 1];
        const dz = positions[i * 3 + 2] - positions[j * 3 + 2];
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
        if (dist < CONNECTION_DISTANCE) {
          lines.push(
            positions[i * 3], positions[i * 3 + 1], positions[i * 3 + 2],
            positions[j * 3], positions[j * 3 + 1], positions[j * 3 + 2]
          );
        }
      }
    }
    return new Float32Array(lines);
  }, [positions]);

  useFrame(() => {
    frameCount.current++;
    if (frameCount.current % 2 !== 0) return;
    ref.current.rotation.y += 0.0003;
    ref.current.rotation.x += 0.0001;
  });

  return (
    <lineSegments ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[posArray, 3]}
        />
      </bufferGeometry>
      <lineBasicMaterial
        color="#3b82f6"
        transparent
        opacity={0.15}
      />
    </lineSegments>
  );
}

function ConstellationScene() {
  const positions = useMemo(() => generateStars(STAR_COUNT), []);

  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 60 }} dpr={[1, 1.5]}>
      <Stars positions={positions} />
      <Connections positions={positions} />
    </Canvas>
  );
}

export default function ConstellationField() {
  return <ConstellationScene />;
}
