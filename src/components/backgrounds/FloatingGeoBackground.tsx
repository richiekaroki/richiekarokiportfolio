"use client";

import dynamic from "next/dynamic";
import LazyLoad from "@/components/ui/LazyLoad";

const FloatingGeo = dynamic(() => import("@/components/three/FloatingGeo"), { ssr: false });

export default function FloatingGeoBackground() {
  return (
    <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
      <LazyLoad className="w-full h-full">
        <FloatingGeo />
      </LazyLoad>
    </div>
  );
}
