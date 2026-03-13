import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTABanner from "@/components/CTABanner";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Clock, Target } from "lucide-react";
import { Metadata } from "next";

const baseUrl = "https://pequiqa.com.br";

export const metadata: Metadata = {
  title: "Implantação de Processo de Qualidade - Pequi QA",
  description: "Estruturo do zero o processo de QA da sua empresa com metodologia comprovada e resultados mensuráveis.",
  keywords: ["implantação de QA", "processo de qualidade", "estruturação de testes", "CI/CD"],
  openGraph: {
    title: "Implantação de Processo de Qualidade - Pequi QA",
    description: "Do zero ao processo de QA estruturado. Metodologia comprovada e resultados mensuráveis.",
    url: `${baseUrl}/servicos/implantacao-de-qualidade/`,
    siteName: "Pequi QA",
    locale: "pt_BR",
    type: "website",
  },
};

export default function ImplantacaoPage() {
  const entregaveis = [
    "Documentação completa do processo de QA",
    "Plano de testes estruturado e templates",
    "Definição de métricas e KPIs de qualidade",
    "Estratégia de automação de testes",
    "Integração com pipeline de CI/CD",
    "Treinamento do time interno",
    "Ferramentas configuradas e prontas para uso",
    "Acompanhamento pós-implantação por 30 dias",
  ];

  const etapas = [
    {
      fase: "Diagnóstico",
      duracao: "1-2 semanas",
      descricao:
        "Análise profunda do cenário atual, identificação de gargalos e definição de objetivos.",
    },
    {
      fase: "Planejamento",
      duracao: "1 semana",
      descricao:
        "Desenho do processo de QA, definição de ferramentas e estratégia de implementação.",
    },
    {
      fase: "Implementação",
      duracao: "4-6 semanas",
      descricao:
        "Estruturação do processo, configuração de ferramentas e criação de documentação.",
    },
    {
      fase: "Treinamento",
      duracao: "1-2 semanas",
      descricao: "Capacitação do time interno para operar o novo processo de forma autônoma.",
    },
    {
      fase: "Acompanhamento",
      duracao: "30 dias",
      descricao: "Suporte para ajustes e garantia de que o processo está funcionando.",
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
                Implantação de Processo de Qualidade
              </h1>
              <p className="text-xl text-white/90">
                Estruturo do zero o processo de QA da sua empresa com metodologia comprovada.
              </p>
            </div>
          </div>
        </section>

        {/* Descrição */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-display font-bold text-primary mb-6">
                Para quem é este serviço?
              </h2>
              <div className="prose prose-lg max-w-none text-text/80 space-y-4 mb-12">
                <p>
                  Este serviço é ideal para empresas que <strong>não têm processo de QA estruturado</strong> e
                  precisam começar do zero, ou para aquelas que têm um processo informal e querem
                  profissionalizar.
                </p>
                <p>Você vai se beneficiar se:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Bugs estão chegando frequentemente em produção</li>
                  <li>Não há documentação ou plano de testes</li>
                  <li>Desenvolvedores estão testando o próprio código</li>
                  <li>Não existem métricas de qualidade</li>
                  <li>Cada release é uma "aventura"</li>
                </ul>
              </div>

              <h2 className="text-4xl font-display font-bold text-primary mb-6">O que você recebe</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {entregaveis.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <span className="text-text/80">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Etapas */}
        <section className="py-20 bg-background-alt">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-display font-bold text-primary mb-12 text-center">
                Como funciona o projeto
              </h2>
              <div className="space-y-6">
                {etapas.map((etapa, index) => (
                  <Card key={index} className="bg-white border-none shadow-md">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-center gap-4">
                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent flex items-center justify-center text-white font-display font-bold text-xl">
                          {index + 1}
                        </div>
                        <div className="flex-grow">
                          <h3 className="text-2xl font-display font-bold text-primary mb-2">
                            {etapa.fase}
                          </h3>
                          <p className="text-text/70">{etapa.descricao}</p>
                        </div>
                        <div className="flex items-center gap-2 text-text/60">
                          <Clock size={18} />
                          <span className="font-semibold">{etapa.duracao}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Resultados Esperados */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-display font-bold text-primary mb-12 text-center">
                Resultados Esperados
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="bg-gradient-to-br from-secondary to-accent border-none text-white text-center">
                  <CardContent className="p-8">
                    <Target className="w-12 h-12 mx-auto mb-4" />
                    <div className="text-4xl font-display font-bold mb-2">-60%</div>
                    <p className="text-sm">Redução de bugs em produção nos primeiros 3 meses</p>
                  </CardContent>
                </Card>
                <Card className="bg-gradient-to-br from-secondary to-accent border-none text-white text-center">
                  <CardContent className="p-8">
                    <Target className="w-12 h-12 mx-auto mb-4" />
                    <div className="text-4xl font-display font-bold mb-2">3x</div>
                    <p className="text-sm">Aumento na cobertura de testes</p>
                  </CardContent>
                </Card>
                <Card className="bg-gradient-to-br from-secondary to-accent border-none text-white text-center">
                  <CardContent className="p-8">
                    <Target className="w-12 h-12 mx-auto mb-4" />
                    <div className="text-4xl font-display font-bold mb-2">-40%</div>
                    <p className="text-sm">Redução no tempo de ciclo de release</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <CTABanner
          title="Pronto para estruturar seu processo de QA?"
          subtitle="Agende uma conversa e receba um diagnóstico gratuito."
          primaryCTA={{
            text: "Falar no WhatsApp",
            href: "https://wa.me/5548988526644?text=Olá! Quero saber mais sobre Implantação de Processo de Qualidade.",
          }}
          secondaryCTA={{
            text: "Enviar e-mail",
            href: "mailto:contato@pequiqa.com.br?subject=Implantação de Processo de Qualidade",
          }}
        />
      </main>
      <Footer />
    </>
  );
}
