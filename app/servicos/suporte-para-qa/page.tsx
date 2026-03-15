import { Metadata } from "next";
import { ServicoPageLayout } from "../_components/ServicoPageLayout";
import { SectionLight, SectionDark, cardLight, cardDark, sectionTitleLight, sectionTitleGold, listItemLight, stepNum, stepNumStyle } from "../_components/ServicoSection";
import { Check, TrendingUp } from "lucide-react";

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
  { metrica: "Taxa de sucesso", valor: "85%", descricao: "dos profissionais completam o programa com sucesso" },
  { metrica: "Tempo médio", valor: "3 meses", descricao: "para o profissional estar 100% autônomo como QA" },
  { metrica: "Retenção", valor: "90%", descricao: "dos profissionais permanecem na função após 1 ano" },
];

const beneficios = [
  "Custo menor que contratar QA sênior externo",
  "Profissionais já conhecem o produto e a empresa",
  "Cria plano de carreira para time de suporte",
  "Aumenta motivação e engajamento",
  "Reduz turnover no suporte",
  "Fortalece cultura de qualidade",
];

export default function SuporteParaQAPage() {
  return (
    <ServicoPageLayout
      title="Transformação: Suporte → QA"
      subtitle="Transforme profissionais de suporte em QAs funcionais de alta performance."
      ctaTitle="Quer criar um plano de carreira em QA para seu time de suporte?"
      ctaSubtitle="Vamos conversar sobre como estruturar o programa na sua empresa."
      whatsappMessage="Olá! Quero saber mais sobre Transformação Suporte → QA."
      emailSubject="Transformação Suporte → QA"
    >
      <SectionLight>
        <h2 className={sectionTitleLight} style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", color: "#0B2F1F" }}>Por que transformar suporte em QA?</h2>
        <div className="space-y-4 mb-10 font-body" style={{ color: "#133A28", opacity: 0.9, lineHeight: 1.75 }}>
          <p>Profissionais de suporte técnico já têm <strong>conhecimento profundo do produto</strong>, entendem as dores dos clientes e têm atenção a detalhes. São características perfeitas para um QA funcional.</p>
          <p>O problema é que a transição não acontece naturalmente. É preciso <strong>treinamento estruturado</strong>, mentoria e acompanhamento para que o profissional desenvolva as habilidades técnicas necessárias.</p>
          <p>Nosso programa de transformação já ajudou dezenas de profissionais a fazerem essa transição com sucesso, criando uma carreira sólida em QA.</p>
        </div>
        <h2 className={sectionTitleLight} style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", color: "#0B2F1F" }}>Perfil ideal do candidato</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          {perfil.map((item, i) => (
            <div key={i} className={listItemLight}>
              <Check className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: "#F2B705" }} />
              <span style={{ color: "#133A28", opacity: 0.9 }}>{item}</span>
            </div>
          ))}
        </div>
      </SectionLight>
      <SectionDark>
        <h2 className={`${sectionTitleGold} text-center`} style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", color: "#F2B705" }}>Como funciona o programa</h2>
        <div className="space-y-4">
          {fases.map((fase, i) => (
            <div key={i} className={`${cardDark} flex flex-col sm:flex-row sm:items-start gap-4`}>
              <div className={stepNum} style={stepNumStyle}>{i + 1}</div>
              <div className="flex-grow">
                <div className="flex flex-wrap justify-between items-start gap-2 mb-1">
                  <h3 className="font-display font-bold text-white text-lg">{fase.fase}</h3>
                  <span className="text-sm font-semibold text-white/70">{fase.duracao}</span>
                </div>
                <p className="text-white/80 text-sm font-body mb-3">{fase.descricao}</p>
                <p className="text-xs font-semibold text-white/60 mb-2">Entregáveis:</p>
                <ul className="space-y-1">
                  {fase.entregaveis.map((item, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-white/75 font-body">
                      <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#F2B705" }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        <p className="text-center text-white/70 text-sm mt-6 font-body"><strong>Duração total:</strong> 11 semanas (aproximadamente 3 meses)</p>
      </SectionDark>
      <SectionLight>
        <h2 className={`${sectionTitleLight} text-center`} style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", color: "#0B2F1F" }}>Resultados do Programa</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {resultados.map((r, i) => (
            <div key={i} className={`${cardLight} text-center`} style={{ borderColor: "rgba(242,183,5,0.2)" }}>
              <TrendingUp className="w-10 h-10 mx-auto mb-3" style={{ color: "#F2B705" }} />
              <div className="text-xs font-body mb-1" style={{ color: "#133A28", opacity: 0.8 }}>{r.metrica}</div>
              <div className="font-display font-bold text-3xl mb-1" style={{ color: "#0B2F1F" }}>{r.valor}</div>
              <p className="text-sm font-body" style={{ color: "#133A28", opacity: 0.85 }}>{r.descricao}</p>
            </div>
          ))}
        </div>
      </SectionLight>
      <SectionDark>
        <h2 className={`${sectionTitleGold} text-center`} style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", color: "#F2B705" }}>Benefícios para a empresa</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          {beneficios.map((item, i) => (
            <div key={i} className="flex items-start gap-3 font-body text-white/90">
              <Check className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: "#F2B705" }} />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </SectionDark>
      <SectionLight>
        <h2 className={`${sectionTitleLight} text-center`} style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", color: "#0B2F1F" }}>Investimento</h2>
        <div className="max-w-xl mx-auto rounded-2xl p-6 sm:p-8 border text-center" style={{ background: "rgba(11,47,31,0.06)", borderColor: "rgba(242,183,5,0.25)" }}>
          <div className="font-display font-bold text-4xl sm:text-5xl mb-2" style={{ color: "#F2B705" }}>R$ 15.000</div>
          <p className="font-body text-lg mb-6" style={{ color: "#133A28", opacity: 0.9 }}>por profissional</p>
          <ul className="text-left space-y-2 max-w-sm mx-auto font-body text-sm" style={{ color: "#133A28", opacity: 0.9 }}>
            <li className="flex items-center gap-2"><Check className="w-5 h-5 flex-shrink-0" style={{ color: "#F2B705" }} /> Programa completo de 11 semanas</li>
            <li className="flex items-center gap-2"><Check className="w-5 h-5 flex-shrink-0" style={{ color: "#F2B705" }} /> Material didático e certificado</li>
            <li className="flex items-center gap-2"><Check className="w-5 h-5 flex-shrink-0" style={{ color: "#F2B705" }} /> Mentoria contínua por 30 dias pós-programa</li>
            <li className="flex items-center gap-2"><Check className="w-5 h-5 flex-shrink-0" style={{ color: "#F2B705" }} /> Desconto progressivo para múltiplos profissionais</li>
          </ul>
        </div>
      </SectionLight>
    </ServicoPageLayout>
  );
}
