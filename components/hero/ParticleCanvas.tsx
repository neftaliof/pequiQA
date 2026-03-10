"use client";

import { useEffect, useRef } from "react";

const COLORS = ["#C8860A", "#F0A500", "#a86c08", "#fdd96a"];

function hexA(hex: string, a: number) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r},${g},${b},${a.toFixed(3)})`;
}

export default function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    let W = 0,
      H = 0,
      animId = 0;
    const mouse = { x: -999, y: -999 };
    interface DotInstance {
      update: () => void;
      draw: () => void;
    }
    let pts: DotInstance[] = [];

    class Dot implements DotInstance {
      x = 0;
      y = 0;
      r = 0;
      vx = 0;
      vy = 0;
      baseAlpha = 0;
      alpha = 0;
      color = "";
      life = 0;
      maxLife = 0;
      phase = 0;

      constructor() {
        this.reset(true);
      }

      reset(randomY = false) {
        this.x = Math.random() * W;
        this.y = randomY ? Math.random() * H : H + 5;
        this.r = 0.6 + Math.random() * 1.6;
        this.vx = (Math.random() - 0.5) * 0.12;
        this.vy = -(0.08 + Math.random() * 0.18);
        this.baseAlpha = 0.12 + Math.random() * 0.35;
        this.alpha = this.baseAlpha;
        this.color = COLORS[Math.floor(Math.random() * COLORS.length)];
        this.life = 0;
        this.maxLife = 300 + Math.random() * 400;
        this.phase = Math.random() * Math.PI * 2;
      }

      update() {
        this.life++;
        this.phase += 0.018;
        this.x += this.vx;
        this.y += this.vy;
        this.vx += (Math.random() - 0.5) * 0.004;
        const progress = this.life / this.maxLife;
        const bell = Math.sin(progress * Math.PI);
        this.alpha =
          this.baseAlpha * bell * (0.7 + 0.3 * Math.sin(this.phase));
        const dx = this.x - mouse.x;
        const dy = this.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 180) {
          this.alpha = Math.min(
            this.alpha * (1 + (1 - dist / 180) * 1.2),
            0.55
          );
        }
        if (this.life > this.maxLife || this.y < -8) this.reset();
      }

      draw() {
        if (this.alpha > 0.08) {
          const g = ctx.createRadialGradient(
            this.x,
            this.y,
            0,
            this.x,
            this.y,
            this.r * 4
          );
          g.addColorStop(0, hexA(this.color, this.alpha * 0.5));
          g.addColorStop(1, hexA(this.color, 0));
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.r * 4, 0, Math.PI * 2);
          ctx.fillStyle = g;
          ctx.fill();
        }
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx.fillStyle = hexA(this.color, this.alpha);
        ctx.fill();
      }
    }

    function init() {
      if (!canvas) return;
      W = canvas.width = canvas.offsetWidth;
      H = canvas.height = canvas.offsetHeight;
      pts = Array.from({ length: 90 }, () => new Dot());
    }

    function loop() {
      ctx.clearRect(0, 0, W, H);
      for (const p of pts) {
        p.update();
        p.draw();
      }
      animId = requestAnimationFrame(loop);
    }

    const onMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    const onResize = () => init();

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("resize", onResize);
    init();
    loop();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
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
  );
}
