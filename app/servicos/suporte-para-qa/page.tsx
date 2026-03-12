import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTABanner from "@/components/CTABanner";
import { Card, CardContent } from "@/components/ui/card";
import { Check, TrendingUp, Users } from "lucide-react";
import { Metadata } from "next";

const baseUrl = "https://pequiqa.com.br";

export const metadata: Metadata = {
  title: "Transformação: Suporte → QA - Pequi QA",
  description: "Programa estruturado para transformar profissionais de suporte em QAs funcionais de alta performance.",
  keywords: ["suporte para QA", "transformação de carreira", "QA funcional", "capacitação"],
  openGraph: {
    title: "Transformação: Suporte → QA - Pequi QA",
    description: "Programa para transformar profissionais de suporte em QAs de alta performance.",
    url: `${baseUrl}/servicos/suporte-para-qa/`,
    siteName: "Pequi QA",
    locale: "pt_BR",
    type: "website",
  },
};

export default function SuporteParaQAPage() {
  const fases = [
    {
      fase: "Avaliação e Seleção",
      duracao: "1 semana",
      descricao:
        "Identificamos profissionais com perfil adequado através de entrevistas e testes práticos.",
      entregaveis: ["Relatório de perfil dos candidatos", "Recomendação de seleção"],
    },
    {
      fase: "Treinamento Técnico",
      duracao: "4 semanas",
      descricao:
        "Capacitação intensiva em fundamentos de QA, tipos de testes, documentação e ferramentas.",
      entregaveis: [
        "Material didático completo",
        "Exercícios práticos",
        "Avaliações semanais",
      ],
    },
    {
      fase: "Projeto Prático",
      duracao: "4 semanas",
      descricao:
        "Aplicação prática em projeto real da empresa, com acompanhamento de mentor experiente.",
      entregaveis: [
        "Casos de teste documentados",
        "Bugs reportados",
        "Relatório de progresso",
      ],
    },
    {
      fase: "Transição para o Time",
      duracao: "2 semanas",
      descricao:
        "Integração gradual ao time de QA com acompanhamento para garantir autonomia.",
      entregaveis: ["Plano de carreira individual", "Mentoria contínua por 30 dias"],
    },
  ];

  const perfil = [
    "Experiência mínima de 1 ano em suporte técnico",
    "Conhecimento básico de tecnologia",
    "Atenção a detalhes e pensamento analítico",
    "Boa comunicação escrita",
    "Vontade de aprender e mudar de carreira",
  ];

  const resultados = [
    {
      metrica: "Taxa de sucesso",
      valor: "85%",
      descricao: "dos profissionais completam o programa com sucesso",
    },
    {
      metrica: "Tempo médio",
      valor: "3 meses",
      descricao: "para o profissional estar 100% autônomo como QA",
    },
    {
      metrica: "Retenção",
      valor: "90%",
      descricao: "dos profissionais permanecem na função após 1 ano",
    },
  ];

  const beneficios = [
    "Custo menor que contratar QA sênior externo",
    "Profissionais já conhecem o produto e a empresa",
    "Cria plano de carreira para time de suporte",
    "Aumenta motivação e engajamento",
    "Reduz turnover no suporte",
    "Fortalece cultura de qualidade",
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
                Transformação: Suporte → QA
              </h1>
              <p className="text-xl text-white/90">
                Transforme profissionais de suporte em QAs funcionais de alta performance.
              </p>
            </div>
          </div>
        </section>

        {/* Descrição */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-display font-bold text-primary mb-6">
                Por que transformar suporte em QA?
              </h2>
              <div className="prose prose-lg max-w-none text-text/80 space-y-4 mb-12">
                <p>
                  Profissionais de suporte técnico já têm <strong>conhecimento profundo do produto</strong>,
                  entendem as dores dos clientes e têm atenção a detalhes. São características perfeitas
                  para um QA funcional.
                </p>
                <p>
                  O problema é que a transição não acontece naturalmente. É preciso{" "}
                  <strong>treinamento estruturado</strong>, mentoria e acompanhamento para que o
                  profissional desenvolva as habilidades técnicas necessárias.
                </p>
                <p>
                  Nosso programa de transformação já ajudou dezenas de profissionais a fazerem essa
                  transição com sucesso, criando uma carreira sólida em QA.
                </p>
              </div>

              <h2 className="text-4xl font-display font-bold text-primary mb-6">
                Perfil ideal do candidato
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {perfil.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <span className="text-text/80">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Fases do Programa */}
        <section className="py-20 bg-background-alt">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-display font-bold text-primary mb-12 text-center">
                Como funciona o programa
              </h2>
              <div className="space-y-6">
                {fases.map((fase, index) => (
                  <Card key={index} className="bg-white border-none shadow-md">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent flex items-center justify-center text-white font-display font-bold text-xl">
                          {index + 1}
                        </div>
                        <div className="flex-grow">
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="text-2xl font-display font-bold text-primary">
                              {fase.fase}
                            </h3>
                            <span className="text-sm text-text/60 font-semibold">
                              {fase.duracao}
                            </span>
                          </div>
                          <p className="text-text/70 mb-4">{fase.descricao}</p>
                          <div>
                            <p className="text-sm font-semibold text-text/60 mb-2">
                              Entregáveis:
                            </p>
                            <ul className="space-y-1">
                              {fase.entregaveis.map((item, idx) => (
                                <li
                                  key={idx}
                                  className="flex items-center gap-2 text-sm text-text/70"
                                >
                                  <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="mt-8 text-center">
                <p className="text-lg text-text/70">
                  <strong>Duração total:</strong> 11 semanas (aproximadamente 3 meses)
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Resultados */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-display font-bold text-primary mb-12 text-center">
                Resultados do Programa
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {resultados.map((resultado, index) => (
                  <Card
                    key={index}
                    className="bg-gradient-to-br from-secondary to-accent border-none text-white text-center"
                  >
                    <CardContent className="p-8">
                      <TrendingUp className="w-12 h-12 mx-auto mb-4" />
                      <div className="text-sm mb-2 opacity-90">{resultado.metrica}</div>
                      <div className="text-5xl font-display font-bold mb-2">
                        {resultado.valor}
                      </div>
                      <p className="text-sm opacity-90">{resultado.descricao}</p>
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
                Benefícios para a empresa
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

        {/* Investimento */}
        <section className="py-20 bg-primary">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl font-display font-bold text-white mb-6">Investimento</h2>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
                <div className="text-5xl font-display font-bold text-accent mb-4">
                  R$ 15.000
                </div>
                <p className="text-xl text-white/90 mb-6">por profissional</p>
                <ul className="text-left text-white/80 space-y-2 max-w-md mx-auto">
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-accent flex-shrink-0" />
                    Programa completo de 11 semanas
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-accent flex-shrink-0" />
                    Material didático e certificado
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-accent flex-shrink-0" />
                    Mentoria contínua por 30 dias pós-programa
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-accent flex-shrink-0" />
                    Desconto progressivo para múltiplos profissionais
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <CTABanner
          title="Quer criar um plano de carreira em QA para seu time de suporte?"
          subtitle="Vamos conversar sobre como estruturar o programa na sua empresa."
          primaryCTA={{
            text: "Falar no WhatsApp",
            href: "https://wa.me/5548988526644?text=Olá! Quero saber mais sobre Transformação Suporte → QA.",
          }}
          secondaryCTA={{
            text: "Enviar e-mail",
            href: "mailto:jenafreelabs@gmail.com?subject=Transformação Suporte → QA",
          }}
        />
      </main>
      <Footer />
    </>
  );
}
