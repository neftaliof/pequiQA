"use client";

import { useEffect, useRef, useCallback } from "react";

const CORES: [number, number, number][] = [
  [200, 134, 10],
  [240, 165, 0],
  [253, 217, 106],
  [45, 100, 20],
  [28, 68, 12],
  [160, 110, 18],
];

const N = 700;
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

const TOOLS: Tool[] = [
  {
    name: "Cypress",
    color: "#69D3A7",
    draw(ctx, x, y, r, a) {
      ctx.save();
      ctx.globalAlpha = a;
      ctx.translate(x, y);
      ctx.beginPath();
      ctx.arc(0, 0, r, Math.PI * 0.35, Math.PI * 1.65);
      ctx.strokeStyle = "#69D3A7";
      ctx.lineWidth = r * 0.38;
      ctx.lineCap = "round";
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(0, 0, r * 0.18, 0, Math.PI * 2);
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
      ctx.beginPath();
      ctx.arc(0, 0, r, 0, Math.PI * 2);
      ctx.strokeStyle = "#2EAD33";
      ctx.lineWidth = r * 0.2;
      ctx.stroke();
      const s = r * 0.45;
      ctx.beginPath();
      ctx.moveTo(-s * 0.5, -s * 0.85);
      ctx.lineTo(s * 1.0, 0);
      ctx.lineTo(-s * 0.5, s * 0.85);
      ctx.closePath();
      ctx.fillStyle = "#2EAD33";
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
      ctx.beginPath();
      ctx.arc(0, 0, r, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(255,108,55,0.15)";
      ctx.fill();
      ctx.strokeStyle = "#FF6C37";
      ctx.lineWidth = r * 0.18;
      ctx.stroke();
      const s = r * 0.5;
      ctx.beginPath();
      ctx.moveTo(-s, 0);
      ctx.lineTo(s * 0.4, 0);
      ctx.strokeStyle = "#FF6C37";
      ctx.lineWidth = r * 0.22;
      ctx.lineCap = "round";
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(s * 0.05, -s * 0.45);
      ctx.lineTo(s * 0.55, 0);
      ctx.lineTo(s * 0.05, s * 0.45);
      ctx.strokeStyle = "#FF6C37";
      ctx.lineWidth = r * 0.22;
      ctx.lineJoin = "round";
      ctx.lineCap = "round";
      ctx.stroke();
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
      const s = r * 0.75;
      const roundRect = (ctx as CanvasRenderingContext2D & { roundRect?: (x: number, y: number, w: number, h: number, rad: number) => void }).roundRect;
      if (roundRect) {
        roundRect.call(ctx, -s, -s, s * 2, s * 2, r * 0.2);
      } else {
        ctx.rect(-s, -s, s * 2, s * 2);
      }
      ctx.fillStyle = "rgba(50,50,50,0.3)";
      ctx.fill();
      ctx.strokeStyle = "#aaa";
      ctx.lineWidth = r * 0.18;
      ctx.stroke();
      [-s * 0.38, s * 0.38].forEach((ox) => {
        ctx.beginPath();
        ctx.arc(ox, -s * 0.1, r * 0.16, 0, Math.PI * 2);
        ctx.fillStyle = "#00cfff";
        ctx.fill();
      });
      ctx.beginPath();
      ctx.moveTo(-s * 0.35, s * 0.38);
      ctx.lineTo(s * 0.35, s * 0.38);
      ctx.strokeStyle = "#aaa";
      ctx.lineWidth = r * 0.15;
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
      const s = r * 0.7;
      ctx.beginPath();
      ctx.arc(-s * 0.1, -s * 0.3, s * 0.55, Math.PI * 1.1, Math.PI * 2.1);
      ctx.strokeStyle = "#43B02A";
      ctx.lineWidth = r * 0.3;
      ctx.lineCap = "round";
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(s * 0.1, s * 0.3, s * 0.55, Math.PI * 0.1, Math.PI * 1.1);
      ctx.strokeStyle = "#43B02A";
      ctx.lineWidth = r * 0.3;
      ctx.lineCap = "round";
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
      ctx.beginPath();
      for (let i = 0; i < 6; i++) {
        const ang = (i / 6) * Math.PI * 2 - Math.PI / 6;
        i === 0
          ? ctx.moveTo(Math.cos(ang) * r, Math.sin(ang) * r)
          : ctx.lineTo(Math.cos(ang) * r, Math.sin(ang) * r);
      }
      ctx.closePath();
      ctx.strokeStyle = "#7D64FF";
      ctx.lineWidth = r * 0.2;
      ctx.stroke();
      ctx.font = `bold ${r * 0.65}px sans-serif`;
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
      const s = r * 0.75;
      const g = ctx.createLinearGradient(-s, 0, s, 0);
      g.addColorStop(0, "#2684FF");
      g.addColorStop(1, "#0052CC");
      ctx.beginPath();
      ctx.moveTo(0, -s);
      ctx.quadraticCurveTo(s, -s, s, 0);
      ctx.quadraticCurveTo(s, s * 0.7, 0, s * 0.7);
      ctx.quadraticCurveTo(-s * 0.5, s * 0.7, -s * 0.5, s * 0.2);
      ctx.strokeStyle = g;
      ctx.lineWidth = r * 0.28;
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
      const s = r * 0.85;
      ctx.beginPath();
      ctx.moveTo(0, -s);
      ctx.lineTo(s, -s * 0.4);
      ctx.lineTo(s, s * 0.2);
      ctx.quadraticCurveTo(s, s * 0.9, 0, s);
      ctx.quadraticCurveTo(-s, s * 0.9, -s, s * 0.2);
      ctx.lineTo(-s, -s * 0.4);
      ctx.closePath();
      ctx.strokeStyle = "#F5A623";
      ctx.lineWidth = r * 0.2;
      ctx.stroke();
      ctx.fillStyle = "rgba(245,166,35,0.1)";
      ctx.fill();
      ctx.beginPath();
      ctx.arc(0, s * 0.1, r * 0.22, Math.PI, Math.PI * 2);
      ctx.strokeStyle = "#F5A623";
      ctx.lineWidth = r * 0.18;
      ctx.stroke();
      const roundRect = (ctx as CanvasRenderingContext2D & { roundRect?: (x: number, y: number, w: number, h: number, rad: number) => void }).roundRect;
      if (roundRect) {
        roundRect.call(ctx, -r * 0.25, s * 0.1, r * 0.5, r * 0.35, r * 0.08);
      } else {
        ctx.rect(-r * 0.25, s * 0.1, r * 0.5, r * 0.35);
      }
      ctx.fillStyle = "#F5A623";
      ctx.fill();
      ctx.restore();
    },
  },
];

// Órbitas — 3 elipses, velocidades diferentes
const ORBITS = [
  { r: 0.22, speed: 0.28, tools: [0, 4] },
  { r: 0.32, speed: -0.18, tools: [1, 3, 6] },
  { r: 0.42, speed: 0.12, tools: [2, 5, 7] },
];

type OrbitIconType = "sun" | "pequi" | "cypress" | "playwright" | "postman" | "cross";

const ORBIT_ICON_TYPES: OrbitIconType[] = [
  "sun",
  "pequi",
  "cypress",
  "playwright",
  "postman",
  "cross",
];

interface OrbitIconDef {
  type: OrbitIconType;
  baseAngle: number;
  spiralR: number;
}

const ORBIT_ICONS: OrbitIconDef[] = (() => {
  const arr: OrbitIconDef[] = [];
  for (let i = 0; i < 28; i++) {
    const frac = (i + 0.5) / 28;
    arr.push({
      type: ORBIT_ICON_TYPES[i % ORBIT_ICON_TYPES.length],
      baseAngle: frac * Math.PI * 2 * 137.508,
      spiralR: 0.22 + frac * 0.72,
    });
  }
  return arr;
})();

function drawOrbitIcon(
  ctx: CanvasRenderingContext2D,
  type: OrbitIconType,
  x: number,
  y: number,
  size: number,
  alpha: number
) {
  const gold = `rgba(253,217,106,${alpha.toFixed(3)})`;
  const amber = `rgba(240,165,0,${alpha.toFixed(3)})`;
  ctx.strokeStyle = amber;
  ctx.fillStyle = gold;
  ctx.lineWidth = Math.max(1, size * 0.12);
  ctx.lineCap = "round";
  ctx.lineJoin = "round";

  switch (type) {
    case "sun": {
      ctx.beginPath();
      ctx.arc(x, y, size * 0.35, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
      for (let r = 0; r < 8; r++) {
        const a = (r / 8) * Math.PI * 2;
        ctx.beginPath();
        ctx.moveTo(x + Math.cos(a) * size * 0.4, y + Math.sin(a) * size * 0.4);
        ctx.lineTo(x + Math.cos(a) * size * 0.85, y + Math.sin(a) * size * 0.85);
        ctx.stroke();
      }
      break;
    }
    case "pequi": {
      ctx.beginPath();
      ctx.ellipse(x, y, size * 0.5, size * 0.35, 0, 0, Math.PI * 2);
      ctx.stroke();
      for (let i = 0; i < 4; i++) {
        const ax = x + (Math.cos((i / 4) * Math.PI * 2) * size * 0.25);
        const ay = y + (Math.sin((i / 4) * Math.PI * 2) * size * 0.18);
        ctx.beginPath();
        ctx.arc(ax, ay, size * 0.12, 0, Math.PI * 2);
        ctx.fill();
      }
      break;
    }
    case "cypress": {
      // Logo Cypress: folha / C estilizado
      ctx.beginPath();
      ctx.ellipse(x, y, size * 0.48, size * 0.38, 0, Math.PI * 0.35, Math.PI * 2 - Math.PI * 0.35);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(x + size * 0.08, y - size * 0.25);
      ctx.lineTo(x + size * 0.08, y + size * 0.28);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(x + size * 0.22, y, size * 0.12, 0, Math.PI * 2);
      ctx.fill();
      break;
    }
    case "playwright": {
      // Logo Playwright: duas máscaras de teatro
      const r = size * 0.32;
      ctx.beginPath();
      ctx.arc(x - size * 0.22, y, r, 0, Math.PI * 2);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(x + size * 0.22, y, r, 0, Math.PI * 2);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(x - size * 0.22, y + size * 0.08, size * 0.12, 0.2 * Math.PI, 0.8 * Math.PI);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(x + size * 0.22, y - size * 0.05, size * 0.1, 0.6 * Math.PI, 1.4 * Math.PI);
      ctx.stroke();
      break;
    }
    case "postman": {
      // Logo Postman: foguete (vista lateral)
      ctx.beginPath();
      ctx.moveTo(x - size * 0.5, y + size * 0.05);
      ctx.lineTo(x, y - size * 0.45);
      ctx.lineTo(x + size * 0.5, y + size * 0.05);
      ctx.lineTo(x + size * 0.28, y + size * 0.35);
      ctx.lineTo(x - size * 0.15, y + size * 0.2);
      ctx.lineTo(x - size * 0.5, y + size * 0.05);
      ctx.fill();
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(x + size * 0.28, y + size * 0.35);
      ctx.lineTo(x + size * 0.5, y + size * 0.05);
      ctx.stroke();
      break;
    }
    case "cross": {
      const s = size * 0.45;
      ctx.beginPath();
      ctx.moveTo(x, y - s);
      ctx.lineTo(x, y + s);
      ctx.moveTo(x - s * 0.6, y);
      ctx.lineTo(x + s * 0.6, y);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(x, y, size * 0.15, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
      break;
    }
  }
}

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

  constructor(i: number) {
    this.i = i;
    this.frac = i / N;
    const angle = this.frac * Math.PI * 2 * 137.508;
    const r = Math.sqrt(this.frac);
    this.spiralA = angle;
    this.spiralR = r;

    const ci = Math.floor(Math.random() * CORES.length);
    this.rgb = CORES[ci];
    this.baseSize = 0.6 + Math.random() * 2;
    this.size = this.baseSize;
    this.alpha = 0;
    this.targetAlpha = 0.15 + Math.random() * 0.45;
    this.phase = Math.random() * Math.PI * 2;
    this.phaseV = 0.006 + Math.random() * 0.014;

    this.x = 0;
    this.y = 0;
    this.vx = 0;
    this.vy = 0;

    this.layer = Math.floor(Math.random() * 6);
    this.pequiA = this.frac * Math.PI * 2 * (3 + this.layer * 0.7);
  }

  getFloatPos(CX: number, CY: number, W: number, H: number) {
    const minWH = Math.min(W, H);
    const rx = minWH * (0.28 + 0.14 * this.spiralR);
    const ry = minWH * (0.22 + 0.12 * this.spiralR);
    const drift = this.phase * 0.15;
    return {
      x: CX + Math.cos(this.spiralA + drift) * rx * this.spiralR,
      y: CY + Math.sin(this.spiralA + drift) * ry * this.spiralR,
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

    const floatA = this.targetAlpha * (0.55 + 0.45 * Math.sin(this.phase));
    const pequiA = 0.35 + this.layer * 0.1;
    const ta = floatA * (1 - conv) + pequiA * conv;
    this.alpha += (ta - this.alpha) * 0.055;

    const pequiSize = this.baseSize * (1.2 + (5 - this.layer) * 0.25);
    this.size = (this.baseSize * (1 - conv) + pequiSize * conv) * intensity;
  }

  draw(ctx: CanvasRenderingContext2D, intensity: number, isMobile = false) {
    if (this.alpha < 0.01) return;
    const [r, g, b] = this.rgb;
    const a = this.alpha * intensity;
    const sizeMul = isMobile ? 0.65 : 1;
    const haloMul = isMobile ? 2 : 3.5;

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
      const scale = isMobile ? 0.85 : 1;

      // Pulso de visibilidade: órbitas aparecem e somem suavemente ao longo do tempo (~10s ciclo)
      const orbitVis = 0.18 + 0.72 * (0.5 + 0.5 * Math.sin(tSec * 0.6));
      if (orbitVis < 0.05) return;

      ORBITS.forEach((orbit, oi) => {
        const orbitR = orbit.r * minWH * scale;
        ctx.save();
        ctx.strokeStyle = `rgba(240,165,0,${(0.25 * orbitVis).toFixed(3)})`;
        ctx.lineWidth = 1;
        ctx.setLineDash([3, 8]);
        ctx.beginPath();
        ctx.ellipse(CX, CY, orbitR, orbitR * 0.65, 0, 0, Math.PI * 2);
        ctx.stroke();
        ctx.setLineDash([]);
        ctx.restore();

        orbit.tools.forEach((toolIdx, ti) => {
          const tool = TOOLS[toolIdx];
          if (!tool) return;
          const offset = (ti / Math.max(1, orbit.tools.length)) * Math.PI * 2;
          const angle = tSec * orbit.speed + offset;
          const ox = CX + Math.cos(angle) * orbitR;
          const oy = CY + Math.sin(angle) * orbitR * 0.65;
          const depth = (Math.sin(angle) + 1) / 2;
          const iconR = (8 + oi * 3.5) * (0.6 + depth * 0.4) * scale;
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
      const a = conv * 0.7;
      if (a < 0.01) return;
      const { W, H, CX, CY } = dimensionsRef.current;
      const r =
        Math.min(W, H) *
        0.08 *
        (1 + 0.1 * Math.sin(tRef.current * 0.003));
      const grd = ctx.createRadialGradient(CX, CY, 0, CX, CY, r);
      grd.addColorStop(0, `rgba(253,217,106,${a.toFixed(3)})`);
      grd.addColorStop(0.5, `rgba(240,165,0,${(a * 0.4).toFixed(3)})`);
      grd.addColorStop(1, "rgba(200,134,10,0)");
      ctx.beginPath();
      ctx.arc(CX, CY, r, 0, Math.PI * 2);
      ctx.fillStyle = grd;
      ctx.fill();
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
        Math.max(W, H) * 0.8
      );
      bg.addColorStop(0, `rgba(22,45,10,${0.04 + converge * 0.12})`);
      bg.addColorStop(1, "rgba(10,20,6,0)");
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, W, H);

      if (mx > 0) addTrail(mx, my);

      drawOrbits(now / 1000);
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

      const minWH = Math.min(W, H);
      const iconSize = isMobileRef.current
        ? Math.max(8, minWH * 0.012)
        : Math.max(14, minWH * 0.024);
      const iconAlpha = 0.35 + 0.15 * Math.sin(now * 0.001);
      const iconCount = isMobileRef.current ? 14 : ORBIT_ICONS.length;
      for (let i = 0; i < iconCount; i++) {
        const icon = ORBIT_ICONS[i];
        const rx = minWH * (0.28 + 0.14 * icon.spiralR);
        const ry = minWH * (0.22 + 0.12 * icon.spiralR);
        const drift = now * 0.00012 + i * 0.25;
        const angle = icon.baseAngle + drift;
        const ix = CX + Math.cos(angle) * rx * icon.spiralR;
        const iy = CY + Math.sin(angle) * ry * icon.spiralR;
        drawOrbitIcon(ctx, icon.type, ix, iy, iconSize, iconAlpha * intensity);
      }

      updateDrawTrail();
      drawCore(converge);

      animRef.current = requestAnimationFrame(loop);
    }

    const onMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    const onTouchMove = (e: TouchEvent) => {
      e.preventDefault();
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
    window.addEventListener("touchmove", onTouchMove, { passive: false });
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
