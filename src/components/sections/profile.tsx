"use client";

import {
  GraduationCap,
  Globe,
  Calendar,
  Users,
  Building2,
  Mic,
  Handshake,
  LayoutGrid,
  type LucideIcon,
} from "lucide-react";
import { PROFILE_CARDS } from "@/lib/constants";
import { SectionHeader } from "@/components/animations/section-header";
import {
  StaggerContainer,
  StaggerItem,
} from "@/components/animations/fade-up";
import { Card, CardContent } from "@/components/ui/card";

const iconMap: Record<string, LucideIcon> = {
  GraduationCap,
  Globe,
  Calendar,
  Users,
  Building2,
  Mic,
  Handshake,
  LayoutGrid,
};

export function Profile() {
  return (
    <section className="section-padding bg-white dark:bg-primary/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Professional Profile"
          title="Areas of Expertise"
          description="Delivering executive-level coordination across the full spectrum of higher education engagement and event management."
        />

        <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PROFILE_CARDS.map((card) => {
            const Icon = iconMap[card.icon];
            return (
              <StaggerItem key={card.title}>
                <Card className="group h-full border-primary/5 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 dark:hover:border-accent/20">
                  <CardContent className="p-6">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/10 text-secondary transition-colors group-hover:bg-accent group-hover:text-white dark:bg-accent/10 dark:text-accent">
                      {Icon && <Icon className="h-6 w-6" />}
                    </div>
                    <h3 className="font-display text-base font-semibold text-primary dark:text-white">
                      {card.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-primary/60 dark:text-white/60">
                      {card.description}
                    </p>
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
