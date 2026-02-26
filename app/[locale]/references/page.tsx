import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Building2, TrendingUp, Zap, Wrench, Wifi, CheckCircle, ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionTitle from "@/components/SectionTitle";

export default function ReferencesPage() {
  const t = useTranslations("references");
  const tCommon = useTranslations("common");

  const clients = [
    { name: t("clients_list.c1"), sector: t("clients_list.c1_sector") },
    { name: t("clients_list.c2"), sector: t("clients_list.c2_sector") },
    { name: t("clients_list.c3"), sector: t("clients_list.c3_sector") },
    { name: t("clients_list.c4"), sector: t("clients_list.c4_sector") },
    { name: t("clients_list.c5"), sector: t("clients_list.c5_sector") },
    { name: t("clients_list.c6"), sector: t("clients_list.c6_sector") },
    { name: t("clients_list.c7"), sector: t("clients_list.c7_sector") },
    { name: t("clients_list.c8"), sector: t("clients_list.c8_sector") },
  ];

  const caseStudies = [
    {
      icon: Zap,
      sector: t("case1_sector"),
      title: t("case1_title"),
      context: t("case1_context"),
      solution: t("case1_solution"),
      results: [t("case1_r1"), t("case1_r2"), t("case1_r3"), t("case1_r4")],
    },
    {
      icon: Wrench,
      sector: t("case2_sector"),
      title: t("case2_title"),
      context: t("case2_context"),
      solution: t("case2_solution"),
      results: [t("case2_r1"), t("case2_r2"), t("case2_r3"), t("case2_r4")],
    },
    {
      icon: Wifi,
      sector: t("case3_sector"),
      title: t("case3_title"),
      context: t("case3_context"),
      solution: t("case3_solution"),
      results: [t("case3_r1"), t("case3_r2"), t("case3_r3"), t("case3_r4")],
    },
  ];

  return (
    <>
      <PageHero label={t("hero_label")} title={t("hero_title")} subtitle={t("hero_subtitle")} breadcrumbs={[{ label: t("hero_label") }]} image="/banner-references.jpg" />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle label={t("clients_label")} title={t("clients_title")} center />
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {clients.map((client) => (
              <div key={client.name} className="bg-muted rounded-xl border border-border p-5 flex flex-col items-center justify-center text-center hover:shadow-md hover:border-primary/30 transition-all">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                  <Building2 size={20} className="text-primary" />
                </div>
                <p className="font-semibold text-gray-text text-sm">{client.name}</p>
                <p className="text-gray-400 text-xs mt-1">{client.sector}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle label={t("cases_label")} title={t("cases_title")} subtitle={t("cases_subtitle")} center />
          <div className="space-y-8">
            {caseStudies.map((cs) => (
              <div key={cs.title} className="bg-white rounded-2xl border border-border overflow-hidden shadow-sm">
                <div className="grid grid-cols-1 lg:grid-cols-3">
                  <div className="bg-primary p-8 flex flex-col justify-center">
                    <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-4">
                      <cs.icon size={24} className="text-white" />
                    </div>
                    <span className="text-accent text-xs font-semibold uppercase tracking-widest mb-2">{cs.sector}</span>
                    <h3 className="text-white font-bold text-lg leading-snug">{cs.title}</h3>
                  </div>
                  <div className="lg:col-span-2 p-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div>
                        <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">{tCommon("context")}</p>
                        <p className="text-gray-500 text-sm leading-relaxed">{cs.context}</p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">{tCommon("solution")}</p>
                        <p className="text-gray-500 text-sm leading-relaxed">{cs.solution}</p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">{tCommon("results")}</p>
                        <ul className="space-y-1.5">
                          {cs.results.map((result) => (
                            <li key={result} className="flex items-start gap-2 text-sm">
                              <TrendingUp size={14} className="text-accent mt-0.5 shrink-0" />
                              <span className="text-gray-600">{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-muted rounded-2xl border border-border p-10">
            <CheckCircle size={32} className="text-primary mx-auto mb-4" />
            <blockquote className="text-gray-600 text-lg italic leading-relaxed mb-6">{t("testimonial")}</blockquote>
            <p className="font-semibold text-gray-text">{t("testimonial_name")}</p>
            <p className="text-gray-400 text-sm">{t("testimonial_company")}</p>
          </div>
        </div>
      </section>

      <section className="py-14 bg-primary text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-4">{t("cta_title")}</h2>
          <p className="text-white/75 mb-6">{t("cta_subtitle")}</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-primary hover:bg-accent hover:text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200">
            {tCommon("start_project")} <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
