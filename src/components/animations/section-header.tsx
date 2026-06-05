"use client";

import { FadeUp } from "@/components/animations/fade-up";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  label: string;
  title: string;
  description?: string;
  className?: string;
  align?: "left" | "center";
}

export function SectionHeader({
  label,
  title,
  description,
  className,
  align = "center",
}: SectionHeaderProps) {
  return (
    <FadeUp className={cn("mb-12 md:mb-16", className)}>
      <div
        className={cn(
          "flex flex-col gap-3",
          align === "center" && "items-center text-center"
        )}
      >
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          {label}
        </span>
        <h2 className="font-display text-3xl font-semibold tracking-tight text-primary md:text-4xl lg:text-[2.75rem] dark:text-white">
          {title}
        </h2>
        {description && (
          <p className="max-w-2xl text-base leading-relaxed text-primary/60 md:text-lg dark:text-white/60">
            {description}
          </p>
        )}
        <div
          className={cn(
            "mt-2 h-1 w-16 rounded-full bg-gradient-to-r from-secondary to-accent",
            align === "center" && "mx-auto"
          )}
        />
      </div>
    </FadeUp>
  );
}
