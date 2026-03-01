"use client";

import { Link } from "@/i18n/navigation";
import { ChevronDown } from "lucide-react";
import LanguageSwitcher from "@/components/LanguageSwitcher";

type NavChild = { label: string; href: string };
type NavItem = { label: string; href: string; children?: NavChild[] };

interface MobileMenuProps {
  navItems: NavItem[];
  isActive: (href: string) => boolean;
  mobileOpen: boolean;
  mobileExpanded: string | null;
  onToggleExpanded: (label: string) => void;
  onClose: () => void;
}

export default function MobileMenu({
  navItems,
  isActive,
  mobileOpen,
  mobileExpanded,
  onToggleExpanded,
  onClose,
}: MobileMenuProps) {
  return (
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
                  onClick={() => onToggleExpanded(item.label)}
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
                        onClick={onClose}
                        className={[
                          "block px-3 py-2.5 text-sm transition-colors",
                          isActive(child.href)
                            ? "text-primary font-semibold"
                            : "text-gray-600 hover:text-primary",
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
                onClick={onClose}
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
        </div>
      </nav>
    </div>
  );
}
