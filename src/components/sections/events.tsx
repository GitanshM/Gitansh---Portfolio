"use client";

import { MapPin, Users, Mic, Handshake } from "lucide-react";
import { motion } from "framer-motion";
import { EVENTS } from "@/lib/constants";
import { SectionHeader } from "@/components/animations/section-header";
import {
  StaggerContainer,
  StaggerItem,
} from "@/components/animations/fade-up";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export function Events() {
  return (
    <section id="events" className="section-padding bg-white dark:bg-primary/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Events Managed"
          title="Flagship Conferences & Summits"
          description="Orchestrating premier education events across India's leading cities and beyond."
        />

        <StaggerContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {EVENTS.map((event) => (
            <StaggerItem key={event.title}>
              <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.3 }}>
                <Card
                  className={cn(
                    "group h-full overflow-hidden transition-all duration-300 hover:shadow-xl",
                    event.featured &&
                      "border-accent/30 bg-gradient-to-br from-secondary/5 to-accent/5 dark:from-secondary/10 dark:to-accent/10"
                  )}
                >
                  {event.featured && (
                    <div className="bg-gradient-to-r from-secondary to-accent px-4 py-1.5 text-center text-xs font-semibold tracking-wider text-white uppercase">
                      Flagship Event
                    </div>
                  )}
                  <CardContent className="p-6">
                    <div className="mb-3 flex items-center gap-2 text-sm text-primary/50 dark:text-white/50">
                      <MapPin className="h-4 w-4 text-accent" />
                      {event.location}
                    </div>
                    <h3 className="font-display text-lg font-semibold text-primary group-hover:text-accent transition-colors dark:text-white">
                      {event.title}
                    </h3>
                    <p className="mt-1 text-sm text-accent">{event.type}</p>

                    <div className="mt-6 grid grid-cols-3 gap-3 border-t border-primary/5 pt-4 dark:border-white/10">
                      <div className="text-center">
                        <Users className="mx-auto h-4 w-4 text-secondary dark:text-accent" />
                        <p className="mt-1 text-lg font-semibold text-primary dark:text-white">
                          {event.stats.attendees}
                        </p>
                        <p className="text-[10px] uppercase tracking-wider text-primary/40 dark:text-white/40">
                          Attendees
                        </p>
                      </div>
                      <div className="text-center">
                        <Mic className="mx-auto h-4 w-4 text-secondary dark:text-accent" />
                        <p className="mt-1 text-lg font-semibold text-primary dark:text-white">
                          {event.stats.speakers}
                        </p>
                        <p className="text-[10px] uppercase tracking-wider text-primary/40 dark:text-white/40">
                          Speakers
                        </p>
                      </div>
                      <div className="text-center">
                        <Handshake className="mx-auto h-4 w-4 text-secondary dark:text-accent" />
                        <p className="mt-1 text-lg font-semibold text-primary dark:text-white">
                          {event.stats.partners}
                        </p>
                        <p className="text-[10px] uppercase tracking-wider text-primary/40 dark:text-white/40">
                          Partners
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
