import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { ArrowUpRight } from "lucide-react";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    { href: "/services/web-development", label: "Web Development" },
    { href: "/services/software-development", label: "Software Development" },
    { href: "/services/e-commerce", label: "E-commerce" },
    { href: "/services/cms-solutions", label: "CMS Solutions" },
    { href: "/services/automation", label: "Automation" },
    { href: "/services/cloud-solutions", label: "Cloud Solutions" },
    { href: "/services/ai-solutions", label: "AI Solutions" },
  ];

  const company = [
    { href: "/about", label: "About Us" },
    { href: "/work", label: "Selected Work" },
    { href: "/process", label: "Our Process" },
    { href: "/technology", label: "Technology" },
    { href: "/contact", label: "Contact & Enquiries" },
  ];

  const legal = [
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Service" },
    { href: "/cookies", label: "Cookie Policy" },
  ];

  return (
    <footer className="border-t border-[#D9E1E1] bg-[#0B0D0E] text-white pt-16 pb-12">
      <Container>
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8 pb-16 border-b border-[#2A3135]">
          {/* Brand Column */}
          <div className="lg:col-span-5 pr-0 lg:pr-8">
            <Link
              href="/"
              className="inline-flex items-center gap-3 text-[24px] font-extrabold tracking-tight text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#19B5A5] rounded-[6px]"
              aria-label="SMEWSYS Home"
            >
              <Image
                src="/brand/smewsys_white_transperent_logo.png"
                alt="SMEWSYS logo"
                width={36}
                height={36}
                className="h-9 w-9 object-contain"
              />
              <span className="tracking-[-0.02em]">SMEWSYS</span>
            </Link>

            <p className="mt-4 text-[16px] font-medium text-[#19B5A5]">
              From idea to impact.
            </p>
            <p className="mt-1 text-[14px] text-[#A0ABAE]">
              Technology. Systems. Solutions.
            </p>

            <p className="mt-6 max-w-md text-[14px] leading-relaxed text-[#A0ABAE]">
              SMEWSYS helps businesses turn ideas, operational needs, and digital opportunities into practical, scalable technology solutions.
            </p>

            <div className="mt-8">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-[10px] bg-[#19B5A5] px-5 py-2.5 text-[14px] font-semibold text-[#0B0D0E] transition-all duration-150 hover:bg-[#1fd3c1] hover:shadow-md min-h-[44px]"
              >
                <span>Start a Project</span>
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>

          {/* Services Column */}
          <div className="lg:col-span-4">
            <h3 className="text-[14px] font-bold uppercase tracking-wider text-white">
              Services
            </h3>
            <ul className="mt-5 space-y-3">
              {services.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="inline-block text-[14px] text-[#A0ABAE] transition-colors duration-150 hover:text-[#19B5A5] min-h-[32px] py-1"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company & Legal Column */}
          <div className="lg:col-span-3">
            <h3 className="text-[14px] font-bold uppercase tracking-wider text-white">
              Company
            </h3>
            <ul className="mt-5 space-y-3">
              {company.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="inline-block text-[14px] text-[#A0ABAE] transition-colors duration-150 hover:text-[#19B5A5] min-h-[32px] py-1"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 text-[13px] text-[#A0ABAE] sm:flex-row">
          <p>© {currentYear} SMEWSYS. All rights reserved.</p>

          <div className="flex flex-wrap items-center gap-6">
            {legal.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="transition-colors duration-150 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
};

