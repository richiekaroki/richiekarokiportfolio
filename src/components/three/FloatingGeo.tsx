"use client";

import { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { THEME_COLORS } from "@/lib/theme-colors";

function GeoShape({
  position,
  rotation,
  speed,
  color,
  shape,
}: {
  position: [number, number, number];
  rotation: [number, number, number];
  speed: number;
  color: string;
  shape: "box" | "octahedron" | "tetrahedron" | "torus";
}) {
  const ref = useRef<THREE.Mesh>(null!);
  const initialRotation = useMemo(() => rotation, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    return () => {
      ref.current?.geometry.dispose();
      (ref.current?.material as THREE.Material)?.dispose();
    };
  }, []);

  useFrame(() => {
    ref.current.rotation.x = initialRotation[0] + Math.sin(Date.now() * speed * 0.001) * 0.3;
    ref.current.rotation.y = initialRotation[1] + Date.now() * speed * 0.0005;
    ref.current.position.y = position[1] + Math.sin(Date.now() * speed * 0.0008) * 0.15;
  });

  const geometry = useMemo(() => {
    switch (shape) {
      case "box":
        return <boxGeometry args={[1, 1, 1]} />;
      case "octahedron":
        return <octahedronGeometry args={[0.6]} />;
      case "tetrahedron":
        return <tetrahedronGeometry args={[0.7]} />;
      case "torus":
        return <torusGeometry args={[0.5, 0.15, 8, 16]} />;
    }
  }, [shape]);

  return (
    <mesh ref={ref} position={position} rotation={rotation}>
      {geometry}
      <meshBasicMaterial
        color={color}
        wireframe
        transparent
        opacity={0.4}
      />
    </mesh>
  );
}

function FloatingGeoScene() {
  const shapes: Array<{
    position: [number, number, number];
    rotation: [number, number, number];
    speed: number;
    color: string;
    shape: "box" | "octahedron" | "tetrahedron" | "torus";
  }> = useMemo(
    () => [
      { position: [-3, 1.5, -2] as [number, number, number], rotation: [0.5, 0.3, 0] as [number, number, number], speed: 0.4, color: THEME_COLORS.amber, shape: "box" as const },
      { position: [3, -1, -3] as [number, number, number], rotation: [1, 0.5, 0.2] as [number, number, number], speed: 0.3, color: THEME_COLORS.blue, shape: "octahedron" as const },
      { position: [-1.5, -1.5, -2.5] as [number, number, number], rotation: [0.2, 0.8, 0.5] as [number, number, number], speed: 0.5, color: THEME_COLORS.amber, shape: "tetrahedron" as const },
      { position: [2, 2, -4] as [number, number, number], rotation: [0.7, 0.1, 0.3] as [number, number, number], speed: 0.25, color: THEME_COLORS.blue, shape: "torus" as const },
      { position: [-2.5, 0, -3.5] as [number, number, number], rotation: [0.3, 0.6, 0.1] as [number, number, number], speed: 0.35, color: THEME_COLORS.blue, shape: "box" as const },
      { position: [1, -2, -2] as [number, number, number], rotation: [0.9, 0.4, 0.6] as [number, number, number], speed: 0.45, color: THEME_COLORS.amber, shape: "octahedron" as const },
      { position: [0, 2.5, -5] as [number, number, number], rotation: [0.1, 0.9, 0.4] as [number, number, number], speed: 0.2, color: THEME_COLORS.blue, shape: "tetrahedron" as const },
    ],
    []
  );

  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 60 }} dpr={[1, 1.5]}>
      {shapes.map((s, i) => (
        <GeoShape key={i} {...s} />
      ))}
    </Canvas>
  );
}

export default function FloatingGeo() {
  return <FloatingGeoScene />;
}
