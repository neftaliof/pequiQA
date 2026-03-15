"use client";

import { motion } from 'framer-motion';

const manifestoSections = [
  { title: 'Qualidade não é um departamento.', content: 'Qualidade não nasce no final do projeto. Ela nasce nas decisões que tomamos antes do código existir.' },
  { title: 'Qualidade é processo.', content: 'Software confiável não depende de sorte. Depende de critérios claros, integrações confiáveis, automação consistente e responsabilidade compartilhada.' },
  { title: 'Automação não é luxo.', content: 'Automação é a forma mais eficiente de proteger software. Sem automação, cada deploy carrega medo. Com automação, deploy vira rotina.' },
  { title: 'Prevenir é melhor do que encontrar.', content: 'Encontrar bugs é importante. Mas evitar que eles existam é melhor. Esse é o princípio que guia nosso trabalho.' },
  { title: 'Engenharia de qualidade.', content: 'Não entregamos testadores. Entregamos processo, estratégia e automação para que produtos digitais possam evoluir com confiança.' },
];

export function Manifesto() {
  return (
    <section id="manifesto" className="relative py-24" style={{ background: '#0B2F1F' }}>
      <div className="absolute left-1/2 -translate-x-1/2 w-0.5 opacity-25" style={{ background: '#F2B705', top: '-1px', height: '100px' }} />

      <div className="max-w-[900px] mx-auto px-8">
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="mb-6 font-display" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: '#FFFFFF', lineHeight: '1.2' }}>
            Qualidade não acontece por acaso.
            <br />
            Ela é construída.
          </h2>
        </motion.div>

        <div className="space-y-12">
          {manifestoSections.map((section, index) => (
            <motion.div key={section.title} className="space-y-4" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.15 }}>
              <h3 className="font-display" style={{ fontSize: '1.75rem', color: '#F2B705', lineHeight: '1.4' }}>{section.title}</h3>
              <p className="font-body" style={{ fontSize: '1.125rem', color: 'rgba(255, 255, 255, 0.8)', lineHeight: '1.8' }}>{section.content}</p>
              {index < manifestoSections.length - 1 && <div className="w-16 h-0.5 mt-8 opacity-30" style={{ background: '#F2B705' }} />}
            </motion.div>
          ))}
        </div>

        <motion.div className="mt-16 text-center" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.5 }}>
          <p className="italic font-display" style={{ fontSize: '1.25rem', color: 'rgba(255, 255, 255, 0.6)' }}>
            Esse é o nosso trabalho.
            <br />
            Ajudar times a construir software que cresce sem medo de deploy.
          </p>
        </motion.div>
      </div>

      <div className="absolute left-1/2 -translate-x-1/2 w-0.5 opacity-25" style={{ background: '#F2B705', bottom: '-1px', height: '100px' }} />
    </section>
  );
}
