"use client";

import { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

const stack = [
  "Next.js", "React", "Python", "Flask", "Node.js",
  "PostgreSQL", "TypeScript", "Vue", "NestJS", "Docker",
  "Firebase", "Redis",
];

function Nodes() {
  const groupRef = useRef<THREE.Group>(null!);
  const { raycaster, camera, size } = useThree();
  const [hovered, setHovered] = useState<number | null>(null);
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
      const mat = new THREE.MeshBasicMaterial({ color: 0xd97706 });
      const mesh = new THREE.Mesh(geo, mat);
      mesh.position.set(x, y, z);
      nodes.push({ mesh, label });
    });

    const lineMat = new THREE.LineBasicMaterial({
      color: 0x44403c,
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
    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / size.width) * 2 - 1;
      mouse.current.y = -(e.clientY / size.height) * 2 + 1;
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [size]);

  useFrame(() => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y += 0.002;
    groupRef.current.rotation.x += 0.0005;

    raycaster.setFromCamera(mouse.current, camera);
    const meshes = nodes.map((n) => n.mesh);
    const hits = raycaster.intersectObjects(meshes);

    nodes.forEach((n, i) => {
      const mat = n.mesh.material as THREE.MeshBasicMaterial;
      mat.color.setHex(hovered === i ? 0xfde68a : 0xd97706);
      n.mesh.scale.setScalar(hovered === i ? 1.4 : 1);
    });

    if (hits.length) {
      const hitMesh = hits[0].object as THREE.Mesh;
      const idx = nodes.findIndex((n) => n.mesh === hitMesh);
      if (idx !== -1) setHovered(idx);
    } else {
      setHovered(null);
    }
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
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX + 14, y: e.clientY + 14 });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  if (hovered === null) return null;

  return (
    <div
      style={{
        position: "fixed",
        left: pos.x,
        top: pos.y,
        background: "#1c1917",
        color: "#fde68a",
        padding: "6px 12px",
        borderRadius: "6px",
        fontSize: "13px",
        pointerEvents: "none",
        border: "1px solid #d97706",
        zIndex: 50,
      }}
    >
      {stack[hovered]}
    </div>
  );
}

export default function NodeGraph() {
  const [hovered] = useState<number | null>(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mq.matches);
  }, []);

  return (
    <div className="relative w-full h-[50vh] min-h-[350px]">
      {prefersReducedMotion ? (
        <div className="w-full h-full flex items-center justify-center">
          <div className="flex flex-wrap gap-3 justify-center max-w-md">
            {stack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 rounded-full bg-secondary text-sm text-muted-foreground border border-border"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      ) : (
        <>
          <Canvas camera={{ position: [0, 0, 9], fov: 60 }} dpr={[1, 1.5]}>
            <Nodes />
          </Canvas>
          <Tooltip hovered={hovered} />
        </>
      )}
    </div>
  );
}
