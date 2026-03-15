import { MessageCircle, Mail } from "lucide-react";

export interface ServicoCTAProps {
  title: string;
  subtitle: string;
  whatsappHref: string;
  emailHref: string;
}

export function ServicoCTA({ title, subtitle, whatsappHref, emailHref }: ServicoCTAProps) {
  return (
    <section className="relative py-20" style={{ background: "#F4EFE6" }}>
      <div
        className="absolute left-1/2 -translate-x-1/2 w-0.5 opacity-25"
        style={{ background: "#F2B705", top: "-1px", height: "80px" }}
      />
      <div className="max-w-[600px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2
          className="font-display font-bold mb-4"
          style={{ fontSize: "clamp(1.5rem, 4vw, 2rem)", color: "#0B2F1F" }}
        >
          {title}
        </h2>
        <p
          className="font-body mb-8"
          style={{ fontSize: "1rem", color: "#133A28", opacity: 0.85 }}
        >
          {subtitle}
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 font-body font-semibold px-6 py-3 rounded-xl transition-all hover:opacity-95 min-h-[48px]"
            style={{ background: "#F2B705", color: "#0B2F1F" }}
          >
            <MessageCircle className="w-5 h-5" />
            Falar no WhatsApp
          </a>
          <a
            href={emailHref}
            className="inline-flex items-center justify-center gap-2 font-body font-semibold px-6 py-3 rounded-xl border-2 transition-all hover:opacity-90 min-h-[48px]"
            style={{ borderColor: "#F2B705", color: "#0B2F1F" }}
          >
            <Mail className="w-5 h-5" />
            Enviar e-mail
          </a>
        </div>
      </div>
    </section>
  );
}
