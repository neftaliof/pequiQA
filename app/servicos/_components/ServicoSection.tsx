/** Seções padrão para páginas de serviço: fundo claro (#F4EFE6) ou escuro (#0B2F1F) com faixa dourada */
export function SectionLight({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <section className={`relative py-14 sm:py-20 ${className}`} style={{ background: "#F4EFE6" }}>
      <div
        className="absolute left-1/2 -translate-x-1/2 w-0.5 opacity-25"
        style={{ background: "#F2B705", top: "-1px", height: "80px" }}
      />
      <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
      <div
        className="absolute left-1/2 -translate-x-1/2 w-0.5 opacity-25"
        style={{ background: "#F2B705", bottom: "-1px", height: "80px" }}
      />
    </section>
  );
}

export function SectionDark({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <section className={`relative py-14 sm:py-20 ${className}`} style={{ background: "#0B2F1F" }}>
      <div
        className="absolute left-1/2 -translate-x-1/2 w-0.5 opacity-25"
        style={{ background: "#F2B705", top: "-1px", height: "80px" }}
      />
      <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
      <div
        className="absolute left-1/2 -translate-x-1/2 w-0.5 opacity-25"
        style={{ background: "#F2B705", bottom: "-1px", height: "80px" }}
      />
    </section>
  );
}

export const sectionTitleLight = "font-display font-bold mb-6 sm:mb-8";
export const sectionTitleDark = "font-display font-bold mb-6 sm:mb-8 text-white";
export const sectionTitleGold = "font-display font-bold mb-6 sm:mb-8";
export const cardLight =
  "rounded-2xl p-6 sm:p-8 bg-white border border-[rgba(11,47,31,0.08)]";
export const cardDark =
  "rounded-2xl p-6 sm:p-8 bg-white/5 border border-[rgba(242,183,5,0.2)]";
export const listItemLight = "flex items-start gap-3 text-[#133A28] font-body";
export const listItemDark = "flex items-start gap-3 text-white/85 font-body";
export const stepNum =
  "flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center font-display font-bold text-lg";
export const stepNumStyle = { background: "#F2B705", color: "#0B2F1F" };
