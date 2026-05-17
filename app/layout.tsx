import type { Metadata } from "next";
import { Syne } from "next/font/google";
import "./globals.css";
import ClientRoot from "./components/ClientRoot";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-syne",
});

export const metadata: Metadata = {
  title: "NUNK",
  description: "Fotografia humanizada para profissionais, criadores e marcas em Recife, PE.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/favicon.ico",
    apple: "/icon.png",
  },
  openGraph: {
    title: "NUNK — Fotografia Humanizada",
    description: "Fotografia humanizada para profissionais, criadores e marcas em Recife, PE.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${syne.variable} h-full`}>
      <body className="min-h-full bg-[#050505] text-[#f0f0f0] antialiased">
        <ClientRoot>{children}</ClientRoot>
      </body>
    </html>
  );
}
