"use client";

import { motion } from "framer-motion";
import { MessageCircle, Mail } from "lucide-react";
import ServiceCard from "@/components/ServiceCard";
import { JoaninhaIcon, PequiSmallIcon, AguaCerradoIcon } from "@/components/icons/CerradoIcons";

const services = [
  {
    title: "Implantação de Processo de Qualidade",
    description:
      "Estruturo do zero o processo de QA da sua empresa com metodologia comprovada e resultados mensuráveis.",
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

const WHATSAPP_SERVICOS =
  "https://wa.me/5548988526644?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os.";

const steps = [
  { num: 1, title: "Diagnóstico Gratuito", text: "Primeira conversa sem compromisso. Analisamos seu cenário atual e identificamos os principais gargalos de qualidade." },
  { num: 2, title: "Proposta Transparente", text: "Apresentamos uma proposta detalhada com escopo, cronograma, investimento e ROI esperado. Sem letras miúdas." },
  { num: 3, title: "Execução com Acompanhamento", text: "Executamos o projeto com acompanhamento semanal, relatórios de progresso e ajustes conforme necessário." },
  { num: 4, title: "Resultados Mensuráveis", text: "Ao final, você recebe um relatório completo com todas as métricas de qualidade e o impacto real do projeto." },
];

export function ServicosPageContent() {
  return (
    <>
      {/* Hero — mesmo estilo manifesto/blog */}
      <section
        className="relative py-20 sm:py-28"
        style={{ background: "linear-gradient(180deg, #0B2F1F 0%, #133A28 100%)" }}
      >
        <div
          className="absolute left-1/2 -translate-x-1/2 w-0.5 opacity-25"
          style={{ background: "#F2B705", top: "-1px", height: "80px" }}
        />
        {/* Decoração: pequi e joaninha */}
        <div className="absolute top-24 left-[12%] opacity-40" aria-hidden>
          <PequiSmallIcon size={28} />
        </div>
        <div className="absolute top-32 right-[15%] opacity-50" aria-hidden>
          <JoaninhaIcon size={22} />
        </div>
        <div className="absolute bottom-20 left-[18%] opacity-30" aria-hidden>
          <JoaninhaIcon size={18} />
        </div>
        <div className="absolute top-40 right-[10%] opacity-35" aria-hidden>
          <PequiSmallIcon size={20} />
        </div>

        <div className="max-w-[900px] mx-auto px-6 sm:px-8 text-center relative z-10">
          <motion.h1
            className="font-display font-bold text-white mb-4"
            style={{ fontSize: "clamp(2.25rem, 5vw, 3.5rem)", lineHeight: 1.2 }}
            initial={{ opacity: 1, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Nossos Serviços
          </motion.h1>
          <motion.p
            className="font-body text-white/80 text-lg sm:text-xl"
            initial={{ opacity: 1, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Soluções completas em qualidade de software, do diagnóstico à execução.
          </motion.p>
        </div>
        <div
          className="absolute left-1/2 -translate-x-1/2 w-0.5 opacity-25"
          style={{ background: "#F2B705", bottom: "-1px", height: "80px" }}
        />
      </section>

      {/* Grid de serviços — fundo cerrado claro */}
      <section className="relative py-16 sm:py-20" style={{ background: "#F4EFE6" }}>
        <div
          className="absolute left-1/2 -translate-x-1/2 w-0.5 opacity-25"
          style={{ background: "#F2B705", top: "-1px", height: "80px" }}
        />
        <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <ServiceCard key={service.href} {...service} index={index} />
            ))}
          </div>
        </div>
        <div
          className="absolute left-1/2 -translate-x-1/2 w-0.5 opacity-25"
          style={{ background: "#F2B705", bottom: "-1px", height: "80px" }}
        />
      </section>

      {/* Como Funciona — fundo verde cerrado */}
      <section className="relative py-16 sm:py-20" style={{ background: "#0B2F1F" }}>
        <div
          className="absolute left-1/2 -translate-x-1/2 w-0.5 opacity-25"
          style={{ background: "#F2B705", top: "-1px", height: "80px" }}
        />
        <div className="max-w-[800px] mx-auto px-6 sm:px-8">
          <h2
            className="font-display font-bold text-center mb-12"
            style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", color: "#F2B705" }}
          >
            Como Funciona
          </h2>
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div
                key={step.num}
                className="flex gap-5 sm:gap-6"
              >
                <div
                  className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-display font-bold text-lg"
                  style={{ background: "#F2B705", color: "#0B2F1F" }}
                >
                  {step.num}
                </div>
                <div>
                  <h3 className="font-display font-semibold text-lg mb-1" style={{ color: "#fff" }}>
                    {step.title}
                  </h3>
                  <p className="font-body text-sm sm:text-base" style={{ color: "rgba(255,255,255,0.8)", lineHeight: 1.65 }}>
                    {step.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div
          className="absolute left-1/2 -translate-x-1/2 w-0.5 opacity-25"
          style={{ background: "#F2B705", bottom: "-1px", height: "80px" }}
        />
      </section>

      {/* Nascidos no Cerrado — joaninha, pequi, fontes */}
      <section
        className="relative py-10 sm:py-12"
        style={{ background: "linear-gradient(180deg, #0B2F1F 0%, #133A28 100%)" }}
      >
        <div className="max-w-2xl mx-auto px-6 sm:px-8 flex flex-col items-center gap-4 text-center">
          <div className="flex items-center justify-center gap-4 flex-wrap" aria-hidden>
            <JoaninhaIcon size={28} style={{ color: "#F2B705", opacity: 0.9 }} />
            <PequiSmallIcon size={32} />
            <AguaCerradoIcon size={26} style={{ color: "#87CEEB" }} />
          </div>
          <p className="font-display font-semibold text-white/90" style={{ fontSize: "1.125rem" }}>
            Nascidos no Cerrado
          </p>
          <p className="font-body text-white/70 text-sm max-w-md">
            Como as águas e o pequi que brotam da nossa região, trazemos qualidade que nasce da raiz.
          </p>
        </div>
      </section>

      {/* CTA — estilo manifesto */}
      <section className="relative py-20" style={{ background: "#F4EFE6" }}>
        <div
          className="absolute left-1/2 -translate-x-1/2 w-0.5 opacity-25"
          style={{ background: "#F2B705", top: "-1px", height: "80px" }}
        />
        <div className="max-w-[600px] mx-auto px-6 sm:px-8 text-center">
          <h2
            className="font-display font-bold mb-4"
            style={{ fontSize: "clamp(1.75rem, 4vw, 2.25rem)", color: "#0B2F1F" }}
          >
            Qual serviço faz mais sentido para você?
          </h2>
          <p className="font-body mb-8" style={{ fontSize: "1.0625rem", color: "#133A28", opacity: 0.85 }}>
            Vamos conversar e encontrar a melhor solução para o seu cenário.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href={WHATSAPP_SERVICOS}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 font-body font-semibold px-6 py-3 rounded-lg transition-all hover:opacity-95"
              style={{ background: "#F2B705", color: "#0B2F1F" }}
            >
              <MessageCircle className="w-5 h-5" />
              Falar no WhatsApp
            </a>
            <a
              href="mailto:contato@pequiqa.com.br?subject=Serviços Pequi QA"
              className="inline-flex items-center justify-center gap-2 font-body font-semibold px-6 py-3 rounded-lg border-2 transition-all hover:opacity-90"
              style={{ borderColor: "#F2B705", color: "#0B2F1F" }}
            >
              <Mail className="w-5 h-5" />
              Enviar e-mail
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
