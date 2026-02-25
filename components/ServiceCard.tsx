import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  benefit?: string;
}

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  benefit,
}: ServiceCardProps) {
  return (
    <div className="group bg-white rounded-xl border border-border p-6 hover:border-primary hover:shadow-lg transition-all duration-300">
      <div className="w-12 h-12 rounded-lg bg-primary/10 group-hover:bg-primary flex items-center justify-center mb-4 transition-colors duration-300">
        <Icon
          size={22}
          className="text-primary group-hover:text-white transition-colors duration-300"
        />
      </div>
      <h3 className="font-semibold text-gray-text text-base mb-2">{title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
      {benefit && (
        <div className="mt-4 pt-4 border-t border-border">
          <p className="text-xs font-medium text-primary">
            ✓ {benefit}
          </p>
        </div>
      )}
    </div>
  );
}
