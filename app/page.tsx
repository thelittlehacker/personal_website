import type { Metadata } from "next";
import Script from "next/script";
import Image from "next/image";
import Link from "next/link";
import CTAButton from "@/components/ui/CTAButton";
import { createPageMetadata } from "@/lib/metadata";
import {
  HandwrittenNote,
  FounderTechCommandCenter,
  FounderProblemStack,
  VisionToExecutionFlow,
  ServiceGrid,
  RepresentativeWorkTabs,
  EngagementCards,
  FounderAdvisoryTimeline,
  FinalCTAVisualBlock,
} from "@/components/visual/HomeVisuals";

export const metadata: Metadata = createPageMetadata({
  title: "Aditya Pranav | Fractional CTO for Founder-Led Products",
  description:
    "Fractional CTO and Product Engineering Advisory for founders. CTO-level guidance across architecture, roadmap, delivery, vendors, and AI adoption.",
  path: "/",
});

const chips = ["Architecture", "Delivery Governance", "MVP Planning", "AI Advisory"] as const;

const credibility = [
  { label: "VP Engineering Experience",   icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
  { label: "Startup Founder Background",  icon: "M13 10V3L4 14h7v7l9-11h-7z" },
  { label: "Node.js / PostgreSQL / AWS",  icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" },
  { label: "Fintech & Payments Domain",   icon: "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" },
  { label: "Enterprise-Scale Delivery",   icon: "M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 0v10" },
  { label: "AI-Assisted Engineering",     icon: "M12 2a10 10 0 100 20A10 10 0 0012 2zM12 8v4l3 3" },
] as const;

export default function HomePage() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Aditya Pranav",
    url: "https://adityapranav.in",
    jobTitle: "Fractional CTO and Product Engineering Advisor",
    sameAs: ["https://www.linkedin.com/in/aditya-pranav"],
  };

  return (
    <>
      <Script id="person-schema" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden border-b border-[#E8E0D4] bg-[#FAF7F0]">
        {/* ambient photo backdrop — right side, behind the text column */}
        <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[26%] lg:block">
          <Image src="/photo-speaking.png" alt="" fill className="object-cover object-top opacity-30" priority />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#FAF7F0]/20 to-[#FAF7F0]" />
        </div>

        <div className="container-wrap relative flex flex-col-reverse gap-10 py-14 lg:grid lg:grid-cols-[0.9fr_1fr] lg:items-start lg:py-20">
          {/* Board: second visually on mobile (flex-col-reverse), first column on lg grid */}
          <FounderTechCommandCenter />

          {/* Headline first on mobile, second column on lg (photo shows through here on desktop) */}
          <div>
            <p className="label-mono">Fractional CTO · Product Engineering · AI Advisory</p>
            <h1 className="mt-4 text-[#171717]">
              Fractional CTO for<br />
              Founders Building<br />
              Scalable Digital Products
            </h1>
            <p className="mt-5 max-w-[54ch] text-[17px] leading-relaxed text-[#5F5F5F]">
              CTO-level guidance across architecture, roadmap, engineering execution, vendors, and AI adoption — without hiring full-time too early.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <CTAButton href="/contact">Book a Strategy Call</CTAButton>
              <CTAButton href="/fractional-cto" secondary>Review My Tech Roadmap</CTAButton>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {chips.map((c) => (
                <span key={c} className="mobile-chip">{c}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── THE REALITY ──────────────────────────────────────────── */}
      <section className="container-wrap mobile-section-pad">
        <div className="mb-8">
          <p className="label-mono mb-2">The Reality</p>
          <h2>Small Product Decisions<br className="hidden sm:block" /> Can Become Big Tech Problems</h2>
          <p className="mt-3 max-w-[60ch] text-[#5F5F5F]">
            Many founders have ideas, developers, or agencies. What they lack is a
            CTO-level judgment to connect product priorities, architecture decisions,
            and execution discipline.
          </p>
        </div>
        <FounderProblemStack />
      </section>

      {/* ── MY ROLE (dark panel) ─────────────────────────────────── */}
      <section className="border-y border-[#E8E0D4] bg-[#FAF7F0]">
        <div className="container-wrap py-14 lg:py-16">
          <div className="mb-8">
            <p className="label-mono mb-2">My Role</p>
            <h2>Turning Founder Vision Into<br className="hidden sm:block" /> Buildable Product Direction</h2>
            {/* Annotation sits below the heading, left-aligned, arrow points down-right toward the flow */}
            <div className="mt-4">
              <HandwrittenNote
                text={"I help you connect the dots\nbetween vision and direction."}
                direction="down-right"
              />
            </div>
          </div>
          <VisionToExecutionFlow />
        </div>
      </section>

      {/* ── WHERE I HELP ─────────────────────────────────────────── */}
      <section className="container-wrap mobile-section-pad">
        <p className="label-mono mb-6">Where I Help</p>
        <div className="mb-5 grid gap-4 lg:grid-cols-[0.7fr_1.3fr]">
          {/* Primary Fractional CTO card */}
          <div className="flex flex-col rounded-2xl bg-[#1C2B2A] p-6 text-white">
            <p className="label-mono text-[#6fccc4]">Primary</p>
            <h3 className="mt-2 text-2xl font-bold text-white">Fractional CTO</h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-[#a8c5c2]">
              End-to-end technology leadership across strategy, architecture, delivery, and team guidance.
            </p>
            <Link href="/fractional-cto"
              className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-[#6fccc4] hover:underline">
              Learn more →
            </Link>
          </div>
          {/* Secondary grid */}
          <ServiceGrid />
        </div>
      </section>

      {/* ── PROBLEMS I COMMONLY HELP WITH ────────────────────────── */}
      <section className="border-y border-[#E8E0D4] bg-[#FAF7F0]">
        <div className="container-wrap py-14 lg:py-16">
          <h2 className="mb-6">Problems I Commonly Help With</h2>
          <RepresentativeWorkTabs />
        </div>
      </section>

      {/* ── HOW WE CAN WORK TOGETHER ─────────────────────────────── */}
      <section className="container-wrap mobile-section-pad">
        <h2 className="mb-6">How We Can Work Together</h2>
        <EngagementCards />
      </section>

      {/* ── HOW I WORK WITH FOUNDERS ─────────────────────────────── */}
      <section className="border-y border-[#E8E0D4] bg-[#FAF7F0]">
        <div className="container-wrap py-14 lg:py-16">
          <div className="mb-8">
            <h2>How I Work With Founders</h2>
            {/* Annotation below heading, left-aligned, arrow points right toward the steps */}
            <div className="mt-4">
              <HandwrittenNote
                text={"A practical collaborative\napproach."}
                direction="down-right"
              />
            </div>
          </div>
          <FounderAdvisoryTimeline />
        </div>
      </section>

      {/* ── BUILT FROM REAL EXPERIENCE ───────────────────────────── */}
      <section className="container-wrap mobile-section-pad">
        <p className="label-mono mb-5">Built From Real Experience</p>
        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {credibility.map(({ label, icon }) => (
            <div key={label}
              className="flex items-center gap-3 rounded-xl border border-[#E8E0D4] bg-white px-4 py-3 transition-all hover:border-[#2F6F68] hover:bg-[#EEF5F4]">
              <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="#2F6F68"
                strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
                <path d={icon} />
              </svg>
              <p className="text-sm font-semibold text-[#171717]">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────────────────────── */}
      <section className="container-wrap py-14 lg:py-16">
        <FinalCTAVisualBlock />
        <div className="mt-6 flex justify-center">
          <CTAButton href="/contact">Book a Strategy Call</CTAButton>
        </div>
      </section>
    </>
  );
}
