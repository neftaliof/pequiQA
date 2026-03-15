"use client";

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useState } from 'react';

interface PremiumButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: 'primary' | 'secondary';
  size?: 'default' | 'large';
  icon?: boolean;
  type?: 'button' | 'submit';
  disabled?: boolean;
}

export function PremiumButton({
  children,
  onClick,
  href,
  variant = 'primary',
  size = 'default',
  icon = true,
  type = 'button',
  disabled = false,
}: PremiumButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  const isPrimary = variant === 'primary';
  const isLarge = size === 'large';

  const Comp = href ? 'a' : 'button';
  const linkProps = href
    ? { href, target: '_blank' as const, rel: 'noopener noreferrer' as const }
    : { type, disabled };

  return (
    <motion.div
      className="inline-block"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <Comp
        onClick={onClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative overflow-hidden group inline-flex items-center font-body"
        style={{
          padding: isLarge ? '0.875rem 1.75rem' : '0.75rem 1.5rem',
          minHeight: 48,
          borderRadius: '0.75rem',
          border: isPrimary ? 'none' : '2px solid #F2B705',
          backgroundColor: isPrimary ? '#F2B705' : 'transparent',
          color: isPrimary ? '#0B2F1F' : '#F2B705',
          fontSize: isLarge ? '1.125rem' : '1rem',
          fontWeight: 600,
          cursor: disabled ? 'not-allowed' : 'pointer',
          opacity: disabled ? 0.6 : 1,
          position: 'relative',
        }}
        {...linkProps}
      >
        <span className="relative z-10 flex items-center gap-2 justify-center">
          {children}
          {icon && (
            <motion.span
              animate={{ x: isHovered ? 4 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <ArrowRight size={18} />
            </motion.span>
          )}
        </span>
      </Comp>
    </motion.div>
  );
}
