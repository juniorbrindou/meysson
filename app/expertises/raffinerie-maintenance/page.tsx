import Link from "next/link";
import { Wrench, Shield, Clock, TrendingUp, CheckCircle, ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionTitle from "@/components/SectionTitle";

const keyServices = [
  {
    icon: Wrench,
    title: "Maintenance préventive",
    description:
      "Plans de maintenance planifiée pour échangeurs, colonnes, fours et réservoirs. Inspection périodique, remplacement anticipé et suivi GMAO pour zéro arrêt imprévu.",
  },
  {
    icon: Clock,
    title: "Maintenance curative & urgence",
    description:
      "Intervention rapide sur panne. Nos équipes mobiles interviennent 24/7 sur les sites pétrochimiques pour rétablir l'exploitation dans les meilleurs délais.",
  },
  {
    icon: TrendingUp,
    title: "Froid industriel",
    description:
      "Entretien et optimisation des systèmes de réfrigération industrielle : compresseurs, échangeurs thermiques, tours de refroidissement et circuits frigorigènes.",
  },
  {
    icon: Shield,
    title: "Gestion des arrêts programmés",
    description:
      "Planification et pilotage des grands arrêts de maintenance (TAR) sur raffineries et unités chimiques. Coordination des équipes, contrôle des délais et des budgets.",
  },
];

const benefits = [
  "Maximisation du taux de disponibilité des équipements (TRS)",
  "Réduction des coûts de maintenance correctifs non planifiés",
  "Conformité aux standards HSE des sites pétrochimiques",
  "Extension de la durée de vie des équipements",
  "Traçabilité complète des interventions",
];

export default function RaffineriePage() {
  return (
    <>
      <PageHero
        label="Expertise"
        title="Raffinerie & Maintenance Industrielle"
        subtitle="Garantir la continuité d'exploitation de vos installations les plus critiques."
        breadcrumbs={[
          { label: "Expertises", href: "/expertises" },
          { label: "Raffinerie & Maintenance" },
        ]}
      />

      {/* INTRO */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle
                label="Notre approche"
                title="La maintenance comme levier de compétitivité"
              />
              <div className="space-y-4 text-gray-500 leading-relaxed">
                <p>
                  Dans l'industrie pétrochimique et le raffinage, chaque heure
                  d'arrêt non planifié se traduit par des pertes de production
                  considérables. La maintenance n'est pas une charge — c'est un
                  investissement stratégique.
                </p>
                <p>
                  Nos ingénieurs, forts de leur expérience au sein de la SIR et
                  d'autres sites industriels critiques, maîtrisent les contraintes
                  spécifiques de ces environnements : normes ATEX, procédures HSE
                  strictes, coordination multi-corps d'état.
                </p>
                <p>
                  Nous proposons des contrats de maintenance globale ou des
                  interventions ponctuelles, toujours avec le même niveau d'exigence.
                </p>
              </div>
            </div>
            <div className="h-80 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center border border-border">
              <Wrench size={80} className="text-primary/30" />
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            label="Nos services"
            title="Maintenance à 360°"
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
                title="Votre production, notre priorité"
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
                Contrat de maintenance préventive — Site pétrochimique
              </h3>
              <p className="text-white/75 text-sm leading-relaxed mb-4">
                Sur un site de 8 unités de production, la mise en place d'un plan
                de maintenance préventive annuel a permis de réduire de 65% les
                interventions correctives non planifiées et d'augmenter le TRS
                global de 12 points en un an.
              </p>
              <Link href="/contact" className="text-accent hover:text-white text-sm font-semibold inline-flex items-center gap-1 transition-colors">
                Nous consulter <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-text mb-4">
            Un équipement critique à maintenir ?
          </h2>
          <p className="text-gray-500 mb-6">
            Diagnostic technique gratuit. Nos experts se déplacent sur votre site.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            Demander un diagnostic
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
