"use client";

/**
 * Ícones temáticos do Cerrado para a identidade Pequi QA:
 * joaninha (QA/bugs), pequi (marca), água/cachoeira (fontes do cerrado).
 */

interface IconProps {
  className?: string;
  size?: number;
  style?: React.CSSProperties;
}

/** Joaninha — referência a QA e ao Bugzilla (logo joaninha) */
export function JoaninhaIcon({ className = "", size = 24, style }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className}
      style={style}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <ellipse cx="12" cy="14" rx="8" ry="6" fill="#C41E3A" stroke="#8B0000" strokeWidth="0.8" />
      <path d="M4 14 Q4 8 12 6 Q20 8 20 14" stroke="#1a1a1a" strokeWidth="1.2" fill="none" strokeLinecap="round" />
      <circle cx="9" cy="12" r="1.2" fill="#1a1a1a" />
      <circle cx="15" cy="12" r="1.2" fill="#1a1a1a" />
      <path d="M12 16 Q11 18 12 19 Q13 18 12 16" fill="#1a1a1a" />
      <ellipse cx="12" cy="5.5" rx="3" ry="2.5" fill="#1a1a1a" />
    </svg>
  );
}

/** Pequi pequeno — fruto dourado do cerrado */
export function PequiSmallIcon({ className = "", size = 24, style }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className}
      style={style}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <circle cx="12" cy="12" r="9" fill="#F0A500" stroke="#B8860B" strokeWidth="0.8" />
      <circle cx="12" cy="11" r="3" fill="#FFD060" opacity="0.9" />
      <path d="M12 6 Q10 9 12 12 Q14 9 12 6" fill="#9A5E00" opacity="0.4" />
    </svg>
  );
}

/** Água / fonte do cerrado — gotas ou cachoeira estilizada */
export function AguaCerradoIcon({ className = "", size = 24, style }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className}
      style={style}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M12 3 L12 8 M12 8 Q8 10 8 14 Q8 18 12 20 Q16 18 16 14 Q16 10 12 8"
        stroke="currentColor"
        strokeWidth="1.2"
        fill="none"
        strokeLinecap="round"
        opacity="0.8"
      />
      <path d="M6 12 Q4 14 6 16 Q8 14 6 12" stroke="currentColor" strokeWidth="0.8" fill="none" opacity="0.5" />
      <path d="M18 12 Q20 14 18 16 Q16 14 18 12" stroke="currentColor" strokeWidth="0.8" fill="none" opacity="0.5" />
    </svg>
  );
}

/** Cachoeira / corredeira — traços de água caindo */
export function CachoeiraIcon({ className = "", size = 24, style }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className}
      style={style}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path d="M6 4 L6 20 M10 6 L10 20 M14 5 L14 20 M18 7 L18 20" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.7" />
      <path d="M8 8 Q9 12 8 16 M16 10 Q15 14 16 18" stroke="currentColor" strokeWidth="0.8" fill="none" opacity="0.5" />
    </svg>
  );
}
