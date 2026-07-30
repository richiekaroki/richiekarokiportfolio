import { cn } from "@/lib/utils";

interface RKLogoProps {
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "circle" | "square" | "mark";
  className?: string;
}

const sizes = {
  sm: "w-8 h-8 text-xs",
  md: "w-10 h-10 text-sm",
  lg: "w-12 h-12 text-base",
  xl: "w-16 h-16 text-lg",
};

export default function RKLogo({ size = "md", variant = "circle", className }: RKLogoProps) {
  if (variant === "mark") {
    return (
      <span
        className={cn(
          "font-source-serif font-bold text-primary-sky leading-none select-none",
          size === "sm" && "text-lg",
          size === "md" && "text-xl",
          size === "lg" && "text-2xl",
          size === "xl" && "text-3xl",
          className
        )}
        aria-hidden="true"
      >
        RK
      </span>
    );
  }

  return (
    <div
      className={cn(
        "relative flex items-center justify-center font-source-serif font-bold text-primary-foreground select-none",
        variant === "circle" && "rounded-full",
        variant === "square" && "rounded-lg",
        sizes[size],
        className
      )}
      style={{
        background: "linear-gradient(135deg, hsl(var(--primary-sky)), hsl(var(--accent-amber)))",
      }}
      aria-hidden="true"
    >
      RK
    </div>
  );
}
