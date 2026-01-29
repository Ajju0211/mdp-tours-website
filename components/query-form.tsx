"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Send, CheckCircle } from "lucide-react";
import { serviceName } from "@/data/home";

export function QueryForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section
      id="contact"
      className="relative py-28 lg:py-36 px-6 lg:px-8 bg-gradient-to-b from-white via-neutral-50 to-white"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-xl"
          >
            <p className="text-xs font-semibold text-[#1a5f7a] uppercase tracking-[0.28em] mb-5">
              Custom Trip Planning
            </p>

            <h2 className="text-4xl sm:text-5xl font-bold text-neutral-900 tracking-tight leading-[1.1] mb-7">
              Crafted journeys,
              <br />
              designed for you
            </h2>

            <p className="text-lg text-neutral-500 leading-relaxed mb-12">
              Share your preferences and our travel specialists will design a
              refined, end-to-end itinerary tailored exclusively to your style,
              pace, and interests.
            </p>

            <div className="space-y-6">
              {[
                "Tailor-made itineraries, never templates",
                "Local experts and private experiences",
                "Flexible planning with concierge support",
                "Transparent pricing with best-value assurance",
              ].map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="flex items-start gap-4"
                >
                  <div className="mt-1 w-6 h-6 rounded-full bg-[#1a5f7a] flex items-center justify-center shrink-0">
                    <CheckCircle className="w-3.5 h-3.5 text-white" />
                  </div>
                  <span className="text-neutral-600 leading-relaxed">
                    {feature}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* FORM CARD */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          >
            <div className="relative rounded-3xl bg-white/90 backdrop-blur-xl shadow-[0_40px_120px_-40px_rgba(0,0,0,0.15)] border border-neutral-200/60 p-8 lg:p-10">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="text-center py-20"
                >
                  <div className="w-20 h-20 rounded-2xl bg-[#1a5f7a] flex items-center justify-center mx-auto mb-6 shadow-lg shadow-[#1a5f7a]/30">
                    <CheckCircle className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-neutral-900 mb-3">
                    Request received
                  </h3>
                  <p className="text-neutral-500">
                    Our team will reach out within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <Field label="Full Name">
                      <Input placeholder="John Smith" required />
                    </Field>

                    <Field label="Email Address">
                      <Input
                        type="email"
                        placeholder="john@example.com"
                        required
                      />
                    </Field>
                  </div>

                  <div className="grid sm:grid-cols-2 w-full gap-5">
                    <Field label="Phone Number">
                      <Input type="tel" placeholder="+91 98765 XXXXX" />
                    </Field>

                    <Field label="Service Interested In *">
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select Service" />
                        </SelectTrigger>
                        <SelectContent>
                          {serviceName.map((d) => (
                            <SelectItem key={d} value={d}>
                              {d}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </Field>
                  </div>

                  {/* <div className="grid sm:grid-cols-2 gap-5">
                    <Field label="Travel Dates">
                      <Input type="date" />
                    </Field>

                    <Field label="Travelers">
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Number of travelers" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">1 Traveler</SelectItem>
                          <SelectItem value="2">2 Travelers</SelectItem>
                          <SelectItem value="3-4">3–4 Travelers</SelectItem>
                          <SelectItem value="5+">5+ Travelers</SelectItem>
                        </SelectContent>
                      </Select>
                    </Field>
                  </div> */}

                  <Field label="Message">
                    <Textarea
                      placeholder="Tell us about your travel style, interests, and expectations…"
                      className="min-h-32 resize-none"
                    />
                  </Field>

                  <Button
                    type="submit"
                    className="w-full h-14 bg-[#1a5f7a] hover:bg-[#1a5f7a]/90 text-white rounded-xl shadow-lg shadow-[#1a5f7a]/25"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Submit Request
                  </Button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Small Helper ---------- */
function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium text-neutral-700">{label}</label>
      {children}
    </div>
  );
}
