"use client";

import {
  GraduationCap,
  Globe2,
  Award,
  Briefcase,
  type LucideIcon,
} from "lucide-react";
import { PARTNERSHIP_CATEGORIES } from "@/lib/constants";
import { SectionHeader } from "@/components/animations/section-header";
import {
  StaggerContainer,
  StaggerItem,
} from "@/components/animations/fade-up";
import { Card, CardContent } from "@/components/ui/card";

const iconMap: Record<string, LucideIcon> = {
  GraduationCap,
  Globe2,
  Award,
  Briefcase,
};

function LogoPlaceholder({ index }: { index: number }) {
  return (
    <div className="flex h-14 items-center justify-center rounded-lg border border-primary/5 bg-background transition-all hover:border-accent/30 hover:shadow-sm dark:border-white/10 dark:bg-primary/30">
      <div className="flex flex-col items-center gap-1">
        <div className="h-6 w-16 rounded bg-primary/5 dark:bg-white/10" />
        <span className="text-[9px] font-medium text-primary/30 dark:text-white/30">
          Partner {index}
        </span>
      </div>
    </div>
  );
}

export function Partnerships() {
  return (
    <section id="partnerships" className="section-padding bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Partnerships"
          title="Collaborations & Strategic Alliances"
          description="Building trusted relationships across higher education, international organizations, associations, and industry."
        />

        <StaggerContainer className="grid gap-8 md:grid-cols-2">
          {PARTNERSHIP_CATEGORIES.map((category) => {
            const Icon = iconMap[category.icon];
            return (
              <StaggerItem key={category.title}>
                <Card className="h-full overflow-hidden">
                  <CardContent className="p-6 md:p-8">
                    <div className="mb-6 flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/10 text-secondary dark:bg-accent/10 dark:text-accent">
                        {Icon && <Icon className="h-6 w-6" />}
                      </div>
                      <div>
                        <h3 className="font-display text-lg font-semibold text-primary dark:text-white">
                          {category.title}
                        </h3>
                        <p className="text-sm text-primary/50 dark:text-white/50">
                          {category.items.join(" · ")}
                        </p>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-3 sm:grid-cols-4">
                      {Array.from({ length: 8 }).map((_, i) => (
                        <LogoPlaceholder key={i} index={i + 1} />
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
