"use client";

import { useEffect, useState } from "react";

export default function CTAWhatsApp() {
  const [visible, setVisible] = useState(true);

  const whatsappUrl =
    "https://wa.me/5548988526644?text=Ol%C3%A1%21%20Vi%20o%20site%20da%20Pequi%20QA%20e%20quero%20entender%20como%20voc%C3%AAs%20podem%20estruturar%20qualidade%20no%20meu%20produto.%20Pode%20me%20ajudar%3F";

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.querySelector("footer");
      if (!footer) return;

      const footerTop = footer.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      setVisible(footerTop > windowHeight - 100);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com especialista no WhatsApp"
      className={`group fixed z-[9999] flex h-[60px] w-[60px] items-center justify-center overflow-visible rounded-full transition-all duration-300 ease-out hover:scale-105 active:scale-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366] ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-16 opacity-0"
      }`}
      style={{
        bottom: "80px",
        right: "24px",
        backgroundColor: "#25D366",
        boxShadow:
          "0 0 0 0 rgba(37,211,102,0.4), 0 4px 20px rgba(37,211,102,0.5), inset 0 1px 0 rgba(255,255,255,0.2)",
      }}
    >
      {/* Glow externo */}
      <span
        className="absolute inset-0 rounded-full opacity-80"
        style={{
          boxShadow: "0 0 30px 8px rgba(37,211,102,0.4)",
          pointerEvents: "none",
        }}
      />

      {/* Tooltip */}
      <span
        className="absolute right-full top-1/2 mr-3 whitespace-nowrap rounded-lg px-3 py-2 text-sm font-semibold opacity-0 transition-all duration-200 group-hover:opacity-100"
        style={{
          transform: "translateY(-50%)",
          fontFamily: "Syne, sans-serif",
          letterSpacing: "0.02em",
          background: "rgba(20,20,20,0.95)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          color: "#ffffff",
          border: "1px solid rgba(255,255,255,0.1)",
          boxShadow: "0 4px 24px rgba(0,0,0,0.5)",
        }}
      >
        Falar com especialista
      </span>

      {/* Ícone WhatsApp */}
      <svg
        viewBox="0 0 24 24"
        fill="white"
        className="relative h-7 w-7"
        aria-hidden
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    </a>
  );
}
