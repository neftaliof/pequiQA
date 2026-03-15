import { Metadata } from "next";
import { ServicoPageLayout } from "../_components/ServicoPageLayout";
import { SectionLight, SectionDark, cardLight, sectionTitleLight, sectionTitleGold, listItemLight, stepNum, stepNumStyle } from "../_components/ServicoSection";
import { Check, Clock, Target } from "lucide-react";

const baseUrl = "https://pequiqa.com.br";

export const metadata: Metadata = {
  title: "Implantação de Processo de Qualidade - Pequi QA",
  description: "Estruturo do zero o processo de QA da sua empresa com metodologia comprovada e resultados mensuráveis.",
  keywords: ["implantação de QA", "processo de qualidade", "estruturação de testes", "CI/CD"],
  openGraph: {
    title: "Implantação de Processo de Qualidade - Pequi QA",
    description: "Do zero ao processo de QA estruturado. Metodologia comprovada e resultados mensuráveis.",
    url: `${baseUrl}/servicos/implantacao-de-qualidade/`,
    siteName: "Pequi QA",
    locale: "pt_BR",
    type: "website",
  },
};

const entregaveis = [
  "Documentação completa do processo de QA",
  "Plano de testes estruturado e templates",
  "Definição de métricas e KPIs de qualidade",
  "Estratégia de automação de testes",
  "Integração com pipeline de CI/CD",
  "Treinamento do time interno",
  "Ferramentas configuradas e prontas para uso",
  "Acompanhamento pós-implantação por 30 dias",
];

const etapas = [
  { fase: "Diagnóstico", duracao: "1-2 semanas", descricao: "Análise profunda do cenário atual, identificação de gargalos e definição de objetivos." },
  { fase: "Planejamento", duracao: "1 semana", descricao: "Desenho do processo de QA, definição de ferramentas e estratégia de implementação." },
  { fase: "Implementação", duracao: "4-6 semanas", descricao: "Estruturação do processo, configuração de ferramentas e criação de documentação." },
  { fase: "Treinamento", duracao: "1-2 semanas", descricao: "Capacitação do time interno para operar o novo processo de forma autônoma." },
  { fase: "Acompanhamento", duracao: "30 dias", descricao: "Suporte para ajustes e garantia de que o processo está funcionando." },
];

const resultados = [
  { valor: "-60%", texto: "Redução de bugs em produção nos primeiros 3 meses" },
  { valor: "3x", texto: "Aumento na cobertura de testes" },
  { valor: "-40%", texto: "Redução no tempo de ciclo de release" },
];

export default function ImplantacaoPage() {
  return (
    <ServicoPageLayout
      title="Implantação de Processo de Qualidade"
      subtitle="Estruturo do zero o processo de QA da sua empresa com metodologia comprovada."
      ctaTitle="Pronto para estruturar seu processo de QA?"
      ctaSubtitle="Agende uma conversa e receba um diagnóstico gratuito."
      whatsappMessage="Olá! Quero saber mais sobre Implantação de Processo de Qualidade."
      emailSubject="Implantação de Processo de Qualidade"
    >
      <SectionLight>
        <h2 className={`${sectionTitleLight}`} style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", color: "#0B2F1F" }}>
          Para quem é este serviço?
        </h2>
        <div className="space-y-4 mb-10 font-body" style={{ color: "#133A28", opacity: 0.9, lineHeight: 1.75 }}>
          <p>
            Este serviço é ideal para empresas que <strong>não têm processo de QA estruturado</strong> e
            precisam começar do zero, ou para aquelas que têm um processo informal e querem profissionalizar.
          </p>
          <p>Você vai se beneficiar se:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Bugs estão chegando frequentemente em produção</li>
            <li>Não há documentação ou plano de testes</li>
            <li>Desenvolvedores estão testando o próprio código</li>
            <li>Não existem métricas de qualidade</li>
            <li>Cada release é uma &quot;aventura&quot;</li>
          </ul>
        </div>
        <h2 className={sectionTitleLight} style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", color: "#0B2F1F" }}>O que você recebe</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          {entregaveis.map((item, i) => (
            <div key={i} className={listItemLight}>
              <Check className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: "#F2B705" }} />
              <span style={{ color: "#133A28", opacity: 0.9 }}>{item}</span>
            </div>
          ))}
        </div>
      </SectionLight>

      <SectionDark>
        <h2 className={`${sectionTitleGold} text-center`} style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", color: "#F2B705" }}>
          Como funciona o projeto
        </h2>
        <div className="space-y-4">
          {etapas.map((etapa, i) => (
            <div key={i} className={`${cardDark} flex flex-col sm:flex-row sm:items-center gap-4`}>
              <div className={stepNum} style={stepNumStyle}>{i + 1}</div>
              <div className="flex-grow">
                <h3 className="font-display font-semibold text-white text-lg mb-1">{etapa.fase}</h3>
                <p className="text-white/80 text-sm sm:text-base font-body">{etapa.descricao}</p>
              </div>
              <div className="flex items-center gap-2 text-white/70 text-sm font-body">
                <Clock size={18} />
                <span className="font-semibold">{etapa.duracao}</span>
              </div>
            </div>
          ))}
        </div>
      </SectionDark>

      <SectionLight>
        <h2 className={`${sectionTitleLight} text-center`} style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", color: "#0B2F1F" }}>
          Resultados Esperados
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {resultados.map((r, i) => (
            <div key={i} className={`${cardLight} text-center`} style={{ background: "linear-gradient(180deg, rgba(11,47,31,0.06) 0%, #FFFFFF 100%)", borderColor: "rgba(242,183,5,0.2)" }}>
              <Target className="w-10 h-10 mx-auto mb-3" style={{ color: "#F2B705" }} />
              <div className="font-display font-bold text-2xl sm:text-3xl mb-1" style={{ color: "#0B2F1F" }}>{r.valor}</div>
              <p className="font-body text-sm" style={{ color: "#133A28", opacity: 0.85 }}>{r.texto}</p>
            </div>
          ))}
        </div>
      </SectionLight>
    </ServicoPageLayout>
  );
}
