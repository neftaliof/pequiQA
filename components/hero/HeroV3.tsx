"use client";

import dynamic from "next/dynamic";
import Link from "next/link";

const PequiCanvas = dynamic(() => import("./PequiCanvas"), { ssr: false });

const cream = "var(--hero-cream)";
const gold = "var(--hero-gold)";

const c = (opacity: number) => `rgba(${cream}, ${opacity})`;
const g = (opacity: number) => `rgba(${gold}, ${opacity})`;

export default function HeroV3() {
  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #0f0d08 0%, #0c0a06 25%, #080706 55%, var(--hero-dark) 100%)",
      }}
    >
      {/* Canvas — pé de pequi centralizado */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{ zIndex: 1 }}
        aria-hidden
      >
        <PequiCanvas intensity={0.9} />
      </div>

      {/* Vinheta cinematográfica */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          zIndex: 10,
          background: `
            radial-gradient(ellipse 60% 40% at 50% 48%, rgba(12,10,6,0.6), transparent 65%),
            linear-gradient(to bottom,
              transparent 0%,
              transparent 15%,
              rgba(12,10,6,0.3) 30%,
              rgba(12,10,6,0.55) 45%,
              rgba(12,10,6,0.35) 65%,
              rgba(12,10,6,0.7) 80%,
              rgba(12,10,6,0.95) 100%
            )
          `,
        }}
      />

      {/* Glow atrás do título */}
      <div
        className="absolute pointer-events-none hero-stagger-1"
        style={{
          zIndex: 11,
          width: "min(600px, 80vw)",
          height: "min(400px, 50vh)",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -55%)",
          background: `radial-gradient(ellipse at center, ${g(0.06)} 0%, transparent 70%)`,
          filter: "blur(40px)",
        }}
        aria-hidden
      />

      {/* Conteúdo central */}
      <div className="relative z-20 flex flex-col items-center justify-center w-full flex-1 px-6 pt-20">
        {/* Eyebrow */}
        <p
          className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-center font-body mb-4 hero-stagger-1"
          style={{ color: c(0.55) }}
        >
          Engenharia de Qualidade · Goiânia, GO
        </p>

        {/* Título */}
        <h1
          className="font-display font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-center hero-stagger-2"
          style={{
            color: c(1),
            textShadow: `0 0 80px ${g(0.12)}, 0 2px 4px rgba(0,0,0,0.3)`,
            lineHeight: 1.05,
            letterSpacing: "-0.03em",
          }}
        >
          Não encontramos bugs.
          <br className="hidden sm:block" />
          Nós evitamos que eles existam.
        </h1>

        {/* Slogan abaixo do título */}
        <p
          className="text-xs sm:text-sm uppercase tracking-[0.3em] text-center font-body mt-4 hero-stagger-3"
          style={{ color: c(0.6) }}
        >
          Pequi QA — by Jenafree Labs
        </p>

        {/* Divisor */}
        <div
          className="w-16 h-px my-6 sm:my-8 hero-stagger-3"
          style={{
            background: `linear-gradient(90deg, transparent, ${g(0.35)}, transparent)`,
          }}
        />

        {/* Subtítulo principal */}
        <p
          className="text-base sm:text-lg leading-relaxed font-body max-w-lg text-center hero-stagger-4"
          style={{
            color: c(0.75),
            letterSpacing: "0.01em",
          }}
        >
          Processo, automação e estratégia de qualidade
          <br className="hidden sm:block" />
          para produtos digitais — direto com quem faz, sem intermediário.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center mt-8 sm:mt-10 hero-stagger-5">
          <a
            href="https://wa.me/5548988526644?text=Ol%C3%A1!%20Vi%20o%20site%20da%20Pequi%20QA%20e%20quero%20conversar."
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2.5 font-semibold text-sm px-8 py-4 rounded-xl transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl font-body tracking-wide"
            style={{
              background: "linear-gradient(135deg, #C8860A, #F0A500, #FDD96A)",
              color: "var(--hero-dark-green)",
              boxShadow: `0 4px 24px rgba(240,165,0,0.25), 0 1px 0 rgba(255,255,255,0.15) inset`,
            }}
          >
            Agendar diagnóstico gratuito
            <span className="transition-transform duration-300 group-hover:translate-x-0.5">🌿</span>
          </a>
          <Link
            href="/manifesto"
            className="group text-sm font-medium rounded-xl px-6 py-4 transition-all duration-300 hover:bg-white/[0.04] font-body"
            style={{
              color: c(0.55),
              border: `1px solid ${g(0.15)}`,
              backdropFilter: "blur(8px)",
            }}
          >
            Ler o manifesto →
            <span className="inline-block ml-1.5 transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </div>

        {/* Honesty pill */}
        <div
          className="inline-flex items-center gap-2.5 rounded-full px-5 py-2.5 text-[11px] font-body mt-8 hero-stagger-6"
          style={{
            border: `1px solid ${g(0.08)}`,
            color: c(0.5),
            background: "rgba(14,26,7,0.35)",
            backdropFilter: "blur(16px)",
            boxShadow: "0 2px 16px rgba(0,0,0,0.2)",
          }}
        >
          <span
            className="w-2 h-2 rounded-full flex-shrink-0"
            style={{
              backgroundColor: "var(--hero-green)",
              boxShadow: "0 0 6px rgba(74,124,40,0.6)",
              animation: "hero-dot-pulse 2.5s ease-in-out infinite",
            }}
            aria-hidden
          />
          <span className="tracking-wide">
            <strong className="font-semibold" style={{ color: c(0.7) }}>
              Goiás
            </strong>
            <span style={{ color: g(0.2) }}>{" · "}</span>
            15 anos de mercado
            <span style={{ color: g(0.2) }}>{" · "}</span>
            Oferta especial para primeiros clientes
          </span>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 hero-stagger-7"
        style={{ zIndex: 20 }}
      >
        <div
          className="w-5 h-8 rounded-full flex items-start justify-center pt-1.5"
          style={{
            border: `1.5px solid ${g(0.15)}`,
          }}
        >
          <div
            className="w-1 h-2 rounded-full"
            style={{
              background: g(0.4),
              animation: "scroll-hint 2s ease-in-out infinite",
            }}
          />
        </div>
      </div>
    </section>
  );
}
