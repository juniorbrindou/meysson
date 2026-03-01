import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import Image from "next/image";

interface Breadcrumb {
  label: string;
  href?: string;
}

interface PageHeroProps {
  label?: string;
  title: string;
  subtitle?: string;
  breadcrumbs?: Breadcrumb[];
  image?: string; // path from /public, e.g. "/banner-about.jpg"
}

export default async function PageHero({
  label,
  title,
  subtitle,
  breadcrumbs,
  image,
}: PageHeroProps) {
  const t = await getTranslations("nav");

  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-gray-800">
      {/* Background image */}
      {image && (
        <>
          <Image
            src={image}
            alt=""
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
          {/* Dark gradient overlay — left heavier for text legibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/55 to-black/30" />
          {/* Subtle primary tint */}
          <div className="absolute inset-0 bg-primary/20" />
        </>
      )}

      {/* Fallback decorative pattern when no image */}
      {!image && (
        <div className="absolute inset-0 bg-primary">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-white -translate-x-1/2 translate-y-1/2" />
          </div>
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-6">
            <Link href="/" className="hover:text-white transition-colors">
              {t("home")}
            </Link>
            {breadcrumbs.map((crumb, i) => (
              <span key={i} className="flex items-center gap-2">
                <span>/</span>
                {crumb.href ? (
                  <Link href={crumb.href as "/"} className="hover:text-white transition-colors">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-white/90">{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}

        {label && (
          <span className="inline-block text-xs font-semibold uppercase tracking-widest mb-3 px-3 py-1 rounded-full text-accent bg-white/15 backdrop-blur-sm">
            {label}
          </span>
        )}
        <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight max-w-3xl drop-shadow-md">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 text-base md:text-lg text-white/80 max-w-2xl drop-shadow">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
