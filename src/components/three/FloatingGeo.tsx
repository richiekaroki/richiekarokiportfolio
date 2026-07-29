"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

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
      { position: [-3, 1.5, -2], rotation: [0.5, 0.3, 0], speed: 0.4, color: "#d97706", shape: "box" },
      { position: [3, -1, -3], rotation: [1, 0.5, 0.2], speed: 0.3, color: "#3b82f6", shape: "octahedron" },
      { position: [-1.5, -1.5, -2.5], rotation: [0.2, 0.8, 0.5], speed: 0.5, color: "#d97706", shape: "tetrahedron" },
      { position: [2, 2, -4], rotation: [0.7, 0.1, 0.3], speed: 0.25, color: "#3b82f6", shape: "torus" },
      { position: [-2.5, 0, -3.5], rotation: [0.3, 0.6, 0.1], speed: 0.35, color: "#3b82f6", shape: "box" },
      { position: [1, -2, -2], rotation: [0.9, 0.4, 0.6], speed: 0.45, color: "#d97706", shape: "octahedron" },
      { position: [0, 2.5, -5], rotation: [0.1, 0.9, 0.4], speed: 0.2, color: "#3b82f6", shape: "tetrahedron" },
    ],
    []
  );

  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
      {shapes.map((s, i) => (
        <GeoShape key={i} {...s} />
      ))}
    </Canvas>
  );
}

export default function FloatingGeo() {
  return <FloatingGeoScene />;
}
