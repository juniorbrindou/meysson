import { Phone, Mail, Clock, MapPin } from "lucide-react";
import { getTranslations } from "next-intl/server";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import MapEmbed from "@/components/MapEmbed";
import companyConfig from "@/config/company.json";

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
      value: companyConfig.contact.phone,
      href: companyConfig.contact.phoneHref,
    },
    {
      icon: Mail,
      label: t("email_label"),
      value: companyConfig.contact.email,
      href: companyConfig.contact.emailHref,
    },
    {
      icon: Clock,
      label: t("availability_label"),
      value: t("availability"),
    },
  ];

  // Clés stables comme `value`, libellés traduits comme texte affiché
  const serviceKeys = ["audit", "engineering", "iot", "maintenance", "electrical", "cyber", "training", "other"] as const;
  const services = serviceKeys.map((key) => ({
    key,
    label: t(`services.${key}`),
  }));

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

              {/* Carte OpenStreetMap — Angré, Abidjan */}
              <MapEmbed
                lat={companyConfig.location.lat}
                lng={companyConfig.location.lng}
                address={t("map_address")}
                openLabel={t("map_open")}
              />
            </div>

            {/* Formulaire */}
            <div className="lg:col-span-2">
              <h2 className="text-xl font-bold text-gray-text mb-6">
                {t("form_title")}
              </h2>
              <ContactForm services={services} />
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
            href={companyConfig.contact.phoneHref}
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-white px-6 py-2.5 rounded-lg font-semibold transition-colors text-sm"
          >
            <Phone size={16} />
            {companyConfig.contact.phone}
          </a>
        </div>
      </section>
    </>
  );
}
