"use client";

import { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { THEME_COLORS } from "@/lib/theme-colors";

function Grid() {
  const ref = useRef<THREE.Group>(null!);
  const frameCount = useRef(0);

  const lines = useMemo(() => {
    const positions: number[] = [];
    const size = 8;
    const divisions = 16;
    const step = size / divisions;

    for (let i = 0; i <= divisions; i++) {
      const pos = -size / 2 + i * step;
      positions.push(-size / 2, 0, pos, size / 2, 0, pos);
      positions.push(pos, 0, -size / 2, pos, 0, size / 2);
    }
    return new Float32Array(positions);
  }, []);

  useEffect(() => {
    return () => {
      ref.current?.children.forEach((child) => {
        if ((child as THREE.LineSegments).geometry) {
          (child as THREE.LineSegments).geometry.dispose();
        }
        if ((child as THREE.LineSegments).material) {
          ((child as THREE.LineSegments).material as THREE.Material).dispose();
        }
      });
    };
  }, []);

  useFrame(() => {
    frameCount.current++;
    if (frameCount.current % 2 !== 0) return;
    ref.current.rotation.x = Math.PI / 3 + Math.sin(Date.now() * 0.0003) * 0.05;
    ref.current.rotation.z += 0.001;
  });

  return (
    <group ref={ref} position={[0, -1, -3]}>
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[lines, 3]} />
        </bufferGeometry>
        <lineBasicMaterial color={THEME_COLORS.blue} transparent opacity={0.12} />
      </lineSegments>
    </group>
  );
}

function FloatingDots() {
  const ref = useRef<THREE.Points>(null!);
  const frameCount = useRef(0);
  const count = 80;

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 10;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 6;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 6 - 3;
    }
    return arr;
  }, []);

  useFrame(() => {
    frameCount.current++;
    if (frameCount.current % 2 !== 0) return;
    ref.current.rotation.y += 0.0004;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial color={THEME_COLORS.amber} size={0.05} transparent opacity={0.7} sizeAttenuation />
    </points>
  );
}

function HoloGridScene() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 60 }} dpr={[1, 1.5]}>
      <Grid />
      <FloatingDots />
    </Canvas>
  );
}

export default function HoloGrid() {
  return <HoloGridScene />;
}
