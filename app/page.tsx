import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroV3 from "@/components/hero/HeroV3";
import ServiceCard from "@/components/ServiceCard";
import CaseCard from "@/components/CaseCard";
import PostCard from "@/components/PostCard";
import CTABanner from "@/components/CTABanner";
import { getAllPosts } from "@/lib/blog";
import DiferencialItem from "@/components/DiferencialItem";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  AlertTriangle,
  Bug,
  FileQuestion,
  BarChart3,
} from "lucide-react";

export default function Home() {
  const painPoints = [
    {
      icon: AlertTriangle,
      title: "Devs testando o próprio código",
      description:
        "Seu time de desenvolvimento está sobrecarregado fazendo testes manuais em vez de focar no que faz melhor: desenvolver.",
    },
    {
      icon: Bug,
      title: "Bugs chegando ao cliente",
      description:
        "Problemas críticos só são descobertos em produção, gerando retrabalho, custos e perda de confiança.",
    },
    {
      icon: FileQuestion,
      title: "Sem plano de testes",
      description:
        "Não há documentação, estratégia ou processo definido. Cada release é uma roleta russa.",
    },
    {
      icon: BarChart3,
      title: "Sem métricas de qualidade",
      description:
        "Você não sabe quantos bugs existem, qual a cobertura de testes ou se a qualidade está melhorando ou piorando.",
    },
  ];

  const services = [
    {
      title: "Implantação de Processo de Qualidade",
      description: "Estruturo do zero o processo de QA da sua empresa com metodologia comprovada.",
      iconName: "Settings",
      href: "/servicos/implantacao-de-qualidade",
    },
    {
      title: "Alocação de QAs Especializados",
      description: "QAs seniores prontos para integrar seu time, com equipamento e suporte adequado.",
      iconName: "Users",
      href: "/servicos/alocacao-de-qas",
    },
    {
      title: "Consultoria Pontual & Auditoria",
      description: "Diagnóstico completo do seu processo atual e plano de ação para melhorias.",
      iconName: "FileSearch",
      href: "/servicos/consultoria-e-auditoria",
    },
    {
      title: "Treinamento de Times Internos",
      description: "Capacitação do seu time com as melhores práticas de QA e automação de testes.",
      iconName: "GraduationCap",
      href: "/servicos/treinamento",
    },
    {
      title: "Transformação: Suporte → QA",
      description: "Programa estruturado para transformar profissionais de suporte em QAs funcionais.",
      iconName: "TrendingUp",
      href: "/servicos/suporte-para-qa",
    },
  ];

  const diferenciais = [
    {
      title: "Transparência total de precificação",
      description:
        "Sem body shopping. Você sabe exatamente quanto custa cada hora e para onde vai seu investimento.",
    },
    {
      title: "QAs com equipamento e suporte adequado",
      description:
        "QAs especializados com as ferramentas certas e suporte técnico para entregar o melhor resultado.",
    },
    {
      title: "Resultado mensurável com métricas reais",
      description:
        "Relatórios claros com KPIs de qualidade: bugs encontrados, cobertura de testes, tempo de ciclo.",
    },
    {
      title: "Identidade goiana, entrega nacional",
      description:
        "Orgulhosamente do Cerrado, atendemos todo o Brasil com a mesma qualidade e comprometimento.",
    },
  ];

  const cases = [
    {
      industry: "Fintech",
      title: "Do zero ao processo de QA em 90 dias",
      result: "Redução de 68% em bugs chegando à produção",
      metric: "-68%",
    },
    {
      industry: "E-commerce",
      title: "Transformação de suporte em QA funcional",
      result: "4x mais cobertura de testes em 6 meses",
      metric: "4x",
    },
    {
      industry: "SaaS B2B",
      title: "Alocação ética com resultado documentado",
      result: "40% de redução de custo com mais cobertura",
      metric: "-40%",
    },
  ];

  const posts = getAllPosts().slice(0, 3);

  return (
    <>
      <Header />
      <main className="relative" style={{ zIndex: 1 }}>
        {/* Hero v3 — canvas + conteúdo unificado */}
        <HeroV3 />

        {/* Pilares */}
        <section
          className="py-10 sm:py-14"
          style={{
            background: "linear-gradient(180deg, var(--hero-dark) 0%, #0a0906 100%)",
          }}
        >
          <div className="flex items-center justify-center max-w-lg mx-auto px-6 font-body">
            <div className="flex-1 flex flex-col items-center gap-1">
              <span className="text-sm font-bold" style={{ color: "rgba(var(--hero-cream),0.8)" }}>
                Processo
              </span>
              <span className="text-[11px] uppercase tracking-widest" style={{ color: "rgba(var(--hero-cream),0.35)" }}>
                No requisito
              </span>
            </div>
            <div className="w-px h-8" style={{ background: "rgba(var(--hero-gold),0.12)" }} />
            <div className="flex-1 flex flex-col items-center gap-1">
              <span className="text-sm font-bold" style={{ color: "rgba(var(--hero-cream),0.8)" }}>
                Automação
              </span>
              <span className="text-[11px] uppercase tracking-widest" style={{ color: "rgba(var(--hero-cream),0.35)" }}>
                No deploy
              </span>
            </div>
            <div className="w-px h-8" style={{ background: "rgba(var(--hero-gold),0.12)" }} />
            <div className="flex-1 flex flex-col items-center gap-1">
              <span className="text-sm font-bold" style={{ color: "rgba(var(--hero-cream),0.8)" }}>
                Prevenção
              </span>
              <span className="text-[11px] uppercase tracking-widest" style={{ color: "rgba(var(--hero-cream),0.35)" }}>
                Antes da produção
              </span>
            </div>
          </div>
        </section>

        {/* Dor do Cliente */}
        <section className="py-12 sm:py-16 md:py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-primary mb-3 sm:mb-4">
                Reconhece algum desses problemas?
              </h2>
              <p className="text-lg sm:text-xl text-text/70">
                Você não está sozinho. Esses são os desafios mais comuns que empresas enfrentam.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-5xl mx-auto">
              {painPoints.map((point, index) => (
                <Card key={index} className="bg-white border-none shadow-md">
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <point.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-display font-bold text-primary mb-2">
                          {point.title}
                        </h3>
                        <p className="text-text/70">{point.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Serviços */}
        <section className="py-12 sm:py-16 md:py-20 bg-primary">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mb-3 sm:mb-4">
                Como posso ajudar
              </h2>
              <p className="text-lg sm:text-xl text-white/80">
                Soluções completas em qualidade de software, do diagnóstico à execução.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {services.map((service, index) => (
                <ServiceCard key={index} {...service} index={index} />
              ))}
            </div>
            <div className="text-center mt-8 sm:mt-12">
              <Button variant="accent" size="lg" asChild>
                <Link href="/servicos">Ver todos os serviços</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Quality Shield */}
        <section className="py-20 px-6 border-t border-white/5">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <div className="text-xs font-bold tracking-widest uppercase text-[#C8860A] mb-3">
                ✦ Framework proprietário
              </div>
              <h2 className="font-display text-4xl font-bold text-white/90 mb-4">
                Quality Shield 🛡️
              </h2>
              <p className="text-white/45 text-sm max-w-md mx-auto leading-relaxed">
                Avalio a maturidade de qualidade do seu produto em 5 pilares.
                O resultado é um score de 0 a 100 com plano de ação priorizado.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-12">
              {[
                { num: "01", title: "Product Quality", desc: "Critérios de aceite e fluxos críticos" },
                { num: "02", title: "Test Strategy", desc: "Pirâmide de testes e cobertura" },
                { num: "03", title: "API & Integration", desc: "Contratos, payload e integrações" },
                { num: "04", title: "Automation & CI/CD", desc: "Pipeline e regressão automatizada" },
                { num: "05", title: "Security & Resilience", desc: "Vulnerabilidades e testes de carga" },
              ].map((p) => (
                <div
                  key={p.num}
                  className="border border-white/8 rounded-xl p-5 hover:border-[#C8860A]/40 transition-colors"
                  style={{ background: "rgba(255,255,255,0.02)" }}
                >
                  <div className="text-[#C8860A] text-xs font-bold mb-3">{p.num}</div>
                  <div className="text-white/85 text-sm font-semibold mb-2 leading-tight">{p.title}</div>
                  <div className="text-white/35 text-xs leading-relaxed">{p.desc}</div>
                </div>
              ))}
            </div>

            <div
              className="border border-white/8 rounded-2xl p-8 text-center"
              style={{ background: "rgba(255,255,255,0.02)" }}
            >
              <div className="text-white/40 text-xs mb-4 tracking-widest uppercase">Score de maturidade</div>
              <div className="flex justify-center items-end gap-2 mb-4">
                <div className="flex gap-1 items-end">
                  <div className="w-10 h-4 rounded bg-red-900/60 opacity-80" />
                  <div className="w-10 h-6 rounded bg-orange-800/60 opacity-80" />
                  <div className="w-10 h-10 rounded bg-yellow-700/60 opacity-80" />
                  <div className="w-10 h-14 rounded bg-[#4A7C28]/80" />
                  <div className="w-10 h-20 rounded bg-[#F0A500]/90" />
                </div>
              </div>
              <div className="flex justify-between text-xs text-white/30 max-w-xs mx-auto">
                <span>0 — risco alto</span>
                <span>40 — gaps críticos</span>
                <span>100 — sólido</span>
              </div>
            </div>

            <div className="text-center mt-10">
              <a
                href="https://wa.me/5548988526644?text=Quero%20fazer%20o%20Quality%20Readiness%20Assessment%20da%20Pequi%20QA."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-bold text-sm text-[#0e1a07] transition-opacity hover:opacity-90"
                style={{ background: "linear-gradient(135deg, #C8860A, #F0A500)" }}
              >
                Quero saber meu score 🌿
              </a>
            </div>
          </div>
        </section>

        {/* Diferenciais */}
        <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-primary via-primary to-[#3a6b1f]">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="space-y-6 sm:space-y-8">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mb-6 sm:mb-8">
                  Por que escolher a Pequi QA?
                </h2>
                {diferenciais.map((diferencial, index) => (
                  <DiferencialItem key={index} {...diferencial} index={index} />
                ))}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="font-display text-3xl font-bold text-[#F0A500] mb-2">
                    15 anos
                  </div>
                  <div className="text-sm text-white/60">de mercado em QA</div>
                </div>
                <div>
                  <div className="font-display text-3xl font-bold text-[#F0A500] mb-2">
                    Direto
                  </div>
                  <div className="text-sm text-white/60">sem intermediário</div>
                </div>
                <div>
                  <div className="font-display text-3xl font-bold text-[#F0A500] mb-2">
                    Cerrado
                  </div>
                  <div className="text-sm text-white/60">raiz, processo e precisão</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Manifesto */}
        <section className="py-12 sm:py-16 md:py-20 bg-[#3a6b1f]">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <blockquote className="text-2xl sm:text-3xl md:text-4xl font-display italic text-white mb-6 sm:mb-8 leading-relaxed px-2">
                "Acreditamos que qualidade não é sorte. É processo, é método, é respeito pelo
                profissional e pelo cliente. É transparência, não body shopping."
              </blockquote>
              <Button variant="accent" size="lg" asChild>
                <Link href="/manifesto">Leia nosso manifesto completo</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Cases */}
        <section className="bg-background">
          <div className="text-center max-w-xl mx-auto py-16 px-6">
            <div className="text-xs font-bold tracking-widest uppercase text-[#C8860A] mb-4">
              ✦ Em construção
            </div>
            <h2 className="font-display text-3xl font-bold text-primary mb-4 leading-tight">
              Primeiros cases em andamento
            </h2>
            <p className="text-text/70 text-sm leading-relaxed mb-8">
              Estamos construindo nossa história com os primeiros clientes.
              Se você quer fazer parte disso — condições especiais para projetos pioneiros.
            </p>
            <a
              href="https://wa.me/5548988526644?text=Quero%20ser%20um%20dos%20primeiros%20clientes%20da%20Pequi%20QA."
              target="_blank"
              className="inline-flex items-center gap-2 font-bold text-sm px-6 py-3 rounded-lg"
              style={{ background: "linear-gradient(135deg, #C8860A, #F0A500)", color: "#0e1a07" }}
            >
              Quero ser pioneiro 🌿
            </a>
          </div>
        </section>

        {/* Blog */}
        <section className="py-12 sm:py-16 md:py-20 bg-background-alt">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-primary mb-3 sm:mb-4">
                Conteúdo de qualidade
              </h2>
              <p className="text-lg sm:text-xl text-text/70">
                Artigos, guias e insights sobre qualidade de software.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
              {posts.map((post, index) => (
                <PostCard key={index} {...post} index={index} />
              ))}
            </div>
            <div className="text-center mt-8 sm:mt-12">
              <Button variant="outline" size="lg" asChild>
                <Link href="/blog">Ver todos os artigos</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <CTABanner
          title="Pronto para transformar a qualidade do seu produto?"
          subtitle="Agende uma conversa sem compromisso e receba um diagnóstico gratuito."
          primaryCTA={{
            text: "Falar no WhatsApp",
            href: "https://wa.me/5548988526644?text=Olá! Gostaria de saber mais sobre os serviços da Pequi QA.",
          }}
          secondaryCTA={{
            text: "Enviar e-mail",
            href: "mailto:contato@pequiqa.com.br",
          }}
        />
      </main>
      <div className="relative" style={{ zIndex: 1 }}>
        <Footer />
      </div>
    </>
  );
}
