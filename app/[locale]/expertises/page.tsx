import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Zap, Wrench, Wifi, ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionTitle from "@/components/SectionTitle";

export default function ExpertisesPage() {
  const t = useTranslations("expertises");
  const tCommon = useTranslations("common");

  const expertises = [
    {
      icon: Zap,
      title: t("energie_title"),
      description: t("energie_p1"),
      href: "/expertises/ingenierie-energie" as const,
      services: [t("energie_s1_title"), t("energie_s2_title"), t("energie_s3_title"), t("energie_s4_title")],
    },
    {
      icon: Wrench,
      title: t("raffinerie_title"),
      description: t("raffinerie_p1"),
      href: "/expertises/raffinerie-maintenance" as const,
      services: [t("raffinerie_s1_title"), t("raffinerie_s2_title"), t("raffinerie_s3_title"), t("raffinerie_s4_title")],
    },
    {
      icon: Wifi,
      title: t("telecoms_title"),
      description: t("telecoms_p1"),
      href: "/expertises/telecoms-infrastructures" as const,
      services: [t("telecoms_s1_title"), t("telecoms_s2_title"), t("telecoms_s3_title"), t("telecoms_s4_title")],
    },
  ];

  return (
    <>
      <PageHero
        label={t("hub_label")}
        title={t("hub_title")}
        subtitle={t("hub_subtitle")}
        breadcrumbs={[{ label: t("hub_label") }]}
        image="/banner-expertises.jpg"
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {expertises.map((expertise, index) => (
              <div key={expertise.title} className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}>
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                    <expertise.icon size={26} className="text-primary" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-text mb-4">{expertise.title}</h2>
                  <p className="text-gray-500 leading-relaxed mb-6">{expertise.description}</p>
                  <ul className="space-y-2 mb-6">
                    {expertise.services.map((service) => (
                      <li key={service} className="flex items-center gap-3 text-sm text-gray-500">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                        {service}
                      </li>
                    ))}
                  </ul>
                  <Link href={expertise.href} className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-5 py-2.5 rounded-lg font-semibold text-sm transition-colors">
                    {tCommon("learn_more")} <ArrowRight size={16} />
                  </Link>
                </div>
                <div className={`h-64 lg:h-80 rounded-2xl bg-gradient-to-br from-primary/15 to-accent/10 flex items-center justify-center border border-border ${index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                  <expertise.icon size={64} className="text-primary/30" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionTitle title={t("hub_cta_title")} subtitle={t("hub_cta_subtitle")} center />
          <Link href="/contact" className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-lg font-semibold transition-colors">
            {tCommon("discuss_project")} <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
