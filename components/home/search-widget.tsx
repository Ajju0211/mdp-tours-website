"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { MapPin, Search, Users } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";

export function SearchWidget() {
  const router = useRouter();
  const [destination, setDestination] = React.useState("");
  const [budget, setBudget] = React.useState([1000, 100000]);
  const [travelers, setTravelers] = React.useState([1, 50]);

  const handleSearch = () => {
    const params = new URLSearchParams();

    if (destination.trim()) {
      params.set("q", destination.trim());
    }

    params.set("minPrice", String(budget[0]));
    params.set("maxPrice", String(budget[1]));

    if (travelers[0] > 1) params.set("minGroupSize", String(travelers[0]));
    if (travelers[1] < 50) params.set("maxGroupSize", String(travelers[1]));

    router.push(`/packages?${params.toString()}`);
  };

  return (
    <section className="relative z-10 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="mx-auto max-w-4xl"
      >
        <div className="rounded-2xl border border-border bg-card p-6 shadow-xl shadow-black/5">
          {/* Row 1: Inputs */}
          <div className="grid gap-4 sm:grid-cols-3 mb-4">
            {/* Destination */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Destination
              </label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Where to?"
                  className="h-11 pl-10"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") handleSearch();
                  }}
                />
              </div>
            </div>

            {/* Budget Range */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Budget Range
              </label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className="h-11 w-full justify-start text-left font-normal bg-transparent"
                  >
                    &#8377;{budget[0].toLocaleString("en-IN")} – &#8377;
                    {budget[1].toLocaleString("en-IN")}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-64" align="start">
                  <div className="space-y-4">
                    <p className="text-sm font-medium">
                      Budget: ₹{budget[0].toLocaleString("en-IN")} – ₹
                      {budget[1].toLocaleString("en-IN")}
                    </p>
                    <Slider
                      value={budget}
                      onValueChange={setBudget}
                      min={100}
                      max={10000}
                      step={100}
                    />
                  </div>
                </PopoverContent>
              </Popover>
            </div>

            {/* Travelers */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Travelers
              </label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className="h-11 w-full justify-start text-left font-normal bg-transparent"
                  >
                    <Users className="mr-3 size-4 text-muted-foreground" />
                    {travelers[0]} – {travelers[1]} people
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-64" align="start">
                  <div className="space-y-4">
                    <p className="text-sm font-medium">
                      Group Size Range
                    </p>
                    <Slider
                      value={travelers}
                      onValueChange={setTravelers}
                      min={1}
                      max={50}
                      step={1}
                    />
                    <p className="text-xs text-muted-foreground">
                      {travelers[0]} – {travelers[1]} people
                    </p>
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          </div>

          {/* Row 2: Search Button — full width */}
          <Button
            className="w-full gap-2 h-11"
            size="lg"
            onClick={handleSearch}
          >
            <Search className="size-4" />
            Search Packages
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
