import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTABanner from "@/components/CTABanner";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Manifesto - Pequi QA",
  description: "Nosso manifesto: qualidade que nasce do processo, não da sorte. Conheça nossos princípios e compromissos.",
};

export default function ManifestoPage() {
  const principios = [
    {
      title: "Transparência acima de tudo",
      description:
        "Você tem direito de saber exatamente quanto custa cada hora de trabalho, quem está trabalhando no seu projeto e quais resultados estão sendo entregues. Sem letras miúdas, sem surpresas.",
    },
    {
      title: "QA não é commodity",
      description:
        "Profissionais de QA são especialistas, não peças intercambiáveis. Merecem equipamento adequado, suporte técnico, plano de carreira e reconhecimento pelo trabalho que fazem.",
    },
    {
      title: "Resultado é mensurável",
      description:
        "Qualidade não é abstrato. É número de bugs encontrados, cobertura de testes, tempo de ciclo, retrabalho evitado. Se não pode ser medido, não pode ser melhorado.",
    },
    {
      title: "Processo antes de ferramentas",
      description:
        "Não adianta comprar a ferramenta mais cara se não há processo. Primeiro estruturamos o método, depois escolhemos as ferramentas certas para executá-lo.",
    },
    {
      title: "Body shopping não é consultoria",
      description:
        "Alocar pessoas sem processo, sem acompanhamento e sem compromisso com resultado não é consultoria. É intermediação de mão de obra. E isso não resolve o problema de qualidade.",
    },
    {
      title: "Identidade importa",
      description:
        "Somos do Cerrado e temos orgulho disso. Nossa identidade regional não limita nossa atuação nacional, mas define nossos valores: autenticidade, resiliência e compromisso.",
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
                Nosso Manifesto
              </h1>
              <p className="text-2xl text-white/90 italic">
                Qualidade que nasce do processo, não da sorte.
              </p>
            </div>
          </div>
        </section>

        {/* Introdução */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg max-w-none text-text/80 space-y-6">
                <p className="text-xl leading-relaxed">
                  Acreditamos que qualidade de software não é sorte. Não é ter um desenvolvedor
                  "cuidadoso" ou torcer para que os bugs não apareçam em produção.
                </p>
                <p className="text-xl leading-relaxed">
                  Qualidade é <strong>processo</strong>. É <strong>método</strong>. É{" "}
                  <strong>profissionais capacitados</strong> trabalhando com as ferramentas certas
                  e sendo valorizados pelo que fazem.
                </p>
                <p className="text-xl leading-relaxed">
                  E mais importante: qualidade é <strong>transparência</strong>. É saber o que está
                  sendo feito, por quem, quanto custa e quais resultados estão sendo entregues.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Princípios */}
        <section className="py-20 bg-background-alt">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-display font-bold text-primary mb-12 text-center">
                Nossos Princípios
              </h2>
              <div className="space-y-8">
                {principios.map((principio, index) => (
                  <div
                    key={index}
                    className="bg-white p-8 rounded-lg shadow-md border-l-4 border-accent"
                  >
                    <h3 className="text-2xl font-display font-bold text-primary mb-4">
                      {index + 1}. {principio.title}
                    </h3>
                    <p className="text-lg text-text/80">{principio.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Compromisso */}
        <section className="py-20 bg-primary">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-display font-bold text-white mb-8">
                Nosso Compromisso
              </h2>
              <div className="prose prose-lg max-w-none text-white/90 space-y-6">
                <p className="text-xl leading-relaxed">
                  Nos comprometemos a nunca fazer body shopping disfarçado de consultoria.
                </p>
                <p className="text-xl leading-relaxed">
                  Nos comprometemos a valorizar cada profissional de QA que trabalha conosco,
                  garantindo equipamento adequado, suporte técnico e reconhecimento.
                </p>
                <p className="text-xl leading-relaxed">
                  Nos comprometemos a entregar resultados mensuráveis e documentados, com
                  transparência total sobre custos e processos.
                </p>
                <p className="text-xl leading-relaxed">
                  Nos comprometemos a ser autênticos, mantendo nossa identidade regional enquanto
                  entregamos excelência nacional.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <CTABanner
          title="Compartilha desses valores?"
          subtitle="Vamos conversar sobre como podemos ajudar sua empresa."
          primaryCTA={{
            text: "Falar no WhatsApp",
            href: "https://wa.me/5548988526644?text=Olá! Li o manifesto e gostaria de conversar.",
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
