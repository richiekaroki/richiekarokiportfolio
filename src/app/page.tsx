"use client";

import Link from "next/link";
import SocialLinks from "@/components/SocialLinks";
import HeroContent from "@/components/HeroContent";
import HeroImage from "@/components/HeroImage";
import GithubBtn from "@/components/animation/GithubBtn";
import ScrambleButton from "@/components/animation/ScrambleButton";
import FramerWrapper from "@/components/animation/FramerWrapper";
import TwoPathSplit from "@/components/TwoPathSplit";
import dynamic from "next/dynamic";
const ParticleHero = dynamic(() => import("@/components/ParticleHero"), { ssr: false });

export default function Home() {
  return (
    <div className="w-full">
      {/* ── HERO SECTION ── */}
      <section className="relative w-full min-h-screen flex items-center">
        {/* Particle background */}
        <div className="absolute inset-0 z-0">
          <ParticleHero />
        </div>

        {/* Hero content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <div className="flex flex-col lg:flex-row items-center lg:items-center justify-between gap-12 lg:gap-20">
            {/* LEFT — Text */}
            <FramerWrapper className="flex-1 max-w-xl" y={0} x={-80}>
              <HeroContent />
              <div className="mt-8 flex items-center gap-4">
                <SocialLinks />
              </div>
              <div className="mt-8">
                <Link href="/Richie-software-engineer.pdf" download>
                  <ScrambleButton label="Download Resume" />
                </Link>
              </div>
            </FramerWrapper>

            {/* RIGHT — Image */}
            <FramerWrapper
              className="hidden lg:flex flex-shrink-0"
              y={0}
              x={80}
              delay={0.2}
            >
              <HeroImage />
            </FramerWrapper>
          </div>
        </div>

        {/* Mobile image */}
        <div className="block lg:hidden absolute bottom-10 left-1/2 -translate-x-1/2 z-10 pointer-events-none opacity-30">
          <HeroImage />
        </div>
      </section>

      {/* ── GITHUB BUTTON ── */}
      <section className="w-full py-6">
        <GithubBtn />
      </section>

      {/* ── TWO-PATH SPLIT ── */}
      <section className="w-full py-16">
        <TwoPathSplit />
      </section>
    </div>
  );
}
