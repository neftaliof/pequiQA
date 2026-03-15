"use client";

import { motion } from 'framer-motion';
import { Search, GitBranch, Bot, Radio, Headphones } from 'lucide-react';
import { useState } from 'react';
import { JoaninhaIcon, PequiSmallIcon } from '@/components/icons/CerradoIcons';

const services = [
  { icon: Search, title: 'Diagnóstico de Qualidade', description: 'Análise completa do estado atual da qualidade do seu produto e identificação de pontos críticos.' },
  { icon: GitBranch, title: 'Estruturação de Processo de QA', description: 'Criação de processos claros e sustentáveis para garantir qualidade desde o requisito.' },
  { icon: Bot, title: 'Automação de Testes', description: 'Implementação de testes automatizados para proteger deploys e acelerar entregas.' },
  { icon: Radio, title: 'Testes de API e Microserviços', description: 'Validação de contratos e integrações onde sistemas se conectam e falhas acontecem.' },
  { icon: Headphones, title: 'QA Estratégico sob demanda', description: 'Suporte especializado em qualidade quando você precisa, sem contratações fixas.' },
];

export function Services() {
  return (
    <section id="servicos" className="relative py-16 sm:py-20 lg:py-24" style={{ background: '#F4EFE6' }}>
      <div className="absolute left-1/2 -translate-x-1/2 w-0.5 opacity-25" style={{ background: '#F2B705', top: '-1px', height: '100px' }} />
      {/* Decoração cerrado: joaninha e pequi */}
      <div className="absolute top-20 right-[8%] opacity-35 pointer-events-none" aria-hidden><JoaninhaIcon size={22} /></div>
      <div className="absolute bottom-32 left-[10%] opacity-30 pointer-events-none" aria-hidden><PequiSmallIcon size={20} /></div>
      <div className="absolute top-1/3 left-[6%] opacity-25 pointer-events-none" aria-hidden><PequiSmallIcon size={16} /></div>
      <div className="absolute bottom-48 right-[12%] opacity-40 pointer-events-none" aria-hidden><JoaninhaIcon size={18} /></div>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="mb-4 font-display" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#0B2F1F' }}>Nossos Serviços</h2>
          <p className="font-body" style={{ fontSize: '1.125rem', color: '#133A28', opacity: 0.8 }}>Soluções completas de engenharia de qualidade</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>

      <div className="absolute left-1/2 -translate-x-1/2 w-0.5 opacity-25" style={{ background: '#F2B705', bottom: '-1px', height: '100px' }} />
    </section>
  );
}

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative p-8 rounded-2xl group cursor-pointer overflow-hidden"
      style={{ background: '#FFFFFF', boxShadow: '0 8px 30px rgba(0, 0, 0, 0.05)' }}
      initial={{ opacity: 1, y: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -8, boxShadow: '0 16px 40px rgba(0, 0, 0, 0.1)' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Scan Line */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'linear-gradient(90deg, transparent 0%, rgba(242,183,5,0.15) 50%, transparent 100%)', width: '50%' }}
        initial={{ x: '-100%' }}
        animate={isHovered ? { x: '300%' } : { x: '-100%' }}
        transition={{ duration: 1, ease: 'easeInOut' }}
      />

      {/* Quality Grid Overlay */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(242,183,5,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(242,183,5,0.03) 1px, transparent 1px)',
          backgroundSize: '15px 15px',
        }}
        initial={{ opacity: 1 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />

      {/* Corner Indicators */}
      <motion.div
        className="absolute top-2 left-2 w-4 h-4 pointer-events-none"
        style={{ borderTop: '2px solid rgba(242,183,5,0.4)', borderLeft: '2px solid rgba(242,183,5,0.4)' }}
        initial={{ opacity: 1, scale: 1 }}
        animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1 : 0.8 }}
        transition={{ duration: 0.2 }}
      />
      <motion.div
        className="absolute top-2 right-2 w-4 h-4 pointer-events-none"
        style={{ borderTop: '2px solid rgba(242,183,5,0.4)', borderRight: '2px solid rgba(242,183,5,0.4)' }}
        initial={{ opacity: 1, scale: 1 }}
        animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1 : 0.8 }}
        transition={{ duration: 0.2 }}
      />

      {/* Icon */}
      <motion.div
        className="relative w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-colors"
        style={{ background: '#0B2F1F' }}
        whileHover={{ background: '#F2B705' }}
      >
        <service.icon className="w-7 h-7 text-white group-hover:text-[#0B2F1F] transition-colors" />
        <motion.div
          className="absolute -top-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center"
          style={{ background: '#F2B705' }}
          initial={{ scale: 1, rotate: 0 }}
          animate={isHovered ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
          transition={{ duration: 0.3, type: 'spring' }}
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6L5 9L10 3" stroke="#0B2F1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </motion.div>
      </motion.div>

      <h3 className="mb-3 relative z-10 font-display" style={{ fontSize: '1.5rem', color: '#0B2F1F' }}>{service.title}</h3>
      <p className="relative z-10 font-body" style={{ fontSize: '1rem', color: '#133A28', lineHeight: '1.7', opacity: 0.8 }}>{service.description}</p>
    </motion.div>
  );
}
