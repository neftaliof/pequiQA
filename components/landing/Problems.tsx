"use client";

import { AlertTriangle, Bug, Repeat, AlertCircle } from 'lucide-react';

const problems = [
  { icon: Bug, title: 'Dev testando o próprio código', description: 'Sem revisão independente de qualidade' },
  { icon: AlertTriangle, title: 'Bugs chegando ao cliente', description: 'Problemas descobertos em produção' },
  { icon: AlertCircle, title: 'Deploy com medo', description: 'Incerteza a cada nova versão' },
  { icon: Repeat, title: 'Retrabalho constante', description: 'Tempo perdido corrigindo o que já foi feito' },
];

export function Problems() {
  return (
    <section className="relative py-24" style={{ background: '#133A28' }}>
      <div className="absolute left-1/2 -translate-x-1/2 w-0.5 opacity-25" style={{ background: '#F2B705', top: '-1px', height: '100px' }} />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="mb-4 font-display" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#FFFFFF' }}>Reconhece algum desses problemas?</h2>
          <p className="font-body" style={{ fontSize: '1.125rem', color: 'rgba(255, 255, 255, 0.7)' }}>Situações comuns que afetam a qualidade do seu produto</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem) => (
            <div key={problem.title} className="p-6 rounded-2xl transition-transform hover:-translate-y-2" style={{ background: '#F4EFE6' }}>
              <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style={{ background: '#0B2F1F' }}>
                <problem.icon className="w-6 h-6" style={{ color: '#F2B705' }} />
              </div>
              <h3 className="mb-2 font-display" style={{ fontSize: '1.25rem', color: '#0B2F1F' }}>{problem.title}</h3>
              <p className="font-body" style={{ fontSize: '0.9375rem', color: '#133A28', opacity: 0.8, lineHeight: '1.6' }}>{problem.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute left-1/2 -translate-x-1/2 w-0.5 opacity-25" style={{ background: '#F2B705', bottom: '-1px', height: '100px' }} />
    </section>
  );
}
