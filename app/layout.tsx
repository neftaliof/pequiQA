import type { Metadata } from "next";
import { Playfair_Display, Syne } from "next/font/google";
import "./globals.css";
import CTAWhatsApp from "@/components/CTAWhatsApp";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["700", "800"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-syne",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pequi QA - Consultoria em Qualidade de Software",
  description: "Qualidade que nasce do processo, não da sorte. Consultoria especializada em QA com transparência e resultados mensuráveis.",
  keywords: ["QA", "qualidade de software", "consultoria", "testes", "alocação de QAs", "Goiás"],
  authors: [{ name: "Jenafree Labs" }],
  openGraph: {
    title: "Pequi QA - Consultoria em Qualidade de Software",
    description: "Qualidade que nasce do processo, não da sorte.",
    url: "https://pequiqa.com.br",
    siteName: "Pequi QA",
    locale: "pt_BR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${playfair.variable} ${syne.variable}`}>
      <body className="antialiased">
        {children}
        <CTAWhatsApp />
      </body>
    </html>
  );
}
