"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useId } from "react";
import Link from "next/link";

/* ── Shared SVG icon helper ─────────────────────────────────────────── */
function Ico({ d, size = 18, color = "currentColor" }: { d: string; size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color}
      strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
      <path d={d} />
    </svg>
  );
}

/* ── Reusable italic annotation with SVG arrow ──────────────────────── */
export function HandwrittenNote({
  text,
  direction = "down-left",
  color = "#B46A3C",
}: {
  text: string;
  direction?: "down-left" | "down-right" | "left";
  color?: string;
}) {
  const uid = useId().replace(/:/g, "");
  const mid = `tip-${uid}`;

  const markerDef = (
    <defs>
      <marker id={mid} markerWidth="7" markerHeight="7"
        refX="5" refY="3.5" orient="auto" markerUnits="strokeWidth">
        <path d="M0,0.5 L0,6.5 L6,3.5 z" fill={color} />
      </marker>
    </defs>
  );

  const arrows: Record<typeof direction, React.ReactNode> = {
    "down-left": (
      <svg width="52" height="44" viewBox="0 0 52 44" fill="none">
        {markerDef}
        <path d="M40 4 C40 20, 20 28, 8 38" stroke={color} strokeWidth="1.6"
          strokeLinecap="round" fill="none" markerEnd={`url(#${mid})`} />
      </svg>
    ),
    "down-right": (
      <svg width="56" height="44" viewBox="0 0 56 44" fill="none">
        {markerDef}
        <path d="M6 4 C6 18, 28 28, 46 38" stroke={color} strokeWidth="1.6"
          strokeLinecap="round" fill="none" markerEnd={`url(#${mid})`} />
      </svg>
    ),
    "left": (
      <svg width="52" height="30" viewBox="0 0 52 30" fill="none">
        {markerDef}
        <path d="M44 15 C30 8, 16 8, 8 15" stroke={color} strokeWidth="1.6"
          strokeLinecap="round" fill="none" markerEnd={`url(#${mid})`} />
      </svg>
    ),
  };

  return (
    <div className="flex flex-col items-start">
      <p style={{ color, fontFamily: "Georgia, serif" }} className="text-sm italic leading-snug whitespace-pre-line">
        {text}
      </p>
      {arrows[direction]}
    </div>
  );
}

