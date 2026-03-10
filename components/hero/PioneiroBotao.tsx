"use client";

import { useEffect, useRef, useState } from "react";

// ── Paleta Cerrado ──
const PALETTE = [
  { h: 38, l: 72 },
  { h: 42, l: 80 },
  { h: 35, l: 60 },
  { h: 45, l: 88 },
  { h: 100, l: 55 },
  { h: 95, l: 65 },
  { h: 50, l: 92 },
];

const CONFIG = {
  count: 80,
  spriteSize: 24,
  shapeRadius: 8,
  gravity: 0.18,
  drag: 0.97,
  fadeSpeed: 0.018,
  spread: 18,
};

const rand = (a: number, b: number) => Math.random() * (b - a) + a;

type DrawFn = (ctx: CanvasRenderingContext2D, cx: number, r: number) => void;

const shapePathFns: Record<string, DrawFn> = {
  star: (ctx, cx, r) => {
    const pts = 5;
    for (let i = 0; i < pts * 2; i++) {
      const ang = (i * Math.PI) / pts - Math.PI / 2;
      const rad = i % 2 === 0 ? r : r * 0.42;
      i === 0
        ? ctx.moveTo(cx + Math.cos(ang) * rad, cx + Math.sin(ang) * rad)
        : ctx.lineTo(cx + Math.cos(ang) * rad, cx + Math.sin(ang) * rad);
    }
    ctx.closePath();
  },
  circle: (ctx, cx, r) => {
    ctx.arc(cx, cx, r, 0, Math.PI * 2);
  },
  diamond: (ctx, cx, r) => {
    ctx.moveTo(cx, cx - r);
    ctx.lineTo(cx + r * 0.65, cx);
    ctx.lineTo(cx, cx + r);
    ctx.lineTo(cx - r * 0.65, cx);
    ctx.closePath();
  },
  pequi: (ctx, cx, r) => {
    ctx.ellipse(cx, cx, r * 0.6, r, 0, 0, Math.PI * 2);
  },
  spark: (ctx, cx, r) => {
    ctx.rect(cx - r * 0.15, cx - r, r * 0.3, r * 2);
    ctx.rect(cx - r, cx - r * 0.15, r * 2, r * 0.3);
  },
  dot: (ctx, cx, r) => {
    ctx.arc(cx, cx, r * 0.5, 0, Math.PI * 2);
  },
};

const SHAPES = Object.keys(shapePathFns);
const pickShape = () => SHAPES[Math.floor(Math.random() * SHAPES.length)];
const pickColor = () => PALETTE[Math.floor(Math.random() * PALETTE.length)];

const spriteCache = new Map<string, HTMLCanvasElement>();

function buildSprite(shape: string, colorObj: { h: number; l: number }) {
  const key = `${shape}-${colorObj.h}-${colorObj.l}`;
  if (spriteCache.has(key)) return spriteCache.get(key)!;

  const { spriteSize, shapeRadius } = CONFIG;
  const off = Object.assign(document.createElement("canvas"), {
    width: spriteSize,
    height: spriteSize,
  });
  const octx = off.getContext("2d")!;
  const color = `oklch(${colorObj.l}% 0.28 ${colorObj.h}deg)`;
  const cx = spriteSize / 2;

  octx.fillStyle = color;
  octx.shadowBlur = 10;
  octx.shadowColor = color;
  octx.beginPath();
  shapePathFns[shape](octx, cx, shapeRadius);
  octx.fill();

  spriteCache.set(key, off);
  return off;
}

class Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  alpha: number;
  rotation: number;
  rotSpeed: number;
  scale: number;
  sprite: HTMLCanvasElement;

  constructor(x: number, y: number) {
    const angle = rand(0, Math.PI * 2);
    const speed = rand(3, CONFIG.spread);
    this.x = x;
    this.y = y;
    this.vx = Math.cos(angle) * speed;
    this.vy = Math.sin(angle) * speed - rand(4, 10);
    this.alpha = 1;
    this.rotation = rand(0, Math.PI * 2);
    this.rotSpeed = rand(-0.15, 0.15);
    this.scale = rand(0.6, 1.4);
    this.sprite = buildSprite(pickShape(), pickColor());
  }

  update() {
    this.vy += CONFIG.gravity;
    this.vx *= CONFIG.drag;
    this.vy *= CONFIG.drag;
    this.x += this.vx;
    this.y += this.vy;
    this.rotation += this.rotSpeed;
    this.alpha -= CONFIG.fadeSpeed;
  }

  draw(ctx: CanvasRenderingContext2D) {
    if (this.alpha <= 0) return;
    const half = CONFIG.spriteSize / 2;
    ctx.save();
    ctx.globalAlpha = Math.max(0, this.alpha);
    ctx.translate(this.x, this.y);
    ctx.rotate(this.rotation);
    ctx.scale(this.scale, this.scale);
    ctx.drawImage(this.sprite, -half, -half);
    ctx.restore();
  }

  isDead(H: number) {
    return this.alpha <= 0 || this.y > H + 50;
  }
}

export default function PioneiroBotao() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animRef = useRef<number>(0);
  const [fired, setFired] = useState(false);
  const [label, setLabel] = useState("Quero ser pioneiro");
  const [symbol, setSymbol] = useState("✦");

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    let W = 0,
      H = 0;

    function resize() {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener("resize", resize);

    function loop() {
      ctx.clearRect(0, 0, W, H);
      particlesRef.current = particlesRef.current.filter((p) => !p.isDead(H));
      for (const p of particlesRef.current) {
        p.update();
        p.draw(ctx);
      }
      animRef.current = requestAnimationFrame(loop);
    }
    loop();

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", resize);
    };
  }, []);

  function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;

    for (let i = 0; i < CONFIG.count; i++) {
      particlesRef.current.push(new Particle(cx, cy));
    }

    setFired(true);
    setLabel("Vamos juntos!");
    setSymbol("🌿");

    setTimeout(() => {
      setLabel("Quero ser pioneiro");
      setSymbol("✦");
      setFired(false);
    }, 2000);

    setTimeout(() => {
      window.open(
        "https://wa.me/5548988526644?text=Quero%20ser%20um%20dos%20primeiros%20clientes%20da%20Pequi%20QA.",
        "_blank"
      );
    }, 600);
  }

  return (
    <>
      <canvas
        ref={canvasRef}
        style={{
          position: "fixed",
          inset: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
          zIndex: 9999,
        }}
      />

      <div
        style={{
          position: "relative",
          display: "inline-flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: "-12px",
            borderRadius: "24px",
            background:
              "radial-gradient(ellipse at center, rgba(200,134,10,0.18) 0%, transparent 70%)",
            animation: "bloomPulse 2.5s ease-in-out infinite",
            pointerEvents: "none",
          }}
        />

        <button
          onClick={handleClick}
          style={{
            fontFamily: "Syne, sans-serif",
            fontSize: "0.88rem",
            fontWeight: 700,
            background: fired
              ? "linear-gradient(135deg, #3a6b1e, #2D5016)"
              : "linear-gradient(135deg, #C8860A 0%, #F0A500 60%, #fdd96a 100%)",
            color: "#0e1a07",
            border: "none",
            borderRadius: "8px",
            padding: "0.9rem 2rem",
            cursor: "pointer",
            position: "relative",
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            gap: "0.6rem",
            transition:
              "background 0.3s, transform 0.2s, box-shadow 0.25s",
            transform: fired ? "scale(0.97)" : "scale(1)",
            boxShadow: fired
              ? "0 0 40px rgba(45,80,22,0.4), 0 4px 24px rgba(45,80,22,0.3)"
              : "0 0 0px rgba(200,134,10,0), 0 4px 24px rgba(200,134,10,0.25)",
            letterSpacing: "0.02em",
            zIndex: 1,
          }}
        >
          <span
            style={{
              display: "inline-block",
              transition: "transform 0.3s",
              fontSize: "1rem",
            }}
          >
            {symbol}
          </span>
          <span>{label} →</span>
        </button>
      </div>
    </>
  );
}
