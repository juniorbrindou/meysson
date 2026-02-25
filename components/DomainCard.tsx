import Link from "next/link";
import { LucideIcon, ArrowRight } from "lucide-react";

interface DomainCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
  tags?: string[];
}

export default function DomainCard({
  icon: Icon,
  title,
  description,
  href,
  tags = [],
}: DomainCardProps) {
  return (
    <div className="group relative bg-white rounded-2xl border border-border overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      {/* Top accent */}
      <div className="h-1 bg-primary group-hover:bg-accent transition-colors duration-300" />

      <div className="p-7">
        <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
          <Icon size={26} className="text-primary" />
        </div>
        <h3 className="font-bold text-gray-text text-xl mb-3">{title}</h3>
        <p className="text-gray-500 text-sm leading-relaxed mb-5">{description}</p>

        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-xs bg-muted text-gray-500 px-2.5 py-1 rounded-full border border-border"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <Link
          href={href}
          className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all duration-200"
        >
          En savoir plus
          <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
}
