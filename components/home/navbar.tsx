"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { name: "Destinations", href: "#destinations" },
  { name: "Services", href: "#services" },
  { name: "Packages", href: "/packages" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-xl shadow-sm border-b border-neutral-100"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-6 flg:px-8">
        <div className="flex h-20 lg:h-24 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 lg:h-11 lg:w-11 items-center justify-center rounded-xl bg-white">
              <Image
                alt="logo"
                height={400}
                width={400}
                className="w-full h-full object-cover"
                src="/assets/logo.png"
              />
            </div>
            <div className="flex flex-col">
              <span
                className={`text-xl lg:text-2xl font-bold tracking-tight transition-colors duration-300 ${isScrolled ? "text-neutral-900" : "text-white"}`}
              >
                MDP TOURS
              </span>
              <span
                className={`text-[10px] lg:text-xs font-medium tracking-widest uppercase transition-colors duration-300 ${isScrolled ? "text-neutral-500" : "text-white/70"}`}
              >
                Simplifying Travel
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`relative text-sm font-medium tracking-wide transition-colors hover:opacity-80 ${
                  isScrolled
                    ? "text-neutral-600 hover:text-neutral-900"
                    : "text-white/90 hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            {/* <Button className="bg-[#1a5f7a] text-white hover:bg-[#1a5f7a]/90 h-11 px-6 rounded-xl text-sm font-medium tracking-wide shadow-lg shadow-[#1a5f7a]/20">
              Book Now
            </Button> */}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2.5 rounded-xl transition-colors ${isScrolled ? "text-neutral-900 hover:bg-neutral-100" : "text-white hover:bg-white/10"}`}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-b border-neutral-100"
          >
            <div className="px-6 py-8 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-base font-medium text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50 transition-colors py-3 px-4 rounded-xl"
                >
                  {link.name}
                </Link>
              ))}
              {/* <div className="pt-4">
                <Button className="w-full bg-[#1a5f7a] text-white hover:bg-[#1a5f7a]/90 h-12 rounded-xl font-medium">
                  Book Now
                </Button>
              </div> */}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
