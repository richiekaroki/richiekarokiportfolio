"use client";

import { useRef, useEffect, useState, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { THEME_COLORS } from "@/lib/theme-colors";

const SECTION_CONFIG: Record<string, { speed: number; density: number; color: string }> = {
  bio: { speed: 1, density: 0.8, color: THEME_COLORS.amber },
  "quick-facts": { speed: 1.2, density: 1, color: THEME_COLORS.blue },
  skills: { speed: 1.8, density: 1.2, color: THEME_COLORS.amber },
  education: { speed: 0.6, density: 0.6, color: THEME_COLORS.blue },
  certifications: { speed: 0.9, density: 0.7, color: THEME_COLORS.amber },
  writing: { speed: 1.1, density: 0.9, color: THEME_COLORS.blue },
};

interface ShapeData {
  mesh: THREE.Mesh;
  velocity: THREE.Vector3;
  rotationAxis: THREE.Vector3;
  baseOpacity: number;
  targetOpacity: number;
  baseScale: number;
  targetScale: number;
  orbitRadius: number;
  orbitSpeed: number;
  orbitOffset: number;
}

const GEOF = [
  new THREE.IcosahedronGeometry(0.8, 0),
  new THREE.OctahedronGeometry(0.65, 0),
  new THREE.TorusGeometry(0.55, 0.15, 8, 20),
  new THREE.TetrahedronGeometry(0.7, 0),
  new THREE.DodecahedronGeometry(0.6, 0),
];

function hexToInt(hex: string): number {
  return parseInt(hex.replace("#", ""), 16);
}

function lerp(a: number, b: number, t: number): number {
  return a + (b - a) * t;
}

function lerpColor(a: number, b: number, t: number): number {
  const ar = (a >> 16) & 0xff, ag = (a >> 8) & 0xff, ab = a & 0xff;
  const br = (b >> 16) & 0xff, bg = (b >> 8) & 0xff, bb = b & 0xff;
  const rr = Math.round(lerp(ar, br, t));
  const rg = Math.round(lerp(ag, bg, t));
  const rb = Math.round(lerp(ab, bb, t));
  return (rr << 16) | (rg << 8) | rb;
}

const SHAPES_COUNT = 8;

function FloatingShapes({ section }: { section: string }) {
  const groupRef = useRef<THREE.Group>(null!);
  const mouse = useRef({ x: 0, y: 0 });
  const config = useRef(SECTION_CONFIG.bio);
  const targetConfig = useRef(SECTION_CONFIG.bio);
  const { camera } = useThree();
  const vec = useMemo(() => new THREE.Vector3(), []);
  const prevTime = useRef(0);
  const transitionProgress = useRef(1);

  const geos = useMemo(() => GEOF, []);

  const shapes = useMemo<ShapeData[]>(() => {
    const result: ShapeData[] = [];
    for (let i = 0; i < SHAPES_COUNT; i++) {
      const geo = geos[i % geos.length];
      const mat = new THREE.MeshBasicMaterial({
        color: hexToInt(THEME_COLORS.amber),
        wireframe: true,
        transparent: true,
        opacity: 0.25,
      });
      const mesh = new THREE.Mesh(geo, mat);
      const angle = (i / SHAPES_COUNT) * Math.PI * 2;
      const radius = 3 + Math.random() * 3;
      mesh.position.set(
        Math.cos(angle) * radius,
        Math.sin(angle) * radius * 0.6,
        -2 - Math.random() * 3
      );
      const baseScale = 0.7 + Math.random() * 0.5;
      mesh.scale.setScalar(baseScale);
      result.push({
        mesh,
        velocity: new THREE.Vector3(),
        rotationAxis: new THREE.Vector3(
          Math.random() - 0.5,
          Math.random() - 0.5,
          Math.random() - 0.5
        ).normalize(),
        baseOpacity: 0.2 + Math.random() * 0.15,
        targetOpacity: 0.2 + Math.random() * 0.15,
        baseScale,
        targetScale: baseScale,
        orbitRadius: radius,
        orbitSpeed: 0.1 + Math.random() * 0.15,
        orbitOffset: angle,
      });
    }
    return result;
  }, [geos]);

  useEffect(() => {
    targetConfig.current = SECTION_CONFIG[section] ?? SECTION_CONFIG.bio;
    transitionProgress.current = 0;
    shapes.forEach((s) => {
      s.targetOpacity = s.baseOpacity * targetConfig.current.density;
      s.targetScale = s.baseScale * (0.8 + targetConfig.current.density * 0.2);
    });
  }, [section, shapes]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.current.y = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const geosRef = geos;
    return () => {
      shapes.forEach((s) => {
        s.mesh.geometry.dispose();
        (s.mesh.material as THREE.Material).dispose();
      });
      geosRef.forEach((g) => g.dispose());
    };
  }, [shapes, geos]);

  useFrame((_, delta) => {
    if (!groupRef.current) return;
    const clampedDelta = Math.min(delta, 0.05);

    transitionProgress.current = Math.min(transitionProgress.current + clampedDelta * 1.5, 1);
    const t = transitionProgress.current;
    const ease = t * t * (3 - 2 * t);

    config.current.speed = lerp(config.current.speed, targetConfig.current.speed, ease * 0.1);
    config.current.density = lerp(config.current.density, targetConfig.current.density, ease * 0.1);

    const currentColor = hexToInt(targetConfig.current.color);
    const speed = config.current.speed;
    const time = prevTime.current;

    shapes.forEach((s, i) => {
      const mat = s.mesh.material as THREE.MeshBasicMaterial;

      s.targetOpacity = s.baseOpacity * targetConfig.current.density;
      s.targetScale = s.baseScale * (0.8 + targetConfig.current.density * 0.2);
      mat.opacity = lerp(mat.opacity, s.targetOpacity, clampedDelta * 6);

      const currentColorInt = mat.color.getHex();
      if (currentColorInt !== currentColor) {
        const blended = lerpColor(currentColorInt, currentColor, clampedDelta * 3);
        mat.color.setHex(blended);
      }

      const currentScale = s.mesh.scale.x;
      const newScale = lerp(currentScale, s.targetScale, clampedDelta * 4);
      s.mesh.scale.setScalar(newScale);

      s.mesh.rotation.x += s.orbitSpeed * speed * clampedDelta * 0.5;
      s.mesh.rotation.y += s.orbitSpeed * 0.7 * speed * clampedDelta * 0.5;
      s.mesh.rotation.z += s.orbitSpeed * 0.3 * speed * clampedDelta * 0.5;

      const orbitAngle = time * s.orbitSpeed * speed + s.orbitOffset;
      const targetX = Math.cos(orbitAngle) * s.orbitRadius;
      const targetY = Math.sin(orbitAngle) * s.orbitRadius * 0.6;
      s.mesh.position.x = lerp(s.mesh.position.x, targetX, clampedDelta * 2);
      s.mesh.position.y = lerp(s.mesh.position.y, targetY, clampedDelta * 2);

      vec.copy(s.mesh.position);
      vec.project(camera);
      const dx = vec.x - mouse.current.x;
      const dy = vec.y - mouse.current.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const proximityBoost = dist < 0.4 ? (1 - dist / 0.4) * 0.3 : 0;
      s.targetOpacity = Math.min(s.baseOpacity * targetConfig.current.density + proximityBoost, 0.7);
      mat.opacity = lerp(mat.opacity, s.targetOpacity, clampedDelta * 4);

      const mousePush = dist < 0.5 ? (1 - dist / 0.5) * 0.3 : 0;
      if (mousePush > 0) {
        s.mesh.position.x += dx * mousePush * clampedDelta;
        s.mesh.position.y += dy * mousePush * clampedDelta;
      }
    });

    prevTime.current += clampedDelta * speed;

    groupRef.current.position.x = lerp(groupRef.current.position.x, mouse.current.x * 0.4, clampedDelta * 1.5);
    groupRef.current.position.y = lerp(groupRef.current.position.y, -mouse.current.y * 0.3, clampedDelta * 1.5);
  });

  return (
    <group ref={groupRef}>
      {shapes.map((s) => (
        <primitive key={s.mesh.uuid} object={s.mesh} />
      ))}
    </group>
  );
}

export default function AmbientDepth({ section = "bio" }: { section?: string }) {
  const [mounted, setMounted] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mqMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mqMotion.matches);
    setMounted(true);
  }, []);

  if (!mounted || prefersReducedMotion) return null;

  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 50 }}
        dpr={[1, 1.5]}
        style={{ background: "transparent", pointerEvents: "none" }}
        gl={{ alpha: true, antialias: false, powerPreference: "low-power" }}
      >
        <FloatingShapes section={section} />
      </Canvas>
    </div>
  );
}
