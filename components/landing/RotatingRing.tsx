"use client";

import { motion } from 'framer-motion';

interface RotatingRingProps {
  size?: number;
  variant?: 'gold' | 'green';
  speed?: number;
}

export function RotatingRing({ size = 200, variant = 'gold', speed = 20 }: RotatingRingProps) {
  const color = variant === 'gold' ? '#F2B705' : '#133A28';

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <motion.div
        className="absolute inset-0"
        animate={{ rotate: 360 }}
        transition={{ duration: speed, repeat: Infinity, ease: 'linear' }}
      >
        <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="100" r="90" stroke={color} strokeWidth="2" opacity="0.2" strokeDasharray="10 5" />
          <g stroke={color} strokeWidth="2" strokeLinecap="round" opacity="0.4">
            <path d="M 100 5 L 100 20" />
            <circle cx="100" cy="25" r="3" fill={color} />
            <path d="M 195 100 L 180 100" />
            <circle cx="175" cy="100" r="3" fill={color} />
            <path d="M 100 195 L 100 180" />
            <circle cx="100" cy="175" r="3" fill={color} />
            <path d="M 5 100 L 20 100" />
            <circle cx="25" cy="100" r="3" fill={color} />
          </g>
          <g stroke={color} strokeWidth="1" opacity="0.15">
            <line x1="100" y1="30" x2="100" y2="170" strokeDasharray="3 3" />
            <line x1="30" y1="100" x2="170" y2="100" strokeDasharray="3 3" />
          </g>
        </svg>
      </motion.div>

      <motion.div
        className="absolute inset-0"
        animate={{ rotate: -360 }}
        transition={{ duration: speed * 1.5, repeat: Infinity, ease: 'linear' }}
      >
        <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="100" r="70" stroke={color} strokeWidth="1.5" opacity="0.15" strokeDasharray="5 10" />
          <g stroke={color} strokeWidth="2" opacity="0.25" strokeLinecap="round">
            <path d="M 140 60 A 50 50 0 0 1 140 140" />
            <path d="M 60 60 A 50 50 0 0 0 60 140" />
          </g>
        </svg>
      </motion.div>

      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div
          className="rounded-full"
          style={{
            width: size * 0.15,
            height: size * 0.15,
            backgroundColor: color,
            opacity: 0.2,
            filter: 'blur(8px)',
          }}
        />
      </motion.div>
    </div>
  );
}
