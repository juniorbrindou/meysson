"use client";

import { Link } from "@/i18n/navigation";
import { ChevronDown } from "lucide-react";
import LanguageSwitcher from "@/components/LanguageSwitcher";

type NavChild = { label: string; href: string };
type NavItem = { label: string; href: string; children?: NavChild[] };

interface DesktopNavProps {
  navItems: NavItem[];
  isActive: (href: string) => boolean;
  openDropdown: string | null;
  onMouseEnter: (label: string) => void;
  onMouseLeave: () => void;
  onDropdownClose: () => void;
}

export default function DesktopNav({
  navItems,
  isActive,
  openDropdown,
  onMouseEnter,
  onMouseLeave,
  onDropdownClose,
}: DesktopNavProps) {
  return (
    <nav className="hidden lg:flex items-center">
      {navItems.map((item) =>
        item.children ? (
          <div
            key={item.label}
            className="relative"
            onMouseEnter={() => onMouseEnter(item.label)}
            onMouseLeave={onMouseLeave}
          >
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
                      onClick={onDropdownClose}
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
      <div className="pl-4 border-l border-gray-200 ml-2">
        <LanguageSwitcher />
      </div>
    </nav>
  );
}
