import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import {
  Zap, Settings, Search, Wrench, Shield, BarChart2,
  FlaskConical, ArrowRight,
} from "lucide-react";
import SectionTitle from "@/components/SectionTitle";
import ServiceCard from "@/components/ServiceCard";
import HeroVideoSlider from "@/components/HeroVideoSlider";
import SectionExplorer from "@/components/SectionExplorer";
import BenefitsList from "@/components/BenefitsList";
import CTASection from "@/components/CTASection";
import companyConfig from "@/config/company.json";

export default function Home() {
  const t = useTranslations("home");
  const tCommon = useTranslations("common");

  const stats = [
    { value: companyConfig.stats.yearsExperience, label: t("stats.experience") },
    { value: companyConfig.stats.domains, label: t("stats.domains") },
    { value: companyConfig.stats.projects, label: t("stats.projects") },
  ];

  const expertises = [
    {
      title: t("domain_energie_title"),
      description: t("domain_energie_desc"),
      href: "/expertises/ingenierie-energie",
      image: "/banner-energie.jpg",
      tags: [t("domain_energie_tag1"), t("domain_energie_tag2"), t("domain_energie_tag3")],
      ctaLabel: tCommon("explore"),
    },
    {
      title: t("domain_raffinerie_title"),
      description: t("domain_raffinerie_desc"),
      href: "/expertises/raffinerie-maintenance",
      image: "/banner-raffinerie.jpg",
      tags: [t("domain_raffinerie_tag1"), t("domain_raffinerie_tag2"), t("domain_raffinerie_tag3")],
      ctaLabel: tCommon("explore"),
    },
    {
      title: t("domain_telecoms_title"),
      description: t("domain_telecoms_desc"),
      href: "/expertises/telecoms-infrastructures",
      image: "/banner-telecoms.jpg",
      tags: [t("domain_telecoms_tag1"), t("domain_telecoms_tag2"), t("domain_telecoms_tag3")],
      ctaLabel: tCommon("explore"),
    },
  ];

  const services = [
    { icon: Search, title: t("services.audit_title"), description: t("services.audit_desc"), benefit: t("services.audit_benefit") },
    { icon: FlaskConical, title: t("services.engineering_title"), description: t("services.engineering_desc"), benefit: t("services.engineering_benefit") },
    { icon: BarChart2, title: t("services.iot_title"), description: t("services.iot_desc"), benefit: t("services.iot_benefit") },
    { icon: Wrench, title: t("services.maintenance_title"), description: t("services.maintenance_desc"), benefit: t("services.maintenance_benefit") },
    { icon: Zap, title: t("services.electrical_title"), description: t("services.electrical_desc"), benefit: t("services.electrical_benefit") },
    { icon: Shield, title: t("services.cyber_title"), description: t("services.cyber_desc"), benefit: t("services.cyber_benefit") },
  ];

  const trustItems = [
    t("trust_item1"), t("trust_item2"), t("trust_item3"), t("trust_item4"),
  ];

  return (
    <>
      {/* HERO VIDÉO */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gray-text">
        <HeroVideoSlider />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/55 to-black/25" />
        <div className="absolute inset-0 bg-primary/20" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 w-full">
          <div className="max-w-3xl">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full text-accent bg-white/15 backdrop-blur-sm mb-6 animate-slide-up">
              {t("hero_badge")}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 animate-slide-up">
              {t.rich("hero_title", { highlight: (chunks) => <span className="text-accent">{chunks}</span> })}
            </h1>
            <p className="text-white/85 text-lg md:text-xl mb-10 animate-slide-up-d1 max-w-2xl">
              {t.rich("hero_subtitle", {
                years: t("hero_years"),
                strong: (chunks) => <strong className="text-white">{chunks}</strong>,
              })}
            </p>
            <div className="flex flex-wrap gap-4 animate-slide-up-d2">
              <Link href="/services" className="inline-flex items-center gap-2 bg-white text-primary hover:bg-accent hover:text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 shadow-lg">
                {tCommon("our_services")} <ArrowRight size={18} />
              </Link>
              <Link href="/contact" className="inline-flex items-center gap-2 border-2 border-white/50 hover:border-white hover:bg-white/10 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 backdrop-blur-sm">
                {tCommon("contact_us")}
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce z-10">
          <div className="w-0.5 h-8 bg-white/30 rounded-full" />
          <div className="w-1.5 h-1.5 rounded-full bg-white/50" />
        </div>
      </section>

      {/* STATS */}
      <section className="bg-primary-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-3 gap-6 divide-x divide-white/20">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center px-4">
                <p className="text-3xl md:text-4xl font-bold text-white">{stat.value}</p>
                <p className="text-white/60 text-xs md:text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERTISES — Immersive diagonal split panels */}
      <SectionExplorer items={expertises} />

      {/* SERVICES */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle label={t("services_label")} title={t("services_title")} subtitle={t("services_subtitle")} center />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service) => <ServiceCard key={service.title} {...service} />)}
          </div>
          <div className="text-center mt-10">
            <Link href="/services" className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-lg font-semibold transition-colors">
              {tCommon("all_services")} <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* BANDEAU CONFIANCE */}
      <section className="bg-primary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-xl">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">{t("trust_title")}</h2>
              <BenefitsList items={trustItems} light />
            </div>
            <div className="shrink-0">
              <Link href="/about" className="inline-flex items-center gap-2 bg-white text-primary hover:bg-accent hover:text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200">
                {tCommon("discover")} <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <CTASection
        title={t("cta_title")}
        subtitle={t("cta_subtitle")}
        buttonLabel={t("cta_button")}
        icon={Settings}
      />
    </>
  );
}
