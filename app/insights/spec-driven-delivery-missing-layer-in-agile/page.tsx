import type { Metadata } from "next";
import Link from "next/link";
import { createPageMetadata } from "@/lib/metadata";
import CTAButton from "@/components/ui/CTAButton";
import ArticleAuthor from "@/components/sections/ArticleAuthor";

export const metadata: Metadata = createPageMetadata({
  title: "Spec-Driven Delivery: The Missing Layer in Agile Teams | Aditya Pranav",
  description:
    "Agile delivery breaks when requirements are ambiguous. Spec-driven delivery adds clarity with lightweight specs, acceptance criteria, and governance — especially for AI-assisted engineering.",
  path: "/insights/spec-driven-delivery-missing-layer-in-agile",
});

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is spec-driven development?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Spec-driven development is an approach where teams write a clear, testable spec before implementation. The spec typically includes user outcome, workflow, acceptance criteria, edge cases, and system boundaries so engineers and AI coding tools can implement and review reliably.",
      },
    },
    {
      "@type": "Question",
      name: "Is spec-driven development the same as waterfall?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Spec-driven development is not waterfall. It can be lightweight, iterative, and fully compatible with agile planning. The difference is that the team captures requirements and acceptance criteria explicitly before writing code.",
      },
    },
    {
      "@type": "Question",
      name: "Why does agile fail in many startups?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Agile fails when teams treat it as permission to build without clarity. Missing business rules, vague workflows, and undefined acceptance criteria create rework and technical debt. Agile works best when the problem and constraints are clearly understood.",
      },
    },
    {
      "@type": "Question",
      name: "When should teams use spec-driven delivery?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Teams should use spec-driven delivery when they are building critical flows (payments, auth, permissions), integrating with external systems, making database or API changes, or using AI coding agents where precise requirements reduce rework and governance risk.",
      },
    },
    {
      "@type": "Question",
      name: "What should a good spec include?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A good spec includes the user outcome, workflow steps, data requirements, business rules, edge cases, non-goals, acceptance criteria, technical boundaries, rollout plan, and observability requirements.",
      },
    },
    {
      "@type": "Question",
      name: "How do specs help AI-assisted development?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI coding tools generate better output when the workflow and definition of done are explicit. Specs provide the context and constraints needed for agents to implement correctly and for humans to review quickly against acceptance criteria.",
      },
    },
    {
      "@type": "Question",
      name: "Do specs slow teams down?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Good specs speed teams up by preventing rework. A lightweight one- or two-page spec can replace days of back-and-forth, reduce edge case misses, and make review and testing more predictable — especially when AI accelerates implementation volume.",
      },
    },
    {
      "@type": "Question",
      name: "How can founders introduce spec-driven delivery without bureaucracy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Use a simple spec template, keep it short, and require it only for changes that affect workflows, data, or system boundaries. Make the spec the basis for acceptance criteria and review — not paperwork for its own sake.",
      },
    },
  ],
};

const specVsAgile = [
  {
    label: "Primary goal",
    agile: "Adapt quickly as learning changes priorities",
    specDriven: "Reduce ambiguity before implementation starts",
  },
  {
    label: "Failure mode",
    agile: "Scope churn + unclear workflows create rework loops",
    specDriven: "Over-specification slows exploration if applied blindly",
  },
  {
    label: "Best for",
    agile: "Exploration, early product discovery, uncertain problem spaces",
    specDriven: "Execution, critical workflows, system changes, integrations",
  },
  {
    label: "Definition of done",
    agile: "Often implicit or sprint-level",
    specDriven: "Explicit acceptance criteria and edge cases",
  },
  {
    label: "AI tooling fit",
    agile: "Works if tasks are well-scoped and review is strict",
    specDriven: "High fit: specs become prompts and review checklists",
  },
  {
    label: "Governance needs",
    agile: "High when delivery pressure is high",
    specDriven: "Built-in: spec + review gates reduce drift",
  },
];

const whenToSpec = [
  "Any change that touches payments, billing, refunds, or money movement",
  "Authentication, roles, permissions, or access control",
  "Database schema changes, migrations, or new entities",
  "Public API changes and integration contracts",
  "Sync workflows, retries, idempotency, background jobs",
  "Multi-step user journeys where edge cases define quality",
  "Performance-sensitive flows or scaling-risk changes",
  "Any work delegated to AI coding agents across multiple files",
];

