import { Metadata } from "next";
import { ServicoPageLayout } from "../_components/ServicoPageLayout";
import { SectionLight, SectionDark, cardLight, cardDark, sectionTitleLight, sectionTitleGold, listItemLight } from "../_components/ServicoSection";
import { Check, GraduationCap } from "lucide-react";

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
  { titulo: "In-Company", descricao: "Treinamento presencial ou remoto exclusivo para sua empresa.", ideal: "Times de 5-15 pessoas", valor: "A partir de R$ 8.000" },
  { titulo: "Mentoria Individual", descricao: "Acompanhamento 1:1 personalizado para desenvolver habilidades específicas.", ideal: "Profissionais que querem se especializar", valor: "A partir de R$ 200/hora" },
];

const beneficios = [
  "Material didático completo (slides, exercícios, checklists)",
  "Certificado de conclusão",
  "Acesso a comunidade exclusiva de alunos",
  "Suporte pós-treinamento por 30 dias",
  "Gravação das aulas (formato remoto)",
  "Projeto prático ao final do curso",
];

export default function TreinamentoPage() {
  return (
    <ServicoPageLayout
      title="Treinamento de Times Internos"
      subtitle="Capacitação com as melhores práticas de QA e automação de testes."
      ctaTitle="Quer capacitar seu time em QA?"
      ctaSubtitle="Vamos montar um programa de treinamento personalizado para sua empresa."
      whatsappMessage="Olá! Quero saber mais sobre Treinamento de Times."
      emailSubject="Treinamento de Times"
    >
      <SectionLight>
        <h2 className={sectionTitleLight} style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", color: "#0B2F1F" }}>Para quem é este serviço?</h2>
        <div className="space-y-4 mb-10 font-body" style={{ color: "#133A28", opacity: 0.9, lineHeight: 1.75 }}>
          <p>Este serviço é ideal para empresas que querem <strong>capacitar seu time interno</strong> em qualidade de software, seja para começar do zero ou para especializar profissionais que já atuam na área.</p>
          <p>Você vai se beneficiar se:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Quer formar QAs internos em vez de contratar externos</li>
            <li>Precisa nivelar conhecimento do time</li>
            <li>Quer implementar automação de testes</li>
            <li>Busca especialização em áreas específicas (API, performance, mobile)</li>
            <li>Quer criar uma cultura de qualidade na empresa</li>
          </ul>
        </div>
      </SectionLight>
      <SectionDark>
        <h2 className={`${sectionTitleGold} text-center`} style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", color: "#F2B705" }}>Módulos Disponíveis</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {modulos.map((mod, i) => (
            <div key={i} className={cardDark}>
              <div className="flex items-start justify-between mb-4">
                <GraduationCap className="w-10 h-10" style={{ color: "#F2B705" }} />
                <span className="text-xs font-semibold px-3 py-1 rounded-full" style={{ background: "rgba(242,183,5,0.2)", color: "#F2B705" }}>{mod.nivel}</span>
              </div>
              <h3 className="font-display font-bold text-white text-lg mb-2">{mod.titulo}</h3>
              <p className="text-sm text-white/60 mb-4 font-body">Duração: {mod.duracao}</p>
              <ul className="space-y-2">
                {mod.topicos.map((t, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-white/80 font-body">
                    <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ background: "#F2B705" }} />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="text-center text-white/60 text-sm mt-6 font-body">* Módulos podem ser contratados individualmente ou em pacotes personalizados</p>
      </SectionDark>
      <SectionLight>
        <h2 className={`${sectionTitleLight} text-center`} style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", color: "#0B2F1F" }}>Formatos de Treinamento</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {formatos.map((f, i) => (
            <div key={i} className={cardLight}>
              <h3 className="font-display font-bold text-xl mb-3" style={{ color: "#0B2F1F" }}>{f.titulo}</h3>
              <p className="font-body text-sm mb-3" style={{ color: "#133A28", opacity: 0.85 }}>{f.descricao}</p>
              <p className="text-sm italic mb-4" style={{ color: "#133A28", opacity: 0.7 }}><strong>Ideal para:</strong> {f.ideal}</p>
              <div className="font-display font-bold text-lg" style={{ color: "#F2B705" }}>{f.valor}</div>
            </div>
          ))}
        </div>
      </SectionLight>
      <SectionDark>
        <h2 className={`${sectionTitleGold} text-center`} style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", color: "#F2B705" }}>O que está incluído</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          {beneficios.map((item, i) => (
            <div key={i} className="flex items-start gap-3 font-body text-white/90">
              <Check className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: "#F2B705" }} />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </SectionDark>
    </ServicoPageLayout>
  );
}
