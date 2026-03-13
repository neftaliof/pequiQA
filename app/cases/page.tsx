import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CaseCard from "@/components/CaseCard";
import CTABanner from "@/components/CTABanner";
import { Metadata } from "next";

const baseUrl = "https://pequiqa.com.br";

export const metadata: Metadata = {
  title: "Cases de Sucesso - Pequi QA",
  description: "Conheça casos reais de empresas que transformaram seus processos de qualidade com a Pequi QA.",
  openGraph: {
    title: "Cases de Sucesso - Pequi QA",
    description: "Casos reais: implantação de QA, redução de bugs e processos estruturados.",
    url: `${baseUrl}/cases/`,
    siteName: "Pequi QA",
    locale: "pt_BR",
    type: "website",
  },
};

export default function CasesPage() {
  const cases = [
    {
      industry: "Fintech",
      title: "Do zero ao processo de QA em 90 dias",
      result:
        "Startup de pagamentos digitais não tinha processo de QA estruturado. Implementamos do zero com automação de testes e integração CI/CD. Resultado: redução de 68% em bugs chegando à produção nos primeiros 3 meses.",
      metric: "-68%",
      desafios: [
        "Sem processo de QA definido",
        "Bugs frequentes em produção",
        "Time de desenvolvimento sobrecarregado",
        "Pressão por entregas rápidas",
      ],
      solucao: [
        "Implantação de processo de QA estruturado",
        "Definição de estratégia de testes",
        "Automação de casos críticos",
        "Integração com pipeline CI/CD",
        "Treinamento do time interno",
      ],
      tecnologias: ["Cypress", "Jest", "GitHub Actions", "Postman"],
      duracao: "3 meses",
    },
    {
      industry: "E-commerce",
      title: "Transformação de suporte em QA funcional",
      result:
        "E-commerce de moda tinha time de suporte técnico ocioso. Transformamos 4 profissionais em QAs funcionais através de programa estruturado. Resultado: 4x mais cobertura de testes em 6 meses.",
      metric: "4x",
      desafios: [
        "Time de suporte sem plano de carreira",
        "Alto turnover no suporte",
        "Falta de QAs no mercado",
        "Budget limitado para contratações",
      ],
      solucao: [
        "Programa de transformação Suporte → QA",
        "Treinamento de 11 semanas",
        "Mentoria individualizada",
        "Projeto prático em ambiente real",
        "Acompanhamento pós-programa",
      ],
      tecnologias: ["Jira", "TestRail", "Selenium", "BrowserStack"],
      duracao: "6 meses",
    },
    {
      industry: "SaaS B2B",
      title: "Alocação ética com resultado documentado",
      result:
        "SaaS de gestão empresarial estava pagando 40% a mais por body shopping sem transparência. Substituímos por alocação transparente de 2 QAs seniores. Resultado: 40% de redução de custo com mais cobertura de testes.",
      metric: "-40%",
      desafios: [
        "Custo alto com consultoria tradicional",
        "Falta de transparência nos valores",
        "QAs sem equipamento adequado",
        "Sem métricas de qualidade",
      ],
      solucao: [
        "Alocação de 2 QAs seniores",
        "Transparência total de custos",
        "Equipamento fornecido pela Pequi QA",
        "Relatórios semanais de atividades",
        "Definição de KPIs de qualidade",
      ],
      tecnologias: ["Playwright", "K6", "Grafana", "Slack"],
      duracao: "Ongoing (12+ meses)",
    },
    {
      industry: "Healthtech",
      title: "Auditoria que evitou multa regulatória",
      result:
        "Healthtech precisava de auditoria de QA para conformidade com LGPD e regulações de saúde. Identificamos 23 gaps críticos e criamos plano de correção. Resultado: 100% de conformidade alcançada em 60 dias.",
      metric: "100%",
      desafios: [
        "Risco de multas regulatórias",
        "Dados sensíveis de saúde",
        "Processos não documentados",
        "Prazo apertado para conformidade",
      ],
      solucao: [
        "Auditoria completa de QA",
        "Análise de conformidade LGPD",
        "Plano de ação priorizado",
        "Implementação de controles",
        "Documentação completa",
      ],
      tecnologias: ["OWASP ZAP", "SonarQube", "Confluence", "Azure DevOps"],
      duracao: "2 meses",
    },
    {
      industry: "Edtech",
      title: "Automação que reduziu tempo de release em 50%",
      result:
        "Plataforma de educação online gastava 2 semanas em testes manuais a cada release. Implementamos automação estratégica de testes. Resultado: tempo de release reduzido de 14 para 7 dias.",
      metric: "-50%",
      desafios: [
        "Releases lentos (14 dias de testes)",
        "Testes manuais repetitivos",
        "Regressão manual completa a cada release",
        "Pressão por entregas mais rápidas",
      ],
      solucao: [
        "Estratégia de automação de testes",
        "Priorização de casos críticos",
        "Implementação com Cypress",
        "Integração com CI/CD",
        "Treinamento do time em automação",
      ],
      tecnologias: ["Cypress", "Percy", "GitLab CI", "Docker"],
      duracao: "4 meses",
    },
    {
      industry: "Logística",
      title: "Treinamento que criou cultura de qualidade",
      result:
        "Empresa de logística tinha desenvolvedores testando próprio código. Treinamos 15 pessoas em QA e criamos processo estruturado. Resultado: redução de 75% em bugs críticos em produção.",
      metric: "-75%",
      desafios: [
        "Desenvolvedores testando próprio código",
        "Sem cultura de qualidade",
        "Bugs críticos frequentes",
        "Falta de conhecimento em QA",
      ],
      solucao: [
        "Treinamento in-company de 40h",
        "Criação de processo de QA",
        "Definição de papéis e responsabilidades",
        "Implementação de ferramentas",
        "Acompanhamento por 3 meses",
      ],
      tecnologias: ["Postman", "JMeter", "TestRail", "Jenkins"],
      duracao: "5 meses",
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
                Cases de Sucesso
              </h1>
              <p className="text-xl text-white/90">
                Resultados reais, mensuráveis e documentados de empresas que transformaram seus
                processos de qualidade.
              </p>
            </div>
          </div>
        </section>

        {/* Cases Grid */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {cases.slice(0, 3).map((caseItem, index) => (
                <CaseCard
                  key={index}
                  industry={caseItem.industry}
                  title={caseItem.title}
                  result={caseItem.result}
                  metric={caseItem.metric}
                  index={index}
                />
              ))}
            </div>

            {/* Cases Detalhados */}
            <div className="max-w-5xl mx-auto space-y-12">
              {cases.map((caseItem, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-accent"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="text-sm font-semibold text-accent mb-2">
                        {caseItem.industry}
                      </div>
                      <h2 className="text-3xl font-display font-bold text-primary mb-2">
                        {caseItem.title}
                      </h2>
                    </div>
                    <div className="text-5xl font-display font-bold text-accent">
                      {caseItem.metric}
                    </div>
                  </div>

                  <p className="text-lg text-text/80 mb-6">{caseItem.result}</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h3 className="font-display font-bold text-lg text-primary mb-3">
                        Desafios
                      </h3>
                      <ul className="space-y-2">
                        {caseItem.desafios.map((desafio, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-text/70">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                            {desafio}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-lg text-primary mb-3">
                        Solução
                      </h3>
                      <ul className="space-y-2">
                        {caseItem.solucao.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-text/70">
                            <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 items-center pt-4 border-t border-background">
                    <div className="text-sm text-text/60">
                      <strong>Duração:</strong> {caseItem.duracao}
                    </div>
                    <div className="text-sm text-text/60">
                      <strong>Tecnologias:</strong> {caseItem.tecnologias.join(", ")}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <CTABanner
          title="Quer resultados como esses na sua empresa?"
          subtitle="Vamos conversar sobre como posso ajudar você."
          primaryCTA={{
            text: "Falar no WhatsApp",
            href: "https://wa.me/5548988526644?text=Olá! Vi os cases e gostaria de conversar.",
          }}
          secondaryCTA={{
            text: "Enviar e-mail",
            href: "mailto:contato@pequiqa.com.br",
          }}
        />
      </main>
      <Footer />
    </>
  );
}
