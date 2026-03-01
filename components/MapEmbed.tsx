"use client";

import { ExternalLink } from "lucide-react";

interface MapEmbedProps {
  /** Latitude du point central */
  lat: number;
  /** Longitude du point central */
  lng: number;
  /** Rayon de la bbox en degrés (défaut : 0.018 ≈ ~2 km) */
  radius?: number;
  /** Libellé du lien "Ouvrir dans Google Maps" */
  openLabel: string;
  /** Adresse lisible pour le title de l'iframe (accessibilité) */
  address: string;
}

export default function MapEmbed({
  lat,
  lng,
  radius = 0.018,
  openLabel,
  address,
}: MapEmbedProps) {
  const bbox = [lng - radius, lat - radius, lng + radius, lat + radius]
    .map((v) => v.toFixed(6))
    .join("%2C");

  const src = `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${lat}%2C${lng}`;
  const googleUrl = `https://maps.google.com/maps?q=${lat},${lng}`;

  return (
    <div className="rounded-xl overflow-hidden border border-border shadow-sm">
      <iframe
        src={src}
        title={address}
        width="100%"
        height="220"
        loading="lazy"
        className="block w-full"
        style={{ border: 0 }}
      />
      <a
        href={googleUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 py-2.5 bg-muted hover:bg-border text-primary text-xs font-semibold transition-colors"
      >
        <ExternalLink size={13} />
        {openLabel}
      </a>
    </div>
  );
}
