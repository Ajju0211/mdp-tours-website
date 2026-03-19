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
import { Send, CheckCircle, Loader2, AlertCircle } from "lucide-react";
import { serviceName } from "@/data/home";
import { createQueryStatus } from "@/api/query";

type SubmitStatus = "idle" | "loading" | "success" | "error";

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

const initialFormData: FormData = {
  fullName: "",
  email: "",
  phone: "",
  service: "",
  message: "",
};

export function QueryForm() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error when user starts editing
    if (status === "error") {
      setStatus("idle");
      setErrorMessage("");
    }
  };

  const validate = (): string | null => {
    if (!formData.fullName.trim()) return "Full name is required";
    if (!formData.email.trim()) return "Email address is required";

    // Basic email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim()))
      return "Please enter a valid email address";

    // Phone validation (optional, but if provided must be reasonable)
    if (formData.phone.trim()) {
      const digitsOnly = formData.phone.replace(/[\s\-+()]/g, "");
      if (digitsOnly.length < 7 || digitsOnly.length > 15)
        return "Please enter a valid phone number";
    }

    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Client-side validation
    const validationError = validate();
    if (validationError) {
      setStatus("error");
      setErrorMessage(validationError);
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    const payload = {
      fullName: formData.fullName.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim() || undefined,
      service: formData.service || undefined,
      message: formData.message.trim() || undefined,
    };

    console.log("Submitting query:", payload);

    try {
      const res = await createQueryStatus(payload);
      console.log("Query submitted successfully:", res);
      setStatus("success");
      setFormData(initialFormData);

      // Reset back to form after 5 seconds
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error: any) {
      console.error("Query submission failed:", error);
      const message =
        error?.response?.data?.message ??
        error?.message ??
        "Something went wrong. Please try again.";
      setStatus("error");
      setErrorMessage(message);
    }
  };

  const isLoading = status === "loading";

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
              {status === "success" ? (
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
                      <Input
                        placeholder="Ajay Singh"
                        required
                        value={formData.fullName}
                        onChange={(e) =>
                          handleChange("fullName", e.target.value)
                        }
                        disabled={isLoading}
                      />
                    </Field>

                    <Field label="Email Address">
                      <Input
                        type="email"
                        placeholder="ajay@example.com"
                        required
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        disabled={isLoading}
                      />
                    </Field>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Phone Number">
                      <Input
                        type="tel"
                        placeholder="98XXXXXXXX"
                        value={formData.phone}
                        maxLength={10}
                        onChange={(e) => {
                          const value = e.target.value
                            .replace(/\D/g, "")
                            .slice(0, 10);
                          handleChange("phone", value);
                        }}
                        disabled={isLoading}
                      />
                    </Field>

                    <Field label="Service Interested In">
                      <Select
                        value={formData.service}
                        onValueChange={(val) => handleChange("service", val)}
                        disabled={isLoading}
                      >
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
                      value={formData.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      disabled={isLoading}
                    />
                  </Field>

                  {/* Error message */}
                  {status === "error" && errorMessage && (
                    <motion.div
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-2 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
                    >
                      <AlertCircle className="h-4 w-4 shrink-0" />
                      {errorMessage}
                    </motion.div>
                  )}

                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="mt-2 h-14 rounded-xl bg-[#1a5f7a] text-base font-medium text-white shadow-lg shadow-[#1a5f7a]/30 hover:bg-[#1a5f7a]/90 disabled:opacity-70"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Submitting…
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Submit Request
                      </>
                    )}
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
