import Link from "next/link";
import { Calendar, ArrowRight, Tag } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionTitle from "@/components/SectionTitle";

const articles = [
  {
    slug: "audit-energetique-performance",
    category: "Énergie",
    date: "15 Janvier 2025",
    readTime: "5 min",
    title: "L'audit énergétique : premier pas vers la performance industrielle",
    excerpt:
      "Comment identifier et réduire jusqu'à 30% de vos coûts énergétiques grâce à une démarche structurée d'audit. Méthodologie, bénéfices et retour sur investissement.",
    author: "Équipe Meysson",
  },
  {
    slug: "iiot-maintenance-predictive",
    category: "Industrie 4.0",
    date: "02 Février 2025",
    readTime: "7 min",
    title: "IIoT et maintenance prédictive : l'usine du futur est là",
    excerpt:
      "Les capteurs connectés et l'intelligence artificielle transforment la maintenance industrielle. Comment déployer un système de maintenance prédictive en Afrique de l'Ouest.",
    author: "Équipe Meysson",
  },
  {
    slug: "cybersecurite-ot-scada",
    category: "Cybersécurité",
    date: "20 Février 2025",
    readTime: "6 min",
    title: "Cybersécurité OT : protéger vos systèmes SCADA en 5 étapes",
    excerpt:
      "Les réseaux de contrôle-commande industriels sont aujourd'hui des cibles privilégiées. Guide pratique pour évaluer et renforcer votre posture de sécurité OT.",
    author: "Équipe Meysson",
  },
  {
    slug: "maintenance-preventive-trs",
    category: "Maintenance",
    date: "05 Mars 2025",
    readTime: "5 min",
    title: "Comment améliorer votre TRS grâce à la maintenance préventive",
    excerpt:
      "Le Taux de Rendement Synthétique (TRS) est l'indicateur clé de la performance industrielle. Découvrez comment un plan de maintenance rigoureux peut transformer vos résultats.",
    author: "Équipe Meysson",
  },
  {
    slug: "cote-ivoire-energie-pirme",
    category: "Marché",
    date: "18 Mars 2025",
    readTime: "4 min",
    title: "Côte d'Ivoire : le Plan PIRME 2025-2030, opportunité pour l'industrie",
    excerpt:
      "Le gouvernement ivoirien investit 68 milliards USD dans les ressources énergétiques et minérales. Quelles opportunités pour les entreprises industrielles locales ?",
    author: "Équipe Meysson",
  },
  {
    slug: "electrique-ht-bt-industrie",
    category: "Électricité",
    date: "01 Avril 2025",
    readTime: "6 min",
    title: "Installations HT/BT industrielles : conformité et sécurité en pratique",
    excerpt:
      "Un réseau électrique non conforme est un risque pour vos équipes et votre production. Tour d'horizon des normes applicables et des bonnes pratiques d'installation.",
    author: "Équipe Meysson",
  },
];

const categories = ["Tous", "Énergie", "Industrie 4.0", "Cybersécurité", "Maintenance", "Marché", "Électricité"];

const categoryColors: Record<string, string> = {
  Énergie: "bg-yellow-100 text-yellow-700",
  "Industrie 4.0": "bg-blue-100 text-blue-700",
  Cybersécurité: "bg-red-100 text-red-700",
  Maintenance: "bg-orange-100 text-orange-700",
  Marché: "bg-purple-100 text-purple-700",
  Électricité: "bg-green-100 text-green-700",
};

export default function BlogPage() {
  return (
    <>
      <PageHero
        label="Blog & Actualités"
        title="Veille & expertise industrielle"
        subtitle="Nos ingénieurs partagent leur vision des enjeux techniques, énergétiques et réglementaires qui façonnent l'industrie ivoirienne."
        breadcrumbs={[{ label: "Blog" }]}
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filtres catégories */}
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                  cat === "Tous"
                    ? "bg-primary text-white"
                    : "bg-muted text-gray-500 hover:bg-primary/10 hover:text-primary border border-border"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Article vedette */}
          <div className="mb-10">
            <Link
              href={`/blog/${articles[0].slug}`}
              className="group grid grid-cols-1 lg:grid-cols-2 bg-muted rounded-2xl border border-border overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="h-56 lg:h-auto bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center min-h-56 relative">
                <span className={`absolute top-4 left-4 text-xs font-semibold px-2.5 py-1 rounded-full ${categoryColors[articles[0].category] || "bg-gray-100 text-gray-600"}`}>
                  {articles[0].category}
                </span>
              </div>
              <div className="p-8 flex flex-col justify-center">
                <div className="flex items-center gap-4 text-xs text-gray-400 mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar size={12} /> {articles[0].date}
                  </span>
                  <span>{articles[0].readTime} de lecture</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-text mb-3 group-hover:text-primary transition-colors leading-snug">
                  {articles[0].title}
                </h2>
                <p className="text-gray-500 leading-relaxed mb-5">
                  {articles[0].excerpt}
                </p>
                <span className="inline-flex items-center gap-2 text-primary font-semibold text-sm">
                  Lire l'article <ArrowRight size={16} />
                </span>
              </div>
            </Link>
          </div>

          {/* Grille articles */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.slice(1).map((article) => (
              <Link
                key={article.slug}
                href={`/blog/${article.slug}`}
                className="group bg-white rounded-xl border border-border overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="h-40 bg-gradient-to-br from-primary/15 to-accent/8 flex items-center justify-center relative">
                  <span className={`absolute top-3 left-3 text-xs font-semibold px-2.5 py-1 rounded-full ${categoryColors[article.category] || "bg-gray-100 text-gray-600"}`}>
                    {article.category}
                  </span>
                  <Tag size={32} className="text-primary/20" />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-3 text-xs text-gray-400 mb-2">
                    <span className="flex items-center gap-1">
                      <Calendar size={11} /> {article.date}
                    </span>
                    <span>{article.readTime}</span>
                  </div>
                  <h3 className="font-semibold text-gray-text text-sm leading-snug mb-2 group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-gray-500 text-xs leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-primary py-14">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <SectionTitle
            title="Restez informé de l'actualité industrielle"
            subtitle="Recevez nos analyses et conseils directement dans votre boîte mail."
            center
            light
          />
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="votre@email.com"
              className="flex-1 px-4 py-2.5 rounded-lg border border-white/20 bg-white/10 text-white placeholder-white/50 focus:outline-none focus:border-white text-sm"
            />
            <button className="bg-white text-primary hover:bg-accent hover:text-white px-5 py-2.5 rounded-lg font-semibold text-sm transition-all whitespace-nowrap">
              S'abonner
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
