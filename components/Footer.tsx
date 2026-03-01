import { Link } from "@/i18n/navigation";
import { MapPin, Phone, Mail, Linkedin, Facebook } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import companyConfig from "@/config/company.json";

export default function Footer() {
  const t = useTranslations("footer");
  const tNav = useTranslations("nav");

  const expertises = [
    { label: tNav("expertise_energie"), href: "/expertises/ingenierie-energie" as const },
    { label: tNav("expertise_raffinerie"), href: "/expertises/raffinerie-maintenance" as const },
    { label: tNav("expertise_telecoms"), href: "/expertises/telecoms-infrastructures" as const },
  ];

  const services = [
    t("services_list.audit"),
    t("services_list.engineering"),
    t("services_list.iot"),
    t("services_list.maintenance"),
    t("services_list.electrical"),
    t("services_list.cyber"),
  ];

  return (
    <footer className="bg-gray-text text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo + description */}
          <div className="lg:col-span-1">
            {/* Mascot */}
            <div className="mb-1">
              <Image
                src="/logo-mascot.png"
                alt=""
                width={80}
                height={90}
                className="w-16 h-auto object-contain"
              />
            </div>
            {/* Logo text — inverted to appear white on dark bg */}
            <div className="mb-4">
              <Image
                src="/logo-text.png"
                alt="Meysson Engineering"
                width={160}
                height={32}
                className="h-8 w-auto object-contain brightness-0 invert"
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              {t("description")}
            </p>
            <div className="flex gap-3">
              {companyConfig.social.linkedin && (
                <a href={companyConfig.social.linkedin} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center transition-colors" aria-label="LinkedIn">
                  <Linkedin size={16} />
                </a>
              )}
              {companyConfig.social.facebook && (
                <a href={companyConfig.social.facebook} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center transition-colors" aria-label="Facebook">
                  <Facebook size={16} />
                </a>
              )}
            </div>
          </div>

          {/* Expertises */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              {t("expertises_title")}
            </h3>
            <ul className="space-y-2.5">
              {expertises.map((e) => (
                <li key={e.href}>
                  <Link href={e.href} className="text-gray-400 hover:text-accent text-sm transition-colors">
                    {e.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              {t("services_title")}
            </h3>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s}>
                  <Link href="/services" className="text-gray-400 hover:text-accent text-sm transition-colors">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              {t("contact_title")}
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-accent mt-0.5 shrink-0" />
                <span className="text-gray-400 text-sm whitespace-pre-line">{t("address")}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-accent shrink-0" />
                <a href={companyConfig.contact.phoneHref} className="text-gray-400 hover:text-accent text-sm transition-colors">
                  {companyConfig.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-accent shrink-0" />
                <a href={companyConfig.contact.emailHref} className="text-gray-400 hover:text-accent text-sm transition-colors">
                  {companyConfig.contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-gray-500 text-xs">
            {t("copyright", { year: new Date().getFullYear() })}
          </p>
          <div className="flex gap-4">
            <Link href="/" className="text-gray-500 hover:text-gray-300 text-xs transition-colors">
              {t("legal")}
            </Link>
            <Link href="/" className="text-gray-500 hover:text-gray-300 text-xs transition-colors">
              {t("privacy")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