const onePageSpec = [
  { title: "User outcome", hint: "What should the user be able to do, and why?" },
  { title: "Workflow", hint: "Happy path + alternate paths + start/end points" },
  { title: "Business rules", hint: "Eligibility, limits, states, pricing, approvals" },
  { title: "Data + integrations", hint: "Tables, fields, APIs, third parties" },
  { title: "Edge cases", hint: "Failures, retries, duplicates, partial states" },
  { title: "Non-goals", hint: "What is explicitly out of scope for this version" },
  { title: "Acceptance criteria", hint: "Testable definition of done" },
  { title: "Technical boundaries", hint: "What can be changed, what must not" },
  { title: "Rollout plan", hint: "Feature flags, migration plan, rollback" },
  { title: "Observability", hint: "Logs/metrics needed to validate behavior" },
];

const governanceGates = [
  {
    title: "Spec required for system changes",
    body: "If a change touches workflows, data models, APIs, or integrations, it needs a short spec. This prevents teams from shipping ambiguity into production.",
  },
  {
    title: "Acceptance criteria is the review checklist",
    body: "Review is not opinion-based. The PR is checked against the spec’s acceptance criteria and edge cases.",
  },
  {
    title: "Human owner for every module",
    body: "AI tools do not create ownership. A named engineer owns each area of the system and signs off on changes that affect it.",
  },
  {
    title: "Architecture boundaries for AI tasks",
    body: "AI agents can implement inside defined boundaries. Crossing layers or adding new dependencies requires explicit approval.",
  },
  {
    title: "Testing is non-negotiable",
    body: "AI can generate tests quickly. Use that to raise the floor: critical flows need coverage before merge, regardless of speed pressure.",
  },
];

