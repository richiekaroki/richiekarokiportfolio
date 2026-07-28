"use client";

import { useRef, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function FloatingShapes() {
  const groupRef = useRef<THREE.Group>(null!);
  const mouse = useRef({ x: 0, y: 0 });
  const shapes = useRef<{ mesh: THREE.Mesh; speed: number }[]>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth - 0.5);
      mouse.current.y = (e.clientY / window.innerHeight - 0.5);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const geos = [
    new THREE.IcosahedronGeometry(0.9, 0),
    new THREE.OctahedronGeometry(0.7, 0),
    new THREE.TorusGeometry(0.6, 0.18, 8, 24),
    new THREE.TetrahedronGeometry(0.8, 0),
    new THREE.IcosahedronGeometry(0.5, 0),
  ];

  if (shapes.current.length === 0) {
    const colors = [0xd97706, 0x3b82f6, 0xd97706, 0x3b82f6, 0xd97706, 0x3b82f6, 0xd97706, 0x3b82f6, 0xd97706];
    for (let i = 0; i < 9; i++) {
      const geo = geos[i % geos.length];
      const mat = new THREE.MeshBasicMaterial({
        color: colors[i],
        wireframe: true,
        transparent: true,
        opacity: 0.35,
      });
      const mesh = new THREE.Mesh(geo, mat);
      mesh.position.set(
        (Math.random() - 0.5) * 12,
        (Math.random() - 0.5) * 7,
        (Math.random() - 0.5) * 5 - 2
      );
      const speed = 0.001 + Math.random() * 0.002;
      shapes.current.push({ mesh, speed });
    }
  }

  useFrame(() => {
    if (!groupRef.current) return;
    shapes.current.forEach((s) => {
      s.mesh.rotation.x += s.speed;
      s.mesh.rotation.y += s.speed * 0.8;
    });
    groupRef.current.position.x += (mouse.current.x * 1.2 - groupRef.current.position.x) * 0.02;
    groupRef.current.position.y += (-mouse.current.y * 0.8 - groupRef.current.position.y) * 0.02;
  });

  return (
    <group ref={groupRef}>
      {shapes.current.map((s, i) => (
        <primitive key={i} object={s.mesh} />
      ))}
    </group>
  );
}

export default function AmbientDepth() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      {mounted && (
        <Canvas camera={{ position: [0, 0, 10], fov: 55 }} style={{ background: "transparent" }}>
          <FloatingShapes />
        </Canvas>
      )}
    </div>
  );
}
