"use client";

import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import gsap from "gsap";
import { CountUp } from "countup.js";

function AnimatedStat({
  end,
  suffix = "",
  prefix = "",
  label,
}: {
  end: number;
  suffix?: string;
  prefix?: string;
  label: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const countUp = new CountUp(el, end, {
            duration: 2.5,
            suffix,
            prefix,
            useEasing: true,
            easingFn: (t: number, b: number, c: number, d: number) => {
              t /= d;
              return c * t * t * t + b;
            },
          });
          countUp.start();
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [end, suffix, prefix]);

  return (
    <div className="hero-stat-item text-center min-w-[140px]">
      <div className="text-3xl sm:text-4xl font-display font-bold text-accent">
        {prefix}
        <span ref={ref}>0</span>
        {suffix}
      </div>
      <div className="text-sm text-white/80 font-body mt-1 tracking-wide uppercase">
        {label}
      </div>
    </div>
  );
}

export default function HeroSection() {
  useEffect(() => {
    const canvas = document.getElementById("hero-particles") as HTMLCanvasElement;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const particles = Array.from({ length: 70 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.8 + 0.4,
      dx: (Math.random() - 0.5) * 0.35,
      dy: (Math.random() - 0.5) * 0.35,
      opacity: Math.random() * 0.5 + 0.15,
    }));

    let animId: number;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(200, 134, 10, ${p.opacity})`;
        ctx.fill();
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
      });
      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.2 });
    tl.fromTo(
      ".hero-badge",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }
    )
      .fromTo(
        ".hero-title",
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
        "-=0.3"
      )
      .fromTo(
        ".hero-sub",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" },
        "-=0.4"
      )
      .fromTo(
        ".hero-actions",
        { opacity: 0, y: 25 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
        "-=0.3"
      )
      .fromTo(
        ".hero-stats",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
        "-=0.2"
      );
  }, []);

  return (
    <section
      className="relative bg-primary min-h-[85vh] sm:min-h-[90vh] flex items-center overflow-hidden py-16 sm:py-20"
      style={{
        backgroundImage: `radial-gradient(
          circle,
          rgba(255,255,255,0.055) 1px,
          transparent 1px
        )`,
        backgroundSize: "28px 28px",
      }}
    >
      {/* Partículas douradas */}
      <canvas
        id="hero-particles"
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ opacity: 0.5, zIndex: 1 }}
      />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div
            className="hero-badge inline-flex items-center gap-2 bg-accent/20 border border-accent/40 rounded-full px-3 py-1.5 sm:px-4 mb-4 sm:mb-6 opacity-0"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            <span className="text-white text-xs font-bold tracking-widest uppercase">
              Consultoria Especializada em QA
            </span>
          </div>

          {/* Título */}
          <h1 className="hero-title text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-4 sm:mb-6 leading-tight opacity-0 px-2">
            Qualidade que nasce do processo, não da{" "}
            <span className="text-accent italic">sorte</span>.
          </h1>

          {/* Subtítulo */}
          <p className="hero-sub text-lg sm:text-xl md:text-2xl text-white/90 mb-6 sm:mb-8 font-body opacity-0 px-2 max-w-3xl mx-auto">
            Estruturamos qualidade de software do zero ou transformamos o que já existe. 15 anos de prática, sem atravessadores, sem promessa vazia.
          </p>

          {/* Ações */}
          <div className="hero-actions flex flex-col sm:flex-row items-center gap-4 sm:gap-6 justify-center opacity-0">
            <div className="relative overflow-hidden rounded-md">
              <Button variant="accent" size="lg" asChild className="text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 relative z-10 w-full sm:w-auto">
                <Link href="/contato" className="flex items-center gap-2">
                  <span className="text-accent">◆</span>
                  Quero um diagnóstico gratuito
                </Link>
              </Button>
              <span
                className="pointer-events-none absolute inset-0 z-20 w-[50%] -translate-x-full"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, rgba(255,255,255,0.25), transparent)",
                  animation: "shimmer 2.5s infinite",
                }}
              />
            </div>
            <Link
              href="/servicos"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md border-2 border-white/80 text-white font-semibold hover:bg-white/10 hover:border-white transition-all duration-200"
            >
              Ver nossos serviços →
            </Link>
          </div>

          {/* Stats */}
          <div className="hero-stats flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-0 mt-12 sm:mt-16 opacity-0 border-t border-white/10 pt-8 sm:pt-10 flex-wrap">
            <AnimatedStat end={15} suffix="+" label="Anos de experiência" />
            <div className="hidden sm:block w-px h-12 bg-white/10 mx-6 lg:mx-10 shrink-0" />
            <AnimatedStat end={100} suffix="%" label="QAs valorizados" />
            <div className="hidden sm:block w-px h-12 bg-white/10 mx-6 lg:mx-10 shrink-0" />
            <AnimatedStat end={0} label="Atravessadores" />
          </div>
        </div>
      </div>
    </section>
  );
}
