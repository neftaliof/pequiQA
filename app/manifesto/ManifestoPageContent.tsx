"use client";

import { motion } from "framer-motion";
import { MessageCircle, Mail } from "lucide-react";

const manifestoSections = [
  {
    title: "Qualidade não é um departamento.",
    content:
      "Qualidade não nasce no final do projeto. Ela nasce nas decisões que tomamos antes do código existir.",
  },
  {
    title: "Qualidade é processo.",
    content:
      "Software confiável não depende de sorte. Depende de critérios claros, integrações confiáveis, automação consistente e responsabilidade compartilhada.",
  },
  {
    title: "Automação não é luxo.",
    content:
      "Automação é a forma mais eficiente de proteger software. Sem automação, cada deploy carrega medo. Com automação, deploy vira rotina.",
  },
  {
    title: "Prevenir é melhor do que encontrar.",
    content:
      "Encontrar bugs é importante. Mas evitar que eles existam é melhor. Esse é o princípio que guia nosso trabalho.",
  },
  {
    title: "Engenharia de qualidade.",
    content:
      "Não entregamos testadores. Entregamos processo, estratégia e automação para que produtos digitais possam evoluir com confiança.",
  },
];

const WHATSAPP_URL =
  "https://wa.me/5548988526644?text=Ol%C3%A1!%20Li%20o%20manifesto%20e%20gostaria%20de%20conversar.";

export function ManifestoPageContent() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative py-20 sm:py-28"
        style={{ background: "linear-gradient(180deg, #0B2F1F 0%, #133A28 100%)" }}
      >
        <div
          className="absolute left-1/2 -translate-x-1/2 w-0.5 opacity-25"
          style={{ background: "#F2B705", top: "-1px", height: "80px" }}
        />
        <div className="max-w-[900px] mx-auto px-6 sm:px-8 text-center">
          <motion.h1
            className="font-display font-bold text-white mb-4"
            style={{ fontSize: "clamp(2.25rem, 5vw, 3.5rem)", lineHeight: 1.2 }}
            initial={{ opacity: 1, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Manifesto
          </motion.h1>
          <motion.p
            className="font-body text-white/80 italic text-lg sm:text-xl"
            initial={{ opacity: 1, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Qualidade não acontece por acaso.
            <br />
            Ela é construída.
          </motion.p>
        </div>
        <div
          className="absolute left-1/2 -translate-x-1/2 w-0.5 opacity-25"
          style={{ background: "#F2B705", bottom: "-1px", height: "80px" }}
        />
      </section>

      {/* Conteúdo — mesmos blocos da landing */}
      <section className="relative py-16 sm:py-24" style={{ background: "#0B2F1F" }}>
        <div
          className="absolute left-1/2 -translate-x-1/2 w-0.5 opacity-25"
          style={{ background: "#F2B705", top: "-1px", height: "100px" }}
        />

        <div className="max-w-[900px] mx-auto px-6 sm:px-8">
          <div className="space-y-14 sm:space-y-16">
            {manifestoSections.map((section, index) => (
              <motion.article
                key={section.title}
                className="space-y-4"
                initial={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2
                  className="font-display font-semibold"
                  style={{ fontSize: "1.5rem", color: "#F2B705", lineHeight: 1.4 }}
                >
                  {section.title}
                </h2>
                <p
                  className="font-body"
                  style={{
                    fontSize: "1.125rem",
                    color: "rgba(255, 255, 255, 0.85)",
                    lineHeight: 1.8,
                  }}
                >
                  {section.content}
                </p>
                {index < manifestoSections.length - 1 && (
                  <div
                    className="w-16 h-0.5 mt-8 opacity-30"
                    style={{ background: "#F2B705" }}
                  />
                )}
              </motion.article>
            ))}
          </div>

          <motion.div
            className="mt-16 sm:mt-20 text-center"
            initial={{ opacity: 1 }}
          >
            <p
              className="italic font-display mb-2"
              style={{ fontSize: "1.25rem", color: "rgba(255, 255, 255, 0.6)" }}
            >
              Esse é o nosso trabalho.
            </p>
            <p
              className="font-body"
              style={{ fontSize: "1.0625rem", color: "rgba(255, 255, 255, 0.5)" }}
            >
              Ajudar times a construir software que cresce sem medo de deploy.
            </p>
          </motion.div>
        </div>

        <div
          className="absolute left-1/2 -translate-x-1/2 w-0.5 opacity-25"
          style={{ background: "#F2B705", bottom: "-1px", height: "100px" }}
        />
      </section>

      {/* CTA */}
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
            Compartilha desses valores?
          </h2>
          <p
            className="font-body mb-8"
            style={{ fontSize: "1.0625rem", color: "#133A28", opacity: 0.85 }}
          >
            Vamos conversar sobre como podemos ajudar sua empresa.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 font-body font-semibold px-6 py-3 rounded-lg transition-all hover:opacity-95"
              style={{
                background: "#F2B705",
                color: "#0B2F1F",
              }}
            >
              <MessageCircle className="w-5 h-5" />
              Falar no WhatsApp
            </a>
            <a
              href="mailto:contato@pequiqa.com.br?subject=Li o manifesto"
              className="inline-flex items-center justify-center gap-2 font-body font-semibold px-6 py-3 rounded-lg border-2 transition-all hover:opacity-90"
              style={{
                borderColor: "#F2B705",
                color: "#0B2F1F",
              }}
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
