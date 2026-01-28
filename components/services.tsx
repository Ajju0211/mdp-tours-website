"use client";

import { homeServicesData } from "@/data/home";
import { motion } from "framer-motion";

export function Services() {
  return (
    <section
      id="services"
      className="py-24 lg:py-32 px-6 lg:px-8 bg-neutral-50"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-20"
        >
          <p className="text-sm font-semibold text-[#1a5f7a] uppercase tracking-[0.2em] mb-4">
            Why Choose Us
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 mb-6 tracking-tight">
            The MDP Tours Advantage
          </h2>
          <p className="text-lg text-neutral-500 max-w-2xl mx-auto leading-relaxed">
            Experience travel like never before with our comprehensive suite of
            premium services.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {homeServicesData.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="group relative bg-white rounded-2xl p-7 shadow-sm hover:shadow-xl transition-all duration-500 h-full border border-neutral-100"
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-[#1a5f7a]/10 flex items-center justify-center mb-6 group-hover:bg-[#1a5f7a] transition-all duration-500">
                  <service.icon className="h-6 w-6 text-[#1a5f7a] group-hover:text-white transition-colors duration-500" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-neutral-900 mb-3 tracking-tight">
                  {service.title}
                </h3>
                <p className="text-neutral-500 text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
