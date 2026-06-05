"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";
import { SectionHeader } from "@/components/animations/section-header";
import { Button } from "@/components/ui/button";

export function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((c) => (c + 1) % TESTIMONIALS.length);
  const prev = () =>
    setCurrent((c) => (c - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  return (
    <section className="section-padding bg-white dark:bg-primary/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Testimonials"
          title="What Leaders Say"
          description="Trusted by academic leaders, international organizations, and education associations."
        />

        <div className="relative mx-auto max-w-3xl">
          <div className="rounded-2xl border border-primary/8 bg-background p-8 shadow-sm md:p-12 dark:border-white/10 dark:bg-primary/40">
            <Quote className="mb-6 h-10 w-10 text-accent/30" />

            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <blockquote className="text-lg leading-relaxed text-primary/80 md:text-xl dark:text-white/80">
                  &ldquo;{TESTIMONIALS[current].quote}&rdquo;
                </blockquote>
                <div className="mt-8 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary/10 font-display text-lg font-semibold text-secondary dark:bg-accent/20 dark:text-accent">
                    {TESTIMONIALS[current].author
                      .split(" ")
                      .map((n) => n[0])
                      .join("")
                      .slice(0, 2)}
                  </div>
                  <div>
                    <p className="font-semibold text-primary dark:text-white">
                      {TESTIMONIALS[current].author}
                    </p>
                    <p className="text-sm text-primary/50 dark:text-white/50">
                      {TESTIMONIALS[current].role},{" "}
                      {TESTIMONIALS[current].organization}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-8 flex items-center justify-center gap-4">
            <Button variant="outline" size="icon" onClick={prev} aria-label="Previous testimonial">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === current
                      ? "w-8 bg-accent"
                      : "w-2 bg-primary/20 dark:bg-white/20"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <Button variant="outline" size="icon" onClick={next} aria-label="Next testimonial">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
