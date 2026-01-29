"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    id: 1,
    name: "Aarav Mehta",
    location: "Mumbai, Maharashtra",
    avatar:
      "https://images.unsplash.com/photo-1615109398623-88346a601842?q=80&w=1974&auto=format&fit=crop",
    rating: 5,
    text: "Our Leh–Ladakh trip was flawlessly organized. From hotels to local guides, everything was premium and smooth. One of the best travel experiences we've ever had.",
  },
  {
    id: 2,
    name: "Priya Sharma",
    location: "Jaipur, Rajasthan",
    avatar:
      "https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=1974&auto=format&fit=crop",
    rating: 5,
    text: "The Kerala backwaters tour was peaceful and luxurious. The planning, houseboat stay, and food were exceptional. Highly recommended for stress-free vacations.",
  },
  {
    id: 3,
    name: "Rohan Verma",
    location: "Delhi, NCR",
    avatar:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=2070&auto=format&fit=crop",
    rating: 5,
    text: "Manali and Spiti valley road trip was surreal. Perfect itinerary, great stays, and amazing support throughout the journey. Would definitely book again.",
  },
  {
    id: 4,
    name: "Neha Kapoor",
    location: "Bengaluru, Karnataka",
    avatar:
      "https://img.freepik.com/premium-photo/photo-young-indian-woman-her-mid-20s-college-student-holding-book-her-chest_878783-7283.jpg?w=2000",
    rating: 5,
    text: "Udaipur felt straight out of a royal dream. Stunning hotels, seamless transfers, and personalized service throughout the trip.",
  },
  {
    id: 5,
    name: "Kunal Shah",
    location: "Ahmedabad, Gujarat",
    avatar:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2070&auto=format&fit=crop",
    rating: 5,
    text: "The Andaman island tour was breathtaking. Crystal-clear waters, premium resorts, and perfect planning. Totally worth it.",
  },
  {
    id: 6,
    name: "Ananya Iyer",
    location: "Chennai, Tamil Nadu",
    avatar:
      "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=2070&auto=format&fit=crop",
    rating: 5,
    text: "Coorg and Wayanad trip was refreshing. Beautiful stays, peaceful nature, and smooth logistics throughout.",
  },
  {
    id: 7,
    name: "Siddharth Malhotra",
    location: "Chandigarh",
    avatar:
      "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?q=80&w=2070&auto=format&fit=crop",
    rating: 5,
    text: "Spiti valley expedition was the best adventure of my life. Perfect planning, skilled drivers, and stunning locations.",
  },
  {
    id: 8,
    name: "Pooja Kulkarni",
    location: "Pune, Maharashtra",
    avatar:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=2070&auto=format&fit=crop",
    rating: 5,
    text: "Rann of Kutch festival tour was culturally rich and extremely well organized. Loved every detail.",
  },
];

export function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background via-secondary/30 to-background py-16 sm:py-20 lg:py-28">
      <div className="mx-auto  px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <span className="mb-2 inline-block rounded-full bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
            Indian Travelers
          </span>
          <h2 className="text-balance font-serif text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            Real Experiences Across India
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-muted-foreground">
            Scroll horizontally to explore real travel stories from across
            India.
          </p>
        </motion.div>

        {/* Horizontal Scroll */}
        <div
          className={cn(
            "flex gap-6 overflow-x-auto scroll-smooth pb-6",
            "[-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
          )}
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="min-w-[85%] sm:min-w-[60%] lg:min-w-[420px]"
            >
              <Card className="h-full border border-border/50 bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/50 shadow-xl">
                <CardContent className="flex h-full flex-col p-6 sm:p-8">
                  <Quote className="mb-4 size-8 text-primary/30" />

                  <p className="mb-6 flex-1 text-base leading-relaxed text-foreground sm:text-lg">
                    &ldquo;{testimonial.text}&rdquo;
                  </p>

                  <div className="flex items-center gap-4">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="size-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-semibold text-foreground">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.location}
                      </p>
                      <div className="mt-1 flex gap-0.5">
                        {Array.from({ length: testimonial.rating }).map(
                          (_, i) => (
                            <Star
                              key={i}
                              className="size-4 fill-primary text-primary"
                            />
                          ),
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
