import { useTranslations } from "next-intl";
import { Wrench, Shield, Clock, TrendingUp, ArrowRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import PageHero from "@/components/PageHero";
import SectionTitle from "@/components/SectionTitle";
import BenefitsList from "@/components/BenefitsList";
import CTASection from "@/components/CTASection";

export default function RaffineriePage() {
  const t = useTranslations("expertises");
  const tCommon = useTranslations("common");
  const tNav = useTranslations("nav");

  const keyServices = [
    { icon: Wrench, title: t("raffinerie_s1_title"), description: t("raffinerie_s1_desc") },
    { icon: Clock, title: t("raffinerie_s2_title"), description: t("raffinerie_s2_desc") },
    { icon: TrendingUp, title: t("raffinerie_s3_title"), description: t("raffinerie_s3_desc") },
    { icon: Shield, title: t("raffinerie_s4_title"), description: t("raffinerie_s4_desc") },
  ];

  const benefits = [t("raffinerie_b1"), t("raffinerie_b2"), t("raffinerie_b3"), t("raffinerie_b4"), t("raffinerie_b5")];

  return (
    <>
      <PageHero
        label={t("raffinerie_label")}
        title={t("raffinerie_title")}
        subtitle={t("raffinerie_subtitle")}
        breadcrumbs={[{ label: tNav("expertises"), href: "/expertises" }, { label: t("raffinerie_title") }]}
        image="/banner-raffinerie.jpg"
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle label={tCommon("approach")} title={t("raffinerie_approach_title")} />
              <div className="space-y-4 text-gray-500 leading-relaxed">
                <p>{t("raffinerie_p1")}</p>
                <p>{t("raffinerie_p2")}</p>
                <p>{t("raffinerie_p3")}</p>
              </div>
            </div>
            <div className="h-80 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center border border-border">
              <Wrench size={80} className="text-primary/30" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle label={tCommon("our_services_label")} title={t("raffinerie_services_title")} center />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {keyServices.map((service) => (
              <div key={service.title} className="bg-white rounded-xl border border-border p-6 hover:shadow-md transition-shadow">
                <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <service.icon size={20} className="text-primary" />
                </div>
                <h3 className="font-bold text-gray-text mb-2">{service.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <SectionTitle label={tCommon("client_benefits")} title={t("raffinerie_benefits_title")} light />
              <BenefitsList items={benefits} light />
            </div>
            <div className="bg-white/10 rounded-2xl p-8 text-white">
              <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-3">{tCommon("use_case")}</p>
              <h3 className="text-xl font-bold mb-3">{t("raffinerie_case_title")}</h3>
              <p className="text-white/75 text-sm leading-relaxed mb-4">{t("raffinerie_case_desc")}</p>
              <Link href="/contact" className="text-accent hover:text-white text-sm font-semibold inline-flex items-center gap-1 transition-colors">
                {tCommon("consult_us")} <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title={t("raffinerie_cta_title")}
        subtitle={t("raffinerie_cta_subtitle")}
        buttonLabel={tCommon("free_diagnosis")}
      />
    </>
  );
}
