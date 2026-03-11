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
        background: "#0a1406",
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

      {/* UI sobreposta — logo + tagline */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          pointerEvents: "none",
          zIndex: 10,
        }}
      >
        <div
          style={{
            fontFamily: "Syne, sans-serif",
            fontSize: "clamp(2.5rem, 6.5vw, 5.5rem)",
            fontWeight: 600,
            color: "rgba(251,245,230,0)",
            letterSpacing: "0.08em",
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
            fontSize: "clamp(0.8rem, 2.2vw, 1rem)",
            fontWeight: 600,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "rgba(251,245,230,0)",
            marginTop: "1.25rem",
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
