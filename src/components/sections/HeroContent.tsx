"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

const roles = [
  "Full Stack Developer",
  "AI Enthusiast",
  "Tech Tutor",
  "Tech Blogger",
  "Problem Solver",
];

const HeroContent = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <h1 className="font-source-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl name_underline text-primary leading-tight">
        Richard <br /> Karoki
      </h1>
      <div className="py-4 rounded-md flex flex-col justify-center items-start overflow-hidden">
        <div className="font-inter text-sm sm:text-xl md:text-2xl [text-wrap:balance] text-muted-foreground">
          I am a&nbsp;
          <span className="inline-flex ml-1 overflow-hidden align-bottom" style={{ height: "1.25em" }}>
            <AnimatePresence mode="popLayout">
              <motion.span
                key={roles[index]}
                className="font-source-serif text-base sm:text-xl md:text-2xl text-primary-sky block"
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: "-100%", opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                {roles[index]}
              </motion.span>
            </AnimatePresence>
          </span>
        </div>
      </div>
    </>
  );
};

export default HeroContent;
