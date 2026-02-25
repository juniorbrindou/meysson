import Link from "next/link";
import {
  Zap,
  Settings,
  Wifi,
  Search,
  Wrench,
  Shield,
  BarChart2,
  FlaskConical,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import SectionTitle from "@/components/SectionTitle";
import ServiceCard from "@/components/ServiceCard";
import DomainCard from "@/components/DomainCard";

const stats = [
  { value: "100+", label: "Ans d'expertise cumulée" },
  { value: "3", label: "Domaines d'excellence" },
  { value: "50+", label: "Projets industriels livrés" },
];

const domains = [
  {
    icon: Zap,
    title: "Ingénierie & Énergie",
    description:
      "Conception de systèmes industriels, montage d'usines et optimisation énergétique. Nous intégrons l'IoT industriel pour une performance mesurable et durable.",
    href: "/expertises/ingenierie-energie",
    tags: ["Audit énergétique", "IoT industriel", "Automatisation"],
  },
  {
    icon: Wrench,
    title: "Raffinerie & Maintenance",
    description:
      "Maintenance préventive et curative sur sites pétrochimiques critiques. Échangeurs, colonnes, fours, réservoirs — nous garantissons la continuité d'exploitation.",
    href: "/expertises/raffinerie-maintenance",
    tags: ["Maintenance préventive", "Froid industriel", "Pétrochimie"],
  },
  {
    icon: Wifi,
    title: "Télécoms & Infrastructures",
    description:
      "Conception de réseaux industriels (LAN/WAN, fibre optique), data centers et cybersécurité des systèmes vitaux pour une connectivité résiliente.",
    href: "/expertises/telecoms-infrastructures",
    tags: ["Réseaux LAN/WAN", "Data centers", "Cybersécurité OT"],
  },
];

const services = [
  {
    icon: Search,
    title: "Audit énergétique",
    description:
      "Diagnostic complet de vos flux énergétiques pour identifier les gisements d'économies et optimiser votre consommation.",
    benefit: "Réduction des coûts énergétiques",
  },
  {
    icon: FlaskConical,
    title: "Ingénierie de projet",
    description:
      "Études avancées pour la conception d'installations industrielles sur-mesure, de la faisabilité à la mise en service.",
    benefit: "Maîtrise des coûts et délais",
  },
  {
    icon: BarChart2,
    title: "Digitalisation & IoT",
    description:
      "Déploiement de systèmes SCADA, capteurs IIoT et plateformes d'analyse pour piloter vos performances en temps réel.",
    benefit: "Maintenance prédictive et productivité accrue",
  },
  {
    icon: Wrench,
    title: "Maintenance industrielle",
    description:
      "Plans de maintenance planifiée et interventions correctives pour maximiser la disponibilité de vos équipements critiques.",
    benefit: "Zéro arrêt imprévu",
  },
  {
    icon: Zap,
    title: "Électricité HT/BT",
    description:
      "Conception et réalisation d'installations électriques haute et basse tension, postes de transformation et audits de conformité.",
    benefit: "Sécurité électrique et conformité normative",
  },
  {
    icon: Shield,
    title: "Cybersécurité industrielle",
    description:
      "Protection des réseaux OT, automates et data centers contre les cybermenaces, avec redondance et plan de continuité.",
    benefit: "Infrastructures critiques sécurisées",
  },
];

const blogPosts = [
  {
    category: "Énergie",
    date: "15 Jan. 2025",
    title: "L'audit énergétique : premier pas vers la performance industrielle",
    excerpt:
      "Comment identifier et réduire jusqu'à 30% de vos coûts énergétiques grâce à une démarche structurée d'audit.",
  },
  {
    category: "Industrie 4.0",
    date: "02 Fév. 2025",
    title: "IIoT et maintenance prédictive : l'usine du futur est là",
    excerpt:
      "Les capteurs connectés et l'intelligence artificielle transforment la maintenance industrielle en Afrique.",
  },
  {
    category: "Télécoms",
    date: "20 Fév. 2025",
    title: "Cybersécurité OT : protéger les systèmes de contrôle industriels",
    excerpt:
      "Les réseaux de contrôle-commande (SCADA) sont aujourd'hui des cibles privilégiées des cyberattaques.",
  },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="bg-primary relative overflow-hidden">
        {/* Décorations */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-white translate-x-1/3 -translate-y-1/3" />
          <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-white -translate-x-1/2 translate-y-1/2" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-3xl">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full text-accent bg-white/15 mb-6">
              Ingénierie industrielle · Côte d'Ivoire
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 animate-slide-up">
              Sécurisons et optimisons votre{" "}
              <span className="text-accent">performance industrielle</span>
            </h1>
            <p className="text-white/80 text-lg md:text-xl mb-10 animate-slide-up-d1">
              Plus qu'un prestataire, Meysson Engineering est votre partenaire
              stratégique. Nos experts cumulent plus de{" "}
              <strong className="text-white">100 ans d'expérience</strong> en
              ingénierie, maintenance et télécoms industrielles.
            </p>
            <div className="flex flex-wrap gap-4 animate-slide-up-d2">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 bg-white text-primary hover:bg-accent hover:text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200"
              >
                Nos services
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border-2 border-white/40 hover:border-white text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200"
              >
                Nous contacter
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-primary-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-3 gap-6 divide-x divide-white/20">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center px-4">
                <p className="text-3xl md:text-4xl font-bold text-white">
                  {stat.value}
                </p>
                <p className="text-white/60 text-xs md:text-sm mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DOMAINES */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            label="Nos domaines"
            title="Trois piliers d'excellence industrielle"
            subtitle="Meysson Engineering intervient sur les secteurs stratégiques de l'industrie ivoirienne avec une expertise terrain reconnue."
            center
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {domains.map((domain) => (
              <DomainCard key={domain.title} {...domain} />
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            label="Nos services"
            title="Des solutions techniques pour chaque enjeu"
            subtitle="Chaque service est conçu pour générer un retour sur investissement concret et mesurable."
            center
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Voir tous nos services
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* BANDEAU CONFIANCE */}
      <section className="bg-primary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-xl">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Un partenaire qui s'engage sur les résultats
              </h2>
              <ul className="space-y-2">
                {[
                  "100+ ans d'expertise cumulée par nos fondateurs",
                  "Anciens experts de SIR, ENERTEAM et grands groupes industriels",
                  "Intervention en Côte d'Ivoire et dans la sous-région",
                  "Approche terrain orientée performance mesurable",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-white/85 text-sm">
                    <CheckCircle size={16} className="text-accent mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="shrink-0">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 bg-white text-primary hover:bg-accent hover:text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200"
              >
                Découvrir Meysson
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* BLOG */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            label="Actualités"
            title="Veille & expertise industrielle"
            subtitle="Nos ingénieurs partagent leur vision des enjeux techniques et énergétiques."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <Link
                key={post.title}
                href="/blog"
                className="group bg-white rounded-xl border border-border overflow-hidden hover:shadow-md transition-shadow"
              >
                {/* Image placeholder */}
                <div className="h-40 bg-gradient-to-br from-primary/20 to-accent/10 relative">
                  <span className="absolute top-3 left-3 bg-primary text-white text-xs font-semibold px-2.5 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
                <div className="p-5">
                  <p className="text-xs text-gray-400 mb-2">{post.date}</p>
                  <h3 className="font-semibold text-gray-text text-sm leading-snug mb-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-500 text-xs leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 border-2 border-primary text-primary hover:bg-primary hover:text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200"
            >
              Voir toutes les actualités
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Settings size={40} className="text-primary mx-auto mb-4" />
          <h2 className="text-2xl md:text-3xl font-bold text-gray-text mb-4">
            Un projet industriel ? Parlons-en.
          </h2>
          <p className="text-gray-500 mb-8">
            Diagnostic gratuit, étude de faisabilité ou demande de devis — notre
            équipe d'experts vous répond sous 48h.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-3.5 rounded-lg font-semibold transition-colors text-base"
          >
            Contactez-nous
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
