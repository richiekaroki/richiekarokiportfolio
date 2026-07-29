"use client";

import dynamic from "next/dynamic";

const FloatingGeo = dynamic(() => import("@/components/three/FloatingGeo"), { ssr: false });

export default function FloatingGeoBackground() {
  return (
    <div className="absolute inset-0 z-0 opacity-40">
      <FloatingGeo />
    </div>
  );
}
