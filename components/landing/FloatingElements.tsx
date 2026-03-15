"use client";

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface FloatingParticle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  type: 'leaf' | 'seed' | 'dot';
}

export function FloatingElements() {
  const [particles, setParticles] = useState<FloatingParticle[]>([]);

  useEffect(() => {
    setParticles(
      Array.from({ length: 15 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 20 + 10,
        duration: Math.random() * 20 + 15,
        delay: Math.random() * 5,
        type: (['leaf', 'seed', 'dot'] as const)[Math.floor(Math.random() * 3)],
      }))
    );
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute"
          initial={{ x: `${particle.x}vw`, y: '100vh', opacity: 0 }}
          animate={{ y: '-10vh', opacity: [0, 0.6, 0.6, 0], rotate: particle.type === 'leaf' ? [0, 360] : 0 }}
          transition={{ duration: particle.duration, delay: particle.delay, repeat: Infinity, ease: 'linear' }}
          style={{ width: particle.size, height: particle.size }}
        >
          {particle.type === 'leaf' && (
            <svg viewBox="0 0 24 24" fill="none"><path d="M12 2C8 6 6 12 6 16C6 20 9 22 12 22C15 22 18 20 18 16C18 12 16 6 12 2Z" fill="rgba(242,183,5,0.15)" stroke="rgba(242,183,5,0.3)" strokeWidth="1" /><path d="M12 2C12 6 12 12 12 22" stroke="rgba(242,183,5,0.2)" strokeWidth="1" /></svg>
          )}
          {particle.type === 'seed' && (
            <svg viewBox="0 0 24 24" fill="none"><ellipse cx="12" cy="12" rx="5" ry="7" fill="rgba(19,58,40,0.2)" stroke="rgba(19,58,40,0.3)" strokeWidth="1.5" /></svg>
          )}
          {particle.type === 'dot' && (
            <svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="3" fill="rgba(242,183,5,0.25)" /><circle cx="12" cy="12" r="5" stroke="rgba(242,183,5,0.15)" strokeWidth="1" /></svg>
          )}
        </motion.div>
      ))}
    </div>
  );
}
