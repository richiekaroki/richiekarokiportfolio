import { SiGithub } from "react-icons/si";
import Link from "next/link";

const GithubBtn = () => {
  return (
    <Link
      href="https://github.com/richiekaroki"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="GitHub Profile"
      className="fixed left-0 bottom-5 sm:bottom-5 flex rounded-r-full justify-center items-center gap-2 z-50 w-fit h-fit p-3 min-w-[44px] min-h-[44px] shadow-md border-y border-r border-border hover:bg-primary hover:text-primary-foreground transition-colors"
    >
      <SiGithub />
      <span className="font-source-serif text-lg sm:text-xl hidden sm:inline">Github</span>
    </Link>
  );
};

export default GithubBtn;
