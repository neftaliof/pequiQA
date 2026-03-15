"use client";

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

type Particle = {
  x: number; y: number; vx: number; vy: number;
  opacity: number; size: number; life: number;
};

export function PequiTree() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const particles: Particle[] = [];
    let frameCount = 0;
    let animId = 0;

    const spawnZones = [
      { cx: 0.37, cy: 0.38 },
      { cx: 0.64, cy: 0.42 },
      { cx: 0.50, cy: 0.30 },
      { cx: 0.28, cy: 0.50 },
      { cx: 0.42, cy: 0.26 },
      { cx: 0.60, cy: 0.36 },
    ];

    const createParticle = () => {
      const zone = spawnZones[Math.floor(Math.random() * spawnZones.length)];
      const w = canvas.width;
      const h = canvas.height;
      particles.push({
        x: (zone.cx + (Math.random() - 0.5) * 0.08) * w,
        y: (zone.cy + (Math.random() - 0.5) * 0.06) * h,
        vx: (Math.random() - 0.5) * 0.5,
        vy: 0.15 + Math.random() * 0.35,
        opacity: 0.55 + Math.random() * 0.45,
        size: 1.3 + Math.random() * 1.7,
        life: 1.0,
      });
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (frameCount % 9 === 0 && particles.length < 22) {
        createParticle();
      }

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.009;
        p.vx *= 0.998;
        p.life -= 0.0035;

        if (p.life <= 0 || p.y > canvas.height) {
          particles.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.globalAlpha = p.life * p.opacity;
        ctx.fillStyle = '#F0A500';
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      frameCount++;
      animId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <div className="relative w-full max-w-md mx-auto" style={{ height: '500px' }}>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: 3 }}
      />

      <svg
        viewBox="0 0 400 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full absolute inset-0"
        style={{ zIndex: 1 }}
      >
        <path
          d="M200,500 C199,475 201,455 200,440"
          stroke="#6B4C1E"
          strokeWidth="12"
          strokeLinecap="round"
          fill="none"
        />

        <g>
          <path
            d="M200,440 C199,416 201,392 200,368 C199,344 201,320 200,298 C199,285 200,276 200,268"
            stroke="#6B4C1E"
            strokeWidth="12"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M195,440 C194,416 196,392 195,368 C194,344 196,320 195,298"
            stroke="#4E3310"
            strokeWidth="3"
            strokeLinecap="round"
            fill="none"
            opacity="0.5"
          />
          <path
            d="M205,440 C204,416 206,392 205,368 C204,344 206,320 205,298"
            stroke="#9A7040"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
            opacity="0.38"
          />

          <path d="M200,388 Q163,374 132,358 Q107,345 90,328" stroke="#6B4C1E" strokeWidth="8" strokeLinecap="round" fill="none" />
          <path d="M90,328 Q78,316 74,304" stroke="#6B4C1E" strokeWidth="4.5" strokeLinecap="round" fill="none" />

          <path d="M200,382 Q234,368 262,353 Q284,341 298,326" stroke="#6B4C1E" strokeWidth="7.5" strokeLinecap="round" fill="none" />
          <path d="M298,326 Q308,314 312,302" stroke="#6B4C1E" strokeWidth="4" strokeLinecap="round" fill="none" />

          <path d="M200,352 Q172,337 148,322 Q129,309 118,292" stroke="#6B4C1E" strokeWidth="6" strokeLinecap="round" fill="none" />
          <path d="M200,346 Q226,333 250,319 Q268,308 280,292" stroke="#6B4C1E" strokeWidth="5.5" strokeLinecap="round" fill="none" />

          <path d="M200,322 Q177,305 158,286" stroke="#6B4C1E" strokeWidth="4.5" strokeLinecap="round" fill="none" />
          <path d="M200,310 Q196,288 200,262" stroke="#6B4C1E" strokeWidth="5" strokeLinecap="round" fill="none" />
          <path d="M200,316 Q224,300 244,282" stroke="#6B4C1E" strokeWidth="4" strokeLinecap="round" fill="none" />

          <path d="M72,335 C59,318 56,296 65,278 C74,260 92,250 108,248 C120,247 132,254 140,263 C147,252 157,243 169,239 C181,235 192,241 194,253 C196,265 188,277 178,283 C187,293 190,307 183,319 C177,331 161,336 146,332 C138,343 122,349 106,346 C88,343 73,350 72,335 Z" fill="#2D5016" />
          <path d="M77,332 C65,316 63,295 72,278 C80,261 97,251 112,250 C123,249 134,256 141,264 C148,253 157,245 168,241 C179,238 190,243 191,255 C193,266 185,277 176,283 C184,292 187,306 181,317 C175,328 160,333 146,329 C138,339 123,345 108,342 C91,339 78,346 77,332 Z" fill="#4A7C28" opacity="0.7" />

          <path d="M192,262 C191,247 198,234 210,227 C222,220 237,220 247,227 C254,220 265,215 277,215 C290,215 299,225 299,238 C299,252 289,263 277,268 C286,279 289,293 283,305 C277,317 260,322 246,318 C239,329 224,335 209,331 C195,327 186,315 186,300 Z" fill="#2D5016" />
          <path d="M196,260 C195,246 202,233 213,227 C224,220 238,220 247,227 C254,221 264,216 276,216 C288,217 296,226 296,238 C296,251 287,262 276,267 C284,278 287,291 282,303 C276,314 260,319 246,315 C239,325 225,331 210,328 C197,324 188,313 188,299 Z" fill="#4A7C28" opacity="0.7" />

          <path d="M170,262 C161,245 163,225 174,212 C183,201 197,196 210,199 C220,202 227,211 227,222 C236,214 248,210 258,213 C267,217 270,229 265,240 C261,250 250,255 240,255 C241,266 236,277 226,282 C215,288 202,287 195,279 C188,288 176,291 168,286 C158,279 161,268 170,262 Z" fill="#2D5016" />
          <path d="M174,260 C166,244 168,225 178,213 C187,202 200,197 212,200 C221,203 228,212 227,222 C235,215 247,211 256,214 C265,218 267,229 263,239 C259,249 249,254 240,254 C241,264 236,274 227,279 C216,285 204,284 197,277 C190,285 179,288 171,283 C162,277 165,267 174,260 Z" fill="#4A7C28" opacity="0.7" />

          <path d="M65,352 C57,339 58,323 68,312 C77,301 92,297 104,300 C114,303 120,313 120,323 C127,315 137,310 147,313 C156,317 158,329 152,338 C147,347 136,350 126,347 C124,357 116,364 105,363 C91,362 65,366 65,352 Z" fill="#2D5016" opacity="0.9" />
          <path d="M69,350 C62,338 63,322 72,312 C80,302 94,298 105,301 C115,304 120,313 120,323 C126,315 136,311 146,314 C154,317 156,328 151,337 C146,345 136,348 126,345 C124,354 117,360 107,359 C94,358 69,362 69,350 Z" fill="#4A7C28" opacity="0.6" />

          <path d="M240,264 C234,252 236,238 245,229 C254,220 267,218 276,222 C284,227 286,238 282,248 C288,244 296,242 302,246 C308,251 307,263 301,271 C295,278 285,279 278,275 C274,284 266,290 257,288 C246,285 239,274 240,264 Z" fill="#2D5016" opacity="0.8" />

          <ellipse cx="166" cy="248" rx="21" ry="13" fill="#5A8E30" opacity="0.32" transform="rotate(-22 166 248)" />
          <ellipse cx="242" cy="238" rx="19" ry="11" fill="#5A8E30" opacity="0.28" transform="rotate(14 242 238)" />
          <ellipse cx="200" cy="222" rx="17" ry="10" fill="#5A8E30" opacity="0.33" transform="rotate(-6 200 222)" />
          <ellipse cx="128" cy="278" rx="16" ry="10" fill="#5A8E30" opacity="0.28" transform="rotate(-28 128 278)" />
          <ellipse cx="268" cy="272" rx="14" ry="9" fill="#5A8E30" opacity="0.25" transform="rotate(18 268 272)" />

          <motion.g animate={{ opacity: [0.85, 1, 0.85] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0 }}>
            <circle cx="150" cy="288" r="5.5" fill="#9A5E00" opacity="0.6" />
            <circle cx="150" cy="288" r="4.5" fill="#F0A500" />
            <circle cx="148" cy="286" r="1.8" fill="#FFD060" opacity="0.75" />
          </motion.g>

          <motion.g animate={{ opacity: [0.85, 1, 0.85] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}>
            <circle cx="214" cy="254" r="5" fill="#9A5E00" opacity="0.6" />
            <circle cx="214" cy="254" r="4" fill="#F0A500" />
            <circle cx="212" cy="252" r="1.5" fill="#FFD060" opacity="0.75" />
          </motion.g>

          <motion.g animate={{ opacity: [0.85, 1, 0.85] }} transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 2 }}>
            <circle cx="264" cy="284" r="5.5" fill="#9A5E00" opacity="0.6" />
            <circle cx="264" cy="284" r="4.5" fill="#F0A500" />
            <circle cx="262" cy="282" r="1.8" fill="#FFD060" opacity="0.75" />
          </motion.g>

          <motion.g animate={{ opacity: [0.85, 1, 0.85] }} transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 3 }}>
            <circle cx="175" cy="267" r="4" fill="#9A5E00" opacity="0.6" />
            <circle cx="175" cy="267" r="3.2" fill="#F0A500" />
            <circle cx="173" cy="265" r="1.2" fill="#FFD060" opacity="0.7" />
          </motion.g>

          <motion.g animate={{ opacity: [0.85, 1, 0.85] }} transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut', delay: 4 }}>
            <circle cx="243" cy="262" r="3.8" fill="#9A5E00" opacity="0.6" />
            <circle cx="243" cy="262" r="3" fill="#F0A500" />
          </motion.g>
        </g>
      </svg>

      <motion.div
        className="absolute bottom-0 left-1/2 -translate-x-1/2"
        style={{
          width: '2px',
          height: '40px',
          background: 'linear-gradient(180deg, #6B4C1E 0%, transparent 100%)',
          opacity: 0.4,
        }}
        initial={{ opacity: 0, scaleY: 0 }}
        animate={{ opacity: 0.4, scaleY: 1 }}
        transition={{ duration: 1.5, delay: 2.2 }}
      />
    </div>
  );
}
