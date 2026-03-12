import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ContactForm from "@/components/ContactForm";
import { Mail, MessageCircle, MapPin, Clock } from "lucide-react";
import { Metadata } from "next";

const baseUrl = "https://pequiqa.com.br";

export const metadata: Metadata = {
  title: "Contato - Pequi QA",
  description: "Entre em contato com a Pequi QA. Agende uma conversa e receba um diagnóstico gratuito de qualidade.",
  keywords: ["contato", "diagnóstico gratuito", "consultoria QA"],
  openGraph: {
    title: "Contato - Pequi QA",
    description: "Agende uma conversa sem compromisso. Diagnóstico gratuito do seu processo de qualidade.",
    url: `${baseUrl}/contato/`,
    siteName: "Pequi QA",
    locale: "pt_BR",
    type: "website",
  },
};

export default function ContatoPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="bg-primary py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
                Vamos conversar?
              </h1>
              <p className="text-xl text-white/90">
                Agende uma conversa sem compromisso e receba um diagnóstico gratuito.
              </p>
            </div>
          </div>
        </section>

        {/* Formas de Contato */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                {/* WhatsApp */}
                <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-6">
                      <MessageCircle className="w-8 h-8 text-accent" />
                    </div>
                    <h3 className="text-2xl font-display font-bold text-primary mb-4">
                      WhatsApp
                    </h3>
                    <p className="text-text/70 mb-6">
                      Prefere conversar por mensagem? Fale conosco pelo WhatsApp e tire suas dúvidas
                      em tempo real.
                    </p>
                    <Button variant="accent" size="lg" asChild className="w-full">
                      <a
                        href="https://wa.me/5548988526644?text=Olá! Gostaria de saber mais sobre os serviços da Pequi QA."
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Iniciar conversa
                      </a>
                    </Button>
                  </CardContent>
                </Card>

                {/* E-mail */}
                <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                      <Mail className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-display font-bold text-primary mb-4">E-mail</h3>
                    <p className="text-text/70 mb-6">
                      Prefere e-mail? Envie sua mensagem e responderemos em até 24 horas úteis.
                    </p>
                    <Button variant="default" size="lg" asChild className="w-full">
                      <a href="mailto:contato@pequiqa.com.br">Enviar e-mail</a>
                    </Button>
                    <p className="text-sm text-text/60 mt-4 text-center">
                      contato@pequiqa.com.br
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Formulário de contato */}
              <div className="mb-12">
                <ContactForm />
              </div>

              {/* Informações Adicionais */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="bg-background-alt border-none">
                  <CardContent className="p-6 flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-display font-bold text-lg text-primary mb-2">
                        Localização
                      </h4>
                      <p className="text-text/70">
                        Anápolis, GO
                        <br />
                        Atendimento em todo o Brasil
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-background-alt border-none">
                  <CardContent className="p-6 flex items-start gap-4">
                    <Clock className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-display font-bold text-lg text-primary mb-2">
                        Horário de Atendimento
                      </h4>
                      <p className="text-text/70">
                        Segunda a Sexta: 9h às 18h
                        <br />
                        Sábado e Domingo: Fechado
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Diagnóstico Gratuito */}
        <section className="py-20 bg-background-alt">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl font-display font-bold text-primary mb-6">
                Diagnóstico Gratuito
              </h2>
              <p className="text-xl text-text/70 mb-8">
                Na primeira conversa, oferecemos um diagnóstico gratuito do seu processo atual de
                qualidade. Você vai sair da reunião com:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="text-4xl font-display font-bold text-accent mb-2">1</div>
                  <p className="text-text/80">
                    Análise dos principais gargalos de qualidade
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="text-4xl font-display font-bold text-accent mb-2">2</div>
                  <p className="text-text/80">Recomendações de melhoria prioritárias</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="text-4xl font-display font-bold text-accent mb-2">3</div>
                  <p className="text-text/80">Estimativa de investimento e ROI esperado</p>
                </div>
              </div>
              <p className="text-lg text-text/60">
                Sem compromisso. Sem letras miúdas. Apenas uma conversa honesta sobre como podemos
                ajudar.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
