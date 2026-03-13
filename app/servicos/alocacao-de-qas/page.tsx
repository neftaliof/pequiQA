import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTABanner from "@/components/CTABanner";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Shield, Users } from "lucide-react";
import { Metadata } from "next";

const baseUrl = "https://pequiqa.com.br";

export const metadata: Metadata = {
  title: "Alocação de QAs Especializados - Pequi QA",
  description: "QAs seniores prontos para integrar seu time, com equipamento e suporte adequado. Sem body shopping.",
  keywords: ["alocação de QAs", "QA dedicado", "body shopping", "time de testes"],
  openGraph: {
    title: "Alocação de QAs Especializados - Pequi QA",
    description: "QAs seniores para seu time. Equipamento e suporte inclusos. Transparência total.",
    url: `${baseUrl}/servicos/alocacao-de-qas/`,
    siteName: "Pequi QA",
    locale: "pt_BR",
    type: "website",
  },
};

export default function AlocacaoPage() {
  const diferenciais = [
    "QAs com no mínimo 3 anos de experiência",
    "Equipamento fornecido pela Pequi QA",
    "Suporte técnico e mentoria contínua",
    "Transparência total de custos",
    "Sem margem abusiva de intermediação",
    "Relatórios semanais de atividades",
    "Substituição sem custo em caso de incompatibilidade",
    "Flexibilidade de contratação (hora ou squad mensal)",
  ];

  const modelos = [
    {
      titulo: "Por Hora",
      descricao: "Ideal para demandas pontuais ou projetos de curta duração.",
      quando: "Quando usar: auditorias, consultorias pontuais, projetos específicos.",
      valor: "A partir de R$ 150/hora",
    },
    {
      titulo: "Squad Mensal",
      descricao: "QA dedicado ao seu time com carga horária fixa mensal.",
      quando: "Quando usar: necessidade contínua de QA, projetos de médio/longo prazo.",
      valor: "A partir de R$ 12.000/mês",
    },
  ];

  const perfis = [
    {
      titulo: "QA Funcional",
      skills: ["Testes manuais", "Planos de teste", "Documentação", "Regressão", "Exploratórios"],
    },
    {
      titulo: "QA de Automação",
      skills: ["Selenium", "Cypress", "Playwright", "API Testing", "CI/CD Integration"],
    },
    {
      titulo: "QA Mobile",
      skills: ["iOS Testing", "Android Testing", "Appium", "Device Farm", "Performance"],
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
                Alocação de QAs Especializados
              </h1>
              <p className="text-xl text-white/90">
                QAs seniores prontos para integrar seu time. Sem body shopping.
              </p>
            </div>
          </div>
        </section>

        {/* Descrição */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-display font-bold text-primary mb-6">
                O que é diferente aqui?
              </h2>
              <div className="prose prose-lg max-w-none text-text/80 space-y-4 mb-12">
                <p>
                  <strong>Não faço body shopping.</strong> Especialistas dedicados não são "peças" que você aluga
                  e esquece. São profissionais valorizados, com equipamento adequado, suporte
                  técnico e acompanhamento contínuo.
                </p>
                <p>
                  Você sabe exatamente quanto custa cada hora, para onde vai seu investimento e quais
                  resultados estão sendo entregues. Sem margem abusiva, sem atravessadores, sem
                  surpresas.
                </p>
              </div>

              <h2 className="text-4xl font-display font-bold text-primary mb-6">
                O que está incluído
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {diferenciais.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <span className="text-text/80">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Modelos de Contratação */}
        <section className="py-20 bg-background-alt">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-display font-bold text-primary mb-12 text-center">
                Modelos de Contratação
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {modelos.map((modelo, index) => (
                  <Card key={index} className="bg-white border-none shadow-lg">
                    <CardContent className="p-8">
                      <h3 className="text-3xl font-display font-bold text-primary mb-4">
                        {modelo.titulo}
                      </h3>
                      <p className="text-text/70 mb-4">{modelo.descricao}</p>
                      <p className="text-sm text-text/60 mb-6 italic">{modelo.quando}</p>
                      <div className="text-2xl font-display font-bold text-accent">
                        {modelo.valor}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <p className="text-center text-text/60 mt-8">
                * Valores podem variar conforme senioridade e especialização. Consulte-nos para um
                orçamento personalizado.
              </p>
            </div>
          </div>
        </section>

        {/* Perfis Disponíveis */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-display font-bold text-primary mb-12 text-center">
                Perfis Disponíveis
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {perfis.map((perfil, index) => (
                  <Card key={index} className="bg-white border-none shadow-md">
                    <CardContent className="p-6">
                      <Users className="w-10 h-10 text-accent mb-4" />
                      <h3 className="text-xl font-display font-bold text-primary mb-4">
                        {perfil.titulo}
                      </h3>
                      <ul className="space-y-2">
                        {perfil.skills.map((skill, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm text-text/70">
                            <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                            {skill}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Garantias */}
        <section className="py-20 bg-primary">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-display font-bold text-white mb-12 text-center">
                Nossas Garantias
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex gap-4">
                  <Shield className="w-12 h-12 text-accent flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-display font-bold text-white mb-2">
                      Substituição sem custo
                    </h3>
                    <p className="text-white/80">
                      Se o profissional não se adequar ao seu time nos primeiros 30 dias,
                      substituímos sem custo adicional.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Shield className="w-12 h-12 text-accent flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-display font-bold text-white mb-2">
                      Transparência total
                    </h3>
                    <p className="text-white/80">
                      Você recebe relatórios semanais com todas as atividades realizadas e horas
                      trabalhadas.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <CTABanner
          title="Precisa de um QA no seu time?"
          subtitle="Vamos conversar sobre suas necessidades e encontrar o profissional ideal."
          primaryCTA={{
            text: "Falar no WhatsApp",
            href: "https://wa.me/5548988526644?text=Olá! Quero saber mais sobre Alocação de QAs.",
          }}
          secondaryCTA={{
            text: "Enviar e-mail",
            href: "mailto:contato@pequiqa.com.br?subject=Alocação de QAs",
          }}
        />
      </main>
      <Footer />
    </>
  );
}
