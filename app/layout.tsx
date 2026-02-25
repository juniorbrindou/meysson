import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Meysson Engineering — Ingénierie Industrielle en Côte d'Ivoire",
  description:
    "Meysson Engineering, votre partenaire stratégique en ingénierie industrielle, maintenance, énergie et télécoms en Côte d'Ivoire. Plus de 100 ans d'expertise cumulée.",
  keywords:
    "ingénierie industrielle, maintenance, énergie, télécoms, Abidjan, Côte d'Ivoire",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${inter.className} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
