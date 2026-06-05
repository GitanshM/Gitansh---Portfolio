"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Send, CheckCircle, AlertCircle } from "lucide-react";
import { LinkedInIcon } from "@/components/icons/linkedin-icon";
import { SITE } from "@/lib/constants";
import { SectionHeader } from "@/components/animations/section-header";
import { FadeUp } from "@/components/animations/fade-up";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";

type FormStatus = "idle" | "loading" | "success" | "error";

export function Contact() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    organization: "",
    message: "",
    website: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to send message");
      }

      setStatus("success");
      setForm({ name: "", email: "", organization: "", message: "", website: "" });
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Something went wrong"
      );
    }
  };

  return (
    <section id="contact" className="section-padding bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Get In Touch"
          title="Let's Build Something Together"
          description="Whether you're exploring a partnership, planning a conference, or seeking collaboration — I'd love to connect."
        />

        <div className="grid gap-12 lg:grid-cols-5">
          <FadeUp className="lg:col-span-2">
            <div className="space-y-6">
              <Card className="border-primary/5 dark:border-white/10">
                <CardContent className="flex items-center gap-4 p-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-primary/50 dark:text-white/50">Phone</p>
                    <a
                      href={SITE.phoneHref}
                      className="font-medium text-primary transition-colors hover:text-accent dark:text-white"
                    >
                      {SITE.phone}
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-primary/5 dark:border-white/10">
                <CardContent className="flex items-center gap-4 p-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-primary/50 dark:text-white/50">Email</p>
                    <a
                      href={`mailto:${SITE.email}`}
                      className="font-medium text-primary transition-colors hover:text-accent dark:text-white"
                    >
                      {SITE.email}
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-primary/5 dark:border-white/10">
                <CardContent className="flex items-center gap-4 p-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <LinkedInIcon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-primary/50 dark:text-white/50">LinkedIn</p>
                    <a
                      href={SITE.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-primary transition-colors hover:text-accent dark:text-white"
                    >
                      gitanshmanaktala
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </FadeUp>

          <FadeUp delay={0.15} className="lg:col-span-3">
            <Card className="border-primary/5 dark:border-white/10">
              <CardContent className="p-6 md:p-8">
                {status === "success" ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center py-12 text-center"
                  >
                    <CheckCircle className="mb-4 h-16 w-16 text-green-500" />
                    <h3 className="font-display text-xl font-semibold text-primary dark:text-white">
                      Message Sent Successfully
                    </h3>
                    <p className="mt-2 text-primary/60 dark:text-white/60">
                      Thank you for reaching out. I&apos;ll get back to you shortly.
                    </p>
                    <Button
                      variant="outline"
                      className="mt-6"
                      onClick={() => setStatus("idle")}
                    >
                      Send Another Message
                    </Button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name *</Label>
                        <Input
                          id="name"
                          required
                          value={form.name}
                          onChange={(e) =>
                            setForm({ ...form, name: e.target.value })
                          }
                          placeholder="Your full name"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          required
                          value={form.email}
                          onChange={(e) =>
                            setForm({ ...form, email: e.target.value })
                          }
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="organization">Organization</Label>
                      <Input
                        id="organization"
                        value={form.organization}
                        onChange={(e) =>
                          setForm({ ...form, organization: e.target.value })
                        }
                        placeholder="Your organization"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        required
                        value={form.message}
                        onChange={(e) =>
                          setForm({ ...form, message: e.target.value })
                        }
                        placeholder="How can I help you?"
                        rows={5}
                      />
                    </div>

                    {/* Honeypot spam protection */}
                    <input
                      type="text"
                      name="website"
                      value={form.website}
                      onChange={(e) =>
                        setForm({ ...form, website: e.target.value })
                      }
                      className="hidden"
                      tabIndex={-1}
                      autoComplete="off"
                      aria-hidden="true"
                    />

                    {status === "error" && (
                      <div className="flex items-center gap-2 rounded-lg bg-red-50 p-3 text-sm text-red-600 dark:bg-red-900/20 dark:text-red-400">
                        <AlertCircle className="h-4 w-4 shrink-0" />
                        {errorMessage}
                      </div>
                    )}

                    <Button
                      type="submit"
                      variant="accent"
                      size="lg"
                      disabled={status === "loading"}
                      className="w-full sm:w-auto"
                    >
                      {status === "loading" ? (
                        <motion.div
                          className="h-5 w-5 rounded-full border-2 border-white/30 border-t-white"
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                        />
                      ) : (
                        <>
                          <Send className="h-4 w-4" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
