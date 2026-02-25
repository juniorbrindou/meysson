import { MapPin, Phone, Mail, Clock } from "lucide-react";
import PageHero from "@/components/PageHero";

const services = [
  "Audit énergétique",
  "Ingénierie de projet",
  "Digitalisation & IoT",
  "Maintenance industrielle",
  "Électricité HT/BT",
  "Cybersécurité OT",
  "Formation & transfert",
  "Autre",
];

const contactInfos = [
  {
    icon: MapPin,
    label: "Adresse",
    value: "Angré, Abidjan\nCôte d'Ivoire",
  },
  {
    icon: Phone,
    label: "Téléphone",
    value: "+225 07 00 00 00 00",
    href: "tel:+2250700000000",
  },
  {
    icon: Mail,
    label: "Email",
    value: "contact@meysson-engineering.ci",
    href: "mailto:contact@meysson-engineering.ci",
  },
  {
    icon: Clock,
    label: "Disponibilité",
    value: "Lun – Ven : 8h – 18h\nSam : 9h – 13h",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        label="Contact"
        title="Parlons de votre projet"
        subtitle="Notre équipe d'experts vous répond sous 48h pour analyser votre besoin et vous proposer une solution adaptée."
        breadcrumbs={[{ label: "Contact" }]}
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Infos contact */}
            <div className="lg:col-span-1">
              <h2 className="text-xl font-bold text-gray-text mb-6">
                Nos coordonnées
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
                  <p className="text-gray-500 text-sm">Angré, Abidjan</p>
                  <p className="text-gray-400 text-xs">Côte d'Ivoire</p>
                </div>
              </div>
            </div>

            {/* Formulaire */}
            <div className="lg:col-span-2">
              <h2 className="text-xl font-bold text-gray-text mb-6">
                Envoyez-nous un message
              </h2>
              <form className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="nom"
                      className="block text-sm font-medium text-gray-text mb-1.5"
                    >
                      Nom complet <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="nom"
                      placeholder="Jean Dupont"
                      className="w-full px-4 py-2.5 rounded-lg border border-border bg-muted focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-sm text-gray-text placeholder-gray-400 transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="societe"
                      className="block text-sm font-medium text-gray-text mb-1.5"
                    >
                      Société
                    </label>
                    <input
                      type="text"
                      id="societe"
                      placeholder="Nom de votre entreprise"
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
                      Email professionnel <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="jean@entreprise.ci"
                      className="w-full px-4 py-2.5 rounded-lg border border-border bg-muted focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-sm text-gray-text placeholder-gray-400 transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="telephone"
                      className="block text-sm font-medium text-gray-text mb-1.5"
                    >
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      id="telephone"
                      placeholder="+225 07 00 00 00 00"
                      className="w-full px-4 py-2.5 rounded-lg border border-border bg-muted focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-sm text-gray-text placeholder-gray-400 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="block text-sm font-medium text-gray-text mb-1.5"
                  >
                    Service concerné <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="service"
                    className="w-full px-4 py-2.5 rounded-lg border border-border bg-muted focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-sm text-gray-text transition-colors"
                    required
                  >
                    <option value="">Sélectionnez un service</option>
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
                    Décrivez votre besoin <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Décrivez votre projet, vos contraintes et vos objectifs..."
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
                    J'accepte que mes données soient utilisées pour traiter ma demande
                    conformément à la politique de confidentialité de Meysson
                    Engineering. Aucune donnée n'est transmise à des tiers.
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-lg font-semibold transition-colors text-sm"
                >
                  Envoyer ma demande
                </button>

                <p className="text-xs text-gray-400">
                  * Champs obligatoires. Réponse garantie sous 48h ouvrées.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Bannière urgence */}
      <section className="bg-primary-dark py-10">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-white font-semibold text-lg mb-2">
            Urgence industrielle ?
          </p>
          <p className="text-white/70 text-sm mb-4">
            Pour toute intervention urgente sur site, contactez-nous directement
            par téléphone.
          </p>
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