/* ── 1. Founder Tech Clarity Board ─────────────────────────────────── */
const boardItems = [
  { icon: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5", title: "Founder Goal",       note: "Build a scalable fintech platform" },
  { icon: "M3 3h7v7H3zM14 3h7v7h-7zM3 14h7v7H3zM14 14h7v7h-7z",       title: "Product Roadmap",   note: "MVP → Early Users → Scale" },
  { icon: "M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z", title: "Architecture Risk", note: "Medium — Payment flow complexity" },
  { icon: "M22 12h-4l-3 9L9 3l-3 9H2",                                  title: "Delivery Health",  note: "On track" },
  { icon: "M9 18l6-6-6-6",                                              title: "Next Decision",    note: "Decide on transaction processing architecture" },
  { icon: "M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8z", title: "Vendor Visibility", note: "3 critical vendors under review" },
  { icon: "M12 2a10 10 0 100 20A10 10 0 0012 2zM12 8v4l3 3",           title: "AI Opportunity",   note: "AI for fraud detection & automation" },
] as const;

export function FounderTechCommandCenter() {
  const [active, setActive] = useState<number | null>(null);

  return (
    /* Outer wrapper is relative so annotation can float outside the card */
    <div className="relative">
      <div className="rounded-2xl border border-[#E8E0D4] bg-white p-5 shadow-card">
        <p className="mb-4 text-center text-sm italic tracking-wide text-[#171717]"
          style={{ fontFamily: "Georgia, serif" }}>
          Founder Tech Clarity Board
        </p>
        <div className="grid grid-cols-3 gap-2">
          {boardItems.slice(0, 6).map((item, idx) => (
            <motion.div
              key={item.title}
              className={`cursor-default rounded-xl border p-3 transition-all ${
                active === idx
                  ? "border-[#2F6F68] bg-[#EEF5F4] shadow-hover"
                  : "border-[#E8E0D4] bg-[#FAF7F0]"
              }`}
              onMouseEnter={() => setActive(idx)}
              onMouseLeave={() => setActive(null)}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.04 }}
              whileHover={{ y: -2 }}
            >
              <span className={`transition-opacity ${active === idx ? "opacity-100" : "opacity-50"}`}
                style={{ color: "#2F6F68" }}>
                <Ico d={item.icon} size={15} />
              </span>
              <p className="mt-1.5 text-[11px] font-semibold text-[#171717]">{item.title}</p>
              <p className="mt-0.5 text-[10px] leading-tight text-[#5F5F5F]">{item.note}</p>
            </motion.div>
          ))}
        </div>
        {/* 7th item — full width at the bottom */}
        <motion.div
          className="mt-2 rounded-xl border border-[#E8E0D4] bg-[#FAF7F0] p-3"
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
        >
          <div className="flex items-center gap-2">
            <span style={{ color: "#2F6F68", opacity: 0.5 }}><Ico d={boardItems[6].icon} size={15} /></span>
            <p className="text-[11px] font-semibold text-[#171717]">{boardItems[6].title}</p>
          </div>
          <p className="mt-0.5 text-[10px] text-[#5F5F5F]">{boardItems[6].note}</p>
        </motion.div>
      </div>

      {/* Annotation floats outside — bottom-right of the board */}
      <div className="absolute -bottom-2 -right-2 hidden lg:block">
        {/* Text */}
        <p style={{ color: "#B46A3C", fontFamily: "Georgia, serif" }}
          className="text-right text-sm italic leading-snug pr-1">
          Clarity today.<br />Better decisions<br />tomorrow.
        </p>
        {/* Arrow: absolutely positioned so tail (top-right) sits right at the text, J-hook curves down-left, head points UP */}
        <svg
          className="absolute right-0 top-full"
          style={{ overflow: "visible" }}
          width="110" height="68" viewBox="0 0 110 68" fill="none"
        >
          <defs>
            <marker id="tip-orange" markerWidth="8" markerHeight="8"
              refX="4" refY="4" orient="auto" markerUnits="userSpaceOnUse">
              <path d="M0,0 L0,8 L8,4 z" fill="#B46A3C" />
            </marker>
          </defs>
          {/* Tail at (108,0) = top-right touching the text above → DOWN → hook LEFT → head at (12,8) pointing UP */}
          <path
            d="M108 0 C116 52, 18 64, 12 8"
            stroke="#B46A3C"
            strokeWidth="2.2"
            strokeLinecap="round"
            fill="none"
            markerEnd="url(#tip-orange)"
          />
        </svg>
      </div>
    </div>
  );
}

/* ── 2. Problem cards (horizontal, icon + title + desc) ─────────────── */
const problems = [
  { icon: "M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3M12 17h.01", title: "Unclear Scope",         desc: "Teams often lack alignment." },
  { icon: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5",     title: "Reactive Architecture", desc: "Technical debt accumulates." },
  { icon: "M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01", title: "Delivery Delay",  desc: "Missed timelines & opportunities." },
  { icon: "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z", title: "Rework",               desc: "More cost, more frustration." },
  { icon: "M22 12h-4l-3 9L9 3l-3 9H2",                   title: "Founder Uncertainty",   desc: "Hard to make confident decisions." },
] as const;

export function FounderProblemStack() {
  const [hovered, setHovered] = useState<number | null>(null);
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 lg:grid-cols-5">
      {problems.map((p, idx) => (
        <motion.div
          key={p.title}
          className={`rounded-xl border p-4 transition-all ${
            hovered === idx ? "border-[#2F6F68] bg-white shadow-hover" : "border-[#E8E0D4] bg-[#FAF7F0]"
          }`}
          onMouseEnter={() => setHovered(idx)}
          onMouseLeave={() => setHovered(null)}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: idx * 0.06 }}
          whileHover={{ y: -3 }}
        >
          <span style={{ color: "#2F6F68" }}><Ico d={p.icon} size={20} /></span>
          <p className="mt-2 text-sm font-semibold text-[#171717]">{p.title}</p>
          <p className="mt-1 text-xs leading-relaxed text-[#5F5F5F]">{p.desc}</p>
        </motion.div>
      ))}
    </div>
  );
}

/* ── 3. Bridge flow (horizontal, dark panel) ────────────────────────── */
const bridgeSteps = [
  { label: "Founder Vision",         sub: "What we want to achieve" },
  { label: "Product Scope",          sub: "What to build, what to defer" },
  { label: "Architecture Direction", sub: "How it needs to be built" },
  { label: "Engineering Execution",  sub: "Build with quality and velocity" },
  { label: "Scalable Product",       sub: "Reliable, secure and ready to grow" },
] as const;

