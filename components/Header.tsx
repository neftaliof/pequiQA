"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/sobre", label: "Sobre" },
    { href: "/manifesto", label: "Manifesto" },
    { href: "/servicos", label: "Serviços" },
    { href: "/cases", label: "Cases" },
    { href: "/blog", label: "Blog" },
  ];

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: "rgba(17, 29, 9, 0.72)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(200, 134, 10, 0.1)",
      }}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="text-accent flex items-center justify-center">
                <Image
                  src="/pequi-mark.svg"
                  alt=""
                  width={26}
                  height={26}
                  className="hidden sm:block"
                />
              </span>
              <div className="text-xl sm:text-2xl font-display font-bold text-white">
                Pequi <span className="text-accent">QA</span>
              </div>
            </div>
            <div
              style={{
                fontFamily: "Syne, sans-serif",
                fontSize: "0.56rem",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "rgba(251,245,230,0.28)",
                marginTop: "2px",
              }}
            >
              by Jenafree Labs
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white/90 hover:text-accent transition-colors font-body font-medium"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button variant="accent" size="lg" asChild>
              <Link href="/contato">Fale Conosco</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-white/10"
            style={{
              background: "rgba(17, 29, 9, 0.95)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
            }}
          >
            <nav className="container mx-auto px-4 sm:px-6 py-5 flex flex-col space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-white/90 hover:text-accent transition-colors font-body font-medium py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Button variant="accent" size="lg" asChild className="w-full">
                <Link href="/contato" onClick={() => setIsOpen(false)}>
                  Fale Conosco
                </Link>
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
