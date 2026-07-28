"use client";

import dynamic from "next/dynamic";

const ConstellationField = dynamic(() => import("@/components/ConstellationField"), { ssr: false });

export default function ConstellationBackground() {
  return (
    <div className="absolute inset-0 z-0 opacity-40">
      <ConstellationField />
    </div>
  );
}
