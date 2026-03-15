import { Metadata } from "next";
import { ServicoPageLayout } from "../_components/ServicoPageLayout";
import { SectionLight, SectionDark, cardLight, cardDark, sectionTitleLight, sectionTitleGold, listItemLight } from "../_components/ServicoSection";
import { Check, Shield, Users } from "lucide-react";

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
  { titulo: "Por Hora", descricao: "Ideal para demandas pontuais ou projetos de curta duração.", quando: "Auditorias, consultorias pontuais, projetos específicos.", valor: "A partir de R$ 150/hora" },
  { titulo: "Squad Mensal", descricao: "QA dedicado ao seu time com carga horária fixa mensal.", quando: "Necessidade contínua de QA, projetos de médio/longo prazo.", valor: "A partir de R$ 12.000/mês" },
];

const perfis = [
  { titulo: "QA Funcional", skills: ["Testes manuais", "Planos de teste", "Documentação", "Regressão", "Exploratórios"] },
  { titulo: "QA de Automação", skills: ["Selenium", "Cypress", "Playwright", "API Testing", "CI/CD Integration"] },
  { titulo: "QA Mobile", skills: ["iOS Testing", "Android Testing", "Appium", "Device Farm", "Performance"] },
];

export default function AlocacaoPage() {
  return (
    <ServicoPageLayout
      title="Alocação de QAs Especializados"
      subtitle="QAs seniores prontos para integrar seu time. Sem body shopping."
      ctaTitle="Precisa de um QA no seu time?"
      ctaSubtitle="Vamos conversar sobre suas necessidades e encontrar o profissional ideal."
      whatsappMessage="Olá! Quero saber mais sobre Alocação de QAs."
      emailSubject="Alocação de QAs"
    >
      <SectionLight>
        <h2 className={sectionTitleLight} style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", color: "#0B2F1F" }}>O que é diferente aqui?</h2>
        <div className="space-y-4 mb-10 font-body" style={{ color: "#133A28", opacity: 0.9, lineHeight: 1.75 }}>
          <p><strong>Não faço body shopping.</strong> Especialistas dedicados não são &quot;peças&quot; que você aluga e esquece. São profissionais valorizados, com equipamento adequado, suporte técnico e acompanhamento contínuo.</p>
          <p>Você sabe exatamente quanto custa cada hora, para onde vai seu investimento e quais resultados estão sendo entregues. Sem margem abusiva, sem atravessadores, sem surpresas.</p>
        </div>
        <h2 className={sectionTitleLight} style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", color: "#0B2F1F" }}>O que está incluído</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          {diferenciais.map((item, i) => (
            <div key={i} className={listItemLight}>
              <Check className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: "#F2B705" }} />
              <span style={{ color: "#133A28", opacity: 0.9 }}>{item}</span>
            </div>
          ))}
        </div>
      </SectionLight>
      <SectionDark>
        <h2 className={`${sectionTitleGold} text-center`} style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", color: "#F2B705" }}>Modelos de Contratação</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {modelos.map((m, i) => (
            <div key={i} className={cardDark}>
              <h3 className="font-display font-bold text-white text-xl mb-3">{m.titulo}</h3>
              <p className="text-white/80 text-sm font-body mb-3">{m.descricao}</p>
              <p className="text-xs text-white/60 italic mb-4">Quando usar: {m.quando}</p>
              <div className="font-display font-bold text-lg" style={{ color: "#F2B705" }}>{m.valor}</div>
            </div>
          ))}
        </div>
        <p className="text-center text-white/60 text-sm mt-6 font-body">* Valores podem variar conforme senioridade e especialização. Consulte-nos para um orçamento personalizado.</p>
      </SectionDark>
      <SectionLight>
        <h2 className={`${sectionTitleLight} text-center`} style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", color: "#0B2F1F" }}>Perfis Disponíveis</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {perfis.map((p, i) => (
            <div key={i} className={cardLight}>
              <Users className="w-10 h-10 mb-4" style={{ color: "#F2B705" }} />
              <h3 className="font-display font-bold text-lg mb-3" style={{ color: "#0B2F1F" }}>{p.titulo}</h3>
              <ul className="space-y-2">
                {p.skills.map((s, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm font-body" style={{ color: "#133A28", opacity: 0.85 }}>
                    <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#F2B705" }} />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </SectionLight>
      <SectionDark>
        <h2 className={`${sectionTitleGold} text-center`} style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", color: "#F2B705" }}>Nossas Garantias</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="flex gap-4">
            <Shield className="w-10 h-10 flex-shrink-0" style={{ color: "#F2B705" }} />
            <div>
              <h3 className="font-display font-semibold text-white mb-2">Substituição sem custo</h3>
              <p className="text-white/80 text-sm font-body">Se o profissional não se adequar ao seu time nos primeiros 30 dias, substituímos sem custo adicional.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <Shield className="w-10 h-10 flex-shrink-0" style={{ color: "#F2B705" }} />
            <div>
              <h3 className="font-display font-semibold text-white mb-2">Transparência total</h3>
              <p className="text-white/80 text-sm font-body">Você recebe relatórios semanais com todas as atividades realizadas e horas trabalhadas.</p>
            </div>
          </div>
        </div>
      </SectionDark>
    </ServicoPageLayout>
  );
}
