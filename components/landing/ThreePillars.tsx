"use client";

import { motion } from 'framer-motion';
import { FileCheck, Zap, Shield } from 'lucide-react';

const pillars = [
  { icon: FileCheck, title: 'Processo', subtitle: '(no requisito)', description: 'Qualidade começa antes do código. Estruturamos critérios claros desde o início.' },
  { icon: Zap, title: 'Automação', subtitle: '(no deploy)', description: 'Testes automatizados que protegem cada mudança e aceleram entregas.' },
  { icon: Shield, title: 'Prevenção', subtitle: '(antes da produção)', description: 'Identificamos falhas antes que elas afetem seus usuários.' },
];

export function ThreePillars() {
  return (
    <section className="relative py-24" style={{ background: '#F4EFE6' }}>
      <div className="absolute left-1/2 -translate-x-1/2 w-0.5 opacity-25" style={{ background: '#F2B705', top: '-1px', height: '100px' }} />

      <div className="max-w-[1200px] mx-auto px-8">
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="mb-4 font-display" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#0B2F1F' }}>Nossos três pilares</h2>
          <p className="font-body" style={{ fontSize: '1.125rem', color: '#133A28', opacity: 0.8 }}>A base para software confiável</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          <div className="hidden md:block absolute top-8 left-0 right-0 h-0.5 opacity-20" style={{ background: '#F2B705', zIndex: 0 }} />

          {pillars.map((pillar, index) => (
            <motion.div key={pillar.title} className="relative" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.15 }}>
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full z-10" style={{ background: '#F2B705' }} />
              <div className="mt-8 p-8 rounded-2xl" style={{ background: '#FFFFFF', boxShadow: '0 8px 30px rgba(0, 0, 0, 0.05)' }}>
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6" style={{ background: '#0B2F1F' }}>
                  <pillar.icon className="w-7 h-7" style={{ color: '#F2B705' }} />
                </div>
                <h3 className="mb-2 font-display" style={{ fontSize: '1.75rem', color: '#0B2F1F' }}>{pillar.title}</h3>
                <p className="mb-4 font-body" style={{ fontSize: '0.875rem', color: '#F2B705', fontWeight: 600 }}>{pillar.subtitle}</p>
                <p className="font-body" style={{ fontSize: '1rem', color: '#133A28', lineHeight: '1.7' }}>{pillar.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="absolute left-1/2 -translate-x-1/2 w-0.5 opacity-25" style={{ background: '#F2B705', bottom: '-1px', height: '100px' }} />
    </section>
  );
}
