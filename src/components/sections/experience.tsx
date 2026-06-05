"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { EXPERIENCE } from "@/lib/constants";
import { SectionHeader } from "@/components/animations/section-header";
import { FadeUp } from "@/components/animations/fade-up";

export function Experience() {
  return (
    <section id="experience" className="section-padding bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Experience"
          title="Professional Journey"
          description="Building expertise in higher education engagement, strategic partnerships, and conference excellence."
        />

        <div className="relative mx-auto max-w-3xl">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-accent via-secondary to-accent/20 md:left-1/2 md:-translate-x-px" />

          <FadeUp>
            <motion.div
              className="relative flex flex-col md:flex-row md:items-center"
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="absolute left-6 z-10 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full border-4 border-background bg-secondary text-white shadow-lg md:left-1/2">
                <Briefcase className="h-5 w-5" />
              </div>

              <div className="ml-16 md:ml-0 md:w-1/2 md:pr-12 md:text-right">
                <span className="inline-block rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
                  {EXPERIENCE.period}
                </span>
                <p className="mt-2 text-sm text-primary/50 dark:text-white/50">
                  Current Role
                </p>
              </div>

              <div className="ml-16 mt-4 md:ml-0 md:mt-0 md:w-1/2 md:pl-12">
                <div className="rounded-2xl border border-primary/8 bg-white p-6 shadow-sm transition-shadow hover:shadow-md dark:border-white/10 dark:bg-primary/40">
                  <h3 className="font-display text-xl font-semibold text-primary dark:text-white">
                    {EXPERIENCE.role}
                  </h3>
                  <p className="mt-1 text-accent font-medium">
                    {EXPERIENCE.organization}
                  </p>
                  <div className="mt-6 grid gap-2 sm:grid-cols-2">
                    {EXPERIENCE.responsibilities.map((item, i) => (
                      <motion.div
                        key={item}
                        className="flex items-center gap-2 rounded-lg bg-background px-3 py-2 text-sm text-primary/70 dark:bg-primary/30 dark:text-white/70"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.05 }}
                      >
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        {item}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
