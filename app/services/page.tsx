import Link from "next/link";
import {
  Search,
  FlaskConical,
  BarChart2,
  Wrench,
  Zap,
  Shield,
  Settings,
  GraduationCap,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionTitle from "@/components/SectionTitle";

const services = [
  {
    icon: Search,
    title: "Audit énergétique",
    description:
      "Diagnostic méthodique de la consommation énergétique d'un site industriel ou tertiaire. Cartographie des flux (électricité, chaleur, froid), identification des équipements énergivores et recommandations chiffrées.",
    benefits: [
      "Réduction des coûts énergétiques (jusqu'à 30%)",
      "Rapport d'audit avec plan d'action priorisé",
      "Conformité réglementaire (décret tertiaire, ISO 50001)",
    ],
    useCase: "Industrie agroalimentaire, tertiaire, hôpitaux, hôtels",
  },
  {
    icon: FlaskConical,
    title: "Ingénierie de projet",
    description:
      "Études d'ingénierie avancées pour la conception d'installations industrielles : études FEED (Front-End Engineering Design), ingénierie de détail, assistance à la maîtrise d'ouvrage (AMO) et suivi de réalisation.",
    benefits: [
      "Réduction des risques techniques dès la conception",
      "Maîtrise des coûts et des délais de livraison",
      "Livrables normés (P&ID, plans isométriques, bilans énergétiques)",
    ],
    useCase: "Nouvelles unités de production, extensions, revamping",
  },
  {
    icon: BarChart2,
    title: "Digitalisation & IoT industriel",
    description:
      "Déploiement de systèmes SCADA, capteurs IIoT, automates programmables (PLC) et plateformes d'analyse de données pour le pilotage en temps réel et la maintenance prédictive.",
    benefits: [
      "Visibilité complète sur la performance en temps réel",
      "Réduction des pannes par anticipation prédictive",
      "Tableaux de bord KPI personnalisés",
    ],
    useCase: "Usines de production, centrales énergétiques, pipelines",
  },
  {
    icon: Wrench,
    title: "Maintenance industrielle",
    description:
      "Plans de maintenance préventive et interventions curatives sur équipements industriels critiques (échangeurs, colonnes, compresseurs, fours). Gestion des arrêts programmés et contrats de maintenance globale.",
    benefits: [
      "Maximisation du taux de rendement synthétique (TRS)",
      "Réduction des arrêts non planifiés",
      "Traçabilité GMAO et reporting mensuel",
    ],
    useCase: "Raffineries, usines chimiques, centrales électriques",
  },
  {
    icon: Zap,
    title: "Projets électriques HT/BT",
    description:
      "Conception et réalisation d'installations électriques haute et basse tension : postes de transformation, TGBT, câblages, générateurs de secours, éclairage industriel et audits de conformité électrique.",
    benefits: [
      "Sécurité électrique et conformité normative (NF, IEC)",
      "Réduction des pertes électriques en ligne",
      "Continuité de service avec alimentation de secours",
    ],
    useCase: "Zones industrielles, bâtiments tertiaires, sites sensibles",
  },
  {
    icon: Shield,
    title: "Cybersécurité industrielle",
    description:
      "Évaluation des risques cyber sur les réseaux OT (automates, SCADA, DCS), segmentation réseau OT/IT, déploiement de pare-feu industriels et élaboration de plans de continuité d'activité (PCA).",
    benefits: [
      "Protection contre les cyberattaques ciblant les SCADA",
      "Conformité IEC 62443 et recommandations ANSSI",
      "Plan de réponse aux incidents cyber",
    ],
    useCase: "Centrales, raffineries, réseaux d'eau, data centers",
  },
  {
    icon: Settings,
    title: "Automatisation & performance",
    description:
      "Intégration de systèmes automatisés (robots, convoyeurs, lignes de conditionnement), définition de KPI de performance et création de tableaux de bord pour le pilotage opérationnel.",
    benefits: [
      "Augmentation de la cadence de production",
      "Amélioration du contrôle qualité",
      "Décisions basées sur des données fiables",
    ],
    useCase: "Lignes d'assemblage, conditionnement, manutention",
  },
  {
    icon: GraduationCap,
    title: "Formation & transfert de compétences",
    description:
      "Sessions de formation sur mesure pour vos équipes techniques : maintenance préventive, gestion des systèmes SCADA, sécurité industrielle HSE, et sensibilisation à la cybersécurité OT.",
    benefits: [
      "Autonomie des équipes internes",
      "Réduction de la dépendance aux intervenants extérieurs",
      "Attestations de formation certifiées",
    ],
    useCase: "Opérateurs, techniciens, ingénieurs de maintenance",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        label="Services"
        title="Nos solutions techniques à votre service"
        subtitle="Chaque service est conçu pour générer un retour sur investissement mesurable et durable."
        breadcrumbs={[{ label: "Services" }]}
      />

      {/* LISTE SERVICES */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-start ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                {/* Texte */}
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center">
                      <service.icon size={20} className="text-primary" />
                    </div>
                    <h2 className="text-xl font-bold text-gray-text">
                      {service.title}
                    </h2>
                  </div>
                  <p className="text-gray-500 leading-relaxed mb-5">
                    {service.description}
                  </p>
                  <p className="text-xs text-gray-400 font-medium uppercase tracking-wider mb-1">
                    Cas d'usage
                  </p>
                  <p className="text-sm text-gray-500 mb-5 italic">
                    {service.useCase}
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-primary hover:gap-3 font-semibold text-sm transition-all"
                  >
                    En savoir plus <ArrowRight size={15} />
                  </Link>
                </div>

                {/* Bénéfices */}
                <div
                  className={`bg-muted rounded-xl border border-border p-6 ${
                    index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""
                  }`}
                >
                  <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-4">
                    Bénéfices clients
                  </p>
                  <ul className="space-y-3">
                    {service.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-3">
                        <CheckCircle
                          size={16}
                          className="text-primary mt-0.5 shrink-0"
                        />
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

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionTitle
            title="Vous avez un besoin spécifique ?"
            subtitle="Notre équipe analyse votre situation et propose une solution sur mesure, avec chiffrage et délais."
            center
            light
          />
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-primary hover:bg-accent hover:text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200"
          >
            Demander un devis gratuit
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
