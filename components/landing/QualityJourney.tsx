"use client";

import { motion } from 'framer-motion';
import { ClipboardCheck, Settings, Zap, Link2, Shield, CheckCircle } from 'lucide-react';

const journeySteps = [
  { icon: ClipboardCheck, title: 'Requisito', description: 'Qualidade começa no requisito. Estruturamos critérios claros antes do código existir.' },
  { icon: Settings, title: 'Processo', description: 'Definimos estratégia de testes e responsabilidade de qualidade.' },
  { icon: Zap, title: 'Automação', description: 'Testes automatizados evitam regressões e protegem deploys.' },
  { icon: Link2, title: 'Integrações', description: 'Validamos contratos e integrações críticas onde sistemas se conectam.' },
  { icon: Shield, title: 'Prevenção', description: 'Identificamos falhas antes que afetem usuários reais.' },
  { icon: CheckCircle, title: 'Produção confiável', description: 'Software que cresce sem medo de deploy.' },
];

export function QualityJourney() {
  return (
    <section className="relative py-24" style={{ background: '#0B2F1F' }}>
      <div className="absolute left-1/2 -translate-x-1/2 w-0.5 opacity-25" style={{ background: '#F2B705', top: '-1px', height: '100px' }} />

      <div className="max-w-[1200px] mx-auto px-8">
        <motion.div className="text-center mb-20" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="mb-4 font-display" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#FFFFFF' }}>Jornada da Qualidade</h2>
          <p className="max-w-2xl mx-auto font-body" style={{ fontSize: '1.125rem', color: 'rgba(255, 255, 255, 0.7)' }}>O processo da Pequi QA para prevenir erros em produção</p>
        </motion.div>

        <div className="max-w-3xl mx-auto relative">
          <div className="absolute left-1/2 -translate-x-1/2 w-0.5 top-0 bottom-0 opacity-30" style={{ background: '#F2B705' }} />

          <div className="space-y-12">
            {journeySteps.map((step, index) => (
              <motion.div key={step.title} className="relative flex items-start gap-6" initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.1 }}>
                <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full z-10" style={{ background: '#F2B705', top: '24px' }} />
                <div className={`flex-1 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12'}`}>
                  {index % 2 === 1 && <div className="flex-1" />}
                  <div className={`inline-block p-6 rounded-2xl max-w-md ${index % 2 === 0 ? 'ml-auto' : 'mr-auto'}`} style={{ background: 'rgba(255, 255, 255, 0.05)', backdropFilter: 'blur(10px)', border: '1px solid rgba(242, 183, 5, 0.2)' }}>
                    <div className={`flex items-center gap-3 mb-3 ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                      <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: '#F2B705' }}>
                        <step.icon className="w-6 h-6" style={{ color: '#0B2F1F' }} />
                      </div>
                      <h3 className="font-display" style={{ fontSize: '1.5rem', color: '#FFFFFF' }}>{step.title}</h3>
                    </div>
                    <p className="font-body" style={{ fontSize: '1rem', color: 'rgba(255, 255, 255, 0.8)', lineHeight: '1.7' }}>{step.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute left-1/2 -translate-x-1/2 w-0.5 opacity-25" style={{ background: '#F2B705', bottom: '-1px', height: '100px' }} />
    </section>
  );
}
