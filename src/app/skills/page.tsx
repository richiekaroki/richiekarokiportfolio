import SkillGrid from "@/components/SkillGrid";
import NodeGraphWrapper from "@/components/NodeGraphWrapper";
import FramerWrapper from "@/components/animation/FramerWrapper";
import type { Metadata } from "next";
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTypescript,
  SiCplusplus,
  SiPython,
  SiReact,
  SiNextdotjs,
  SiVuedotjs,
  SiSvelte,
  SiTailwindcss,
  SiBootstrap,
  SiMaterialdesign,
  SiGit,
  SiGithub,
  SiDocker,
  SiFirebase,
  SiMongodb,
  SiPostgresql,
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";
import { FaJava } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Skills",
};

const skillPage = () => {
  const programmingLanguages = [
    { name: "HTML5", icon: <SiHtml5 className="text-[#E34F26]" /> },
    { name: "CSS3", icon: <SiCss className="text-[#1572B6]" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E]" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" /> },
    { name: "C++", icon: <SiCplusplus className="text-[#00599C]" /> },
    { name: "Python", icon: <SiPython className="text-[#3776AB]" /> },
    { name: "Java", icon: <FaJava className="text-[#ED8B00]" /> },
  ];

  const frameworks = [
    { name: "React", icon: <SiReact className="text-[#61DAFB]" /> },
    { name: "Next.js", icon: <SiNextdotjs /> },
    { name: "Vue.js", icon: <SiVuedotjs className="text-[#4FC08D]" /> },
    { name: "Svelte", icon: <SiSvelte className="text-[#FF3E00]" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#06B6D4]" /> },
    { name: "Bootstrap", icon: <SiBootstrap className="text-[#7952B3]" /> },
    { name: "Material UI", icon: <SiMaterialdesign className="text-[#007FFF]" /> },
  ];

  const tools = [
    { name: "Git", icon: <SiGit className="text-[#F05032]" /> },
    { name: "GitHub", icon: <SiGithub /> },
    { name: "VS Code", icon: <VscCode className="text-[#007ACC]" /> },
    { name: "Docker", icon: <SiDocker className="text-[#2496ED]" /> },
    { name: "Firebase", icon: <SiFirebase className="text-[#FFCA28]" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
    { name: "PostgreSQL", icon: <SiPostgresql className="text-[#4169E1]" /> },
  ];

  return (
    <div className="min-h-screen w-full relative flex flex-col items-start gap-8 overflow-hidden">
      <FramerWrapper y={0} x={-100} className="w-full">
        <h1 className="font-source-serif text-primary font-bold text-5xl sm:text-6xl max-sm:text-3xl leading-tight [text-wrap:balance]">
          My Technical<br />Experience & Skills.
        </h1>
        <div className="w-16 h-1 bg-primary-sky mt-4" />
      </FramerWrapper>

      <FramerWrapper y={50} delay={0.1} className="w-full">
        <p className="font-inter text-lg w-full text-muted-foreground max-sm:text-base max-w-2xl leading-relaxed">
          I have a solid understanding of HTML5,
          CSS3, JS, TS and React, including responsive design principles. I
          specialize in building web applications and sites using Javascript,
          Typescript, React, Nextjs & Node.
        </p>
      </FramerWrapper>

      {/* Interactive Tech Stack Node Graph */}
      <FramerWrapper y={50} delay={0.15} className="w-full">
        <NodeGraphWrapper />
      </FramerWrapper>

      <FramerWrapper className="w-full" y={50} delay={0.2}>
        <h2 className="text-lg font-source-serif text-primary font-semibold mb-4">Languages</h2>
        <div className="w-full grid grid-cols-7 max-lg:grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2 gap-4">
          <SkillGrid items={programmingLanguages} />
        </div>
      </FramerWrapper>

      <FramerWrapper className="w-full" y={50} delay={0.25}>
        <h2 className="text-lg font-source-serif text-primary font-semibold mb-4">Frameworks & Libraries</h2>
        <div className="w-full grid grid-cols-7 max-lg:grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2 gap-4">
          <SkillGrid items={frameworks} />
        </div>
      </FramerWrapper>

      <FramerWrapper className="w-full" y={50} delay={0.3}>
        <h2 className="text-lg font-source-serif text-primary font-semibold mb-4">Tools & Technologies</h2>
        <div className="w-full grid grid-cols-7 max-lg:grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2 gap-4">
          <SkillGrid items={tools} />
        </div>
      </FramerWrapper>
    </div>
  );
};

export default skillPage;
