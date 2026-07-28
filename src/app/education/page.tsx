import FramerWrapper from "@/components/animation/FramerWrapper";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Education",
};

const educationPage = () => {
  return (
    <div className="min-h-screen w-full relative flex flex-col items-start gap-8 overflow-hidden">
      <FramerWrapper y={0} x={-100} className="w-full">
        <h1 className="font-source-serif text-primary font-bold text-5xl sm:text-6xl max-sm:text-3xl leading-tight [text-wrap:balance]">
          Education
        </h1>
        <div className="w-16 h-1 bg-primary-sky mt-4" />
      </FramerWrapper>

      <div className="w-full h-fit flex flex-col gap-8">
        <div className="w-full h-fit flex flex-col sm:flex-row gap-4 sm:gap-0">
          <FramerWrapper
            y={0}
            x={-50}
            delay={0.2}
            className="sm:w-1/4 font-source-serif flex sm:items-start sm:justify-start text-base sm:text-lg text-muted-foreground"
          >
            2017 to 2023
          </FramerWrapper>
          <FramerWrapper
            y={0}
            x={50}
            delay={0.25}
            className="relative sm:w-3/4 sm:border-l border-border pl-6 gap-3"
          >
            <div className="text-xl sm:text-2xl font-source-serif text-primary">
              BSc in Computer Technology
            </div>
            <p className="font-inter text-sm text-muted-foreground mt-1">
              Jomo Kenyatta University of Agriculture and Technology
            </p>
            <p className="font-inter text-sm sm:text-base w-full text-muted-foreground mt-2 leading-relaxed">
              Studied software engineering, data structures, algorithms, databases,
              and network systems. Built multiple projects including a gesture
              recognition system and web based applications during the program.
            </p>
          </FramerWrapper>
        </div>

        <div className="w-full h-fit flex flex-col sm:flex-row gap-4 sm:gap-0">
          <FramerWrapper
            y={0}
            x={-50}
            delay={0.3}
            className="sm:w-1/4 font-source-serif flex sm:items-start sm:justify-start text-base sm:text-lg text-muted-foreground"
          >
            Certifications
          </FramerWrapper>
          <FramerWrapper
            y={0}
            x={50}
            delay={0.35}
            className="relative sm:w-3/4 sm:border-l border-border pl-6 gap-3"
          >
            <div className="flex flex-col gap-3">
              <div>
                <span className="text-base font-source-serif text-primary">JavaScript Algorithms and Data Structures</span>
                <p className="font-inter text-sm text-muted-foreground">freeCodeCamp</p>
              </div>
              <div>
                <span className="text-base font-source-serif text-primary">Problem Solving (Basic)</span>
                <p className="font-inter text-sm text-muted-foreground">HackerRank</p>
              </div>
              <div>
                <span className="text-base font-source-serif text-primary">Networking Basics</span>
                <p className="font-inter text-sm text-muted-foreground">Cisco Networking Academy</p>
              </div>
            </div>
          </FramerWrapper>
        </div>
      </div>
    </div>
  );
};

export default educationPage;
