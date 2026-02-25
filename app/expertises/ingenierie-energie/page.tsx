import Link from "next/link";
import { Zap, Search, FlaskConical, BarChart2, CheckCircle, ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionTitle from "@/components/SectionTitle";

const keyServices = [
  {
    icon: Search,
    title: "Audit énergétique",
    description:
      "Cartographie complète de vos flux énergétiques (électricité, chaleur, froid). Identification des équipements énergivores et des pistes d'optimisation avec ROI chiffré.",
  },
  {
    icon: FlaskConical,
    title: "Ingénierie de projet (FEED/EPC)",
    description:
      "De la faisabilité à la mise en service clé en main. Conception d'usines, de lignes de production, de postes électriques et de systèmes de distribution d'énergie.",
  },
  {
    icon: Zap,
    title: "Projets électriques HT/BT",
    description:
      "Installation et maintenance de postes HT/BT, transformateurs, générateurs de secours, tableaux TGBT. Conformité aux normes NF et IEC.",
  },
  {
    icon: BarChart2,
    title: "Automatisation & IoT industriel",
    description:
      "Intégration de systèmes SCADA, automates programmables (PLC) et capteurs IIoT pour le pilotage en temps réel et la maintenance prédictive.",
  },
];

const benefits = [
  "Réduction de la facture énergétique jusqu'à 30%",
  "Augmentation de la disponibilité des équipements",
  "Conformité aux réglementations énergétiques ivoiriennes",
  "Transition vers l'Industrie 4.0 progressive et maîtrisée",
  "ROI mesurable dès la première année",
];

export default function IngenerieEnergiePage() {
  return (
    <>
      <PageHero
        label="Expertise"
        title="Ingénierie & Énergie"
        subtitle="De la conception à l'optimisation continue de vos systèmes industriels et énergétiques."
        breadcrumbs={[
          { label: "Expertises", href: "/expertises" },
          { label: "Ingénierie & Énergie" },
        ]}
      />

      {/* INTRO */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle
                label="Notre approche"
                title="L'ingénierie au service de votre performance"
              />
              <div className="space-y-4 text-gray-500 leading-relaxed">
                <p>
                  Dans un contexte où l'énergie représente souvent le premier ou
                  deuxième poste de coût d'une unité industrielle, l'optimisation
                  énergétique n'est plus une option — c'est un levier stratégique.
                </p>
                <p>
                  Meysson Engineering conçoit et optimise vos systèmes de production
                  et de distribution d'énergie, en combinant maîtrise technique
                  classique et technologies numériques (IoT, SCADA, IA prédictive).
                </p>
                <p>
                  Notre équipe intervient depuis les études préliminaires jusqu'à
                  la réception définitive, en passant par la supervision de
                  l'installation et la formation de vos équipes.
                </p>
              </div>
            </div>
            <div className="h-80 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center border border-border">
              <Zap size={80} className="text-primary/30" />
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            label="Nos services"
            title="Ce que nous faisons concrètement"
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
                title="Des résultats mesurables, pas des promesses"
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
                Audit énergétique d'une unité de production alimentaire
              </h3>
              <p className="text-white/75 text-sm leading-relaxed mb-4">
                Suite à un audit réalisé sur une usine de traitement agroalimentaire
                de 5 000 m², nos recommandations ont permis une réduction de 22% de
                la consommation électrique en 6 mois, pour un investissement amorti
                en 18 mois.
              </p>
              <Link href="/contact" className="text-accent hover:text-white text-sm font-semibold inline-flex items-center gap-1 transition-colors">
                Demander un audit similaire <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-text mb-4">
            Un projet d'ingénierie ou un audit énergétique ?
          </h2>
          <p className="text-gray-500 mb-6">
            Nos ingénieurs sont disponibles pour une première consultation gratuite.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            Prendre contact
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
