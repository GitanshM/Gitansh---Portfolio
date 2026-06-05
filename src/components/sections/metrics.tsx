"use client";

import { METRICS } from "@/lib/constants";
import { AnimatedCounter } from "@/components/animations/animated-counter";
import {
  StaggerContainer,
  StaggerItem,
} from "@/components/animations/fade-up";

export function Metrics() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-secondary to-primary py-20 md:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.15),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <StaggerContainer className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {METRICS.map((metric) => (
            <StaggerItem key={metric.label}>
              <div className="text-center">
                <p className="font-display text-4xl font-bold text-white md:text-5xl">
                  <AnimatedCounter
                    value={metric.value}
                    suffix={metric.suffix}
                  />
                </p>
                <p className="mt-2 text-sm font-medium text-white/60">
                  {metric.label}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
