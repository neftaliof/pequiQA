"use client";

import { useEffect, useRef, useCallback } from "react";

// ── Paleta pequi ──
const CORES: [number, number, number][] = [
  [255, 248, 210],
  [255, 228, 140],
  [253, 210, 100],
  [245, 185, 75],
  [255, 170, 60],
  [180, 130, 45],
  [90, 65, 25],
];

const CANOPY_DESKTOP = 300;
const CANOPY_MOBILE = 150;
const DUST_DESKTOP = 50;
const DUST_MOBILE = 25;
const MAX_FRUITS_DESKTOP = 3;
const MAX_FRUITS_MOBILE = 1;
const FRUIT_INTERVAL = 3200;

// ── Ferramentas QA ──
type DrawToolFn = (
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  r: number,
  a: number
) => void;

interface Tool {
  name: string;
  color: string;
  draw: DrawToolFn;
}

function roundRectPath(
  ctx: CanvasRenderingContext2D,
  x: number, y: number, w: number, h: number, rad: number
) {
  const r = Math.min(rad, w / 2, h / 2);
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + w - r, y);
  ctx.quadraticCurveTo(x + w, y, x + w, y + r);
  ctx.lineTo(x + w, y + h - r);
  ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  ctx.lineTo(x + r, y + h);
  ctx.quadraticCurveTo(x, y + h, x, y + h - r);
  ctx.lineTo(x, y + r);
  ctx.quadraticCurveTo(x, y, x + r, y);
}

