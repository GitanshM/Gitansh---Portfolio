"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { SITE } from "@/lib/constants";
import { Button } from "@/components/ui/button";

export function Hero() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-primary pt-16"
    >
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-secondary/30 via-primary to-primary" />
        <motion.div
          className="absolute -top-1/4 -right-1/4 h-[600px] w-[600px] rounded-full bg-accent/10 blur-3xl"
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-1/4 -left-1/4 h-[500px] w-[500px] rounded-full bg-secondary/20 blur-3xl"
          animate={{ scale: [1.1, 1, 1.1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative mx-auto flex min-h-[calc(100vh-4rem)] max-w-7xl flex-col items-center justify-center gap-12 px-4 py-20 sm:px-6 lg:flex-row lg:gap-16 lg:px-8">
        <div className="flex-1 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="mb-4 text-sm font-medium tracking-[0.2em] text-accent uppercase">
              Higher Education &amp; Global Engagement
            </p>
            <h1 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              {SITE.name}
            </h1>
          </motion.div>

          <motion.div
            className="mt-6 flex flex-wrap justify-center gap-2 lg:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            {SITE.roles.map((role) => (
              <span
                key={role}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/80 backdrop-blur-sm sm:text-sm"
              >
                {role}
              </span>
            ))}
          </motion.div>

          <motion.h2
            className="mt-8 font-display text-xl font-medium leading-snug text-white/90 sm:text-2xl lg:text-[1.75rem] lg:leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
          >
            {SITE.headline}
          </motion.h2>

          <motion.p
            className="mt-6 max-w-xl text-base leading-relaxed text-white/60 sm:text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
          >
            {SITE.heroDescription}
          </motion.p>

          <motion.div
            className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
          >
            <Button
              variant="accent"
              size="lg"
              onClick={() => scrollTo("contact")}
              className="group"
            >
              Contact Me
              <ArrowRight className="transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              variant="glass"
              size="lg"
              asChild
            >
             <a href="/Gitansh-Manaktala-Resume.pdf" download>
                <Download className="h-4 w-4" />
                Download Resume
              </a>
            </Button>
          </motion.div>
        </div>

        <motion.div
          className="relative flex-shrink-0"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative h-72 w-72 sm:h-80 sm:w-80 lg:h-96 lg:w-96">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/30 to-secondary/30 blur-2xl" />
            <div className="relative h-full w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-2xl backdrop-blur-sm">
              <Image
                src="/images/gitansh-hero.png"
                alt="Gitansh Manaktala"
                fill
                 className="object-cover"
                priority
                sizes="(max-width: 768px) 288px, 384px"
              />
            </div>
            <motion.div
              className="absolute -bottom-4 -right-4 rounded-xl border border-white/10 bg-white/10 px-5 py-3 backdrop-blur-md"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
            >
              <p className="text-xs text-white/50">Currently at</p>
              <p className="font-display text-sm font-semibold text-white">
                Education Growth Network
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="h-10 w-6 rounded-full border-2 border-white/20 p-1">
          <motion.div
            className="h-2 w-full rounded-full bg-accent"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
