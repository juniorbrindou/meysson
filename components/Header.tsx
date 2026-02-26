"use client";

import { useState, useRef } from "react";
import { usePathname, Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { Menu, X, ChevronDown } from "lucide-react";
import LanguageSwitcher from "./LanguageSwitcher";

type NavChild = { label: string; href: string };
type NavItem = {
  label: string;
  href: string;
  children?: NavChild[];
};

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const pathname = usePathname();
  const t = useTranslations("nav");
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const navItems: NavItem[] = [
    { label: t("home"), href: "/" },
    { label: t("about"), href: "/about" },
    {
      label: t("expertises"),
      href: "/expertises",
      children: [
        { label: t("expertise_energie"), href: "/expertises/ingenierie-energie" },
        { label: t("expertise_raffinerie"), href: "/expertises/raffinerie-maintenance" },
        { label: t("expertise_telecoms"), href: "/expertises/telecoms-infrastructures" },
      ],
    },
    { label: t("services"), href: "/services" },
    { label: t("references"), href: "/references" },
    // { label: t("blog"), href: "/blog" },
    { label: t("contact"), href: "/contact" },
  ];

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const handleMouseEnter = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenDropdown(label);
  };

  const handleMouseLeave = () => {
    closeTimer.current = setTimeout(() => setOpenDropdown(null), 150);
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-[0_1px_8px_0_rgba(0,0,0,0.06)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[70px]">

          {/* ── Logo ── */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center shadow-sm">
              <span className="text-white font-extrabold text-sm tracking-tight">ME</span>
            </div>
            <div className="hidden sm:flex flex-col leading-none">
              <span className="font-bold text-gray-800 text-[15px] tracking-tight">Meysson</span>
              <span className="text-primary text-[11px] font-semibold tracking-widest uppercase">Engineering</span>
            </div>
          </Link>

          {/* ── Desktop nav ── */}
          <nav className="hidden lg:flex items-center">
            {navItems.map((item) =>
              item.children ? (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(item.label)}
                  onMouseLeave={handleMouseLeave}
                >
                  {/* Trigger */}
                  <button
                    type="button"
                    className={[
                      "flex items-center gap-1 px-4 py-6 text-[13.5px] font-semibold transition-colors duration-150 border-b-2",
                      isActive(item.href)
                        ? "text-primary border-primary"
                        : "text-gray-700 border-transparent hover:text-primary",
                    ].join(" ")}
                  >
                    {item.label}
                    <ChevronDown
                      size={13}
                      strokeWidth={2.5}
                      className={`mt-0.5 transition-transform duration-200 ${openDropdown === item.label ? "rotate-180" : ""}`}
                    />
                  </button>

                  {/* Dropdown panel */}
                  <div
                    className={[
                      "absolute top-full left-0 min-w-[220px] bg-white border-t-[3px] border-primary shadow-xl",
                      "transition-all duration-200 origin-top",
                      openDropdown === item.label
                        ? "opacity-100 translate-y-0 pointer-events-auto"
                        : "opacity-0 -translate-y-1 pointer-events-none",
                    ].join(" ")}
                  >
                    <ul className="py-2">
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href as "/"}
                            onClick={() => setOpenDropdown(null)}
                            className={[
                              "block px-6 py-3 text-[13.5px] font-medium transition-colors duration-150",
                              isActive(child.href)
                                ? "text-primary"
                                : "text-gray-600 hover:text-primary",
                            ].join(" ")}
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href as "/"}
                  className={[
                    "px-4 py-6 text-[13.5px] font-semibold transition-colors duration-150 border-b-2 inline-block",
                    isActive(item.href)
                      ? "text-primary border-primary"
                      : "text-gray-700 border-transparent hover:text-primary",
                  ].join(" ")}
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          {/* ── Right side: Language + CTA ── */}
          <div className="hidden lg:flex items-center gap-4">
            <LanguageSwitcher />
            <Link
              href="/contact"
              className="bg-primary hover:bg-primary-dark text-white text-[13px] font-bold px-5 py-2.5 transition-colors duration-150 shadow-sm"
            >
              {t("cta")}
            </Link>
          </div>

          {/* ── Burger mobile ── */}
          <button
            className="lg:hidden p-2 text-gray-600 hover:text-primary transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* ── Mobile menu ── */}
      <div
        className={[
          "lg:hidden border-t border-gray-100 bg-white overflow-hidden transition-all duration-300",
          mobileOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0",
        ].join(" ")}
      >
        <nav className="px-4 py-3 space-y-0.5">
          {navItems.map((item) => (
            <div key={item.label}>
              {item.children ? (
                <>
                  <button
                    type="button"
                    onClick={() =>
                      setMobileExpanded(mobileExpanded === item.label ? null : item.label)
                    }
                    className={[
                      "w-full flex items-center justify-between px-3 py-3 text-sm font-semibold transition-colors",
                      isActive(item.href) ? "text-primary" : "text-gray-700 hover:text-primary",
                    ].join(" ")}
                  >
                    {item.label}
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-200 ${mobileExpanded === item.label ? "rotate-180" : ""}`}
                    />
                  </button>
                  <div
                    className={[
                      "overflow-hidden transition-all duration-200",
                      mobileExpanded === item.label ? "max-h-60" : "max-h-0",
                    ].join(" ")}
                  >
                    <div className="pl-4 border-l-2 border-primary/20 ml-3 mb-1 space-y-0.5">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href as "/"}
                          onClick={() => { setMobileOpen(false); setMobileExpanded(null); }}
                          className={[
                            "block px-3 py-2.5 text-sm transition-colors",
                            isActive(child.href) ? "text-primary font-semibold" : "text-gray-600 hover:text-primary",
                          ].join(" ")}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <Link
                  href={item.href as "/"}
                  onClick={() => setMobileOpen(false)}
                  className={[
                    "block px-3 py-3 text-sm font-semibold transition-colors",
                    isActive(item.href) ? "text-primary" : "text-gray-700 hover:text-primary",
                  ].join(" ")}
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}

          <div className="flex items-center gap-3 pt-3 pb-2 border-t border-gray-100 mt-2">
            <LanguageSwitcher />
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="flex-1 text-center bg-primary hover:bg-primary-dark text-white px-4 py-2.5 text-sm font-bold transition-colors"
            >
              {t("cta")}
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
