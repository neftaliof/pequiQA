"use client";

/**
 * Site Trunk: ilustração fixa de um "tronco" no centro da página.
 * Conforme o usuário rola a página, o tronco "cresce" de cima para baixo;
 * perto do final da página aparecem raízes que se abrem para os lados.
 * Só é exibido em desktop (oculto em mobile). Inspirado na identidade Pequi/cerrado.
 */
import { useEffect, useRef, useState } from "react";

const SVG_W = 120;
const ROOT_SPREAD = 280;
const CURVE_ZONE = 120;

export default function SiteTrunk() {
  const [mounted, setMounted] = useState(false);
  const [winW, setWinW] = useState(1024);
  const [scrollY, setScrollY] = useState(0);
  const [docHeight, setDocHeight] = useState(3000);

  useEffect(() => {
    setMounted(true);
    setWinW(window.innerWidth);

    const measure = () => {
      setDocHeight(document.documentElement.scrollHeight);
      setScrollY(window.scrollY);
    };

    measure();
    window.addEventListener("scroll", measure, { passive: true });
    window.addEventListener("resize", () => {
      setWinW(window.innerWidth);
      measure();
    });
    return () => {
      window.removeEventListener("scroll", measure);
    };
  }, []);

  const isMobile = winW < 768;

  const cx = SVG_W / 2;
  const H = docHeight;
  const curveStart = Math.max(0, H - CURVE_ZONE);

  // Progress 0–1: quanto da página já foi scrolleada
  const maxScroll = Math.max(1, H - (typeof window !== "undefined" ? window.innerHeight : 800));
  const progress = Math.min(1, scrollY / maxScroll);

  // O tronco "cresce" do topo para baixo com o scroll
  const lineEnd = Math.min(progress * H, curveStart);

  // Raízes aparecem quando o scroll chega perto do footer
  const rootProgress = Math.max(0, Math.min(1, (progress * H - curveStart) / CURVE_ZONE));
  const rootSpread = rootProgress * ROOT_SPREAD;

  if (!mounted || isMobile) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden"
      style={{ zIndex: 0 }}
      aria-hidden
    >
      <svg
        viewBox={`0 0 ${SVG_W} ${H}`}
        preserveAspectRatio="xMidYMin meet"
        className="absolute"
        style={{
          left: "50%",
          transform: `translate(calc(-50%), ${-scrollY}px)`,
          width: 60,
          height: H,
          opacity: 0.85,
        }}
      >
        <defs>
          <linearGradient id="trunk-grad-site" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#C8860A" stopOpacity="0.7" />
            <stop offset="80%" stopColor="#F0A500" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#F0A500" stopOpacity="0.15" />
          </linearGradient>
          <linearGradient id="root-grad-site" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#C8860A" stopOpacity="0.25" />
            <stop offset="50%" stopColor="#F0A500" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#C8860A" stopOpacity="0.25" />
          </linearGradient>
        </defs>

        {/* Trilho de fundo sutil */}
        <line
          x1={cx}
          y1={0}
          x2={cx}
          y2={H}
          stroke="#C8860A"
          strokeWidth="1"
          strokeOpacity="0.06"
        />

        {/* Tronco principal — cresce com scroll (copa → raízes) */}
        {lineEnd > 0 && (
          <line
            x1={cx}
            y1={0}
            x2={cx}
            y2={lineEnd}
            stroke="url(#trunk-grad-site)"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        )}

        {/* Raízes — aparecem no footer */}
        {rootProgress > 0 && (
          <>
            <path
              d={`M ${cx} ${curveStart}
                  C ${cx} ${curveStart + 40},
                    ${cx - rootSpread * 0.6} ${curveStart + 60},
                    ${cx - rootSpread} ${H - 20}`}
              stroke="url(#root-grad-site)"
              strokeWidth="1.2"
              strokeLinecap="round"
              fill="none"
              strokeOpacity={rootProgress}
            />
            <path
              d={`M ${cx} ${curveStart}
                  C ${cx} ${curveStart + 40},
                    ${cx + rootSpread * 0.6} ${curveStart + 60},
                    ${cx + rootSpread} ${H - 20}`}
              stroke="url(#root-grad-site)"
              strokeWidth="1.2"
              strokeLinecap="round"
              fill="none"
              strokeOpacity={rootProgress}
            />
            <line
              x1={cx}
              y1={curveStart}
              x2={cx}
              y2={H - 10}
              stroke="#C8860A"
              strokeWidth="1"
              strokeOpacity={rootProgress * 0.3}
            />
          </>
        )}
      </svg>
    </div>
  );
}
