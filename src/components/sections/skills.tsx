"use client";

import { motion } from "framer-motion";
import { SKILLS } from "@/lib/constants";
import { SectionHeader } from "@/components/animations/section-header";
import {
  StaggerContainer,
  StaggerItem,
} from "@/components/animations/fade-up";

export function Skills() {
  return (
    <section id="skills" className="section-padding bg-white dark:bg-primary/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Core Competencies"
          title="Skills & Capabilities"
          description="A comprehensive skill set honed through years of executive-level engagement in higher education."
        />

        <StaggerContainer className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {SKILLS.map((skill) => (
            <StaggerItem key={skill}>
              <motion.div
                className="group relative overflow-hidden rounded-xl border border-primary/5 bg-background px-5 py-4 transition-all hover:border-accent/30 hover:shadow-md dark:border-white/10 dark:bg-primary/30"
                whileHover={{ y: -2 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-secondary/0 to-accent/0 transition-all group-hover:from-secondary/5 group-hover:to-accent/5" />
                <div className="relative flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-accent transition-transform group-hover:scale-125" />
                  <span className="text-sm font-medium text-primary dark:text-white">
                    {skill}
                  </span>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
