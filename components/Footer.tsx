import Link from "next/link";
import { Mail, MapPin } from "lucide-react";
import { Logo } from "@/components/landing/Logo";

const NAV_LINKS = [
  { href: "/servicos", label: "Serviços" },
  { href: "/manifesto", label: "Manifesto" },
  { href: "/blog", label: "Blog" },
];

const WHATSAPP_URL =
  "https://wa.me/5548988526644?text=Ol%C3%A1%21%20Vi%20o%20site%20da%20Pequi%20QA%20e%20quero%20entender%20como%20voc%C3%AAs%20podem%20ajudar.";

function RootsSVG() {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      viewBox="0 0 1200 600"
      preserveAspectRatio="none"
      aria-hidden
    >
      <defs>
        <linearGradient id="root-main" x1="0.5" y1="0" x2="0.5" y2="1">
          <stop offset="0%" stopColor="rgba(200,160,60,0.3)" />
          <stop offset="40%" stopColor="rgba(140,100,40,0.2)" />
          <stop offset="100%" stopColor="rgba(100,70,30,0.08)" />
        </linearGradient>
        <linearGradient id="root-secondary" x1="0.5" y1="0" x2="0.5" y2="1">
          <stop offset="0%" stopColor="rgba(160,120,50,0.2)" />
          <stop offset="100%" stopColor="rgba(100,70,30,0.05)" />
        </linearGradient>
        <linearGradient id="root-fine" x1="0.5" y1="0" x2="0.5" y2="1">
          <stop offset="0%" stopColor="rgba(140,100,40,0.15)" />
          <stop offset="100%" stopColor="rgba(80,55,25,0.03)" />
        </linearGradient>
        <linearGradient id="aquifer-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgba(40,120,100,0)" />
          <stop offset="40%" stopColor="rgba(40,120,100,0.06)" />
          <stop offset="100%" stopColor="rgba(30,100,90,0.12)" />
        </linearGradient>
        <filter id="root-blur">
          <feGaussianBlur stdDeviation="1.5" />
        </filter>
        <linearGradient id="nutrient-pulse" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="rgba(253,217,106,0)">
            <animate attributeName="offset" values="0;1;0" dur="4s" repeatCount="indefinite" />
          </stop>
          <stop offset="15%" stopColor="rgba(253,217,106,0.25)">
            <animate attributeName="offset" values="0.15;1;0.15" dur="4s" repeatCount="indefinite" />
          </stop>
          <stop offset="30%" stopColor="rgba(253,217,106,0)">
            <animate attributeName="offset" values="0.3;1;0.3" dur="4s" repeatCount="indefinite" />
          </stop>
        </linearGradient>
      </defs>

      {/* Main trunk entering from top center */}
      <path
        d="M 600 0 C 600 40, 598 80, 600 120 C 602 160, 598 200, 600 240"
        fill="none"
        stroke="url(#root-main)"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      {/* Nutrient pulse overlay on main trunk */}
      <path
        d="M 600 0 C 600 40, 598 80, 600 120 C 602 160, 598 200, 600 240"
        fill="none"
        stroke="url(#nutrient-pulse)"
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* Primary roots branching left */}
      <path
        d="M 600 120 C 560 140, 480 160, 380 180 C 300 195, 220 210, 160 250 C 120 275, 80 310, 50 360"
        fill="none"
        stroke="url(#root-main)"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      {/* Left root secondary fork */}
      <path
        d="M 380 180 C 350 200, 310 240, 280 290 C 260 325, 240 370, 220 420"
        fill="none"
        stroke="url(#root-secondary)"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      {/* Left root fine tendrils */}
      <path
        d="M 160 250 C 140 280, 100 310, 70 350"
        fill="none"
        stroke="url(#root-fine)"
        strokeWidth="1"
        strokeLinecap="round"
      />
      <path
        d="M 280 290 C 250 320, 200 350, 170 400"
        fill="none"
        stroke="url(#root-fine)"
        strokeWidth="0.8"
        strokeLinecap="round"
      />
      <path
        d="M 380 180 C 370 220, 350 260, 320 310"
        fill="none"
        stroke="url(#root-fine)"
        strokeWidth="0.7"
        strokeLinecap="round"
      />

      {/* Primary roots branching right */}
      <path
        d="M 600 140 C 650 155, 740 170, 840 185 C 920 198, 1000 220, 1060 260 C 1100 285, 1130 320, 1150 370"
        fill="none"
        stroke="url(#root-main)"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      {/* Right root secondary fork */}
      <path
        d="M 840 185 C 870 210, 910 250, 940 300 C 960 335, 970 375, 980 430"
        fill="none"
        stroke="url(#root-secondary)"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      {/* Right root fine tendrils */}
      <path
        d="M 1060 260 C 1080 300, 1110 340, 1140 380"
        fill="none"
        stroke="url(#root-fine)"
        strokeWidth="1"
        strokeLinecap="round"
      />
      <path
        d="M 940 300 C 960 340, 990 380, 1010 430"
        fill="none"
        stroke="url(#root-fine)"
        strokeWidth="0.8"
        strokeLinecap="round"
      />
      <path
        d="M 840 185 C 850 230, 870 270, 900 320"
        fill="none"
        stroke="url(#root-fine)"
        strokeWidth="0.7"
        strokeLinecap="round"
      />

      {/* Center root going deep */}
      <path
        d="M 600 240 C 600 300, 605 370, 600 440 C 598 480, 600 530, 600 600"
        fill="none"
        stroke="url(#root-secondary)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* Center root micro-tendrils */}
      <path
        d="M 600 320 C 580 350, 550 380, 530 430"
        fill="none"
        stroke="url(#root-fine)"
        strokeWidth="0.6"
        strokeLinecap="round"
      />
      <path
        d="M 600 360 C 625 390, 660 420, 680 460"
        fill="none"
        stroke="url(#root-fine)"
        strokeWidth="0.6"
        strokeLinecap="round"
      />

      {/* Root junction nodes (where content blocks sit) */}
      <circle cx="380" cy="180" r="4" fill="rgba(253,217,106,0.15)" filter="url(#root-blur)" />
      <circle cx="600" cy="120" r="5" fill="rgba(253,217,106,0.12)" filter="url(#root-blur)" />
      <circle cx="840" cy="185" r="4" fill="rgba(253,217,106,0.15)" filter="url(#root-blur)" />
      <circle cx="600" cy="240" r="3.5" fill="rgba(253,217,106,0.1)" filter="url(#root-blur)" />

      {/* Aquifer layer (lençol freático) */}
      <rect
        x="0"
        y="460"
        width="1200"
        height="140"
        fill="url(#aquifer-grad)"
      />
      {/* Aquifer shimmer */}
      <ellipse
        cx="600"
        cy="520"
        rx="500"
        ry="40"
        fill="rgba(40,140,120,0.04)"
        filter="url(#root-blur)"
      >
        <animate attributeName="rx" values="480;520;480" dur="6s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.6;1;0.6" dur="6s" repeatCount="indefinite" />
      </ellipse>
      <ellipse
        cx="400"
        cy="540"
        rx="200"
        ry="20"
        fill="rgba(50,150,130,0.03)"
        filter="url(#root-blur)"
      >
        <animate attributeName="opacity" values="0.4;0.8;0.4" dur="5s" repeatCount="indefinite" />
      </ellipse>
      <ellipse
        cx="800"
        cy="550"
        rx="180"
        ry="18"
        fill="rgba(50,150,130,0.03)"
        filter="url(#root-blur)"
      >
        <animate attributeName="opacity" values="0.5;0.9;0.5" dur="7s" repeatCount="indefinite" />
      </ellipse>
    </svg>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative text-white overflow-hidden">
      {/* Soil layers background */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(180deg,
              #1a2e0d 0%,
              #162308 8%,
              #121d06 20%,
              #0e1804 40%,
              #0b1303 60%,
              #091004 75%,
              #070d03 90%,
              #050a02 100%
            )
          `,
        }}
      />

      {/* Soil texture horizontal lines */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              0deg,
              transparent,
              transparent 30px,
              rgba(140,100,40,0.3) 30px,
              rgba(140,100,40,0.3) 31px
            )
          `,
        }}
      />

      {/* SVG roots + aquifer */}
      <RootsSVG />

      {/* Gold divider at top (surface line) */}
      <div
        className="relative h-[2px] w-full"
        style={{
          background:
            "linear-gradient(90deg, transparent 5%, rgba(200,134,10,0.15) 20%, rgba(200,134,10,0.35) 50%, rgba(200,134,10,0.15) 80%, transparent 95%)",
          boxShadow: "0 0 12px rgba(200,134,10,0.08)",
        }}
      />

      {/* Main content */}
      <div className="relative container mx-auto px-4 sm:px-6 pt-14 sm:pt-20 pb-6">
        {/* Trunk entry indicator */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[2px] h-12"
          style={{
            background: "linear-gradient(180deg, rgba(200,160,60,0.3), rgba(200,160,60,0.05))",
          }}
        />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 sm:gap-12 mb-16">
          {/* Brand — root junction left */}
          <div className="md:col-span-5 relative">
            <div
              className="absolute -left-3 top-0 bottom-0 w-[1px] hidden md:block"
              style={{
                background: "linear-gradient(180deg, rgba(140,100,40,0.2), rgba(140,100,40,0.05))",
              }}
            />
            <div className="mb-3">
              <Logo size="default" />
            </div>
            <p
              className="text-sm uppercase tracking-[0.2em] mb-4 font-body"
              style={{ color: "rgba(251,245,230,0.45)" }}
            >
              Qualidade que nasce do processo
            </p>
            <p className="text-sm text-white/50 leading-relaxed max-w-sm font-body">
              Consultoria especializada em qualidade de software.
              Processo, automação e prevenção para produtos digitais.
            </p>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-6 text-sm font-semibold px-5 py-2.5 rounded-lg transition-all duration-300 hover:-translate-y-0.5 font-body"
              style={{
                background: "linear-gradient(135deg, #C8860A, #F0A500)",
                color: "#0e1a07",
              }}
            >
              Falar com especialista
            </a>
          </div>

          {/* Navigation — root junction center */}
          <div className="md:col-span-3 relative">
            <div
              className="absolute -left-3 top-0 bottom-0 w-[1px] hidden md:block"
              style={{
                background: "linear-gradient(180deg, rgba(140,100,40,0.15), rgba(140,100,40,0.03))",
              }}
            />
            <h4
              className="text-xs uppercase tracking-[0.2em] font-semibold mb-5 font-body"
              style={{ color: "rgba(200,134,10,0.6)" }}
            >
              Navegação
            </h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href} className="relative">
                  <span
                    className="absolute -left-[18px] top-1/2 w-2.5 h-[1px]"
                    style={{ background: "rgba(140,100,40,0.12)" }}
                  />
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-accent transition-colors duration-200 font-body"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact — root junction right */}
          <div className="md:col-span-4 relative">
            <div
              className="absolute -left-3 top-0 bottom-0 w-[1px] hidden md:block"
              style={{
                background: "linear-gradient(180deg, rgba(140,100,40,0.15), rgba(140,100,40,0.03))",
              }}
            />
            <h4
              className="text-xs uppercase tracking-[0.2em] font-semibold mb-5 font-body"
              style={{ color: "rgba(200,134,10,0.6)" }}
            >
              Contato
            </h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(200,134,10,0.08)" }}
                >
                  <Mail size={15} className="text-accent" />
                </div>
                <a
                  href="mailto:contato@pequiqa.com.br"
                  className="text-sm text-white/60 hover:text-accent transition-colors duration-200 font-body"
                >
                  contato@pequiqa.com.br
                </a>
              </li>
              <li className="flex items-center gap-3">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(200,134,10,0.08)" }}
                >
                  <MapPin size={15} className="text-accent" />
                </div>
                <span className="text-sm text-white/60 font-body">
                  Anápolis, GO — Brasil
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Aquifer zone — bottom bar */}
        <div className="relative">
          {/* Aquifer glow line */}
          <div
            className="h-[1px] w-full mb-6"
            style={{
              background:
                "linear-gradient(90deg, transparent 10%, rgba(40,130,110,0.15) 30%, rgba(50,150,130,0.25) 50%, rgba(40,130,110,0.15) 70%, transparent 90%)",
              boxShadow: "0 0 8px rgba(40,130,110,0.08)",
            }}
          />

          <div className="flex flex-col sm:flex-row flex-wrap justify-between items-center gap-4 pb-8 sm:pb-5 min-h-[3.5rem]">
            <p className="text-xs text-white/30 text-center sm:text-left font-body order-2 sm:order-1">
              © {currentYear} Pequi QA. Todos os direitos reservados.
            </p>
            <div className="flex flex-wrap items-center justify-center sm:justify-end gap-x-3 gap-y-1 text-xs text-white/30 font-body order-1 sm:order-2">
              <span>
                by{" "}
                <span className="text-accent/50 font-semibold">Jenafree</span>{" "}
                Labs
              </span>
              <span className="hidden sm:inline" style={{ color: "rgba(40,130,110,0.3)" }}>·</span>
              <span className="italic whitespace-nowrap" style={{ color: "rgba(40,130,110,0.5)" }}>
                Nascido no Cerrado
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
