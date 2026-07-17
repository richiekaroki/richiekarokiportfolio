import FramerWrapper from "@/components/animation/FramerWrapper";
import { Circle, Heart, Globe2, Languages, Dna } from "lucide-react";
import Image from "next/image";
import richie1 from "@/assets/user-richie.jpg";
import richie2 from "@/assets/user-richie2.jpg";
import robo from "@/assets/robo-image.jpg";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
};

const page = () => {
  const items = [
    { hobby: "Coding" },
    { hobby: "Playing Games" },
    { hobby: "Watching Anime" },
    { hobby: "Tech Blog Writing" },
    { hobby: "Creating Cool Projects" },
  ];

  return (
    <div className="h-full w-full relative flex flex-col items-start gap-8 overflow-hidden">
      <FramerWrapper y={0} x={-100} className="w-full">
        <h1 className="font-source-serif text-primary font-bold text-5xl sm:text-6xl max-sm:text-3xl leading-tight [text-wrap:balance]">
          Software Engineer<br />Based In Kenya.
        </h1>
        <div className="w-16 h-1 bg-primary-sky mt-4" />
      </FramerWrapper>

      <FramerWrapper y={50} delay={0.15} className="w-full">
        <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-4 auto-rows-[200px] sm:auto-rows-[240px]">
          <div className="sm:col-span-2 sm:row-span-2 relative overflow-hidden rounded-xl">
            <Image
              src={robo}
              alt="Robot companion"
              fill
              className="object-cover rounded-xl"
              sizes="(max-width: 640px) 100vw, 66vw"
              priority
            />
          </div>
          <div className="relative overflow-hidden rounded-xl">
            <Image
              src={richie2}
              alt="Richard Karoki portrait"
              fill
              className="object-cover rounded-xl grayscale hover:grayscale-0 transition-all duration-500"
              sizes="(max-width: 640px) 100vw, 33vw"
            />
          </div>
          <div className="relative overflow-hidden rounded-xl">
            <Image
              src={richie1}
              alt="Richard Karoki at work"
              fill
              className="object-cover rounded-xl grayscale hover:grayscale-0 transition-all duration-500"
              sizes="(max-width: 640px) 100vw, 33vw"
            />
          </div>
        </div>
      </FramerWrapper>

      <FramerWrapper y={50} delay={0.2} className="w-full">
        <p className="font-inter text-lg w-full text-muted-foreground max-sm:text-base max-w-2xl leading-relaxed">
          I am a Software Engineer based in Kenya, and I build things that live on the internet.
          That simple idea is what drives everything I do. Whether it is an AI powered gesture
          recognition system, a production ready API, or a mobile app that helps people find
          housing, I find deep satisfaction in turning complex problems into elegant, user
          friendly solutions.
        </p>
        <p className="font-inter text-lg w-full text-muted-foreground max-sm:text-base mt-4 max-w-2xl leading-relaxed">
          My journey into software started with curiosity and a stubborn desire to understand
          how things work. That curiosity led me through the full stack of modern web
          development. I work with TypeScript, Python, NestJS, Vue, React, Flutter,
          PostgreSQL, and Redis on a daily basis. I have built housing recommender systems
          powered by Firebase, enterprise grade job platforms with JWT authentication and
          webhook delivery, and real time chat applications that serve developer communities.
        </p>
        <p className="font-inter text-lg w-full text-muted-foreground max-sm:text-base mt-4 max-w-2xl leading-relaxed">
          What excites me most is the space where technology meets real human need. I have
          spent years contributing to open source projects, writing about web development on
          platforms like Dev.to and Hashnode, and exploring the cutting edge of artificial
          intelligence and accessibility technology. I believe the best software is built not
          just with technical skill, but with empathy for the people who will use it.
        </p>
        <p className="font-inter text-lg w-full text-muted-foreground max-sm:text-base mt-4 max-w-2xl leading-relaxed">
          Outside of code, I am someone who values continuous learning and community. I
          regularly share what I discover through tech blog writing and mentoring. I am
          always looking for the next interesting problem to solve, the next tool to master,
          and the next opportunity to collaborate with others who share a passion for
          building meaningful technology.
        </p>
      </FramerWrapper>

      <FramerWrapper className="w-full" y={50} delay={0.3}>
        <div className="w-full flex flex-row justify-between max-lg:flex-col gap-6">
          {[
            { name: "Language", answer: "English", icon: <Languages className="h-11 w-11" /> },
            { name: "Nationality", answer: "Kenyan", icon: <Globe2 className="h-8 w-8" /> },
            { name: "Gender", answer: "Male", icon: <Dna className="h-8 w-8" /> },
          ].map((val, indx) => (
            <div className="p-1 w-fit relative" key={indx}>
              <h1 className="gap-2 text-3xl font-source-serif text-primary font-semibold relative flex icon_underline max-sm:text-2xl">{val.icon}{val.name}</h1>
              <div className="flex gap-2 justify-center items-center flex-row text-xl text-primary pt-3 max-lg:justify-start">
                <Circle className="h-3 w-3" /> {val.answer}
              </div>
            </div>
          ))}
        </div>
      </FramerWrapper>

      <FramerWrapper className="w-full" y={50} delay={0.35}>
        <h2 className="gap-2 text-2xl sm:text-3xl font-source-serif text-primary font-semibold flex items-center">
          <Heart className="h-6 w-6 sm:h-7 sm:w-7" /> Hobbies
        </h2>
        <div className="w-full h-fit mt-4 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-7">
          {items.map((val, indx) => (
            <div
              key={indx}
              className="flex gap-2 justify-start items-center flex-row text-lg sm:text-xl text-muted-foreground"
            >
              <Circle className="h-3 w-3 flex-shrink-0 text-primary-sky" /> {val.hobby}
            </div>
          ))}
        </div>
      </FramerWrapper>

    </div>
  );
};

export default page;
