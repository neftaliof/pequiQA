"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

function isActive(href: string, pathname: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(href + "/");
}

const WHATSAPP_URL = "https://wa.me/5548988526644";

const servicosChildren = [
  { href: "/servicos/implantacao-de-qualidade", label: "Implantação de Qualidade" },
  { href: "/servicos/alocacao-de-qas", label: "Alocação de QAs" },
  { href: "/servicos/consultoria-e-auditoria", label: "Consultoria & Auditoria" },
  { href: "/servicos/treinamento", label: "Treinamento" },
  { href: "/servicos/suporte-para-qa", label: "Suporte → QA" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicosOpen, setServicosOpen] = useState(false);
  const pathname = usePathname();
  const servicosActive = isActive("/servicos", pathname);

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (!isOpen) setServicosOpen(false);
  }, [isOpen]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { href: "/servicos", label: "Serviços", hasDropdown: true },
    { href: "/manifesto", label: "Manifesto" },
    { href: "/blog", label: "Blog" },
  ];

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(17, 29, 9, 0.92)" : "rgba(17, 29, 9, 0.72)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(200, 134, 10, 0.1)",
      }}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className={`flex items-center justify-between w-full gap-4 lg:gap-8 transition-all duration-300 ${scrolled ? "h-14 sm:h-16" : "h-16 sm:h-20"}`}>
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <span className="flex items-center justify-center h-6 w-6 sm:h-7 sm:w-7 flex-shrink-0" aria-hidden>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="-60 -70 120 140" className="h-full w-full">
                {/* Casca esquerda */}
                <path d="M -4 -38 C -18 -42 -34 -38 -42 -22 C -48 -8 -48 8 -42 22 C -36 34 -24 44 -12 50 C -6 53 -2 52 0 50 C -6 40 -14 24 -16 6 C -18 -12 -14 -28 -4 -38 Z" fill="#3D4A28" stroke="#2A3418" strokeWidth={1.5} />
                {/* Casca direita */}
                <path d="M 4 -38 C 18 -42 34 -38 42 -22 C 48 -8 48 8 42 22 C 36 34 24 44 12 50 C 6 53 2 52 0 50 C 6 40 14 24 16 6 C 18 -12 14 -28 4 -38 Z" fill="#3D4A28" stroke="#2A3418" strokeWidth={1.5} />
                {/* Polpa amarela */}
                <ellipse cx={0} cy={4} rx={14} ry={20} fill="#F0A500" />
                <ellipse cx={-2} cy={0} rx={8} ry={12} fill="#FFE88A" opacity={0.5} />
                {/* Sementinha */}
                <ellipse cx={0} cy={2} rx={5} ry={7.5} fill="#C8860A" opacity={0.7} />
                {/* Cabinho */}
                <path d="M 0 -38 C -1 -46 0 -54 2 -60" fill="none" stroke="#5A6B3A" strokeWidth={3} strokeLinecap="round" />
                <path d="M 1 -54 C 8 -60 16 -57 18 -50" fill="none" stroke="#6B7D44" strokeWidth={2.2} strokeLinecap="round" />
              </svg>
            </span>
            <div className="text-xl sm:text-2xl font-display font-bold text-white">
              Pequi <span className="text-accent">QA</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex flex-1 justify-center items-center space-x-6 lg:space-x-8" aria-label="Menu principal">
            {navLinks.map((link) => {
              if ("hasDropdown" in link && link.hasDropdown) {
                return (
                  <div
                    key={link.href}
                    className="relative group"
                    onMouseEnter={() => setServicosOpen(true)}
                    onMouseLeave={() => setServicosOpen(false)}
                  >
                    <Link
                      href={link.href}
                      aria-current={servicosActive ? "page" : undefined}
                      aria-haspopup="true"
                      aria-expanded={servicosOpen}
                      className={`font-body font-medium transition-colors flex items-center gap-0.5 ${
                        servicosActive
                          ? "text-accent border-b-2 border-accent pb-0.5"
                          : "text-white/90 hover:text-accent hover:underline underline-offset-4 decoration-accent/60"
                      }`}
                    >
                      {link.label}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${servicosOpen ? "rotate-180" : ""}`}
                      />
                    </Link>
                    <AnimatePresence>
                      {servicosOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -4 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -4 }}
                          transition={{ duration: 0.15 }}
                          className="absolute left-0 top-full pt-2 -ml-2"
                        >
                          <div
                            className="rounded-lg shadow-xl py-2 min-w-[220px]"
                            style={{
                              background: "rgba(17, 29, 9, 0.98)",
                              border: "1px solid rgba(200, 134, 10, 0.2)",
                            }}
                          >
                            <Link
                              href="/servicos"
                              className="block px-4 py-2 text-sm font-medium text-white/90 hover:text-accent hover:bg-white/5 hover:underline underline-offset-2 transition-colors"
                              onClick={() => setServicosOpen(false)}
                            >
                              Todos os serviços
                            </Link>
                            {servicosChildren.map((child) => {
                              const childActive = pathname === child.href;
                              return (
                                <Link
                                  key={child.href}
                                  href={child.href}
                                  aria-current={childActive ? "page" : undefined}
                                  className={`block px-4 py-2 text-sm font-medium transition-colors ${
                                    childActive ? "text-accent bg-white/5" : "text-white/80 hover:text-accent hover:bg-white/5 hover:underline underline-offset-2"
                                  }`}
                                  onClick={() => setServicosOpen(false)}
                                >
                                  {child.label}
                                </Link>
                              );
                            })}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }
              const active = isActive(link.href, pathname);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={`font-body font-medium transition-colors ${
                    active
                      ? "text-accent border-b-2 border-accent pb-0.5"
                      : "text-white/90 hover:text-accent hover:underline underline-offset-4 decoration-accent/60"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block flex-shrink-0">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 h-12 px-6 rounded-lg font-semibold text-base transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F0A500]"
              style={{
                fontFamily: "Syne, sans-serif",
                letterSpacing: "0.02em",
                background: "linear-gradient(135deg, #C8860A 0%, #F0A500 50%, #fdd96a 100%)",
                color: "#0e1a07",
                border: "1px solid rgba(251,245,230,0.3)",
                boxShadow:
                  "0 2px 12px rgba(0,0,0,0.3), 0 0 20px rgba(200,134,10,0.2), inset 0 1px 0 rgba(255,255,255,0.25)",
              }}
            >
              <span className="text-base" aria-hidden>🌿</span>
              Plantar qualidade
            </a>
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
            <nav className="container mx-auto px-4 sm:px-6 py-5 flex flex-col space-y-3" aria-label="Menu principal">
              {navLinks.map((link) => {
                if ("hasDropdown" in link && link.hasDropdown) {
                  return (
                    <div key={link.href} className="flex flex-col">
                      <button
                        type="button"
                        onClick={() => setServicosOpen((o) => !o)}
                        aria-expanded={servicosOpen}
                        aria-controls="servicos-submenu-mobile"
                        id="servicos-trigger-mobile"
                        className={`font-body font-medium py-2 flex items-center justify-between text-left transition-colors ${
                          servicosActive ? "text-accent" : "text-white/90 hover:text-accent hover:underline underline-offset-4"
                        }`}
                      >
                        {link.label}
                        <ChevronDown
                          className={`w-4 h-4 transition-transform ${servicosOpen ? "rotate-180" : ""}`}
                        />
                      </button>
                      <AnimatePresence>
                        {servicosOpen && (
                          <motion.div
                            id="servicos-submenu-mobile"
                            aria-labelledby="servicos-trigger-mobile"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden flex flex-col pl-4 border-l-2 border-accent/30 space-y-1 mt-1"
                          >
                            <Link
                              href="/servicos"
                              className="text-sm font-medium py-2 text-white/80 hover:text-accent transition-colors"
                              onClick={() => {
                                setIsOpen(false);
                                setServicosOpen(false);
                              }}
                            >
                              Todos os serviços
                            </Link>
                            {servicosChildren.map((child) => {
                              const childActive = pathname === child.href;
                              return (
                                <Link
                                  key={child.href}
                                  href={child.href}
                                  aria-current={childActive ? "page" : undefined}
                                  className={`text-sm font-medium py-2 transition-colors ${
                                    childActive ? "text-accent" : "text-white/80 hover:text-accent"
                                  }`}
                                  onClick={() => {
                                    setIsOpen(false);
                                    setServicosOpen(false);
                                  }}
                                >
                                  {child.label}
                                </Link>
                              );
                            })}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }
                const active = isActive(link.href, pathname);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className={`font-body font-medium py-2 transition-colors ${
                      active ? "text-accent" : "text-white/90 hover:text-accent hover:underline underline-offset-4"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="inline-flex items-center justify-center gap-2.5 w-full h-12 px-6 rounded-lg font-semibold text-base transition-all duration-200"
                style={{
                  fontFamily: "Syne, sans-serif",
                  letterSpacing: "0.02em",
                  background: "linear-gradient(135deg, #C8860A 0%, #F0A500 50%, #fdd96a 100%)",
                  color: "#0e1a07",
                  border: "1px solid rgba(251,245,230,0.3)",
                  boxShadow:
                    "0 2px 12px rgba(0,0,0,0.3), 0 0 20px rgba(200,134,10,0.2), inset 0 1px 0 rgba(255,255,255,0.25)",
                }}
              >
                <span className="text-base" aria-hidden>🌿</span>
                Plantar qualidade
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
