"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Logo } from "@/components/landing/Logo";

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
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
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
        background: scrolled ? "rgba(11, 47, 31, 0.94)" : "rgba(11, 47, 31, 0.85)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(242, 183, 5, 0.15)",
      }}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className={`flex items-center justify-between w-full gap-4 lg:gap-8 transition-all duration-300 ${scrolled ? "h-14 sm:h-16" : "h-16 sm:h-20"}`}>
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Logo size="small" />
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
                          ? "pb-0.5"
                          : "text-white/90 hover:text-[#F2B705] hover:underline underline-offset-4"
                      }`}
                      style={{
                        ...(servicosActive
                          ? { color: "#F2B705", borderBottom: "2px solid #F2B705" }
                          : {}),
                      }}
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
                            className="rounded-xl shadow-xl py-2 min-w-[220px]"
                            style={{
                              background: "rgba(11, 47, 31, 0.98)",
                              border: "1px solid rgba(242, 183, 5, 0.25)",
                            }}
                          >
                            <Link
                              href="/servicos"
                              className="block px-4 py-2 text-sm font-medium text-white/90 hover:bg-white/5 transition-colors hover:text-[#F2B705]"
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
                                  className={`block px-4 py-2 text-sm font-medium transition-colors hover:bg-white/5 hover:underline underline-offset-2 ${
                                    childActive ? "bg-white/5" : "text-white/80 hover:text-[#F2B705]"
                                  }`}
                                  style={childActive ? { color: "#F2B705" } : undefined}
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
                    active ? "pb-0.5" : "text-white/90 hover:text-[#F2B705] hover:underline underline-offset-4"
                  }`}
                  style={
                    active
                      ? { color: "#F2B705", borderBottom: "2px solid #F2B705" }
                      : undefined
                  }
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* CTA Button — mesma paleta do manifesto/serviços */}
          <div className="hidden md:block flex-shrink-0">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 h-11 px-5 rounded-lg font-semibold text-sm transition-all duration-200 hover:opacity-95 active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F2B705]"
              style={{
                fontFamily: "var(--font-body), sans-serif",
                backgroundColor: "#F2B705",
                color: "#0B2F1F",
              }}
            >
              <span className="text-base" aria-hidden>🌿</span>
              Plantar qualidade
            </a>
          </div>

          {/* Mobile Menu Button — área de toque mínima 44px */}
          <button
            type="button"
            className="md:hidden text-white min-w-[44px] min-h-[44px] flex items-center justify-center rounded-xl hover:bg-white/10 active:bg-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F2B705]"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isOpen}
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
              background: "rgba(11, 47, 31, 0.98)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              borderTopColor: "rgba(242, 183, 5, 0.2)",
            }}
          >
            <nav className="container mx-auto px-4 sm:px-6 py-5 pb-6 flex flex-col gap-1" aria-label="Menu principal">
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
                        className="font-body font-medium min-h-[44px] px-1 py-3 flex items-center justify-between text-left w-full rounded-lg transition-colors text-white/90 hover:text-[#F2B705] hover:bg-white/5 active:bg-white/10"
                        style={servicosActive ? { color: "#F2B705" } : undefined}
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
                            className="overflow-hidden flex flex-col pl-4 ml-1 border-l-2 space-y-0 mt-1 rounded-r-lg"
                            style={{ borderColor: "rgba(242, 183, 5, 0.3)" }}
                          >
                            <Link
                              href="/servicos"
                              className="text-sm font-medium min-h-[44px] flex items-center px-1 py-2 text-white/80 hover:text-[#F2B705] transition-colors rounded"
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
                                  className="text-sm font-medium min-h-[44px] flex items-center px-1 py-2 transition-colors text-white/80 hover:text-[#F2B705] rounded"
                                  style={childActive ? { color: "#F2B705" } : undefined}
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
                    className="font-body font-medium min-h-[44px] flex items-center px-1 py-3 rounded-lg transition-colors text-white/90 hover:text-[#F2B705] hover:bg-white/5 active:bg-white/10"
                    style={active ? { color: "#F2B705" } : undefined}
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
                className="inline-flex items-center justify-center gap-2 w-full min-h-[48px] py-3 px-5 rounded-xl font-semibold text-sm transition-all duration-200 hover:opacity-95 active:scale-[0.98] mt-2"
                style={{
                  fontFamily: "var(--font-body), sans-serif",
                  backgroundColor: "#F2B705",
                  color: "#0B2F1F",
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
