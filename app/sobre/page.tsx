import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTABanner from "@/components/CTABanner";
import { Metadata } from "next";

const baseUrl = "https://pequiqa.com.br";

export const metadata: Metadata = {
  title: "Sobre - Pequi QA",
  description: "Conheça a história, missão e valores da Pequi QA. Consultoria em qualidade de software com transparência e resultados mensuráveis.",
  openGraph: {
    title: "Sobre - Pequi QA",
    description: "Nascemos do Cerrado com a missão de transformar a qualidade de software no Brasil.",
    url: `${baseUrl}/sobre/`,
    siteName: "Pequi QA",
    locale: "pt_BR",
    type: "website",
  },
};

export default function SobrePage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="bg-primary py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
                Sobre a Pequi QA
              </h1>
              <p className="text-xl text-white/90">
                Nascemos do Cerrado com a missão de transformar a qualidade de software no Brasil.
              </p>
            </div>
          </div>
        </section>

        {/* História */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-display font-bold text-primary mb-6">Nossa História</h2>
              <div className="prose prose-lg max-w-none text-text/80 space-y-4">
                <p>
                  A Pequi QA nasceu da observação de um problema recorrente no mercado de tecnologia:
                  empresas investindo em "consultoria de QA" que na verdade era apenas body shopping
                  disfarçado, sem transparência, sem processo e sem resultados mensuráveis.
                </p>
                <p>
                  Fundada por profissionais com mais de 15 anos de experiência em qualidade de software,
                  decidimos criar uma consultoria diferente. Uma que valoriza o profissional de QA,
                  que entrega resultados documentados e que opera com total transparência.
                </p>
                <p>
                  O nome "Pequi" não foi escolhido por acaso. Assim como o fruto típico do Cerrado,
                  somos autênticos, únicos e orgulhosos de nossas raízes goianas. E assim como o pequi
                  precisa de cuidado e técnica para ser aproveitado, a qualidade de software exige
                  processo, método e profissionais capacitados.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Missão, Visão, Valores */}
        <section className="py-20 bg-background-alt">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-display font-bold text-primary mb-4">Missão</h3>
                <p className="text-text/80">
                  Transformar a qualidade de software em empresas brasileiras através de processos
                  estruturados, profissionais valorizados e resultados mensuráveis.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-display font-bold text-primary mb-4">Visão</h3>
                <p className="text-text/80">
                  Ser referência nacional em consultoria de QA ética e transparente, provando que
                  é possível entregar excelência sem body shopping.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-display font-bold text-primary mb-4">Valores</h3>
                <ul className="text-text/80 space-y-2">
                  <li>• Transparência total</li>
                  <li>• Respeito ao profissional</li>
                  <li>• Resultados mensuráveis</li>
                  <li>• Orgulho regional</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Jenafree Labs */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-display font-bold text-primary mb-6">
                by Jenafree Labs
              </h2>
              <p className="text-xl text-text/70 mb-6">
                A Pequi QA é uma marca da Jenafree Labs, laboratório de inovação em tecnologia
                focado em criar soluções que realmente fazem diferença no mercado.
              </p>
              <p className="text-lg text-text/60">
                Acreditamos que tecnologia deve ser acessível, transparente e focada em resultados
                reais. Por isso, todas as nossas iniciativas seguem esses princípios.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <CTABanner
          title="Quer conhecer melhor nosso trabalho?"
          subtitle="Agende uma conversa sem compromisso."
          primaryCTA={{
            text: "Falar no WhatsApp",
            href: "https://wa.me/5548988526644?text=Olá! Gostaria de conhecer melhor a Pequi QA.",
          }}
          secondaryCTA={{
            text: "Enviar e-mail",
            href: "mailto:jenafreelabs@gmail.com",
          }}
        />
      </main>
      <Footer />
    </>
  );
}
