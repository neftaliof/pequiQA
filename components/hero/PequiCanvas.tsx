"use client";

import { useEffect, useRef, useCallback } from "react";

// Paleta pequi refinada: dourados que destacam no escuro, semente em marrom
const CORES: [number, number, number][] = [
  [255, 248, 210], // polpa clara
  [255, 228, 140], // amarelo ouro
  [253, 210, 100], // dourado pequi
  [245, 185, 75],  // âmbar
  [255, 170, 60],  // laranja pequi
  [180, 130, 45],  // marrom dourado (casca)
  [90, 65, 25],    // semente escura
];

const N = 550;
const ESPINHOS = 18;
const TRAIL_MAX = 40;

// ── Ferramentas QA (órbita 3 elipses) ──
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

// Helper: rounded rect (fallback para navegadores sem roundRect)
function roundRectPath(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  w: number,
  h: number,
  rad: number
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
  {
    name: "Cypress",
    color: "#69D3A7",
    draw(ctx, x, y, r, a) {
      ctx.save();
      ctx.globalAlpha = a;
      ctx.translate(x, y);
      ctx.strokeStyle = "#69D3A7";
      ctx.lineWidth = Math.max(1.2, r * 0.32);
      ctx.lineCap = "round";
      ctx.beginPath();
      ctx.arc(0, 0, r * 0.88, Math.PI * 0.32, Math.PI * 1.68);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(0, 0, r * 0.2, 0, Math.PI * 2);
      ctx.fillStyle = "#69D3A7";
      ctx.fill();
      ctx.restore();
    },
  },
  {
    name: "Playwright",
    color: "#2EAD33",
    draw(ctx, x, y, r, a) {
      ctx.save();
      ctx.globalAlpha = a;
      ctx.translate(x, y);
      ctx.strokeStyle = "#2EAD33";
      ctx.lineWidth = Math.max(1, r * 0.18);
      ctx.beginPath();
      ctx.arc(0, 0, r * 0.92, 0, Math.PI * 2);
      ctx.stroke();
      const s = r * 0.5;
      ctx.fillStyle = "#2EAD33";
      ctx.beginPath();
      ctx.moveTo(-s * 0.55, -s * 0.82);
      ctx.lineTo(s * 0.95, 0);
      ctx.lineTo(-s * 0.55, s * 0.82);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    },
  },
  {
    name: "Postman",
    color: "#FF6C37",
    draw(ctx, x, y, r, a) {
      ctx.save();
      ctx.globalAlpha = a;
      ctx.translate(x, y);
      ctx.fillStyle = "rgba(255,108,55,0.12)";
      ctx.beginPath();
      ctx.arc(0, 0, r, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = "#FF6C37";
      ctx.lineWidth = Math.max(1, r * 0.16);
      ctx.stroke();
      const s = r * 0.52;
      ctx.strokeStyle = "#FF6C37";
      ctx.lineWidth = Math.max(1.2, r * 0.2);
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.beginPath();
      ctx.moveTo(-s * 0.92, 0);
      ctx.lineTo(s * 0.35, 0);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(s * 0.1, -s * 0.5);
      ctx.lineTo(s * 0.6, 0);
      ctx.lineTo(s * 0.1, s * 0.5);
      ctx.closePath();
      ctx.fillStyle = "#FF6C37";
      ctx.fill();
      ctx.restore();
    },
  },
  {
    name: "Robot",
    color: "#aaaaaa",
    draw(ctx, x, y, r, a) {
      ctx.save();
      ctx.globalAlpha = a;
      ctx.translate(x, y);
      const s = r * 0.72;
      const rad = r * 0.18;
      ctx.beginPath();
      roundRectPath(ctx, -s, -s, s * 2, s * 2, rad);
      ctx.fillStyle = "rgba(40,40,40,0.4)";
      ctx.fill();
      ctx.strokeStyle = "#b0b0b0";
      ctx.lineWidth = Math.max(1, r * 0.16);
      ctx.stroke();
      const eyeR = r * 0.14;
      [-s * 0.4, s * 0.4].forEach((ox) => {
        ctx.beginPath();
        ctx.arc(ox, -s * 0.08, eyeR, 0, Math.PI * 2);
        ctx.fillStyle = "#00d4ff";
        ctx.fill();
      });
      ctx.beginPath();
      ctx.moveTo(-s * 0.38, s * 0.4);
      ctx.lineTo(s * 0.38, s * 0.4);
      ctx.strokeStyle = "#b0b0b0";
      ctx.lineWidth = Math.max(0.8, r * 0.12);
      ctx.lineCap = "round";
      ctx.stroke();
      ctx.restore();
    },
  },
  {
    name: "Selenium",
    color: "#43B02A",
    draw(ctx, x, y, r, a) {
      ctx.save();
      ctx.globalAlpha = a;
      ctx.translate(x, y);
      const s = r * 0.72;
      const lw = Math.max(1.2, r * 0.26);
      ctx.strokeStyle = "#43B02A";
      ctx.lineWidth = lw;
      ctx.lineCap = "round";
      ctx.beginPath();
      ctx.arc(-s * 0.08, -s * 0.28, s * 0.52, Math.PI * 1.05, Math.PI * 2.05);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(s * 0.08, s * 0.28, s * 0.52, Math.PI * 0.05, Math.PI * 1.05);
      ctx.stroke();
      ctx.restore();
    },
  },
  {
    name: "k6",
    color: "#7D64FF",
    draw(ctx, x, y, r, a) {
      ctx.save();
      ctx.globalAlpha = a;
      ctx.translate(x, y);
      const hexR = r * 0.92;
      ctx.beginPath();
      for (let i = 0; i < 6; i++) {
        const ang = (i / 6) * Math.PI * 2 - Math.PI / 6;
        const px = Math.cos(ang) * hexR;
        const py = Math.sin(ang) * hexR;
        i === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
      }
      ctx.closePath();
      ctx.strokeStyle = "#7D64FF";
      ctx.lineWidth = Math.max(1, r * 0.18);
      ctx.stroke();
      ctx.font = `bold ${Math.max(8, r * 0.58)}px system-ui, sans-serif`;
      ctx.fillStyle = "#7D64FF";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText("k6", 0, 0);
      ctx.restore();
    },
  },
  {
    name: "Jira",
    color: "#0052CC",
    draw(ctx, x, y, r, a) {
      ctx.save();
      ctx.globalAlpha = a;
      ctx.translate(x, y);
      const s = r * 0.76;
      const g = ctx.createLinearGradient(-s, 0, s, 0);
      g.addColorStop(0, "#2684FF");
      g.addColorStop(1, "#0052CC");
      ctx.beginPath();
      ctx.moveTo(0, -s);
      ctx.quadraticCurveTo(s, -s, s, 0);
      ctx.quadraticCurveTo(s, s * 0.68, 0, s * 0.68);
      ctx.quadraticCurveTo(-s * 0.5, s * 0.68, -s * 0.5, s * 0.2);
      ctx.strokeStyle = g;
      ctx.lineWidth = Math.max(1.2, r * 0.24);
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.stroke();
      ctx.restore();
    },
  },
  {
    name: "OWASP",
    color: "#F5A623",
    draw(ctx, x, y, r, a) {
      ctx.save();
      ctx.globalAlpha = a;
      ctx.translate(x, y);
      const s = r * 0.88;
      ctx.beginPath();
      ctx.moveTo(0, -s);
      ctx.lineTo(s, -s * 0.38);
      ctx.lineTo(s, s * 0.18);
      ctx.quadraticCurveTo(s, s * 0.88, 0, s);
      ctx.quadraticCurveTo(-s, s * 0.88, -s, s * 0.18);
      ctx.lineTo(-s, -s * 0.38);
      ctx.closePath();
      ctx.fillStyle = "rgba(245,166,35,0.12)";
      ctx.fill();
      ctx.strokeStyle = "#F5A623";
      ctx.lineWidth = Math.max(1, r * 0.18);
      ctx.stroke();
      const ly = s * 0.12;
      ctx.beginPath();
      ctx.arc(0, ly, r * 0.2, Math.PI, Math.PI * 2);
      ctx.strokeStyle = "#F5A623";
      ctx.lineWidth = Math.max(0.8, r * 0.14);
      ctx.stroke();
      const lw = r * 0.48;
      const lh = r * 0.32;
      ctx.beginPath();
      roundRectPath(ctx, -lw / 2, ly, lw, lh, r * 0.08);
      ctx.fillStyle = "#F5A623";
      ctx.fill();
      ctx.restore();
    },
  },
];

// Órbitas — 3 elipses, velocidades diferentes (mais próximas do logo)
const ORBITS = [
  { r: 0.17, speed: 0.28, tools: [0, 4] },
  { r: 0.24, speed: -0.18, tools: [1, 3, 6] },
  { r: 0.31, speed: 0.12, tools: [2, 5, 7] },
];

interface PequiCanvasProps {
  intensity?: number;
}

class Semente {
  i: number;
  frac: number;
  spiralA: number;
  spiralR: number;
  rgb: [number, number, number];
  baseSize: number;
  size: number;
  alpha: number;
  targetAlpha: number;
  phase: number;
  phaseV: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  layer: number;
  pequiA: number;
  spawned?: boolean;
  axisBoost: number;

  constructor(i: number) {
    this.i = i;
    this.frac = i / N;
    const angle = this.frac * Math.PI * 2 * 137.508;
    const r = Math.sqrt(this.frac);
    this.spiralA = angle;
    this.spiralR = r;

    const ci = Math.floor(Math.random() * CORES.length);
    this.rgb = CORES[ci];
    this.baseSize = 0.5 + Math.random() * 1.3;
    this.size = this.baseSize;
    this.alpha = 0;
    this.targetAlpha = 0.12 + Math.random() * 0.26;
    this.phase = Math.random() * Math.PI * 2;
    this.phaseV = 0.006 + Math.random() * 0.014;

    this.x = 0;
    this.y = 0;
    this.vx = 0;
    this.vy = 0;

    this.layer = Math.floor(Math.random() * 6);
    this.pequiA = this.frac * Math.PI * 2 * (3 + this.layer * 0.7);
    this.axisBoost = 0;
  }

  getFloatPos(CX: number, CY: number, W: number, H: number) {
    const minWH = Math.min(W, H);
    const rx = minWH * (0.28 + 0.14 * this.spiralR);
    const ry = minWH * (0.22 + 0.12 * this.spiralR);
    const drift = this.phase * 0.12;
    const a = this.spiralA + drift;

    const baseR = this.spiralR;
    const cosA = Math.cos(a);
    const sinA = Math.sin(a);
    const absCos = Math.abs(cosA);
    const absSin = Math.abs(sinA);

    // Espessura da cruz (0 = linha finíssima, 1 = círculo cheio)
    const crossThickness = 0.18;

    let dx: number;
    let dy: number;

    if (absCos >= absSin) {
      // Braços horizontais: estica no X, comprime bem no Y
      dx = cosA * rx * baseR;
      dy = sinA * rx * baseR * crossThickness;
    } else {
      // Braços verticais: estica no Y, comprime bem no X
      dx = cosA * ry * baseR * crossThickness;
      dy = sinA * ry * baseR;
    }

    return {
      x: CX + dx,
      y: CY + dy,
    };
  }

  getPequiPos(CX: number, CY: number, W: number, H: number) {
    const scale = Math.min(W, H);
    const layerR = (0.05 + this.layer * 0.04) * scale;
    const spines = 10 + this.layer * 3;
    const spineAmp = layerR * (0.25 - this.layer * 0.03);
    const modR = layerR + Math.sin(this.pequiA * spines) * spineAmp;
    return {
      x: CX + Math.cos(this.pequiA) * modR,
      y: CY + Math.sin(this.pequiA) * modR * 0.72,
    };
  }

  update(
    conv: number,
    CX: number,
    CY: number,
    W: number,
    H: number,
    mouseX: number,
    mouseY: number,
    intensity: number
  ) {
    this.phase += this.phaseV;

    const fp = this.getFloatPos(CX, CY, W, H);
    const pp = this.getPequiPos(CX, CY, W, H);

    const tx = fp.x * (1 - conv) + pp.x * conv;
    const ty = fp.y * (1 - conv) + pp.y * conv;

    let repX = 0,
      repY = 0;
    if (conv < 0.5) {
      const dx = this.x - mouseX;
      const dy = this.y - mouseY;
      const d = Math.sqrt(dx * dx + dy * dy) || 1;
      const rR = 130;
      if (d < rR) {
        const f = (1 - d / rR) * 2.2 * (1 - conv);
        repX = (dx / d) * f;
        repY = (dy / d) * f;
      }
    }

    if (!this.spawned) {
      this.x = tx + (Math.random() - 0.5) * W * 0.5;
      this.y = ty + (Math.random() - 0.5) * H * 0.5;
      this.spawned = true;
    }

    const spring = 0.018 + conv * 0.06;
    this.vx += (tx - this.x) * spring + repX;
    this.vy += (ty - this.y) * spring + repY;
    this.vx *= 0.88;
    this.vy *= 0.88;
    this.x += this.vx;
    this.y += this.vy;

    // Realça partículas próximas aos eixos horizontal/vertical (cruz sutil tipo plano-piloto)
    const axDx = this.x - CX;
    const axDy = this.y - CY;
    if (axDx !== 0 || axDy !== 0) {
      const theta = Math.atan2(axDy, axDx);
      const axis = Math.abs(Math.cos(theta * 2)); // 1 em cima/baixo/esquerda/direita, 0 nas diagonais
      this.axisBoost += (axis - this.axisBoost) * 0.08;
    }

    const floatA = this.targetAlpha * (0.55 + 0.45 * Math.sin(this.phase));
    const pequiA = 0.32 + this.layer * 0.08;
    const convDamp = 1 - conv * 0.3;
    const ta = (floatA * (1 - conv) + pequiA * conv) * convDamp;
    this.alpha += (ta - this.alpha) * 0.055;

    const pequiSize = this.baseSize * (1.1 + (5 - this.layer) * 0.22);
    const baseSize = this.baseSize * (0.8 + conv * 0.4);
    this.size = (baseSize * (1 - conv) + pequiSize * conv) * intensity * convDamp;
  }

  draw(ctx: CanvasRenderingContext2D, intensity: number, isMobile = false) {
    if (this.alpha < 0.01) return;
    const [r, g, b] = this.rgb;
    const axisMul = 1 + 0.5 * (this.axisBoost || 0);
    const a = this.alpha * intensity * axisMul;
    const sizeMul = isMobile ? 0.6 : 0.9;
    const haloMul = (isMobile ? 1.6 : 2.6) * (0.9 + 0.25 * (this.axisBoost || 0));

    const hr = this.size * haloMul;
    const grd = ctx.createRadialGradient(
      this.x,
      this.y,
      0,
      this.x,
      this.y,
      hr
    );
    grd.addColorStop(0, `rgba(${r},${g},${b},${(a * 0.28).toFixed(3)})`);
    grd.addColorStop(1, `rgba(${r},${g},${b},0)`);
    ctx.beginPath();
    ctx.arc(this.x, this.y, hr, 0, Math.PI * 2);
    ctx.fillStyle = grd;
    ctx.fill();

    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size * sizeMul, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(${r},${g},${b},${a.toFixed(3)})`;
    ctx.fill();
  }
}

class Espinho {
  angle: number;
  len: number;
  alpha: number;
  wobble: number;
  wobbleV: number;

  constructor(i: number, total: number) {
    this.angle = (i / total) * Math.PI * 2;
    this.len = 0;
    this.alpha = 0;
    this.wobble = Math.random() * Math.PI * 2;
    this.wobbleV = 0.02 + Math.random() * 0.02;
  }

  update(conv: number, W: number, H: number) {
    this.wobble += this.wobbleV;
    const base = Math.min(W, H) * 0.265;
    const wobble = Math.sin(this.wobble) * 0.08;
    this.len += (base * conv * (1 + wobble) - this.len) * 0.07;
    this.alpha += (conv * 0.35 - this.alpha) * 0.06;
  }

  draw(ctx: CanvasRenderingContext2D, CX: number, CY: number, W: number, H: number) {
    if (this.alpha < 0.01 || this.len < 1) return;

    const innerR = Math.min(W, H) * 0.06;
    const x1 = CX + Math.cos(this.angle) * innerR;
    const y1 = CY + Math.sin(this.angle) * innerR * 0.72;
    const x2 = CX + Math.cos(this.angle) * this.len;
    const y2 = CY + Math.sin(this.angle) * this.len * 0.72;

    const grd = ctx.createLinearGradient(x1, y1, x2, y2);
    grd.addColorStop(0, `rgba(253,217,106,${this.alpha.toFixed(3)})`);
    grd.addColorStop(0.4, `rgba(200,134,10,${(this.alpha * 0.7).toFixed(3)})`);
    grd.addColorStop(1, "rgba(200,134,10,0)");

    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = grd;
    ctx.lineWidth = 1.2;
    ctx.stroke();
  }
}

interface TrailPoint {
  x: number;
  y: number;
  a: number;
  r: number;
}

export default function PequiCanvas({ intensity = 1 }: PequiCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const mouseRef = useRef({ x: -9999, y: -9999 });
  const convergeRef = useRef(0);
  const targetConvergeRef = useRef(0);
  const trailRef = useRef<TrailPoint[]>([]);
  const sementesRef = useRef<Semente[]>([]);
  const espinhosRef = useRef<Espinho[]>([]);
  const dimensionsRef = useRef({ W: 0, H: 0, CX: 0, CY: 0, dpr: 1 });
  const isMobileRef = useRef(false);
  const tRef = useRef(0);

  const resize = useCallback(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container || !canvas.getContext("2d")) return;

    const dpr = Math.min(2, window.devicePixelRatio || 1);
    const rect = container.getBoundingClientRect();
    const W = rect.width;
    const H = rect.height;

    canvas.width = W * dpr;
    canvas.height = H * dpr;
    canvas.style.width = `${W}px`;
    canvas.style.height = `${H}px`;

    isMobileRef.current = W < 768;
    dimensionsRef.current = {
      W,
      H,
      CX: W / 2,
      CY: H / 2,
      dpr,
    };

    if (sementesRef.current.length === 0) {
      sementesRef.current = Array.from({ length: N }, (_, i) => new Semente(i));
      espinhosRef.current = Array.from(
        { length: ESPINHOS },
        (_, i) => new Espinho(i, ESPINHOS)
      );
    }
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

    const addTrail = (x: number, y: number) => {
      trailRef.current.push({ x, y, a: 0.5, r: 3 });
      while (trailRef.current.length > TRAIL_MAX) trailRef.current.shift();
    };

    const updateDrawTrail = () => {
      const trail = trailRef.current;
      for (let i = trail.length - 1; i >= 0; i--) {
        trail[i].a *= 0.85;
        trail[i].r *= 0.93;
        if (trail[i].a < 0.01) {
          trail.splice(i, 1);
          continue;
        }
        const p = trail[i];
        const grd = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 3);
        grd.addColorStop(0, `rgba(240,165,0,${p.a.toFixed(3)})`);
        grd.addColorStop(1, "rgba(240,165,0,0)");
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r * 3, 0, Math.PI * 2);
        ctx.fillStyle = grd;
        ctx.fill();
      }
    };

    const drawOrbits = (tSec: number) => {
      const { W, H, CX, CY } = dimensionsRef.current;
      const minWH = Math.min(W, H);
      const isMobile = isMobileRef.current;
      const scale = isMobile ? 0.8 : 1;

      // Pulso de visibilidade: órbitas aparecem e somem suavemente ao longo do tempo (~10s ciclo)
      const orbitVis = 0.18 + 0.72 * (0.5 + 0.5 * Math.sin(tSec * 0.6));
      if (orbitVis < 0.05) return;

      ORBITS.forEach((orbit, oi) => {
        const orbitR = orbit.r * minWH * scale;

        orbit.tools.forEach((toolIdx, ti) => {
          const tool = TOOLS[toolIdx];
          if (!tool) return;
          const offset = (ti / Math.max(1, orbit.tools.length)) * Math.PI * 2;
          const angle = tSec * orbit.speed + offset;
          const ox = CX + Math.cos(angle) * orbitR;
          const oy = CY + Math.sin(angle) * orbitR * 0.65;
          const depth = (Math.sin(angle) + 1) / 2;
          const baseR = isMobile ? 6 : 7;
          const iconR = (baseR + oi * 2.4) * (0.55 + depth * 0.35) * scale;
          const iconA = (0.35 + depth * 0.55) * orbitVis;

          const halo = ctx.createRadialGradient(ox, oy, 0, ox, oy, iconR * 2.2);
          halo.addColorStop(0, `rgba(253,217,106,${(0.12 * orbitVis).toFixed(3)})`);
          halo.addColorStop(1, "rgba(253,217,106,0)");
          ctx.beginPath();
          ctx.arc(ox, oy, iconR * 2.2, 0, Math.PI * 2);
          ctx.fillStyle = halo;
          ctx.fill();

          ctx.beginPath();
          ctx.arc(ox, oy, iconR * 1.1, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(15,25,12,${(0.85 * orbitVis).toFixed(3)})`;
          ctx.fill();
          ctx.strokeStyle = `rgba(253,217,106,${(0.5 * orbitVis).toFixed(3)})`;
          ctx.lineWidth = 1;
          ctx.stroke();

          tool.draw(ctx, ox, oy, iconR, iconA);

          if (depth > 0.6) {
            ctx.save();
            ctx.font = `${Math.max(10, 11 * scale)}px sans-serif`;
            ctx.fillStyle = `rgba(253,217,106,${(0.9 * orbitVis).toFixed(3)})`;
            ctx.textAlign = "center";
            ctx.textBaseline = "top";
            ctx.fillText(tool.name, ox, oy + iconR * 1.15);
            ctx.restore();
          }
        });
      });
    };

    const drawPequiShell = (conv: number) => {
      const a = conv * 0.6;
      if (a < 0.05) return;
      const { W, H, CX, CY } = dimensionsRef.current;
      const minWH = Math.min(W, H);
      const r = minWH * 0.22;
      const top = r * 0.9;
      const mid = r * 0.55;
      const bottom = r * 0.95;

      ctx.save();
      ctx.beginPath();
      ctx.moveTo(CX, CY - top);
      ctx.bezierCurveTo(
        CX + r * 0.32,
        CY - top * 1.02,
        CX + r * 0.75,
        CY - mid * 1.05,
        CX + r * 0.9,
        CY - mid * 0.3
      );
      ctx.bezierCurveTo(
        CX + r * 1.0,
        CY + mid * 0.15,
        CX + r * 0.9,
        CY + bottom * 0.45,
        CX + r * 0.4,
        CY + bottom
      );
      ctx.bezierCurveTo(
        CX + r * 0.18,
        CY + bottom * 1.05,
        CX - r * 0.18,
        CY + bottom * 1.05,
        CX - r * 0.4,
        CY + bottom
      );
      ctx.bezierCurveTo(
        CX - r * 0.9,
        CY + bottom * 0.45,
        CX - r * 1.0,
        CY + mid * 0.15,
        CX - r * 0.9,
        CY - mid * 0.3
      );
      ctx.bezierCurveTo(
        CX - r * 0.75,
        CY - mid * 1.05,
        CX - r * 0.32,
        CY - top * 1.02,
        CX,
        CY - top
      );

      const strokeA = (0.55 + 0.45 * Math.sin(tRef.current * 0.0018)) * a;
      ctx.strokeStyle = `rgba(253,217,106,${strokeA.toFixed(3)})`;
      ctx.lineWidth = 1.4;
      ctx.shadowColor = `rgba(240,165,0,${(strokeA * 0.6).toFixed(3)})`;
      ctx.shadowBlur = 10;
      ctx.stroke();
      ctx.restore();
    };

    const drawPolpa = (conv: number) => {
      const a = conv * 0.5;
      if (a < 0.01) return;
      const { W, H, CX, CY } = dimensionsRef.current;
      const minWH = Math.min(W, H);
      const radii = [0.038, 0.078, 0.13, 0.195].map((r) => r * minWH);
      const cols: [number, number, number][] = [
        [253, 217, 106],
        [240, 165, 0],
        [200, 134, 10],
        [45, 100, 20],
      ];
      const pulse = 0.5 + 0.5 * Math.sin(tRef.current * 0.002);

      for (let i = 0; i < radii.length; i++) {
        const r = radii[i] * (1 + pulse * 0.04 * (i + 1));
        const [cr, cg, cb] = cols[i];
        const ca = a * (0.55 - i * 0.1);
        ctx.beginPath();
        ctx.ellipse(CX, CY, r, r * 0.72, 0, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(${cr},${cg},${cb},${ca.toFixed(3)})`;
        ctx.lineWidth = 1 + (1 - i * 0.2);
        ctx.stroke();
      }
    };

    const drawCore = (conv: number) => {
      const a = conv * 0.8;
      if (a < 0.01) return;
      const { W, H, CX, CY } = dimensionsRef.current;
      const baseR = Math.min(W, H) * 0.075;
      const r =
        baseR *
        (1 + 0.1 * Math.sin(tRef.current * 0.003));

      // Polpa amarela ao redor da semente
      const grd = ctx.createRadialGradient(CX, CY, 0, CX, CY, r);
      grd.addColorStop(0, `rgba(255,242,205,${(a * 0.7).toFixed(3)})`);
      grd.addColorStop(0.55, `rgba(245,190,80,${(a * 0.6).toFixed(3)})`);
      grd.addColorStop(1, "rgba(200,134,10,0)");
      ctx.beginPath();
      ctx.arc(CX, CY, r, 0, Math.PI * 2);
      ctx.fillStyle = grd;
      ctx.fill();

      // Anel de espinhos (marrom em volta da semente)
      const ringR = r * 0.62;
      const ringW = r * 0.26;
      ctx.save();
      ctx.beginPath();
      ctx.arc(CX, CY, ringR, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(120,70,30,${(a * 0.85).toFixed(3)})`;
      ctx.lineWidth = ringW;
      ctx.stroke();

      // Espinhos radiais suaves
      const spikes = 26;
      ctx.strokeStyle = `rgba(90,50,20,${(a * 0.7).toFixed(3)})`;
      ctx.lineWidth = 1;
      for (let i = 0; i < spikes; i++) {
        const ang = (i / spikes) * Math.PI * 2;
        const r1 = ringR - ringW * 0.6;
        const r2 = ringR + ringW * 0.5;
        ctx.beginPath();
        ctx.moveTo(CX + Math.cos(ang) * r1, CY + Math.sin(ang) * r1);
        ctx.lineTo(CX + Math.cos(ang) * r2, CY + Math.sin(ang) * r2);
        ctx.stroke();
      }
      ctx.restore();

      // Conjunto de sementinhas no centro (em vez de um "olho" único)
      const seedR = r * 0.18;
      const seeds = [
        { ox: 0, oy: -seedR * 0.4, rot: 0.25 },
        { ox: seedR * 0.7, oy: seedR * 0.4, rot: 0.4 },
        { ox: -seedR * 0.7, oy: seedR * 0.4, rot: 0.1 },
      ];
      seeds.forEach((s) => {
        ctx.save();
        ctx.translate(CX + s.ox, CY + s.oy);
        ctx.rotate(s.rot);
        ctx.beginPath();
        ctx.ellipse(0, 0, seedR * 0.8, seedR * 1.15, 0, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(252,249,242,${(0.85 * a).toFixed(3)})`;
        ctx.fill();
        ctx.beginPath();
        ctx.ellipse(0, 0, seedR * 0.8, seedR * 1.15, 0, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(160,120,60,${(0.7 * a).toFixed(3)})`;
        ctx.lineWidth = 0.9;
        ctx.stroke();
        ctx.restore();
      });
    };

    function loop(now: number) {
      if (!ctx || !container || !canvas) return;
      tRef.current = now;
      const { W, H, CX, CY, dpr } = dimensionsRef.current;
      const mouse = mouseRef.current;

      const rect = container.getBoundingClientRect();
      const mx = mouse.x >= 0 ? mouse.x - rect.left : -9999;
      const my = mouse.y >= 0 ? mouse.y - rect.top : -9999;

      let converge = convergeRef.current;

      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const dx = mx - CX;
      const dy = my - CY;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const zoneRadius = Math.min(W, H) * (isMobileRef.current ? 0.35 : 0.28);
      const newTarget = dist < zoneRadius && mx > 0 ? 1 : 0;
      targetConvergeRef.current = newTarget;
      converge += (newTarget - converge) * 0.04;
      convergeRef.current = converge;

      const bg = ctx.createRadialGradient(
        CX,
        CY,
        0,
        CX,
        CY,
        Math.max(W, H) * 0.9
      );
      const cv = 0.06 + converge * 0.06;
      bg.addColorStop(0, `rgba(22,18,10,${cv})`);
      bg.addColorStop(0.5, `rgba(12,10,6,${cv * 0.7})`);
      bg.addColorStop(1, "rgba(5,4,3,0)");
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, W, H);

      if (mx > 0) addTrail(mx, my);

      drawPequiShell(converge);
      drawPolpa(converge);
      for (const s of sementesRef.current) {
        s.update(
          converge,
          CX,
          CY,
          W,
          H,
          mx,
          my,
          intensity
        );
        s.draw(ctx, intensity, isMobileRef.current);
      }

      updateDrawTrail();
      drawCore(converge);

      animRef.current = requestAnimationFrame(loop);
    }

    const onMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    const onTouchMove = (e: TouchEvent) => {
      // Não usar preventDefault: permite scroll da página no mobile
      if (e.touches[0]) {
        mouseRef.current = {
          x: e.touches[0].clientX,
          y: e.touches[0].clientY,
        };
      }
    };

    const onTouchStart = (e: TouchEvent) => {
      if (e.touches[0]) {
        mouseRef.current = {
          x: e.touches[0].clientX,
          y: e.touches[0].clientY,
        };
      }
    };

    const onTouchEnd = () => {
      mouseRef.current = { x: -9999, y: -9999 };
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("touchstart", onTouchStart);
    window.addEventListener("touchend", onTouchEnd);

    animRef.current = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(animRef.current);
      ro.disconnect();
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, [resize, intensity]);

  return (
    <div
      ref={containerRef}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        overflow: "hidden",
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />
    </div>
  );
}
