"use client";

import { cn } from "@/lib/utils";

interface NavItem {
  id: string;
  label: string;
}

interface SectionNavProps {
  items: NavItem[];
  activeSection: string;
}

const SectionNav = ({ items, activeSection }: SectionNavProps) => {
  return (
    <>
      {/* Desktop: fixed sidebar — stays visible at all scroll positions */}
      <nav
        aria-label="About page sections"
        className="hidden lg:flex flex-col fixed top-24 left-[max(1.5rem,calc((100vw-80rem)/2+1.5rem))] w-44 gap-1 z-30"
      >
        {items.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={cn(
              "px-3 py-1.5 text-sm rounded-md transition-colors",
              activeSection === item.id
                ? "text-primary-sky font-medium bg-primary-sky/10"
                : "text-muted-foreground hover:text-primary"
            )}
          >
            {item.label}
          </a>
        ))}
      </nav>

      {/* Mobile: horizontal scrollable tabs */}
      <nav
        aria-label="About page sections"
        className="lg:hidden sticky top-16 z-20 w-full bg-background/80 backdrop-blur-md border-b border-border/50"
      >
        <div className="flex gap-1 overflow-x-auto no-scrollbar px-6 py-2">
          {items.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={cn(
                "px-3 py-1.5 text-sm rounded-md whitespace-nowrap transition-colors shrink-0",
                activeSection === item.id
                  ? "text-primary-sky font-medium bg-primary-sky/10"
                  : "text-muted-foreground hover:text-primary"
              )}
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </>
  );
};

export default SectionNav;
