import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTABanner from "@/components/CTABanner";
import { Card, CardContent } from "@/components/ui/card";
import { Check, FileSearch } from "lucide-react";
import { Metadata } from "next";

const baseUrl = "https://pequiqa.com.br";

export const metadata: Metadata = {
  title: "Consultoria Pontual & Auditoria de QA - Pequi QA",
  description: "Diagnóstico completo do seu processo atual e plano de ação detalhado para melhorias imediatas.",
  keywords: ["consultoria QA", "auditoria de qualidade", "diagnóstico de testes", "plano de ação"],
  openGraph: {
    title: "Consultoria Pontual & Auditoria de QA - Pequi QA",
    description: "Diagnóstico do seu processo de QA e plano de ação para melhorias.",
    url: `${baseUrl}/servicos/consultoria-e-auditoria/`,
    siteName: "Pequi QA",
    locale: "pt_BR",
    type: "website",
  },
};

export default function ConsultoriaPage() {
  const entregaveis = [
    "Relatório completo de auditoria (20-30 páginas)",
    "Análise de cobertura de testes atual",
    "Identificação de gaps e riscos",
    "Avaliação de ferramentas e processos",
    "Plano de ação priorizado",
    "Estimativa de investimento para melhorias",
    "ROI esperado para cada ação",
    "Apresentação executiva dos resultados",
  ];

  const casos = [
    {
      titulo: "Auditoria Pré-Investimento",
      descricao:
        "Você está considerando investir em QA mas não sabe por onde começar? Fazemos um diagnóstico completo e mostramos o caminho.",
    },
    {
      titulo: "Segunda Opinião",
      descricao:
        "Já tem um processo de QA mas quer validar se está no caminho certo? Auditamos e sugerimos melhorias.",
    },
    {
      titulo: "Troubleshooting",
      descricao:
        "Bugs em produção aumentaram? Releases estão lentos? Identificamos a causa raiz e sugerimos correções.",
    },
  ];

  const processo = [
    {
      etapa: "Coleta de Informações",
      descricao:
        "Entrevistas com stakeholders, análise de documentação existente e observação de processos.",
      duracao: "3-5 dias",
    },
    {
      etapa: "Análise Técnica",
      descricao:
        "Avaliação de cobertura de testes, ferramentas, automação, integração com CI/CD e métricas.",
      duracao: "3-5 dias",
    },
    {
      etapa: "Elaboração do Relatório",
      descricao:
        "Consolidação dos achados, priorização de ações e elaboração do plano de melhoria.",
      duracao: "2-3 dias",
    },
    {
      etapa: "Apresentação",
      descricao:
        "Apresentação executiva dos resultados e discussão do plano de ação com o time.",
      duracao: "1 dia",
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
                Consultoria Pontual & Auditoria de QA
              </h1>
              <p className="text-xl text-white/90">
                Diagnóstico completo do seu processo atual e plano de ação para melhorias.
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
                  Este serviço é ideal para empresas que <strong>já têm algum processo de QA</strong> mas
                  querem validar se está funcionando bem, identificar melhorias ou resolver problemas
                  específicos.
                </p>
                <p>Também é perfeito para quem:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Está considerando investir em QA e quer um diagnóstico antes</li>
                  <li>Precisa de uma segunda opinião sobre o processo atual</li>
                  <li>Está enfrentando aumento de bugs em produção</li>
                  <li>Quer entender o ROI de investir em qualidade</li>
                  <li>Precisa de um plano de ação claro e priorizado</li>
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

        {/* Casos de Uso */}
        <section className="py-20 bg-background-alt">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-display font-bold text-primary mb-12 text-center">
                Quando contratar
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {casos.map((caso, index) => (
                  <Card key={index} className="bg-white border-none shadow-md">
                    <CardContent className="p-6">
                      <FileSearch className="w-10 h-10 text-accent mb-4" />
                      <h3 className="text-xl font-display font-bold text-primary mb-3">
                        {caso.titulo}
                      </h3>
                      <p className="text-text/70">{caso.descricao}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Processo */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-display font-bold text-primary mb-12 text-center">
                Como funciona
              </h2>
              <div className="space-y-6">
                {processo.map((item, index) => (
                  <Card key={index} className="bg-white border-none shadow-md">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent flex items-center justify-center text-white font-display font-bold text-xl">
                          {index + 1}
                        </div>
                        <div className="flex-grow">
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="text-2xl font-display font-bold text-primary">
                              {item.etapa}
                            </h3>
                            <span className="text-sm text-text/60 font-semibold">
                              {item.duracao}
                            </span>
                          </div>
                          <p className="text-text/70">{item.descricao}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="mt-8 text-center">
                <p className="text-lg text-text/70">
                  <strong>Duração total:</strong> 10-15 dias úteis
                </p>
                <p className="text-lg text-text/70 mt-2">
                  <strong>Investimento:</strong> A partir de R$ 8.000
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <CTABanner
          title="Quer um diagnóstico do seu processo de QA?"
          subtitle="Agende uma conversa e receba uma proposta personalizada."
          primaryCTA={{
            text: "Falar no WhatsApp",
            href: "https://wa.me/5548988526644?text=Olá! Quero saber mais sobre Consultoria e Auditoria.",
          }}
          secondaryCTA={{
            text: "Enviar e-mail",
            href: "mailto:contato@pequiqa.com.br?subject=Consultoria e Auditoria",
          }}
        />
      </main>
      <Footer />
    </>
  );
}
