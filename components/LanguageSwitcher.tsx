"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";
import { useTransition } from "react";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const switchLocale = (next: string) => {
    startTransition(() => {
      router.replace(pathname, { locale: next });
    });
  };

  return (
    <div className="flex items-center gap-1 border border-border rounded-lg overflow-hidden text-xs font-semibold">
      <button
        onClick={() => switchLocale("fr")}
        disabled={isPending}
        className={`px-2.5 py-1.5 transition-colors ${
          locale === "fr"
            ? "bg-primary text-white"
            : "text-gray-500 hover:text-primary hover:bg-primary/5"
        }`}
      >
        FR
      </button>
      <button
        onClick={() => switchLocale("en")}
        disabled={isPending}
        className={`px-2.5 py-1.5 transition-colors ${
          locale === "en"
            ? "bg-primary text-white"
            : "text-gray-500 hover:text-primary hover:bg-primary/5"
        }`}
      >
        EN
      </button>
    </div>
  );
}
