import { Building2, TrendingUp, Zap, Wrench, Wifi, CheckCircle } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionTitle from "@/components/SectionTitle";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const clients = [
  { name: "Industrie Alimentaire CI", sector: "Agroalimentaire" },
  { name: "Société Pétrolière X", sector: "Pétrochimie" },
  { name: "Centrale Energie A", sector: "Énergie" },
  { name: "Groupe Logistique B", sector: "Transport" },
  { name: "Hôpital Universitaire", sector: "Santé" },
  { name: "Zone Industrielle Yopougon", sector: "Industrie" },
  { name: "Opérateur Télécom CI", sector: "Télécoms" },
  { name: "Groupe Immobilier D", sector: "Tertiaire" },
];

const caseStudies = [
  {
    icon: Zap,
    sector: "Agroalimentaire",
    title: "Réduction de 22% des coûts énergétiques — Usine de traitement",
    context:
      "Une usine de traitement de 5 000 m² confrontée à une facture électrique en hausse constante (+18% sur 3 ans). L'objectif : identifier les gisements d'économies sans investissement massif.",
    solution:
      "Audit énergétique complet (électricité + froid + air comprimé), suivi de la mise en œuvre des 12 recommandations prioritaires et installation de 8 capteurs IoT de suivi.",
    results: [
      "−22% de consommation électrique annuelle",
      "Économies estimées : 48 millions FCFA/an",
      "Investissement amorti en 14 mois",
      "Conformité aux nouvelles normes énergétiques CI",
    ],
  },
  {
    icon: Wrench,
    sector: "Pétrochimie",
    title: "Réduction de 65% des arrêts non planifiés — Site industriel critique",
    context:
      "Un site pétrochimique de 8 unités de production subissait en moyenne 4 arrêts non planifiés par mois, représentant des pertes de production considérables.",
    solution:
      "Mise en place d'un plan de maintenance préventive annuel, déploiement d'une GMAO et formation des équipes internes aux bonnes pratiques de maintenance.",
    results: [
      "−65% d'interventions correctives non planifiées",
      "+12 points de TRS global",
      "Durée de vie équipements étendue de 3 ans",
      "ROI positif dès le 6ème mois",
    ],
  },
  {
    icon: Wifi,
    sector: "Énergie",
    title: "Sécurisation OT d'une centrale électrique de 100 MW",
    context:
      "Face à la recrudescence des cyberattaques sur les infrastructures critiques africaines, une centrale électrique souhaitait évaluer et renforcer sa posture de sécurité OT.",
    solution:
      "Audit de cybersécurité IEC 62443, segmentation réseau OT/IT, déploiement de firewalls industriels Fortinet, et élaboration d'un plan de réponse aux incidents.",
    results: [
      "Zéro incident cyber en 18 mois post-déploiement",
      "Conformité aux exigences réglementaires CI",
      "Plan de continuité d'activité opérationnel",
      "Formation cybersécurité de 12 opérateurs",
    ],
  },
];

export default function ReferencesPage() {
  return (
    <>
      <PageHero
        label="Références"
        title="Ils nous font confiance"
        subtitle="Des résultats concrets, des clients satisfaits. Découvrez comment Meysson Engineering a transformé des défis industriels en performances durables."
        breadcrumbs={[{ label: "Références" }]}
      />

      {/* LOGOS CLIENTS */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            label="Nos clients"
            title="Ils nous ont fait confiance"
            center
          />
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {clients.map((client) => (
              <div
                key={client.name}
                className="bg-muted rounded-xl border border-border p-5 flex flex-col items-center justify-center text-center hover:shadow-md hover:border-primary/30 transition-all"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                  <Building2 size={20} className="text-primary" />
                </div>
                <p className="font-semibold text-gray-text text-sm">{client.name}</p>
                <p className="text-gray-400 text-xs mt-1">{client.sector}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ÉTUDES DE CAS */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            label="Études de cas"
            title="Résultats chiffrés, impact réel"
            subtitle="Trois exemples représentatifs de notre façon de travailler et des résultats que nous livrons."
            center
          />
          <div className="space-y-8">
            {caseStudies.map((cs) => (
              <div
                key={cs.title}
                className="bg-white rounded-2xl border border-border overflow-hidden shadow-sm"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3">
                  {/* Sidebar */}
                  <div className="bg-primary p-8 flex flex-col justify-center">
                    <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-4">
                      <cs.icon size={24} className="text-white" />
                    </div>
                    <span className="text-accent text-xs font-semibold uppercase tracking-widest mb-2">
                      {cs.sector}
                    </span>
                    <h3 className="text-white font-bold text-lg leading-snug">
                      {cs.title}
                    </h3>
                  </div>

                  {/* Contenu */}
                  <div className="lg:col-span-2 p-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                      <div>
                        <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">
                          Contexte
                        </p>
                        <p className="text-gray-500 text-sm leading-relaxed">
                          {cs.context}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">
                          Solution
                        </p>
                        <p className="text-gray-500 text-sm leading-relaxed">
                          {cs.solution}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">
                          Résultats
                        </p>
                        <ul className="space-y-1.5">
                          {cs.results.map((result) => (
                            <li
                              key={result}
                              className="flex items-start gap-2 text-sm"
                            >
                              <TrendingUp
                                size={14}
                                className="text-accent mt-0.5 shrink-0"
                              />
                              <span className="text-gray-600">{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TÉMOIGNAGE */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-muted rounded-2xl border border-border p-10">
            <CheckCircle size={32} className="text-primary mx-auto mb-4" />
            <blockquote className="text-gray-600 text-lg italic leading-relaxed mb-6">
              &ldquo;Meysson Engineering a su comprendre nos contraintes opérationnelles
              dès le premier échange. Leur plan de maintenance a transformé notre
              approche de la fiabilité industrielle. Les résultats sont là, et
              l'équipe est toujours disponible.&rdquo;
            </blockquote>
            <p className="font-semibold text-gray-text">Directeur Technique</p>
            <p className="text-gray-400 text-sm">Site pétrochimique, Abidjan</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-primary text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-4">
            Votre projet pourrait être notre prochaine référence
          </h2>
          <p className="text-white/75 mb-6">
            Prenez contact avec nos experts pour discuter de vos enjeux industriels.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-primary hover:bg-accent hover:text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200"
          >
            Démarrer un projet
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
