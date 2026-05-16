import type { Metadata } from "next";
import { Syne } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-syne",
});

export const metadata: Metadata = {
  title: "NUNK",
  description: "Fotografia humanizada para profissionais, criadores e marcas em Recife.",
  openGraph: {
    title: "NUNK",
    description: "Fotografia humanizada para profissionais, criadores e marcas.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${syne.variable} h-full`}>
      <body className="min-h-full bg-[#050505] text-[#f0f0f0] antialiased">{children}</body>
    </html>
  );
}
