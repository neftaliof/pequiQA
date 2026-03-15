"use client";

import { motion } from 'framer-motion';
import { Package, Target, Radio, Workflow, Lock } from 'lucide-react';
import { RotatingRing } from './RotatingRing';

const shields = [
  { icon: Package, title: 'Product Quality', description: 'Qualidade integrada ao produto' },
  { icon: Target, title: 'Test Strategy', description: 'Estratégia de testes eficaz' },
  { icon: Radio, title: 'API Reliability', description: 'Confiabilidade em integrações' },
  { icon: Workflow, title: 'Automation & CI/CD', description: 'Automação e entrega contínua' },
  { icon: Lock, title: 'Security & Resilience', description: 'Segurança e resiliência' },
];

export function QualityShield() {
  return (
    <section className="relative py-24" style={{ background: '#133A28' }}>
      <div className="absolute left-1/2 -translate-x-1/2 w-0.5 opacity-25" style={{ background: '#F2B705', top: '-1px', height: '100px' }} />

      <div className="max-w-[1200px] mx-auto px-8">
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4" style={{ background: 'rgba(242, 183, 5, 0.15)' }}>
            <span className="font-body text-sm font-semibold" style={{ color: '#F2B705' }}>FRAMEWORK PROPRIETÁRIO</span>
          </div>
          <h2 className="mb-4 font-display" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#FFFFFF' }}>Quality Shield</h2>
          <p className="max-w-2xl mx-auto font-body" style={{ fontSize: '1.125rem', color: 'rgba(255, 255, 255, 0.7)' }}>Nosso framework para garantir qualidade em todas as camadas do seu produto</p>
        </motion.div>

        <motion.div className="flex justify-center mb-12" initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          <RotatingRing size={250} variant="gold" speed={25} />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-5 gap-6">
            {shields.map((shield, index) => (
              <motion.div key={shield.title} className="text-center" initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }}>
                <motion.div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 relative" style={{ background: 'linear-gradient(135deg, rgba(242, 183, 5, 0.2) 0%, rgba(242, 183, 5, 0.05) 100%)', border: '2px solid rgba(242, 183, 5, 0.3)' }} whileHover={{ scale: 1.1, borderColor: '#F2B705' }}>
                  <shield.icon className="w-8 h-8" style={{ color: '#F2B705' }} />
                  {index < shields.length - 1 && <div className="hidden md:block absolute left-full top-1/2 w-6 h-0.5 opacity-30" style={{ background: '#F2B705' }} />}
                </motion.div>
                <h3 className="mb-2 font-body text-sm font-semibold" style={{ color: '#FFFFFF' }}>{shield.title}</h3>
                <p className="font-body" style={{ fontSize: '0.8125rem', color: 'rgba(255, 255, 255, 0.6)', lineHeight: '1.5' }}>{shield.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div className="mt-12 p-8 rounded-2xl text-center" style={{ background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(242, 183, 5, 0.2)' }} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.5 }}>
            <p className="font-body" style={{ fontSize: '1rem', color: 'rgba(255, 255, 255, 0.8)', lineHeight: '1.7' }}>Cada pilar do Quality Shield trabalha em conjunto para criar uma camada completa de proteção para o seu produto digital.</p>
          </motion.div>
        </div>
      </div>

      <div className="absolute left-1/2 -translate-x-1/2 w-0.5 opacity-25" style={{ background: '#F2B705', bottom: '-1px', height: '100px' }} />
    </section>
  );
}
