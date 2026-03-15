interface LogoProps {
  size?: 'default' | 'small' | 'large';
  variant?: 'light' | 'dark';
}

export function Logo({ size = 'default', variant = 'light' }: LogoProps) {
  const containerSize = size === 'large' ? 52 : size === 'small' ? 30 : 40;
  const fontSize =
    size === 'large' ? '1.875rem' : size === 'small' ? '1.125rem' : '1.4rem';
  const textColor = variant === 'dark' ? '#0B2F1F' : '#FFFFFF';
  const accentColor = '#F2B705';

  const uid = `logo-${size}-${variant}`;

  return (
    <div className="flex items-center gap-2.5">
      <svg
        width={containerSize}
        height={containerSize}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <defs>
          <pattern id={`qaGrid-${uid}`} width="10" height="10" patternUnits="userSpaceOnUse">
            <path d="M 10 0 L 0 0 0 10" fill="none" stroke={textColor} strokeWidth="0.3" opacity="0.15" />
          </pattern>
          <radialGradient id={`pulpGrad-${uid}`} cx="50%" cy="50%">
            <stop offset="0%" stopColor="#FFD97D" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#F2B705" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#C8860A" stopOpacity="0.5" />
          </radialGradient>
          <radialGradient id={`seedGrad-${uid}`} cx="30%" cy="30%">
            <stop offset="0%" stopColor="#F2B705" stopOpacity="0.3" />
            <stop offset="70%" stopColor="#C8860A" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#8B5A00" stopOpacity="0.1" />
          </radialGradient>
        </defs>

        <rect x="0" y="0" width="100" height="100" fill={`url(#qaGrid-${uid})`} />

        {/* Crosshair de inspeção */}
        <g opacity="0.2">
          <line x1="50" y1="15" x2="50" y2="85" stroke={accentColor} strokeWidth="1" strokeDasharray="2 3" />
          <line x1="15" y1="50" x2="85" y2="50" stroke={accentColor} strokeWidth="1" strokeDasharray="2 3" />
          <circle cx="50" cy="50" r="3" stroke={accentColor} strokeWidth="1.5" fill="none" />
          <circle cx="50" cy="50" r="35" stroke={accentColor} strokeWidth="0.8" fill="none" strokeDasharray="4 4" />
        </g>

        {/* Scanner lines */}
        <g stroke={accentColor} opacity="0.25" strokeWidth="1.2">
          <line x1="12" y1="28" x2="88" y2="28" strokeLinecap="round" />
          <line x1="12" y1="72" x2="88" y2="72" strokeLinecap="round" />
          <path d="M 10 28 L 8 28 L 8 72 L 10 72" strokeLinejoin="miter" />
          <path d="M 90 28 L 92 28 L 92 72 L 90 72" strokeLinejoin="miter" />
        </g>

        {/* Quality Frame Corners */}
        <g stroke={textColor} strokeWidth="2.5" strokeLinecap="round" opacity="0.35">
          <path d="M 18 18 L 18 26 M 18 18 L 26 18" />
          <path d="M 82 18 L 82 26 M 82 18 L 74 18" />
          <path d="M 18 82 L 18 74 M 18 82 L 26 82" />
          <path d="M 82 82 L 82 74 M 82 82 L 74 82" />
        </g>

        {/* Casca externa */}
        <ellipse cx="50" cy="50" rx="32" ry="30" fill="none" stroke={textColor} strokeWidth="4.5" opacity="0.85" />
        <ellipse cx="50" cy="50" rx="28" ry="26" fill="none" stroke={textColor} strokeWidth="1.5" opacity="0.3" />

        {/* Polpa dourada */}
        <ellipse cx="50" cy="50" rx="24" ry="22" fill={`url(#pulpGrad-${uid})`} />

        {/* Textura fibrosa */}
        <g stroke={accentColor} strokeWidth="0.8" opacity="0.2">
          <path d="M 50 30 Q 52 40, 50 50" strokeLinecap="round" />
          <path d="M 50 50 Q 48 60, 50 70" strokeLinecap="round" />
          <path d="M 30 50 Q 40 52, 50 50" strokeLinecap="round" />
          <path d="M 50 50 Q 60 48, 70 50" strokeLinecap="round" />
        </g>

        {/* Caroço 1 - Superior */}
        <g>
          <ellipse cx="50" cy="38" rx="8" ry="9" fill={`url(#seedGrad-${uid})`} stroke={accentColor} strokeWidth="2.5" />
          <ellipse cx="48" cy="36" rx="3" ry="3.5" fill={accentColor} opacity="0.4" />
          <path d="M 50 30 L 50 34" stroke={accentColor} strokeWidth="1.2" opacity="0.5" />
          <path d="M 47 32 L 48 35" stroke={accentColor} strokeWidth="1" opacity="0.4" />
          <path d="M 53 32 L 52 35" stroke={accentColor} strokeWidth="1" opacity="0.4" />
          <path d="M 48 38 L 49.5 40 L 53 36" stroke={accentColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.7" />
        </g>

        {/* Caroço 2 - Esquerda */}
        <g>
          <ellipse cx="36" cy="52" rx="9" ry="8" fill={`url(#seedGrad-${uid})`} stroke={accentColor} strokeWidth="2.5" />
          <ellipse cx="34" cy="50" rx="3.5" ry="3" fill={accentColor} opacity="0.4" />
          <path d="M 28 52 L 32 52" stroke={accentColor} strokeWidth="1.2" opacity="0.5" />
          <path d="M 30 49 L 33 50" stroke={accentColor} strokeWidth="1" opacity="0.4" />
          <path d="M 30 55 L 33 54" stroke={accentColor} strokeWidth="1" opacity="0.4" />
          <path d="M 34 52 L 36 54 L 39 50" stroke={accentColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.7" />
        </g>

        {/* Caroço 3 - Direita */}
        <g>
          <ellipse cx="64" cy="52" rx="9" ry="8" fill={`url(#seedGrad-${uid})`} stroke={accentColor} strokeWidth="2.5" />
          <ellipse cx="62" cy="50" rx="3.5" ry="3" fill={accentColor} opacity="0.4" />
          <path d="M 72 52 L 68 52" stroke={accentColor} strokeWidth="1.2" opacity="0.5" />
          <path d="M 70 49 L 67 50" stroke={accentColor} strokeWidth="1" opacity="0.4" />
          <path d="M 70 55 L 67 54" stroke={accentColor} strokeWidth="1" opacity="0.4" />
          <path d="M 62 52 L 64 54 L 67 50" stroke={accentColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.7" />
        </g>

        {/* Caroço 4 - Inferior */}
        <g>
          <ellipse cx="50" cy="62" rx="8" ry="9" fill={`url(#seedGrad-${uid})`} stroke={accentColor} strokeWidth="2.5" />
          <ellipse cx="48" cy="60" rx="3" ry="3.5" fill={accentColor} opacity="0.4" />
          <path d="M 50 70 L 50 66" stroke={accentColor} strokeWidth="1.2" opacity="0.5" />
          <path d="M 47 68 L 48 65" stroke={accentColor} strokeWidth="1" opacity="0.4" />
          <path d="M 53 68 L 52 65" stroke={accentColor} strokeWidth="1" opacity="0.4" />
          <path d="M 48 62 L 49.5 64 L 53 60" stroke={accentColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.7" />
        </g>

        {/* Rede QA entre caroços */}
        <g stroke={accentColor} strokeWidth="1" opacity="0.3" strokeDasharray="3 2">
          <path d="M 50 38 L 36 52 L 50 62 L 64 52 Z" />
          <circle cx="50" cy="38" r="1.5" fill={accentColor} />
          <circle cx="36" cy="52" r="1.5" fill={accentColor} />
          <circle cx="64" cy="52" r="1.5" fill={accentColor} />
          <circle cx="50" cy="62" r="1.5" fill={accentColor} />
        </g>

        {/* Badge QA aprovado */}
        <g opacity="0.8">
          <circle cx="78" cy="22" r="7" fill={accentColor} opacity="0.2" />
          <circle cx="78" cy="22" r="5.5" stroke={accentColor} strokeWidth="1.5" fill="none" />
          <path d="M 75 22 L 77 24 L 81 20" stroke={accentColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </g>

        {/* Régua lateral */}
        <g stroke={textColor} strokeWidth="0.8" opacity="0.2">
          <line x1="88" y1="30" x2="90" y2="30" />
          <line x1="88" y1="40" x2="91" y2="40" />
          <line x1="88" y1="50" x2="92" y2="50" />
          <line x1="88" y1="60" x2="91" y2="60" />
          <line x1="88" y1="70" x2="90" y2="70" />
        </g>
      </svg>

      <div className="flex items-baseline gap-0.5">
        <span
          className="font-display"
          style={{ fontSize, fontWeight: 600, color: textColor, letterSpacing: '-0.01em' }}
        >
          Pequi
        </span>
        <span
          className="font-display"
          style={{ fontSize, fontWeight: 700, color: '#F2B705', letterSpacing: '-0.01em' }}
        >
          QA
        </span>
      </div>
    </div>
  );
}
