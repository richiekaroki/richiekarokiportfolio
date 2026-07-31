"use client";

import { useEffect } from "react";
import { onCLS, onFCP, onINP, onLCP, onTTFB } from "web-vitals";

function sendToAnalytics(metric: {
  name: string;
  value: number;
  rating: "good" | "needs-improvement" | "poor";
  id: string;
}) {
  if (process.env.NODE_ENV === "development") {
    console.log(
      `[Web Vitals] ${metric.name}: ${metric.value.toFixed(1)} (${metric.rating})`
    );
  }
}

export default function WebVitals() {
  useEffect(() => {
    onCLS(sendToAnalytics);
    onFCP(sendToAnalytics);
    onINP(sendToAnalytics);
    onLCP(sendToAnalytics);
    onTTFB(sendToAnalytics);
  }, []);

  return null;
}
