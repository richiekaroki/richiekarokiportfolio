"use client";

import dynamic from "next/dynamic";

const NodeGraph = dynamic(() => import("@/components/NodeGraph"), { ssr: false });

export default function NodeGraphWrapper() {
  return <NodeGraph />;
}
