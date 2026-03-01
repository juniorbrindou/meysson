import { Link } from "@/i18n/navigation";
import { LucideIcon, ArrowRight } from "lucide-react";

interface CTASectionProps {
  title: string;
  subtitle?: string;
  buttonLabel: string;
  buttonHref?: string;
  icon?: LucideIcon;
  dark?: boolean; // bg-primary avec texte blanc (vs bg-white avec texte sombre)
  muted?: boolean; // bg-muted (ignoré si dark=true)
}

export default function CTASection({
  title,
  subtitle,
  buttonLabel,
  buttonHref = "/contact",
  icon: Icon,
  dark = false,
  muted = false,
}: CTASectionProps) {
  const bg = dark ? "bg-primary" : muted ? "bg-muted" : "bg-white";
  const titleClass = dark ? "text-white" : "text-gray-text";
  const subtitleClass = dark ? "text-white/75" : "text-gray-500";
  const iconClass = dark ? "text-accent" : "text-primary";
  const buttonClass = dark
    ? "bg-white text-primary hover:bg-accent hover:text-white"
    : "bg-primary hover:bg-primary-dark text-white";

  return (
    <section className={`py-16 ${bg} text-center`}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {Icon && <Icon size={40} className={`${iconClass} mx-auto mb-4`} />}
        <h2 className={`text-2xl md:text-3xl font-bold ${titleClass} mb-4`}>{title}</h2>
        {subtitle && <p className={`${subtitleClass} mb-8`}>{subtitle}</p>}
        <Link
          href={buttonHref as "/"}
          className={`inline-flex items-center gap-2 ${buttonClass} px-6 py-3 rounded-lg font-semibold transition-all duration-200`}
        >
          {buttonLabel}
          <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  );
}
