"use client";

import { useState, useRef } from "react";
import { usePathname, Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import DesktopNav from "@/components/header/DesktopNav";
import MobileMenu from "@/components/header/MobileMenu";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const pathname = usePathname();
  const t = useTranslations("nav");
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const navItems = [
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

  const handleToggleMobileExpanded = (label: string) => {
    setMobileExpanded(mobileExpanded === label ? null : label);
  };

  const handleMobileClose = () => {
    setMobileOpen(false);
    setMobileExpanded(null);
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-[0_2px_16px_0_rgba(0,0,0,0.10)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[70px]">

          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0">
            <Image
              src="/logo-text.png"
              alt="Meysson Engineering"
              width={180}
              height={36}
              className="h-9 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop navigation */}
          <DesktopNav
            navItems={navItems}
            isActive={isActive}
            openDropdown={openDropdown}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onDropdownClose={() => setOpenDropdown(null)}
          />

          {/* Burger mobile */}
          <button
            type="button"
            className="lg:hidden p-2 text-gray-600 hover:text-primary transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile navigation */}
      <MobileMenu
        navItems={navItems}
        isActive={isActive}
        mobileOpen={mobileOpen}
        mobileExpanded={mobileExpanded}
        onToggleExpanded={handleToggleMobileExpanded}
        onClose={handleMobileClose}
      />
    </header>
  );
}
