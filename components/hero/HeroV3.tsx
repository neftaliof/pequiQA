"use client";

import dynamic from "next/dynamic";
import Link from "next/link";

const PequiCanvas = dynamic(() => import("./PequiCanvas"), { ssr: false });

export default function HeroV3() {
  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #0f0d08 0%, #0c0a06 25%, #080706 55%, #050504 100%)",
      }}
    >
      {/* Canvas — área compacta, texto mais perto */}
      <div
        className="absolute top-0 left-0 right-0 w-full h-[45vh] min-h-[280px] sm:h-[50vh] sm:min-h-[340px]"
        style={{ zIndex: 1 }}
        aria-hidden
      >
        <PequiCanvas intensity={0.9} />
      </div>

      {/* Logo Pequi QA + slogan — sobre o canvas */}
      <div
        className="absolute top-0 left-0 right-0 flex flex-col items-center justify-center gap-2 pointer-events-none h-[45vh] min-h-[280px] sm:h-[50vh] sm:min-h-[340px]"
        style={{ zIndex: 12 }}
      >
        <h1
          className="font-display font-bold text-4xl sm:text-5xl md:text-6xl text-center"
          style={{
            color: "#FBF5E6",
            textShadow: "0 0 40px rgba(200,134,10,0.15)",
          }}
        >
          Pequi <span className="text-accent">QA</span>
        </h1>
        <p
          className="text-sm sm:text-base uppercase tracking-[0.25em] text-center"
          style={{
            fontFamily: "Syne, sans-serif",
            color: "rgba(251,245,230,0.72)",
          }}
        >
          Qualidade que nasce do processo
        </p>
      </div>

      {/* Vinheta — escurece embaixo para o texto respirar */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          zIndex: 10,
          background: `
            radial-gradient(ellipse 65% 55% at 50% 42%, rgba(14,26,7,0.45), transparent),
            linear-gradient(to bottom,
              rgba(14,26,7,0.35) 0%,
              transparent 25%,
              transparent 55%,
              rgba(14,26,7,0.75) 72%,
              rgba(14,26,7,0.97) 100%
            )
          `,
        }}
      />

      {/* Corpo do hero */}
      <div className="relative z-20 flex flex-col items-center w-full flex-1">
        {/* Zona do canvas */}
        <div className="h-[45vh] min-h-[280px] sm:h-[50vh] sm:min-h-[340px] w-full flex-shrink-0" />

        {/* Divisor dourado */}
        <div
          className="w-12 h-px mb-4 flex-shrink-0"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(200,134,10,0.3), transparent)",
          }}
        />

        {/* Conteúdo textual — mais próximo do canvas */}
        <div className="flex flex-col items-center text-center gap-4 max-w-2xl px-6 pb-24 sm:pb-12 w-full">
          {/* Quality as a Service + CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5 flex-wrap">
            <p
              className="text-sm leading-relaxed"
              style={{
                color: "rgba(251,245,230,0.78)",
                fontFamily: "Syne, sans-serif",
              }}
            >
              Quality as a Service — Prevenção de bugs antes da produção.
            </p>
            <div className="flex gap-3 items-center flex-shrink-0">
            <a
              href="https://wa.me/5548988526644?text=Ol%C3%A1!%20Quero%20prevenir%20bugs%20em%20produ%C3%A7%C3%A3o.%20Como%20a%20Pequi%20QA%20pode%20ajudar%3F"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-bold text-sm px-7 py-3.5 rounded-lg transition-all hover:-translate-y-0.5 hover:opacity-90"
              style={{
                fontFamily: "Syne, sans-serif",
                background: "linear-gradient(135deg, #C8860A, #F0A500)",
                color: "#0e1a07",
                letterSpacing: "0.03em",
              }}
            >
              Agendar diagnóstico gratuito 🌿
            </a>
            <Link
              href="/manifesto"
              className="text-sm font-medium border rounded-lg px-5 py-3.5 transition-all hover:text-white/80 hover:border-[rgba(200,134,10,0.35)]"
              style={{
                fontFamily: "Syne, sans-serif",
                color: "rgba(251,245,230,0.6)",
                borderColor: "rgba(200,134,10,0.2)",
              }}
            >
              Ler o manifesto →
            </Link>
          </div>
          </div>

          {/* Honesty pill */}
          <div
            className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs"
            style={{
              border: "1px solid rgba(200,134,10,0.08)",
              color: "rgba(251,245,230,0.5)",
              fontFamily: "Syne, sans-serif",
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full bg-[#4A7C28] flex-shrink-0 hero-dot-pulse"
              aria-hidden
            />
            <span>
              <strong className="font-semibold" style={{ color: "rgba(251,245,230,0.65)" }}>
                Goiás
              </strong>
              {" · "}15 anos de experiência · Condições exclusivas para primeiros clientes
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}
