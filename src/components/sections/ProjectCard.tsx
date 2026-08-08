import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import FramerWrapper from "@/components/animation/FramerWrapper";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { SiGithub } from "react-icons/si";

interface ProjectCardProps {
  value: {
    slug?: string;
    title: string;
    description: string;
    tags: string[];
    link: string;
    repo?: string;
    image?: string;
  };
  num: number;
  featured?: boolean;
}

const gradients = [
  "from-blue-500/20 to-cyan-500/20",
  "from-purple-500/20 to-pink-500/20",
  "from-amber-500/20 to-orange-500/20",
  "from-emerald-500/20 to-teal-500/20",
  "from-rose-500/20 to-red-500/20",
  "from-indigo-500/20 to-violet-500/20",
  "from-sky-500/20 to-blue-500/20",
  "from-lime-500/20 to-green-500/20",
];

const ProjectCard: React.FC<ProjectCardProps> = ({ value, num, featured }) => {
  const titleLink = value.slug ? `/projects/${value.slug}` : value.link;
  const gradient = gradients[num % gradients.length];

  return (
    <FramerWrapper
      className={cn("w-full", featured && "md:col-span-2")}
      y={0}
      scale={0.8}
      delay={num / 4}
      duration={0.15}
    >
      <div
        className={cn(
          "group w-full rounded-xl border border-border/50 bg-card overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-primary-sky/30",
          featured ? "md:flex-row" : "flex flex-col",
          "flex flex-col md:flex-row"
        )}
      >
        {/* Image / Visual */}
        <Link
          href={titleLink}
          className={cn(
            "relative block overflow-hidden",
            featured ? "md:w-1/2" : "md:w-2/5",
            "aspect-video md:aspect-auto md:min-h-[240px]"
          )}
        >
          {value.image ? (
            <Image
              src={value.image}
              alt={value.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 40vw"
            />
          ) : (
            <div
              className={cn(
                "w-full h-full bg-gradient-to-br transition-transform duration-500 group-hover:scale-105",
                gradient
              )}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center px-6">
                  <span className="block text-4xl md:text-5xl font-source-serif font-bold text-primary/20 select-none">
                    {value.title.split(" ").map((w) => w[0]).join("")}
                  </span>
                </div>
              </div>
              {/* Decorative dots */}
              <div className="absolute top-4 right-4 flex gap-1.5">
                <div className="w-2 h-2 rounded-full bg-primary/10" />
                <div className="w-2 h-2 rounded-full bg-primary-sky/15" />
                <div className="w-2 h-2 rounded-full bg-primary/10" />
              </div>
            </div>
          )}
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-300" />
        </Link>

        {/* Content */}
        <div className={cn(
          "flex flex-col flex-1 p-5 md:p-6 gap-3",
          featured ? "md:w-1/2" : "md:w-3/5"
        )}>
          <div className="flex items-start justify-between gap-3">
            <h3 className="font-source-serif text-lg md:text-xl font-bold text-primary leading-tight">
              {value.slug ? (
                <Link href={titleLink} className="hover:text-primary-sky transition-colors">
                  {value.title}
                </Link>
              ) : (
                value.title
              )}
            </h3>
            <a
              href={value.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-md text-muted-foreground hover:text-primary-sky hover:bg-accent transition-all"
              aria-label={`Visit ${value.title} live demo`}
            >
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>

          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
            {value.description}
          </p>

          <div className="flex flex-wrap gap-1.5">
            {value.tags.map((tag: string, index: number) => (
              <span
                key={index}
                className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-secondary text-secondary-foreground"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-2 mt-auto pt-2">
            {value.repo ? (
              <Link
                href={value.repo}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants({ variant: "outline", size: "sm" }),
                  "transition-all hover:translate-y-[-1px] hover:shadow-md active:scale-95 group/btn"
                )}
              >
                <SiGithub className="h-4 w-4 mr-1.5" />
                Source
              </Link>
            ) : null}
            <Link
              href={titleLink}
              className={cn(
                buttonVariants({ variant: "default", size: "sm" }),
                "transition-all hover:translate-y-[-1px] hover:shadow-md active:scale-95 group/btn"
              )}
            >
              {value.slug ? "Case Study" : "Visit Project"}
              <ArrowUpRight className="h-4 w-4 ml-1 opacity-0 -translate-x-1 group-hover/btn:opacity-100 group-hover/btn:translate-x-0 transition-all duration-200" />
            </Link>
          </div>
        </div>
      </div>
    </FramerWrapper>
  );
};

export default ProjectCard;
