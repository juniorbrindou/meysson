"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";
import { useTransition, useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

function FlagFR({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 30 20" className={className} aria-hidden="true">
      <rect width="10" height="20" fill="#002395" />
      <rect x="10" width="10" height="20" fill="#fff" />
      <rect x="20" width="10" height="20" fill="#ED2939" />
    </svg>
  );
}

function FlagEN({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 30" className={className} aria-hidden="true">
      <rect width="60" height="30" fill="#012169" />
      <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
      <path d="M0,0 L60,30 M60,0 L0,30" stroke="#C8102E" strokeWidth="4" />
      <path d="M30,0 V30 M0,15 H60" stroke="#fff" strokeWidth="10" />
      <path d="M30,0 V30 M0,15 H60" stroke="#C8102E" strokeWidth="6" />
    </svg>
  );
}

const LOCALES = [
  { code: "fr", label: "Français", Flag: FlagFR },
  { code: "en", label: "English",  Flag: FlagEN },
];

export default function LanguageSwitcher() {
  const locale  = useLocale();
  const router  = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const current = LOCALES.find((l) => l.code === locale) ?? LOCALES[0];

  const switchLocale = (next: string) => {
    setOpen(false);
    startTransition(() => {
      router.replace(pathname, { locale: next });
    });
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        disabled={isPending}
        className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-border text-xs font-semibold text-gray-700 hover:border-primary/40 hover:text-primary transition-colors duration-150 bg-white"
      >
        <current.Flag className="w-5 h-auto rounded-[2px] shadow-sm" />
        <span>{current.code.toUpperCase()}</span>
        <ChevronDown
          size={12}
          strokeWidth={2.5}
          className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-1.5 min-w-[130px] bg-white border border-border shadow-lg rounded-lg overflow-hidden z-50">
          {LOCALES.map(({ code, label, Flag }) => (
            <button
              key={code}
              type="button"
              onClick={() => switchLocale(code)}
              className={[
                "w-full flex items-center gap-2.5 px-3 py-2.5 text-xs font-semibold transition-colors duration-150",
                code === locale
                  ? "bg-primary/5 text-primary"
                  : "text-gray-600 hover:bg-gray-50 hover:text-primary",
              ].join(" ")}
            >
              <Flag className="w-5 h-auto rounded-[2px] shadow-sm" />
              <span>{label}</span>
              {code === locale && (
                <span className="ml-auto w-1.5 h-1.5 rounded-full bg-primary" />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
