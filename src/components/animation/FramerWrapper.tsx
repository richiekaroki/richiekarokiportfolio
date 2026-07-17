"use client";
import React, { useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
type FramerMotionProps = {
    children: React.ReactNode,
    className?: string,
    y?: number
    x?: number
    delay?: number
    duration?: number
    scale?: number
}
function FramerWrapper({children, delay = 0.25, y = 15, x = 0, duration = 0.20, scale = 0, className}: FramerMotionProps) {
  const shouldReduceMotion = useReducedMotion();
  const hasAnimated = useRef(false);

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
      <motion.div
      initial={hasAnimated.current ? false : (scale === 0 ? {opacity: 0, y: y, x: x} : {opacity: 0, y: y, x: x, scale: scale})}
      animate={scale === 0 ? {opacity: 1, y: 0, x: 0} : {opacity: 1, y: 0, x: 0, scale: 1}}
      transition={{delay: delay, duration: duration, ease: [0.25, 1, 0.5, 1]}}
      onAnimationComplete={() => { hasAnimated.current = true; }}
      className={className}
      >{children}</motion.div>
  );
}

export default FramerWrapper;