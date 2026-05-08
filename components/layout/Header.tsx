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
