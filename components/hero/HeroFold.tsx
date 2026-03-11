"use client";

import dynamic from "next/dynamic";

const PequiCanvas = dynamic(() => import("./PequiCanvas"), { ssr: false });

export default function HeroFold() {
  return (
    <section
      aria-label="Home"
      className="hero-fold"
      style={{
        position: "relative",
        minHeight: "100vh",
        width: "100%",
        overflow: "hidden",
        background:
          "radial-gradient(ellipse 120% 70% at 50% -10%, rgba(255,235,180,0.06) 0%, transparent 45%), linear-gradient(180deg, #0f0d08 0%, #0c0a06 25%, #080706 55%, #050504 100%)",
      }}
    >
      {/* Canvas de efeito fullscreen */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
        }}
      >
        <PequiCanvas intensity={1} />
      </div>

      {/* UI sobreposta — logo + tagline (inspiração v2) */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "0.6rem",
          pointerEvents: "none",
          zIndex: 10,
        }}
      >
        <div
          style={{
            fontFamily: '"Playfair Display", serif',
            fontSize: "clamp(2.8rem, 6vw, 5.5rem)",
            fontWeight: 800,
            color: "rgba(251,245,230,0)",
            letterSpacing: "-0.04em",
            lineHeight: 1.1,
            textAlign: "center",
            animation: "heroLogoReveal 2s 1.5s ease forwards",
          }}
        >
          Pequi{" "}
          <span
            style={{
              fontWeight: 700,
              color: "rgba(240,165,0,0)",
              animation: "heroGoldReveal 2s 2s ease forwards",
            }}
          >
            QA
          </span>
        </div>
        <div
          style={{
            fontFamily: "Syne, sans-serif",
            fontSize: "clamp(0.5rem, 1.4vw, 0.8rem)",
            fontWeight: 600,
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "rgba(251,245,230,0)",
            marginTop: "0.4rem",
            paddingLeft: "0.2em",
            animation: "heroTaglineFadeIn 1.5s 3s ease forwards",
            textShadow: "0 0 20px rgba(0,0,0,0.5), 0 1px 2px rgba(0,0,0,0.4)",
          }}
        >
          Qualidade que nasce do processo
        </div>
      </div>

    </section>
  );
}
