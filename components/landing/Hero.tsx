"use client";

import { motion } from 'framer-motion';
import { Scroll } from 'lucide-react';
import { PequizeiroCanvas } from './PequizeiroCanvas';
import { StarlinkBackground } from './StarlinkBackground';
import { PremiumButton } from './PremiumButton';

const WHATSAPP_URL = "https://wa.me/5548988526644?text=Quero%20agendar%20um%20diagn%C3%B3stico%20gratuito%20da%20Pequi%20QA.";

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <StarlinkBackground />
      <PequizeiroCanvas />

      <div className="relative z-10 max-w-[1200px] mx-auto px-8 pt-28 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.h1
              className="text-white mb-6 font-display"
              style={{
                fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
                lineHeight: '1.2',
              }}
              initial={{ opacity: 1, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Não encontramos bugs.
              <br />
              Nós evitamos que eles existam.
            </motion.h1>

            <motion.p
              className="text-white/80 mb-12 font-body"
              style={{ fontSize: '1.125rem', lineHeight: '1.8' }}
              initial={{ opacity: 1, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Processo, automação e estratégia de qualidade para produtos digitais — direto com quem faz, sem intermediário.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 mb-8"
              initial={{ opacity: 1, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <PremiumButton variant="primary" size="large" href={WHATSAPP_URL}>
                Agendar diagnóstico gratuito
              </PremiumButton>
              <PremiumButton variant="secondary" size="large" icon={false} href="/manifesto">
                <Scroll className="inline-block w-4 h-4 mr-2" />
                Ler o manifesto
              </PremiumButton>
            </motion.div>

            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full"
              style={{ background: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(10px)' }}
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <span className="text-white/70 font-body text-sm">
                Goiás · 15 anos de mercado · Oferta especial para primeiros clientes
              </span>
            </motion.div>
          </div>

          <div className="hidden lg:block" />
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 rounded-full flex justify-center pt-2" style={{ borderColor: 'rgba(255, 255, 255, 0.3)' }}>
          <motion.div
            className="w-1.5 h-1.5 rounded-full"
            style={{ background: '#F2B705' }}
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
