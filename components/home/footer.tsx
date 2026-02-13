"use client";

import { motion } from "framer-motion";
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const footerLinks = {
  quickLinks: [
    { name: "Home", href: "#" },
    { name: "Destinations", href: "#destinations" },
    { name: "Services", href: "#services" },
    // { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ],
  support: [
    { name: "FAQ", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Privacy Policy", href: "#" },
    { name: "Cancellation Policy", href: "#" },
  ],
};

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

export function Footer() {
  return (
    <footer className="bg-neutral-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white">
                {/* Logo  */}
                <Image
                  alt="logo"
                  height={400}
                  width={400}
                  className="w-full h-full object-cover"
                  src="/assets/logo.png"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight">
                  MDP Tours
                </span>
                <span className="text-[10px] font-medium tracking-widest uppercase text-white/50">
                  Global Adventures
                </span>
              </div>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Your trusted travel partner for unforgettable journeys worldwide.
              We specialize in premium travel experiences with seamless planning
              and exceptional customer service.
            </p>
            <div className="flex gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white/50 hover:bg-[#1a5f7a] hover:text-white transition-all duration-300"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="font-semibold text-white text-sm mb-6 tracking-wide">
              Quick Links
            </h4>
            <ul className="space-y-4">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/50 hover:text-[#57b8d7] transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Support */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-semibold text-white text-sm mb-6 tracking-wide">
              Support
            </h4>
            <ul className="space-y-4">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/50 hover:text-[#57b8d7] transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="font-semibold text-white text-sm mb-6 tracking-wide">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="h-4 w-4 text-[#57b8d7] mt-0.5 shrink-0" />
                <span className="text-white/60 text-sm">+91 87797 21547</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-4 w-4 text-[#57b8d7] mt-0.5 shrink-0" />
                <span className="text-white/60 text-sm">info@mdptours.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-[#57b8d7] mt-0.5 shrink-0" />
                <span className="text-white/60 text-sm">Mumbai, India</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-white/40 text-sm">
              © {new Date().getFullYear()} MDP Tours. All rights reserved.
            </p>
            <div className="flex items-center gap-3">
              {["Visa", "Mastercard", "Amex", "PayPal"].map((card) => (
                <div
                  key={card}
                  className="px-3 py-1.5 bg-white/5 rounded-lg text-xs font-medium text-white/50"
                >
                  {card}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
