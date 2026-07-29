import { cn } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import FramerWrapper from "@/components/animation/FramerWrapper";
import { ArrowUpRight } from "lucide-react";
import { SiGithub } from "react-icons/si";

interface ProjectCardProps {
  value: {
    title: string;
    description: string;
    tags: string[];
    link: string;
    repo?: string;
  };
  num: number;
  featured?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ value, num, featured }) => {
  return (
    <FramerWrapper
      className={cn("w-full", featured && "lg:col-span-2")}
      y={0}
      scale={0.8}
      delay={num / 4}
      duration={0.15}
    >
      <Card
        className={cn(
          "w-full h-full flex flex-col hover:shadow-lg transition-all duration-300 border-2",
          featured && "lg:flex-row lg:items-center"
        )}
      >
        <CardHeader className={cn("pb-2", featured && "lg:w-1/2 lg:pb-2 lg:pl-6")}>
          <CardTitle className="text-xl font-bold text-primary">
            {value.title}
          </CardTitle>
        </CardHeader>

        <CardContent
          className={cn(
            "flex-grow flex flex-col gap-4",
            featured && "lg:w-1/2 lg:pr-6"
          )}
        >
          <p className="text-sm text-muted-foreground leading-relaxed">
            {value.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {value.tags.map((tag: string, index: number) => (
              <span
                key={index}
                className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-secondary text-secondary-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        </CardContent>

        <CardFooter className={cn("pt-2 gap-2", featured && "lg:justify-end lg:pr-6")}>
          {value.repo && (
            <Link
              href={value.repo}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({
                  variant: "outline",
                  size: "sm",
                }),
                "w-fit transition-all hover:translate-y-[-2px] hover:shadow-md group"
              )}
            >
              <SiGithub className="h-4 w-4 mr-1" />
              Source
            </Link>
          )}
          <Link
            href={value.link}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({
                variant: "default",
                size: "sm",
              }),
              "w-fit transition-all hover:translate-y-[-2px] hover:shadow-md group"
            )}
          >
            Visit Project
            <ArrowUpRight className="h-4 w-4 ml-1 hidden group-hover:block -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
          </Link>
        </CardFooter>
      </Card>
    </FramerWrapper>
  );
};

export default ProjectCard;
