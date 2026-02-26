import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Calendar, ArrowRight, Tag } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionTitle from "@/components/SectionTitle";

const categoryColors: Record<string, string> = {
  Énergie: "bg-yellow-100 text-yellow-700",
  Energy: "bg-yellow-100 text-yellow-700",
  "Industrie 4.0": "bg-blue-100 text-blue-700",
  "Industry 4.0": "bg-blue-100 text-blue-700",
  Cybersécurité: "bg-red-100 text-red-700",
  Cybersecurity: "bg-red-100 text-red-700",
  Maintenance: "bg-orange-100 text-orange-700",
  Marché: "bg-purple-100 text-purple-700",
  Market: "bg-purple-100 text-purple-700",
  Électricité: "bg-green-100 text-green-700",
  Electrical: "bg-green-100 text-green-700",
};

export default function BlogPage() {
  const t = useTranslations("blog");
  const tCommon = useTranslations("common");

  const articles = [
    { slug: "audit-energetique-performance", category: t("articles.a1_cat"), date: t("articles.a1_date"), readTime: "5", title: t("articles.a1_title"), excerpt: t("articles.a1_excerpt") },
    { slug: "iiot-maintenance-predictive", category: t("articles.a2_cat"), date: t("articles.a2_date"), readTime: "7", title: t("articles.a2_title"), excerpt: t("articles.a2_excerpt") },
    { slug: "cybersecurite-ot-scada", category: t("articles.a3_cat"), date: t("articles.a3_date"), readTime: "6", title: t("articles.a3_title"), excerpt: t("articles.a3_excerpt") },
    { slug: "maintenance-preventive-trs", category: t("articles.a4_cat"), date: t("articles.a4_date"), readTime: "5", title: t("articles.a4_title"), excerpt: t("articles.a4_excerpt") },
    { slug: "cote-ivoire-energie-pirme", category: t("articles.a5_cat"), date: t("articles.a5_date"), readTime: "4", title: t("articles.a5_title"), excerpt: t("articles.a5_excerpt") },
    { slug: "electrique-ht-bt-industrie", category: t("articles.a6_cat"), date: t("articles.a6_date"), readTime: "6", title: t("articles.a6_title"), excerpt: t("articles.a6_excerpt") },
  ];

  const categories = [t("filter_all"), t("articles.a1_cat"), t("articles.a2_cat"), t("articles.a3_cat"), t("articles.a4_cat"), t("articles.a5_cat"), t("articles.a6_cat")];

  return (
    <>
      <PageHero label={t("hero_label")} title={t("hero_title")} subtitle={t("hero_subtitle")} breadcrumbs={[{ label: t("hero_label") }]} />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
              <button type="button" key={cat}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${cat === t("filter_all") ? "bg-primary text-white" : "bg-muted text-gray-500 hover:bg-primary/10 hover:text-primary border border-border"}`}>
                {cat}
              </button>
            ))}
          </div>

          {/* Article vedette */}
          <div className="mb-10">
            <Link href="/blog" className="group grid grid-cols-1 lg:grid-cols-2 bg-muted rounded-2xl border border-border overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-56 lg:h-auto bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center min-h-56 relative">
                <span className={`absolute top-4 left-4 text-xs font-semibold px-2.5 py-1 rounded-full ${categoryColors[articles[0].category] || "bg-gray-100 text-gray-600"}`}>
                  {articles[0].category}
                </span>
              </div>
              <div className="p-8 flex flex-col justify-center">
                <div className="flex items-center gap-4 text-xs text-gray-400 mb-3">
                  <span className="flex items-center gap-1"><Calendar size={12} /> {articles[0].date}</span>
                  <span>{tCommon("read_time", { minutes: articles[0].readTime })}</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-text mb-3 group-hover:text-primary transition-colors leading-snug">{articles[0].title}</h2>
                <p className="text-gray-500 leading-relaxed mb-5">{articles[0].excerpt}</p>
                <span className="inline-flex items-center gap-2 text-primary font-semibold text-sm">
                  {tCommon("read_article")} <ArrowRight size={16} />
                </span>
              </div>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.slice(1).map((article) => (
              <Link key={article.slug} href="/blog" className="group bg-white rounded-xl border border-border overflow-hidden hover:shadow-md transition-shadow">
                <div className="h-40 bg-gradient-to-br from-primary/15 to-accent/8 flex items-center justify-center relative">
                  <span className={`absolute top-3 left-3 text-xs font-semibold px-2.5 py-1 rounded-full ${categoryColors[article.category] || "bg-gray-100 text-gray-600"}`}>
                    {article.category}
                  </span>
                  <Tag size={32} className="text-primary/20" />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-3 text-xs text-gray-400 mb-2">
                    <span className="flex items-center gap-1"><Calendar size={11} /> {article.date}</span>
                    <span>{tCommon("read_time", { minutes: article.readTime })}</span>
                  </div>
                  <h3 className="font-semibold text-gray-text text-sm leading-snug mb-2 group-hover:text-primary transition-colors">{article.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed line-clamp-3">{article.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary py-14">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <SectionTitle title={t("newsletter_title")} subtitle={t("newsletter_subtitle")} center light />
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input type="email" placeholder={t("newsletter_placeholder")}
              className="flex-1 px-4 py-2.5 rounded-lg border border-white/20 bg-white/10 text-white placeholder-white/50 focus:outline-none focus:border-white text-sm" />
            <button type="button" className="bg-white text-primary hover:bg-accent hover:text-white px-5 py-2.5 rounded-lg font-semibold text-sm transition-all whitespace-nowrap">
              {t("newsletter_cta")}
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
