"use client";

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

function useCountUp(target: number, duration: number = 2200, started: boolean = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!started) return;
    let startTime: number | null = null;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [started, target, duration]);
  return count;
}

function CircuitBug({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <motion.ellipse
        cx="58" cy="88" rx="28" ry="40"
        fill="#0B2F1F" stroke="#F2B705" strokeWidth="1.5"
        style={{ transformOrigin: '76px 88px' }}
        animate={{ rotate: [-4, 4, -4] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.ellipse
        cx="102" cy="88" rx="28" ry="40"
        fill="#0B2F1F" stroke="#F2B705" strokeWidth="1.5"
        style={{ transformOrigin: '84px 88px' }}
        animate={{ rotate: [4, -4, 4] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.g
        style={{ transformOrigin: '76px 88px' }}
        animate={{ rotate: [-4, 4, -4] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      >
        <path d="M48,70 L55,80 L50,90 L55,100 L48,110" stroke="#F2B705" strokeWidth="1" opacity="0.5" fill="none"/>
        <circle cx="55" cy="80" r="2.5" fill="#F2B705" opacity="0.7"/>
        <circle cx="50" cy="95" r="2" fill="#F2B705" opacity="0.6"/>
        <path d="M52,78 L44,75" stroke="#F2B705" strokeWidth="1" opacity="0.4"/>
        <path d="M53,95 L45,92" stroke="#F2B705" strokeWidth="1" opacity="0.4"/>
      </motion.g>
      <motion.g
        style={{ transformOrigin: '84px 88px' }}
        animate={{ rotate: [4, -4, 4] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      >
        <path d="M112,70 L105,80 L110,90 L105,100 L112,110" stroke="#F2B705" strokeWidth="1" opacity="0.5" fill="none"/>
        <circle cx="105" cy="80" r="2.5" fill="#F2B705" opacity="0.7"/>
        <circle cx="110" cy="95" r="2" fill="#F2B705" opacity="0.6"/>
        <path d="M108,78 L116,75" stroke="#F2B705" strokeWidth="1" opacity="0.4"/>
        <path d="M107,95 L115,92" stroke="#F2B705" strokeWidth="1" opacity="0.4"/>
      </motion.g>

      <ellipse cx="80" cy="95" rx="18" ry="32" fill="#133A28" stroke="#F2B705" strokeWidth="1.5"/>
      <path d="M80,65 L80,127" stroke="#F2B705" strokeWidth="1.2" opacity="0.6"/>
      <path d="M68,80 L92,80" stroke="#F2B705" strokeWidth="1" opacity="0.5"/>
      <path d="M67,95 L93,95" stroke="#F2B705" strokeWidth="1" opacity="0.5"/>
      <path d="M69,110 L91,110" stroke="#F2B705" strokeWidth="1" opacity="0.5"/>
      <circle cx="80" cy="80" r="4" fill="#F2B705" opacity="0.8"/>
      <circle cx="80" cy="95" r="3.5" fill="#F2B705" opacity="0.7"/>
      <circle cx="80" cy="110" r="3" fill="#F2B705" opacity="0.6"/>
      <circle cx="80" cy="80" r="1.8" fill="#0B2F1F"/>
      <circle cx="80" cy="95" r="1.6" fill="#0B2F1F"/>
      <circle cx="80" cy="110" r="1.4" fill="#0B2F1F"/>

      <circle cx="80" cy="58" r="18" fill="#133A28" stroke="#F2B705" strokeWidth="1.5"/>
      <motion.circle cx="72" cy="55" r="6" fill="#F2B705" opacity="0.9"
        animate={{ opacity: [0.9, 0.5, 0.9] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.circle cx="88" cy="55" r="6" fill="#F2B705" opacity="0.9"
        animate={{ opacity: [0.9, 0.5, 0.9] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
      />
      <circle cx="72" cy="55" r="3.2" fill="#0B2F1F"/>
      <circle cx="88" cy="55" r="3.2" fill="#0B2F1F"/>
      <circle cx="71" cy="53.5" r="1.2" fill="rgba(255,255,200,0.7)"/>
      <circle cx="87" cy="53.5" r="1.2" fill="rgba(255,255,200,0.7)"/>
      <path d="M73,68 Q70,74 67,72" stroke="#F2B705" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
      <path d="M87,68 Q90,74 93,72" stroke="#F2B705" strokeWidth="1.5" strokeLinecap="round" fill="none"/>

      <motion.path d="M72,41 Q60,28 50,22" stroke="#F2B705" strokeWidth="1.8" strokeLinecap="round" fill="none"
        animate={{ d: ['M72,41 Q60,28 50,22', 'M72,41 Q58,26 52,20', 'M72,41 Q60,28 50,22'] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.path d="M88,41 Q100,28 110,22" stroke="#F2B705" strokeWidth="1.8" strokeLinecap="round" fill="none"
        animate={{ d: ['M88,41 Q100,28 110,22', 'M88,41 Q102,26 108,20', 'M88,41 Q100,28 110,22'] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
      />
      <motion.circle cx="50" cy="22" r="4" fill="#F2B705"
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.circle cx="110" cy="22" r="4" fill="#F2B705"
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
      />

      <motion.path d="M62,78 Q50,72 40,70" stroke="#F2B705" strokeWidth="1.8" strokeLinecap="round" fill="none"
        animate={{ d: ['M62,78 Q50,72 40,70', 'M62,78 Q50,74 40,73', 'M62,78 Q50,72 40,70'] }}
        transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.path d="M62,95 Q48,91 36,92" stroke="#F2B705" strokeWidth="1.8" strokeLinecap="round" fill="none"
        animate={{ d: ['M62,95 Q48,91 36,92', 'M62,95 Q48,93 36,95', 'M62,95 Q48,91 36,92'] }}
        transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }}
      />
      <motion.path d="M63,112 Q50,110 39,115" stroke="#F2B705" strokeWidth="1.8" strokeLinecap="round" fill="none"
        animate={{ d: ['M63,112 Q50,110 39,115', 'M63,112 Q50,113 39,118', 'M63,112 Q50,110 39,115'] }}
        transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
      />
      <motion.path d="M98,78 Q110,72 120,70" stroke="#F2B705" strokeWidth="1.8" strokeLinecap="round" fill="none"
        animate={{ d: ['M98,78 Q110,72 120,70', 'M98,78 Q110,74 120,73', 'M98,78 Q110,72 120,70'] }}
        transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut', delay: 0.1 }}
      />
      <motion.path d="M98,95 Q112,91 124,92" stroke="#F2B705" strokeWidth="1.8" strokeLinecap="round" fill="none"
        animate={{ d: ['M98,95 Q112,91 124,92', 'M98,95 Q112,93 124,95', 'M98,95 Q112,91 124,92'] }}
        transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
      />
      <motion.path d="M97,112 Q110,110 121,115" stroke="#F2B705" strokeWidth="1.8" strokeLinecap="round" fill="none"
        animate={{ d: ['M97,112 Q110,110 121,115', 'M97,112 Q110,113 121,118', 'M97,112 Q110,110 121,115'] }}
        transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
      />
    </svg>
  );
}

const metrics = [
  {
    value: 98, suffix: '%', label: 'Cobertura de testes',
    description: 'Média atingida nos projetos', color: '#F2B705',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
        <path d="M9 12l2 2 4-4" stroke="#F2B705" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="12" cy="12" r="9" stroke="#F2B705" strokeWidth="2"/>
      </svg>
    ),
  },
  {
    value: 342, suffix: '+', label: 'Bugs prevenidos',
    description: 'Antes de chegar ao cliente', color: '#4CAF7D',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="#4CAF7D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9 12l2 2 4-4" stroke="#4CAF7D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    value: 15, suffix: ' anos', label: 'Experiência em QA',
    description: 'Excelência no mercado goiano', color: '#7C6AF5',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
        <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" stroke="#7C6AF5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    value: 2, prefix: '<', suffix: 'h', label: 'Tempo de resposta',
    description: 'Para incidentes em produção', color: '#F07C44',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
        <circle cx="12" cy="12" r="9" stroke="#F07C44" strokeWidth="2"/>
        <path d="M12 7v5l3 3" stroke="#F07C44" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

function MetricCard({ metric, index, started }: { metric: typeof metrics[0], index: number, started: boolean }) {
  const count = useCountUp(metric.value, 2200, started);
  return (
    <motion.div
      className="relative overflow-hidden rounded-2xl p-6"
      style={{
        background: 'white',
        border: '1px solid rgba(11,47,31,0.08)',
        boxShadow: '0 4px 24px rgba(11,47,31,0.08)',
      }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      whileHover={{ y: -6, boxShadow: '0 12px 40px rgba(11,47,31,0.14)' }}
    >
      <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl" style={{ background: metric.color }} />

      <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ background: `${metric.color}18` }}>
        {metric.icon}
      </div>

      <div className="mb-1 font-display">
        <span style={{ fontSize: '0.9rem', color: metric.color, fontWeight: 600 }}>
          {(metric as { prefix?: string }).prefix || ''}
        </span>
        <span style={{ fontSize: '2.8rem', color: '#0B2F1F', fontWeight: 700, lineHeight: 1 }}>
          {count}
        </span>
        <span style={{ fontSize: '1.1rem', color: metric.color, fontWeight: 600 }}>
          {metric.suffix}
        </span>
      </div>

      <div className="font-display" style={{ fontSize: '1.1rem', color: '#0B2F1F', marginBottom: '4px' }}>
        {metric.label}
      </div>
      <div className="font-body" style={{ fontSize: '0.85rem', color: '#133A28', opacity: 0.65 }}>
        {metric.description}
      </div>

      <div
        className="absolute right-4 bottom-2 select-none pointer-events-none font-display"
        style={{ fontSize: '5rem', color: metric.color, opacity: 0.04, lineHeight: 1 }}
      >
        {metric.value}
      </div>
    </motion.div>
  );
}

function CrawlingBug() {
  return (
    <motion.div
      className="absolute"
      style={{ bottom: '60px', left: '-80px', width: '56px', height: '56px', zIndex: 5 }}
      animate={{
        x: ['0%', '90vw'],
        y: [0, -20, 10, -15, 5, -25, 0],
        rotate: [0, 5, -3, 8, -5, 3, 0],
      }}
      transition={{
        x: { duration: 22, repeat: Infinity, ease: 'linear' },
        y: { duration: 3.5, repeat: Infinity, ease: 'easeInOut' },
        rotate: { duration: 2.5, repeat: Infinity, ease: 'easeInOut' },
      }}
    >
      <CircuitBug className="w-full h-full" />
    </motion.div>
  );
}

export function MetricsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });

  return (
    <section ref={sectionRef} className="relative py-24 overflow-hidden" style={{ background: '#F4EFE6' }}>
      <div className="absolute left-1/2 -translate-x-1/2 w-0.5 opacity-20" style={{ background: '#0B2F1F', top: '-1px', height: '80px' }} />

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg className="absolute w-full h-full" viewBox="0 0 1200 500" preserveAspectRatio="xMidYMid slice" opacity="0.04">
          <path d="M0,100 L200,100 L200,200 L400,200 L400,100 L600,100" stroke="#0B2F1F" strokeWidth="1.5" fill="none"/>
          <path d="M600,300 L800,300 L800,150 L1000,150 L1000,350 L1200,350" stroke="#0B2F1F" strokeWidth="1.5" fill="none"/>
          <path d="M0,350 L150,350 L150,250 L350,250" stroke="#0B2F1F" strokeWidth="1.5" fill="none"/>
          <circle cx="200" cy="100" r="5" fill="#F2B705"/>
          <circle cx="400" cy="200" r="5" fill="#F2B705"/>
          <circle cx="800" cy="300" r="5" fill="#F2B705"/>
          <circle cx="1000" cy="150" r="5" fill="#F2B705"/>
          <circle cx="150" cy="350" r="5" fill="#F2B705"/>
          <path d="M100,0 L100,500" stroke="#0B2F1F" strokeWidth="1" strokeDasharray="4,8" fill="none"/>
          <path d="M500,0 L500,500" stroke="#0B2F1F" strokeWidth="1" strokeDasharray="4,8" fill="none"/>
          <path d="M900,0 L900,500" stroke="#0B2F1F" strokeWidth="1" strokeDasharray="4,8" fill="none"/>
        </svg>
      </div>

      <div className="max-w-[1200px] mx-auto px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center" style={{ background: '#0B2F1F' }}>
                <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7">
                  <path d="M12 22c4.97 0 9-4.03 9-9H3c0 4.97 4.03 9 9 9z" fill="#F2B705" opacity="0.3"/>
                  <path d="M8 13h8M8 17h8M12 3v4M5 7l2 2M19 7l-2 2M5 18l2-2M19 18l-2-2" stroke="#F2B705" strokeWidth="1.8" strokeLinecap="round"/>
                  <path d="M9 13V8a3 3 0 0 1 6 0v5" stroke="#F2B705" strokeWidth="1.8" strokeLinecap="round"/>
                </svg>
              </div>
              <div>
                <p className="font-body" style={{ fontSize: '0.875rem', color: '#F2B705', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' as const }}>
                  Resultados comprovados
                </p>
                <h2 className="mt-1 font-display" style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', color: '#0B2F1F', lineHeight: 1.2 }}>
                  Qualidade que se mede
                </h2>
              </div>
            </div>

            <p className="mb-8 font-body" style={{ fontSize: '1.0625rem', color: '#133A28', lineHeight: '1.8', opacity: 0.8 }}>
              Nosso trabalho não é subjetivo. Cada projeto tem métricas claras,
              metas definidas e resultados mensuráveis — porque qualidade sem
              números é apenas opinião.
            </p>

            <div className="flex items-center gap-6">
              <motion.div
                className="relative"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
              >
                <CircuitBug className="w-36 h-36" />
                <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(circle at 50% 60%, rgba(242,183,5,0.18) 0%, transparent 65%)' }} />
              </motion.div>
              <div>
                <div className="rounded-xl p-4" style={{ background: '#0B2F1F', border: '1px solid rgba(242,183,5,0.2)' }}>
                  <p className="font-body" style={{ fontSize: '0.75rem', color: '#F2B705', marginBottom: '4px', letterSpacing: '0.05em' }}>
                    {'// BUG_INTERCEPTADO'}
                  </p>
                  <code style={{ fontFamily: 'monospace', fontSize: '0.8rem', color: '#4CAF7D', lineHeight: '1.6' }}>
                    status: CAUGHT<br/>
                    env: pre-production<br/>
                    severity: critical<br/>
                    <span style={{ color: '#F2B705' }}>client_impact: 0</span>
                  </code>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            {metrics.map((metric, index) => (
              <MetricCard key={metric.label} metric={metric} index={index} started={isInView} />
            ))}
          </div>
        </div>
      </div>

      <div className="relative overflow-hidden" style={{ height: '80px', marginTop: '20px' }}>
        <CrawlingBug />
        <div className="absolute bottom-8 left-0 right-0" style={{ height: '1px', background: 'linear-gradient(90deg, transparent, rgba(11,47,31,0.1), rgba(242,183,5,0.15), rgba(11,47,31,0.1), transparent)' }} />
      </div>

      <div className="absolute left-1/2 -translate-x-1/2 w-0.5 opacity-20" style={{ background: '#0B2F1F', bottom: '-1px', height: '80px' }} />
    </section>
  );
}
