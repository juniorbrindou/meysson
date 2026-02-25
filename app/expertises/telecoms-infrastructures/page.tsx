import Link from "next/link";
import { Wifi, Shield, Server, Radio, CheckCircle, ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionTitle from "@/components/SectionTitle";

const keyServices = [
  {
    icon: Wifi,
    title: "Réseaux industriels LAN/WAN",
    description:
      "Conception et déploiement de réseaux de communication industriels (Ethernet industriel, fibre optique, Wi-Fi 6). Architecture redondante pour une disponibilité maximale.",
  },
  {
    icon: Server,
    title: "Data centers & infrastructure IT",
    description:
      "Conception, construction et infogérance de salles serveurs et data centers. Alimentation électrique sécurisée (UPS, groupes électrogènes), climatisation et monitoring 24/7.",
  },
  {
    icon: Shield,
    title: "Cybersécurité OT/IT",
    description:
      "Évaluation des risques cyber, déploiement de firewalls industriels, segmentation réseau OT/IT, plans de réponse aux incidents. Protection des SCADA et automates contre les cybermenaces.",
  },
  {
    icon: Radio,
    title: "Supervision & monitoring",
    description:
      "Déploiement de plateformes de supervision unifiées (NOC), tableaux de bord temps réel, alertes proactives et rapports de disponibilité pour vos infrastructures critiques.",
  },
];

const benefits = [
  "Connectivité industrielle haute disponibilité (99,9%+)",
  "Protection des systèmes de contrôle contre les cyberattaques",
  "Réduction des temps d'intervention grâce à la supervision centralisée",
  "Conformité aux standards ANSSI et normes IEC 62443",
  "Évolutivité vers les architectures cloud hybride",
];

export default function TelecomsPage() {
  return (
    <>
      <PageHero
        label="Expertise"
        title="Télécoms & Infrastructures Critiques"
        subtitle="Connecter, sécuriser et superviser vos systèmes d'information industriels."
        breadcrumbs={[
          { label: "Expertises", href: "/expertises" },
          { label: "Télécoms & Infrastructures" },
        ]}
      />

      {/* INTRO */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle
                label="Notre approche"
                title="Des infrastructures résilientes pour l'industrie moderne"
              />
              <div className="space-y-4 text-gray-500 leading-relaxed">
                <p>
                  L'interconnexion croissante des systèmes industriels (OT) avec les
                  réseaux informatiques (IT) crée des opportunités considérables en
                  termes d'efficacité, mais aussi de nouveaux risques en matière de
                  cybersécurité.
                </p>
                <p>
                  Meysson Engineering aide les entreprises industrielles ivoiriennes
                  à construire des architectures télécoms robustes, sécurisées et
                  évolutives, conformes aux standards internationaux.
                </p>
                <p>
                  Des réseaux d'usine jusqu'aux data centers, en passant par la
                  supervision centralisée, nous couvrons l'ensemble du spectre des
                  infrastructures critiques.
                </p>
              </div>
            </div>
            <div className="h-80 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center border border-border">
              <Wifi size={80} className="text-primary/30" />
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            label="Nos services"
            title="Connectivité & sécurité industrielle"
            center
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {keyServices.map((service) => (
              <div
                key={service.title}
                className="bg-white rounded-xl border border-border p-6 hover:shadow-md transition-shadow"
              >
                <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <service.icon size={20} className="text-primary" />
                </div>
                <h3 className="font-bold text-gray-text mb-2">{service.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BÉNÉFICES */}
      <section className="py-16 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <SectionTitle
                label="Bénéfices clients"
                title="Sécurité & continuité opérationnelle"
                light
              />
              <ul className="space-y-3">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3 text-white/85">
                    <CheckCircle size={18} className="text-accent mt-0.5 shrink-0" />
                    <span className="text-sm">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white/10 rounded-2xl p-8 text-white">
              <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-3">
                Cas d'usage type
              </p>
              <h3 className="text-xl font-bold mb-3">
                Sécurisation du réseau OT d'une centrale électrique
              </h3>
              <p className="text-white/75 text-sm leading-relaxed mb-4">
                Audit de cybersécurité, segmentation OT/IT et déploiement d'un
                firewall industriel sur une centrale de 100 MW. Résultat : conformité
                aux exigences réglementaires et zéro incident cyber en 18 mois post-déploiement.
              </p>
              <Link href="/contact" className="text-accent hover:text-white text-sm font-semibold inline-flex items-center gap-1 transition-colors">
                Évaluer vos risques <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-text mb-4">
            Votre réseau industriel est-il sécurisé ?
          </h2>
          <p className="text-gray-500 mb-6">
            Audit de cybersécurité OT gratuit pour les 5 premiers dossiers qualifiés.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            Demander un audit cyber
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
