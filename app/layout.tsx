import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "NUNK — Fotografia de Estúdio em Recife",
  description:
    "Fotografia humanizada para profissionais, criadores de conteúdo e marcas em Recife. Sessões com direção criativa, entrega curada.",
  openGraph: {
    title: "NUNK — Fotografia de Estúdio em Recife",
    description:
      "Fotografia humanizada para profissionais, criadores de conteúdo e marcas.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${poppins.variable} h-full`}>
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
