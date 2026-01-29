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
      className="relative overflow-hidden bg-gradient-to-b from-white via-neutral-50 to-white py-24 sm:py-28 lg:py-36"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-24">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-xl"
          >
            <span className="mb-6 inline-block rounded-full bg-[#1a5f7a]/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-[#1a5f7a]">
              Custom Trip Planning
            </span>

            <h2 className="text-4xl font-bold leading-tight tracking-tight text-neutral-900 sm:text-5xl">
              Journeys crafted
              <br />
              around your lifestyle
            </h2>

            <p className="mt-6 max-w-lg text-lg leading-relaxed text-neutral-500">
              Tell us what you envision — our experts will design a seamless,
              personalized itinerary that reflects your pace, comfort, and
              interests.
            </p>

            <div className="mt-12 grid gap-5">
              {[
                "Tailor-made itineraries",
                "Local specialists & curated stays",
                "Private transfers & guided experiences",
                "Transparent pricing & premium support",
              ].map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -14 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex items-start gap-4"
                >
                  <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#1a5f7a]">
                    <CheckCircle className="h-4 w-4 text-white" />
                  </div>
                  <span className="leading-relaxed text-neutral-600">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* FORM */}
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.12 }}
          >
            <div className="relative rounded-3xl border border-neutral-200/60 bg-white/85 p-8 shadow-[0_30px_90px_-30px_rgba(0,0,0,0.18)] backdrop-blur-xl sm:p-10">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.35 }}
                  className="py-24 text-center"
                >
                  <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-[#1a5f7a] shadow-xl shadow-[#1a5f7a]/40">
                    <CheckCircle className="h-10 w-10 text-white" />
                  </div>

                  <h3 className="text-2xl font-semibold text-neutral-900">
                    Request submitted
                  </h3>
                  <p className="mt-2 text-neutral-500">
                    Our travel expert will reach out within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="grid gap-6 sm:gap-7">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Full Name">
                      <Input placeholder="Ajay Singh" required />
                    </Field>

                    <Field label="Email Address">
                      <Input
                        type="email"
                        placeholder="ajay@example.com"
                        required
                      />
                    </Field>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Phone Number">
                      <Input type="tel" placeholder="+91 98XXXXXXX" />
                    </Field>

                    <Field label="Service Interested In">
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select service" />
                        </SelectTrigger>
                        <SelectContent>
                          {serviceName.map((s) => (
                            <SelectItem key={s} value={s}>
                              {s}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </Field>
                  </div>

                  <Field label="Message">
                    <Textarea
                      placeholder="Tell us your travel preferences, budget, destination, and duration..."
                      className="min-h-[130px] resize-none"
                    />
                  </Field>

                  <Button
                    type="submit"
                    className="mt-2 h-14 rounded-xl bg-[#1a5f7a] text-base font-medium text-white shadow-lg shadow-[#1a5f7a]/30 hover:bg-[#1a5f7a]/90"
                  >
                    <Send className="mr-2 h-4 w-4" />
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

/* ---------- Field Wrapper ---------- */
function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="grid gap-2">
      <label className="text-sm font-medium text-neutral-700">{label}</label>
      {children}
    </div>
  );
}
