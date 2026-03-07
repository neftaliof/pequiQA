import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import CTABanner from "@/components/CTABanner";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Serviços - Pequi QA",
  description: "Conheça nossos serviços: implantação de QA, alocação de profissionais, consultoria, treinamento e transformação de suporte em QA.",
};

export default function ServicosPage() {
  const services = [
    {
      title: "Implantação de Processo de Qualidade",
      description:
        "Estruturamos do zero o processo de QA da sua empresa com metodologia comprovada e resultados mensuráveis.",
      iconName: "Settings",
      href: "/servicos/implantacao-de-qualidade",
    },
    {
      title: "Alocação de QAs Especializados",
      description:
        "QAs seniores prontos para integrar seu time, com equipamento e suporte adequado. Sem body shopping.",
      iconName: "Users",
      href: "/servicos/alocacao-de-qas",
    },
    {
      title: "Consultoria Pontual & Auditoria",
      description:
        "Diagnóstico completo do seu processo atual e plano de ação detalhado para melhorias imediatas.",
      iconName: "FileSearch",
      href: "/servicos/consultoria-e-auditoria",
    },
    {
      title: "Treinamento de Times Internos",
      description:
        "Capacitação do seu time com as melhores práticas de QA, automação de testes e ferramentas modernas.",
      iconName: "GraduationCap",
      href: "/servicos/treinamento",
    },
    {
      title: "Transformação: Suporte → QA",
      description:
        "Programa estruturado para transformar profissionais de suporte em QAs funcionais de alta performance.",
      iconName: "TrendingUp",
      href: "/servicos/suporte-para-qa",
    },
  ];

  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="bg-primary py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
                Nossos Serviços
              </h1>
              <p className="text-xl text-white/90">
                Soluções completas em qualidade de software, do diagnóstico à execução.
              </p>
            </div>
          </div>
        </section>

        {/* Serviços */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {services.map((service, index) => (
                <ServiceCard key={index} {...service} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Como Funciona */}
        <section className="py-20 bg-background-alt">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-display font-bold text-primary mb-12 text-center">
                Como Funciona
              </h2>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent flex items-center justify-center text-white font-display font-bold text-xl">
                    1
                  </div>
                  <div>
                    <h3 className="text-2xl font-display font-bold text-primary mb-2">
                      Diagnóstico Gratuito
                    </h3>
                    <p className="text-text/70">
                      Primeira conversa sem compromisso. Analisamos seu cenário atual e identificamos
                      os principais gargalos de qualidade.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent flex items-center justify-center text-white font-display font-bold text-xl">
                    2
                  </div>
                  <div>
                    <h3 className="text-2xl font-display font-bold text-primary mb-2">
                      Proposta Transparente
                    </h3>
                    <p className="text-text/70">
                      Apresentamos uma proposta detalhada com escopo, cronograma, investimento e ROI
                      esperado. Sem letras miúdas.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent flex items-center justify-center text-white font-display font-bold text-xl">
                    3
                  </div>
                  <div>
                    <h3 className="text-2xl font-display font-bold text-primary mb-2">
                      Execução com Acompanhamento
                    </h3>
                    <p className="text-text/70">
                      Executamos o projeto com acompanhamento semanal, relatórios de progresso e
                      ajustes conforme necessário.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent flex items-center justify-center text-white font-display font-bold text-xl">
                    4
                  </div>
                  <div>
                    <h3 className="text-2xl font-display font-bold text-primary mb-2">
                      Resultados Mensuráveis
                    </h3>
                    <p className="text-text/70">
                      Ao final, você recebe um relatório completo com todas as métricas de qualidade
                      e o impacto real do projeto.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <CTABanner
          title="Qual serviço faz mais sentido para você?"
          subtitle="Vamos conversar e encontrar a melhor solução para o seu cenário."
          primaryCTA={{
            text: "Falar no WhatsApp",
            href: "https://wa.me/5548988526644?text=Olá! Gostaria de saber mais sobre os serviços.",
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
