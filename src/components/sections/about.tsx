"use client";

import { CheckCircle2 } from "lucide-react";
import { ABOUT_STAKEHOLDERS } from "@/lib/constants";
import { SectionHeader } from "@/components/animations/section-header";
import { FadeUp } from "@/components/animations/fade-up";

export function About() {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="About Me"
          title="Bridging Higher Education & Global Partnerships"
          description="A dedicated professional at the intersection of academic leadership, international engagement, and large-scale event excellence."
        />

        <div className="grid gap-12 lg:grid-cols-2">
          <FadeUp>
            <p className="text-base leading-relaxed text-primary md:text-lg dark:text-white">
              <span className="font-semibold text-primary dark:text-white">
                Gitansh Manaktala
              </span>{" "}
              is an Event Coordinator specializing in higher education
              engagement, institutional outreach, strategic partnerships,
              international collaborations and conference management.
            </p>
            <p className="mt-6 text-base leading-relaxed text-primary md:text-lg dark:text-white">
              With a proven track record of connecting academic institutions
              with global stakeholders, Gitansh brings executive-level
              professionalism to every engagement — from intimate roundtables
              with vice chancellors to flagship international conferences
              attracting hundreds of education leaders.
            </p>
          </FadeUp>

          <div className="grid gap-8 sm:grid-cols-2">
            <FadeUp delay={0.1}>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-secondary dark:text-accent">
                Works With
              </h3>
              <ul className="space-y-2.5">
                {ABOUT_STAKEHOLDERS.organizations.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2.5 text-sm text-primary dark:text-white"
                  >
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </FadeUp>

            <FadeUp delay={0.2}>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-secondary dark:text-accent">
                Regularly Engages
              </h3>
              <ul className="space-y-2.5">
                {ABOUT_STAKEHOLDERS.leaders.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2.5 text-sm text-primary/70 dark:text-white/70"
                  >
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}
