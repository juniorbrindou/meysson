import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Target, Eye, Award, Users, CheckCircle, ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionTitle from "@/components/SectionTitle";

export default function AboutPage() {
  const t = useTranslations("about");
  const tCommon = useTranslations("common");

  const values = [
    { icon: Target, title: t("value1_title"), description: t("value1_desc") },
    { icon: Award, title: t("value2_title"), description: t("value2_desc") },
    { icon: CheckCircle, title: t("value3_title"), description: t("value3_desc") },
    { icon: Users, title: t("value4_title"), description: t("value4_desc") },
  ];

  const team = [
    { name: t("member1_name"), role: t("member1_role"), experience: t("member1_exp"), background: t("member1_bg") },
    { name: t("member2_name"), role: t("member2_role"), experience: t("member2_exp"), background: t("member2_bg") },
    { name: t("member3_name"), role: t("member3_role"), experience: t("member3_exp"), background: t("member3_bg") },
  ];

  const engagements = [
    t("engagement1"), t("engagement2"), t("engagement3"), t("engagement4"), t("engagement5"),
  ];

  return (
    <>
      <PageHero
        label={t("hero_label")}
        title={t("hero_title")}
        subtitle={t("hero_subtitle")}
        breadcrumbs={[{ label: t("hero_label") }]}
        image="/banner-about.jpg"
      />

      {/* HISTOIRE */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <SectionTitle label={t("history_label")} title={t("history_title")} />
              <div className="space-y-4 text-gray-500 leading-relaxed">
                <p>{t("history_p1")}</p>
                <p>{t("history_p2")}</p>
                <p>{t("history_p3")}</p>
              </div>
            </div>
            <div className="bg-muted rounded-2xl p-8 border border-border">
              <Eye size={32} className="text-primary mb-4" />
              <h3 className="text-xl font-bold text-gray-text mb-3">{t("vision_title")}</h3>
              <p className="text-gray-500 leading-relaxed mb-6">{t("vision_text")}</p>
              <div className="pt-6 border-t border-border">
                <p className="text-sm font-semibold text-gray-text mb-3">{t("vision_promise_label")}</p>
                <p className="text-primary font-medium italic">{t("vision_promise")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VALEURS */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle label={t("values_label")} title={t("values_title")} subtitle={t("values_subtitle")} center />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div key={value.title} className="bg-white rounded-xl border border-border p-6 text-center hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon size={22} className="text-primary" />
                </div>
                <h3 className="font-bold text-gray-text mb-2">{value.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ÉQUIPE */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle label={t("team_label")} title={t("team_title")} subtitle={t("team_subtitle")} center />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {team.map((member) => (
              <div key={member.name} className="bg-muted rounded-xl border border-border overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-primary/30 flex items-center justify-center">
                    <Users size={32} className="text-primary" />
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-gray-text">{member.name}</h3>
                    <span className="text-xs bg-accent/15 text-primary-dark font-semibold px-2 py-0.5 rounded-full">{member.experience}</span>
                  </div>
                  <p className="text-primary text-sm font-medium mb-1">{member.role}</p>
                  <p className="text-gray-400 text-xs">{member.background}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ENGAGEMENTS */}
      <section className="py-16 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle label={t("engagements_label")} title={t("engagements_title")} light />
              <ul className="space-y-3">
                {engagements.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-white/85">
                    <CheckCircle size={18} className="text-accent mt-0.5 shrink-0" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="text-center lg:text-left">
              <p className="text-white/75 text-lg mb-6">{t("engagements_cta")}</p>
              <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-primary hover:bg-accent hover:text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200">
                {tCommon("contact_team")} <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
