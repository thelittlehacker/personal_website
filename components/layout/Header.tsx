"use client";

import Link from "next/link";
import { useState } from "react";
import CTAButton from "@/components/ui/CTAButton";

const primaryNav = [
  ["Home", "/"],
  ["Services", "/services"],
  ["Fractional CTO", "/fractional-cto"],
  ["Representative Work", "/representative-work"],
] as const;

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#E8E0D4] bg-[#FAF7F0]/95 backdrop-blur">
      <div className="container-wrap flex items-center justify-between gap-4 py-3">
        <Link href="/" className="flex flex-col">
          <span className="text-base font-bold tracking-wide text-[#171717] sm:text-lg" style={{ fontFamily: "var(--font-heading), sans-serif" }}>Aditya Pranav</span>
          <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#2F6F68]">Fractional CTO</span>
        </Link>
        <button
          className="rounded border border-[#c8dbd9] px-3 py-2 text-sm text-[#3a3a3a] md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          Menu
        </button>
        <nav className="hidden items-center gap-3 lg:gap-4 md:flex">
          {primaryNav.map(([label, href]) => (
            <Link key={href} href={href} className="text-[13px] text-[#3a3a3a] hover:text-[#111827]">
              {label}
            </Link>
          ))}
          <a
            href="https://www.linkedin.com/in/aditya-pranav"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="flex items-center justify-center rounded-lg border border-[#E8E0D4] p-2 text-[#2F6F68] hover:border-[#2F6F68] hover:bg-[#EEF5F4] transition-colors"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          <CTAButton href="/contact">Book a Strategy Call</CTAButton>
        </nav>
      </div>
      {open ? (
        <nav className="container-wrap flex flex-col gap-3 border-t border-[#E8E0D4] py-4 md:hidden">
          {[
            ...primaryNav,
            ["Fractional CPO", "/fractional-cpo"],
            ["Experience", "/experience"],
            ["About", "/about"],
            ["Advisory", "/advisory"],
            ["Insights", "/insights"],
          ].map(([label, href]) => (
            <Link key={href} href={href} className="text-sm text-[#3a3a3a]" onClick={() => setOpen(false)}>
              {label}
            </Link>
          ))}
          <div className="pt-1">
            <CTAButton href="/contact">Book a Strategy Call</CTAButton>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
