import { CheckCircle } from "lucide-react";

interface BenefitsListProps {
  items: string[];
  light?: boolean; // true = texte blanc (sur fond sombre), false = texte gris (sur fond clair)
}

export default function BenefitsList({ items, light = false }: BenefitsListProps) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className={`flex items-start gap-3 ${light ? "text-white/85" : "text-gray-500"}`}>
          <CheckCircle size={16} className="text-accent mt-0.5 shrink-0" />
          <span className="text-sm">{item}</span>
        </li>
      ))}
    </ul>
  );
}
