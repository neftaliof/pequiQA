import Link from "next/link";
import { Mail, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo e Tagline */}
          <div className="col-span-1 md:col-span-2">
            <div className="text-3xl font-display font-bold mb-2">
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
                <Link href="/sobre" className="text-white/80 hover:text-accent transition-colors">
                  Sobre
                </Link>
              </li>
              <li>
                <Link href="/manifesto" className="text-white/80 hover:text-accent transition-colors">
                  Manifesto
                </Link>
              </li>
              <li>
                <Link href="/servicos" className="text-white/80 hover:text-accent transition-colors">
                  Serviços
                </Link>
              </li>
              <li>
                <Link href="/cases" className="text-white/80 hover:text-accent transition-colors">
                  Cases
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-white/80 hover:text-accent transition-colors">
                  Blog
                </Link>
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
                  href="mailto:jenafreelabs@gmail.com"
                  className="text-white/80 hover:text-accent transition-colors"
                >
                  jenafreelabs@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={18} className="mt-1 text-accent flex-shrink-0" />
                <span className="text-white/80">Goiânia, GO</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-white/60 text-center md:text-left">
            © {currentYear} Pequi QA. Todos os direitos reservados.
          </div>
          <div className="text-sm text-white/60 text-center md:text-right">
            <span className="text-accent font-semibold">by Jenafree Labs</span>
            <span className="mx-2">•</span>
            <span className="italic">Feito com orgulho no Cerrado</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
