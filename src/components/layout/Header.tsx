"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";
import { MobileMenu } from "@/components/layout/MobileMenu";

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/services", label: "Services" },
    { href: "/work", label: "Work" },
    { href: "/process", label: "Process" },
    { href: "/about", label: "About" },
    { href: "/technology", label: "Technology" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-200 ${
          isScrolled
            ? "border-b border-[#D9E1E1] bg-white/95 backdrop-blur-md shadow-[0_1px_3px_rgba(11,13,14,0.03)]"
            : "border-b border-transparent bg-white"
        }`}
      >
        <Container>
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-3 font-sans text-[22px] font-extrabold tracking-tight text-[#0B0D0E] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#19B5A5] focus-visible:ring-offset-2 rounded-[6px]"
              aria-label="SMEWSYS Home"
            >
              <Image
                src="/brand/smewsys_balck_transperent_logo.png"
                alt="SMEWSYS logo mark"
                width={36}
                height={36}
                priority
                className="h-9 w-9 object-contain"
              />
              <span className="tracking-[-0.02em]">SMEWSYS</span>
            </Link>

            {/* Desktop Navigation */}
            <nav
              className="hidden items-center gap-1 md:gap-2 lg:flex"
              aria-label="Main navigation"
            >
              {navLinks.map((link) => {
                const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative px-3.5 py-2 text-[15px] font-medium transition-colors duration-150 min-h-[44px] flex items-center rounded-[8px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#19B5A5] ${
                      isActive
                        ? "font-semibold text-[#19B5A5]"
                        : "text-[#0B0D0E] hover:text-[#19B5A5]"
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-1.5 left-3.5 right-3.5 h-0.5 rounded-full bg-[#19B5A5]" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Right CTAs */}
            <div className="flex items-center gap-3">
              {/* Primary CTA */}
              <div className="hidden sm:block">
                <Button href="/contact" variant="primary" size="md">
                  Start a Project
                </Button>
              </div>

              {/* Mobile hamburger button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="flex h-11 w-11 items-center justify-center rounded-[8px] border border-[#D9E1E1] text-[#0B0D0E] transition-colors hover:bg-[#F4F7F7] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#19B5A5] lg:hidden"
                aria-label="Open navigation menu"
                aria-expanded={mobileMenuOpen}
              >
                <Menu className="h-5 w-5" />
              </button>
            </div>
          </div>
        </Container>
      </header>

      {/* Mobile Menu Drawer */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        navLinks={navLinks}
      />
    </>
  );
};

