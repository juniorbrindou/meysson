import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import {
  Zap, Settings, Wifi, Search, Wrench, Shield, BarChart2,
  FlaskConical, ArrowRight, CheckCircle,
} from "lucide-react";
import SectionTitle from "@/components/SectionTitle";
import ServiceCard from "@/components/ServiceCard";
import DomainCard from "@/components/DomainCard";

export default function Home() {
  const t = useTranslations("home");
  const tCommon = useTranslations("common");

  const stats = [
    { value: "100+", label: t("stats.experience") },
    { value: "3", label: t("stats.domains") },
    { value: "50+", label: t("stats.projects") },
  ];

  const domains = [
    {
      icon: Zap,
      title: t("domain_energie_title"),
      description: t("domain_energie_desc"),
      href: "/expertises/ingenierie-energie" as const,
      tags: [t("domain_energie_tag1"), t("domain_energie_tag2"), t("domain_energie_tag3")],
    },
    {
      icon: Wrench,
      title: t("domain_raffinerie_title"),
      description: t("domain_raffinerie_desc"),
      href: "/expertises/raffinerie-maintenance" as const,
      tags: [t("domain_raffinerie_tag1"), t("domain_raffinerie_tag2"), t("domain_raffinerie_tag3")],
    },
    {
      icon: Wifi,
      title: t("domain_telecoms_title"),
      description: t("domain_telecoms_desc"),
      href: "/expertises/telecoms-infrastructures" as const,
      tags: [t("domain_telecoms_tag1"), t("domain_telecoms_tag2"), t("domain_telecoms_tag3")],
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

  const blogPosts = [
    { category: t("blog_posts.post1_cat"), date: t("blog_posts.post1_date"), title: t("blog_posts.post1_title"), excerpt: t("blog_posts.post1_excerpt") },
    { category: t("blog_posts.post2_cat"), date: t("blog_posts.post2_date"), title: t("blog_posts.post2_title"), excerpt: t("blog_posts.post2_excerpt") },
    { category: t("blog_posts.post3_cat"), date: t("blog_posts.post3_date"), title: t("blog_posts.post3_title"), excerpt: t("blog_posts.post3_excerpt") },
  ];

  const trustItems = [
    t("trust_item1"), t("trust_item2"), t("trust_item3"), t("trust_item4"),
  ];

  return (
    <>
      {/* HERO VIDÉO */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gray-text">
        <video autoPlay muted loop playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1' height='1'%3E%3C/svg%3E"
        >
          <source src="https://assets.mixkit.co/videos/47755/47755-720.mp4" type="video/mp4" />
          <source src="https://assets.mixkit.co/videos/17675/17675-720.mp4" type="video/mp4" />
        </video>
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
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
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

      {/* DOMAINES */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle label={t("domains_label")} title={t("domains_title")} subtitle={t("domains_subtitle")} center />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {domains.map((domain) => <DomainCard key={domain.title} {...domain} />)}
          </div>
        </div>
      </section>

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
              <ul className="space-y-2">
                {trustItems.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-white/85 text-sm">
                    <CheckCircle size={16} className="text-accent mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="shrink-0">
              <Link href="/about" className="inline-flex items-center gap-2 bg-white text-primary hover:bg-accent hover:text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200">
                {tCommon("discover")} <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* BLOG */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle label={t("blog_label")} title={t("blog_title")} subtitle={t("blog_subtitle")} />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <Link key={post.title} href="/blog" className="group bg-white rounded-xl border border-border overflow-hidden hover:shadow-md transition-shadow">
                <div className="h-40 bg-gradient-to-br from-primary/20 to-accent/10 relative">
                  <span className="absolute top-3 left-3 bg-primary text-white text-xs font-semibold px-2.5 py-1 rounded-full">{post.category}</span>
                </div>
                <div className="p-5">
                  <p className="text-xs text-gray-400 mb-2">{post.date}</p>
                  <h3 className="font-semibold text-gray-text text-sm leading-snug mb-2 group-hover:text-primary transition-colors">{post.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{post.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/blog" className="inline-flex items-center gap-2 border-2 border-primary text-primary hover:bg-primary hover:text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200">
              {tCommon("all_news")} <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Settings size={40} className="text-primary mx-auto mb-4" />
          <h2 className="text-2xl md:text-3xl font-bold text-gray-text mb-4">{t("cta_title")}</h2>
          <p className="text-gray-500 mb-8">{t("cta_subtitle")}</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-3.5 rounded-lg font-semibold transition-colors text-base">
            {t("cta_button")} <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
