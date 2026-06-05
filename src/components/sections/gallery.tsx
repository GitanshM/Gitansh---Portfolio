"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";
import { GALLERY_ITEMS } from "@/lib/constants";
import { SectionHeader } from "@/components/animations/section-header";
import { FadeUp } from "@/components/animations/fade-up";
import { cn } from "@/lib/utils";

export function Gallery() {
  const [selected, setSelected] = useState<
    (typeof GALLERY_ITEMS)[number] | null
  >(null);

  return (
    <section id="gallery" className="section-padding bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Gallery"
          title="Moments & Milestones"
          description="Capturing the essence of leadership gatherings, international engagements, and premier education events."
        />

        <FadeUp>
          <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
            {GALLERY_ITEMS.map((item, i) => (
              <motion.button
                key={item.id}
                className={cn(
                  "group relative mb-4 block w-full break-inside-avoid overflow-hidden rounded-xl border border-primary/5 bg-white shadow-sm dark:border-white/10 dark:bg-primary/30",
                  item.aspect === "tall" && "aspect-[3/4]",
                  item.aspect === "wide" && "aspect-[4/3]",
                  item.aspect === "square" && "aspect-square"
                )}
                onClick={() => setSelected(item)}
                whileHover={{ scale: 1.02 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <Image
                  src={`/images/gallery-${item.id}.svg`}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 transition-opacity group-hover:opacity-100">
                  <p className="text-left text-sm font-semibold text-white">
                    {item.title}
                  </p>
                  <p className="text-left text-xs text-white/60">
                    {item.category}
                  </p>
                </div>
                <div className="absolute top-3 right-3 rounded-full bg-white/20 p-2 opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100">
                  <ZoomIn className="h-4 w-4 text-white" />
                </div>
              </motion.button>
            ))}
          </div>
        </FadeUp>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-[70] flex items-center justify-center bg-primary/90 p-4 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="relative max-h-[85vh] w-full max-w-3xl overflow-hidden rounded-2xl"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 z-10 rounded-full bg-white/10 p-2 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
                aria-label="Close lightbox"
              >
                <X className="h-5 w-5" />
              </button>
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={`/images/gallery-${selected.id}.svg`}
                  alt={selected.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="bg-white p-6 dark:bg-primary">
                <h3 className="font-display text-xl font-semibold text-primary dark:text-white">
                  {selected.title}
                </h3>
                <p className="mt-1 text-sm text-primary/60 dark:text-white/60">
                  {selected.category}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