export default function ArticlePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <article className="container-wrap max-w-3xl py-14 lg:py-20">
        <nav className="mb-6 flex items-center gap-2 text-xs text-[#5F5F5F]">
          <Link href="/" className="hover:text-[#2F6F68]">Home</Link>
          <span>/</span>
          <Link href="/insights" className="hover:text-[#2F6F68]">Insights</Link>
          <span>/</span>
          <span className="text-[#171717]">Spec-Driven Delivery vs Agile</span>
        </nav>

        <div className="mb-4 flex flex-wrap items-center gap-2">
          <span className="pin-label inline-block">Product Engineering</span>
          <span className="inline-flex rounded-full border border-[#B46A3C]/30 bg-[#FFF2E8] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#8A4A25]">
            New
          </span>
        </div>

        <h1 className="text-3xl font-bold leading-tight text-[#171717] lg:text-4xl">
          Spec-Driven Delivery Is the Missing Layer in Agile Teams
        </h1>
        <p className="mt-3 text-sm text-[#5F5F5F]">
          By Aditya Pranav · Fractional CTO &amp; Product Engineering Advisor
        </p>
        <div className="mt-2 h-px w-16 bg-[#2F6F68]" />

        <p className="mt-8 text-[17px] leading-relaxed text-[#3a3a3a]">
          Agile delivery became the default because it matched reality. Priorities change. Customer feedback arrives mid-sprint. Founders learn the product by shipping.
        </p>
        <p className="mt-4 text-[17px] leading-relaxed text-[#3a3a3a]">
          But many teams confuse agile with ambiguity. They start implementation before the workflow is understood, before edge cases are listed, and before anyone can articulate a testable definition of done. The result is not agility. It is rework.
        </p>
        <p className="mt-4 text-[17px] leading-relaxed text-[#3a3a3a]">
          Spec-driven delivery is the missing layer. Not heavy documents. Not waterfall. Just enough structured clarity so humans and AI coding agents can build the right thing — and reviewers can tell whether it is done.
        </p>

        <h2 className="mt-12 text-2xl font-bold text-[#171717]">What “Spec-Driven” Actually Means (and What It Does Not)</h2>
        <p className="mt-4 text-[17px] leading-relaxed text-[#3a3a3a]">
          Spec-driven delivery means writing a short spec before implementation. The spec is a contract between product intent and engineering execution: the user outcome, the workflow, the rules, the boundaries, the edge cases, and the acceptance criteria.
        </p>
        <p className="mt-4 text-[17px] leading-relaxed text-[#3a3a3a]">
          It does not mean you stop iterating. It means you stop shipping ambiguity. Agile decides what to build next. Spec-driven delivery makes sure what you build next is clear enough to execute and review.
        </p>

        <h2 className="mt-12 text-2xl font-bold text-[#171717]">Spec-Driven Delivery vs Agile: Where Each Wins</h2>
        <p className="mt-4 text-[17px] leading-relaxed text-[#3a3a3a]">
          This is not a religion. It is a tool choice. Use agile to discover the right direction. Use specs to execute reliably when the cost of rework is high.
        </p>
        <div className="mt-6 overflow-x-auto rounded-xl border border-[#E8E0D4]">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-[#E8E0D4] bg-[#FAF7F0]">
                <th className="px-4 py-3 text-left font-semibold text-[#171717]">Dimension</th>
                <th className="px-4 py-3 text-left font-semibold text-[#2F6F68]">Agile</th>
                <th className="px-4 py-3 text-left font-semibold text-[#B46A3C]">Spec-driven delivery</th>
              </tr>
            </thead>
            <tbody>
              {specVsAgile.map((row, i) => (
                <tr
                  key={row.label}
                  className={`border-b border-[#E8E0D4] ${i % 2 === 0 ? "bg-white" : "bg-[#FAF7F0]/40"}`}
                >
                  <td className="px-4 py-3 font-semibold text-[#171717]">{row.label}</td>
                  <td className="px-4 py-3 text-[#3a3a3a]">{row.agile}</td>
                  <td className="px-4 py-3 text-[#5F5F5F]">{row.specDriven}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="mt-12 text-2xl font-bold text-[#171717]">Why AI Tools Make Specs More Important, Not Less</h2>
        <p className="mt-4 text-[17px] leading-relaxed text-[#3a3a3a]">
          AI agents accelerate implementation volume. That sounds like pure upside until you realize the same acceleration applies to rework when the requirement was unclear.
        </p>
        <p className="mt-4 text-[17px] leading-relaxed text-[#3a3a3a]">
          A developer with unclear requirements slows down and asks questions. An AI agent often generates a complete-looking feature from partial information. You get more code sooner — but not necessarily the right outcome.
        </p>
        <p className="mt-4 text-[17px] leading-relaxed text-[#3a3a3a]">
          Specs are the alignment layer: they become both the prompt and the review checklist. They let you move fast without losing control.
        </p>

        <h2 className="mt-12 text-2xl font-bold text-[#171717]">When You Must Write a Spec</h2>
        <p className="mt-4 text-[17px] leading-relaxed text-[#3a3a3a]">
          You do not need a spec for every small UI tweak. You need a spec when the cost of misunderstanding is high.
        </p>
        <div className="mt-5 space-y-2">
          {whenToSpec.map((check, index) => (
            <div
              key={check}
              className="flex items-start gap-3 rounded-lg border border-[#E8E0D4] bg-white px-4 py-3"
            >
              <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded border-2 border-[#2F6F68] text-[10px] font-bold text-[#2F6F68]">
                {index + 1}
              </span>
              <p className="text-sm text-[#3a3a3a]">{check}</p>
            </div>
          ))}
        </div>

        <h2 className="mt-12 text-2xl font-bold text-[#171717]">A Practical One-Page Spec Template (Founder-Friendly)</h2>
        <p className="mt-4 text-[17px] leading-relaxed text-[#3a3a3a]">
          The goal is not a perfect document. The goal is a build-ready spec that a human engineer can review and an AI agent can implement against.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {onePageSpec.map((item) => (
            <div key={item.title} className="rounded-xl border border-[#E8E0D4] bg-white p-5">
              <h3 className="text-base font-bold text-[#171717]">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#5F5F5F]">{item.hint}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 rounded-xl border border-[#E8E0D4] bg-[#FAF7F0] p-5">
          <p className="font-semibold text-[#171717]">Example acceptance criteria (simple)</p>
          <p className="mt-2 text-[16px] leading-relaxed text-[#3a3a3a]">
            “When a paid user submits a payout request, the system validates eligibility, creates a pending payout record, triggers the provider transfer, and updates the record to succeeded or failed. Duplicate requests are idempotent. Unpaid users are blocked with a clear error.”
          </p>
        </div>

        <h2 className="mt-12 text-2xl font-bold text-[#171717]">Governance: How to Combine Specs + Agile Without Bureaucracy</h2>
        <p className="mt-4 text-[17px] leading-relaxed text-[#3a3a3a]">
          The point is not documentation. The point is control. Spec-driven delivery adds a few gates that prevent teams from shipping confusion into code.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {governanceGates.map((item) => (
            <div key={item.title} className="rounded-xl border border-[#E8E0D4] bg-white p-5">
              <h3 className="text-base font-bold text-[#171717]">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#5F5F5F]">{item.body}</p>
            </div>
          ))}
        </div>

        <h2 className="mt-12 text-2xl font-bold text-[#171717]">Final Recommendation</h2>
        <p className="mt-4 text-[17px] leading-relaxed text-[#3a3a3a]">
          Agile helps you learn. Specs help you execute. If your team is shipping critical workflows, integrating systems, or using AI agents to accelerate implementation, spec-driven delivery is not optional. It is the layer that keeps speed aligned with correctness.
        </p>
        <p className="mt-4 text-[17px] leading-relaxed text-[#3a3a3a]">
          Keep specs lightweight. Require them for system-impacting changes. Use acceptance criteria as the review checklist. Assign human ownership. Then let AI help you implement faster inside a structure you control.
        </p>

        <h2 className="mt-12 text-2xl font-bold text-[#171717]">Frequently Asked Questions</h2>
        <div className="mt-6 space-y-4">
          {faqSchema.mainEntity.map((item) => (
            <details key={item.name} className="group rounded-xl border border-[#E8E0D4] bg-white">
              <summary className="flex cursor-pointer items-center justify-between px-5 py-4 font-semibold text-[#171717] marker:hidden">
                {item.name}
                <span className="ml-4 flex-shrink-0 text-[#2F6F68] transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="border-t border-[#E8E0D4] px-5 py-4 text-sm leading-relaxed text-[#5F5F5F]">
                {item.acceptedAnswer.text}
              </p>
            </details>
          ))}
        </div>

        <div className="mt-10 rounded-xl border border-[#E8E0D4] bg-[#FAF7F0] p-5">
          <p className="text-sm font-semibold text-[#171717]">Related Reading</p>
          <div className="mt-3 space-y-2 text-sm">
            <Link href="/insights/ai-coding-agents-product-requirements" className="flex items-center gap-2 text-[#2F6F68] hover:underline">
              &rarr; Why AI Coding Agents Need Product Requirements Before They Write Code
            </Link>
            <Link href="/insights/human-engineers-ai-engineers-new-sdlc" className="flex items-center gap-2 text-[#2F6F68] hover:underline">
              &rarr; AI Agents Are Reshaping the SDLC (And Why Governance Matters)
            </Link>
            <Link href="/insights/ai-generated-code-engineering-governance" className="flex items-center gap-2 text-[#2F6F68] hover:underline">
              &rarr; AI-Generated Code Is Not the Problem. Lack of Engineering Governance Is.
            </Link>
            <Link href="/contact" className="flex items-center gap-2 text-[#2F6F68] hover:underline">
              &rarr; Book a Strategy Call
            </Link>
          </div>
        </div>

        <ArticleAuthor />

        <div className="mt-12 rounded-2xl bg-[#1C2B2A] p-8 text-center">
          <p className="label-mono text-[#6fccc4]">Ready to Talk</p>
          <h3 className="mt-3 text-xl font-bold text-white lg:text-2xl">
            Need a Spec-Driven Delivery System for Your Team?
          </h3>
          <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-[#a8c5c2]">
            Book a strategy call to set up lightweight specs, acceptance criteria, review gates, and AI-ready governance so your team ships faster without rework.
          </p>
          <div className="mt-6 flex justify-center">
            <CTAButton href="/contact">Book a Strategy Call</CTAButton>
          </div>
        </div>
      </article>
    </>
  );
}

