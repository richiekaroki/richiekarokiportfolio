"use client";

import dynamic from "next/dynamic";

const HoloGrid = dynamic(() => import("@/components/three/HoloGrid"), { ssr: false });

export default function HoloGridBackground() {
  return (
    <div className="absolute inset-0 z-0 opacity-40">
      <HoloGrid />
    </div>
  );
}
