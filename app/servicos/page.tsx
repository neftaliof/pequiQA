import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ServicosPageContent } from "./ServicosPageContent";
import { Metadata } from "next";

const baseUrl = "https://pequiqa.com.br";

export const metadata: Metadata = {
  title: "Serviços - Pequi QA",
  description:
    "Implantação de QA, alocação de QAs, consultoria, treinamento e transformação suporte → QA. Soluções completas em qualidade de software.",
  keywords: ["serviços QA", "implantação", "alocação", "consultoria", "treinamento"],
  openGraph: {
    title: "Serviços - Pequi QA",
    description: "Implantação de QA, alocação de profissionais, consultoria e treinamento. Sem body shopping.",
    url: `${baseUrl}/servicos/`,
    siteName: "Pequi QA",
    locale: "pt_BR",
    type: "website",
  },
};

export default function ServicosPage() {
  return (
    <>
      <Header />
      <main className="pt-16 md:pt-20">
        <ServicosPageContent />
      </main>
      <Footer />
    </>
  );
}
