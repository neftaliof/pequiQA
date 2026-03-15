import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ServicoCTA } from "./ServicoCTA";

export interface ServicoPageLayoutProps {
  title: string;
  subtitle: string;
  ctaTitle: string;
  ctaSubtitle: string;
  whatsappMessage: string;
  emailSubject: string;
  children: React.ReactNode;
}

export function ServicoPageLayout({
  title,
  subtitle,
  ctaTitle,
  ctaSubtitle,
  whatsappMessage,
  emailSubject,
  children,
}: ServicoPageLayoutProps) {
  const whatsappHref = `https://wa.me/5548988526644?text=${encodeURIComponent(whatsappMessage)}`;
  const emailHref = `mailto:contato@pequiqa.com.br?subject=${encodeURIComponent(emailSubject)}`;

  return (
    <>
      <Header />
      <main className="pt-16 md:pt-20">
        <section
          className="relative py-16 sm:py-24"
          style={{ background: "linear-gradient(180deg, #0B2F1F 0%, #133A28 100%)" }}
        >
          <div
            className="absolute left-1/2 -translate-x-1/2 w-0.5 opacity-25"
            style={{ background: "#F2B705", top: "-1px", height: "80px" }}
          />
          <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              href="/servicos"
              className="inline-flex items-center gap-2 text-sm font-medium mb-6"
              style={{ color: "rgba(255,255,255,0.75)" }}
            >
              ← Voltar aos serviços
            </Link>
            <h1
              className="font-display font-bold text-white mb-4"
              style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)", lineHeight: 1.2 }}
            >
              {title}
            </h1>
            <p className="font-body text-lg text-white/80 max-w-2xl">{subtitle}</p>
          </div>
          <div
            className="absolute left-1/2 -translate-x-1/2 w-0.5 opacity-25"
            style={{ background: "#F2B705", bottom: "-1px", height: "80px" }}
          />
        </section>

        {children}

        <ServicoCTA
          title={ctaTitle}
          subtitle={ctaSubtitle}
          whatsappHref={whatsappHref}
          emailHref={emailHref}
        />
      </main>
      <Footer />
    </>
  );
}
