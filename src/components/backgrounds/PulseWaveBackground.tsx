"use client";

import dynamic from "next/dynamic";
import LazyLoad from "@/components/ui/LazyLoad";

const PulseWave = dynamic(() => import("@/components/three/PulseWave"), { ssr: false });

export default function PulseWaveBackground({ typing, submitted }: { typing?: boolean; submitted?: boolean }) {
  return (
    <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
      <LazyLoad className="w-full h-full">
        <PulseWave typing={typing} submitted={submitted} />
      </LazyLoad>
    </div>
  );
}
