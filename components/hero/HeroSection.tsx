"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import PioneiroBotao from "./PioneiroBotao";

const PequiCanvas = dynamic(() => import("./PequiCanvas"), { ssr: false });

const implantacaoItems = [
  "Diagnóstico do processo atual",
  "Estratégia de testes sob medida",
  "Time interno treinado e autônomo",
  "Qualidade que permanece depois que saímos",
];

const miniCards = [
  {
    icon: "🎯",
    val: "-60%",
    label: "Bugs em produção",
    desc: "Média dos clientes após implantação",
  },
  {
    icon: "⚡",
    val: "12sem",
    label: "Tempo médio",
    desc: "Da bagunça ao processo rodando",
  },
];

export default function HeroSection() {
  return (
    <section
      id="hero"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        background: `
          radial-gradient(ellipse 65% 55% at 20% 55%, rgba(30,54,16,0.7) 0%, transparent 65%),
          radial-gradient(ellipse 45% 40% at 80% 25%, rgba(45,80,22,0.22) 0%, transparent 55%),
          radial-gradient(ellipse 35% 50% at 90% 85%, rgba(200,134,10,0.05) 0%, transparent 50%),
          #111d09
        `,
      }}
    >
      <div className="hidden md:block absolute inset-0 w-full h-full">
        <PequiCanvas intensity={0.85} />
      </div>

      {/* Linha decorativa vertical - apenas desktop */}
      <div
        className="hidden md:block"
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: "52%",
          width: "1px",
          background:
            "linear-gradient(to bottom, transparent 0%, rgba(200,134,10,0.08) 20%, rgba(200,134,10,0.12) 50%, rgba(200,134,10,0.06) 80%, transparent 100%)",
          pointerEvents: "none",
          zIndex: 2,
        }}
      />

      {/* Grid 2 colunas (desktop) + bloco mobile */}
      <div
        className="max-w-[1280px] mx-auto w-full relative z-10 flex flex-col items-center px-6 pb-12 pt-8 gap-6 md:grid md:grid-cols-2 md:gap-12 lg:gap-[3rem] md:items-center md:flex-1 md:px-14 md:py-28 md:pt-24 md:pb-12 md:gap-8 hero-section-inner"
      >
        {/* ── MOBILE: conteúdo completo ── */}
        <div className="flex flex-col items-center w-full gap-6 md:hidden">
          <div
            style={{
              fontFamily: "var(--font-body), sans-serif",
              fontSize: "0.6rem",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.2em",
              color: "rgba(200,134,10,0.6)",
              textAlign: "center",
            }}
          >
            Engenharia de Qualidade · Goiás, Brasil
          </div>
          <h1
            style={{
              fontFamily: "var(--font-playfair), serif",
              fontSize: "clamp(1.9rem, 8vw, 2.8rem)",
              fontWeight: 700,
              lineHeight: 1.2,
              color: "#FBF5E6",
              letterSpacing: "-0.02em",
              textAlign: "center",
            }}
          >
            Não encontramos bugs.
            <br />
            <em style={{ fontStyle: "italic", color: "#F0A500" }}>
              Nós evitamos que eles existam.
            </em>
          </h1>
          <p
            style={{
              fontFamily: "var(--font-body), sans-serif",
              fontSize: "0.88rem",
              lineHeight: 1.6,
              color: "rgba(251,245,230,0.55)",
              textAlign: "center",
              maxWidth: 340,
              margin: "0 auto",
            }}
          >
            Engenharia de Qualidade — engenharia de qualidade para produtos digitais.
          </p>
          <div className="flex flex-col gap-3 w-full">
            <a
              href="https://wa.me/5548988526644?text=Ol%C3%A1!%20Quero%20prevenir%20bugs%20em%20produ%C3%A7%C3%A3o.%20Como%20a%20Pequi%20QA%20pode%20ajudar%3F"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "var(--font-body), sans-serif",
                fontSize: "0.9rem",
                fontWeight: 700,
                background: "linear-gradient(135deg, #C8860A, #F0A500)",
                color: "#0e1a07",
                border: "none",
                borderRadius: 8,
                padding: "1rem",
                textDecoration: "none",
                textAlign: "center",
                width: "100%",
              }}
            >
              Quero prevenir bugs em produção 🌿
            </a>
            <Link
              href="/manifesto"
              style={{
                fontFamily: "var(--font-body), sans-serif",
                fontSize: "0.9rem",
                fontWeight: 600,
                background: "transparent",
                border: "1px solid rgba(200,134,10,0.25)",
                color: "rgba(251,245,230,0.7)",
                borderRadius: 8,
                padding: "0.9rem",
                textDecoration: "none",
                textAlign: "center",
                width: "100%",
              }}
            >
              Ler o manifesto →
            </Link>
          </div>
          <p
            style={{
              fontFamily: "var(--font-body), sans-serif",
              fontSize: "0.7rem",
              textAlign: "center",
              color: "rgba(251,245,230,0.4)",
            }}
          >
            🌱 Startup nova em Goiás · 15 anos de mercado · Oferta especial para
            primeiros clientes
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              gap: "0.75rem",
              width: "100%",
              fontFamily: "var(--font-body), sans-serif",
              fontSize: "0.6rem",
              textAlign: "center",
              borderTop: "1px solid rgba(200,134,10,0.1)",
              paddingTop: "1.5rem",
              color: "rgba(251,245,230,0.5)",
            }}
          >
            <div>
              <div style={{ fontWeight: 700, color: "#F0A500", marginBottom: 2 }}>
                Processo
              </div>
              <div style={{ textTransform: "uppercase", letterSpacing: "0.08em" }}>
                Qualidade no requisito
              </div>
            </div>
            <div>
              <div style={{ fontWeight: 700, color: "#F0A500", marginBottom: 2 }}>
                Automação
              </div>
              <div style={{ textTransform: "uppercase", letterSpacing: "0.08em" }}>
                Qualidade no deploy
              </div>
            </div>
            <div>
              <div style={{ fontWeight: 700, color: "#F0A500", marginBottom: 2 }}>
                Prevenção
              </div>
              <div style={{ textTransform: "uppercase", letterSpacing: "0.08em" }}>
                Antes da produção
              </div>
            </div>
          </div>
        </div>

        {/* ── DESKTOP ESQUERDA ── */}
        <div className="hidden md:block">
          {/* Eyebrow */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.7rem",
              fontFamily: "var(--font-body), sans-serif",
              fontSize: "0.62rem",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.2em",
              color: "rgba(200,134,10,0.6)",
              marginBottom: "1.8rem",
            }}
          >
            <span
              style={{
                width: 28,
                height: 1,
                background: "linear-gradient(90deg,#C8860A,transparent)",
                display: "block",
              }}
            />
            Engenharia de Qualidade · Goiás, Brasil
          </div>

          {/* Headline */}
          <h1
            style={{
              fontFamily: "var(--font-playfair), serif",
              fontSize: "clamp(2.6rem, 4.2vw, 4.2rem)",
              fontWeight: 700,
              lineHeight: 1.1,
              color: "#FBF5E6",
              letterSpacing: "-0.02em",
              marginBottom: "1.5rem",
            }}
          >
            Não encontramos bugs.
            <br />
            <em style={{ fontStyle: "italic", color: "#F0A500" }}>
              Nós evitamos que eles existam.
            </em>
          </h1>

          {/* Descrição */}
          <p
            style={{
              fontFamily: "var(--font-body), sans-serif",
              fontSize: "0.98rem",
              lineHeight: 1.75,
              color: "rgba(251,245,230,0.5)",
              maxWidth: 420,
              marginBottom: "2rem",
            }}
          >
            Engenharia de Qualidade — engenharia de qualidade para produtos digitais.
          </p>

          {/* CTAs */}
          <div
            style={{
              display: "flex",
              gap: "1rem",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <a
              href="https://wa.me/5548988526644?text=Ol%C3%A1!%20Quero%20prevenir%20bugs%20em%20produ%C3%A7%C3%A3o.%20Como%20a%20Pequi%20QA%20pode%20ajudar%3F"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "var(--font-body), sans-serif",
                fontSize: "0.9rem",
                fontWeight: 700,
                background: "linear-gradient(135deg, #C8860A 0%, #F0A500 100%)",
                color: "#111d09",
                border: "none",
                borderRadius: 8,
                padding: "0.9rem 1.8rem",
                cursor: "pointer",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              Quero prevenir bugs em produção 🌿
            </a>
            <Link
              href="/manifesto"
              style={{
                fontFamily: "var(--font-body), sans-serif",
                fontSize: "0.88rem",
                fontWeight: 600,
                color: "rgba(251,245,230,0.85)",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                transition: "all 0.2s",
              }}
              className="hover:text-accent"
            >
              Ler o manifesto →
            </Link>
          </div>

          {/* Pilares */}
          <div
            style={{
              display: "flex",
              gap: "2rem",
              marginTop: "2.5rem",
              paddingTop: "2rem",
              borderTop: "1px solid rgba(200,134,10,0.12)",
            }}
          >
            <div>
              <div
                style={{
                  fontFamily: "var(--font-body), sans-serif",
                  fontSize: "1rem",
                  fontWeight: 700,
                  color: "#F0A500",
                  marginBottom: "0.25rem",
                }}
              >
                Processo
              </div>
              <div
                style={{
                  fontFamily: "var(--font-body), sans-serif",
                  fontSize: "0.58rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.12em",
                  color: "rgba(251,245,230,0.4)",
                }}
              >
                Qualidade no requisito
              </div>
            </div>
            <div>
              <div
                style={{
                  fontFamily: "var(--font-body), sans-serif",
                  fontSize: "1rem",
                  fontWeight: 700,
                  color: "#F0A500",
                  marginBottom: "0.25rem",
                }}
              >
                Automação
              </div>
              <div
                style={{
                  fontFamily: "var(--font-body), sans-serif",
                  fontSize: "0.58rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.12em",
                  color: "rgba(251,245,230,0.4)",
                }}
              >
                Qualidade no deploy
              </div>
            </div>
            <div>
              <div
                style={{
                  fontFamily: "var(--font-body), sans-serif",
                  fontSize: "1rem",
                  fontWeight: 700,
                  color: "#F0A500",
                  marginBottom: "0.25rem",
                }}
              >
                Prevenção
              </div>
              <div
                style={{
                  fontFamily: "var(--font-body), sans-serif",
                  fontSize: "0.58rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.12em",
                  color: "rgba(251,245,230,0.4)",
                }}
              >
                Antes da produção
              </div>
            </div>
          </div>

        </div>

        {/* ── DIREITA: Cards (oculto no mobile) ── */}
        <div className="hidden md:flex flex-col gap-4">
          {/* Card principal — Implantação */}
          <div
            style={{
              background: "rgba(30,54,16,0.45)",
              border: "1px solid rgba(200,134,10,0.15)",
              borderRadius: "14px",
              padding: "1.8rem 2rem",
              backdropFilter: "blur(8px)",
              position: "relative",
              overflow: "hidden",
              marginBottom: "1rem",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: "1px",
                background:
                  "linear-gradient(90deg, transparent, rgba(200,134,10,0.3), transparent)",
              }}
            />
            <div
              style={{
                fontFamily: "var(--font-body), sans-serif",
                fontSize: "0.58rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.2em",
                color: "#C8860A",
                marginBottom: "0.8rem",
              }}
            >
              ✦ Implantação de Processo
            </div>
            <div
              style={{
                fontFamily: '"Playfair Display", serif',
                fontSize: "1.15rem",
                fontWeight: 700,
                color: "#FBF5E6",
                marginBottom: "1rem",
                lineHeight: 1.3,
              }}
            >
              Da bagunça ao processo estruturado em semanas
            </div>
            <div
              style={{
                height: "3px",
                borderRadius: "2px",
                background: "linear-gradient(90deg, #3a6b1e, #F0A500)",
                marginBottom: "1.1rem",
                width: "80%",
              }}
            />
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {implantacaoItems.map((item, i, arr) => (
                <li
                  key={i}
                  style={{
                    fontFamily: "var(--font-body), sans-serif",
                    fontSize: "0.78rem",
                    color: "rgba(251,245,230,0.45)",
                    padding: "0.4rem 0",
                    borderBottom:
                      i < arr.length - 1
                        ? "1px solid rgba(251,245,230,0.05)"
                        : "none",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.6rem",
                  }}
                >
                  <span
                    style={{
                      width: "5px",
                      height: "5px",
                      borderRadius: "50%",
                      background: "#C8860A",
                      flexShrink: 0,
                      opacity: 0.7,
                      display: "inline-block",
                    }}
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Cards mini lado a lado */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            {miniCards.map((c, i) => (
              <div
                key={i}
                style={{
                  background: "rgba(26,46,13,0.5)",
                  border: "1px solid rgba(45,80,22,0.4)",
                  borderRadius: "12px",
                  padding: "1.3rem 1.5rem",
                  backdropFilter: "blur(6px)",
                }}
              >
                <div
                  style={{ fontSize: "1.3rem", marginBottom: "0.7rem" }}
                >
                  {c.icon}
                </div>
                <div
                  style={{
                    fontFamily: '"Playfair Display", serif',
                    fontSize: "1.7rem",
                    fontWeight: 700,
                    color: "#F0A500",
                    lineHeight: 1,
                    marginBottom: "0.3rem",
                  }}
                >
                  {c.val}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-body), sans-serif",
                    fontSize: "0.62rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    color: "rgba(251,245,230,0.3)",
                  }}
                >
                  {c.label}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-body), sans-serif",
                    fontSize: "0.72rem",
                    color: "rgba(251,245,230,0.45)",
                    marginTop: "0.5rem",
                    lineHeight: 1.5,
                  }}
                >
                  {c.desc}
                </div>
              </div>
            ))}
          </div>

          {/* Card ROI */}
          <div
            style={{
              background:
                "linear-gradient(135deg, rgba(200,134,10,0.12) 0%, rgba(45,80,22,0.3) 100%)",
              border: "1px solid rgba(200,134,10,0.2)",
              borderRadius: "12px",
              padding: "1.3rem 1.8rem",
              display: "flex",
              alignItems: "center",
              gap: "1.5rem",
              backdropFilter: "blur(6px)",
            }}
          >
            <div
              style={{
                fontFamily: '"Playfair Display", serif',
                fontSize: "2.8rem",
                fontWeight: 800,
                color: "#F0A500",
                lineHeight: 1,
                flexShrink: 0,
              }}
            >
              5×
            </div>
            <div>
              <div
                style={{
                  fontFamily: "var(--font-body), sans-serif",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  color: "#FBF5E6",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  marginBottom: "0.25rem",
                }}
              >
                Retorno sobre investimento
              </div>
              <div
                style={{
                  fontFamily: "var(--font-body), sans-serif",
                  fontSize: "0.68rem",
                  color: "rgba(251,245,230,0.45)",
                  lineHeight: 1.5,
                }}
              >
                Payback médio em 5 meses. Qualidade que se paga.
              </div>
            </div>
          </div>

          {/* Card Pioneiros */}
          <div
            style={{
              background:
                "linear-gradient(135deg, rgba(200,134,10,0.1) 0%, rgba(30,54,16,0.5) 100%)",
              border: "1px solid rgba(200,134,10,0.2)",
              borderRadius: "20px",
              padding: "2rem 2.5rem",
              position: "relative",
              overflow: "hidden",
              backdropFilter: "blur(12px)",
              textAlign: "center",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: "1px",
                background:
                  "linear-gradient(90deg, transparent, rgba(200,134,10,0.5), transparent)",
              }}
            />
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                fontFamily: "var(--font-body), sans-serif",
                fontSize: "0.6rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.22em",
                color: "rgba(200,134,10,0.7)",
                marginBottom: "1.2rem",
              }}
            >
              <span
                style={{
                  width: 5,
                  height: 5,
                  borderRadius: "50%",
                  background: "#F0A500",
                  display: "inline-block",
                }}
              />
              Lançamento
            </div>
            <h2
              style={{
                fontFamily: '"Playfair Display", serif',
                fontSize: "1.5rem",
                fontWeight: 800,
                color: "#FBF5E6",
                lineHeight: 1.2,
                marginBottom: "0.8rem",
                letterSpacing: "-0.02em",
              }}
            >
              Seja um dos primeiros
              <br />
              clientes
            </h2>
            <p
              style={{
                fontFamily: "var(--font-body), sans-serif",
                fontSize: "0.82rem",
                lineHeight: 1.7,
                color: "rgba(251,245,230,0.42)",
                marginBottom: "1.8rem",
              }}
            >
              Estamos construindo nossa história com quem acredita que qualidade
              de software não deveria ser sorte. Condições especiais para os
              primeiros projetos.
            </p>
            <PioneiroBotao />
          </div>
        </div>
      </div>
    </section>
  );
}
