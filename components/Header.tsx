"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";

const navItems = [
  { label: "Accueil", href: "/" },
  { label: "À propos", href: "/about" },
  {
    label: "Expertises",
    href: "/expertises",
    children: [
      { label: "Ingénierie & Énergie", href: "/expertises/ingenierie-energie" },
      {
        label: "Raffinerie & Maintenance",
        href: "/expertises/raffinerie-maintenance",
      },
      {
        label: "Télécoms & Infrastructures",
        href: "/expertises/telecoms-infrastructures",
      },
    ],
  },
  { label: "Services", href: "/services" },
  { label: "Références", href: "/references" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expertisesOpen, setExpertisesOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-white font-bold text-sm">ME</span>
            </div>
            <div className="hidden sm:block">
              <span className="font-bold text-gray-text text-base leading-none block">
                Meysson
              </span>
              <span className="text-primary text-xs font-medium tracking-wide">
                Engineering
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) =>
              item.children ? (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setExpertisesOpen(true)}
                  onMouseLeave={() => setExpertisesOpen(false)}
                >
                  <button
                    className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                      isActive(item.href)
                        ? "text-primary bg-primary/5"
                        : "text-gray-600 hover:text-primary hover:bg-primary/5"
                    }`}
                  >
                    {item.label}
                    <ChevronDown size={14} className={`transition-transform ${expertisesOpen ? "rotate-180" : ""}`} />
                  </button>
                  {expertisesOpen && (
                    <div className="absolute top-full left-0 w-56 bg-white shadow-lg border border-border rounded-lg py-1 mt-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2.5 text-sm text-gray-600 hover:text-primary hover:bg-primary/5 transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                    isActive(item.href)
                      ? "text-primary bg-primary/5"
                      : "text-gray-600 hover:text-primary hover:bg-primary/5"
                  }`}
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          {/* CTA desktop */}
          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors"
            >
              Demander un devis
            </Link>
          </div>

          {/* Burger mobile */}
          <button
            className="lg:hidden p-2 rounded-md text-gray-600 hover:text-primary"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-border bg-white">
          <nav className="px-4 py-3 space-y-1">
            {navItems.map((item) => (
              <div key={item.label}>
                <Link
                  href={item.href}
                  className={`block px-3 py-2.5 text-sm font-medium rounded-md transition-colors ${
                    isActive(item.href)
                      ? "text-primary bg-primary/5"
                      : "text-gray-600 hover:text-primary hover:bg-primary/5"
                  }`}
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="pl-4 mt-1 space-y-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-3 py-2 text-sm text-gray-500 hover:text-primary rounded-md transition-colors"
                        onClick={() => setMobileOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-2">
              <Link
                href="/contact"
                className="block w-full text-center bg-primary hover:bg-primary-dark text-white px-4 py-2.5 rounded-lg text-sm font-semibold transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                Demander un devis
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
