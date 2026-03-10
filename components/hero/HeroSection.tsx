"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import PioneiroBotao from "./PioneiroBotao";

const ParticleCanvas = dynamic(() => import("./ParticleCanvas"), { ssr: false });

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
      <ParticleCanvas />

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

      {/* Grid 2 colunas */}
      <div
        className="md:grid md:grid-cols-2 md:gap-12 lg:gap-[3rem] md:items-center md:flex-1 md:px-14 md:py-28 md:pb-12 max-w-[1280px] mx-auto w-full relative z-10 flex flex-col gap-8 pt-24 pb-12 px-6"
      >
        {/* ── ESQUERDA ── */}
        <div>
          {/* Eyebrow */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.7rem",
              fontFamily: "Syne, sans-serif",
              fontSize: "0.65rem",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.22em",
              color: "rgba(200,134,10,0.75)",
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
            Consultoria em Qualidade de Software
          </div>

          {/* Headline */}
          <h1
            style={{
              fontFamily: '"Playfair Display", serif',
              fontSize: "clamp(2.8rem, 4.8vw, 4.6rem)",
              fontWeight: 800,
              lineHeight: 1.06,
              color: "#FBF5E6",
              letterSpacing: "-0.03em",
              marginBottom: "1.6rem",
            }}
          >
            Qualidade que
            <br />
            nasce do processo,
            <br />
            não da{" "}
            <em style={{ fontStyle: "italic", color: "#F0A500" }}>sorte.</em>
          </h1>

          {/* Descrição */}
          <p
            style={{
              fontFamily: "Syne, sans-serif",
              fontSize: "0.98rem",
              lineHeight: 1.75,
              color: "rgba(251,245,230,0.45)",
              maxWidth: 400,
              marginBottom: "2.4rem",
            }}
          >
            Estruturamos qualidade de software do zero — ou transformamos o que
            já existe. 15 anos de prática real, sem atravessadores, sem promessa
            vazia.
          </p>

          {/* CTAs */}
          <div
            style={{
              display: "flex",
              gap: "0.9rem",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <a
              href="https://wa.me/5548988526644?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20quero%20um%20diagn%C3%B3stico%20gratuito."
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "Syne, sans-serif",
                fontSize: "0.88rem",
                fontWeight: 700,
                background: "linear-gradient(135deg, #C8860A 0%, #F0A500 100%)",
                color: "#111d09",
                border: "none",
                borderRadius: 5,
                padding: "0.85rem 1.7rem",
                cursor: "pointer",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              ◆ Diagnóstico gratuito
            </a>
            <Link
              href="/servicos"
              style={{
                fontFamily: "Syne, sans-serif",
                fontSize: "0.88rem",
                fontWeight: 600,
                color: "rgba(251,245,230,0.85)",
                border: "1px solid rgba(251,245,230,0.35)",
                borderRadius: 5,
                padding: "0.85rem 1.7rem",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                transition: "all 0.2s",
              }}
              className="hover:bg-white/5 hover:border-white/50"
            >
              Ver nossos serviços →
            </Link>
          </div>

          {/* Stats */}
          <div
            style={{
              display: "flex",
              gap: 0,
              marginTop: "3rem",
              paddingTop: "2rem",
              borderTop: "1px solid rgba(200, 134, 10, 0.1)",
            }}
          >
            {[
              { n: "15+", l: "Anos de experiência" },
              { n: "100%", l: "QAs valorizados" },
              { n: "0", l: "Atravessadores" },
            ].map((s, i) => (
              <div
                key={i}
                style={{
                  flex: 1,
                  paddingLeft: i > 0 ? "1.8rem" : 0,
                  borderLeft:
                    i > 0
                      ? "1px solid rgba(200, 134, 10, 0.1)"
                      : "none",
                }}
              >
                <div
                  style={{
                    fontFamily: '"Playfair Display", serif',
                    fontSize: "2.1rem",
                    fontWeight: 700,
                    color: "#F0A500",
                    lineHeight: 1,
                  }}
                >
                  {s.n}
                </div>
                <div
                  style={{
                    fontFamily: "Syne, sans-serif",
                    fontSize: "0.62rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.12em",
                    color: "rgba(251, 245, 230, 0.28)",
                    marginTop: "0.4rem",
                  }}
                >
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── DIREITA: Cards ── */}
        <div className="flex flex-col gap-4">
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
                fontFamily: "Syne, sans-serif",
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
                    fontFamily: "Syne, sans-serif",
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
                    fontFamily: "Syne, sans-serif",
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
                    fontFamily: "Syne, sans-serif",
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
                  fontFamily: "Syne, sans-serif",
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
                  fontFamily: "Syne, sans-serif",
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
                fontFamily: "Syne, sans-serif",
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
                fontFamily: "Syne, sans-serif",
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
