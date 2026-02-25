import { Target, Eye, Award, Users, CheckCircle } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionTitle from "@/components/SectionTitle";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Pragmatisme",
    description:
      "Nous privilégions les solutions concrètes et immédiatement applicables, adaptées aux réalités du terrain industriel ivoirien.",
  },
  {
    icon: Award,
    title: "Expertise terrain",
    description:
      "Nos ingénieurs interviennent directement sur site, avec une connaissance approfondie des équipements et des contraintes opérationnelles.",
  },
  {
    icon: CheckCircle,
    title: "Engagement sur les résultats",
    description:
      "Chaque mission se conclut par des indicateurs de performance mesurables : économies réalisées, disponibilité machine, ROI.",
  },
  {
    icon: Users,
    title: "Partenariat durable",
    description:
      "Nous construisons des relations de long terme avec nos clients, en les accompagnant dans chaque étape de leur croissance industrielle.",
  },
];

const team = [
  {
    name: "Directeur Général",
    role: "Expert en ingénierie industrielle",
    experience: "30+ ans",
    background: "Ex-SIR, ENERTEAM",
  },
  {
    name: "Directeur Technique",
    role: "Spécialiste énergie & maintenance",
    experience: "25+ ans",
    background: "Industrie pétrolière & chimique",
  },
  {
    name: "Responsable Télécoms",
    role: "Expert réseaux & cybersécurité",
    experience: "20+ ans",
    background: "Infrastructures critiques",
  },
];

const engagements = [
  "Respect des normes internationales (ISO 9001, IEC)",
  "Confidentialité et protection des données clients",
  "Réactivité : premier retour sous 24h",
  "Transparence sur les méthodes et les résultats",
  "Formation et transfert de compétences inclus",
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        label="À propos"
        title="Un partenaire stratégique pour l'industrie ivoirienne"
        subtitle="Fondée par des ingénieurs chevronnés, Meysson Engineering transforme les défis techniques en performances durables."
        breadcrumbs={[{ label: "À propos" }]}
      />

      {/* HISTOIRE & MISSION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <SectionTitle
                label="Notre histoire"
                title="Nés du terrain, engagés sur les résultats"
              />
              <div className="space-y-4 text-gray-500 leading-relaxed">
                <p>
                  Meysson Engineering est née de la volonté de profils d'exception —
                  issus de sociétés comme la{" "}
                  <strong className="text-gray-text">SIR</strong> (Société Ivoirienne
                  de Raffinage) et <strong className="text-gray-text">ENERTEAM</strong>{" "}
                  — de mettre leur expertise au service des entreprises industrielles
                  ivoiriennes.
                </p>
                <p>
                  Face à un marché en pleine expansion (Plan PIRME 2025-2030,
                  découvertes pétrolières, développement des infrastructures), nous
                  avons choisi de positionner Meysson comme un acteur local de
                  référence : réactif, expert, et surtout garant de résultats concrets.
                </p>
                <p>
                  Notre approche est simple : comprendre vos enjeux, proposer des
                  solutions adaptées à votre réalité terrain, et vous accompagner
                  jusqu'à la livraison des résultats.
                </p>
              </div>
            </div>
            <div className="bg-muted rounded-2xl p-8 border border-border">
              <Eye size={32} className="text-primary mb-4" />
              <h3 className="text-xl font-bold text-gray-text mb-3">Notre vision</h3>
              <p className="text-gray-500 leading-relaxed mb-6">
                Devenir le partenaire industriel de référence en Côte d'Ivoire et
                dans la sous-région ouest-africaine, reconnu pour son excellence
                technique et son engagement sur la performance mesurable.
              </p>
              <div className="pt-6 border-t border-border">
                <p className="text-sm font-semibold text-gray-text mb-3">
                  Notre promesse :
                </p>
                <p className="text-primary font-medium italic">
                  « Transformer vos défis techniques en gains durables. »
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VALEURS */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            label="Nos valeurs"
            title="Ce qui nous distingue"
            subtitle="Quatre principes fondamentaux guident chacune de nos interventions."
            center
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-white rounded-xl border border-border p-6 text-center hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon size={22} className="text-primary" />
                </div>
                <h3 className="font-bold text-gray-text mb-2">{value.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ÉQUIPE */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            label="Notre équipe"
            title="100+ ans d'expertise cumulée"
            subtitle="Des ingénieurs et experts issus des plus grands groupes industriels, au service de votre performance."
            center
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {team.map((member) => (
              <div
                key={member.name}
                className="bg-muted rounded-xl border border-border overflow-hidden"
              >
                {/* Avatar placeholder */}
                <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-primary/30 flex items-center justify-center">
                    <Users size={32} className="text-primary" />
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-gray-text">{member.name}</h3>
                    <span className="text-xs bg-accent/15 text-primary-dark font-semibold px-2 py-0.5 rounded-full">
                      {member.experience}
                    </span>
                  </div>
                  <p className="text-primary text-sm font-medium mb-1">
                    {member.role}
                  </p>
                  <p className="text-gray-400 text-xs">{member.background}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ENGAGEMENTS */}
      <section className="py-16 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle
                label="Nos engagements"
                title="Qualité, sécurité et transparence"
                light
              />
              <ul className="space-y-3">
                {engagements.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-white/85">
                    <CheckCircle size={18} className="text-accent mt-0.5 shrink-0" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="text-center lg:text-left">
              <p className="text-white/75 text-lg mb-6">
                Prêt à démarrer votre projet avec une équipe d'experts engagés sur
                vos résultats ?
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white text-primary hover:bg-accent hover:text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200"
              >
                Contactez notre équipe
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
