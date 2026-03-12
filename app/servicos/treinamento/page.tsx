import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTABanner from "@/components/CTABanner";
import { Card, CardContent } from "@/components/ui/card";
import { Check, GraduationCap } from "lucide-react";
import { Metadata } from "next";

const baseUrl = "https://pequiqa.com.br";

export const metadata: Metadata = {
  title: "Treinamento de Times Internos - Pequi QA",
  description: "Capacitação do seu time com as melhores práticas de QA, automação de testes e ferramentas modernas.",
  keywords: ["treinamento QA", "capacitação em testes", "automação de testes", "boas práticas"],
  openGraph: {
    title: "Treinamento de Times Internos - Pequi QA",
    description: "Capacitação em QA, automação e ferramentas modernas para seu time.",
    url: `${baseUrl}/servicos/treinamento/`,
    siteName: "Pequi QA",
    locale: "pt_BR",
    type: "website",
  },
};

export default function TreinamentoPage() {
  const modulos = [
    {
      titulo: "Fundamentos de QA",
      topicos: [
        "O que é qualidade de software",
        "Tipos de testes (funcional, regressão, exploratório)",
        "Ciclo de vida de bugs",
        "Documentação de testes",
        "Métricas de qualidade",
      ],
      duracao: "16h",
      nivel: "Básico",
    },
    {
      titulo: "Automação de Testes",
      topicos: [
        "Quando automatizar (e quando não)",
        "Frameworks: Selenium, Cypress, Playwright",
        "Page Object Model",
        "Integração com CI/CD",
        "Manutenção de testes automatizados",
      ],
      duracao: "24h",
      nivel: "Intermediário",
    },
    {
      titulo: "Testes de API",
      topicos: [
        "REST vs GraphQL",
        "Ferramentas: Postman, Insomnia, REST Assured",
        "Validação de contratos",
        "Testes de performance de API",
        "Automação de testes de API",
      ],
      duracao: "16h",
      nivel: "Intermediário",
    },
    {
      titulo: "Performance Testing",
      topicos: [
        "Conceitos de performance",
        "Ferramentas: JMeter, K6, Gatling",
        "Análise de resultados",
        "Identificação de gargalos",
        "Testes de carga e stress",
      ],
      duracao: "16h",
      nivel: "Avançado",
    },
  ];

  const formatos = [
    {
      titulo: "In-Company",
      descricao: "Treinamento presencial ou remoto exclusivo para sua empresa.",
      ideal: "Times de 5-15 pessoas",
      valor: "A partir de R$ 8.000",
    },
    {
      titulo: "Mentoria Individual",
      descricao: "Acompanhamento 1:1 personalizado para desenvolver habilidades específicas.",
      ideal: "Profissionais que querem se especializar",
      valor: "A partir de R$ 200/hora",
    },
  ];

  const beneficios = [
    "Material didático completo (slides, exercícios, checklists)",
    "Certificado de conclusão",
    "Acesso a comunidade exclusiva de alunos",
    "Suporte pós-treinamento por 30 dias",
    "Gravação das aulas (formato remoto)",
    "Projeto prático ao final do curso",
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
                Treinamento de Times Internos
              </h1>
              <p className="text-xl text-white/90">
                Capacitação com as melhores práticas de QA e automação de testes.
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
                  Este serviço é ideal para empresas que querem <strong>capacitar seu time interno</strong> em
                  qualidade de software, seja para começar do zero ou para especializar profissionais
                  que já atuam na área.
                </p>
                <p>Você vai se beneficiar se:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Quer formar QAs internos em vez de contratar externos</li>
                  <li>Precisa nivelar conhecimento do time</li>
                  <li>Quer implementar automação de testes</li>
                  <li>Busca especialização em áreas específicas (API, performance, mobile)</li>
                  <li>Quer criar uma cultura de qualidade na empresa</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Módulos */}
        <section className="py-20 bg-background-alt">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-4xl font-display font-bold text-primary mb-12 text-center">
                Módulos Disponíveis
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {modulos.map((modulo, index) => (
                  <Card key={index} className="bg-white border-none shadow-md">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <GraduationCap className="w-10 h-10 text-accent" />
                        <span className="text-sm font-semibold text-accent bg-accent/10 px-3 py-1 rounded-full">
                          {modulo.nivel}
                        </span>
                      </div>
                      <h3 className="text-2xl font-display font-bold text-primary mb-2">
                        {modulo.titulo}
                      </h3>
                      <p className="text-sm text-text/60 mb-4">Duração: {modulo.duracao}</p>
                      <ul className="space-y-2">
                        {modulo.topicos.map((topico, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-text/70">
                            <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                            {topico}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <p className="text-center text-text/60 mt-8">
                * Módulos podem ser contratados individualmente ou em pacotes personalizados
              </p>
            </div>
          </div>
        </section>

        {/* Formatos */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-display font-bold text-primary mb-12 text-center">
                Formatos de Treinamento
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {formatos.map((formato, index) => (
                  <Card key={index} className="bg-white border-none shadow-lg">
                    <CardContent className="p-8">
                      <h3 className="text-3xl font-display font-bold text-primary mb-4">
                        {formato.titulo}
                      </h3>
                      <p className="text-text/70 mb-4">{formato.descricao}</p>
                      <p className="text-sm text-text/60 mb-6 italic">
                        <strong>Ideal para:</strong> {formato.ideal}
                      </p>
                      <div className="text-2xl font-display font-bold text-accent">
                        {formato.valor}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Benefícios */}
        <section className="py-20 bg-background-alt">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-display font-bold text-primary mb-12 text-center">
                O que está incluído
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {beneficios.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <span className="text-text/80">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <CTABanner
          title="Quer capacitar seu time em QA?"
          subtitle="Vamos montar um programa de treinamento personalizado para sua empresa."
          primaryCTA={{
            text: "Falar no WhatsApp",
            href: "https://wa.me/5548988526644?text=Olá! Quero saber mais sobre Treinamento de Times.",
          }}
          secondaryCTA={{
            text: "Enviar e-mail",
            href: "mailto:jenafreelabs@gmail.com?subject=Treinamento de Times",
          }}
        />
      </main>
      <Footer />
    </>
  );
}
