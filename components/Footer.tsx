import Link from "next/link";
import { Mail, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 sm:px-6 py-10 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 sm:gap-10 mb-8">
          {/* Logo e Tagline */}
          <div className="col-span-1 md:col-span-2">
            <div className="text-2xl sm:text-3xl font-display font-bold mb-2">
              Pequi <span className="text-accent">QA</span>
            </div>
            <p className="text-white/80 italic mb-4">
              Qualidade que nasce do processo, não da sorte.
            </p>
            <p className="text-sm text-white/60">
              Consultoria em Qualidade de Software
            </p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4">Navegação</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/servicos" className="text-white/80 hover:text-accent transition-colors">
                  Serviços
                </Link>
              </li>
              <li>
                <Link href="/manifesto" className="text-white/80 hover:text-accent transition-colors">
                  Manifesto
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-white/80 hover:text-accent transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <a
                  href="mailto:contato@pequiqa.com.br"
                  className="text-white/80 hover:text-accent transition-colors"
                >
                  contato@pequiqa.com.br
                </a>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Mail size={18} className="mt-1 text-accent flex-shrink-0" />
                <a
                  href="mailto:contato@pequiqa.com.br"
                  className="text-white/80 hover:text-accent transition-colors"
                >
                  contato@pequiqa.com.br
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={18} className="mt-1 text-accent flex-shrink-0" />
                <span className="text-white/80">Anápolis, GO</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4">
          <div className="text-sm text-white/60 text-center md:text-left">
            © {currentYear} Pequi QA. Todos os direitos reservados.
          </div>
          <div className="text-sm text-white/60 text-center md:text-right flex items-center justify-center md:justify-end gap-2 flex-wrap">
            <span>
              by{" "}
              <span
                className="jenafree-electric"
                style={{
                  display: "inline-block",
                  padding: "0.1em 0.35em",
                  margin: "0 0.1em",
                  border: "2px solid #F0A500",
                  borderRadius: 4,
                  color: "#F0A500",
                  fontWeight: 600,
                  filter: "url(#electric-border)",
                }}
              >
                Jenafree
              </span>{" "}
              Labs
            </span>
            <span className="mx-1">•</span>
            <span className="italic">Feito com orgulho no Cerrado</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
