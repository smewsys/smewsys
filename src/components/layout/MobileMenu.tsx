"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: { href: string; label: string }[];
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  navLinks,
}) => {
  const pathname = usePathname();

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col bg-white lg:hidden"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation Menu"
    >
      {/* Top bar inside drawer */}
      <div className="flex items-center justify-between border-b border-[#D9E1E1] px-6 py-4">
        <Link
          href="/"
          onClick={onClose}
          className="flex items-center gap-2.5 text-[20px] font-bold tracking-tight text-[#0B0D0E]"
        >
          <Image
            src="/brand/smewsys_balck_transperent_logo.png"
            alt="SMEWSYS logo"
            width={32}
            height={32}
            className="h-8 w-8 object-contain"
          />
          <span>SMEWSYS</span>
        </Link>
        <button
          type="button"
          onClick={onClose}
          className="flex h-11 w-11 items-center justify-center rounded-[8px] text-[#0B0D0E] transition-colors hover:bg-[#F4F7F7] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#19B5A5]"
          aria-label="Close menu"
        >
          <X className="h-6 w-6" />
        </button>
      </div>

      {/* Navigation Links */}
      <div className="flex-1 overflow-y-auto px-6 py-8">
        <nav className="flex flex-col space-y-2">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={onClose}
                className={`flex items-center justify-between rounded-[10px] px-4 py-3.5 text-[18px] font-medium transition-colors ${
                  isActive
                    ? "bg-[#F4F7F7] font-semibold text-[#19B5A5]"
                    : "text-[#0B0D0E] hover:bg-[#F4F7F7] hover:text-[#19B5A5]"
                }`}
              >
                <span>{link.label}</span>
                <ArrowRight className="h-4 w-4 opacity-50" />
              </Link>
            );
          })}
        </nav>

        {/* Brand statement */}
        <div className="mt-8 border-t border-[#D9E1E1] pt-6">
          <p className="text-[14px] font-medium text-[#5F686B]">
            From idea to impact.
          </p>
          <p className="mt-1 text-[13px] text-[#5F686B]">
            Technology. Systems. Solutions.
          </p>
        </div>
      </div>

      {/* Primary Action at bottom */}
      <div className="border-t border-[#D9E1E1] p-6">
        <Button
          href="/contact"
          variant="primary"
          size="lg"
          className="w-full"
          onClick={onClose}
        >
          Start a Project
        </Button>
      </div>
    </div>
  );
};

