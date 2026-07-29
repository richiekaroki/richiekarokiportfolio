"use client";

import dynamic from "next/dynamic";

const NodeGraph = dynamic(() => import("@/components/three/NodeGraph"), { ssr: false });

export default function NodeGraphWrapper() {
  return <NodeGraph />;
}
