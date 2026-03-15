"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

function WhatsAppSVG() {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <path
        d="M50 8C26.8 8 8 26.8 8 50c0 7.3 1.9 14.2 5.2 20.2L8 92l22.3-5.1C36.1 90.2 42.9 92 50 92c23.2 0 42-18.8 42-42S73.2 8 50 8z"
        fill="white"
      />
      <path
        d="M68.5,62.5 C67.2,61.8 61.2,58.8 60.1,58.4 C59,58.0 58.2,57.8 57.4,59.1 C56.6,60.4 54.2,63.2 53.5,64.0 C52.8,64.8 52.1,64.9 50.8,64.2 C49.5,63.6 45.5,62.3 40.7,57.9 C37,54.6 34.5,50.6 33.8,49.3 C33.1,48.0 33.7,47.3 34.4,46.7 C35.0,46.1 35.8,45.2 36.4,44.5 C37.0,43.8 37.2,43.3 37.6,42.5 C38.0,41.7 37.8,41.0 37.5,40.4 C37.2,39.8 34.8,33.6 33.8,31.2 C32.9,28.9 32.0,29.2 31.3,29.2 C30.6,29.1 29.8,29.1 29.0,29.1 C28.2,29.1 26.9,29.4 25.8,30.7 C24.7,32.0 21.5,35.0 21.5,41.2 C21.5,47.4 25.9,53.4 26.6,54.2 C27.3,55.0 34.8,67.2 47.0,72.4 C50.0,73.7 52.4,74.5 54.2,75.1 C57.2,76.1 59.9,75.9 62.1,75.6 C64.5,75.2 69.6,72.6 70.6,69.7 C71.6,66.8 71.6,64.4 71.3,63.9 C71.0,63.4 70.1,63.1 68.5,62.5Z"
        fill="#25D366"
      />
    </svg>
  );
}

export function WhatsAppButton() {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="fixed bottom-8 right-8 z-50 flex items-center gap-3">
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 20, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col items-end"
            style={{
              background: 'linear-gradient(135deg, rgba(7,38,20,0.97), rgba(19,58,40,0.97))',
              border: '1px solid rgba(37,211,102,0.3)',
              borderRadius: '12px',
              padding: '8px 14px',
              backdropFilter: 'blur(12px)',
              boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
            }}
          >
            <span className="font-body" style={{ fontSize: '0.8rem', color: '#25D366', fontWeight: 600 }}>
              Agendar diagnóstico
            </span>
            <span className="font-body" style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.55)' }}>
              Resposta em &lt;2h
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.a
        href="https://wa.me/5548988526644?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20um%20diagn%C3%B3stico%20de%20qualidade."
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center justify-center cursor-pointer select-none"
        style={{ width: '64px', height: '64px', borderRadius: '50%' }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.93 }}
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
      >
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{ background: 'rgba(37, 211, 102, 0.18)' }}
          animate={{ scale: [1, 1.9, 1], opacity: [0.8, 0, 0.8] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: 'easeOut' }}
        />
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{ background: 'rgba(37, 211, 102, 0.12)' }}
          animate={{ scale: [1, 2.4, 1], opacity: [0.6, 0, 0.6] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: 'easeOut', delay: 0.4 }}
        />
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{ background: 'rgba(37, 211, 102, 0.08)' }}
          animate={{ scale: [1, 3.0, 1], opacity: [0.4, 0, 0.4] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: 'easeOut', delay: 0.8 }}
        />

        <motion.div
          className="absolute inset-0 rounded-full"
          style={{
            background: 'linear-gradient(135deg, #2FE076 0%, #25D366 40%, #128C7E 100%)',
            boxShadow: '0 6px 28px rgba(37,211,102,0.55), 0 2px 8px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.2)',
          }}
          animate={{
            boxShadow: [
              '0 6px 28px rgba(37,211,102,0.55), 0 2px 8px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.2)',
              '0 6px 44px rgba(37,211,102,0.85), 0 2px 8px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.2)',
              '0 6px 28px rgba(37,211,102,0.55), 0 2px 8px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.2)',
            ],
          }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
        />

        <motion.div className="absolute inset-0 rounded-full overflow-hidden pointer-events-none" style={{ opacity: 0.12 }}>
          {[...Array(8)].map((_, i) => (
            <div key={i} className="absolute w-full" style={{ height: '1px', background: 'white', top: `${12 + i * 10}%` }} />
          ))}
        </motion.div>

        <div className="absolute rounded-full pointer-events-none" style={{ top: '8px', left: '8px', width: '22px', height: '22px', background: 'radial-gradient(circle, rgba(255,255,255,0.35) 0%, transparent 70%)' }} />

        <div className="relative w-9 h-9">
          <WhatsAppSVG />
        </div>

        <motion.div
          className="absolute flex items-center justify-center"
          style={{ top: '4px', right: '4px', width: '14px', height: '14px', borderRadius: '50%', background: '#ffffff', border: '2px solid #25D366' }}
        >
          <motion.div
            style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#25D366' }}
            animate={{ scale: [1, 1.4, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>
      </motion.a>
    </div>
  );
}
