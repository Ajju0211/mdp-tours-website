"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { name: "Destinations", href: "/#destinations" },
  { name: "Packages", href: "/packages" },
  { name: "Services", href: "/#services" },
  { name: "Contact", href: "/#contact" },
];

export function InnerNavbar() {
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
      <nav className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Back + Logo */}
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className={`flex h-9 w-9 items-center justify-center rounded-lg transition-colors ${
                isScrolled
                  ? "text-neutral-600 hover:bg-neutral-100"
                  : "text-white/90 hover:bg-white/10"
              }`}
              aria-label="Go back to home"
            >
              <ArrowLeft className="h-5 w-5" />
            </Link>
            <Link href="/" className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white overflow-hidden">
                <Image
                  alt="MDP Tours logo"
                  height={400}
                  width={400}
                  className="w-full h-full object-cover"
                  src="/assets/logo.png"
                />
              </div>
              <span
                className={`text-lg font-bold tracking-tight transition-colors duration-300 hidden sm:inline ${isScrolled ? "text-neutral-900" : "text-white"}`}
              >
                MDP TOURS
              </span>
            </Link>
          </div>

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
            <div className="px-6 py-6 space-y-1">
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
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
