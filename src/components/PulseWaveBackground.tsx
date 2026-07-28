"use client";

import dynamic from "next/dynamic";

const PulseWave = dynamic(() => import("@/components/PulseWave"), { ssr: false });

export default function PulseWaveBackground() {
  return (
    <div className="absolute inset-0 z-0 opacity-40">
      <PulseWave />
    </div>
  );
}
