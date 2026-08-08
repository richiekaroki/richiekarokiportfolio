"use client";

import { useRef, useMemo, useState, useEffect, useCallback } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { THEME_COLORS } from "@/lib/theme-colors";

const stack = [
  "Next.js", "React", "Python", "Flask", "Node.js",
  "PostgreSQL", "TypeScript", "Vue", "NestJS", "Docker",
  "Firebase", "Redis",
];

function Nodes({ onHover }: { onHover: (idx: number | null) => void }) {
  const groupRef = useRef<THREE.Group>(null!);
  const { raycaster, camera, size } = useThree();
  const hoveredRef = useRef<number | null>(null);
  const mouse = useRef(new THREE.Vector2());

  const { nodes, lines } = useMemo(() => {
    const nodes: { mesh: THREE.Mesh; label: string }[] = [];
    const R = 4.2;

    stack.forEach((label, i) => {
      const phi = Math.acos(1 - 2 * (i + 0.5) / stack.length);
      const theta = Math.PI * (1 + Math.sqrt(5)) * i;
      const x = R * Math.sin(phi) * Math.cos(theta);
      const y = R * Math.sin(phi) * Math.sin(theta);
      const z = R * Math.cos(phi);

      const geo = new THREE.SphereGeometry(0.18, 16, 16);
      const mat = new THREE.MeshBasicMaterial({ color: parseInt(THEME_COLORS.amber.replace("#", ""), 16) });
      const mesh = new THREE.Mesh(geo, mat);
      mesh.position.set(x, y, z);
      nodes.push({ mesh, label });
    });

    const lineMat = new THREE.LineBasicMaterial({
      color: parseInt(THEME_COLORS.stone600.replace("#", ""), 16),
      transparent: true,
      opacity: 0.4,
    });
    const lines: THREE.Line[] = [];
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        if (Math.random() > 0.5) continue;
        const geo = new THREE.BufferGeometry().setFromPoints([
          nodes[i].mesh.position,
          nodes[j].mesh.position,
        ]);
        lines.push(new THREE.Line(geo, lineMat));
      }
    }

    return { nodes, lines };
  }, []);

  useEffect(() => {
    return () => {
      nodes.forEach((n) => {
        n.mesh.geometry.dispose();
        (n.mesh.material as THREE.Material).dispose();
      });
      lines.forEach((l) => {
        l.geometry.dispose();
        (l.material as THREE.Material).dispose();
      });
    };
  }, [nodes, lines]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / size.width) * 2 - 1;
      mouse.current.y = -(e.clientY / size.height) * 2 + 1;
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [size]);

  useFrame(() => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y += 0.002;
    groupRef.current.rotation.x += 0.0005;

    raycaster.setFromCamera(mouse.current, camera);
    const meshes = nodes.map((n) => n.mesh);
    const hits = raycaster.intersectObjects(meshes);

    let nextHovered: number | null = null;
    if (hits.length) {
      const hitMesh = hits[0].object as THREE.Mesh;
      const idx = nodes.findIndex((n) => n.mesh === hitMesh);
      if (idx !== -1) nextHovered = idx;
    }

    if (hoveredRef.current !== nextHovered) {
      hoveredRef.current = nextHovered;
      onHover(nextHovered);
    }

    nodes.forEach((n, i) => {
      const mat = n.mesh.material as THREE.MeshBasicMaterial;
      mat.color.setHex(nextHovered === i ? parseInt(THEME_COLORS.amberLight.replace("#", ""), 16) : parseInt(THEME_COLORS.amber.replace("#", ""), 16));
      n.mesh.scale.setScalar(nextHovered === i ? 1.4 : 1);
    });
  });

  return (
    <group ref={groupRef}>
      {nodes.map((n, i) => (
        <primitive key={i} object={n.mesh} />
      ))}
      {lines.map((line, i) => (
        <primitive key={`line-${i}`} object={line} />
      ))}
    </group>
  );
}

function Tooltip({ hovered }: { hovered: number | null }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (ref.current) {
        ref.current.style.left = `${e.clientX + 14}px`;
        ref.current.style.top = `${e.clientY + 14}px`;
      }
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  if (hovered === null) return null;

  return (
    <div
      ref={ref}
      style={{
        position: "fixed",
        left: 0,
        top: 0,
        padding: "6px 12px",
        borderRadius: "6px",
        fontSize: "13px",
        pointerEvents: "none",
        zIndex: 50,
      }}
      className="bg-card text-card-foreground border border-border shadow-md"
    >
      {stack[hovered]}
    </div>
  );
}

export default function NodeGraph() {
  const [hovered, setHovered] = useState<number | null>(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleHover = useCallback((idx: number | null) => {
    setHovered(idx);
  }, []);

  useEffect(() => {
    const mqMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mqMotion.matches);
    const mqDesktop = window.matchMedia("(min-width: 1024px)");
    setIsDesktop(mqDesktop.matches);
    const handlerDesktop = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    mqDesktop.addEventListener("change", handlerDesktop);
    return () => mqDesktop.removeEventListener("change", handlerDesktop);
  }, []);

  const showStatic = prefersReducedMotion || !isDesktop || hasError;

  return (
    <div className="relative w-full h-[50vh] min-h-[350px]">
      {showStatic ? (
        <div className="w-full h-full flex items-center justify-center">
          <div className="flex flex-wrap gap-3 justify-center max-w-lg px-4">
            {stack.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-full bg-secondary text-sm font-medium text-muted-foreground border border-border"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      ) : (
        <>
          <Canvas
            camera={{ position: [0, 0, 9], fov: 60 }}
            dpr={[1, 1.5]}
            onCreated={() => {}}
            onError={() => setHasError(true)}
          >
            <Nodes onHover={handleHover} />
          </Canvas>
          <Tooltip hovered={hovered} />
        </>
      )}
    </div>
  );
}
