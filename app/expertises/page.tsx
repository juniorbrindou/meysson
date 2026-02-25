import Link from "next/link";
import { Zap, Wrench, Wifi, ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionTitle from "@/components/SectionTitle";

const expertises = [
  {
    icon: Zap,
    title: "Ingénierie & Énergie",
    description:
      "De la conception à la mise en service, nous couvrons l'intégralité du cycle de vie de vos installations industrielles. Notre expertise en optimisation énergétique et IoT industriel vous permet de réduire vos coûts tout en améliorant la fiabilité de vos systèmes.",
    href: "/expertises/ingenierie-energie",
    services: [
      "Audit énergétique",
      "Ingénierie de projet (FEED, EPC)",
      "Automatisation & IoT",
      "Projets électriques HT/BT",
      "Optimisation des procédés",
    ],
  },
  {
    icon: Wrench,
    title: "Raffinerie & Maintenance",
    description:
      "La maintenance est le nerf de la guerre industrielle. Nos équipes interviennent sur les sites pétrochimiques les plus exigeants, garantissant la continuité d'exploitation grâce à des plans de maintenance rigoureux et des interventions réactives.",
    href: "/expertises/raffinerie-maintenance",
    services: [
      "Maintenance préventive & curative",
      "Inspection d'équipements critiques",
      "Froid industriel",
      "Gestion des arrêts programmés",
      "Revamping & modernisation",
    ],
  },
  {
    icon: Wifi,
    title: "Télécoms & Infrastructures Critiques",
    description:
      "La connectivité et la sécurité des systèmes d'information sont des enjeux vitaux pour l'industrie moderne. Nous concevons et déployons des architectures réseaux résilientes et des solutions de cybersécurité OT adaptées à vos contraintes.",
    href: "/expertises/telecoms-infrastructures",
    services: [
      "Réseaux LAN/WAN industriels",
      "Fibre optique & sans fil",
      "Data centers",
      "Cybersécurité OT/IT",
      "Supervision & monitoring",
    ],
  },
];

export default function ExpertisesPage() {
  return (
    <>
      <PageHero
        label="Expertises"
        title="Trois domaines d'excellence industrielle"
        subtitle="Meysson Engineering concentre son expertise sur les secteurs stratégiques de l'industrie ivoirienne et ouest-africaine."
        breadcrumbs={[{ label: "Expertises" }]}
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {expertises.map((expertise, index) => (
              <div
                key={expertise.title}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                {/* Content */}
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                    <expertise.icon size={26} className="text-primary" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-text mb-4">
                    {expertise.title}
                  </h2>
                  <p className="text-gray-500 leading-relaxed mb-6">
                    {expertise.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {expertise.services.map((service) => (
                      <li key={service} className="flex items-center gap-3 text-sm text-gray-500">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                        {service}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={expertise.href}
                    className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-5 py-2.5 rounded-lg font-semibold text-sm transition-colors"
                  >
                    Découvrir ce domaine
                    <ArrowRight size={16} />
                  </Link>
                </div>

                {/* Visual */}
                <div className={`h-64 lg:h-80 rounded-2xl bg-gradient-to-br from-primary/15 to-accent/10 flex items-center justify-center border border-border ${index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                  <expertise.icon size={64} className="text-primary/30" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-muted py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionTitle
            title="Votre secteur n'est pas listé ?"
            subtitle="Nos ingénieurs ont une expérience transverse. Contactez-nous pour discuter de votre problématique spécifique."
            center
          />
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            Discutons de votre projet
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
