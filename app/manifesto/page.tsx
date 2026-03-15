import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ManifestoPageContent } from "./ManifestoPageContent";
import { Metadata } from "next";

const baseUrl = "https://pequiqa.com.br";

export const metadata: Metadata = {
  title: "Manifesto - Pequi QA",
  description: "Qualidade não acontece por acaso. Ela é construída. Conheça nossos princípios.",
  keywords: ["manifesto", "qualidade de software", "processo", "automação", "QA"],
  openGraph: {
    title: "Manifesto - Pequi QA",
    description: "Qualidade não acontece por acaso. Ela é construída.",
    url: `${baseUrl}/manifesto/`,
    siteName: "Pequi QA",
    locale: "pt_BR",
    type: "website",
  },
};

export default function ManifestoPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <ManifestoPageContent />
      </main>
      <Footer />
    </>
  );
}
