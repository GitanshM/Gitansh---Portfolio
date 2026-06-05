"use client";

import { motion } from "framer-motion";
import { INTERNATIONAL_REGIONS } from "@/lib/constants";
import { SectionHeader } from "@/components/animations/section-header";
import { FadeUp } from "@/components/animations/fade-up";

export function International() {
  const hub = INTERNATIONAL_REGIONS.find((r) => "hub" in r && r.hub);
  const others = INTERNATIONAL_REGIONS.filter((r) => !("hub" in r && r.hub));

  return (
    <section className="section-padding bg-primary text-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Global Reach"
          title="International Engagement"
          description="Facilitating cross-border partnerships and international education collaborations across continents."
          className="[&_h2]:text-white [&_p]:text-white/60"
        />

        <FadeUp>
          <div className="relative mx-auto aspect-[2/1] max-w-4xl">
            <svg
              viewBox="0 0 100 60"
              className="h-full w-full"
              aria-label="World map showing international engagement regions"
            >
              <defs>
                <radialGradient id="glow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
                </radialGradient>
              </defs>

              {/* Simplified world map outline */}
              <ellipse
                cx="50"
                cy="30"
                rx="48"
                ry="28"
                fill="none"
                stroke="rgba(255,255,255,0.08)"
                strokeWidth="0.3"
              />

              {/* Continent shapes (simplified) */}
              <path
                d="M15,20 Q20,15 30,18 Q35,22 28,30 Q20,32 15,28 Z"
                fill="rgba(255,255,255,0.03)"
                stroke="rgba(255,255,255,0.1)"
                strokeWidth="0.2"
              />
              <path
                d="M42,18 Q55,15 58,25 Q55,35 45,32 Q40,28 42,18 Z"
                fill="rgba(255,255,255,0.03)"
                stroke="rgba(255,255,255,0.1)"
                strokeWidth="0.2"
              />
              <path
                d="M65,22 Q78,20 85,28 Q82,40 72,38 Q65,32 65,22 Z"
                fill="rgba(255,255,255,0.03)"
                stroke="rgba(255,255,255,0.1)"
                strokeWidth="0.2"
              />
              <path
                d="M70,45 Q80,42 88,48 Q85,55 75,52 Q68,50 70,45 Z"
                fill="rgba(255,255,255,0.03)"
                stroke="rgba(255,255,255,0.1)"
                strokeWidth="0.2"
              />

              {/* Connection lines from hub */}
              {hub &&
                others.map((region, i) => (
                  <motion.line
                    key={region.name}
                    x1={hub.x}
                    y1={hub.y}
                    x2={region.x}
                    y2={region.y}
                    stroke="#3B82F6"
                    strokeWidth="0.15"
                    strokeDasharray="1 0.5"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 0.4 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: i * 0.2 }}
                  />
                ))}

              {/* Region dots */}
              {INTERNATIONAL_REGIONS.map((region, i) => (
                <g key={region.name}>
                  {"hub" in region && region.hub && (
                    <circle
                      cx={region.x}
                      cy={region.y}
                      r="4"
                      fill="url(#glow)"
                    />
                  )}
                  <motion.circle
                    cx={region.x}
                    cy={region.y}
                    r={"hub" in region && region.hub ? 1.2 : 0.8}
                    fill={"hub" in region && region.hub ? "#3B82F6" : "#60A5FA"}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1, type: "spring" }}
                  />
                  {"hub" in region && region.hub && (
                    <motion.circle
                      cx={region.x}
                      cy={region.y}
                      r="2"
                      fill="none"
                      stroke="#3B82F6"
                      strokeWidth="0.2"
                      animate={{ r: [2, 4, 2], opacity: [0.6, 0, 0.6] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    />
                  )}
                </g>
              ))}
            </svg>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {INTERNATIONAL_REGIONS.map((region) => (
                <span
                  key={region.name}
                  className={`rounded-full px-4 py-2 text-sm font-medium ${
                    "hub" in region && region.hub
                      ? "bg-accent text-white"
                      : "border border-white/10 bg-white/5 text-white/70"
                  }`}
                >
                  {region.name}
                </span>
              ))}
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
