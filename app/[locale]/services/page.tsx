import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Search, FlaskConical, BarChart2, Wrench, Zap, Shield, Settings, GraduationCap, CheckCircle, ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionTitle from "@/components/SectionTitle";

export default function ServicesPage() {
  const t = useTranslations("services");
  const tCommon = useTranslations("common");

  const services = [
    { icon: Search, title: t("items.audit_title"), description: t("items.audit_desc"), benefits: [t("items.audit_b1"), t("items.audit_b2"), t("items.audit_b3")], useCase: t("items.audit_use") },
    { icon: FlaskConical, title: t("items.engineering_title"), description: t("items.engineering_desc"), benefits: [t("items.engineering_b1"), t("items.engineering_b2"), t("items.engineering_b3")], useCase: t("items.engineering_use") },
    { icon: BarChart2, title: t("items.iot_title"), description: t("items.iot_desc"), benefits: [t("items.iot_b1"), t("items.iot_b2"), t("items.iot_b3")], useCase: t("items.iot_use") },
    { icon: Wrench, title: t("items.maintenance_title"), description: t("items.maintenance_desc"), benefits: [t("items.maintenance_b1"), t("items.maintenance_b2"), t("items.maintenance_b3")], useCase: t("items.maintenance_use") },
    { icon: Zap, title: t("items.electrical_title"), description: t("items.electrical_desc"), benefits: [t("items.electrical_b1"), t("items.electrical_b2"), t("items.electrical_b3")], useCase: t("items.electrical_use") },
    { icon: Shield, title: t("items.cyber_title"), description: t("items.cyber_desc"), benefits: [t("items.cyber_b1"), t("items.cyber_b2"), t("items.cyber_b3")], useCase: t("items.cyber_use") },
    { icon: Settings, title: t("items.automation_title"), description: t("items.automation_desc"), benefits: [t("items.automation_b1"), t("items.automation_b2"), t("items.automation_b3")], useCase: t("items.automation_use") },
    { icon: GraduationCap, title: t("items.training_title"), description: t("items.training_desc"), benefits: [t("items.training_b1"), t("items.training_b2"), t("items.training_b3")], useCase: t("items.training_use") },
  ];

  return (
    <>
      <PageHero label={t("hero_label")} title={t("hero_title")} subtitle={t("hero_subtitle")} breadcrumbs={[{ label: t("hero_label") }]} />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div key={service.title} className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-start ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}>
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center">
                      <service.icon size={20} className="text-primary" />
                    </div>
                    <h2 className="text-xl font-bold text-gray-text">{service.title}</h2>
                  </div>
                  <p className="text-gray-500 leading-relaxed mb-5">{service.description}</p>
                  <p className="text-xs text-gray-400 font-medium uppercase tracking-wider mb-1">{t("use_case_label")}</p>
                  <p className="text-sm text-gray-500 mb-5 italic">{service.useCase}</p>
                  <Link href="/contact" className="inline-flex items-center gap-2 text-primary hover:gap-3 font-semibold text-sm transition-all">
                    {tCommon("learn_more")} <ArrowRight size={15} />
                  </Link>
                </div>
                <div className={`bg-muted rounded-xl border border-border p-6 ${index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                  <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-4">{tCommon("client_benefits")}</p>
                  <ul className="space-y-3">
                    {service.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-3">
                        <CheckCircle size={16} className="text-primary mt-0.5 shrink-0" />
                        <span className="text-sm text-gray-500">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionTitle title={t("cta_title")} subtitle={t("cta_subtitle")} center light />
          <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-primary hover:bg-accent hover:text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200">
            {tCommon("request_quote")} <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
