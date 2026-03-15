import { Metadata } from "next";
import { ServicoPageLayout } from "../_components/ServicoPageLayout";
import { SectionLight, SectionDark, cardLight, cardDark, sectionTitleLight, sectionTitleGold, listItemLight, stepNum, stepNumStyle } from "../_components/ServicoSection";
import { Check, FileSearch } from "lucide-react";

const baseUrl = "https://pequiqa.com.br";

export const metadata: Metadata = {
  title: "Consultoria Pontual & Auditoria de QA - Pequi QA",
  description: "Diagnóstico completo do seu processo atual e plano de ação detalhado para melhorias imediatas.",
  keywords: ["consultoria QA", "auditoria de qualidade", "diagnóstico de testes", "plano de ação"],
  openGraph: {
    title: "Consultoria Pontual & Auditoria de QA - Pequi QA",
    description: "Diagnóstico do seu processo de QA e plano de ação para melhorias.",
    url: `${baseUrl}/servicos/consultoria-e-auditoria/`,
    siteName: "Pequi QA",
    locale: "pt_BR",
    type: "website",
  },
};

const entregaveis = [
  "Relatório completo de auditoria (20-30 páginas)",
  "Análise de cobertura de testes atual",
  "Identificação de gaps e riscos",
  "Avaliação de ferramentas e processos",
  "Plano de ação priorizado",
  "Estimativa de investimento para melhorias",
  "ROI esperado para cada ação",
  "Apresentação executiva dos resultados",
];

const casos = [
  { titulo: "Auditoria Pré-Investimento", descricao: "Você está considerando investir em QA mas não sabe por onde começar? Fazemos um diagnóstico completo e mostramos o caminho." },
  { titulo: "Segunda Opinião", descricao: "Já tem um processo de QA mas quer validar se está no caminho certo? Auditamos e sugerimos melhorias." },
  { titulo: "Troubleshooting", descricao: "Bugs em produção aumentaram? Releases estão lentos? Identificamos a causa raiz e sugerimos correções." },
];

const processo = [
  { etapa: "Coleta de Informações", descricao: "Entrevistas com stakeholders, análise de documentação existente e observação de processos.", duracao: "3-5 dias" },
  { etapa: "Análise Técnica", descricao: "Avaliação de cobertura de testes, ferramentas, automação, integração com CI/CD e métricas.", duracao: "3-5 dias" },
  { etapa: "Elaboração do Relatório", descricao: "Consolidação dos achados, priorização de ações e elaboração do plano de melhoria.", duracao: "2-3 dias" },
  { etapa: "Apresentação", descricao: "Apresentação executiva dos resultados e discussão do plano de ação com o time.", duracao: "1 dia" },
];

export default function ConsultoriaPage() {
  return (
    <ServicoPageLayout
      title="Consultoria Pontual & Auditoria de QA"
      subtitle="Diagnóstico completo do seu processo atual e plano de ação para melhorias."
      ctaTitle="Quer um diagnóstico do seu processo de QA?"
      ctaSubtitle="Agende uma conversa e receba uma proposta personalizada."
      whatsappMessage="Olá! Quero saber mais sobre Consultoria e Auditoria."
      emailSubject="Consultoria e Auditoria"
    >
      <SectionLight>
        <h2 className={sectionTitleLight} style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", color: "#0B2F1F" }}>Para quem é este serviço?</h2>
        <div className="space-y-4 mb-10 font-body" style={{ color: "#133A28", opacity: 0.9, lineHeight: 1.75 }}>
          <p>Este serviço é ideal para empresas que <strong>já têm algum processo de QA</strong> mas querem validar se está funcionando bem, identificar melhorias ou resolver problemas específicos.</p>
          <p>Também é perfeito para quem:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Está considerando investir em QA e quer um diagnóstico antes</li>
            <li>Precisa de uma segunda opinião sobre o processo atual</li>
            <li>Está enfrentando aumento de bugs em produção</li>
            <li>Quer entender o ROI de investir em qualidade</li>
            <li>Precisa de um plano de ação claro e priorizado</li>
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
        <h2 className={`${sectionTitleGold} text-center`} style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", color: "#F2B705" }}>Quando contratar</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {casos.map((c, i) => (
            <div key={i} className={cardDark}>
              <FileSearch className="w-10 h-10 mb-4" style={{ color: "#F2B705" }} />
              <h3 className="font-display font-bold text-white text-lg mb-2">{c.titulo}</h3>
              <p className="text-white/80 text-sm font-body">{c.descricao}</p>
            </div>
          ))}
        </div>
      </SectionDark>

      <SectionLight>
        <h2 className={`${sectionTitleLight} text-center`} style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", color: "#0B2F1F" }}>Como funciona</h2>
        <div className="space-y-4">
          {processo.map((item, i) => (
            <div key={i} className={`${cardLight} flex flex-col sm:flex-row sm:items-start gap-4`}>
              <div className={stepNum} style={stepNumStyle}>{i + 1}</div>
              <div className="flex-grow">
                <div className="flex flex-wrap justify-between items-start gap-2 mb-1">
                  <h3 className="font-display font-bold text-lg" style={{ color: "#0B2F1F" }}>{item.etapa}</h3>
                  <span className="text-sm font-semibold" style={{ color: "#133A28", opacity: 0.7 }}>{item.duracao}</span>
                </div>
                <p className="font-body text-sm" style={{ color: "#133A28", opacity: 0.85 }}>{item.descricao}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center font-body" style={{ color: "#133A28", opacity: 0.85 }}>
          <p><strong>Duração total:</strong> 10-15 dias úteis</p>
          <p className="mt-1"><strong>Investimento:</strong> A partir de R$ 8.000</p>
        </div>
      </SectionLight>
    </ServicoPageLayout>
  );
}
