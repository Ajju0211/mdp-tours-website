"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { format } from "date-fns";
import { CalendarIcon, MapPin, Search, Users } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
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
  const [date, setDate] = React.useState<Date>();
  const [budget, setBudget] = React.useState([1000, 5000]);

  return (
    <section className="relative z-10  px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="mx-auto max-w-5xl"
      >
        <div className="rounded-2xl border border-border bg-card p-6 shadow-xl shadow-black/5">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {/* Destination */}
            <div className="lg:col-span-1">
              <label className="mb-2 block text-sm font-medium text-foreground">
                Destination
              </label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                <Input placeholder="Where to?" className="pl-10" />
              </div>
            </div>

            {/* Date Picker */}
            <div className="lg:col-span-1">
              <label className="mb-2 block text-sm font-medium text-foreground">
                Travel Date
              </label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !date && "text-muted-foreground",
                    )}
                  >
                    <CalendarIcon className="mr-2 size-4" />
                    {date ? format(date, "PPP") : "Select date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar mode="single" selected={date} onSelect={setDate} />
                </PopoverContent>
              </Popover>
            </div>

            {/* Budget Range */}
            <div className="lg:col-span-1">
              <label className="mb-2 block text-sm font-medium text-foreground">
                Budget Range
              </label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-full justify-start text-left font-normal bg-transparent"
                  >
                    ${budget[0]} - ${budget[1]}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-64" align="start">
                  <div className="space-y-4">
                    <p className="text-sm font-medium">
                      Budget: ${budget[0]} - ${budget[1]}
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
            <div className="lg:col-span-1">
              <label className="mb-2 block text-sm font-medium text-foreground">
                Travelers
              </label>
              <Select defaultValue="2">
                <SelectTrigger className="w-full">
                  <Users className="mr-2 size-4 text-muted-foreground" />
                  <SelectValue placeholder="Travelers" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1 Traveler</SelectItem>
                  <SelectItem value="2">2 Travelers</SelectItem>
                  <SelectItem value="3">3 Travelers</SelectItem>
                  <SelectItem value="4">4 Travelers</SelectItem>
                  <SelectItem value="5">5+ Travelers</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Search Button */}
            <div className="flex items-end lg:col-span-1">
              <Button className="w-full gap-2" size="lg">
                <Search className="size-4" />
                Search
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
