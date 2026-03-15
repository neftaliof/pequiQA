/**
 * Formata data ISO (YYYY-MM-DD) para exibição em português: "4 de março, 2026".
 * Arquivo sem dependências de Node para uso em client components.
 */
const MESES: Record<string, string> = {
  "01": "janeiro", "02": "fevereiro", "03": "março", "04": "abril", "05": "maio", "06": "junho",
  "07": "julho", "08": "agosto", "09": "setembro", "10": "outubro", "11": "novembro", "12": "dezembro",
};

export function formatBlogDate(date: string): string {
  const match = String(date).trim().match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (!match) return date;
  const [, year, month, day] = match;
  const d = parseInt(day, 10);
  const mes = MESES[month] || month;
  return `${d} de ${mes}, ${year}`;
}