const TOOLS: Tool[] = [
  // ── Cypress: "C" estilizado dentro de círculo ──
  {
    name: "Cypress",
    color: "#69D3A7",
    draw(ctx, x, y, r, a) {
      ctx.save(); ctx.globalAlpha = a; ctx.translate(x, y);
      ctx.fillStyle = "rgba(105,211,167,0.08)";
      ctx.beginPath(); ctx.arc(0, 0, r * 0.95, 0, Math.PI * 2); ctx.fill();
      ctx.strokeStyle = "#4A9B7F"; ctx.lineWidth = Math.max(1, r * 0.14);
      ctx.beginPath(); ctx.arc(0, 0, r * 0.95, 0, Math.PI * 2); ctx.stroke();
      ctx.strokeStyle = "#69D3A7"; ctx.lineWidth = Math.max(1.5, r * 0.28); ctx.lineCap = "round";
      ctx.beginPath(); ctx.arc(0, 0, r * 0.52, -Math.PI * 0.35, Math.PI * 0.35, true); ctx.stroke();
      ctx.fillStyle = "#69D3A7";
      ctx.beginPath(); ctx.arc(r * 0.28, -r * 0.38, r * 0.1, 0, Math.PI * 2); ctx.fill();
      ctx.beginPath(); ctx.arc(r * 0.28, r * 0.38, r * 0.1, 0, Math.PI * 2); ctx.fill();
      ctx.restore();
    },
  },
  // ── Playwright: duas máscaras teatrais ──
  {
    name: "Playwright",
    color: "#2EAD33",
    draw(ctx, x, y, r, a) {
      ctx.save(); ctx.globalAlpha = a; ctx.translate(x, y);
      const s = r * 0.82;
      ctx.fillStyle = "#1B8A28";
      ctx.beginPath();
      ctx.moveTo(s * 0.15, -s * 0.85); ctx.lineTo(s * 0.9, -s * 0.3);
      ctx.lineTo(s * 0.9, s * 0.45); ctx.lineTo(s * 0.15, s * 0.9);
      ctx.lineTo(-s * 0.2, s * 0.55); ctx.lineTo(-s * 0.2, -s * 0.5);
      ctx.closePath(); ctx.fill();
      ctx.fillStyle = "#2EAD33";
      ctx.beginPath();
      ctx.moveTo(-s * 0.15, -s * 0.85); ctx.lineTo(-s * 0.9, -s * 0.3);
      ctx.lineTo(-s * 0.9, s * 0.45); ctx.lineTo(-s * 0.15, s * 0.9);
      ctx.lineTo(s * 0.2, s * 0.55); ctx.lineTo(s * 0.2, -s * 0.5);
      ctx.closePath(); ctx.fill();
      ctx.fillStyle = "rgba(0,0,0,0.6)";
      ctx.beginPath(); ctx.arc(-s * 0.52, -s * 0.12, s * 0.12, 0, Math.PI * 2); ctx.fill();
      ctx.beginPath(); ctx.arc(-s * 0.22, -s * 0.17, s * 0.09, 0, Math.PI * 2); ctx.fill();
      ctx.strokeStyle = "rgba(0,0,0,0.5)"; ctx.lineWidth = Math.max(0.8, r * 0.08); ctx.lineCap = "round";
      ctx.beginPath(); ctx.arc(-s * 0.38, s * 0.25, s * 0.22, Math.PI * 0.15, Math.PI * 0.85); ctx.stroke();
      ctx.restore();
    },
  },
  // ── Postman: foguete laranja ──
  {
    name: "Postman",
    color: "#FF6C37",
    draw(ctx, x, y, r, a) {
      ctx.save(); ctx.globalAlpha = a; ctx.translate(x, y);
      const s = r * 0.85;
      ctx.fillStyle = "rgba(255,108,55,0.1)"; ctx.beginPath(); ctx.arc(0, 0, s, 0, Math.PI * 2); ctx.fill();
      ctx.strokeStyle = "#FF6C37"; ctx.lineWidth = Math.max(1, r * 0.12); ctx.stroke();
      ctx.fillStyle = "#FF6C37";
      ctx.beginPath();
      ctx.moveTo(0, -s * 0.7); ctx.quadraticCurveTo(s * 0.45, -s * 0.3, s * 0.3, s * 0.15);
      ctx.lineTo(0, 0); ctx.lineTo(-s * 0.3, s * 0.15);
      ctx.quadraticCurveTo(-s * 0.45, -s * 0.3, 0, -s * 0.7);
      ctx.closePath(); ctx.fill();
      ctx.fillStyle = "#FFA474";
      ctx.beginPath(); ctx.arc(0, -s * 0.22, s * 0.12, 0, Math.PI * 2); ctx.fill();
      ctx.strokeStyle = "#FF6C37"; ctx.lineWidth = Math.max(0.8, r * 0.1); ctx.lineCap = "round";
      ctx.beginPath(); ctx.moveTo(-s * 0.18, s * 0.18); ctx.lineTo(-s * 0.4, s * 0.55); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(s * 0.18, s * 0.18); ctx.lineTo(s * 0.4, s * 0.55); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(0, s * 0.05); ctx.lineTo(0, s * 0.5); ctx.stroke();
      ctx.restore();
    },
  },
  // ── Robot Framework: cabeça de robô ──
  {
    name: "Robot",
    color: "#00b0f0",
    draw(ctx, x, y, r, a) {
      ctx.save(); ctx.globalAlpha = a; ctx.translate(x, y);
      const s = r * 0.72;
      ctx.beginPath(); roundRectPath(ctx, -s, -s * 0.6, s * 2, s * 1.6, r * 0.2);
      ctx.fillStyle = "rgba(0,176,240,0.12)"; ctx.fill();
      ctx.strokeStyle = "#00b0f0"; ctx.lineWidth = Math.max(1, r * 0.14); ctx.stroke();
      ctx.strokeStyle = "#00b0f0"; ctx.lineWidth = Math.max(0.8, r * 0.1);
      ctx.beginPath(); ctx.moveTo(0, -s * 0.6); ctx.lineTo(0, -s * 0.85); ctx.stroke();
      ctx.beginPath(); ctx.arc(0, -s * 0.92, r * 0.08, 0, Math.PI * 2); ctx.fillStyle = "#00b0f0"; ctx.fill();
      const eyeR = r * 0.15;
      [-s * 0.38, s * 0.38].forEach((ox) => {
        ctx.beginPath(); ctx.arc(ox, -s * 0.12, eyeR, 0, Math.PI * 2);
        ctx.fillStyle = "#fff"; ctx.fill();
        ctx.beginPath(); ctx.arc(ox, -s * 0.12, eyeR * 0.5, 0, Math.PI * 2);
        ctx.fillStyle = "#00b0f0"; ctx.fill();
      });
      ctx.beginPath(); ctx.moveTo(-s * 0.3, s * 0.35); ctx.lineTo(s * 0.3, s * 0.35);
      ctx.strokeStyle = "#00b0f0"; ctx.lineWidth = Math.max(0.8, r * 0.1); ctx.lineCap = "round"; ctx.stroke();
      ctx.restore();
    },
  },
  // ── Selenium: S estilizado (duas curvas entrelaçadas) ──
  {
    name: "Selenium",
    color: "#43B02A",
    draw(ctx, x, y, r, a) {
      ctx.save(); ctx.globalAlpha = a; ctx.translate(x, y);
      const s = r * 0.75; const lw = Math.max(1.5, r * 0.24);
      ctx.strokeStyle = "#43B02A"; ctx.lineWidth = lw; ctx.lineCap = "round";
      ctx.beginPath();
      ctx.moveTo(-s * 0.6, -s * 0.7);
      ctx.bezierCurveTo(s * 0.5, -s * 0.9, s * 0.7, -s * 0.1, -s * 0.1, 0);
      ctx.stroke();
      ctx.strokeStyle = "#2D8C1C";
      ctx.beginPath();
      ctx.moveTo(s * 0.6, s * 0.7);
      ctx.bezierCurveTo(-s * 0.5, s * 0.9, -s * 0.7, s * 0.1, s * 0.1, 0);
      ctx.stroke();
      ctx.fillStyle = "#43B02A";
      ctx.beginPath(); ctx.arc(-s * 0.6, -s * 0.7, r * 0.08, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = "#2D8C1C";
      ctx.beginPath(); ctx.arc(s * 0.6, s * 0.7, r * 0.08, 0, Math.PI * 2); ctx.fill();
      ctx.restore();
    },
  },
  // ── k6: hexágono roxo com texto ──
  {
    name: "k6",
    color: "#7D64FF",
    draw(ctx, x, y, r, a) {
      ctx.save(); ctx.globalAlpha = a; ctx.translate(x, y);
      const hexR = r * 0.92; ctx.beginPath();
      for (let i = 0; i < 6; i++) { const ang = (i / 6) * Math.PI * 2 - Math.PI / 6; const px = Math.cos(ang) * hexR; const py = Math.sin(ang) * hexR; i === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py); }
      ctx.closePath(); ctx.fillStyle = "rgba(125,100,255,0.1)"; ctx.fill();
      ctx.strokeStyle = "#7D64FF"; ctx.lineWidth = Math.max(1, r * 0.16); ctx.stroke();
      ctx.font = `bold ${Math.max(8, r * 0.55)}px system-ui, sans-serif`; ctx.fillStyle = "#7D64FF"; ctx.textAlign = "center"; ctx.textBaseline = "middle"; ctx.fillText("k6", 0, r * 0.02);
      ctx.restore();
    },
  },
  // ── Jira: logo "J" com gradiente azul ──
  {
    name: "Jira",
    color: "#0052CC",
    draw(ctx, x, y, r, a) {
      ctx.save(); ctx.globalAlpha = a; ctx.translate(x, y);
      const s = r * 0.7;
      const g1 = ctx.createLinearGradient(-s, -s, s, s); g1.addColorStop(0, "#2684FF"); g1.addColorStop(1, "#0052CC");
      ctx.fillStyle = g1;
      ctx.beginPath();
      ctx.moveTo(-s * 0.1, -s * 0.9); ctx.lineTo(s * 0.35, -s * 0.9);
      ctx.lineTo(s * 0.35, s * 0.2); ctx.quadraticCurveTo(s * 0.35, s * 0.9, -s * 0.35, s * 0.9);
      ctx.lineTo(-s * 0.35, s * 0.5); ctx.quadraticCurveTo(0, s * 0.5, 0, s * 0.2);
      ctx.lineTo(-s * 0.1, s * 0.2); ctx.closePath(); ctx.fill();
      ctx.fillStyle = "#2684FF";
      ctx.beginPath(); ctx.arc(s * 0.12, -s * 0.55, s * 0.22, 0, Math.PI * 2); ctx.fill();
      ctx.restore();
    },
  },
  // ── OWASP: escudo com vespa ──
  {
    name: "OWASP",
    color: "#F5A623",
    draw(ctx, x, y, r, a) {
      ctx.save(); ctx.globalAlpha = a; ctx.translate(x, y);
      const s = r * 0.88;
      ctx.beginPath();
      ctx.moveTo(0, -s); ctx.lineTo(s, -s * 0.35); ctx.lineTo(s, s * 0.15);
      ctx.quadraticCurveTo(s, s * 0.88, 0, s);
      ctx.quadraticCurveTo(-s, s * 0.88, -s, s * 0.15);
      ctx.lineTo(-s, -s * 0.35); ctx.closePath();
      ctx.fillStyle = "rgba(245,166,35,0.1)"; ctx.fill();
      ctx.strokeStyle = "#F5A623"; ctx.lineWidth = Math.max(1, r * 0.16); ctx.stroke();
      ctx.fillStyle = "#F5A623";
      ctx.beginPath(); ctx.ellipse(0, s * 0.05, s * 0.22, s * 0.35, 0, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = "#1a1a1a";
      ctx.beginPath(); ctx.moveTo(-s * 0.22, -s * 0.05); ctx.lineTo(s * 0.22, -s * 0.05); ctx.lineTo(s * 0.18, s * 0.05); ctx.lineTo(-s * 0.18, s * 0.05); ctx.closePath(); ctx.fill();
      ctx.beginPath(); ctx.moveTo(-s * 0.18, s * 0.15); ctx.lineTo(s * 0.18, s * 0.15); ctx.lineTo(s * 0.14, s * 0.25); ctx.lineTo(-s * 0.14, s * 0.25); ctx.closePath(); ctx.fill();
      ctx.restore();
    },
  },
  // ── JMeter: gráfico de carga com pena ──
  {
    name: "JMeter",
    color: "#D22128",
    draw(ctx, x, y, r, a) {
      ctx.save(); ctx.globalAlpha = a; ctx.translate(x, y);
      const s = r * 0.75;
      ctx.strokeStyle = "rgba(210,33,40,0.3)"; ctx.lineWidth = Math.max(0.6, r * 0.06);
      ctx.beginPath(); ctx.moveTo(-s, s * 0.6); ctx.lineTo(s, s * 0.6); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(-s, s * 0.6); ctx.lineTo(-s, -s * 0.6); ctx.stroke();
      ctx.strokeStyle = "#D22128"; ctx.lineWidth = Math.max(1.2, r * 0.18); ctx.lineCap = "round"; ctx.lineJoin = "round";
      ctx.beginPath();
      ctx.moveTo(-s * 0.8, s * 0.4);
      ctx.lineTo(-s * 0.4, s * 0.1);
      ctx.lineTo(-s * 0.1, s * 0.35);
      ctx.lineTo(s * 0.2, -s * 0.3);
      ctx.lineTo(s * 0.5, -s * 0.5);
      ctx.lineTo(s * 0.8, -s * 0.15);
      ctx.stroke();
      ctx.fillStyle = "#D22128";
      ctx.beginPath(); ctx.arc(s * 0.5, -s * 0.5, r * 0.08, 0, Math.PI * 2); ctx.fill();
      ctx.restore();
    },
  },
  // ── OWASP ZAP: raio azul ──
  {
    name: "ZAP",
    color: "#00BCD4",
    draw(ctx, x, y, r, a) {
      ctx.save(); ctx.globalAlpha = a; ctx.translate(x, y);
      const s = r * 0.8;
      ctx.fillStyle = "rgba(0,188,212,0.08)";
      ctx.beginPath(); ctx.arc(0, 0, s, 0, Math.PI * 2); ctx.fill();
      ctx.strokeStyle = "#00BCD4"; ctx.lineWidth = Math.max(1, r * 0.12); ctx.stroke();
      ctx.fillStyle = "#00BCD4";
      ctx.beginPath();
      ctx.moveTo(-s * 0.45, -s * 0.55); ctx.lineTo(s * 0.35, -s * 0.55);
      ctx.lineTo(-s * 0.15, -s * 0.05); ctx.lineTo(s * 0.45, -s * 0.05);
      ctx.lineTo(-s * 0.05, s * 0.55); ctx.lineTo(s * 0.05, s * 0.05);
      ctx.lineTo(-s * 0.45, s * 0.05); ctx.lineTo(s * 0.15, -s * 0.45);
      ctx.closePath(); ctx.fill();
      ctx.restore();
    },
  },
  // ── Katalon: "K" verde dentro de hexágono ──
  {
    name: "Katalon",
    color: "#19AFA5",
    draw(ctx, x, y, r, a) {
      ctx.save(); ctx.globalAlpha = a; ctx.translate(x, y);
      const hexR = r * 0.9; ctx.beginPath();
      for (let i = 0; i < 6; i++) { const ang = (i / 6) * Math.PI * 2 - Math.PI / 2; const px = Math.cos(ang) * hexR; const py = Math.sin(ang) * hexR; i === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py); }
      ctx.closePath(); ctx.fillStyle = "rgba(25,175,165,0.12)"; ctx.fill();
      ctx.strokeStyle = "#19AFA5"; ctx.lineWidth = Math.max(1, r * 0.14); ctx.stroke();
      const lw = Math.max(1.5, r * 0.2); ctx.strokeStyle = "#19AFA5"; ctx.lineWidth = lw; ctx.lineCap = "round";
      const k = r * 0.42;
      ctx.beginPath(); ctx.moveTo(-k * 0.5, -k); ctx.lineTo(-k * 0.5, k); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(-k * 0.5, 0); ctx.lineTo(k * 0.5, -k); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(-k * 0.5, 0); ctx.lineTo(k * 0.5, k); ctx.stroke();
      ctx.restore();
    },
  },
  // ── TestComplete: checkmark em escudo azul ──
  {
    name: "TestComplete",
    color: "#4CAF50",
    draw(ctx, x, y, r, a) {
      ctx.save(); ctx.globalAlpha = a; ctx.translate(x, y);
      const s = r * 0.85;
      ctx.beginPath();
      ctx.moveTo(0, -s); ctx.lineTo(s * 0.85, -s * 0.55); ctx.lineTo(s * 0.85, s * 0.2);
      ctx.quadraticCurveTo(s * 0.85, s * 0.85, 0, s);
      ctx.quadraticCurveTo(-s * 0.85, s * 0.85, -s * 0.85, s * 0.2);
      ctx.lineTo(-s * 0.85, -s * 0.55); ctx.closePath();
      ctx.fillStyle = "rgba(76,175,80,0.12)"; ctx.fill();
      ctx.strokeStyle = "#4CAF50"; ctx.lineWidth = Math.max(1, r * 0.14); ctx.stroke();
      ctx.strokeStyle = "#4CAF50"; ctx.lineWidth = Math.max(1.8, r * 0.24); ctx.lineCap = "round"; ctx.lineJoin = "round";
      ctx.beginPath();
      ctx.moveTo(-s * 0.35, s * 0.0); ctx.lineTo(-s * 0.08, s * 0.3); ctx.lineTo(s * 0.4, -s * 0.25);
      ctx.stroke();
      ctx.restore();
    },
  },
  // ── SoapUI: bolhas de sabão (SOAP) ──
  {
    name: "SoapUI",
    color: "#6DB33F",
    draw(ctx, x, y, r, a) {
      ctx.save(); ctx.globalAlpha = a; ctx.translate(x, y);
      const s = r * 0.85;
      ctx.fillStyle = "rgba(109,179,63,0.08)"; ctx.beginPath(); ctx.arc(0, 0, s, 0, Math.PI * 2); ctx.fill();
      ctx.strokeStyle = "#6DB33F"; ctx.lineWidth = Math.max(1, r * 0.12); ctx.stroke();
      const bubbles: [number, number, number][] = [[-s * 0.25, -s * 0.2, s * 0.35], [s * 0.25, s * 0.15, s * 0.28], [-s * 0.05, s * 0.35, s * 0.18]];
      bubbles.forEach(([bx, by, br]) => {
        ctx.beginPath(); ctx.arc(bx, by, br, 0, Math.PI * 2);
        ctx.strokeStyle = "#6DB33F"; ctx.lineWidth = Math.max(0.8, r * 0.08); ctx.stroke();
        ctx.beginPath(); ctx.arc(bx - br * 0.3, by - br * 0.3, br * 0.15, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(109,179,63,0.4)"; ctx.fill();
      });
      ctx.restore();
    },
  },
  // ── LoadRunner: velocímetro ──
  {
    name: "LoadRunner",
    color: "#0076CE",
    draw(ctx, x, y, r, a) {
      ctx.save(); ctx.globalAlpha = a; ctx.translate(x, y);
      const s = r * 0.85;
      ctx.beginPath(); ctx.arc(0, s * 0.1, s * 0.9, Math.PI, 0);
      ctx.fillStyle = "rgba(0,118,206,0.08)"; ctx.fill();
      ctx.strokeStyle = "#0076CE"; ctx.lineWidth = Math.max(1.2, r * 0.16); ctx.stroke();
      const ticks = 7;
      for (let i = 0; i < ticks; i++) {
        const ang = Math.PI + (i / (ticks - 1)) * Math.PI;
        const ix = Math.cos(ang) * s * 0.7; const iy = s * 0.1 + Math.sin(ang) * s * 0.7;
        const ox = Math.cos(ang) * s * 0.85; const oy = s * 0.1 + Math.sin(ang) * s * 0.85;
        ctx.beginPath(); ctx.moveTo(ix, iy); ctx.lineTo(ox, oy);
        ctx.strokeStyle = i >= 5 ? "#FF4444" : "#0076CE"; ctx.lineWidth = Math.max(0.8, r * 0.08); ctx.stroke();
      }
      const needleAng = Math.PI + Math.PI * 0.72;
      ctx.strokeStyle = "#FF4444"; ctx.lineWidth = Math.max(1.2, r * 0.14); ctx.lineCap = "round";
      ctx.beginPath(); ctx.moveTo(0, s * 0.1);
      ctx.lineTo(Math.cos(needleAng) * s * 0.6, s * 0.1 + Math.sin(needleAng) * s * 0.6); ctx.stroke();
      ctx.fillStyle = "#0076CE"; ctx.beginPath(); ctx.arc(0, s * 0.1, r * 0.1, 0, Math.PI * 2); ctx.fill();
      ctx.restore();
    },
  },
  // ── Bugzilla: joaninha vermelha ──
  {
    name: "Bugzilla",
    color: "#CC0000",
    draw(ctx, x, y, r, a) {
      ctx.save(); ctx.globalAlpha = a; ctx.translate(x, y);
      const s = r * 0.8;
      ctx.fillStyle = "#CC0000";
      ctx.beginPath(); ctx.ellipse(0, s * 0.1, s * 0.7, s * 0.75, 0, 0, Math.PI * 2); ctx.fill();
      ctx.strokeStyle = "#1a1a1a"; ctx.lineWidth = Math.max(1, r * 0.1);
      ctx.beginPath(); ctx.moveTo(0, -s * 0.65); ctx.lineTo(0, s * 0.85); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(-s * 0.65, s * 0.0); ctx.lineTo(s * 0.65, s * 0.0); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(-s * 0.55, s * 0.45); ctx.lineTo(s * 0.55, s * 0.45); ctx.stroke();
      ctx.fillStyle = "#1a1a1a";
      ctx.beginPath(); ctx.ellipse(0, -s * 0.55, s * 0.35, s * 0.28, 0, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = "#fff";
      ctx.beginPath(); ctx.arc(-s * 0.15, -s * 0.58, r * 0.07, 0, Math.PI * 2); ctx.fill();
      ctx.beginPath(); ctx.arc(s * 0.15, -s * 0.58, r * 0.07, 0, Math.PI * 2); ctx.fill();
      ctx.strokeStyle = "#1a1a1a"; ctx.lineWidth = Math.max(0.6, r * 0.06); ctx.lineCap = "round";
      const legs: [number, number, number, number][] = [
        [-s * 0.65, -s * 0.2, -s * 0.9, -s * 0.45], [s * 0.65, -s * 0.2, s * 0.9, -s * 0.45],
        [-s * 0.7, s * 0.1, -s * 0.95, s * 0.1], [s * 0.7, s * 0.1, s * 0.95, s * 0.1],
        [-s * 0.65, s * 0.4, -s * 0.9, s * 0.65], [s * 0.65, s * 0.4, s * 0.9, s * 0.65],
      ];
      legs.forEach(([x1, y1, x2, y2]) => { ctx.beginPath(); ctx.moveTo(x1, y1); ctx.lineTo(x2, y2); ctx.stroke(); });
      ctx.restore();
    },
  },
];

// ── Copa ──
class CanopyParticle {
  ox: number; oy: number;
  x: number; y: number;
  phase: number; phaseV: number;
  driftX: number; driftY: number;
  rgb: [number, number, number];
  size: number;
  alpha: number;

  constructor(cx: number, cy: number, rx: number, ry: number) {
    const angle = Math.random() * Math.PI * 2;
    const rFrac = Math.pow(Math.random(), 0.6);
    this.ox = cx + Math.cos(angle) * rx * rFrac;
    this.oy = cy + Math.sin(angle) * ry * rFrac;
    this.x = this.ox;
    this.y = this.oy;
    this.phase = Math.random() * Math.PI * 2;
    this.phaseV = 0.008 + Math.random() * 0.015;
    this.driftX = (Math.random() - 0.5) * 1.5;
    this.driftY = (Math.random() - 0.5) * 1.0;
    this.rgb = CORES[Math.floor(Math.random() * 5)];
    this.size = 1.2 + Math.random() * 2.5;
    this.alpha = 0.35 + Math.random() * 0.45;
  }

  update(t: number, windX: number) {
    this.phase += this.phaseV;
    const breathe = Math.sin(this.phase) * 0.5;
    this.x = this.ox + this.driftX * Math.sin(this.phase * 0.7 + t * 0.0005) + windX * 0.3;
    this.y = this.oy + this.driftY * Math.sin(this.phase * 1.1) + breathe;
  }

  draw(ctx: CanvasRenderingContext2D) {
    const [r, g, b] = this.rgb;
    const a = this.alpha * (0.7 + 0.3 * Math.sin(this.phase));
    if (a < 0.02) return;
    const hr = this.size * 3;
    const grd = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, hr);
    grd.addColorStop(0, `rgba(${r},${g},${b},${(a * 0.5).toFixed(3)})`);
    grd.addColorStop(1, `rgba(${r},${g},${b},0)`);
    ctx.beginPath(); ctx.arc(this.x, this.y, hr, 0, Math.PI * 2); ctx.fillStyle = grd; ctx.fill();
    ctx.beginPath(); ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(${r},${g},${b},${a.toFixed(3)})`; ctx.fill();
  }
}

// ── Poeira ambiente ──
class AmbientDust {
  x: number; y: number;
  vx: number; vy: number;
  size: number; alpha: number;
  rgb: [number, number, number];
  W: number; H: number;

  constructor(W: number, H: number) {
    this.W = W; this.H = H;
    this.x = Math.random() * W;
    this.y = Math.random() * H;
    this.vx = (Math.random() - 0.5) * 0.15;
    this.vy = -0.05 - Math.random() * 0.15;
    this.size = 0.6 + Math.random() * 1.0;
    this.alpha = 0.08 + Math.random() * 0.16;
    this.rgb = CORES[Math.floor(Math.random() * 4)];
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;
    if (this.y < -10) { this.y = this.H + 10; this.x = Math.random() * this.W; }
    if (this.x < -10) this.x = this.W + 10;
    if (this.x > this.W + 10) this.x = -10;
  }

  draw(ctx: CanvasRenderingContext2D) {
    const [r, g, b] = this.rgb;
    ctx.beginPath(); ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(${r},${g},${b},${this.alpha.toFixed(3)})`; ctx.fill();
  }
}

// ── Ferramenta subindo das raízes pelo tronco até a copa ──
type RisingState = "rising" | "blooming" | "showing" | "fading";

class RisingTool {
  tool: Tool;
  pathNodes: { x: number; y: number }[];
  progress: number; // 0 = bottom, 1 = top of pipeline
  speed: number;
  size: number;
  state: RisingState;
  stateTimer: number;
  bloomScale: number;
  alpha: number;
  x: number; y: number;
  destX: number; destY: number;
  swayPhase: number;

  constructor(pathNodes: { x: number; y: number }[], tool: Tool, copaCX: number, copaCY: number, copaRX: number, copaRY: number) {
    this.tool = tool;
    this.pathNodes = pathNodes;
    this.progress = 0;
    this.speed = 0.0003 + Math.random() * 0.0002;
    this.size = 4 + Math.random() * 3;
    this.state = "rising";
    this.stateTimer = 0;
    this.bloomScale = 0;
    this.alpha = 0;
    this.swayPhase = Math.random() * Math.PI * 2;

    // Start at bottom
    const last = pathNodes[0];
    this.x = last.x;
    this.y = last.y;

    // Destination in canopy area
    const angle = Math.random() * Math.PI * 2;
    const rFrac = 0.3 + Math.random() * 0.6;
    this.destX = copaCX + Math.cos(angle) * copaRX * rFrac;
    this.destY = copaCY + Math.sin(angle) * copaRY * rFrac;
  }

  get done() { return this.state === "fading" && this.alpha <= 0.01; }

  private posOnPath(t: number): { x: number; y: number } {
    const pts = this.pathNodes;
    const n = pts.length - 1;
    const seg = Math.min(t * n, n - 0.001);
    const idx = Math.floor(seg);
    const frac = seg - idx;
    const p0 = pts[idx];
    const p1 = pts[Math.min(idx + 1, n)];
    return {
      x: p0.x + (p1.x - p0.x) * frac,
      y: p0.y + (p1.y - p0.y) * frac,
    };
  }

  update(dt: number) {
    this.stateTimer += dt;
    this.swayPhase += 0.02;

    switch (this.state) {
      case "rising": {
        this.progress += this.speed * dt;
        this.alpha = Math.min(1, this.alpha + 0.02);
        const pos = this.posOnPath(Math.min(this.progress, 1));
        this.x = pos.x + Math.sin(this.swayPhase) * 1.5;
        this.y = pos.y;
        if (this.progress >= 1) {
          this.state = "blooming";
          this.stateTimer = 0;
          this.x = this.destX;
          this.y = this.destY;
        }
        break;
      }
      case "blooming":
        this.bloomScale += (1 - this.bloomScale) * 0.05;
        if (this.stateTimer > 700) {
          this.state = "showing";
          this.stateTimer = 0;
        }
        break;
      case "showing":
        if (this.stateTimer > 3200) {
          this.state = "fading";
          this.stateTimer = 0;
        }
        break;
      case "fading":
        this.alpha -= 0.012;
        if (this.alpha < 0) this.alpha = 0;
        break;
    }
  }

  draw(ctx: CanvasRenderingContext2D) {
    if (this.alpha < 0.02) return;

    if (this.state === "rising") {
      // Glowing particle traveling up the trunk
      const glowR = this.size * 3;
      const grd = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, glowR);
      grd.addColorStop(0, `rgba(253,217,106,${(0.5 * this.alpha).toFixed(3)})`);
      grd.addColorStop(0.4, `rgba(253,210,100,${(0.2 * this.alpha).toFixed(3)})`);
      grd.addColorStop(1, "rgba(253,210,100,0)");
      ctx.beginPath(); ctx.arc(this.x, this.y, glowR, 0, Math.PI * 2); ctx.fillStyle = grd; ctx.fill();

      ctx.beginPath(); ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(253,217,106,${(0.85 * this.alpha).toFixed(3)})`; ctx.fill();

      // Tiny trail
      const trailY = this.y + this.size * 3;
      const trailGrd = ctx.createLinearGradient(this.x, this.y, this.x, trailY);
      trailGrd.addColorStop(0, `rgba(253,217,106,${(0.3 * this.alpha).toFixed(3)})`);
      trailGrd.addColorStop(1, "rgba(253,217,106,0)");
      ctx.strokeStyle = trailGrd;
      ctx.lineWidth = this.size * 0.6;
      ctx.lineCap = "round";
      ctx.beginPath(); ctx.moveTo(this.x, this.y); ctx.lineTo(this.x, trailY); ctx.stroke();
      return;
    }

    // Blooming / showing / fading: show full icon in canopy
    const sc = this.state === "blooming" ? this.bloomScale : 1;
    const iconR = this.size * 2.8 * sc;
    const toolAlpha = this.alpha * (this.state === "blooming" ? this.bloomScale : 1);

    const glowR = iconR * 2.5;
    const glow = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, glowR);
    glow.addColorStop(0, `rgba(253,217,106,${(0.15 * toolAlpha).toFixed(3)})`);
    glow.addColorStop(1, "rgba(253,217,106,0)");
    ctx.beginPath(); ctx.arc(this.x, this.y, glowR, 0, Math.PI * 2); ctx.fillStyle = glow; ctx.fill();

    ctx.beginPath(); ctx.arc(this.x, this.y, iconR * 1.15, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(15,25,12,${(0.8 * toolAlpha).toFixed(3)})`; ctx.fill();
    ctx.strokeStyle = `rgba(253,217,106,${(0.3 * toolAlpha).toFixed(3)})`;
    ctx.lineWidth = 1; ctx.stroke();

    this.tool.draw(ctx, this.x, this.y, iconR, toolAlpha);

    if (sc > 0.7) {
      ctx.save();
      ctx.font = `${Math.max(9, 10 * sc)}px sans-serif`;
      ctx.fillStyle = `rgba(253,217,106,${(0.7 * toolAlpha).toFixed(3)})`;
      ctx.textAlign = "center"; ctx.textBaseline = "top";
      ctx.fillText(this.tool.name, this.x, this.y + iconR * 1.3);
      ctx.restore();
    }
  }
}

// ── Tronco CI/CD Pipeline ──
interface PipelineNode {
  x: number; y: number;
  label: string;
  r: number;
}

interface PipelineBranch {
  from: { x: number; y: number };
  to: { x: number; y: number };
  ctrl1: { x: number; y: number };
  ctrl2: { x: number; y: number };
}

interface PipelineData {
  mainNodes: PipelineNode[];
  mainPath: { x: number; y: number }[];
  branches: PipelineBranch[];
  rootBranches: PipelineBranch[];
}

const STAGE_LABELS = ["commit", "build", "test", "deploy", "monitor"];

function makePipeline(CX: number, _CY: number, W: number, H: number, isMobile: boolean): PipelineData {
  const nodeR = isMobile ? 4 : 6;

  const mainNodes: PipelineNode[] = STAGE_LABELS.map((label, i) => ({
    x: CX + (i % 2 === 0 ? -1 : 1) * W * 0.008,
    y: H * (0.88 - i * 0.135),
    label,
    r: nodeR,
  }));

  const mainPath = mainNodes.map(n => ({ x: n.x, y: n.y }));

  // Branches saindo dos nós como git branches
  const branches: PipelineBranch[] = [
    {
      from: mainNodes[1],
      to: { x: CX - W * 0.18, y: mainNodes[1].y - H * 0.05 },
      ctrl1: { x: CX - W * 0.06, y: mainNodes[1].y },
      ctrl2: { x: CX - W * 0.14, y: mainNodes[1].y - H * 0.02 },
    },
    {
      from: mainNodes[2],
      to: { x: CX + W * 0.2, y: mainNodes[2].y - H * 0.04 },
      ctrl1: { x: CX + W * 0.07, y: mainNodes[2].y },
      ctrl2: { x: CX + W * 0.15, y: mainNodes[2].y - H * 0.02 },
    },
    {
      from: mainNodes[3],
      to: { x: CX - W * 0.22, y: mainNodes[3].y + H * 0.02 },
      ctrl1: { x: CX - W * 0.08, y: mainNodes[3].y },
      ctrl2: { x: CX - W * 0.16, y: mainNodes[3].y + H * 0.01 },
    },
  ];

  // Copa branches — conectam o nó mais alto à copa
  const topNode = mainNodes[mainNodes.length - 1];
  const copaBranches: PipelineBranch[] = [
    {
      from: topNode,
      to: { x: CX - W * 0.28, y: H * 0.16 },
      ctrl1: { x: CX - W * 0.08, y: topNode.y - H * 0.05 },
      ctrl2: { x: CX - W * 0.2, y: H * 0.2 },
    },
    {
      from: topNode,
      to: { x: CX + W * 0.25, y: H * 0.17 },
      ctrl1: { x: CX + W * 0.06, y: topNode.y - H * 0.04 },
      ctrl2: { x: CX + W * 0.18, y: H * 0.2 },
    },
  ];

  // Root — trunk continues straight down to bottom edge, connecting to SiteTrunk SVG
  const base = mainNodes[0];
  const rootBranches: PipelineBranch[] = [
    {
      from: base,
      to: { x: CX, y: H * 1.01 },
      ctrl1: { x: CX + W * 0.003, y: H * 0.93 },
      ctrl2: { x: CX - W * 0.003, y: H * 0.98 },
    },
    {
      from: base,
      to: { x: CX - W * 0.15, y: H * 0.96 },
      ctrl1: { x: CX - W * 0.04, y: H * 0.9 },
      ctrl2: { x: CX - W * 0.1, y: H * 0.94 },
    },
    {
      from: base,
      to: { x: CX + W * 0.13, y: H * 0.97 },
      ctrl1: { x: CX + W * 0.03, y: H * 0.9 },
      ctrl2: { x: CX + W * 0.09, y: H * 0.95 },
    },
  ];

  return { mainNodes, mainPath, branches: [...branches, ...copaBranches], rootBranches };
}

function drawPipeline(
  ctx: CanvasRenderingContext2D,
  pipeline: PipelineData,
  alpha: number,
  now: number,
  isMobile: boolean
) {
  const pulse = 0.5 + 0.5 * Math.sin(now * 0.002);
  const lineW = isMobile ? 1.5 : 2.2;
  const nodeGoldA = alpha * (0.4 + 0.15 * pulse);
  const lineGoldA = alpha * (0.2 + 0.1 * pulse);
  const rootA = alpha * 0.15;

  ctx.save();

  // Main pipeline path
  const mp = pipeline.mainPath;
  if (mp.length >= 2) {
    ctx.beginPath();
    ctx.moveTo(mp[0].x, mp[0].y);
    for (let i = 1; i < mp.length; i++) {
      const prev = mp[i - 1];
      const curr = mp[i];
      const midY = (prev.y + curr.y) / 2;
      ctx.bezierCurveTo(prev.x, midY, curr.x, midY, curr.x, curr.y);
    }
    const grd = ctx.createLinearGradient(mp[0].x, mp[0].y, mp[mp.length - 1].x, mp[mp.length - 1].y);
    grd.addColorStop(0, `rgba(180,140,50,${(lineGoldA * 0.6).toFixed(3)})`);
    grd.addColorStop(0.5, `rgba(200,160,60,${lineGoldA.toFixed(3)})`);
    grd.addColorStop(1, `rgba(220,180,70,${(lineGoldA * 0.7).toFixed(3)})`);
    ctx.strokeStyle = grd;
    ctx.lineWidth = lineW;
    ctx.lineCap = "round";
    ctx.setLineDash([]);
    ctx.stroke();
  }

  // Side branches (git branches)
  for (const br of pipeline.branches) {
    ctx.beginPath();
    ctx.moveTo(br.from.x, br.from.y);
    ctx.bezierCurveTo(br.ctrl1.x, br.ctrl1.y, br.ctrl2.x, br.ctrl2.y, br.to.x, br.to.y);
    ctx.strokeStyle = `rgba(200,160,60,${(lineGoldA * 0.5).toFixed(3)})`;
    ctx.lineWidth = lineW * 0.7;
    ctx.lineCap = "round";
    ctx.setLineDash([4, 6]);
    ctx.stroke();

    // Tiny node at branch end
    ctx.beginPath(); ctx.arc(br.to.x, br.to.y, isMobile ? 2 : 3, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(253,217,106,${(nodeGoldA * 0.5).toFixed(3)})`;
    ctx.fill();
  }
  ctx.setLineDash([]);

  // Root branches
  for (const rb of pipeline.rootBranches) {
    ctx.beginPath();
    ctx.moveTo(rb.from.x, rb.from.y);
    ctx.bezierCurveTo(rb.ctrl1.x, rb.ctrl1.y, rb.ctrl2.x, rb.ctrl2.y, rb.to.x, rb.to.y);
    ctx.strokeStyle = `rgba(140,100,40,${rootA.toFixed(3)})`;
    ctx.lineWidth = lineW * 0.6;
    ctx.lineCap = "round";
    ctx.stroke();
  }

  // Pipeline nodes (stages)
  for (let i = 0; i < pipeline.mainNodes.length; i++) {
    const node = pipeline.mainNodes[i];
    const nr = node.r;
    const stagePulse = 0.5 + 0.5 * Math.sin(now * 0.003 + i * 1.2);

    // Glow
    const glowR = nr * 4;
    const glow = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, glowR);
    glow.addColorStop(0, `rgba(253,217,106,${(nodeGoldA * 0.3 * stagePulse).toFixed(3)})`);
    glow.addColorStop(1, "rgba(253,217,106,0)");
    ctx.beginPath(); ctx.arc(node.x, node.y, glowR, 0, Math.PI * 2); ctx.fillStyle = glow; ctx.fill();

    // Circle
    ctx.beginPath(); ctx.arc(node.x, node.y, nr, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(20,30,15,${(alpha * 0.7).toFixed(3)})`;
    ctx.fill();
    ctx.strokeStyle = `rgba(253,217,106,${nodeGoldA.toFixed(3)})`;
    ctx.lineWidth = Math.max(1, nr * 0.3);
    ctx.stroke();

    // Inner dot
    ctx.beginPath(); ctx.arc(node.x, node.y, nr * 0.4, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(253,217,106,${(nodeGoldA * (0.6 + 0.4 * stagePulse)).toFixed(3)})`;
    ctx.fill();

    // Label
    if (!isMobile) {
      const side = i % 2 === 0 ? -1 : 1;
      ctx.font = `${Math.max(8, 9)}px system-ui, sans-serif`;
      ctx.fillStyle = `rgba(200,170,100,${(alpha * 0.25).toFixed(3)})`;
      ctx.textAlign = side < 0 ? "right" : "left";
      ctx.textBaseline = "middle";
      ctx.fillText(node.label, node.x + side * (nr + 8), node.y);
    }
  }

  // Animated data packet traveling up the pipeline
  const cycleMs = 6000;
  const t = (now % cycleMs) / cycleMs;
  if (mp.length >= 2) {
    const totalLen = mp.length - 1;
    const segF = t * totalLen;
    const segIdx = Math.min(Math.floor(segF), totalLen - 1);
    const segT = segF - segIdx;
    const p0 = mp[segIdx];
    const p1 = mp[segIdx + 1];
    const px = p0.x + (p1.x - p0.x) * segT;
    const py = p0.y + (p1.y - p0.y) * segT;

    const packetR = isMobile ? 2 : 3;
    const packetGlow = ctx.createRadialGradient(px, py, 0, px, py, packetR * 5);
    packetGlow.addColorStop(0, `rgba(253,230,130,${(alpha * 0.5).toFixed(3)})`);
    packetGlow.addColorStop(1, "rgba(253,230,130,0)");
    ctx.beginPath(); ctx.arc(px, py, packetR * 5, 0, Math.PI * 2); ctx.fillStyle = packetGlow; ctx.fill();
    ctx.beginPath(); ctx.arc(px, py, packetR, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(253,230,130,${(alpha * 0.9).toFixed(3)})`;
    ctx.fill();
  }

  ctx.restore();
}

// ── Componente ──
interface PequiCanvasProps {
  intensity?: number;
}

export default function PequiCanvas({ intensity = 1 }: PequiCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const animRef = useRef(0);
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const dimRef = useRef({ W: 0, H: 0, CX: 0, CY: 0, dpr: 1 });
  const isMobileRef = useRef(false);

  const canopyRef = useRef<CanopyParticle[]>([]);
  const dustRef = useRef<AmbientDust[]>([]);
  const toolsRef = useRef<RisingTool[]>([]);
  const pipelineRef = useRef<PipelineData | null>(null);
  const copaRef = useRef({ cx: 0, cy: 0, rx: 0, ry: 0 });
  const lastToolRef = useRef(0);
  const toolIndexRef = useRef(0);

  const resize = useCallback(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const dpr = Math.min(2, window.devicePixelRatio || 1);
    const rect = container.getBoundingClientRect();
    const W = rect.width;
    const H = rect.height;
    canvas.width = W * dpr;
    canvas.height = H * dpr;
    canvas.style.width = `${W}px`;
    canvas.style.height = `${H}px`;

    isMobileRef.current = W < 768;
    dimRef.current = { W, H, CX: W / 2, CY: H / 2, dpr };

    pipelineRef.current = makePipeline(W / 2, H / 2, W, H, isMobileRef.current);

    const copaCX = W / 2;
    const copaCY = H * 0.22;
    const copaRX = W * 0.38;
    const copaRY = H * 0.16;
    copaRef.current = { cx: copaCX, cy: copaCY, rx: copaRX, ry: copaRY };

    const nCanopy = isMobileRef.current ? CANOPY_MOBILE : CANOPY_DESKTOP;
    canopyRef.current = Array.from({ length: nCanopy }, () =>
      new CanopyParticle(copaCX, copaCY, copaRX, copaRY)
    );

    const nDust = isMobileRef.current ? DUST_MOBILE : DUST_DESKTOP;
    dustRef.current = Array.from({ length: nDust }, () => new AmbientDust(W, H));

    toolsRef.current = [];
    lastToolRef.current = 0;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(container);

    let prevT = 0;

    function loop(now: number) {
      if (!ctx || !canvas) return;
      const dt = prevT ? now - prevT : 16;
      prevT = now;

      const { W, H, CX, dpr } = dimRef.current;
      const isMobile = isMobileRef.current;

      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // Wind
      const windX = Math.sin(now * 0.0003) * 2;

      // Background glow
      const bgGlow = ctx.createRadialGradient(CX, H * 0.25, 0, CX, H * 0.25, W * 0.5);
      bgGlow.addColorStop(0, "rgba(200,134,10,0.03)");
      bgGlow.addColorStop(1, "rgba(200,134,10,0)");
      ctx.fillStyle = bgGlow;
      ctx.fillRect(0, 0, W, H);

      // Dust
      for (const d of dustRef.current) { d.update(); d.draw(ctx); }

      // Pipeline trunk (CI/CD)
      const pipeline = pipelineRef.current;
      if (pipeline) {
        drawPipeline(ctx, pipeline, intensity, now, isMobile);
      }

      // Canopy
      for (const p of canopyRef.current) {
        p.update(now, windX);
        p.draw(ctx);
      }

      // Canopy glow
      const canopyGlow = ctx.createRadialGradient(CX, H * 0.22, 0, CX, H * 0.22, W * 0.4);
      canopyGlow.addColorStop(0, `rgba(253,217,106,${(0.08 * intensity).toFixed(3)})`);
      canopyGlow.addColorStop(0.5, `rgba(200,134,10,${(0.03 * intensity).toFixed(3)})`);
      canopyGlow.addColorStop(1, "rgba(200,134,10,0)");
      ctx.fillStyle = canopyGlow;
      ctx.beginPath(); ctx.arc(CX, H * 0.22, W * 0.4, 0, Math.PI * 2); ctx.fill();

      // Spawn rising tools — from roots up through pipeline to canopy
      const maxTools = isMobile ? MAX_FRUITS_MOBILE : MAX_FRUITS_DESKTOP;
      if (now - lastToolRef.current > FRUIT_INTERVAL && toolsRef.current.length < maxTools && pipeline) {
        const tool = TOOLS[toolIndexRef.current % TOOLS.length];
        toolIndexRef.current++;
        const copa = copaRef.current;
        const risingPath = [...pipeline.mainPath];
        toolsRef.current.push(new RisingTool(risingPath, tool, copa.cx, copa.cy, copa.rx, copa.ry));
        lastToolRef.current = now;
      }

      // Update & draw rising tools
      const tools = toolsRef.current;
      for (let i = tools.length - 1; i >= 0; i--) {
        tools[i].update(dt);
        tools[i].draw(ctx);
        if (tools[i].done) tools.splice(i, 1);
      }

      animRef.current = requestAnimationFrame(loop);
    }

    const onMouseMove = (e: MouseEvent) => { mouseRef.current = { x: e.clientX, y: e.clientY }; };
    const onTouchMove = (e: TouchEvent) => { if (e.touches[0]) mouseRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY }; };
    const onTouchEnd = () => { mouseRef.current = { x: -9999, y: -9999 }; };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("touchend", onTouchEnd);

    animRef.current = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(animRef.current);
      ro.disconnect();
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, [resize, intensity]);

  return (
    <div
      ref={containerRef}
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", overflow: "hidden" }}
    >
      <canvas
        ref={canvasRef}
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none", zIndex: 1 }}
      />
    </div>
  );
}
