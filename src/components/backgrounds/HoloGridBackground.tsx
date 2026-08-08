"use client";

import dynamic from "next/dynamic";
import LazyLoad from "@/components/ui/LazyLoad";

const HoloGrid = dynamic(() => import("@/components/three/HoloGrid"), { ssr: false });

export default function HoloGridBackground() {
  return (
    <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
      <LazyLoad className="w-full h-full">
        <HoloGrid />
      </LazyLoad>
    </div>
  );
}
