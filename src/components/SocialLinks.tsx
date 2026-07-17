import { cn } from "@/lib/utils";
import { FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { SiGithub } from "react-icons/si";
import { buttonVariants } from "./ui/button";
import Link from "next/link";
import FramerWrapper from "./animation/FramerWrapper";
import { type ComponentType } from "react";

interface SocialLink {
  name: string;
  link: string;
  Icon: ComponentType;
}

const socialLinks: SocialLink[] = [
  { name: "Twitter", link: "https://x.com/richiekaroki", Icon: FaTwitter },
  { name: "Linkedin", link: "https://www.linkedin.com/in/richard-karoki-007/", Icon: FaLinkedinIn },
  { name: "Github", link: "https://github.com/richiekaroki", Icon: SiGithub },
];

const SocialLinks = () => {
  return (
    <>
      {socialLinks.map((itm, indx) => {
        const timing = 0.55 + indx * 0.125

        return (
          <FramerWrapper key={indx} delay={timing} y={50}>
          <Link target="_blank"
            rel="noopener noreferrer"
            href={itm.link}
            aria-label={itm.name}
            className={cn(buttonVariants({ variant: "outline", size: "icon" }), "min-w-[44px] min-h-[44px]")}
            ><itm.Icon /></Link>
            </FramerWrapper>
        );
      })}
    </>
  );
};

export default SocialLinks;