export function VisionToExecutionFlow() {
  const [active, setActive] = useState(0);
  return (
    <div className="rounded-2xl bg-[#1C2B2A] p-6">
      <p className="label-mono mb-6 text-[#6fccc4]">Turning Founder Vision Into Buildable Product Direction</p>
      <div className="flex items-start gap-0">
        {bridgeSteps.map((step, idx) => (
          <div key={step.label} className="flex flex-1 flex-col items-center">
            <button
              onMouseEnter={() => setActive(idx)}
              className={`flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border text-xs font-bold transition-all ${
                active === idx
                  ? "border-[#6fccc4] bg-[#6fccc4] text-[#1C2B2A]"
                  : "border-[#3d5554] bg-transparent text-[#6fccc4]"
              }`}
            >
              {idx + 1}
            </button>
            {/* connector line */}
            <div className="relative mt-[18px] w-full">
              {idx < bridgeSteps.length - 1 && (
                <div className="absolute left-1/2 top-0 h-px w-full bg-[#3d5554]" />
              )}
            </div>
            <p className="mt-3 text-center text-[11px] font-semibold text-white">{step.label}</p>
            <AnimatePresence>
              {active === idx && (
                <motion.p
                  className="mt-1 text-center text-[10px] text-[#a8c5c2]"
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                >
                  {step.sub}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── 4. Service cards with icons + learn more ───────────────────────── */
const secondaryServices = [
  { icon: "M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18", title: "Architecture Review",             desc: "Evaluate systems, identify risks, and define the right technical direction.", href: "/advisory" },
  { icon: "M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 0v10", title: "Engineering Delivery Governance", desc: "Improve delivery quality, and ability across development.", href: "/fractional-cto" },
  { icon: "M3 3h7v7H3zM14 3h7v7h-7zM14 14h7v7h-7zM3 14h7v7H3z",                 title: "MVP & Product Strategy",          desc: "Define, scope, prioritize, and turn your product needs into a real roadmap.", href: "/fractional-cpo" },
  { icon: "M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75", title: "Vendor / Agency Oversight",        desc: "Evaluate, align, and manage vendors or agencies for better outcomes.", href: "/advisory" },
  { icon: "M12 2a10 10 0 100 20A10 10 0 0012 2zM12 8v4l3 3",                    title: "AI & Automation Advisory",        desc: "Identify right opportunities and apply the right approaches.", href: "/services" },
  { icon: "M9 19V6l12-3v13",                                                      title: "Fractional CPO Support",          desc: "Product strategy, roadmaps, prioritisation, user-story design to market delivery.", href: "/fractional-cpo" },
] as const;

export function ServiceGrid() {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {secondaryServices.map((s) => (
        <motion.article
          key={s.title}
          className="rounded-xl border border-[#E8E0D4] bg-white p-5 transition-all hover:border-[#2F6F68] hover:shadow-card"
          whileHover={{ y: -3 }}
        >
          <span style={{ color: "#2F6F68" }}><Ico d={s.icon} size={20} /></span>
          <h3 className="mt-3 text-sm font-semibold text-[#171717]">{s.title}</h3>
          <p className="mt-1 text-xs leading-relaxed text-[#5F5F5F]">{s.desc}</p>
          <Link href={s.href} className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-[#2F6F68] hover:underline">
            Learn more →
          </Link>
        </motion.article>
      ))}
    </div>
  );
}

/* ── 5. Advisory Themes tabs (with mini flow) ───────────────────────── */
const themes = [
  {
    label: "Fintech & Payments",
    flow: ["User", "Wallet / Payment Flow", "Gateway / API", "Ledger / Reporting"],
    focus: ["Payment architecture", "API integrations", "Reliability & security"],
    outcome: "Cleaner payment flows, reduced ambiguity, and stronger architecture visibility.",
  },
  {
    label: "Backend Systems",
    flow: ["Frontend", "APIs", "Services", "PostgreSQL / AWS"],
    focus: ["Node.js", "PostgreSQL", "AWS infrastructure"],
    outcome: "Cleaner backend direction and stronger scale-readiness.",
  },
  {
    label: "MVP Planning",
    flow: ["Idea", "Scope", "Roadmap", "Build", "Launch"],
    focus: ["MVP scope", "Prioritisation", "Feasibility review"],
    outcome: "Sharper scope and less wasted development effort.",
  },
  {
    label: "Delivery Governance",
    flow: ["Plan", "Sprint", "QA", "Release", "Review"],
    focus: ["Ownership clarity", "QA discipline", "Governance model"],
    outcome: "Better delivery visibility and execution rhythm.",
  },
  {
    label: "Vendor Oversight",
    flow: ["Founder", "Advisor Review", "Vendor Plan", "Risk Checks"],
    focus: ["Vendor validation", "Milestone tracking", "Escalation paths"],
    outcome: "Improved founder confidence and clearer accountability.",
  },
  {
    label: "AI Workflows",
    flow: ["Discovery", "Pilot", "Integration", "Adoption"],
    focus: ["Practical AI", "Workflow fit", "Adoption path"],
    outcome: "Outcome-led AI implementation without hype.",
  },
] as const;

export function RepresentativeWorkTabs() {
  const [active, setActive] = useState(0);
  const tab = themes[active];
  return (
    <div className="overflow-hidden rounded-2xl border border-[#E8E0D4] bg-white">
      {/* Tab bar */}
      <div className="flex overflow-x-auto border-b border-[#E8E0D4] bg-[#FAF7F0] px-4 pt-3">
        {themes.map((t, idx) => (
          <button
            key={t.label}
            role="tab"
            aria-selected={idx === active}
            onClick={() => setActive(idx)}
            className={`mr-0.5 whitespace-nowrap rounded-t-lg px-4 py-2 text-xs font-semibold transition-all ${
              idx === active
                ? "border border-b-0 border-[#E8E0D4] bg-white text-[#2F6F68]"
                : "text-[#5F5F5F] hover:text-[#171717]"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          className="grid gap-6 p-6 lg:grid-cols-[1.2fr_0.8fr]"
          initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
        >
          {/* Left — mini flow */}
          <div>
            <p className="label-mono mb-3 text-[#2F6F68]">Fractional CTO / Product Engineering Advisor</p>
            <div className="flex flex-wrap items-center gap-1.5">
              {tab.flow.map((node, i) => (
                <span key={node} className="flex items-center gap-1.5">
                  <span className="rounded-lg border border-[#E8E0D4] bg-[#FAF7F0] px-3 py-1.5 text-xs font-semibold text-[#171717]">
                    {node}
                  </span>
                  {i < tab.flow.length - 1 && <span className="text-[#2F6F68] text-sm">→</span>}
                </span>
              ))}
            </div>
            <p className="mt-4 text-sm text-[#5F5F5F]">{tab.outcome}</p>
          </div>
          {/* Right — focus areas */}
          <div>
            <p className="label-mono mb-3 text-[#2F6F68]">Focus Areas</p>
            <div className="space-y-2">
              {tab.focus.map((f) => (
                <div key={f} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#2F6F68]" />
                  <p className="text-sm text-[#171717]">{f}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

/* ── 6. Engagement modes (4 cards) ─────────────────────────────────── */
const engagements = [
  {
    icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z",
    title: "CTO Strategy Call",
    sub: "One focused session to review your product, tech, or roadmap challenges.",
    best: "Early-stage clarity",
    cta: "Book a Call",
    href: "/contact",
  },
  {
    icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
    title: "Technical Advisory Sprint",
    sub: "Short engagement to solve a specific problem or define better technical direction.",
    best: "Specific decisions",
    cta: "Explore Sprint",
    href: "/contact",
  },
  {
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
    title: "Fractional CTO Retainer",
    sub: "Ongoing advisory for architecture, roadmap delivery, team, and technology leadership.",
    best: "Growing products",
    cta: "Learn More",
    href: "/fractional-cto",
  },
  {
    icon: "M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 0v10",
    title: "Build Governance Support",
    sub: "Improve delivery governance, quality, and execution predictably.",
    best: "Scaling teams",
    cta: "Learn More",
    href: "/fractional-cto",
  },
] as const;

export function EngagementCards() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {engagements.map((e) => (
        <motion.div
          key={e.title}
          className="flex flex-col rounded-xl border border-[#E8E0D4] bg-white p-5"
          whileHover={{ y: -3, boxShadow: "0 8px 28px rgba(47,111,104,0.12)" }}
          transition={{ duration: 0.18 }}
        >
          <span style={{ color: "#2F6F68" }}><Ico d={e.icon} size={22} /></span>
          <h3 className="mt-3 text-sm font-semibold text-[#171717]">{e.title}</h3>
          <p className="mt-1 flex-1 text-xs leading-relaxed text-[#5F5F5F]">{e.sub}</p>
          <p className="mt-3 text-[10px] text-[#5F5F5F]">
            Best for: <span className="font-semibold text-[#2F6F68]">{e.best}</span>
          </p>
          <Link
            href={e.href}
            className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-[#2F6F68] hover:underline"
          >
            {e.cta} →
          </Link>
        </motion.div>
      ))}
    </div>
  );
}

/* ── 7. Numbered process steps ─────────────────────────────────────── */
const processSteps = [
  { n: "1", icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z", title: "Understand",  sub: "Step deep into your product, tech, team, and business context." },
  { n: "2", icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2",  title: "Review",     sub: "Assess product health, tech stack, team, and delivery maturity." },
  { n: "3", icon: "M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12",    title: "Prioritize", sub: "Identify which tech risk and after its priorities." },
  { n: "4", icon: "M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7", title: "Roadmap", sub: "Create a clear technical and product roadmap with milestones." },
  { n: "5", icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z", title: "Govern Execution", sub: "Clarify who owns which decisions, remove obstacles, and ensure outcomes." },
] as const;

export function FounderAdvisoryTimeline() {
  const [active, setActive] = useState<number | null>(null);
  return (
    <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-5">
      {processSteps.map((s, idx) => (
        <motion.div
          key={s.n}
          className={`rounded-xl border p-5 transition-all ${
            active === idx ? "border-[#2F6F68] bg-[#EEF5F4] shadow-hover" : "border-[#E8E0D4] bg-white"
          }`}
          onMouseEnter={() => setActive(idx)}
          onMouseLeave={() => setActive(null)}
          whileHover={{ y: -3 }}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: idx * 0.06 }}
        >
          <div className="flex items-center gap-2">
            <span
              className="flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold text-white"
              style={{ background: active === idx ? "#2F6F68" : "#3d5554" }}
            >
              {s.n}
            </span>
            <span style={{ color: active === idx ? "#2F6F68" : "#9ca3af" }}>
              <Ico d={s.icon} size={16} />
            </span>
          </div>
          <p className="mt-3 text-sm font-semibold text-[#171717]">{s.title}</p>
          <p className="mt-1 text-xs leading-relaxed text-[#5F5F5F]">{s.sub}</p>
        </motion.div>
      ))}
    </div>
  );
}

/* ── 8. Final CTA block ─────────────────────────────────────────────── */
const decisionChecklist = [
  "Product Roadmap", "Architecture Review", "Delivery Health",
  "Vendor Status", "AI Opportunities",
] as const;

export function FinalCTAVisualBlock() {
  return (
    <div className="overflow-hidden rounded-2xl bg-[#1C2B2A]">
      <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
        {/* Left */}
        <div className="relative p-8 lg:p-10">
          <motion.div
            aria-hidden
            className="pointer-events-none absolute -left-10 -top-10 h-40 w-40 rounded-full border border-[#3d5554]"
            animate={{ rotate: 360 }} transition={{ duration: 24, ease: "linear", repeat: Infinity }}
          />
          <p className="label-mono text-[#6fccc4]">Ready to talk</p>
          <h3 className="mt-3 max-w-md text-2xl font-bold text-white sm:text-3xl">
            Need CTO-Level Clarity Before Your Next Product Decision?
          </h3>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-[#a8c5c2]">
            Let&apos;s review your product, architecture, delivery risks, or technical roadmap.
          </p>
          <div className="mt-5">
            <HandwrittenNote text={"Let's find the right\nproduct, the right way."} direction="down-right" color="#6fccc4" />
          </div>
        </div>
        {/* Right — decision checklist panel */}
        <div className="border-t border-[#3d5554] p-8 lg:border-l lg:border-t-0">
          <p className="label-mono mb-4 text-[#6fccc4]">Founder Decision Panel</p>
          <div className="space-y-2">
            {decisionChecklist.map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-lg border border-[#3d5554] bg-[#243331] px-3 py-2">
                <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#6fccc4]" />
                <p className="text-sm text-[#d1e8e6]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
