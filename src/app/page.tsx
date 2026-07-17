import Link from "next/link";
import SocialLinks from "@/components/SocialLinks";
import HeroContent from "@/components/HeroContent";
import HeroImage from "@/components/HeroImage";
import GithubBtn from "@/components/animation/GithubBtn";
import ScrambleButton from "@/components/animation/ScrambleButton";
import FramerWrapper from "@/components/animation/FramerWrapper";

export default function Home() {
  return (
   <>
      {/* LEFT SIDE  */}
      <FramerWrapper className="h-full w-full lg:w-auto flex flex-col justify-start gap-4" y={0} x={-100}>
        <HeroContent />
        <div className="h-fit w-full p-4 flex gap-4">
          <SocialLinks />
        </div>
        <div className="h-fit w-full mt-2 py-2 px-4">
          <Link href="/Richie-software-engineer.pdf" download>
            <ScrambleButton label='Download Resume' />
          </Link>
        </div>
      </FramerWrapper>
      {/* RIGHT SIDE image  */}
      <FramerWrapper className="hidden lg:block h-full w-[47%] relative" y={0} x={100}>
        <HeroImage />
      </FramerWrapper>

      {/* MOBILE IMAGE  */}
      <FramerWrapper className="block lg:hidden w-full max-w-[280px] aspect-square mx-auto my-4" y={50} delay={0.3}>
        <HeroImage />
      </FramerWrapper>

      {/* GITHUB BUTTON  */}
      <GithubBtn/>
      </>
  );
}
