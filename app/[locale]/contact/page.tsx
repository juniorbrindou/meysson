import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { getTranslations } from "next-intl/server";
import PageHero from "@/components/PageHero";

export default async function ContactPage() {
  const t = await getTranslations("contact");

  const contactInfos = [
    {
      icon: MapPin,
      label: t("address_label"),
      value: t("address"),
    },
    {
      icon: Phone,
      label: t("phone_label"),
      value: "+225 07 00 00 00 00",
      href: "tel:+2250700000000",
    },
    {
      icon: Mail,
      label: t("email_label"),
      value: "contact@meysson-engineering.ci",
      href: "mailto:contact@meysson-engineering.ci",
    },
    {
      icon: Clock,
      label: t("availability_label"),
      value: t("availability"),
    },
  ];

  const services = [
    t("services.s1"),
    t("services.s2"),
    t("services.s3"),
    t("services.s4"),
    t("services.s5"),
    t("services.s6"),
    t("services.s7"),
    t("services.s8"),
  ];

  return (
    <>
      <PageHero
        label={t("hero_label")}
        title={t("hero_title")}
        subtitle={t("hero_subtitle")}
        breadcrumbs={[{ label: t("hero_label") }]}
        image="/banner-contact.jpg"
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Infos contact */}
            <div className="lg:col-span-1">
              <h2 className="text-xl font-bold text-gray-text mb-6">
                {t("info_title")}
              </h2>
              <div className="space-y-6 mb-8">
                {contactInfos.map((info) => (
                  <div key={info.label} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <info.icon size={18} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">
                        {info.label}
                      </p>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-gray-text text-sm hover:text-primary transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-gray-text text-sm whitespace-pre-line">
                          {info.value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Map placeholder */}
              <div className="h-52 rounded-xl bg-gradient-to-br from-primary/15 to-accent/10 border border-border flex items-center justify-center">
                <div className="text-center">
                  <MapPin size={28} className="text-primary mx-auto mb-2" />
                  <p className="text-gray-500 text-sm">{t("map_city")}</p>
                  <p className="text-gray-400 text-xs">{t("map_country")}</p>
                </div>
              </div>
            </div>

            {/* Formulaire */}
            <div className="lg:col-span-2">
              <h2 className="text-xl font-bold text-gray-text mb-6">
                {t("form_title")}
              </h2>
              <form className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="nom"
                      className="block text-sm font-medium text-gray-text mb-1.5"
                    >
                      {t("field_name")} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="nom"
                      placeholder={t("field_name_placeholder")}
                      className="w-full px-4 py-2.5 rounded-lg border border-border bg-muted focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-sm text-gray-text placeholder-gray-400 transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="societe"
                      className="block text-sm font-medium text-gray-text mb-1.5"
                    >
                      {t("field_company")}
                    </label>
                    <input
                      type="text"
                      id="societe"
                      placeholder={t("field_company_placeholder")}
                      className="w-full px-4 py-2.5 rounded-lg border border-border bg-muted focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-sm text-gray-text placeholder-gray-400 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-text mb-1.5"
                    >
                      {t("field_email")} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder={t("field_email_placeholder")}
                      className="w-full px-4 py-2.5 rounded-lg border border-border bg-muted focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-sm text-gray-text placeholder-gray-400 transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="telephone"
                      className="block text-sm font-medium text-gray-text mb-1.5"
                    >
                      {t("field_phone")}
                    </label>
                    <input
                      type="tel"
                      id="telephone"
                      placeholder={t("field_phone_placeholder")}
                      className="w-full px-4 py-2.5 rounded-lg border border-border bg-muted focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-sm text-gray-text placeholder-gray-400 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="block text-sm font-medium text-gray-text mb-1.5"
                  >
                    {t("field_service")} <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="service"
                    className="w-full px-4 py-2.5 rounded-lg border border-border bg-muted focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-sm text-gray-text transition-colors"
                    required
                  >
                    <option value="">{t("field_service_placeholder")}</option>
                    {services.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-text mb-1.5"
                  >
                    {t("field_message")} <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder={t("field_message_placeholder")}
                    className="w-full px-4 py-2.5 rounded-lg border border-border bg-muted focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-sm text-gray-text placeholder-gray-400 resize-none transition-colors"
                    required
                  />
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="rgpd"
                    className="mt-1 accent-primary"
                    required
                  />
                  <label htmlFor="rgpd" className="text-xs text-gray-500">
                    {t("rgpd")}
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-lg font-semibold transition-colors text-sm"
                >
                  {t("submit")}
                </button>

                <p className="text-xs text-gray-400">{t("field_required")}</p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Bannière urgence */}
      <section className="bg-primary-dark py-10">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-white font-semibold text-lg mb-2">
            {t("urgency_title")}
          </p>
          <p className="text-white/70 text-sm mb-4">{t("urgency_desc")}</p>
          <a
            href="tel:+2250700000000"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-white px-6 py-2.5 rounded-lg font-semibold transition-colors text-sm"
          >
            <Phone size={16} />
            +225 07 00 00 00 00
          </a>
        </div>
      </section>
    </>
  );
}
